<template>
        <div class="tab-bar-item"  @click="itemClick">
          <div v-if="!isActive">
              <slot name='item-icon' ></slot>
          </div>
          <div v-else>
              <slot name='item-icon-active' ></slot>
          </div>
          <div :style="activeColor">
              <slot name='item-text'></slot>
          </div>
        </div> 
</template>

<script>

  export default {
    name:'TabBarItem',
    props:{
      path:String,
      activeStyle:{
        type:String,
        default:'red'
      }
    },
    data(){
        return{
            // isActive:true
        }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeColor(){        
        return this.isActive ? {color:this.activeStyle} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
        // console.log('run');
        
      }
    }
  }

</script>
<style scoped>
.tab-bar-item{
  flex:1;  
  text-align: center;
  height: 49px;
  
}

.tab-bar-item img{
  width:24px;
  height:24px;
  margin-top: 3px;
  vertical-align: middle
}

</style>