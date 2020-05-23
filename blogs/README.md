### 2020-5-23 前端模块化

大纲
- 前言
- 什么是前端模块化
- 为什么要做前端模块
- 不断发展的模块化解决方案
- 展望

#### 前言

对于入门前端不久的同学，可能经常会听到或看到模块化这个概念，比如在很多的面经中，又或者是在书中看到，但常常让人很困惑。前端发展到如今这个webpack一统天下的时代，大部分人都是直接上手`webpack`搭建好的脚手架，`create-react-app`、`vue-cli 4.x`等等，然后就是一顿操作
```javascript
import a from './a.vue'
import * as types from  'b.js'
import { sum, reduce } from 'c.js'

export default {}
export const sum = (a, b) => a + b
```
例如上面这种操作，大部分人可能都只是知道怎么用，但却不知道为什么这么做！
所以写下这边文章做分享！不足之处也请各位多多包涵。

#### 什么模块化

按自己的话语来说就是将程序分成多个模块，每个模块具有特定的功能并且高度独立。模块化的开发方式可以提高代码复用率，方便进行代码的管理，一个文件就是一个模块并且都拥有自己的作用于，对外只暴露特定的变量和函数。

#### 为什么要做前端模块

Javascript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。发展至今，我们现在有了运行大量 Javascript 脚本的复杂程序，还有一些被用在其他环境（例如 Node.js）。

JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如 Ruby 的`require`、Python 的`import`，甚至就连 CSS 都有`@import`，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。

~~如果还是以之前那种方式加载js脚本，那么浏览器遇到的script中的js文件越大，解析时长越长，资源的加载是同步的，(当然你可能会想到`defer`、`async`这样的写法，下面也将会讲到)白屏时间越长，如果资源文件过大，也有一定几率出现js脚本加载失败的情况。~~

#### 模块化带来的好处

1. **命名空间**

   早起前端开发我们大部分的js文件都是以如下方式引入

    ```html
    <script script="./a.js"></script>
    <script script="./b.js"></script>
    ```

   而在内部我们可能在a.js，b.js中定义了这么一个方法

   ```js
   // a.js
   function add() {
     var args = Array.prototype.slice.call(arguments, 0)
     return args.reduce(function(pre, next){return pre + next})
   }
   // b.js
   function add(a, b) {
     return a + b
   }
   ```

   a,b可能不是同一个开发人员写的，但他们之中的一个人想都没想就加上了这个方法，到底方法名称冲突，编译时后者的方法定义会覆盖前者的，然后有可能直接导致项目报错崩溃。

   

   模块化可以为变量创建私有空间来避免**命名空间污染**

2. **可重用性**

   可以做成通用类库，方便下个项目中重用

3. **可维护性**

   每个模块都是独立的，一个设计优良的模块应该尽可能的减少对代码库的依赖，只针对自己的需求而适当改动，而且更新模块相对于更新耦合类的代码来说要容易的多了。
   
4. 封闭作用域


#### 不断发展的模块化解决方案

前端开发发展至今已经度过了n(n >= 5)个年头，我 也算是中间插入的随大流者。

> 知乎上有人这样说：前端模块化的发展根据一些特征，可以划分为三个阶段。以阶段二 CommonJS 的出现最为开创性的代表，引领多种规范竞争，利于发展，最终标准化。

接下来我们也按照这几个阶段来讲解

#### 阶段一：语法层面的约定封装

初期阶段，一些简单粗暴的约定封装，方式许多，优势劣势各有不同。大多利用 JavaScript 的语言特性和浏览器特性，使用 script 标签、目录文件的组织、闭包、IIFE、对象模拟命名空间等方法。

```js
// 1.通过简单的文件名来做归类
// -js
// --module1.js
// --module2.js

// 2.通过命名空间
// 代码来自：https://github.com/seajs/seajs/issues/547
var org = {}
org.CoolSite = {}
org.CoolSite.Utils = {}

org.CoolSite.Utils.each = function (arr) {
}

org.CoolSite.Utils.log = function (str) {
}

// 3.通过闭包
// 代码来自 你不知道的js上 page 51
function CoolModule() {
  var something = 'cool'
  var another = [1,2,3]
  
  function doSomething() {
    console.log('something')
  }
  function doAnother() {
    console.log(another.join(','))
  }
  
  return {
    doSomething,
    doAnother
  }
}

// 4.IIFE
// jQuery 1.x版本: https://cdn.bootcdn.net/ajax/libs/jquery/1.8.1/jquery.js
(function(window) {
  // 只能在闭包内访问
  // ...
  // Define a local copy of jQuery
	var jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery )
	}
  window.$ = window.jQuery = jQuery
  jQuery.fn = jQuery.prototype = function() {...}
})(window)

// 5. 沙箱模式 （YUI3）
// hello.js
// 来自网络
YUI.add('hello', function(Y) {
    Y.hello = {
        sayHi: function(){
          console.log('Hi')
        },
        sayHello: function(){
          console.log('Hello')
        }
    }
})

// main.js
YUI().use('hello', function(Y){
    Y.hello.sayHi()
    Y.DOM.doSomeThing()
},'3.0.0',{
    requires:['dom']
})
```

