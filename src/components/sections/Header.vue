<template>
  <header class="header">
    <div class="container">
      <div class="logo-nav">
        <a href="/" class="logo">
          <IconLogo />
          <span>知了云展</span>
        </a>
        <ul class="nav">
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
        <div class="vip">
          <a href="#">
            <IconVip />
            <p>升级VIP</p></a
          >
        </div>
        <div class="register">
          <span class="b">登录</span><span>|</span><span class="b">注册</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import IconLogo from "../icons/IconLogo.vue";
import IconVip from "../icons/IconVip.vue";
export default {
  data() {
    return {
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
  components: {
    IconLogo,
    IconVip,
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
