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

Q1:

- [ ] 张雯: 微前端的优缺点（文章）
- [ ] 姚若尘: 微前端的方案（文章）
- [ ] 李艳: 微前端应用间通信（文章+Demo）

Q2.

- [ ] 张雯: 微前端 qiankun 实战——搭建基座应用（文章+Demo）
- [ ] 姚若尘: qiankun 预加载与缓存（文章+Demo）
- [ ] 李艳: 微前端路由管理（文章+Demo）

Q3.

- [ ] 姚若尘: qiankun 源码分析——沙箱隔离（Demo）
- [ ] 张雯: [qiankun](https://qiankun.umijs.org/) 微前端应用加载实现原理（Demo）
- [ ] 李艳: 微前端的权限管理（Demo）

Q4.

- [ ] 姚若尘: 微前端框架之 single-spa（文章+Demo）
- [ ] 张雯: 微前端 [micro-app](https://micro-zoe.github.io/micro-app/) 实战（Demo）
- [ ] 李艳: 微前端的性能优化（文章+Demo）

### 组件库

1. 张鹏胜
   - [ ] 组件库单元测试实战
   - [ ] 组件库 e2e 测试
   - [ ] 组件库自动化（Gitlab Action）发布 NPM
   - [ ] 组件库全局可配置化
2. 尹朋
   - [ ] 件库文档的编写、支持预览
   - [ ] 组件库版本管理与多版本切换预览
   - [ ] 支持全量引入 也要按需引用；组件库编译生成 umd 和 esm 模块的组件代码 并上传至 NPM
   - [ ] CSS-in-JS
3. 范弘琰
   - [ ] 组件库主题的切换
     - 主题可定制化
     - 生成主题 CSS
   - [ ] 组件库国际化
   - [ ] 组件库 CSS 相关
     - 工具函数
     - SASS
     - color-mix()
     - color-contrast()
   - [ ] tailwindcss
   

### 工具库

1. Kubernetes **于莉**

   - [ ] Kubernetes 部分资源对象实战
     - Pod
     - Deployment
     - Service
     - ConfigMap
     - \* 编写 YAML 部署微前端，结合 GitOps
   - [ ] Docker
     - Docker Buildx (可指定平台的枚举值)
     - Docker 进阶
     - exec、attach、log、docker compose
     - Install vim inside Ningx container
   - [ ] What's gRPC?
     - gRPC 封装前端网络请求
     - 用 protoc 编译 go 文件成 ts 文件，包含类型和远程调用方法

2. CICD **孙国斌**

   - [ ] Jenkins
     - Jenkins 配置
     - 创建任务
     - 配置 Git hooks
     - 实现自动化构建流程
     - 实现自动化部署流程
   - [ ] CI/CD 管道
     - 阶段
     - 模式
     - Workflow
   - [ ] CICD 流水线

3. Git **朱正浩**

   - [ ] Git 高级特性
     - Git rebase
     - Git stash
     - Git diff
     - Git reset
     - [常用命令](https://github.com/Zhuzhenghao/git-tips)
   - [ ] Git 规范
     - 分支
     - commit
     - PR
     - issue/feature/bug Templates
     - Git hooks
     - tag、Release
   - [ ] [GitHub Actions](https://docs.github.com/en/actions)
   - \*[Gitlab Job](https://gitlab.daocloud.cn/help/ci/examples/index)

4. Nginx **张茜**

   - [ ] Nginx 配置及应用
     - 静态资源代理
     - 反向代理
     - 高级配置
       - websocket
       - http2
     - 跨域
   - [ ] 负载均衡
     - 轮询
     - 加权轮询
     - IP 哈希
     - 其他算法
     - 应用场景
   - [ ] Linux 命令
     - 常用命令 ls、rm、tail、cd
     - 文件命令 touch、which、cp、cat、grep、find、curl
     - 目录命令 pwd、mkdir、rmdir
     - 进程 kill、ps、top
     - 其他 mv、ping、telnet、管道｜、clear、alias

## 周会计划

每个组需要完成 12 次周会分享，分享时间 30min 以上。

| -     | #   | 日期  | 主题                                  | 主讲人 |
| ----- | --- | ----- | ------------------------------------- | ------ |
| - [ ] | 1   | 4.4   | Git 高级特性                          | 朱正浩 |
| - [ ] | 2   | 4.11  | 组件库单元测试实战                    | 张鹏胜 |
| - [ ] | 3   | 4.18  | 微前端的优缺点                        | 张雯   |
| 🙈    | 4   | 4.25  |                                       |        |
| - [ ] | 5   | 5.9   | Jenkins 使用分享                      | 孙国斌 |
| - [ ] | 6   | 5.16  | 组件库文档的编写、支持预览            | 尹朋   |
| - [ ] | 7   | 5.23  | 微前端的方案                          | 姚若尘 |
| 🙈    | 8   | 5.30  |                                       |        |
| - [ ] | 9   | 6.6   | Nginx 配置及应用                      | 张茜   |
| - [ ] | 10  | 6.13  | 组件库主题的切换                      | 范弘琰 |
| - [ ] | 11  | 6.20  | 微前端应用间通信                      | 李艳   |
| 🙈    | 12  | 6.27  |                                       |        |
| - [ ] | 13  | 7.4   | Kubernetes 部分资源对象实战           | 于莉   |
| - [ ] | 14  | 7.11  | 组件库国际化                          | 胡锦霞 |
| - [ ] | 15  | 7.18  | 微前端 qiankun 实战——搭建基座应用     | 张雯   |
| 🙈    | 16  | 7.25  |                                       |        |
| - [ ] | 17  | 8.1   | Git 规范                              | 朱正浩 |
| - [ ] | 18  | 8.8   | 组件库 e2e 测试                       | 张鹏胜 |
| - [ ] | 19  | 8.15  | qiankun 预加载与缓存                  | 姚若尘 |
| - [X] | 20  | 8.22  | **❌ 不开例会**                       |        |
| 🙈    | 21  | 8.29  |                                       |        |
| - [ ] | 22  | 9.5   | CI/CD 管道                            | 孙国斌 |
| - [ ] | 23  | 9.12  | 组件库 CSS 相关                       | 范弘琰 |
| - [ ] | 24  | 9.19  | 微前端路由管理                        | 李艳   |
| 🙈    | 25  | 9.26  |                                       |        |
| - [ ] | 26  | 10.10 | Nginx 负载均衡                        | 张茜   |
| - [ ] | 27  | 10.17 | qiankun 源码分析——沙箱隔离            | 姚若尘 |
| - [ ] | 28  | 10.24 | 组件库版本管理与多版本切换预览        | 尹朋   |
| 🙈    | 29  | 10.31 |                                       |        |
| - [ ] | 30  | 11.7  | 乾坤微前端应用加载实现原理            | 张雯   |
| - [ ] | 31  | 11.14 | Docker                                | 于莉   |
| - [ ] | 32  | 11.21 | 组件库支持全量引入与独立引入          | 胡锦霞 |
| 🙈    | 33  | 11.28 |                                       |        |
| - [ ] | 34  | 12.5  | TODO:组件库                           | 尹朋   |
| - [ ] | 35  | 12.12 | What's gRPC?                          | 于莉   |
| - [ ] | 36  | 12.19 | 微前端的权限管理                      | 李艳   |
| 🙈    | 37  | 12.26 |                                       |        |
| - [X] | 38  | 1.2   | **❌ 不开例会**                       |        |
| - [ ] | 39  | 1.9   | 组件库编译                            | 胡锦霞 |
| - [ ] | 40  | 1.16  | 微前端框架之 single-spa               | 姚若尘 |
| - [ ] | 41  | 1.23  | GitHub Actions                        | 朱正浩 |
| 🙈    | 42  | 1.30  |                                       |        |
| - [ ] | 43  | 2.6   | TODO:组件库                           | 范弘琰 |
| - [ ] | 44  | 2.13  | 微前端 micro-app 实战                 | 张雯   |
| - [ ] | 45  | 2.20  | Linux 命令                            | 张茜   |
| 🙈    | 46  | 2.27  |                                       |        |
| - [ ] | 47  | 3.5   | 组件库自动化（Gitlab Action）发布 NPM | 张鹏胜 |
| - [ ] | 48  | 3.12  | 微前端的性能优化                      | 李艳   |
| - [ ] | 49  | 3.19  | CICD 流水线                           | 孙国斌 |
| 🙈    | 50  | 3.26  |                                       |        |

## 一些约定

- 所有文档均使用 [Markdown](https://www.markdownguide.org/) 的格式
- 如果所研究的主题有 Demo 演示，需在对应 `samples` 的目录下，创建子目录存放 Demo 代码

## 如何贡献

1. Fork 仓库
2. TODO: 于莉

## TODO

- [ ] 添加 Markdown lint
- [ ] GitBook
- [ ] Git Ignore
