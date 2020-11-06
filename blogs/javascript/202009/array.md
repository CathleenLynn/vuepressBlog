---
title: 数组方法
date: 2019-05-28
tags:
 -  javascript
 -  数组
categories:
 -  JavaScript
author:
 -  言梧
---
# 数组方法

## 方法总览
```js
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
for...in
for...of
数组去重
伪数组→数组
数组扁平化
```

## 方法分类（修改&不修改原数组）
### 修改原数组：
- push()
- pop()
- unshift()
- shift()
- sort()
- reverse()
- splice()
### 不修改原数组：
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
```js
var arr = [1,3,5,7];
var arrCopy = arr.concat(9, [11, 13]);//把传入的一位数组各个项添加进去
console.log(arrCopy);//[1, 3, 5, 7, 9, 11, 13]
console.log(arr);//[1, 3, 5, 7]------不修改原数组
```
传入一个二维数组：
```js
var arr = [1, 3, 5, 7];
var arrCopy2 = arr.concat([9, [11, 13]]);
console.log(arrCopy2);//[1, 3, 5, 7, 9, Array[2]]
console.log(arrCopy2[5]);//[11, 13]------只展开一层数组
```
## reverse()

## sort()
> - sort()方法比较的是字符串，没有按照数值的大小对数字进行排序，要实现这一点，就必须使用一个排序函数

```js
//从小打到排序
arr.sort((a, b) => a-b);

//从小打到排序
arr.sort((a, b) => b-a);
```

## slice(start, end)
> - start开始，end之前

## splice(...)
> - 删除、插入、替换

```js
arrayObject.splice(初始下标, 要删除的数量, 要添加的元素item1, ....., itemX)
```

## indexOf() & lastIndexOf()
```js
indexOf(要查找的项，[查找起点位置的索引] )
lastIndexOf(要查找的项，[查找起点位置的索引])
```

```js
var arr = [1,3,5,7,7,5,3,1];
console.log(arr.indexOf(5);        //2   -----找到第一个就可
console.log(arr.lastindexOf(5);    //5
console.log(arr.indexOf(5，2);     //2
console.log(arr.lastindexOf(5，4); //2
console.log(arr.indexOf("5");      //-1
```



## 数组遍历的方法
### 遍历1——forEach()
```js
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

### 遍历2——map()
> - "映射"、对  数组每一项  运行  给定函数， 返回 每次函数调用的结果  组成的数组
> - map() 不会对空数组进行检测。
> - map() 不会改变原始数组。
```js
array.map(function(currentValue,index,arr), thisValue)
```

参数 | 描述
---|---
currentValue | 必须。当前元素的值
index | 可选。当前元素的索引值
arr | 可选。当前元素属于的数组对象
thisValue | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。


```js
var arr = [1,2,3,4,5];
arr.map(function(item){
    console.log(item+1);
})
```
### 遍历3——filter()

> - “过滤”、对  数组每一项  运行  给定函数， 返回 满足过滤条件  组成的数组
> - filter() 不会对空数组进行检测。
> - filter() 不会改变原始数组。

```js
array.filter(function(currentValue,index,arr),thisValue)
```
参数 | 描述
---|---
currentValue | 必须。当前元素的值
index | 可选。当前元素的索引值
arr | 可选。当前元素属于的数组对象
thisValue | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

```js
var arr = [1,2,3,4,5,6,7,8]
var arr2 = arr.filter(function(item, index, array){
    return item >= 2 && index <= array.length-4;
})
console.log(arr2);  //  [2,3,4,5]
```

### 遍历4——find()

> - 返回数组中  通过函数条件  的  第一个元素  的值
> - find() 对于空数组，函数是不会执行的。
> - find() 并没有改变数组的原始值。
```js
array.find(function(currentValue, index, arr),thisValue)
```

参数 | 描述
---|---
currentValue | 必需。当前元素
index | 可选。当前元素的索引值
arr | 可选。当前元素所属的数组对象
thisValue | 	可选。 传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值

```js
var arr = [1,2,3,4,5,6,6,7]
var res = arr.find(function(item){
  return item % 2 === 0;
})
console.log(res);  // 2
```

### 遍历5——some()
> - 判断数组中  是否存在  满足条件的项，只要有一项满足条件， 返回true，剩余的元素不会再执行检测
> - some() 不会对空数组进行检测。
> - some() 不会改变原始数组
```js
array.some(function(currentValue,index,arr),thisValue)
```

参数 | 描述
---|---
currentValue | 必需。当前元素
index | 可选。当前元素的索引值
arr | 可选。当前元素所属的数组对象
thisValue | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"


```js
var arr = [1,2,3,4,5,6,7,8]
var arr2 = arr.some(function(item){
    return item >= 2;
})
console.log(arr2);  // true
```
### 遍历6——every()

> - 判断数组中  每一项  是否满足条件，所有项  满足， 返回true
> - 有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
```js
array.every(function(currentValue,index,arr), thisValue)
```

参数 | 描述
---|---
currentValue | 必需。当前元素
index | 可选。当前元素的索引值
arr | 可选。当前元素所属的数组对象
thisValue | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"


```js
var arr = [1,2,3,4,5,6,7,8]
var arr2 = arr.every(function(item){
    return item >= 2;
})
console.log(arr2);  // false
```
### 遍历7——reduce()
> - reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
> - reduce() 对于空数组是不会执行回调函数的。

```js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

