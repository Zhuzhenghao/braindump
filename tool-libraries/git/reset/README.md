# Git reset

## --hard

```shell
echo 'new file content' > new_file
git add new_file
echo 'changed content' >> reset_lifecycle_file
git status
git reset --hard
```

## --mixed

```shell
echo 'new file content' > new_file
git add new_file
echo 'append content' >> reset_lifecycle_file
git add reset_lifecycle_file
git status
git reset --mixed
git status
```

## --soft

```shell
git add reset_lifecycle_file
git status
```

```shell
echo "repend content to reset_lifecycle_file" >> reset_lifecycle_file
git add reset_lifecycle_file
git commit -m"prepend content to reset_lifecycle_file"
git log
git reset --soft
```
