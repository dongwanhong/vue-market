import Vue from 'vue';
import App from './app.vue';


new Vue({ // 创建 vue 实例
  el: '#app', // 提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
  render: h => h(App) // 声明了 html 中的内容
})