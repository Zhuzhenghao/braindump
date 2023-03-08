# Braindump

本仓库存放前端领域知识积累，学习周期为 2023.4 ~ 2024.3。

## 小组情况

| 小组   | 组长   | 成员               | 目标 |
| ------ | ------ | ------------------ | ---- |
| 微前端 | 李艳   | 姚若尘 张雯        |      |
| 组件库 | 张鹏胜 | 尹朋 胡锦霞 范弘琰 |      |
| 工具库 | 孙国斌 | 于莉 朱正浩 张茜   |      |

<!-- 列出每个小组详细的年度规划，什么时间点，谁完成什么事情 -->

### 微前端

### 组件库

### 工具库

- [ ] 选主题
- [ ] 明确时间点，输出什么内容
- [ ] 每个人整理三次的分享主题

1. Kubernetes

   - 用 protoc 编译 go 文件成 ts 文件，包含类型和 远程调用方法
   - 编写 YAML 部署微前端，结合 GitOps
   - 常用资源对象的实战
   - Docker

     - 基础命令
     - 构建配置
     - Docker 进阶 exec、log、docker compose
     - Install vim inside Ningx container

2. CICD **孙国斌**

   - Jenkins
     - 安装 Jenkins
     - Jenkins 配置
     - 搭建 Jenkins 集群
   - CI/CD 管道
   - 配置 Jenkins 自动化构建
   - Jenkins 对接 gitlab
   - 构建的 shell 脚本

3. Git **朱正浩**

   - 分支规范
   - 提交规范 github issue/feature/bug Templates
   - 版本管理、tag、Release Notes
   - Git 常用命令：git rebase、reset、diff、stash
   - GitOps
   - git actions - 基于 k8s-ui，实现 PR 的 lint 检查、单元测试、e2e 测试通过后，PR 才可以被合并
   - [Gitlab Job](https://gitlab.daocloud.cn/help/ci/examples/index)，配置 Gitlab Jobs 完成自动化构建部署

4. Nginx

   - 静态资源代理
   - 反向代理
   - 负载均衡
   - 高级配置 - websocket、http2
   - Linux 命令

## 周会计划

每个组需要完成 12 次周会分享，分享时间 30min 以上。

| -     | #   | 日期  | 主题 | 主讲人 |
| ----- | --- | ----- | ---- | ------ |
| - [ ] | 1   | 4.4   |      |        |
| - [ ] | 2   | 4.11  |      |        |
| - [ ] | 3   | 4.18  |      |        |
| 👨‍👩‍👧‍👦    | 4   | 4.25  |      |        |
| - [ ] | 5   | 5.9   |      |        |
| - [ ] | 6   | 5.16  |      |        |
| - [ ] | 7   | 5.23  |      |        |
| 👨‍👩‍👧‍👦    | 8   | 5.30  |      |        |
| - [ ] | 9   | 6.6   |      |        |
| - [ ] | 10  | 6.13  |      |        |
| - [ ] | 11  | 6.20  |      |        |
| 👨‍👩‍👧‍👦    | 12  | 6.27  |      |        |
| - [ ] | 13  | 7.4   |      |        |
| - [ ] | 14  | 7.11  |      |        |
| - [ ] | 15  | 7.18  |      |        |
| 👨‍👩‍👧‍👦    | 16  | 7.25  |      |        |
| - [ ] | 17  | 8.1   |      |        |
| - [ ] | 18  | 8.8   |      |        |
| - [ ] | 19  | 8.15  |      |        |
| - [ ] | 20  | 8.22  |      |        |
| 👨‍👩‍👧‍👦    | 21  | 8.29  |      |        |
| - [ ] | 22  | 9.5   |      |        |
| - [ ] | 23  | 9.12  |      |        |
| - [ ] | 24  | 9.19  |      |        |
| 👨‍👩‍👧‍👦    | 25  | 9.26  |      |        |
| - [ ] | 26  | 10.10 |      |        |
| - [ ] | 27  | 10.17 |      |        |
| - [ ] | 28  | 10.24 |      |        |
| 👨‍👩‍👧‍👦    | 29  | 10.31 |      |        |
| - [ ] | 30  | 11.7  |      |        |
| - [ ] | 31  | 11.14 |      |        |
| - [ ] | 32  | 11.21 |      |        |
| 👨‍👩‍👧‍👦    | 33  | 11.28 |      |        |
| - [ ] | 34  | 12.5  |      |        |
| - [ ] | 35  | 12.12 |      |        |
| - [ ] | 36  | 12.19 |      |        |
| 👨‍👩‍👧‍👦    | 37  | 12.26 |      |        |
| - [ ] | 38  | 1.2   |      |        |
| - [ ] | 39  | 1.9   |      |        |
| - [ ] | 40  | 1.16  |      |        |
| - [ ] | 41  | 1.23  |      |        |
| 👨‍👩‍👧‍👦    | 42  | 1.30  |      |        |
| - [ ] | 43  | 2.6   |      |        |
| - [ ] | 44  | 2.13  |      |        |
| - [ ] | 45  | 2.20  |      |        |
| 👨‍👩‍👧‍👦    | 46  | 2.27  |      |        |
| - [ ] | 47  | 3.5   |      |        |
| - [ ] | 48  | 3.12  |      |        |
| - [ ] | 49  | 3.19  |      |        |
| 👨‍👩‍👧‍👦    | 50  | 3.26  |      |        |

## 一些约定

- 所有文档均使用 [Markdown](https://www.markdownguide.org/) 的格式
- 如果所研究的主题有 Demo 演示，需在对应 `samples` 的目录下，创建子目录存放 Demo 代码
