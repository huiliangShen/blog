# JS基础
::: warning
本文中涉及到的JS部分主要以`ECMScript`为主，基本不太涉及`DOM`（Document Object Model），`BOM`（Browser Object Model）。
::: 
::: tip
总所周知，JS是一门`动态类型语言`即`弱类型语言`，与`静态类型语言`即`强类型语言`，它们之间最大的**不同之处**在于，静态语言是在使用前必须声明类型，编译时即可确定，可以规避变量类型导致的错误，典型的语言有（Java、C++和C#等）；而动态类型，在运行时确定数据类型的语言且变量可被其他类型覆盖。
::: 

## JS数据类型

主要分为两大类，`对象类型`和`基础类型`。
### 基础类型
`基础类型`分为`null`、`undefined`、`number`、`string`、`boolean`、`symbol`和[`bigint`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#BigInt_type)七种类型。

`NaN`也属于`number`类型，且NaN !== NaN.

`bigint`在MDN中的解释如下
::: tip
 在JavaScript中，BigInt 是一种数字数据类型，可以表示任意精度格式的整数。在其他编程语言中，可以存在不同的数字类型，例如：整数，浮点数或Bignums。
:::

`bigint`类型的出现可以解决js`number`精度不够的问题

``` js
// 即时长整型也能完美展示
let bigNumber = 12312312312321321321323472934732479237489274982374983n;
// 但转为number类型会丢失精度
paresInt(bigNumber);
// 1.2312312312321321e+52
```
### 对象类型

对象可以是`function` `array` `object`
::: warning
JS内所有对象都是继承自Object类型。但也不是绝对的！
:::
列举js内创建对象的方式
``` js
// 1
let obj = {name: 1};
// 2
function getName(){}
let obj = new getName();
// 3
let obj = new Object({name: 1});
// 4
let obj = Object.create(null);
```

## 判断JS数据类型
动态语言判断数据类型是个重要的问题，若是数据类型判断错误，很有可能导致程序bug。

### TypeOf
typeof 算是判断基础类型最好用的方法了

```js
console.log(typeof '1')
console.log(typeof 1)
console.log(typeof 11n)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof Symbol())
console.log(typeof true)
console.log(typeof function(){})
console.log(typeof {})
// number
// bigint
// object
// undefined
// symbol
// boolean
// function
// object
```
`null`被判断为`object` 也算是见怪不怪的问题了。究其原因主要是因为不同的对象在底层都表示为二进制，在JS中二进制前三位都为 0 的话会被判断为`object`类型，null 的二进制表示是全 0，自然前三位也是 0，所以执行 typeof 时会返回`object`。

### Instanceof