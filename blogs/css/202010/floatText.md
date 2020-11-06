---
title: 元素浮动之后文字的环绕显示
date: 2020-10-22
tags:
 -  css
 -  float
 -  布局
categories:
 -  CSS
author:
 -  言梧
---

## 1.问题

先看这样一个布局：

```html
<h2>float文字环绕</h2>
<article class="floatText">
    <div class="first">第1个</div>
    <div class="second">第2个</div>
    <div class="third">第3个</div>
</article>
```

```css
.floatText > div{
    width: 200px;
    height: 100px;
}
.first{
    background-color: rgb(134, 84, 84);
}
.second{
    background-color: rgb(62, 95, 82);
}
.third{
    background-color: rgb(83, 104, 163);
}
```
页面展示是这样的：

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/floatText1.png)

将second设置左浮：
```css
.second{
    float: left;
    background-color: rgb(62, 95, 82);
}
```
后显示如下：

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/floatText1.png)

> 既然浮动元素second脱离了文档流，为什么third中的文字会环绕在浮动元素的周边而不是跟浮动元素second重合呢？

## 2.深入理解float
要从**float的起源**说起，早些时候，W3C规定出来的浮动实际并不是为了布局所用，当时是为了**做文字环绕**才使用了浮动，只是后来人发现用它做布局也挺不错的，故至此float就担任了CSS中布局的任务，但我们还是不要忘了，float起初就是为了做文字环绕的。

可能浮动并不是像我想象的那样，元素完全的脱离了文档流，其实浮动还是比较特殊的，虽然脱离的文档流，但最终还是能**影响到布局**。

可以和absoluete布局相比较

```html
<div id="container">
    <div id="div1">div1</div>
    <div id="div2">昏暗的台灯下，我凝视着这一杯茶，沸水一次又一次的冲击，让我感到了茶的清香。那苦涩中略微含着的一点甘甜，也被我贪婪的嘴给霸占了，眼的朦胧，勾勒出朦胧的记忆，可记忆却已不再朦胧。</div>
</div>
```

### absolute定位
```css
#container{
    width: 600px;
    height: 200px;
    position: relative;
    background-color: rgb(97, 97, 145);
}
#div1{
    position: absolute;
    width: 200px;
    height: 100px;
    background: rgb(236, 233, 233);
}
```

### float
```css
#container2{
   width: 600px;
   height: 200px;
   background-color: rgb(97, 97, 145);
}
#div3{
   float: left;
   width: 200px;
   height: 100px;
   background: rgb(236, 233, 233);
}
```

两者如图所示：


![](https://gitee.com/lynnwutong/blog-img/raw/master/img/floatText1.png)

1. 绝对定位是使元素完全的脱离文档流，也是我们大部分人理解的浮动，影响了自身的位置，但并没有影响到其它元素的内部布局。
2. 绝对定位是将元素彻底的从文档流中删除，并相对于某个父元素进行定位，元素原先在文档流中所占的空间会关闭，就好像该元素原来不存在一样，该元素再也不会影响其他元素的布局了。
3. float可以理解是一种特殊的“浮动”，元素虽然脱离的文档流，但依然会影响到其他元素的内部布局。float有两个功能：①脱离文档流。②文字环绕。

