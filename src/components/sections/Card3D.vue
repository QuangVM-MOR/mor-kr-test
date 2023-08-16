<template>
  <div class="card-3d">
    <div class="container">
      <ListCardsSlider :listCards="listCards" />
      <ListCards :listCards="listCards" />
      <template v-if="useSlider">
        <CardQR />
      </template>
    </div>
  </div>
</template>

<script>
import { listCards } from "../../_mock_";
import breakpoint from "../../mixins/breakpoint";
import ListCards from "../items/ListCards.vue";
import CardQR from "../items/CardQR.vue";
import ListCardsSlider from "../items/ListCardsSlider.vue";

export default {
  mixins: [breakpoint],
  components: {
    ListCards,
    CardQR,
    ListCardsSlider,
  },
  data: () => ({
    listCards: structuredClone(listCards),
  }),
  computed: {
    useSlider() {
      return !this.isDesktop;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/sections/card-3d.scss");
</style>