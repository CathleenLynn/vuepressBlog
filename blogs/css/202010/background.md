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

![An image](/css/bg1.png)

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
![An image](/css/bg2.png)

> 内部滚动条——图不动

> 页面滚动条——图不动

:::danger
注意：
background-attachment: fixed; 与默认值即background-attachment: scroll 相比，背景图片的定位起始位置不同，由于页面最上面有h1标签;
:::

接着上面的，弄清 background-attachment: fixed; 的图片定位位置

滚动页面滚动条，至h1标题划上去

如图：

![An image](/css/bg3.png)

可以看出：

> fixed 是相对于页面左上角定位；

> scroll是相对于设置背景图片的元素左上角定位。

> 而位置是background-position进行设置的。







## 3.background-position
**默认值：background-position：0% 0%**

![An image](css/bg4.png)

设置background-position: center;是从中间开始平铺。

如图

![An image](/css/bg5.png)








## 4.background-size
**默认值：background-size：auto;**

![An image](/css/bg6.png)

设置background-size: cover;![An image](/css/bg7.png)

设置background-size: contain;![An image](/css/bg8.png)




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


默认background-origin: padding-box;![An image](/css/bg9.png)

设置background-origin: border-box;![An image](/css/bg10.png)

设置background-origin: content-box;![An image](/css/bg11.png)




## 6.background-clip
**默认值：background-clip: border-box**

值 | 描述
---|---
border-box | 背景被裁剪到边框盒。
padding-box | 背景被裁剪到内边距框。
content-box | 	背景被裁剪到内容框。

默认background-clip: border-box;![An image](/css/bg12.png)

设置background-clip: padding-box;![An image](/css/bg13.png)

设置background-clip: content-box;![An image](/css/bg14.png)
