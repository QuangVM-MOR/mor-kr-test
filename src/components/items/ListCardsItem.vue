<template>
  <div :class="['list-cards-item', isReverse && 'reverse']">
    <img :src="cardItem.thumbnail" alt="card-thumbnail" />
    <div class="list-cards-item__content">
      <div class="name">{{ cardItem.name }}</div>
      <div class="description">{{ cardItem.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardItem: {
      type: Object,
      required: true,
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-cards-item {
  display: flex;
  align-items: center;
  gap: 38px;
  &.reverse {
    flex-direction: row-reverse;
  }
  & img {
    width: 576px;
  }
  &__content {
    padding-right: 38px;
    & .name {
      color: #333333;
      font-size: 22px;
      margin-bottom: 20px;
    }
    & .description {
      line-height: 24px;
      color: #666666;
    }
  }
}
</style>