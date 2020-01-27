<template>
  <div class='tab-control'>
    <div v-for="(item, index) in titles"
     class='tab-control-item' :class="{active:index === currentIndex}" :key="index"
     @click="itemClick(index)">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    data(){
        return{
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('tabClick', index)
        }
    }
  }

</script>
<style scoped>
@import '~assets/css/base.css';
    .tab-control{
        display: flex;
        background-color: #fff;
    }

    .tab-control-item{
        flex-grow: 1;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
    }

    .tab-control-item span{
        padding:5px;
    }

    .active{
        color: var(--color-high-text);
    }

    .active span{
        border-bottom: 3px solid var(--color-high-text);

    }
</style>

