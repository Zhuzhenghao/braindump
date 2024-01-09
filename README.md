# Braindump

本仓库存放前端领域知识积累本仓库是一个专注于前端领域的知识库，旨在积累和分享各种前端技术、最佳实践和工具的使用技巧。内容涵盖但不限于 HTML, CSS, JavaScript, Vue, React, Angular 等前端技术，以及 Web 性能优化、前端工程化、前端安全等主题。无论你是前端新手，还是有经验的开发者，都可以在这个仓库中找到有用的信息和灵感。欢迎大家参与贡献，共同推动前端知识的发展和传播。

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
