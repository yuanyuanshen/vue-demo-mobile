<template>
  <div id="app">
    <mt-header fixed title="影视推荐"></mt-header>
    <router-view @addShopcart="addShopcart"></router-view>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" :to="{name:'home'}">
        <span class="mui-icon icon-shouye1"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'member'}">
        <span class="mui-icon icon-diamond"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'shop'}">
        <span class="mui-icon icon-gouwucheman"><span class="mui-badge">{{shopcartNum}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" :to="{name:'search'}">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">查找</span>
      </router-link>
    </nav>

  </div>
</template>
<script>
import HelloWorld from './components/Search'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
      return {
        shopcartNum:0,
        stu: [{name:'jack',score:'B'},{name:'rose',score:'A'}]
      }
  },
  methods:{
    addShopcart(num){
        console.log(num);
        this.shopcartNum +=  num;
    }
  }
}
</script>

<style scoped="">
.mint-header.is-fixed{
  position: static;
}
</style>
