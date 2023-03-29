# Git Rebase 详解

Git rebase 是 Git 中一个非常强大的功能，它可以修改分支的提交历史，通过将一个分支的所有提交应用到另一个分支上，从而修改提交的顺序、内容和结构。
使用 Git rebase 可以使提交历史更加**清晰有序**。

在这篇文章中，我们将深入介绍 Git rebase 的所有内容，包括什么是 Git rebase，为什么要使用它，如何使用它以及与其相关的一些技巧和注意事项。

## 什么是 Git Rebase？

Git rebase 可以将一个分支的所有提交应用到另一个分支上。
日常我们会基于`main`分支，新建一个分支`feature`来进行我们的新功能开发。与此同时，`main`分支已经新进来了两个 `commit`，feature 分之的基础代码已经不是最新的了，此时我们可以在 `feature` 分支上面，进行 `rebase` 操作，也就是我们常说的**变基**。

```shell
git checkout main
git fetch
git checkout -b feature
# main 分支提交两次 commit
```

![](2023-03-29-14-29-15.png)

![](./01%20What%20is%20git%20rebase.svg)

## 为什么要使用 Git Rebase？

使用 Git rebase 的好处有以下几点：

1. **保持一个干净有序的提交历史**： 使用 Git rebase 可以通过压缩或修改提交来修改提交历史、删除不需要的提交，并根据逻辑顺序组织提交，从而保持一个干净有序的提交历史。
2. **避免合并冲突**： 通过将一个分支的所有提交应用到另一个分支上，可以避免合并具有不同提交历史的分支时出现冲突的情况。
3. **方便代码审查**： 一个干净有序的提交历史使得团队成员更容易审查代码变更、理解每个提交的上下文，并提供反馈。
4. **将多个小提交压缩到一个提交中**： 可以使用 rebase 将多个小提交压缩到一个较大的提交中，这有助于更好地了解特定分支中的更改历史。

## 如何使用 Git Rebase？

使用 Git rebase 的步骤如下：

1. 获取和切换到需要 rebase 的分支： 首先通过运行 git fetch 确保本地镜像库是最新的。然后使用 git checkout 命令切换到你想要 rebase 的分支。

   ```shell
   git fetch
   git checkout my-feature-branch
   ```

2. 确定目标分支： 接下来确定你要将更改应用到哪个分支上。通常情况下，这是主分支或你希望将更改合并到的分支。

   ```shell
   git checkout main
   ```

3. 开始 rebase 操作： 确定目标分支后，使用 git rebase 命令开始 rebase 操作。这将把 my-feature-branch 分支上的所有提交都应用到 main 分支上。

   ```shell
   git rebase my-feature-branch
   ```

4. 解决冲突（如果有）： 在 rebase 过程中，Git 可能会遇到需要解决的合并冲突。使用 git status 命令查找有冲突的文件，并手动解决它们。

5. 完成 rebase 操作： 解决了所有冲突后，使用 git add 命令将更改加入暂存区，并使用 git commit 命令最终完成 rebase 操作。

git add .
git commit -m "Rebased my-feature-branch onto main"

## 使用 Git Rebase 的技巧和最佳实践

以下是使用 Git Rebase 的一些技巧和最佳实践：

**避免重新基于共享分支**： 永远不要在已经与其他团队成员共享的分支上进行 rebase。这样会重写提交历史，使得其他人难以与你协作。

**频繁地 rebase**： 经常进行 rebase 操作可以保持提交历史的干净有序。这使得审查代码变更并维护一个一致的历史记录变得更容易。

**使用交互模式**： git rebase -i 命令允许你通过压缩、修改或删除提交来进行交互式的修改提交历史。

备份： 在执行 rebase 操作之前，请创建一个分支备份，以防出现问题。可以使用 git branch backup/my-feature-branch 创建备份分支。

理解 rebase 和 merge 的区别： 与 Git merge 不同，Git rebase 可以修改提交历史。因此，在决定使用 rebase 还是 merge 时，请确保你理解它们之间的区别，并选择适合你项目需要的操作。

## 结论

Git rebase 是一个非常有用的功能，可用于修改提交历史、避免合并冲突、促进代码审查等。使用本文提供的步骤和技巧，您可以更高效地使用 Git rebase，并创建一个干净有序的提交历史。记住，在使用 Git rebase 时，请始终遵循最佳实践，以确保您的团队成员能够顺利协作，避免出现问题。
