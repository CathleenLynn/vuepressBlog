---
title: event对象
date: 2020-08-15
tags:
 -  javascript
 -  event
categories:
 -  JavaScript
author:
 -  言梧
keys:
 - '54ffc77c39adb324824ea4b08a430e52'
---
## 1.事件对象(event)

> event对象
- 代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
> 什么时候产生event对象？
- 当用户单击某个元素的时候，我们给这个元素注册的事件就会触发，该事件的本质就是一个函数，而该函数的**形参**接收一个event对象。

## 2.事件流
```
- 事件流发展史
- 冒泡
- 捕获
- addEventListener、attachEvent
```

## 3.event属性和方法

属性方法 | 描述 | 备注
---|---|---
type | 事件类型 | 如onclick的click
currentTarget | 返回其事件监听器触发该事件的元素 | 当前所绑定的事件对象（父
target | 返回触发此事件的元素 | 当前被点击的元素 （事件的目标节点）（子
srcElement/target | 事件源，发生事件的元素
clientX/clientY | 事件发生的时候，鼠标相对于浏览器窗口可视文档区域的左上角的位置。 | (在DOM标准中，这两个属性值都不考虑文档的滚动情况，也就是说，无论文档滚动到哪里，只要事件发生在窗口左上角，clientX和clientY都是0，所以在IE中，要想得到事件发生的坐标相对于文档开头的位置，要加上document.body.scrollLeft和 document.body.scrollTop)
offsetX/offsetY | 事件发生的时候，鼠标相对于源元素左上角的位置
screenX/screenY | 鼠标指针相对于显示器左上角的位置 | 如果你想打开新的窗口，这两个属性很重要
cancelBubble | 布尔属性，true时，将停止事件进一步起泡到包容层次的元素 | (e.cancelBubble = true; 相当于 e.stopPropagation();)
keyCode | 返回keydown和keyup事件发生的时候按键的代码，以及keypress事件的Unicode字符 | (firefox2不支持 event.keycode，可以用 event.which替代 )

## 4.event对象的一些兼容性写法
### 4.1 获得**event对象**兼容性写法
```
event || (event = window.event);
```

### 4.2 获得**target**兼容型写法
```
event.target||event.srcElement
```

### 4.3 阻止浏览器**默认行为**兼容性写法
```
event.preventDefault ? event.preventDefault() : (event.returnValue = false);
```

### 4.4 阻止**冒泡**写法
```
event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
```

### 4.5 **注册和删除**事件方法的形式
```js
// 绑定事件.
function on(id, eventType, fn) {
    var dom = this.isString(id) ? this.$id(id) : id;
    if(dom.addEventListener) {
        dom.addEventListener(eventType, fn);
    } else {
        if(dom.attachEvent) {
            dom.attachEvent('on' + eventType, fn);
        }
    }
},
// 解除绑定
function un(id, eventType, fn) {
    var dom = this.$id(id);
    if(dom.removeEventListener) {
        dom.removeEventListener(eventType, fn, false);
    } else {
        if(dom.detachEvent) {
            dom.detachEvent("on" + eventType, fn)
        }
    }

}
```


```html
<!--使用for in来输出一点东西：-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>无标题文档</title>
</head>
<body>
<input type="button" value="点击显示事件属性"  οnclick="fun(event)" />
<script type="text/javascript" language="javascript">
function fun(e){
<!--兼容低版本的IE要加上这句e=e||window.event;-->
    var evt=e||window.event;
    for(var pro in evt){
        document.write('event.'+pro+'='+evt.pro+'<br />');
    }
}
</script>
</body>
</html>
```
::: tip 
注：
- e可加可不加，如果后面需要**获取操作的信息 就要加e** 如果不需要，只是完成一个事件，就可以不加e
- 主流浏览器中：事件对象可以在事件的回调函数中通过参数传入，常规写法是简写为e。
- 低版本IE浏览器中：事件对象通过window对象中获取，要取得事件对象，即**window.event**。
:::