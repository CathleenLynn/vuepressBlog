---
title: background属性
date: 2020-10-20
tags:
 -  css
 -  background
categories:
 -  CSS
author:
 -  言梧
---


```html
<h1>background 属性</h1>
<hr />
<div class="container">
      //省略.......
      <p>....................</p>
      <p>______________________</p>
      <h3>background-image: url("/star.jpg");</h3>
      <h3>background-repeat默认为repeat</h3>
      <p>....................</p>
      <p>______________________</p>
      //省略........
    </div>
```

```css
.container {
  width: 600px;
  height: 400px;
  overflow: auto;
  background-color: rgb(122, 160, 182);
  background-image: url("/star.jpg");
  /* background: url("/star.jpg"); */
}
```

如图所示：

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg1.png)

> 图片默认在水平和垂直方向上重复

> 内部滚动条——图不动；

> 页面滚动条——图动

## 1.background-repeat
**默认值：background-repeat：repeat;**
- 定义了图像的平铺模式
- 从原图像开始重复，原图像由 background-image 定义，并根据 background-position 的值放置。

值 | 描述
---|---
repeat | 默认。背景图像将在垂直方向和水平方向重复。
repeat-x | 背景图像将在水平方向重复。
repeat-y | 背景图像将在垂直方向重复。
no-repeat | 背景图像将仅显示一次。
inherit | 规定应该从父元素继承 background-repeat 属性的设置。




## 2.background-attachment

**默认值：background-attachment: scroll;**

值 | 描述
---|---
scroll | 默认值。背景图像会随着页面其余部分的滚动而移动。
fixed | 当页面的其余部分滚动时，背景图像不会移动。
inherit | 规定应该从父元素继承 background-attachment 属性的设置。

加入属性值：

```css
background-attachment: fixed;
```
如图所示：
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg2.png)

> 内部滚动条——图不动

> 页面滚动条——图不动

:::danger
注意：
background-attachment: fixed; 与默认值即background-attachment: scroll 相比，背景图片的定位起始位置不同，由于页面最上面有h1标签;
:::

接着上面的，弄清 background-attachment: fixed; 的图片定位位置

滚动页面滚动条，至h1标题划上去

如图：

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg3.png)

可以看出：

> fixed 是相对于页面左上角定位；

> scroll是相对于设置背景图片的元素左上角定位。

> 而位置是background-position进行设置的。







## 3.background-position
**默认值：background-position：0% 0%**

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg4.png)

设置background-position: center;是从中间开始平铺。

如图

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg5.png)







## 4.background-size
**默认值：background-size：auto;**

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg6.png)

设置background-size: cover;
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg7.png)

设置background-size: contain;
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg8.png)




## 5.background-origin
**默认值：background-origin: padding-box;**


值 | 描述
---|---
padding-box | 背景图像相对于内边距框来定位。
border-box | 背景图像相对于边框盒来定位。
content-box | 背景图像相对于内容框来定位。

加上border和padding：
```css
.container{
  border: 50px solid gray;
  padding: 30px;
}
```


默认background-origin: padding-box;
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg9.png)

设置background-origin: border-box;
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg10.png)

设置background-origin: content-box;
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg11.png)



## 6.background-clip
**默认值：background-clip: border-box**

值 | 描述
---|---
border-box | 背景被裁剪到边框盒。
padding-box | 背景被裁剪到内边距框。
content-box | 	背景被裁剪到内容框。

默认background-clip: border-box;
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg12.png)

设置background-clip: padding-box;
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg13.png)

设置background-clip: content-box;
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg14.png)




## 7.background-color
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg15.png)

CSS的颜色可以通过以下方法指定：
- 十六进制颜色

> ＃RRGGBB，其中RR（红色），GG（绿色）和BB（蓝色）。所有值必须介于0和FF之间。

::: warning
例如，＃0000FF值呈现为蓝色，因为蓝色的组成设置为最高值（FF）而其他设置为0。
:::

- RGB颜色

> 可在0和255之间，或一个百分比值（从0％到100％）之间的整数。
 
::: warning
例如RGB（0,0,255）值呈现为蓝色，因为蓝色的参数设置为最高值（255）而其他设置为0。
:::

> 此外，下面的值定义相同的颜色：RGB（0,0,255），RGB（0％，0％，100％）。

- RGBA颜色

> IE9, Firefox3+, Chrome, Safari,和Opera10+支持。

> RGBA颜色值是RGB颜色值alpha通道的延伸 - 指定对象的透明度。

> RGBA颜色值指定：RGBA（红，绿，蓝，alpha）。 

> Alpha参数是一个介于0.0（完全透明）和1.0（完全不透明）之间的参数。

- HSL色彩

> IE9, Firefox, Chrome, Safari,和Opera 10+.支持HSL颜色值。

> HSL代表色相，饱和度和亮度 - 使用色彩圆柱坐标表示。

> HSL颜色值指定：HSL（色调，饱和度，明度）。

> 色相是在色轮上的程度（从0到360）-0（或360）是红色的，120是绿色的，240是蓝色的。饱和度是一个百分比值;0％意味着灰色和100％的阴影，是全彩。亮度也是一个百分点;0％是黑色的，100％是白色的。

::: warning
background-color:hsl(120,65%,75%);
:::
- HSLA颜色

> IE9, Firefox3+, Chrome, Safari,和Opera10+.支持.

> HSLA的颜色值是一个带有alpha通道的HSL颜色值的延伸 - 指定对象的透明度。

> 指定HSLA颜色值：HSLA（色调，饱和度，亮度，α），α是Alpha参数定义的不透明度。 Alpha参数是一个介于0.0（完全透明）和1.0（完全不透明）之间的参数。

- 预定义/跨浏览器的颜色名称





## 8.background-image


```css
background-image: url(bgimage.gif);
```

- background-image 属性为元素设置背景图像。

- 元素的背景占据了元素的全部尺寸，包括内边距和边框，但不包括外边距。

- 默认地，背景图像位于元素的左上角，并在水平和垂直方向上重复。

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg16.png)

> background-color默认从border开始填充
> background-image默认从padding开始填充
> 如上述属性所说，可以分别用background-clip和background-origin来设置。

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/bg17.png)

如上所示，注意的是：

background-origin: border-box;设置了background-image从border开始，但是被border覆盖住了。













