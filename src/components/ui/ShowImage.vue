<template>
  <div>
    <div
      class="show-image"
      @mouseover="onMouseOverImage"
      @mouseout="onMouseOutImage"
      v-for="(item, index) in listDataImage"
      :key="index"
      v-show="index == activeTab"
    >
      <a
        class="wrap-image"
        href="#"
        v-for="(dataImage, index) in item.listShowcase"
        :key="index"
        :class="'pos-' + index"
      >
        <div class="img">
          <img
            alt="geo design"
            :src="dataImage.image"
            :style="`animation: ${item.animation} 1.2s ease 1 forwards`"
          />
        </div>
        <div class="caption">
          {{ dataImage.caption }}
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listDataImage: {
      type: Object,
    },
    activeTab: {
      type: Number,
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
