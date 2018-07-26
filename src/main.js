import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

// 导入根组件
import App from './App.vue';

Vue.use(VueRouter);

axios.defaults.baseURL = 'http://47.106.148.205:8899/';
Vue.prototype.$axios = axios;

import goodsList from './components/goods/goodsList.vue';
import goodsDetail from './components/goods/goodsDetail.vue';
import shopCart from './components/shopCart/shopCart.vue';

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/goodsList'},
    {path: '/goodsList', component: goodsList},
    {path: '/goodsDetail', component: goodsDetail},
    {path: '/shopCart', component: shopCart}
  ]
})

import "./assets/site/css/style.css";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
