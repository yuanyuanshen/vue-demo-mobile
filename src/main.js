// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUi from 'mint-ui'
import VueRouter from 'vue-router'
import Axios from 'axios'


// 引入css文件

import 'mint-ui/lib/style.css'
import '../static/vendor/mui/dist/css/mui.css';
import mui from '../static/vendor/mui/dist/js/mui.min';

// 引入自己的组件

import Member from './components/Member.vue'
import Shop from './components/Shop.vue'
import Home from './components/Home.vue'
import Search from './components/Search.vue'
import NewsList from './components/new/newsList.vue'
import NewsDetail from './components/new/newsDetail.vue'
import NavBar from './components/common/narBar.vue'
import GoodsList from './components/good/goodsList.vue'
import GoodsDetail from './components/good/goodsDetail.vue'
import MySwipe from './components/common/mySwipe.vue'

// 使用组件
Vue.use(MintUi)
Vue.use(VueRouter)
Vue.prototype.$ajax = Axios;
Vue.prototype.mui = mui;

// 注册全局组件
Vue.component('navBar',NavBar);
Vue.component('mySwipe',MySwipe)


// vue配置
Vue.config.productionTip = false




let router = new VueRouter({
  linkActiveClass:'mui-active',
  //routes
  routes: [
    //一个个对象
    { path:'/',redirect:{name:'home'}},
    { name:'home',path:'/home',component:Home},
    { name:'member',path: '/member',component:Member},
    { name:'shop',path: '/shop',component:Shop},
    { name:'search',path:'/search',component:Search},
    { name:'news.list',path:'/news/list',component:NewsList},
    { name:'news.detail',path:'/news/detail',component:NewsDetail},
    { name:'goods.list',path:'/goods/list',component:GoodsList},
    { name:'goods.detail',path:'/goods/detail',component:GoodsDetail}
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
