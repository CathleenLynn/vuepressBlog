---
title: mapState 及 mapMutations 的使用方法
date: 2020-11-06
tags:
 -  vue
 -  vuex
categories:
 -  VUE
author:
 -  言梧
---

## state
  state是什么?

>   定义:state(vuex) ≈ data (vue)

> vuex的state和vue的data有很多相似之处,都是用于存储一些数据,或者说**状态值**.这些值都将被**挂载数据**和**dom的双向绑定事件**,也就是当你改变值的时候可以触发dom的更新.

虽然state和data有很多相似之处,但state在使用的时候一般被挂载到子组件的**computed计算属性**上,这样有利于state的值发生改变的时候及时响应给子组件。
  
如果你用data去接收$store.state,当然可以接收到值,但由于这只是一个简单的赋值操作,因此state中的状态改变的时候不能被vue中的data监听到,当然你也可以通过watch $store去解决这个问题。

  综上所述,请用computed去接收state,如下：
  
```js
//state.js
export default new Vuex.Store({
  state: {
    count: 1,
    name: 'lynn',
    sex: '女',
    from: 'china'
  },
  mutations: {
    decrement(state, count){
      state.count--
    },
    increment(state, count){
      state.count++
    }
  },
})
```

```html
<template>
  <div id="example">
    <button @click="decrement">-</button>
    {{count}}
    {{dataCount}}
    <button @click="increment">+</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataCount: this.$store.state.count //用data接收
    }
  },
  computed:{
    count(){
      return this.$store.state.count //用computed接收
    }
  }
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>
```

结果如下，用data接收的值不能及时响应更新,用computed就可以。

