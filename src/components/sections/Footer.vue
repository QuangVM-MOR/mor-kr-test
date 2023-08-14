<template>
  <div class="footer">
    <div class="footer-content-box">
      <div class="footer__content container">
        <div class="footer__content--item">
          <div v-for="item in mainFooter" :key="item.id">
            <div class="item__name">
              {{ item.name }}
            </div>
            <div class="item__children">
              <div v-for="child in item.children" :key="child.id">
                <template v-if="child.type === 'text'">
                  {{ child.name }}
                </template>
                <template v-else-if="child.type === 'image'">
                  <img :src="child.url" />
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__content--item">
          <div>
            <div class="item__name">{{ contactUs.name }}</div>
            <div class="item__children">
              <div class="option">
                <div class="label">{{ contactUs.company.label }}:</div>
                <div class="value">{{ contactUs.company.value }}</div>
              </div>
              <div class="option">
                <div class="label">{{ contactUs.address.label }}:</div>
                <div class="value">{{ contactUs.address.value }}</div>
              </div>
              <div class="option">
                <div class="label">{{ contactUs.contactNumber.label }}:</div>
                <div class="value">{{ contactUs.contactNumber.value }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      Copyright ©️2020 www.chan3d.com 鄂ICP备2020022689号-2
      武汉善为信息科技有限公司版权所有
    </div>
  </div>
</template>
<script>
import guest from "../../assets/images/guest.jpg";
import guest2 from "../../assets/images/guest2.jpg";
import kaipiao from "../../assets/images/kaipiao.jpg";

export default {
  data: () => ({
    mainFooter: [
      {
        id: 1,
        name: "关于善为",
        children: [
          {
            id: 1,
            name: "善为介绍",
            type: "text",
          },
          {
            id: 2,
            name: "应用案例",
            type: "text",
          },
          {
            id: 3,
            name: "知乎专栏",
            type: "text",
          },
          {
            id: 4,
            name: "平台公约",
            type: "text",
          },
        ],
      },
      {
        id: 2,
        name: "帮助中心",
        children: [
          {
            id: 1,
            name: "入门指南",
            type: "text",
          },
          {
            id: 2,
            name: "常见问题",
            type: "text",
          },
          {
            id: 3,
            name: "用户手册",
            type: "text",
          },
        ],
      },
      {
        id: 3,
        name: "技术咨询",
        children: [
          {
            id: 1,
            type: "image",
            url: guest,
          },
        ],
      },
      {
        id: 4,
        name: "商务合作咨询",
        children: [
          {
            id: 1,
            type: "image",
            url: guest2,
          },
        ],
      },
      {
        id: 5,
        name: "开票咨询",
        children: [
          {
            id: 1,
            type: "image",
            url: kaipiao,
          },
        ],
      },
    ],
    contactUs: {
      name: "联系我们",
      company: {
        label: "公司名称",
        value: "武汉善为信息科技有限公司",
      },
      address: {
        value: "武汉市洪山区海达创新广场1402",
        label: "公司地址",
      },
      contactNumber: {
        label: "联系电话",
        value: "18672355690  18602755840",
      },
    },
  }),
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/sections/footer.scss");
</style>