---
title: 页面布局
date: 2020-09-28
tags:
 -  css
 -  布局
 -  float
 -  absoluete
 -  flex
 -  table
 -  grid
categories:
 -  CSS
author:
 -  言梧
---

## 一. 三栏布局

### 1.float布局
步骤：
1. 左、**右、中**布局
2. 左边左浮、右边右浮

```html
<article class="floatwrapper">
    <div class="left">left</div>
    <div class="right">right</div>
    <div class="center">
        <h1>float布局</h1>
        我是float布局的中间部分
    </div>
</article>
```

```css
.floatwrapper .left{
    height: 100px;
    width: 300px;
    float: left;
    background-color: rgb(19, 138, 102);
}
.floatwrapper .right{
    height: 100px;
    width: 300px;
    float: right;
    background-color: rgb(100, 197, 168);
}
.floatwrapper .center{
    height: 100px;
    /* margin: 0 300px; */ 
    background-color: rgb(138, 168, 206);
}
```
#### 注意点
:::danger
1. center的margin可加可不加

```
margin: 0 300px;
```
加或不加，两者样式显示一样。区别在于center的宽度尺寸


![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout1.png)

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout2.png)

文字显示一致，紧跟浮动的left后，就不得不了解一下第2点，如下：

2. 元素浮动之后文字的环绕显示

具体讲解点击链接：
[元素浮动之后文字的环绕显示](https://www.lynnwutong.top/blogs/css/202010/floatText.html)
[Link](http://localhost:8080/blogs/css/202010/floatText.html)
:::


### 2.absolute布局
步骤：
1. 左、中、右布局
2. 三个position：absolute；
3. 左边left: 0; 右边right: 0;
4. 中间left: 300px; right: 300px;

其中3、4步如下图变化：

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout3.png)


![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout4.png)

```html
<article class="absoluteWrapper">
    <div class="left">left</div>
    <div class="center">
        <h1>absolute布局</h1>
        我是absolute布局的中间部分
    </div>
    <div class="right">right</div>
</article>
```

```css
.absoluteWrapper .left {
  height: 100px;
  width: 300px;
  position: absolute;
  left: 0;
  background-color: rgb(19, 138, 102);
}
.absoluteWrapper .center {
  height: 100px;
  position: absolute;
  left: 300px;
  right: 300px;
  background-color: rgb(138, 168, 206);
}
.absoluteWrapper .right {
  height: 100px;
  width: 300px;
  position: absolute;
  right: 0;
  background-color: rgb(100, 197, 168);
}
```


### 3.flex布局
步骤：

:::danger
由于本篇布局在一个页面中，所以上文的absolute布局会影响到后面flex布局的元素，如图：


![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout5.png)

所以额外给外容器flexWrapper设置margin-top: 120px;隔开，不然会与absolute布局完全重合。
:::

```html
<article class="flexWrapper">
    <div class="left">left</div>
    <div class="center">
        <h1>flex布局</h1>
        我是flex布局的中间部分
        </div>
    <div class="right">right</div>
</article>
```

```css
.flexWrapper{
    margin-top: 120px;
    display: flex;
}
.flexWrapper .left {
  height: 100px;
  width: 300px;
  background-color: rgb(19, 138, 102);
}
.flexWrapper .center {
  height: 100px;
  flex: 1;
  background-color: rgb(138, 168, 206);
}
.flexWrapper .right {
  height: 100px;
  width: 300px;
  background-color: rgb(100, 197, 168);
}
```
连同absolute布局一起如图所示：

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout6.png)


### 4. table布局
步骤：
1. 左、中、右布局
2. 外容器 tableWrapper 设置 display: table;
3. 左设置 display: table-cell;
4. 中设置 display: table-cell;
5. 右设置 display: table-cell;

其中，步骤1、2、3、4后分别为：


![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout7.png)

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout8.png)

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout9.png)

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout10.png)

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout11.png)
```html
<article class="tableWrapper">
    <div class="left">left</div>
    <div class="center">
        <h1>table布局</h1>
        我是table布局的中间部分
    </div>
    <div class="right">right</div>
</article>
```

```css
.tableWrapper{
    display: table;
}
.tableWrapper .left {
  height: 100px;
  width: 300px;
  display: table-cell;
  background-color: rgb(19, 138, 102);
}
.tableWrapper .center {
  height: 100px;
  display: table-cell;
  background-color: rgb(138, 168, 206);
}
.tableWrapper .right {
  height: 100px;
  width: 300px;
  display: table-cell;
  background-color: rgb(100, 197, 168);
}
```



### 5. grid布局
步骤：
1. 左、中、右布局
2. 外容器gridWrapper设置display: grid;
3. 外容器外容器gridWrapper设置grid-template-rows: 100px; grid-template-columns: 300px auto 300px;

```html
<article class="gridWrapper">
    <div class="left">left</div>
    <div class="center">
        <h1>grid布局</h1>
        我是grid布局的中间部分
    </div>
    <div class="right">right</div>
</article>
```

```css
.gridWrapper{
    margin-top: 50px;
    display: grid;
    grid-template-rows: 100px;
    grid-template-columns: 300px auto 300px;
}
.gridWrapper .left {
  background-color: rgb(19, 138, 102);
}
.gridWrapper .center {
  background-color: rgb(138, 168, 206);
}
.gridWrapper .right {
  background-color: rgb(100, 197, 168);
}
```

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/layout12.png)


### 5种三栏布局方式总结

布局方式 | 优点 | 缺点
---|---|---
float | 简单、兼容性好 | 浮动元素脱离文档流，要做清除浮动
absolute | 快捷、设置方便 | 绝对定位脱离文档流，意味着下面的所有子元素也会脱离文档流
flex | 简单、快捷 | 不支持 IE8 及以下
table | 实现简单、代码少 | 当其中一个单元格高度超出的时候，两侧的单元格也是会跟着一起变高，有时候这种效果不是我们想要的。
grid | 跟 flex 相似 | 跟 flex 相似


## 二. 水平垂直居中

（可以插图，之前整理的脑图）
### 1.absolute + 负margin


### 2.absolute + auto margin


### 3.absolute + calc


### 4.absolute + transform


### 5.table


### 6.flex


### 7.grid



## 三. 页面布局小结

- 语义化掌握到位
- 页面布局理解深刻
- CSS基础知识扎实
- 思维灵活且积极上进
- 代码书写规范
