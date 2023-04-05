# Git stash

## Stashing your work

把没有提交的变化（both staged and unstaged）保存起来，后续可以恢复现场。

```shell
$ git status
On branch main
Changes to be committed:

    new file:   style.css

Changes not staged for commit:

    modified:   index.html

$ git stash
Saved working directory and index state WIP on main: 5002d47 our new homepage
HEAD is now at 5002d47 our new homepage

$ git status
On branch main
nothing to commit, working tree clean
```

## Re-applying your stashed changes

```shell
$ git status
On branch main
nothing to commit, working tree clean
$ git stash pop
On branch main
Changes to be committed:

    new file:   style.css

Changes not staged for commit:

    modified:   index.html

Dropped refs/stash@{0} (32b3aa1d185dfe6d57b3c3cc3b32cbf3e380cc6a)
```

`git stash pop` 回到最后一个 stash 的状态，并删除这个 stash。

`git stash apply` 也可以恢复现场，但是这个 stash 不会被删除，从而可以 apply 到别的分支。

```shell
$ git stash apply
On branch main
Changes to be committed:

    new file:   style.css

Changes not staged for commit:

    modified:   index.html
```

## Stashing untracked or ignored files

默认情况下，`git stash` 会存储：

- changes that have been added to your index (staged changes)
- changes made to files that are currently tracked by Git (unstaged changes)

但是无法存储：

- new files in your working copy that have not yet been staged
- files that have been ignored

`git stash -u` 可以存储`untracked`的文件,
`git stash -a` 可以存储`ignored`的文件。

## Managing multiple stashes

```shell
git stash save "add style to our site"
```

```console
Saved working directory and index state On main: add style to our site
HEAD is now at 5002d47 our new homepage
```

展示所有 stashes：

```shell
git stash list
```

```console
stash@{0}: On main: add style to our site
stash@{1}: WIP on main: 5002d47 our new homepage
stash@{2}: WIP on main: 5002d47 our new homepage

```

指定 `pop` 的 `stash`：

```shell
git stash pop stash@{n}
```

## Viewing stash diffs

```shell
git stash show
git stash show -p
```

## Cleaning up your stash

删除某个 stash：

```shell
git stash drop stash@{n}
```

清理所有的 stash：

```shell
git stash clear
```

## 参考

- [Git stash](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)
