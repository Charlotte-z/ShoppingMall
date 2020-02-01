<template>
  <Swiper>
    <swiper-item v-for="item of banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt @load="imageLoad" />
      </a>
    </swiper-item>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
</style>