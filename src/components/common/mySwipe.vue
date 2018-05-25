<template>
    <div>
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(img,index) in imgs" :key="index"><a :href="img.url"><img :src="img.img"></a></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                imgs:[{
                    url:'https://img.alicdn.com/bao/uploaded/i1/1685162789/TB2K3CokOCYBuNkSnaVXXcMsVXa_!!1685162789-0-item_pic.jpg_240x5000Q50s50.jpg_.webp',
                    img:'https://img.alicdn.com/simba/img/TB1r2X1SpXXXXX1aXXXSutbFXXX.jpg'
                },{
                    url:'https://img.alicdn.com/imgextra/i2/1685162789/TB2mG99sVmWBuNjSspdXXbugXXa_!!1685162789.jpg_430x430q90.jpg',
                    img:'https://img.alicdn.com/simba/img/TB1U4HGsKySBuNjy1zdSutPxFXa.jpg'
                }]//轮播图片列表
            }
        }
    }
</script>
<style scoped>
/*轮播图样式*/
.mint-swipe{
    height:187px;
}
.mint-swipe img {
    height: 100%;
}
.mint-swipe-items-wrap img{
  width: 100%;
}
</style>
