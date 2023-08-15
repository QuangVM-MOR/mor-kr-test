<template>
  <div class="advantage-item">
    <img :src="advantageItem.icon" />
    <p class="name">{{ advantageItem.name }}</p>
    <span class="description">
      {{ advantageItem.description }}
    </span>
    <div class="border top"></div>
    <div class="border right"></div>
    <div class="border bottom"></div>
    <div class="border left"></div>
  </div>
</template>

<script>
export default {
  props: {
    advantageItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.advantage-item {
  position: relative;
  padding: 46px 32px;
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  &:hover {
    & .border.top,
    & .border.bottom {
      width: 100%;
    }
    & .border.left,
    & .border.right {
      height: 100%;
    }
    & .name::after {
      width: 100px;
    }
  }
  & img {
    width: 36px;
  }
  & .name {
    font-size: 16px;
    position: relative;
    &::after {
      transition: 0.8s;
      content: "";
      display: inline-block;
      position: absolute;
      height: 2px;
      width: 40px;
      background-color: #0f7bff;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  & .description {
    color: #666666;
    text-align: justify;
  }
  .border {
    position: absolute;
    background-color: #0f7bff;
    transition: 0.3s;

    &.top {
      width: 0;
      height: 1px;
      top: 0;
      left: 0;
    }
    &.right {
      width: 1px;
      height: 0;
      right: 0;
      top: 0;
    }
    &.bottom {
      height: 1px;
      width: 0;
      right: 0;
      bottom: 0;
    }
    &.left {
      width: 1px;
      height: 0;
      left: 0;
      bottom: 0;
    }
  }
}
</style>