import Vue from 'vue';

// 导入根组件
import App from './App.vue';


import "./assets/site/css/style.css";

new Vue({
  el: '#app',
  render: h => h(App)
})