![](https://gitee.com/lynnwutong/blog-img/raw/master/img/mapState1.png)






## mapState 辅助函数
  mapState是什么?
>  表面意思:mapState是state的辅助函数.这么说可能很难理解

- 抽象形容:mapState是state的**语法糖**
- 实际作用:当一个组件需要获取**多个状态**时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你**少按几次键**

> 在使用mapState之前,要导入这个辅助函数：

```js
import { mapState } from 'vuex'
```
> 使用：

```html
<template>
  <div id="example">
    <button @click="decrement">-</button>
    {{count}}
    {{dataCount}}
    <button @click="increment">+</button>
    
    <div>{{sex}}</div>
    <div>{{from}}</div>
    <div>{{myCmpted}}</div>
  </div>
</template>

<script>
//引入
import { mapState } from 'vuex'

export default {
  data () {
    return {
      str: '国籍',
      dataCount: this.$store.state.count
    }
  },
  computed: mapState({
    count: 'count', // 第一种写法
    sex: (state) => state.sex, // 第二种写法
    from: function (state) { // 第三种写法，用普通函数this指向vue实例,和箭头函数有区别
      return this.str + ':' + state.from
    },
    
    // 注意下面的写法中，箭头函数的this指针并没有指向vue实例,因此不要滥用箭头函数
    // from: (state) => this.str + ':' + state.from
    
    myCmpted: function () {
      // 这里不需要state,测试一下computed的原有用法
      return '测试' + this.str
    }
  }),
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  },
  created () {
    // 写个定时器，发现computed依旧保持了只要内部有相关属性发生改变不管是当前实例data中的改变，还是vuex中的值改变都会触发dom和值更新
    setTimeout(() => {
      this.str = '国家'
    }, 1000)
  }
}
</script>
 
```
结果展示：
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/mapState2.png)
1秒后变为：
![](https://gitee.com/lynnwutong/blog-img/raw/master/img/mapState3.png)

---

> 当然computed不会因为引入mapState辅助函数而失去原有的功能---用于扩展当前vue的data,
> 只是写法会有一些奇怪,如果你已经写了一大堆的computed计算属性,做了一半发现你要引入vuex,还想使用mapState辅助函数的方便,你可以需要做下列事情：

```js
//之前的computed
computed:{
    fn1(){ return ...},
    fn2(){ return ...},
    fn3(){ return ...}
    ........
}
//引入mapState辅助函数之后
 
computed:mapState({
    //先复制粘贴
    fn1(){ return ...},
    fn2(){ return ...},
    fn3(){ return ...}
    ......
    //再维护vuex
    count:'count'
    .......
})
```
> 但是，有种更方便的写法：






## ...mapState

首先，看个例子：

```js
let MapState = mapState({
      count: 'count',
      sex: (state) => state.sex
})
let json = {
      'a': '我是json自带的',
      ...MapState
}
console.log(json)
//{ a: '我是json自带的', 
  //count: { [λ: mappedState] vuex: true }, 
  //sex: { [λ: mappedState] vuex: true } }
```
这里的json可以成功将mapState return的json格式,和json自带的a属性成功融合成一个新的对象.你可以将这个称为**对象混合**

这样,你就可以自由的使用mapState了.
```js
//之前的computed
computed:{
    fn1(){ return ...},
    fn2(){ return ...},
    fn3(){ return ...}
    ........
}

//引入mapState辅助函数之后
computed:{
    //原来的继续保留
    fn1(){ return ...},
    fn2(){ return ...},
    fn3(){ return ...}
    ......
    //再维护vuex
    ...mapState({  //这里的...不是省略号了,是对象扩展符
        count:'count'
    })
}
```













## 辅助函数mapMutations详细解析

> mapMutations是vuex的mutation的辅助函数，用于在组件中映射mutation内的方法，以便在该组件中直接使用mutation里的方法 (说白了，就是一**语法糖**)


### 1.在组件中导入vuex中的mapMutations:
```js
import { mapMutations } from 'vuex'
```





### 2.在组件中导入mutation里的方法名：
```js
...mapMutations([   //使用es6的拓展运算符
        'INCREASE_SHOPCART',   
        'DECREASE_SHOPCART'   
      ]) 
//约定将mutation里的方法名为大写，并且导入时要给其加上引号
```
> 这一步，是将mutation里的函数映射到组件里，在组件里 ：

```js
this.INCREASE_SHOPCART === this.$store.commit('INCREASE_SHOPCART') //true
```

> 在有参数的情况下，mutation的state默认参数可以省略 ：

```js
this.INCREASE_SHOPCART(id) === this.$store.commit('INCREASE_SHOPCART',id) //true
```






### 举个栗子：点击btn按钮增减商品数量
- 组件dom :

```html
//shopCart.vue 
//template
<button class="fl" @click='decrease(item.id)'>-</button>
<input type="number" class="fl" v-model="item.count"  >
<button class="fl" @click='increase(item.id)'>+</button>
```
- mutations :

```js
//mutations.js
INCREASE_SHOPCART(state,id){
    state.shopCartData.forEach(e=>{
      if(e.id === id){
        e.count ++
      }
    })
  },
  DECREASE_SHOPCART(state,id){
    state.shopCartData.forEach(e=>{
      if(e.id === id && e.count >1){
        e.count --
      }
    })
  }
```
- 组件里的methods:

```js
import { mapMutations } from 'vuex' // 先从vuex里导入 mapMutations
methods:{
     ...mapMutations([  
        'INCREASE_SHOPCART', //将mutation里的方法映射到该组件内
        'DECREASE_SHOPCART'  //等同于this.$store.commit('DECREASE_SHOPCART')  
      ]),
     increase(id){
        this.INCREASE_SHOPCART(id)
//由于上一步已经将mutation映射到组件内，所以组件可以直接调用INCREASE_SHOPCART  
     }
     decrease(id){
        this.DECREASE_SHOPCART(id)
//同理
     }
}
```

[参考](https://blog.csdn.net/dkr380205984/article/details/82185740)

[参考](https://www.cnblogs.com/hjk1124/p/12672859.html)