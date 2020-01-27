<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>  
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    name:'',
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
        
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            tap:true,
            probeType:3,
            pullUpLoad:true
        })
    }
  }

</script>
<style scoped>
</style>