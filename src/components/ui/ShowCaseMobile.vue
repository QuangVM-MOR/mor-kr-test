<template>
  <div>
    <div>
      <span @click="goToSlide(0)">1</span>
      <br />
      <span @click="goToSlide(1)">2</span>
      <br />

      <span @click="goToSlide(2)">3</span>
    </div>
    <Swiper class="swiper" @slideChange="handleSlideChange" @swiper="onSwiper">
      <SwiperSlide>
        <div>Item 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Item 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div>Item 3</div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
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
    };
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
