---
title: git
date: 2021-12-23
tags:
 - git
categories:
 - something
author:
 -  言梧
---

## 1.配置
```
git config --list                                    //查看配置
git config --global user.name lynn                   //配置用户名
git config --global user.email 1204139994@qq.com     //配置用户邮件
git config --global color.ui "auto"                  //配置颜色ui
git help add                                         //获取帮助
```

## 2.git基本操作
### 基本操作命令
```
git init                                             //创建本地版本库
git add ***.txt
git rm ***.txt                                       //添加到暂存区
git commit -m "message"                              //提交到本地版本库
```


## 3.拉新分支开发
3-1. 切换到被copy的分支（master），并且从远端拉取最新版本
```
$git checkout master

$git pull
```
3-2. 从当前分支拉copy开发分支
```
$git checkout -b dev

Switched to a new branch 'dev'
```
3-3. 把新建的分支push到远端
```
$git push origin dev
```
3-4. 拉取远端分支
```
$git pull

There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

git branch --set-upstream-to=origin/<branch> dev
```
经过验证，当前的分支并没有和本地分支关联，根据提示进行下一步：
3-5. 关联
```
$git branch --set-upstream-to=origin/dev
```
3-6. 再次拉取 验证
```
$git pull
```

## 4.合并merge
> 开发完将自己的分支develop/lyx，将其合并到主分支dev上

```
步骤一：切换到dev分支
git checkout dev

步骤二：更新dev分支
git pull

步骤三：切换到自己分支
git checkout develop/lyx

步骤四：更新自己分支
git pull

步骤五：将自己的分支与dev分支同步
git merge dev

步骤六：提交自己的代码
git add
git commit -m "【提交类型】：【是否自测通过】：【修改内容】："
git push

步骤七：切换到dev分支
git checkout dev

步骤八：合并分支
git merge develop/lyx

步骤九：更新远程dev（在dev分支合并完在push到远程dev库）
git push
```


## 5.tag
### 什么是tag？
- tag是git版本库的一个标记，指向某个commit的指针。
- tag主要用于发布版本的管理，一个版本发布之后，我们可以为git打上 v.1.0.1 v.1.0.2 ...这样的标签。
- tag感觉跟branch有点相似，但是本质上和分工上是不同的：
- 1. tag 对应某次commit, 是一个点，是不可移动的。
- 2. branch 对应一系列commit，是很多点连成的一根线，有一个HEAD 指针，是可以依靠 HEAD 指针移动的。
- 所以，两者的区别决定了使用方式，改动代码用 branch ,不改动只查看用 tag。
- tag 和 branch 的相互配合使用，有时候起到非常方便的效果，例如：已经发布了 v1.0 v2.0 v3.0
- 三个版本，这个时候，我突然想不改现有代码的前提下，在 v2.0 的基础上加个新功能，作为 v4.0 发布。就可以检出 v2.0 的代码作为一个 branch ，然后作为开发分支。

```
git tag -a <tagname> -m "added description release notes"       # 创建标签

git tag                                                         
git tag --list                                                  
git tag -l                                                      # 查看标签

git log --pretty=oneline --abbrev-commit
git tag -a <tagname> -m "v0.9版本发布上线" <commit-id>          # 对历史提交做tag处理

git push origin <tagname>                                       # 推送一个本地标签到远程仓库
git push origin --tags                                          # 推送全部未推送过的本地标签

git tag -d <tagname>                                            # 删除标签
git push origin :refs/tags/<tagname>                            # 删除一个远程标签

git checkout <tagname>                                          # 拉取tagName点的所有代码
```
### 5.1 创建tag
```
git tag <tagName> //创建本地tag
git push origin <tagName> //推送到远程仓库

若存在很多未推送的本地标签，你想一次全部推送的话：
git push origin --tags

以上是基于本地当前分支的最后的一个commit 创建的 tag ，但是如果不想以最后一个，只想以某一个特定的提交为tag ，也是可以的，只要你知道commit 的id。

git log --pretty=oneline //查看当前分支的提交历史 里面包含 commit id
git tag -a <tagName> <commitId>
```
### 5.2 查看标签
```
查看本地某个 tag 的详细信息：
git show <tagName>

查看本地所有 tag：
git tag 或者 git tag -l

查看远程所有 tag：
git ls-remote --tags origin
```
### 5.3 删除标签
```
本地 tag 的删除：
git tag -d <tagName>

远程 tag 的删除：
git push origin :refs/tags/<tagName>

把本地tag 推送到远端：
git push origin :<tagName>
```
### 5.4 检出标签
```
git checkout -b <branchName> <tagName>

因为 tag 本身指向的就是一个 commit，所以和根据commit id 检出分支是一个道理。

但是需要特别说明的是，如果我们想要修改 tag检出代码分支，那么虽然分支中的代码改变了，但是 tag标记的 commit还是同一个，标记的代码是不会变的，这个要格外的注意。
```



## 6.回退
### 6.1 git reset
> 适用场景： 如果想恢复到之前某个提交的版本，且那个版本之后提交的版本我们都不要了，就可以用这种方法。

```
1.查看版本号
git log

2.使用“git reset --hard 目标版本号”命令将版本回退
//--hard 参数:
//Resets the index and working tree. Any changes to tracked files in the working tree since <commit> are discarded.
//重置索引和工作树。 自<commit>以来，工作树中跟踪文件的任何更改都将被放弃。

3. 使用“git push -f”提交更改
//此时如果用“git push”会报错，因为我们本地库HEAD指向的版本比远程库的要旧
//所以我们要用“git push -f”强制推上去，就可以了

4.查看命令操作的历史
git reflog
```

### 6.2 git revert
> git revert是用于“反做”某一个版本，以达到撤销该版本的修改的目的
> 适用场景： 如果我们想撤销之前的某一版本，但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，就可以用这种方法。

```
1. 查看版本号
git log

2.使用“git revert -n 版本号 -m 1/2”反做，并使用“git commit -m 版本名”提交

3.使用“git push”推上远程库
```

## 举个例子：


> 位于分支：(web-develop)

```
$ git pull

warning: redirecting to https:******
Already up to date.
```
---
> 位于分支：(web-develop)

```
$ git checkout -b web-develop/lyx

Switched to a new branch 'web-develop/lyx'
```

> 位于分支：(web-develop/lyx)

```
$ git push origin web-develop/lyx

warning: redirecting to https:******
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create pull request for web-develop/lyx:
remote:   https://******/web-develop/lyx
remote:
To http://******
 * [new branch]        web-develop/lyx -> web-develop/lyx
```

> 位于分支：(web-develop/lyx)

```
$ git pull

warning: redirecting to https:******
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> web-develop/lyx
```

> 位于分支：(web-develop/lyx)

```
$ git branch --set-upstream-to=origin/web-develop/lyx

Branch 'web-develop/lyx' set up to track remote branch 'web-develop/lyx' from 'origin'.
```

> 位于分支：(web-develop/lyx)

```
$ git pull

warning: redirecting to https:******
Already up to date.
```

