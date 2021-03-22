---
title: mouseover事件，蒙层闪烁问题
date: 2021-3-16
tags:
 -  mouseover
categories:
 -  JavaScript
author:
 -  言梧
---

## 问题
> 手写上传文件展示缩略图，hover时展示蒙层，蒙层透明置灰上有放大预览和删除。但鼠标hover时一直闪烁。

## 原因
> 显示层遮住了添加事件的元素，所以反复执行 onmouseover onmouseout。

## 解决

```
//给蒙层添加样式
pointer-events: none;
```

## pointer-events属性：
- > 添加了这个属性的元素在什么情况下可以成为鼠标事件的 target
- > 当元素的 pointer-events 属性取值为 none的时候，表示该元素不是鼠标事件的目标元素，并且鼠标事件穿透该元素指定它下面的元素。