<template>
  <div class='recommend'>
    <div v-for="(item,index) in recommends" class='recommend_item' :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
  }

</script>
<style  scoped>
    .recommend{
        display: flex;
        width:100%;
        overflow: hidden;
        padding: 1rem 0 2rem 0;
        border-bottom: 4px solid rgb(189, 187, 187)
    }
    .recommend_item{
        flex-grow: 1;
        margin: 0 1rem 0 1rem;
        overflow: hidden
    }

    .recommend_item img {
        width: 100%
    }

    .recommend_item a {
        text-align: center
    }
</style>