参数 | 描述
---|---
total | 必需。初始值, 或者计算结束后的返回值。
currentValue | 必需。当前元素
index | 可选。当前元素的索引值
arr | 可选。当前元素所属的数组对象
initialValue | 可选。传递给函数的初始值


```js
let arr = [2,7,3,1,8,12];
arr.reduce(function(total, item){
  return total+=item;
},2)
// 35
```

### 遍历8——for...in
> 数组、对象的属性

```js
//对象的key
let obj = {name:'tom', age:12};
for(key in obj){
    console.log(key)
}
//name  age

//数组的index
let arr = [2,5,2,7,3];
for(index in arr){
    console.log(index)
}
//0  1  2  3  4
```


### 遍历9——for...of
> 数组、Set、Map、伪数组

```js
//数组
let arr = [2,5,2,7,3];
for(a of arr){console.log(a)}
// 2  5  2  7  3
```


## 数组去重
**1. indexof-法1：**

新建一个数组，遍历去要重的数组，当值不在新数组的时候（indexOf为-1）就加入该新数组中。

**2. indexof-法2：**

如果当前数组的第 i 项在当前数组中第一次出现的位置不是 i，那么表示第 i 项是重复的，忽略掉。否则存入结果数组。

**3. 排序，循环，相邻相同就去掉**

**4. 优化遍历数组法:**
双层循环，外循环表示从0到arr.length，内循环表示从i+1到arr.length, 将没重复的右边值push新数组。

```js
for(var j=i+1; j<arr.length;j++){
    if(arr[i] === arr[j]){
        ++i;
    }
}
hash.push(arr[i]);
```

**5. 双层循环,splice去重**

```js
if(arr[i] == arr[j]){
    arr.splice(j, 1);
    j--;
}
```


**6. 对象属性不能相同**

**7. 最短的去重：**

```
[...new set对象（arr）]
```

**8. includes**
```
if(!arr.includes(arr[i])){
    arr.push(arr[i]);
}
```

**9. filter**

## 伪数组→数组
1. 创建数组，push进去
2. Array. prototype. slice. call（arr）
3. [ ]. slice. call
4. ES6 —— Array.from()
5. [...arguments]
6. （slice源码就是普通的方法）

## 数组扁平化
### 扁平化方法1：
> 循环数组+递归
> 循环数组，如果数据中还有数组(isArray判断)的话，递归调用flatten扁平函数（利用for循环扁平），用concat连接，最终返回result;

```js
function flatten(arr){
    var res = []
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            res = res.concat(flatten(arr[i]))
        }else{
            res.push(arr[i])
        }
    }
    return res
}
var arr = [1,[2,3,[4]]]
flatten(arr)  // [1,2,3,4]
```

### 扁平化方法2：
> 利用apply

可以用apply的原因如下：
```js
var arr = [1,[2,3,[4]]]
[].concat.apply([], arr);
//[1,2,3,[4]]
```
> 利用arr.some判断(isArray判断)当数组中还有数组的话，递归调用flatten扁平函数(利用apply扁平), 用concat连接，最终返回arr;

```js
function flatten(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat.apply([], arr)
    }
    return arr
}
var arr = [1,[2,3,[4]]]
flatten(arr)  // [1,2,3,4]
```

### 扁平化方法3：
> reduce方法

可以用reduce的原因如下：
```js
var flattened = arr.reduce(function(prev, cur){
    return prev.concat(cur)
}, [])
console.log(flattened)
// [1,2,3,[4]]
```

> 使用reduce, 当数组中还有数组断(isArray判断)的话，递归调用flatten扁平函数(利用reduce扁平), 用concat连接，最终返回arr.reduce的返回值;

```js
function flatten(arr){
    return arr.reduce(function(prev, cur){
        return prev.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}
var arr = [1,[2,3,[4]]]
flatten(arr)  // [1,2,3,4]
```


### 扁平化方法4：
> es6展开运算符...

可以用...的原因如下：
```js
var arr = [1,[2,3,[4]]]
console.log(...arr)
//[1,2,3,[4]]
```

> 利用arr.some判断当数组中还有数组断(isArray判断)的话，递归调用flatten扁平函数(利用es6展开运算符扁平), 用concat连接，最终返回arr;

```js
function flatten(arr){
    while(arr.some(item => Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}
var arr = [1,[2,3,[4]]]
flatten(arr)  // [1,2,3,4]
```



### 扁平化方法5：
> toString()——数组元素为数字的情况

```js
[1,[2,3,[4]]].toString()
//"1,2,3,4"
```
> 数组适用toString()方法后变成以逗号分割的字符串，然后map遍历数组把每一项再变回整数并返回map后的结果。

```js
function flatten(arr){
    return arr.toString().split(',').map(item => parseInt(item))
}
var arr = [1,[2,3,[4]]]
flatten(arr)  // [1,2,3,4]
```

