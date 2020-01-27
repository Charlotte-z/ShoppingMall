<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" activeStyle='deeppink'>
        <img src="~assets/img/tabbar/home.svg" slot="item-icon" alt="">
        <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" slot="item-icon" alt="">
        <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon" alt="">
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" slot="item-icon" alt="">
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active" alt="">
        <div slot="item-text">个人</div>
      </tab-bar-item>
    </tab-bar>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script> 

<style>
/* @import '~assets/css/base.css' */
</style>