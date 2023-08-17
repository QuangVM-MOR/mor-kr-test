<template>
  <div class="input-control" :class="[errorMessage.length != '' && 'error']">
    <div class="wrap">
      <div class="wrap-input">
        <span class="icon"><img :src="icon" alt="icon"/></span>
        <input
          :placeholder="placeholder"
          :name="name"
          :type="typeInput"
          :value="value"
          @input="handleInput"
          @blur="$emit('blur')"
        />
        <span
          class="icon-password"
          v-if="type == 'password' && showPassword"
          @click="showPassword = false"
        >
          <IconEyeOpen />
        </span>
        <span
          class="icon-password"
          v-if="type == 'password' && !showPassword"
          @click="showPassword = true"
        >
          <IconEyeClose />
        </span>
      </div>
      <div
        class="btn-code"
        v-if="type == 'code'"
        :class="[disableButtonCode && 'disabled']"
      >
        获取验证码
      </div>
    </div>
    <p class="error">{{ errorMessage }}</p>
  </div>
</template>
<script>
import { iconInputModal } from "../../_mock_";
import IconEyeOpen from "../icons/IconEyeOpen.vue";
import IconEyeClose from "../icons/IconEyeClose.vue";
export default {
  components: {
    IconEyeOpen,
    IconEyeClose,
  },
  data() {
    return {
      showPassword: false,
    };
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "phone",
    },
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    errorMessage: {
      type: String,
      default: "",
    },
    disableButtonCode: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    icon() {
      if (this.type == "phone") return iconInputModal.iconPhone;
      if (this.type == "code") return iconInputModal.iconPhoneCheck;
      if (this.type == "password") return iconInputModal.iconLock;
      return "";
    },
    typeInput() {
      if (this.type !== "password") return "text";
      if (this.showPassword) return "text";
      else return "password";
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", {
        name: this.name,
        value: e.target.value,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/ui/input-modal.scss");
</style>
