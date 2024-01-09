---
author: '孙国斌'
title: '搭建 Jenkins 平台'
date: 2023-07-13
description:
tags: ['Jenkins']
thumbnail: https://picsum.photos/id/120/800/400
---

## 1、Jenkins 镜像

[hub.docker.com](https://hub.docker.com) 官方的镜像仓库

![image-20230504110307150](images/jenkins/image-20230504110307150.png)

![image-20230504110654095](images/jenkins/image-20230504110654095.png)

```shell
docker pull jenkins/jenkins
```

## 2、安装

docker 部署 Jenkins

```shell
docker run --name jenkins_test -d -p 8081:8080 -p 50001:50000 jenkins/kenkins`
```

- 8080 端口：Jenkins 服务对外暴露的地址

- 50000 端口：slave 节点与 Jenkins 的通讯端口

- 非 docker 部署 Jenkins 需要保留 8080 端口和 50000 端口

![image-20230504151624956](images/jenkins/image-20230504151624956.png)

## 3、配置 Jenkins

- 解锁

  - 查询容器 ID：`docker ps -a`
  - 进入容器：`docker exec -it ${CONTAINER ID} bash`
  - 查看密码：`cat /var/jenkins_home/secrets/initialAdminPassword`

    ![image-20230504152748511](images/jenkins/image-20230504152748511.png)

    ![image-20230504155652098](images/jenkins/image-20230504155652098.png)

- 初始化

  ![image-20230504170125847](images/jenkins/image-20230504170125847.png)

  ![image-20230504165857604](images/jenkins/image-20230504165857604.png)

  ![image-20230504170537280](images/jenkins/image-20230504170537280.png)

- 插件（Dashboard > 系统管理 > 插件管理 > Available plugins）

  - Publish Over SSH：连接 Linux 机器，远程传输文件及执行 Shell 命令

    `Dashboard > 系统管理 > 系统配置 > Publish over SSH > SSH Servers`

    ![image-20230504180023644](images/jenkins/image-20230504180023644.png)

    配置完成可以点击右下角的 `Test Configuration` 测试连接，左下角出现 `Success` 则说明配置成功，点击保存

    ![image-20230504180201905](images/jenkins/image-20230504180201905.png)

  - Node：前端环境

    `Dashboard > 系统管理 > 全局工具配置 > NodeJS 安装`

    ![image-20230505091217733](images/jenkins/image-20230505091217733.png)

## 创建任务

## 问题记录

1. 服务器内镜像获取失败

   解决方案：将公有镜像推送到私有仓库

   ```shell
   docker tag  要导入的公网镜像地址   私有镜像库地址/镜像名称:镜像tag
   docker push  私有镜像库地址/镜像名称:镜像tag
   ```

2. Can not write to /var/jenkins_home/copy_reference_file.log. Wrong volume permissions?

   `touch: cannot touch '/var/jenkins_home/copy_reference_file.log': Permission denied`

   原因：主机文件目录映射到 Jerkins 容器内，容器内的/var/jenkins_home 权限是 jenkins 用户，对主机文件夹没有权限

   解决方案：使用容器数据卷

3. is not a valid repository/tag: invalid reference format

   原因：使用 dockerfile 构建时有不同的步骤，低版本 docker 无法执行

   解决方案：升级

4. Jenkins 使用 docker 构建镜像

   解决方案：使用 docker-build-step 插件并且在 docker 本机开启 tcp 端口同时开放防火墙

   ```shell
   vi /lib/systemd/system/docker.service
   #ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
   ExecStart=/usr/bin/dockerd -H unix:///var/run/docker.sock -H tcp://0.0.0.0:${tcp链接端口}
   systemctl daemon-reload
   systemctl restart docker
   # 检查端口是否被监听
   ss -tnl | grep ${tcp链接端口}

   # 查看防火墙是否开放端口
   firewall-cmd --zone=public --query-port=${tcp链接端口}/tcp

   # 防火墙重启
   firewall-cmd --reload
   ```

5. 拉取代码失败

   解决方案：加代理
