<template>
  <div class="root-list-cards-item">
    <div
      :class="['list-cards-item aos aos-toggle', isReverse && 'reverse']"
      data-aos="reset-transform"
    >
      <img :src="cardItem.thumbnail" alt="card-thumbnail" />
      <div class="list-cards-item__content">
        <div class="name">{{ cardItem.name }}</div>
        <div class="description">{{ cardItem.description }}</div>
      </div>
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
.root-list-cards-item {
  &:hover .list-cards-item {
    transform: scale(1.1);
  }
}
.list-cards-item {
  transition: 0.5s;
  display: flex;
  align-items: center;
  gap: 38px;
  transform: translateX(-80px);
  opacity: 0;
  &.reverse {
    flex-direction: row-reverse;
    transform: translateX(80px);
  }
  & img {
    width: 576px;
  }
  &__content {
    padding-right: 38px;
    & .name {
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