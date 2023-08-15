<template>
  <div class="card-3d">
    <div class="container">
      <ListCards :listCards="listCards" />
    </div>
  </div>
</template>

<script>
import { listCards } from "../../_mock_";
import ListCards from "../items/ListCards.vue";

export default {
  components: {
    ListCards,
  },
  data: () => ({
    listCards: structuredClone(listCards),
  }),
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/sections/card-3d.scss");
</style>