~~开发人员需要知道正确的依赖顺序~~



#### 现代模块化

CommonJS、AMD、CMD、ES module

1. CommonJS

   commonJS经常被人提及，该模块化规范主要以node.js为主，它有四个重要的环境变量为模块化的实现提供支持：`module`、`exports`、`require`、`global`。实际使用时，用`module.exports`定义当前模块对外输出的接口（不推荐直接用`exports`），用`require`加载模块

   ```js
   // a.js
   var count = 1
   function add(a, b) {
     return a + b
   }
   
   module.exports = {
     add,
     count
   }
   
   // app.js
   var a = require('./a')
   a.count
   a.add(1,2)
   ```

   commonJS用同步的方式加载模块。在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。

   

2. AMD

    AMD(Asynchronous Module Definition)规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。

    AMD 推崇依赖前置、提前执行

    ```html
    <script script="./a.js" defer></script>
    <script script="./b.js" async></script>
    ```

    所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。require.js是遵循 AMD 规范的模块加载器

    用`require.config()`指定引用路径等，用`define()`定义模块，用`require()`加载模块。

    ```js
    // 网页中引入require.js及main.js 代码均来自网络
    // <script src="js/require.js" data-main="js/main"></script>
    
    // main.js 入口文件/主模块
    // 首先用config()指定各模块路径和引用名
    require.config({
      baseUrl: "js/lib",
      paths: {
        "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js
        "underscore": "underscore.min",
      }
    });
    // 执行基本操作
    require(["jquery","underscore"],function($,_){
      // some code here
    });
    ```
    ```js
    // 定义math.js模块
    define(function () {
      var basicNum = 0;
      var add = function (x, y) {
          return x + y;
      };
      return {
          add: add,
          basicNum :basicNum
      };
    });
    // 引用模块，将模块放在[]内
    require(['jquery', 'math'],function($, math){
      var sum = math.add(10,20);
      $("#sum").html(sum);
    });
    ```
	

3. CMD

   CMD(Common Module Definition) sea.js 规范采用异步方式加载模块
   CMD推崇依赖就近、延迟执行

   ```js
    // CMD写法
    define(function(require, exports, module) {
       // 在需要时申明
        var a = require('./a'); 
        a.doSomething();
        if (false) {
            var b = require('./b');
            b.doSomething();
        }
    });

    // sea.js
    // 定义模块 c.js
    define(function(require, exports, module) {
        function add(a,b) {
            return a+b;
        }
        exports.add = add;
    });
    // 加载模块
    seajs.use(['c.js'], function(c){
        var res = c.add(1+2);
    });
	```
4. ES module

   ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。
   ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。

   其模块功能主要由两个命令构成：`export`和`import` ,`export`命令用于规定模块的对外接口，`import`命令用于输入其他模块提供的功能。

   ```js
   import * as types from  'b.js'
   import { sum, reduce } from 'c.js'
   
   export default {}
   export const sum = (a, b) => a + b
   ```

   

以上四种模块化方式中，requireJS,seaJS 这两个库已经不再维护了，主流的模块化规范主要以CommonJS与ES module，但不排除某些库仍然使用AMD&CMD规范（就好比浏览器中的IE，不遇到还是得做一些pollfiy），重要对比下ES module与CommonJS模块化的差异

1. CommonJS模块输出的是一个值的拷贝，ES6模块输出的值的引用

2. CommonJS模块是运行时加载，ES6模块是编译时输出接口

   ​		运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。

   ​		编译时加载: ES6 模块不是对象，而是通过 `export` 命令显式指定输出的代码，`import`时采用静态命令的形式。即在`import`时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。



​	seaJS是玉伯大佬写的，有兴趣可以读下[玉伯为什么要写这个模块加载器](https://github.com/seajs/seajs/issues/588)

​	~~其实中间有个UMD规范 是针对AMD中无法使用CommonJS才出来的，可在UMD中同时使用AMD与CommonJS~~

