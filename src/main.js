import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import moment from 'moment';
import ElementUI from 'element-ui';
import VueLazyload from 'vue-lazyload'

// 导入根组件
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueLazyload)

axios.defaults.baseURL = 'http://47.106.148.205:8899/';
Vue.prototype.$axios = axios;

Vue.filter('dateFmt',(input,timeStr="YYYY-MM-DD") => {
  return moment(input).format(timeStr);
})

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/site/images/01.gif'),
  attempt: 1
})


import goodsList from './components/goods/goodsList.vue';
import goodsDetail from './components/goods/goodsDetail.vue';
import shopCart from './components/shopCart/shopCart.vue';

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/goodsList'},
    {path: '/goodsList', component: goodsList},
    {path: '/goodsDetail/:goodsId', component: goodsDetail},
    {path: '/shopCart', component: shopCart}
  ]
})

import "element-ui/lib/theme-chalk/index.css";
import "./assets/site/css/style.css";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
