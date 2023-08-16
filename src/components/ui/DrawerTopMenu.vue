<template>
  <div class="drawer-top">
    <div class="wrap">
      <div class="menu-top">
        <a href="/" class="logo">
          <IconLogo />
          <span>知了云展</span>
        </a>
        <img
          @click="close"
          src="data:image/png;base64,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"
          class="m-header-close"
          alt="close"
        />
      </div>
      <nav class="menu-bottom">
        <ul class="m-header-nav">
          <li><a class="selected" href="/">首页</a></li>
          <li><a href="/scheme">解决方案</a></li>
          <li><a href="/case">成功案例</a></li>
          <li><a href="/about">关于我们</a></li>
          <li>
            <a
              href="//www.yuque.com/chan3d/help"
              target="_blank"
              rel="noreferrer"
              >帮助文档</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="backdrop" @click="close"></div>
  </div>
</template>
<script>
import IconLogo from "../icons/IconLogo.vue";
export default {
  components: {
    IconLogo,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/ui/drawer-top-menu.scss");
</style>
