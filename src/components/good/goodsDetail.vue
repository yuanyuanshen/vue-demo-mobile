<template>
  <div class="content">
    <nav-bar title="商品详情"></nav-bar>
    <div class="outer-swiper">
      <div class="swiper">
        <my-swipe></my-swipe>
      </div>
    </div>
    <div class="product-desc">
      <ul>
        <li><span class="product-desc-span">男士内裤纯棉</span></li>
        <li class="price-li">市场价：<s>￥1000</s> 销售价：<span>￥30</span></li>
        <li class="number-li">购买数量：<span @click="substract">-</span><span>{{num}}</span><span @click="add">+</span></li>
        <li>
          <mt-button type="primary">立即购买</mt-button>
          <mt-button type="danger" @click="addToCart">加入购物车</mt-button>
        </li>
      </ul>
    </div>
    <transition name="ball" @after-enter="afterEnter">
      <div class="ball" v-if="isShow"></div>
    </transition>

    <div class="product-props">
      <ul>
        <li>商品参数</li>
        <li>商品货号：21342342134</li>
        <li>库存情况：1341件</li>
        <li>上架时间：2017-08-09 | 2017-09-10</li>
      </ul>
    </div>
    <div class="product-info">
      <ul>
        <li>
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        </li>
        <li>
          <mt-button type="danger" size="large" plain>商品评论</mt-button>
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
        msg: 'Welcome to Your Vue.js App haha ',
        num:1,
        isShow:false
      }
    },
    methods:{
        substract(){
            if(this.num == 1) return;
            this.num--;
        },
        add(){
            this.num++;
        },
        addToCart(){
          console.log(this.num)
          this.$emit('addShopcart',this.num);
          this.isShow = true;
        },
      afterEnter(){
        this.isShow = false;
      }
    }
  }
</script>

<style scoped>

  .ball-enter-active {
    animation: bounce-in 1s;
  }

  @keyframes bounce-in {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(140px, -50px, 0);
    }
    75% {
      transform: translate3d(160px, 0px, 0);
    }
    100% {
      transform: translate3d(140px, 300px, 0);
    }
  }

  .swiper {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
    overflow: hidden;
  }

  .outer-swiper,
  .product-desc,
  .product-props,
  .product-info {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px;
  }


  /*请ulpadding*/

  .outer-swiper ul,
  .product-desc ul,
  .product-props ul,
  .product-info ul {
    padding: 0;
  }

  .product-desc ul li,
  .product-props ul li,
  .product-info ul li {
    list-style: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 8px;
  }

  .product-desc ul >:nth-child(1) span {
    color: blue;
    font-size: 22px;
    font-weight: bold;
  }

  .product-desc ul >:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .product-desc ul,
  .product-info ul,
  .product-props ul {
    padding-left: 10px;
  }

  .price-li span {
    color: red;
    font-size: 25px;
  }

  .price-li s {
    margin-right: 16px;
  }


  /*加减*/

  .number-li span {
    display: inline-block;
    border: 2px solid rgba(0, 0, 0, 0.1);
    width: 25px;
  }


  /*商品参数*/

  .product-props ul >:nth-child(1) {
    text-align: left;
  }

  .product-props ul:not(:nth-child(1)) {
    margin-left: 40px;
  }

  .product-info ul {
    margin-bottom: 70px;
    padding: 0 5;
  }

  .number-li span {
    text-align: center;
  }

  .number-li >:nth-child(2) {
    width: 40px;
  }

  .ball {
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 9999;
  }
</style>
