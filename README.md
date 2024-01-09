# Braindump

本仓库存放前端领域知识积累，学习周期为 2023.4 ~ 2024.10。

## 小组情况

| 小组   | 组长   | 成员             | 目标 |
| ------ | ------ | ---------------- | ---- |
| 微前端 | 李艳   | 姚若尘           |      |
| 组件库 | 张鹏胜 | 范弘琰           |      |
| 工具库 | 孙国斌 | 司琴 朱正浩 张茜 |      |

## 周会计划

每个组需要完成 12 次周会分享，分享时间 30min 以上。

### 2025

|  -  | 日期 | 主题                             | 主讲人    |
| :-: | ---- | -------------------------------- | --------- |
| 🕑  | 1.7  |                                  | 朱正浩    |
| 🕑  | 1.14 | [尚硅谷 Webpack5 入门到原理][15] | P85 - P88 |
| 🕑  | 2.18 | 微前端的性能优化                 | 李艳      |
| 🙈  | 2.25 |                                  | 孙国斌    |
| 🕑  | 3.4  | qiankun 源码分析——沙箱隔离       | 姚若尘    |

## 一些约定

- 所有文档均使用 [Markdown](https://www.markdownguide.org/) 的格式
- 如果所研究的主题有 Demo 演示，需在对应 `samples` 的目录下，创建子目录存放 Demo 代码

## 如何贡献

1. Fork 仓库
2. git clone [your repository url]
   // 指定上游仓库 用于同步上游仓库最新代码（git fetch upstream 或者 git merge upstream/master）
3. git remote add upstream git@github.com:Zhuzhenghao/braindump.git
4. git checkout -b [your new branch]
5. git commit -m '[a message]'
6. git push [your branch]
7. Create a merge request form your repository to Zhuzhenghao/braindump
8. The title of pr can be the same as the commit message
9. Assign your pr reviewer: /assign_reviewer @user

```shell
// commit message
  <type>(<scope>): <subject>

// type: feat/fix/docs
// scope: the changes related modules (eg:tool-libraries)
// subject: detailed description of the changes

// eg: feat(tool-libraries): add docker related docs
```

## TODO

- [ ] 添加 Markdown lint
- [ ] GitBook

[15]: https://www.bilibili.com/video/BV14T4y1z7sw?p=85&vd_source=8f204ac9b5a7074fda6cebea0d263d40
[浏览器跨tab窗口通信]: https://dev.to/notachraf/sharing-a-state-between-windows-without-a-serve-23an?ref=dailydev
