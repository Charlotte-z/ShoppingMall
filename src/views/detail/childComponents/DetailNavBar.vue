<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          class="title-item"
          :class="{active: index === currentIndex}"
          @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
  backClick(){
    //   this.$router.go(-1)
      this.$router.back()
  }
  }
};
</script>
<style scoped>
.title {
  display: flex;
}

.title-item {
  flex-grow: 1;
}

.active {
  color: pink;
}

.back {
  position: relative;
  width: 60px;
  height: 44px;
}

.back img {
    display: block;
  position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%)
}
</style>