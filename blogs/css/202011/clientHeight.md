---
title: 搞清clientHeight、offsetHeight、scrollHeight、offsetTop、scrollTop
date: 2020-11-04
tags:
 -  javascript
categories:
 -  JavaScript
author:
 -  言梧
---



# 搞清clientHeight、offsetHeight、offsetTop、scrollHeight、scrollTop


```js
document.body.clientHeight  //网页可见区域高
document.body.offsetHeight  //网页可见区域高（包括边线的高）
document.body.scrollHeight  //网页正文全文高
document.body.scrollTop     //网页被卷去的高
window.screen.height        //屏幕分辨率高
```

---

> clientHeight和offsetHeight属性和元素的滚动、位置没有关系它代表元素的高度






## clientHeight
> clientHeight：包括padding但不包括border、水平滚动条、margin的元素的高度。对于inline的元素这个属性一直是0，单位px，只读元素。

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/clientHeight1.png)








## offsetHeight
> offsetHeight：包括padding、border、水平滚动条，但不包括margin的元素的高度。对于inline的元素这个属性一直是0，单位px，只读元素。

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/clientHeight2.png)


:::danger
接下来讨论出现有滚动条时的情况：
:::






## scrollHeight
> 当本元素的子元素比本元素高且overflow=scroll时，本元素会scroll，这时：

> scrollHeight: 因为子元素比父元素高，父元素不想被子元素撑的一样高就显示出了滚动条，在滚动的过程中本元素有部分被隐藏了，scrollHeight代表包括当前不可见部分的元素的高度。而可见部分的高度其实就是clientHeight，也就是scrollHeight>=clientHeight恒成立。在有滚动条时讨论scrollHeight才有意义，在没有滚动条时scrollHeight==clientHeight恒成立。单位px，只读元素。

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/clientHeight3.png)







## offsetTop
> offsetTop: 当前元素顶部距离最近父元素顶部的距离,和有没有滚动条没有关系。单位px，只读元素。

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/clientHeight5.png)





## scrollTop
> scrollTop: 代表在有滚动条时，滚动条向下滚动的距离也就是元素顶部被遮住部分的高度。在没有滚动条时scrollTop==0恒成立。单位px，可读可设置。

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/clientHeight4.png)


[参考](https://blog.csdn.net/qq_35430000/article/details/80277587)