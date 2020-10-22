---
title: propotype相关方法
date: 2019-07-21
tags:
 -  javascript
 -  prototype
categories:
 -  JavaScript
author:
 -  言梧
---



```js
isPrototypeOf
Object.getPrototypeOf
hasOwnProperty
Object.getOwnPropertyName
Object.keys
```

```js
function Person(){
    this.age = 100
}
Person.prototype.name = function(){
    console.log('name')
}
var person1 = new Person;
```



## 1.isPrototypeOf()

```js
Person.prototype.isPrototypeOf(person1);　　
//true
```


## 2.Object.getPrototypeOf()

```js
console.log(Object.getPrototypeOf(person1) == Person.prototype)　　
//true

console.log(Object.getPrototypeOf(person1).name)　　
//ƒ (){
//    console.log('name')
//}
```


## 3.hasOwnProperty()
> 判断属性是否是存在于自己的实例中，如果是：返回true,如果仅仅存在自己的原型总，则返回false

```js
person1.hasOwnProperty("age");　　//true　　因为age是自己实例的属性
person1.hasOwnProperty("name");　　//false　　因为name是原型Person.prototype上的属性
```


## 4.Object.keys()
> 获得所有实例属性，并仅可枚举的

```js
var keys = Object.keys(person1.__proto__);     //同 Person.prototype
console.log(keys);　　                         //["name"]
var keys1 = Object.keys(person1);
console.log(keys1);                            //["age"]
```



## 5.Object.getOwnPropertyName()
> 所有实例属性，无论他是否可枚举

```js
var keys = Object.getOwnPropertyNames(Person.prototype);
console.log(keys);　　
//["constructor","name"]
```


> 总结

- 所有开发者定义的属性，均是可枚举的；

- 不可枚举的属性有： 
    -   toLocaleString()、
    -   toString()、
    -   valueOf()、
    -   hasOwnProperty()、
    -   propertyIsEnumerable()　

- es5将constructor和prototype的 [ [ Enumerable ] ] = false ，即可枚举属性设置为了 false



