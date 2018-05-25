<template>
  <div>
    <header id="header" class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="goBack"></a>
      <h1 class="mui-title">{{title}}</h1>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App haha '
      }
    },
    props:['title'],
    methods: {
      goBack(){
        this.$router.go(-1);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mui-bar.mui-bar-nav{
    position: relative;
  }
</style>
