---
author: 主正浩
title: Git Rebase 详解
date: 2021-07-13
description: 玩转 Git rebase
tags: ['git']
thumbnail: https://picsum.photos/id/113/800/400
---

## 理解 Rebase 命令

git rebase 命令的文档描述是 `Reapply commits on top of another base tip`，「在另一个基端之上重新应用提交」.
这个定义听起来有点抽象，换个角度可以理解为「将分支的基础从一个提交改成另一个提交，使其看起来就像是从另一个提交中创建了分支一样」，如下图：

![](images/git/rebase/git-rebase-visual.png)

## 主要用途

日常我们会基于`main`分支，新建一个分支`feature`来进行我们的新功能开发。与此同时，`main`分支已经新进来了两个 `commit`，feature 分支的基础代码已经不是最新的了，此时我们可以在 `feature` 分支上面，进行 `rebase` 操作，将 `feature` 分支的基础嫁接到 `main` 分支最新的 `commit` 上，也就是我们常说的**变基**。

```shell
git checkout main
git fetch
git checkout -b feature
git checkout main
# main 分支提交两次 commit B C
```

![git commit](images/git/rebase/2023-03-29-14-29-15.png)

```shell
git checkout feature
# feature 提交两次 commit D E
git push --set-upstream origin feature
```

![](images/git/rebase/2023-03-29-14-39-01.png)

```shell
git rebase main
git push -f
```

![](images/git/rebase/2023-03-29-14-41-26.png)

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

2. 开始 rebase 操作： 确定目标分支后，使用 git rebase 命令开始 rebase 操作。这将把 main 分支上的所有提交都应用到 my-feature-branch 分支上。

   ```shell
   git rebase main
   ```

3. 解决冲突（如果有）： 在 rebase 过程中，Git 可能会遇到需要解决的合并冲突。使用 git status 命令查找有冲突的文件，并手动解决它们。

4. 完成 rebase 操作： 解决了所有冲突后，使用 git add 命令将更改加入暂存区，并使用 git commit 命令最终完成 rebase 操作。

   ```shell
   git add .
   git commit -m "Rebased my-feature-branch onto main"
   ```

## 使用 Git Rebase 最佳实践

**避免重新基于共享分支**： 永远不要在已经与其他团队成员共享的分支上进行 rebase。这样会重写提交历史，使得其他人难以与你协作。

**频繁地 rebase**： 经常进行 rebase 操作可以保持提交历史的干净有序。这使得审查代码变更并维护一个一致的历史记录变得更容易。

**使用交互模式**： git rebase -i 命令允许你通过压缩、修改或删除提交来进行交互式的修改提交历史。

**备份**： 在执行 rebase 操作之前，请创建一个分支备份，以防出现问题。可以使用 git branch backup/my-feature-branch 创建备份分支。

## 常用命令

### 修改上一个 commit 的描述

如果暂存区有改动，同时也会将暂存区的改动提交到上一个 commit

```shell
git commit --amend
```

```shell
git commit --amend --no-edit
```

### 执行 rebase 之前自动 stash

```shell
git rebase --autostash
```

### Squashing commits

![](images/git/rebase/2023-03-29-15-23-23.png)

```shell
git rebase -i HEAD~3
```

![](images/git/rebase/iShot_2023-03-29_15.30.55.gif)

![](images/git/rebase/2023-03-29-15-33-50.png)

> 本文参考链接：
>
> https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase > https://waynerv.com/posts/git-rebase-intro/
