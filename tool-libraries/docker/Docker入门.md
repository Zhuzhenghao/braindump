# Docker 入门

## Docker 基本概念

- 镜像（Image）

镜像是一个可执行的包，它包含了应用程序运行所需的所有文件、依赖项、配置等

- 容器（Container） 

容器是从 Docker 镜像创建的一个运行实例。每个容器都是独立的、隔离的运行环境，可以在其中运行应用程序和服务。容器可以随时启动、停止、暂停或删除。

- 仓库（Repository）

一个 Docker Registry 可以包含多个 Repository；每个仓库可以包含多个标签（Tag）；每个标签对应一个镜像。

## 基本操作

- 拉取镜像

```bash
docker pull xxx
```

- 运行

```bash
docker run xxx
```

- 列出镜像

```bash
docker image ls
# docker images
```

虚悬镜像：没有仓库名和标签的镜像，列表里显示均为`<none>`。由于新旧镜像同名，旧镜像名称被取消，从而出现仓库名、标签均为`<none>`的镜像。
一般来说虚悬镜像已经失去了存在的价值，可以随意删除。

```bash
docker image ls -f dangling=true # 列出虚悬镜像
docker image prune # 删除虚悬镜像
```

- 删除镜像

```bash
docker image rm xxx
```

## Dockerfile 常用指令

- COPY 复制文件

`COPY <源路径>... <目标路径>`

`COPY`指令将从构建上下文目录中`<源路径>`的文件/目录复制到新的一层镜像内的`<目标路径>`位置。
`<源路径>`可以是多个，甚至可以是通配符；如果源路径为文件夹，复制的时候不是直接复制该文件夹，而是将文件夹中的内容复制到目标路径。
`<目标路径>`可以是容器内的绝对路径，也可以是相对于工作目录的相对路径（工作目录可以用`WORKDIR`指令来指定）。目标路径不需要事先创建，如果目录不存在会在复制文件前先行创建缺失目录。

- ADD 支持自动解压的复制文件

如果`<源路径>`为一个 tar 压缩文件的话，压缩格式为`gzip`,`bzip2`以及`xz` 的情况下，ADD 指令将会自动解压缩这个压缩文件到`<目标路径>`去。

所有的文件复制都使用`COPY`指令，尽在需要自动解压得场合使用`ADD`。

- CMD 容器启动命令

用于指定默认的容器主进程的启动命令

```bash
# 以前台形式启动nginx服务
CMD ["nginx", "-g", "daemon off;"]
```

- ENTRYPOINT 入口点

目的和`CMD`一样都是在指定容器启动程序及参数。`ENTRYPOINT`可以被`docker run`的参数`--entrypoint`来指定。

区别：使用`CMD`不能`docker run`的时候加参数（替代原本的`CMD`）；`ENTRYPOINT`支持在`docker run`的时候加参数（会作为参数传给`ENTRYPOINT` 中定义的命令）。

- ENV 设置环境变量

格式有两种：

1. `ENV <key> <value>`
2. `ENV <key1>=<value1> <key2>=<value2>...`

- ARG 构建参数

格式：`ARG <参数名>[=<默认值>]`

Dockerfile 中的 ARG 指令是定义参数名称，以及定义其默认值。该默认值可以在构建命令`docker build`中用`--build-arg <参数名>=<值>` 来覆盖。

## 前端的 dockerfile 一般怎么写

1. 选择基础镜像：首先需要选择一个合适的基础镜像，通常选择一个包含 Node.js 环境的 Linux 操作系统镜像作为基础镜像
2. 设置工作目录：通过 WORKDIR 指令设置工作目录，一般设置为 /app 目录。
3. 复制应用程序文件：通过 COPY 指令将本地应用程序文件拷贝到镜像中的工作目录中。
4. 安装依赖：运行 npm install 命令安装应用程序所需的依赖。
5. 打包应用程序：运行 npm run build 命令打包应用程序，生成编译后的文件。
6. 运行应用程序：通过 CMD 指令设置运行应用程序的命令

## docker buildx 打包镜像

`docker buildx`是一个`Docker CLI`插件，用于使用多个构建器来构建多个平台的 Docker 镜像。它支持在同一个 Dockerfile 中构建多个平台的镜像，以便在不同的平台上运行容器时更方便。

常用参数：

`--builder`：指定一个构建器（构建多个平台的镜像需要使用支持多架构的构建器）；
`--platform`：指定镜像需要支持的目标平台；
`--load`：`--output=type=docker`的简写，将构建结果加载到本地`docker images`列表中；
`--push`：`--output=type=registry`的简写，将构建结果推送到远程仓库;
