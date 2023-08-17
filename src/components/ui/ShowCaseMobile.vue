<template>
  <div class="show-case-mobile">
    <div class="tab-mobile">
      <span
        v-for="(item, index) in listDataShowCase"
        :key="index"
        :class="[index == activeSlideIndex && 'active']"
        @click="goToSlide(index)"
        >{{ item.title }}</span
      >
    </div>
    <Swiper class="swiper" @slideChange="handleSlideChange" @swiper="onSwiper">
      <SwiperSlide v-for="(item, index) in listDataShowCase" :key="index">
        <div class="wrap-image">
          <a href="#">
            <img
              :src="item.listShowcase[0].image"
              :alt="item.listShowcase[0].caption"
            />
            <p>{{ item.listShowcase[0].caption }}</p>
          </a>
          <a href="#">
            <img
              :src="item.listShowcase[1].image"
              :alt="item.listShowcase[1].caption"
            />
            <p>{{ item.listShowcase[1].caption }}</p>
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="btn-more">
      <span>查看更多>></span>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { dataShowCase } from "../../_mock_";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiper: null,
      swiperOption: {
        slidesPerView: 1,
      },
      activeSlideIndex: 0,
    };
  },
  computed: {
    listDataShowCase() {
      return dataShowCase;
    },
  },
  methods: {
    handleSlideChange(swiper) {
      this.activeSlideIndex = swiper.activeIndex;
    },
    onSwiper(e) {
      this.swiper = e;
    },
    goToSlide(index) {
      if (this.swiper) {
        this.swiper.slideTo(index); // Programmatically go to the specified slide index
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/ui/show-case-mobile.scss");
</style>
