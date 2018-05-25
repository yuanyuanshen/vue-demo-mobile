<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3372404766,3237862024&fm=27&gp=0.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3293050023,2650219039&fm=27&gp=0.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="http://img2.imgtn.bdimg.com/it/u=1009774490,3972124258&fm=27&gp=0.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'news.list'}">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">影视资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'goods.list'}">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">图文分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link :to="{name:'goods.list'}">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品展示</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">咨询搜索</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App haha '
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe{
    height:168px;
  }
  .mint-swipe img {
    height: 100%;
    background-repeat: round;
  }
  ul.mui-table-view {
    margin-top: 0 !important;
  }
  li.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    padding: 0 0;
    margin: 0 0;
  }
  .mui-table-view.mui-grid-view.mui-grid-9{
    background-color: white;
    border: 0;
    margin-top: 0px;
  }
  .mui-table-view.mui-grid-view.mui-grid-9 li{
    border: 0;
  }
  /*九宫格清除字体图标*/
  .mui-icon-home:before,
  .mui-icon-email:before,
  .mui-icon-chatbubble:before,
  .mui-icon-location:before,
  .mui-icon-search:before,
  .mui-icon-phone:before{
    content: '';
  }
  /*九宫格背景图片*/
  .mui-icon-home{
    background-image: url('../../static/img/news.png');
    background-repeat: round;
  }
  .mui-icon-email{
    background-image: url('../../static/img/picShare.png');
    background-repeat: round;
  }
  .mui-icon-chatbubble{
    background-image: url('../../static/img/goodShow.png');
    background-repeat: round;
  }
  .mui-icon-location{
    background-image: url('../../static/img/feedback.png');
    background-repeat: round;
  }
  .mui-icon-search{
    background-image: url('../../static/img/search.png');
    background-repeat: round;
  }
  .mui-icon-phone{
    background-image: url('../../static/img/callme.png');
    background-repeat: round;
  }
  /*九宫格图标宽高*/
  .mui-icon{
    height: 50px;
    width:50px;
  }
</style>
