---
title: getElementById和querySelector方法的区别
date: 2020-10-21
tags:
 -  javascript
 -  查找元素
categories:
 -  JavaScript
author:
 -  言梧
---

> "querySelector 属于 W3C 中的 Selectors API 规范 ，
而 getElementsBy 系列则属于 W3C 的 DOM 规范"

:::danger
get***By*** 获取的是动态集合，querySelector获取的是静态集合。

动态就是选出的元素会随文档改变，静态的不会，取出来之后就和文档的改变无关了
:::


```html
<ul>
    <li>aaa</li>
    <li>ddd</li>
    <li>ccc</li>
</ul>
 ```
 ```js
//demo1
var ul = document.getElementsByTagName('ul')[0],
      lis = ul.getElementsByTagName("li");
for(var i = 0; i < lis.length ; i++){
     ul.appendChild(document.createElement("li"));
}
console.log( lis.length);  //6
 
//demo2
var ul = document.querySelectorAll('ul'),
      lis = ul.querySelectorAll("li");
for(var i = 0; i < lis.length ; i++){
     ul.appendChild(document.createElement("li"));
}
console.log( lis.length);  //3
```
Demo1 中的 lis 是一个动态的 Node List， 每一次调用 lis 都会重新对文档进行查询，导致无限循环的问题。





