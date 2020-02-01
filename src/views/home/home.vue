<template>
  <div id="home" class='wrapper'>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @tabClick='tabClick' ref='tabControl1' class="tab-control" v-show="isTabFixed"></tab-control>
    
    <scroll class='content' ref='scroll' :probeType='3' @scroll='contentScroll'  @pullingUp='pullingUp' :pull-up-load='true'>
      <home-swiper :banners='banners' @swiperImageLoad='swiperImageLoad'></home-swiper>
        <recommend-view :recommends='recommends'></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行', '新款', '精选']" @tabClick='tabClick' ref='tabControl2' ></tab-control>
      <GoodsList :goods='showGoods'></GoodsList>
    </scroll>

    <backtop @click.native='backtop' ref="backtop" v-show="isShow"></backtop>
    
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
import {debounce} from 'common/utils'

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
      bscroll:null,
      isShow:true,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
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
  mounted(){ 
  //监听GoodListItem每张图片的加载
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('itemImageLoad', () => {  //因为此处是回调函数，所以可以进行图片监听刷新
      // this.$refs.scroll.refresh()
      refresh()   //每当图片完成，防抖刷新
    })

    //所有组件都有一个属性$el,用于获取组件中的元素
     //此处组件加载完毕，但是图片没有加载完毕，图片是异步加载，导致高度获取出现误差
    // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
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
        // console.log(res.data.data.list);
        this.goods[type].list.push(...res.data.data.list)        
        //改变this.page的实际页码，因为增加了30条数据
        this.goods[type].page += 1
        this.finishPullUp()
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
      this.$refs.tabControl1.currentIndex = index    
      this.$refs.tabControl2.currentIndex = index    
    },
    swiperImageLoad(){
      //应该在此处进行高度获取
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop //此时只监听一个，其他图片影响不是很大

    },
    backtop(){
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)  //可直接访问方法和属性
    },
    contentScroll(position){
      //判断backtop是否显示
      this.isShow = (-position.y) < 1000

      //决定tabcontrol是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    pullingUp(){
      this.getHomeGoods(this.currentType)      
    },
    finishPullUp(){
        this.$refs.scroll.finishPullUp() 
    }
  },
  activated(){
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh() //不刷新会出现一些莫名其妙的错误
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY()
  }
};
</script>
<style scoped>
#home{
  /* padding-top: 44px; */
  height:100vh;
  position: relative;
}
.home-nav {
  /* position: fixed;     原本是浏览器原生滚动，为了让导航不跟着一起滚，现在用scroll就没必要了
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
  background-color: var(--color-tint);
  color: var(--color-background);
}

/* .tab-control{ 失效了
  position: sticky;
  top: 44px;
  z-index: 9;
} */

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

.tab-control{
  position: relative;
  z-index: 9;
}

.show{
  display: block
}

.hide{
  display: none
}

</style>