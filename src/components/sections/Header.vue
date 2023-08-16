<template>
  <header class="header">
    <div class="container">
      <div class="logo-nav">
        <a href="/" class="logo">
          <IconLogo />
          <span>知了云展</span>
        </a>
        <ul class="nav m-hidden">
          <li v-for="menuItem in menu" :key="menuItem.id">
            <a
              @click="selectMenu(menuItem.id)"
              href="#"
              :class="[menuItem.class, menuItem.selected && 'selected']"
              >{{ menuItem.name }}</a
            >
          </li>
        </ul>
      </div>
      <div class="user">
        <div class="vip m-hidden">
          <a href="#">
            <IconVip />
            <p>升级VIP</p></a
          >
        </div>
        <div class="register m-hidden">
          <span class="b">登录</span><span>|</span><span class="b">注册</span>
        </div>
      </div>
      <div class="un-login d-hidden">登录</div>
      <div class="icon-more d-hidden" @click="showDrawerMenu = true">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAfCAYAAACLSL/LAAAA50lEQVRYR+2WvWoCURBGz7dimrAr+C6GBLRPHsXWzp/CN7BMHsY6ig8jBCOEyO4nkiaQILvVXmRuPTAfZ4Y5V8XCz1RMJJ6ADu2+0mYDrNSbeW0xEty1m+mnu+Fb8K7e3B9AkUKoXxk+L8HWJkFi+dQjZYwFgwR2rDLsnPEqls5y6HdO3FtkbY5Upiq7HA+wV5tBrvWOYE0nE8RuiFhq5+KL4yFnr3zuocRY5iGBA1ta7FzyFhJvuPwh8brAQuJ1Sf2pCyU1RRfEbohYSLzWMEPitTD9U5SwxIuZXxATwWMKH0Vg64rVGVe1hfiehXJGAAAAAElFTkSuQmCC"
          alt="menu"
        />
      </div>
      <DrawerTopMenu :class="[showDrawerMenu && 'show']" @close="showDrawerMenu = false"/>
    </div>
  </header>
</template>

<script>
import IconLogo from "../icons/IconLogo.vue";
import IconVip from "../icons/IconVip.vue";
import DrawerTopMenu from "../ui/DrawerTopMenu.vue";

export default {
  components: {
    IconLogo,
    IconVip,
    DrawerTopMenu,
  },
  data() {
    return {
      showDrawerMenu:false,
      menu: [
        {
          id: 1,
          name: "首页",
          path: "#",
          selected: true,
          class: "",
        },
        {
          id: 2,
          name: "解决方案",
          path: "#",
          selected: false,
          class: "",
        },
        {
          id: 3,
          name: "成功案例",
          path: "#",
          selected: false,
          class: "",
        },
        {
          id: 4,
          name: "帮助文档",
          path: "#",
          selected: false,
          class: "",
        },
        {
          id: 5,
          name: "合作模式",
          selected: false,
          class: "cooperation",
          path: "#",
        },
      ],
    };
  },
  methods: {
    selectMenu(id) {
      this.menu.forEach((menuItem) => {
        if (menuItem.id == id) menuItem.selected = true;
        else menuItem.selected = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/sections/header.scss");
</style>
