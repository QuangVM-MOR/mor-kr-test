<template>
  <form class="form-signup-top">
    <Input
      name="phone"
      placeholder="输入手机号"
      :value="phone"
      :errorMessage="errorPhone"
      @input="handleInput"
    />
    <Input
      name="code"
      placeholder="输入验证码"
      :value="code"
      :errorMessage="errorVerifyCode"
      verifyKey="phone"
      :isVerifyInput="true"
      :verifyText="verifyText"
      :isWaitingVerifyCode="isWaitingVerify"
      @input="handleInput"
      @verify="handleVerify"
    />
    <Input
      name="password"
      placeholder="输入密码"
      :value="password"
      :errorMessage="errorPassword"
      @input="handleInput"
    />
    <ButtonCommon
      text="立即注册"
      :border="true"
      @click="handleSubmitForm"
    />
  </form>
</template>
<script>
import ButtonCommon from "../ui/ButtonCommon.vue";
import Input from "../ui/Input.vue";
export default {
  components: {
    ButtonCommon,
    Input,
  },
  data() {
    return {
      phone: "",
      code: "",
      password: "",
      errorPhone: "",
      errorVerifyCode: "",
      errorPassword: "",
      isWaitingVerify: false,
      timeVerify: 60,
    };
  },
  computed: {
    verifyText() {
      if (!this.isWaitingVerify) return "获取验证码";
      return `获取验证码(${this.timeVerify}s)`;
    },
  },
  methods: {
    handleInput({ name, value }) {
      this[name] = value;
    },
    handleVerify(key) {
      if (key == "phone") this.verifyPhone();
    },
    getVerifyCode() {
      this.verifyPhone();
    },
    verifyPhone() {
      const patternPhone = /^1[0-9]{10}$/;
      if (!this.phone.length) {
        this.errorPhone = "请输入手机号";
        return;
      }
      if (!patternPhone.test(this.phone)) {
        this.errorPhone = "请输入正确的手机号";
        return;
      }
      this.errorPhone = "";
    },
    verifyCode() {
      if (!this.code.length) {
        this.errorVerifyCode = "请输入验证码";
        return;
      }
      const sixDigitsPattern = /^\d{6}$/;
      if (!sixDigitsPattern.test(this.code)) {
        this.errorVerifyCode = "验证码为6位数字";
        return;
      }
      this.errorVerifyCode = "";
    },
    verifyPassword() {
      if (!this.password.length) {
        this.errorPassword = "请输入密码";
        return;
      }
      if (this.password.length < 6) {
        this.errorPassword = "密码最短6位";
        return;
      }
      if (this.password.length > 18) {
        this.errorPassword = "密码最长18位";
        return;
      }
      this.errorPassword = "";
    },
    handleSubmitForm() {
      this.verifyPhone();
      this.verifyCode();
      this.verifyPassword();
      if (
        !this.errorPassword.length &&
        !this.errorPhone.length &&
        !this.errorVerifyCode.length
      ) {
        console.log("submit form");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/components/forms/form-signup-top.scss");
</style>
