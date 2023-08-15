<template>
  <div class="button" :class="[type, border && 'border']" @click="handleClick">
    <span>{{ text }}</span>
    <div class="button-animation" v-if="animation"></div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    animation: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "blue",
      validator: (value) => {
        return ["blue", "yellow"].includes(value);
      },
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/ui/button-common.scss");
</style>
