<template>
  <div class="our-advantages">
    <div class="container">
      <h2 class="our-advantages__title">我们的优势</h2>
      <h3 class="our-advantages__description">
        帮助设计师和策展人快速创建3D互动空间
      </h3>
      <div class="our-advantages__list">
        <AdvantageItem
          v-for="advantageItem in listAdvantages"
          :key="advantageItem.id"
          :advantageItem="advantageItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { listAdvantages } from "../../_mock_";
import AdvantageItem from "../items/AdvantageItem.vue";

export default {
  components: { AdvantageItem },
  data: () => ({
    listAdvantages: structuredClone(listAdvantages),
  }),
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/sections/our-advantages.scss");
</style>