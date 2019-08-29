# CSS

 > 层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 样式表 语言，用来描述 HTML 或 XML（包括如 SVG、MathML、XHTML 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。

## 如何建立css
```html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Document</title>

<!--建立css 方式一-->
<style>
 /*此处填写css*/
 * {
 padding: 0;
 margin: 0;
 }
</style>
<!--建立css 方式二 创建单文件，在当前页面引入-->
<link rel="stylesheet" href="...">


</head>
    <!--建立css 方式三 内联-->
    <div style="padding: 0;margin: 0;"></div>
<body>
  
</body>
</html>
```

## css语言规则结构

![css规则结构](./def_css.gif)


## css选择器
css中选择器种类繁多，比如：
```css
/*通配符选择器*/
* {
 padding: 0;
 margin: 0;
}
/*id选择器*/
#select {
 padding: 0;
 margin: 0;
}
/*类选择器*/
.class-name {
  padding: 0;
  margin: 0;
}
/*标签选择器*/
h1 {
  padding: 0;
  margin: 0;
}
/*属性选择器*/
h1[name] {
  padding: 0;
  margin: 0;
}

/*<h1 name="123"></h1>*/

/*伪类选择器*/
a:focus {
  padding: 0;
  margin: 0;
}
/*伪元素选择器*/
.group::before,
.group::after {
  padding: 0;
  margin: 0;
}

/*...*/

```
 [全部的选择器请点此查看](https://www.w3school.com.cn/cssref/css_selectors.asp)
 
 CSS 选择器有很多，不同的选择器的权重和优先级不一样，对于一个元素，如果存在多个选择器，那么就需要根据权重来计算其优先级。
 
 权重分为四级，分别是：
 
* 代表内联样式，如style="xxx"，权值为 1000；
* 代表 ID 选择器，如#content，权值为 100；
* 代表类、伪类和属性选择器，如.content、:hover、[attribute]，权值为 10；
* 代表元素选择器和伪元素选择器，如div、p，权值为 1。


## float 浮动
float的属性有如下几个：`left`、`right`和`none`

`none`属于默认值，这里不过多关心

float 的元素会脱离文档流

## position定位
position主要用于网页定位

position的值有以下几个：`static`、`relative`、`absolute`和`fixed`;其中static是定位默认值，无需关心；

### relative
relative代表相对定位，它是相对于其自身定位

### absolute
定位设置为absolute，浏览器会递归查找该元素的所有父元素，如果找到一个设置了position:relative/absolute/fixed的元素，就以该元素为基准定位，如果没找到，就以浏览器边界定位。

### fixed
fixed 元素的定位是相对于 window （或者 iframe）边界。

### z-index
页面具有层级概念，当设置元素定位后可以设置z-index，设置元素展示在层级。

## 盒模型
对于css，我们必须了解它的盒子模型, 盒子模型包含以下几个属性：`content`,`padding`,`border`,`margin`

* `margin`：代表盒子的外边距
* `padding`：代表盒子的内边距
* `content`：代表盒子的内容
* `border`：代表盒子的边框

在浏览器里，盒子模型主要分为两种：`标准盒模型`和`IE盒模型`
两种盒子模型的区别主要在`width`的区别

![标准盒模型](./contentbox.png)
```js
// 标准盒子模型中，盒子的宽度width
const width = content
```

![IE盒模型](./borderbox.png)
```js
// IE盒子模型中，盒子的宽度width
const width = content + paddingLeft + paddingRight + borderLeft + borderRight 
```

盒子模型的转化主要使用box-sizing属性
* 标准盒子模型：`box-sizing: content-box`
* IE盒子模型：`box-sizing: border-box`

## flex
css3中新诞生的一种布局方式，前端布局中最为广泛使用的布局

推荐直接查看阮一峰老师的[博客](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)


## 页面布局

一般页面布局使用float,position,div基本即可实现
flex 则更为方便


## 变换
css3新增 transform属性，为前端带来更多的2d，3d变化

这里不详细讲解3d变化

主要新增了缩放`scale`，移动`translate`，旋转`rotate`，斜切`skew`

```css
.xx {
    transform: scale(1.1) translate(10px) rotate(45deg) skew(10deg);
}
```

[MDN上较为详细的讲解了2d图形的坐标系](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function#3D_%E5%9B%BE%E5%BD%A2%E7%9A%84%E5%9D%90%E6%A0%87)


## transition过渡
transition 可以实现一些简单的过渡效果，但和animation差别很大，animation是帧动画而transition只是一段过渡效果

transition 属性是一个简写属性，用于设置四个过渡属性：

* transition-property: 规定设置过渡效果的 CSS 属性的名称
* transition-duration: 规定完成过渡效果需要多少秒或毫秒。
* transition-timing-function: 规定速度效果的速度曲线。 更多效果可查看[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
* transition-delay: 定义过渡效果何时开始。

```css
.xx {
    transition: all .2s linear 1s
}
```

## 动画
通过 CSS3，我们能够创建动画，这可以在许多网页中取代动画图片、Flash 动画以及 JavaScript。


先来看下简单的动画创建过程
```css
div {
    animation: myfirst 5s;
    -moz-animation: myfirst 5s;	/* Firefox */
    -webkit-animation: myfirst 5s;	/* Safari 和 Chrome */
    -o-animation: myfirst 5s;	/* Opera */
}
@keyframes myfirst
{
    0%   {background: red; left:0px; top:0px;}
    25%  {background: yellow; left:200px; top:0px;}
    50%  {background: blue; left:200px; top:200px;}
    75%  {background: green; left:0px; top:200px;}
    100% {background: red; left:0px; top:0px;}
}
```

animation 属性是一个简写属性，用于设置六个动画属性：

* animation-name：规定需要绑定到选择器的 keyframe 名称。
* animation-duration：规定完成动画所花费的时间，以秒或毫秒计。
* animation-timing-function：规定动画的速度曲线。
* animation-delay：规定在动画开始之前的延迟。
* animation-iteration-count：`n`|`infinite`;规定动画应该播放的次数。
* animation-direction：`normal`|`alternate`;规定是否应该轮流反向播放动画。包含属性
* animation-fill-mode: `none`|`forwards`|`backwards`|`both`；定义动画结束时，最后一帧的位置


## 常用到的css属性
``` 
  display: none | block | inline-block | inline | flex
  font-size: 12px
  font-weight: bold
  color: red | rgb | rgba | hls
  background: color | url('...')
  width: 10px
  height: 10px
  margin: 0 0 0 0
  padding: 0 0 0 0
  border: 1px solid #eee
  float: left | right
  visible: hidden
  overflow: hidden
  position: relative | absoulte | fixed
  box-shadow: 0 0 0 0 ${color}
```

