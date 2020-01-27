<template>
  <div class='goods-item'>
    <img :src="goodsItem.show.img" alt="">
    <div class='description'>
      <p class='title'>{{goodsItem.title}}</p>
      <div class='info'>
        <span class='price'>{{goodsItem.price}}</span>
        <span class='collection'>{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {

          }
        }
      }
    }
  }

</script>
<style scoped>
  .goods-item{
    width:47%;
    position: relative
  }

  .goods-item > img{
    width:100%;
    border-radius: 10px
  } 

  .description > .title{
    overflow: hidden; /*自动隐藏文字*/
    text-overflow: ellipsis;/*文字隐藏后添加省略号*/
    white-space: nowrap;/*强制不换行*/
  }

  .description > .info{
    text-align: center
  }

  .description > .info > .collection{
    position:relative;
    margin-left: 1.5rem;
  }

  .description > .info > .collection::before{
    content:'';
    width:14px;
    height:14px;
    position:absolute;
    left: -15px;
    top: -1px;
    background: url('~assets/img/common/collect.svg') 0 0/13px 18px;
  }

</style> 