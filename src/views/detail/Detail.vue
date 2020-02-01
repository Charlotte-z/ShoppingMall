<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods='goods'/>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import { getDetail, Goods } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: null
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.id;

    //2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      //1.获取顶部的图片轮播数据
      const data = res.data.result
      this.topImages = data.itemInfo.topImages;
      // console.log();
    // console.log(res);
    
      //2.获取商品信息

      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    });
  }
};
</script>
<style scoped>
</style>