---
title: vertical-align的问题记录
date: 2020-11-05
tags:
 -  css
categories:
 -  CSS
author:
 -  言梧
---
遇到个问题：
实现同一行图片和文字垂直居中，后来用flex布局解决了，但是这个让我有点摸不着头脑。。。
先上代码：
```html
<div class="line">
      <span>我是文字</span>
      <img src="/star.jpg" alt="图片" />
      <span>我是文字</span>
</div>
```

```css
.line {
    height: 80px;
    font-size: 10px;
    border-bottom: 1px solid #c9e6c8;
}
 
.line img {
    width: 80px;
    height: 80px;
    border: 1px solid rgb(173, 143, 143);
}
span {
    line-height: 80px;
    vertical-align: middle; 
}
```
结果却是这样的：
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/vertical11.png)

思路是：只有文字时，设置span的line-height为80px，文字居中，但是假如图片后就是如图所示样子。

？？？？？？？？？？？

> vertical-align：该属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐。

具体取值：
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/vertical2.png)

:::danger
把span的vertical-align改成top即可实现：
:::
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/vertical3.png)

:::danger
或者，span只设置line-height，img设置vertical-align: middle; 
:::

```css
.line img {
    width: 80px;
    height: 80px;
    border: 1px solid rgb(173, 143, 143);
    vertical-align: middle; 
}
span {
    line-height: 80px;
}
```
也能实现。
我？？？没彻底弄清楚还


[总结了以下几种方法](https://blog.csdn.net/qq_38055667/article/details/103864588)

```html
<div class="line methodOne">
    <img src="images/logo.png" alt="图片"/>
    <span>我是文字</span>
</div>
<div class="line methodTwo">
    <img src="images/logo.png" alt="图片"/>
    <span>我是文字</span>
</div>
<div class="line methodThree">
    <img src="images/logo.png" alt="图片"/>
    <span>我是文字</span>
</div>
<div class="line methodFour">
    <img src="images/logo.png" alt="图片"/>
    <span>我是文字</span>
</div>
```

```css
* {
    margin: 0;
    padding: 0;
}
 
body {
    padding: 0 10px;
}
 
.line {
    font-size: 20px;
    border-bottom: 1px solid #dddddd;
}
 
.line img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
}

<!--方法1:padding+line-height-->
.methodOne {
    padding: 20px 0;
}
 
.methodOne span {
    line-height: 80px;
    vertical-align: top;
}

方法2:display:flex;+align-items:center;
methodTwo {
    display: flex;
    height: 120px;
    align-items: center;
}
注意：父级元素设置display:flex;后，子元素float失效。
 
 
方法3:padding+vertical-align:middle;
.methodThree {
    padding: 20px 0;
}
.methodThree * {
    vertical-align: middle;
}

方法4:line-height+vertical-align:middle;
.methodFour {
    height: 120px;
    line-height: 120px;
}
.methodFour *{
    vertical-align: middle;
}
```
