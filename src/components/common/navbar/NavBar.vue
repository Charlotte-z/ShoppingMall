<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>  
</template>

<script>
export default {
  name: ""
};
</script>
<style>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
}

.left,
.right {
  width: 60px;
  /* background: #f00; */
}

.center {
  /* background-color: #bfc; */
  flex: 1;
  text-align: center;
}
</style>