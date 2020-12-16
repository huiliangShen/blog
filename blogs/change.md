## 2020-8-24 前端框架面试题



> 基本问题

#### Vue面试题

- v-show和v-if的区别

  v-show 主要是css的display切换 dom一开始就会插入

  v-if 会执行渲染 dom会在条件符合的时候插入

  需频繁切换dom显示隐藏 用v-show 不然v-if

- 为何v-for中要用key

  

- 描述Vue组件生命周期（父子组件）

  ```
  // single Component
  beforeCreate => created => beforeMount => mounted => beforeUpdate => updated => beforeDestory => destoryed
  
  // 父子组件
  f beforeCreate => f created => f beforeMount => c beforeCreate => c created => c beforeMount => c mounted => f mounted
  
  ```

- Vue组件如何通讯

  Props + emits

  vuex

  eventBus

- 描述组件渲染和更新的过程

  

- 双向数据绑定v-model的实现原理

  Object.definePropty()
  
- 自定义v-model

  ```vue
  // 父组件
  <template>
  	<custom-checkout v-model="loveChecked"></custom-checkout>
  </template>
  
  // 子组件
  <template>
      <input type="checkbox" @change="$emit('change', $event.target.checked)" :checked="checked"/>
  </template>
  <script>
  	export default {
      model: {
        prop: 'checked',
        event: 'change'
      },
      props: {
        checked: Boolean
      }
    }
  </script>
  ```

  



#### React面试题

- React组件如何通讯

  12

- JSX本质是什么

  qqq

- context是什么，有何用途？

  112

- shouldComponentUpdate的用途

  21

- 描述redux单项数据流

  22

- setState是同步还是异步

  222

#### 框架综合应用

- 基于React设计一个todoList（组件结构，redux state数据结构）

  2

- 基于Vue设计一个购物车

  6



#### webpack面试题

- 前端代码为何要进行构建和打包？

  22

- module chunk bundle分别是什么意思，有何区别？

  2

- loader和plugin的区别

  2

- webpack如何实现懒加载

  2

- webpack场景性能优化

  3

- babel-runtime和babel-polyfill的区别

  2