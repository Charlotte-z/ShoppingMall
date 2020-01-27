<template>
  <div id="home" class='wrapper'>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    
    <scroll class='content' ref='scroll'>
      <home-swiper :banners='banners'></home-swiper>
        <recommend-view :recommends='recommends'></recommend-view>
        <feature-view></feature-view>
        <tab-control class='tab-control' :titles="['流行', '新款', '精选']" @tabClick='tabClick'></tab-control>
      <GoodsList :goods='showGoods'></GoodsList>
    </scroll>

    <backtop @click.native='backtop'></backtop>
    
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata, getHomeGoods} from "network/home";
import HomeSwiper from './childComponent/HomeSwiper'
import RecommendView from './childComponent/RecommendView'
import FeatureView from './childComponent/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodList.vue'
import Scroll from 'components/common/scroll/Scroll'
import Backtop from 'components/content/backtop/Backtop'

export default {
  name: "",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    Backtop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]},
      },
      currentType:'pop',
      bscroll:null
    };
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()    

    //请求商品数据
    this.getHomeGoods('pop')    
    this.getHomeGoods('new')    
    this.getHomeGoods('sell')    

  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    /**
     * 网络请求
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => { 
        console.log(res);
        // this.result = res;
        // console.log(res.data.data.banner.list);
        
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      });
    },
    getHomeGoods(type){
      //获取，但未改变this.page
      const page = this.goods[type].page + 1  
      getHomeGoods(type, page).then(res => {
        console.log(res.data.data.list);
        this.goods[type].list.push(...res.data.data.list)        
        //改变this.page的实际页码，因为增加了30条数据
        this.goods[type].page += 1
        
      })
    },
    /**
     * 
     * 事件监听
     */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }      
    },
    backtop(){
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)  //可直接访问方法和属性
    }
  },
};
</script>
<style scoped>
#home{
  padding-top: 44px;
  height:100vh;
  position: relative;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: var(--color-background);
}

.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content{
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px; */
  /* height: 300px; */
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}


</style>