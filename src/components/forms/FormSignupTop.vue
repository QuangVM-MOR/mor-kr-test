<template>
  <form>
    <input type="text" placeholder="输入手机号" />
    <input type="text" placeholder="输入手机号" />
    <input type="text" placeholder="输入手机号" />
    <ButtonCommon text="sadasd"/>
  </form>
</template>
<script>
import ButtonCommon from "../ui/ButtonCommon.vue";
export default {
  components: {
    ButtonCommon,
  },
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/components/forms/form-signup-top.scss");
</style>
