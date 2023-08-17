<template>
  <div class="modal">
    <span class="icon-qr" v-if="formType != 'forgotPassword' && isDesktop">
      <IconQr v-if="mode" @click="mode = false" />
      <IconQrForm v-if="!mode" @click="mode = true" />
    </span>
    <form class="form" v-if="mode" @submit.prevent="submitForm">
      <div class="header">
        <div
          class="title-login"
          @click="formType = 'login'"
          v-if="formType == 'login' || formType == 'register'"
        >
          登录
        </div>
        <div
          class="title-register"
          @click="formType = 'register'"
          v-if="formType == 'login' || formType == 'register'"
        >
          注册
        </div>
        <div class="title-forgotPassword" v-if="formType == 'forgotPassword'">
          修改密码
        </div>
        <span class="tab-bar" :class="formType"></span>
      </div>
      <!-- Phone -->
      <InputModal
        type="phone"
        placeholder="请输入您的手机号"
        name="phone"
        :value="phone"
        :errorMessage="errorPhone"
        @blur="validatePhone"
        @input="handleInput"
      />
      <!-- Verify code register-->
      <InputModal
        type="code"
        placeholder="请输入验证码"
        v-if="formType == 'register'"
        name="registerCode"
        :value="registerCode"
        :errorMessage="errorRegisterCode"
        @blur="validateCode(registerCode, 'errorRegisterCode')"
        @input="handleInput"
      />
      <!-- Verify code forgotpassword-->
      <InputModal
        type="code"
        placeholder="请输入验证码"
        v-if="formType == 'forgotPassword'"
        name="forgotPasswordCode"
        :value="forgotPasswordCode"
        :errorMessage="errorForgotCode"
        @blur="validateCode(forgotPasswordCode, 'errorForgotCode')"
        @input="handleInput"
      />
      <!-- password -->
      <InputModal
        type="password"
        placeholder="请设置密码"
        name="password"
        :value="password"
        :errorMessage="errorPassword"
        @blur="validatePassword"
        @input="handleInput"
      />
      <!-- confirm password -->
      <InputModal
        type="password"
        placeholder="请再次确认密码"
        v-if="formType == 'register'"
        name="confirmPassword"
        :value="confirmPassword"
        :errorMessage="errorConfirmPassword"
        @blur="validateConfirmPassword"
        @input="handleInput"
      />
      <button class="btn" type="submit">{{ submitText }}</button>
      <div class="bottom">
        <span
          class="pointer"
          v-if="formType == 'login'"
          @click="formType = 'forgotPassword'"
          >忘记密码？</span
        >
        <span
          class="pointer"
          v-if="formType == 'register'"
          @click="formType = 'login'"
          >已有账号？</span
        >
        <span v-if="formType == 'register'"
          >注册表示阅读并同意<a href="#">《用户协议》</a></span
        >
      </div>
    </form>
    <div v-if="!mode" class="mode-qr">
      <div class="title">微信登录</div>
      <img src="../../assets/images/qr.jpeg" alt="qr" />
      <p>使用微信扫一扫登录</p>
      <p>“知了云展”</p>
    </div>
  </div>
</template>
<script>
import InputModal from "../ui/InputModal.vue";
import IconQr from "../icons/IconQr.vue";
import IconQrForm from "../icons/IconQrForm.vue";
import breakpointMixin from "../../mixins/breakpoint";
export default {
  mixins: [breakpointMixin],
  components: {
    InputModal,
    IconQr,
    IconQrForm,
  },
  data() {
    return {
      phone: "",
      registerCode: "",
      forgotPasswordCode: "",
      password: "",
      confirmPassword: "",
      mode: true,
      formType: "login",
      errorPhone: "",
      errorRegisterCode: "",
      errorForgotCode: "",
      errorPassword: "",
      errorConfirmPassword: "",
    };
  },
  props: {
    type: {
      type: String,
      default: "login",
    },
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    submitText() {
      const text = {
        login: "登 录",
        register: "注册新用户",
        forgotPassword: "修改密码",
      };
      return text[this.formType];
    },
  },
  watch: {
    isShow: {
      handler(val) {
        if (val) this.mode = true;
        this.formType = this.type;
        this.resetValue();
      },
      immediate: true,
    },
    formType: {
      handler() {
        this.resetValue();
      },
    },
  },
  methods: {
    resetValue() {
      this.phone = "";
      this.registerCode = "";
      this.forgotPasswordCode = "";
      this.password = "";
      this.confirmPassword = "";
      this.errorPhone = "";
      this.errorRegisterCode = "";
      this.errorForgotCode = "";
      this.errorPassword = "";
      this.errorConfirmPassword = "";
    },
    handleInput({ name, value }) {
      this[name] = value;
    },
    validatePhone() {
      const patternPhone = /^1[0-9]{10}$/;
      if (!patternPhone.test(this.phone)) {
        this.errorPhone = "请输入正确的手机号";
        return;
      }
      this.errorPhone = "";
    },
    validateCode(value, key) {
      const sixDigitsPattern = /^\d{6}$/;
      if (!sixDigitsPattern.test(value)) {
        this[key] = "请输入正确的验证码";
        return;
      }
      this[key] = "";
    },
    validatePassword() {
      if (this.password.length < 5) {
        this.errorPassword = "请输入正确密码,长度应大于5位";
        return;
      }
      this.errorPassword = "";
    },
    validateConfirmPassword() {
      if (this.password !== this.confirmPassword) {
        this.errorConfirmPassword = "密码不一致";
        return;
      }
      this.errorConfirmPassword = "";
    },
    submitForm() {
      this.validatePhone();
      this.validatePassword();
      if (this.formType == "register") {
        this.validateConfirmPassword();
        this.validateCode(this.registerCode, "registerCode");
      }
      if (this.formType == "forgotPassword") {
        this.validateCode(this.forgotPasswordCode, "errorForgotCode");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/forms/form-modal.scss");
</style>
