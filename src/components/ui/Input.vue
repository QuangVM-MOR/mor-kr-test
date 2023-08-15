<template>
  <div
    class="wrap-input"
    :class="[!!errorMessage.length && 'error', isVerifyInput && 'verify-code']"
  >
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      @input="handleInput"
    />
    <span
      v-if="isVerifyInput"
      :class="[isWaitingVerifyCode && waiting]"
      @click="handleVerifyCode"
      >{{ verifyText }}</span
    >
    <p class="error">{{ errorMessage }}</p>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    isVerifyInput: {
      type: Boolean,
      default: false,
    },
    verifyKey: {
      type: String,
      default: "",
    },
    verifyText: {
      type: String,
      default: "",
    },
    isWaitingVerifyCode: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", { value: e.target.value, name: this.name });
    },
    handleVerifyCode() {
      this.$emit("verify", this.verifyKey);
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/ui/Input.scss");
</style>
