---
title: yarn和npm命令
date: 2020-11-05
tags:
 -  yarn
categories:
 -  something
author:
 -  言梧
---


## 安装yarn
1. 安装node
2. 安装yarn
```
npm install -g yarn
```
3. 切换淘宝镜像
```
yarn config set registry https://registry.npm.taobao.org
```

## yarn和npm命令对比

 命令 | yarn | npm
---|---|---
初始化(产生package.json) | yarn init | npm init
安装依赖 | yarn install 或者 yarn | npm install
新增依赖 | yarn add element-ui | npm install element-ui
删除依赖 | yarn remove element-ui | npm uninstall element-ui
更新依赖 | yarn upgrade | npm update
全局安装或删除 | yarn global remove vue-cli | npm uninstall vue-cli -g
同时下载多个 | yarn add axios vue-axios | npm install --save axios vue-axios

[更多命令请点击](https://yarn.bootcss.com/)


