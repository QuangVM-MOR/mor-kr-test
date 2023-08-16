<template>
  <Swiper
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="true"
    :modules="modules"
    class="swiper"
  >
    <SwiperSlide v-for="cardItem in listCards" :key="cardItem.id">
      <ListCardsItem :cardItem="cardItem" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import ListCardsItem from "./ListCardsItem.vue";

export default {
  props: {
    listCards: {
      type: Array,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    ListCardsItem,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted() {
    const paginationBullet = document.getElementsByClassName(
      "swiper-pagination-bullet"
    );
    Array.from(paginationBullet).forEach((bulItem) => {
      bulItem.style.width = ".1rem";
      bulItem.style.height = ".1rem";
    });
  },
  computed: {
    modules() {
      return [Pagination, Autoplay];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
