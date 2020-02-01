<template>
  <div id="app">
    
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/content/mainTabBar/MainTabbar'
export default {
  components:{
    Tabbar
  }
}
</script>

<style scoped>
@import '~assets/css/base.css';
#app{
  /* height:100% */
}
</style>
