---
title: ES6遍历对象的方法
date: 2020-10-22
tags:
 -  javascript
 -  ES6
 -  对象
categories:
 -  JavaScript
author:
 -  言梧
---

首先，明确可枚举性的定义：

对象的每个属性都有一个描述对象，用来控制该属性的行为，**Object.getOwnPropertyDescriptor**方法可以获取该属性的描述对象。描述对象的enumerable属性，称为可枚举性，如果为true，为可枚举的，如果为false，就表示某些操作会忽略当前属性。


## 1. for...in
> 循环遍历对象【自身】的属性和【继承】的【可枚举】属性(不含Symbol属性)

::: danger
可以处理对象、数组、字符串
:::

```js
var obj = {name:'tom', age:12, sex:'male'};
//对象的属性也可加引号
for(var i in obj){
    console.log(i,":",obj[i]);
}
//name : tom
//age : 12
//sex : male

var obj = {"name":"Poly", "career":"it"}
Object.defineProperty(obj, "age", {value:"forever 18", enumerable:false});
Object.prototype.protoPer1 = function(){console.log("proto");};
Object.prototype.protoPer2 = 2;
console.log("For In : ");
for(var a in obj) console.log(a);
//name
//career
//protoPer1
//protoPer2
//对象自身+继承+可枚举
```




## 2. Object.keys()
> 返回一个数组，元素均为对象【自有】的【可枚举】属性

::: danger
可以处理对象、数组、字符串
:::

```js
var obj = {name:'tom', age:12, sex:'male'};
Object.keys(obj).forEach(function(key){
    console.log(key, obj[key]);
})
//name tom
//age 12
//sex male

var obj = {name:'tom', age:12, sex:'male'};
console.log(Object.keys(obj));
//["name","age","sex"]

var obj = {"name":"Poly", "career":"it"}
Object.defineProperty(obj, "age", {value:"forever 18", enumerable:false});
Object.prototype.protoPer1 = function(){console.log("proto");};
Object.prototype.protoPer2 = 2;
console.log("Object.keys:")
console.log(Object.keys(obj));
//["name", "career"]
//对象自身+可枚举属性
```




## 3. Object.getOwnPropertyNames(obj)
> 返回一个数组,包含对象【自身】的所有属性(不含Symbol属性,但是包括【不可枚举】属性)

```js
var obj = {name:'tom', age:12, sex:'male'};
Object.getOwnPropertyNames(obj).forEach(function(key){
    console.log(key, obj[key])
})
//name tom
//age 12
//sex male

var obj = {name:'tom', age:12, sex:'male'};
console.log(Object.getOwnPropertyNames(obj))
//["name", "age", "sex"]

var obj = {"name":"Poly", "career":"it"}
Object.defineProperty(obj, "age", {value:"forever 18", enumerable:false});
Object.prototype.protoPer1 = function(){console.log("proto");};
Object.prototype.protoPer2 = 2;
console.log("Object.getOwnPropertyNames: ");
console.log(Object.getOwnPropertyNames(obj));
//["name", "career", "age"]
//对象自身属性
```




## 4. Object.values()
> 返回一个数组，包含对象【自有】的（不含继承的）所有【可遍历】属性的Value值（不含Symbol属性）
::: danger
可以处理对象、字符串
:::

```js
var obj = {name:'tom', age:12, sex:'male'};
console.log(Object.values(obj))
//["tom", 12, "male"]

//返回数组的成员顺序
var obj = {100:'tom', 2:12, 7:'male'};
console.log(Object.values(obj))
//[12, "male", "tom"]

//Object.value只会遍历对象自身的可遍历属性
const obj = Object.create({},{p : {value : 10}});
console.log(Object.values(obj));    
console.log(Object.getOwnPropertyDescriptors(obj));
```
:::danger
上面第三段代码中，

Object.create方法的第二个参数添加的对象属性（属性p），如果不显式声明，默认是不可遍历的，因为p的属性描述对象的enumerable默认是false，Object.values不会返回这个属性。

只要把enumerable改成true，Object.values就会返回属性p的值。
:::

```js
//如果Object.values()方法的参数是一个字符串，会返回各个字符组成的一个数组
console.log(Object.values("foo"));      
//["f","o","o"]

//如果参数不是对象，Object.values会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组。如果参数为undefined或者null会报错。
console.log(Object.values(123));        //[]
console.log(Object.values(true));       //[]
```



## 5. Object.entries()
> 返回一个数组，包含对象【自身】的（不含继承的）所有【可遍历】（enumerable）属性的【键值对】数组

```js
var obj = {name:'tom', age:12, sex:'male'};
console.log(Object.entries(obj))
//[["name","tom"],["age",12],["sex","male"]]
```
:::danger
Object.entries方法的另一个用处是，将对象转为真正的Map结构

如下：
:::
```js
var obj = {name:'tom', age:12, sex:'male'};
const map = new Map(Object.entries(obj))
console.log(map);
```

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/objectMethod1.png)

