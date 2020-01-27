<template>
  <div id="app">
    
    <router-view/>
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
