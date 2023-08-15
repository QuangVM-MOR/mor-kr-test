<template>
  <div class="card">
    <img :src="product.image" :alt="product.title" />
    <div class="title">{{ product.title }}</div>
    <p class="desc">{{ product.description }}</p>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/cards/card-product.scss");
</style>
