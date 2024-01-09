---
author: "Hugo Authors"
title: Git diff
date: 2021-07-13
description: "Lorem Ipsum Dolor Si Amet"
tags: ["markdown", "text"]
thumbnail: https://picsum.photos/id/115/800/400
---

## Reading diffs: output

```shell
touch diff_test.txt
echo "this is a git diff test example" > diff_test.txt
git add diff_test.txt
git commit -am"add diff test file"
```

```shell
echo "this is a diff example" > diff_test.txt
git diff
```

```diff
diff --git a/diff_test.txt b/diff_test.txt
index 6b0c6cf..b37e70a 100644
--- a/diff_test.txt
+++ b/diff_test.txt
@@ -1 +1 @@
-this is a git diff test example
+this is a diff example
```

1. Comparison input

   ```console
   diff --git a/diff_test.txt b/diff_test.txt
   ```

   这一行显示了 diff 的输入源。我们可以看到 a/diff_test.txt 和 b/diff_test.txt 已被传递给 diff。

2. Meta data

   ```console
   index 6b0c6cf..b37e70a 100644
   ```

   这一行显示一些内部的 Git 元数据。你很可能不需要这些信息。输出中的数字对应于 Git 对象的版本哈希标识。

3. Markers for changes

   ```console
   --- a/diff_test.txt
   +++ b/diff_test.txt
   ```

   这些线是一个图例，为每个 diff 输入源分配了符号。在这个例子中，来自 a/diff_test.txt 的变化被标记为---，来自 b/diff_test.txt 的变化被标记为++符号。

4. Diff chunks

   ```diff
   @@ -1 +1 @@
   -this is a git diff test example
   +this is a diff example
   ```

   剩余的差异输出是差异“块”的列表。 diff 仅显示文件中有更改的部分。

   ```console
   @@ -34,6 +34,8 @@
   ```

   在这个示例中，从第 34 行开始提取了 6 行。此外，从第 34 行开始添加了 8 行。

   diff 块的剩余内容显示最近的更改。 每个更改的行前面都有一个 + 或 - 符号，指示更改来自哪个版本的 diff 输入。
   正如我们之前讨论的，- 表示对 `a/diff_test.txt` 的更改，+ 表示对 `b/diff_test.txt` 的更改。

## 常用命令

### Comparing files: git diff file

```shell
git diff HEAD diff_test.txt
```

### Comparing files between two different commits

```shell
git log --pretty=oneline
```

```console
03984add9519d23fe4a7474bdb8e2b46a3708cab feat(readme): add contribution rules
1f3b8aad662800e2f131ba283100ff1927da4cd2 continue adding rebase demo
eba32af8486421d14f31d9539d633d8c0662912c (test) add rebase shell
e51f3edf152007b26c0833fbc42bcc3d3d66a8d3 Add git rebase guide
b65f767284b7a3c4a9c6254214edba1806d58d98 update
9054f9b9db8ca97091fda3991ab2a36da7a8ffdf update weekly plan
```

```shell
git diff 1f3b8aad662800e2f131ba283100ff1927da4cd2 eba32af8486421d14f31d9539d633d8c0662912c
```

### Comparing two branches

```shell
git diff branch1..other-feature-branch
```

### Comparing files from two branches

要跨分支比较特定文件，将文件路径作为第三个参数传递给 git diff

```shell
git diff main new_branch ./diff_test.txt
```

### 查看冲突文件列表

展示工作区的冲突文件列表

```shell
git diff --name-only --diff-filter=U
```

### 展示工作区和暂存区的不同

输出工作区和暂存区的 different (不同)。

```shell
git diff
```

### 展示暂存区和最近版本的不同

输出暂存区和本地最近的版本 (commit) 的 different (不同)。

```shell
git diff --cached
```

### 展示暂存区、工作区和最近版本的不同

输出工作区、暂存区 和本地最近的版本 (commit) 的 different (不同)。

```shell
git diff HEAD
```

## 参考

- [1] [Git diff](https://www.atlassian.com/git/tutorials/saving-changes/git-diff)
