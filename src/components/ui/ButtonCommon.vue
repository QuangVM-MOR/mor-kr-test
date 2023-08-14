<template>
  <div class="button" :class="[type]" @click="handleClick">
    <span>{{ text }}</span>
    <div class="button-animation"></div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
    type: {
      type: String,
      default: "yellow",
      validator: (value) => {
        return ["blue", "yellow"].includes(value);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/ui/button-common.scss");
</style>
