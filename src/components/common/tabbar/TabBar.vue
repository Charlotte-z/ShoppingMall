<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>

export default {
    name:'TabBar'
}
</script>

<style> 

#tab-bar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display:flex;
  /* justify-content: space-between; */
  background-color: #f6f6f6;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.8);
}


</style>
