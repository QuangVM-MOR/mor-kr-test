<template>
  <div
    class="show-image"
    @mouseover="onMouseOverImage"
    @mouseout="onMouseOutImage"
  >
    <div
      class="wrap-image"
      v-for="(dataImage, index) in listDataImage.listShowcase"
      :key="index"
      :class="'pos-' + index"
    >
      <div class="img">
        <img
          :src="dataImage.image"
          :alt="dataImage.title"
          :style="`animation: ${listDataImage.animation} 1.2s ease 1 forwards`"
        />
      </div>
      <div class="caption">
        {{ dataImage.caption }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listDataImage: {
      type: Object,
    },
  },
  methods: {
    onMouseOverImage() {
      this.$emit("onMouseOver");
    },
    onMouseOutImage() {
      this.$emit("onMouseOut");
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/ui/show-image.scss");
</style>
