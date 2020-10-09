---
title: 数组方法
date: 2020-09-29
tags:
 -  javascript
 -  数组
categories:
 -  javascript
---
# 数组方法
```
push(), 
pop(), 
unshift(), 
shift(),

join(), [字符串split()]
concat(), 
reverse(), 
sort()

slice(), 
splice()

indexOf() lastIndexOf(), 
includes(),
find(),
findIndex()

Array.isArray()

遍历数组的方法：
forEach()
map()
filter()
find()
some()
every()
reduce()
```
## ==-----修改原数组：==
- push()
- pop()
- unshift()
- shift()
- sort()
- reverse()
- splice()
## ==-----不修改原数组：==
- join()
- concat()
- slice()
- map()
- filter()
- some()
- every()

## concat()
> - 先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组
> - 在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本
```
var arr = [1,3,5,7];
var arrCopy = arr.concat(9, [11, 13]);//把传入的一位数组各个项添加进去
console.log(arrCopy);//[1, 3, 5, 7, 9, 11, 13]
console.log(arr);//[1, 3, 5, 7]------不修改原数组
```
传入一个二维数组：
```
var arr = [1, 3, 5, 7];
var arrCopy2 = arr.concat([9, [11, 13]]);
console.log(arrCopy2);//[1, 3, 5, 7, 9, Array[2]]
console.log(arrCopy2[5]);//[11, 13]------只展开一层数组
```
## reverse()

## sort()
> - sort()方法比较的是字符串，没有按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数
```
//从小打到排序
arr.sort((a, b) => a-b);

//从小打到排序
arr.sort((a, b) => b-a);
```

## slice(start, end)
> - start开始，end之前

## splice()
> - 删除、插入、替换
```
arrayObject.splice(初始下标, 要删除的数量, 要添加的元素item1, ....., itemX)
```
## indexOf() & lastIndexOf()
```
indexOf(要查找的项，[查找起点位置的索引] )
lastIndexOf(要查找的项，[查找起点位置的索引])
```
```
var arr = [1,3,5,7,7,5,3,1];
console.log(arr.indexOf(5);        //2   -----找到第一个就可
console.log(arr.lastindexOf(5);    //5
console.log(arr.indexOf(5，2);     //2
console.log(arr.lastindexOf(5，4); //2
console.log(arr.indexOf("5");      //-1
```



## 数组遍历的方法
#### 遍历1——forEach()
```
var arr = [1,2,3,4,5];
arr.forEach(function(item, index, arr){
  console.log(`[${arr}]中${index}处的值为：${item}`);  
})
    //  [1,2,3,4,5]中0处的值为：1
    //  [1,2,3,4,5]中1处的值为：2
    //  [1,2,3,4,5]中2处的值为：3
    //  [1,2,3,4,5]中3处的值为：4
    //  [1,2,3,4,5]中4处的值为：5
```

#### 遍历2——map()
> - "映射"、对  数组每一项  运行  给定函数， 返回 每次函数调用的结果  组成的数组
> - map() 不会对空数组进行检测。
> - map() 不会改变原始数组。
```
array.map(function(currentValue,index,arr), thisValue)
```

参数 | 描述
---|---
currentValue | 必须。当前元素的值
index | 可选。当前元素的索引值
arr | 可选。当前元素属于的数组对象
thisValue | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。


```
var arr = [1,2,3,4,5];
arr.map(function(item){
    console.log(item+1);
})
```
#### 遍历3——filter()

> - “过滤”、对  数组每一项  运行  给定函数， 返回 满足过滤条件  组成的数组
> - filter() 不会对空数组进行检测。
> - filter() 不会改变原始数组。

```
array.filter(function(currentValue,index,arr),thisValue)
```
参数 | 描述
---|---
currentValue | 必须。当前元素的值
index | 可选。当前元素的索引值
arr | 可选。当前元素属于的数组对象
thisValue | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

```
var arr = [1,2,3,4,5,6,7,8]
var arr2 = arr.filter(function(item, index, array){
    return item >= 2 && index <= array.length-4;
})
console.log(arr2);  //  [2,3,4,5]
```

#### 遍历4——find()

> - 返回数组中  通过函数条件  的  第一个元素  的值
> - find() 对于空数组，函数是不会执行的。
> - find() 并没有改变数组的原始值。
```
array.find(function(currentValue, index, arr),thisValue)
```

参数 | 描述
---|---
currentValue | 必需。当前元素
index | 可选。当前元素的索引值
arr | 可选。当前元素所属的数组对象
thisValue | 	可选。 传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值

```
var arr = [1,2,3,4,5,6,6,7]
var res = arr.find(function(item){
  return item % 2 === 0;
})
console.log(res);  // 2
```

#### 遍历5——some()
> - 判断数组中  是否存在  满足条件的项，只要有一项满足条件， 返回true，剩余的元素不会再执行检测
> - some() 不会对空数组进行检测。
> - some() 不会改变原始数组
```
array.some(function(currentValue,index,arr),thisValue)
```

参数 | 描述
---|---
currentValue | 必需。当前元素
index | 可选。当前元素的索引值
arr | 可选。当前元素所属的数组对象
thisValue | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"


```
var arr = [1,2,3,4,5,6,7,8]
var arr2 = arr.some(function(item){
    return item >= 2;
})
console.log(arr2);  // true
```
#### 遍历6——every()

> - 判断数组中  每一项  是否满足条件，所有项  满足， 返回true
> - 有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
```
array.every(function(currentValue,index,arr), thisValue)
```

参数 | 描述
---|---
currentValue | 必需。当前元素
index | 可选。当前元素的索引值
arr | 可选。当前元素所属的数组对象
thisValue | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"


```
var arr = [1,2,3,4,5,6,7,8]
var arr2 = arr.every(function(item){
    return item >= 2;
})
console.log(arr2);  // false
```
#### 遍历7——reduce()
> - reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
> - reduce() 对于空数组是不会执行回调函数的。

```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

参数 | 描述
---|---
total | 必需。初始值, 或者计算结束后的返回值。
currentValue | 必需。当前元素
index | 可选。当前元素的索引值
arr | 可选。当前元素所属的数组对象
initialValue | 可选。传递给函数的初始值


```
let arr = [2,7,3,1,8,12];
arr.reduce(function(total, item){
  return total+=item;
},2)
// 35
```

![An image](./js-img/avatar.jpg)