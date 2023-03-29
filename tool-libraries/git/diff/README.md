# Git diff

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

````diff
diff --git a/tool-libraries/git/diff/README.md b/tool-libraries/git/diff/README.md
index 1724963..567ebba 100644
--- a/tool-libraries/git/diff/README.md
+++ b/tool-libraries/git/diff/README.md
@@ -6,7 +6,7 @@
 git diff
 ```

-this is a test diff example
+this is a diff example
 modify these lines
 test git diff
````

1. Comparison input

   ```console
   diff --git a/tool-libraries/git/diff/README.md b/tool-libraries/git/diff/README.md
   ```

   这一行显示了 diff 的输入源。我们可以看到 a/diff_test.txt 和 b/diff_test.txt 已被传递给 diff。

2. Meta data

   ```console
   index 1724963..567ebba 100644
   ```

   这一行显示一些内部的 Git 元数据。你很可能不需要这些信息。输出中的数字对应于 Git 对象的版本哈希标识。

3. Markers for changes

   ```console
   --- a/tool-libraries/git/diff/README.md
   +++ b/tool-libraries/git/diff/README.md
   ```

   这些线是一个图例，为每个 diff 输入源分配了符号。在这个例子中，来自 a/diff_test.txt 的变化被标记为---，来自 b/diff_test.txt 的变化被标记为++符号。

4. Diff chunks

   ````diff
   @@ -6,7 +6,7 @@
   git diff
   ```

   -this is a test diff example
   +this is a diff example
   modify these lines
   test git diff

   ````

   剩余的差异输出是差异“块”的列表。 diff 仅显示文件中有更改的部分。

   ```console
   @@ -6,7 +6,7 @@
   ```

   在这个示例中，从第 6 行开始提取了 7 行。此外，从第 6 行开始添加了 7 行。

   diff 块的剩余内容显示最近的更改。 每个更改的行前面都有一个 + 或 - 符号，指示更改来自哪个版本的 diff 输入。
   正如我们之前讨论的，- 表示对 `a/tool-libraries/git/diff/README.md` 的更改，+ 表示对 `b/tool-libraries/git/diff/README.md` 的更改。
