<template>
  <div class="root-list-cards-item">
    <div
      :class="['list-cards-item aos aos-toggle', isReverse && 'reverse']"
      data-aos="reset-transform"
    >
      <img :src="cardItem.thumbnail" :alt="cardItem.name" />
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
  transition: 0.8s;
}
.root-list-cards-item:hover {
  transform: scale(1.1);
  @media screen and (max-width: 1023px) {
    transform: unset;
  }
}
.list-cards-item {
  transition: 0.5s;
  display: flex;
  align-items: center;
  gap: 38px;
  transform: translateX(-80px);
  opacity: 0;
  @media screen and (max-width: 1023px) {
    flex-direction: column-reverse;
    padding-bottom: 0.8rem;
    @media screen and (max-width: 767px) {
      padding-bottom: 0.6rem;
    }
  }
  &.reverse {
    flex-direction: row-reverse;
    transform: translateX(80px);
  }
  & img {
    width: 576px;
    @media screen and (max-width: 1023px) {
      width: calc(100% - 16px);
      height: 4rem;
    }
  }
  &__content {
    padding-right: 38px;
    @media screen and (max-width: 1023px) {
      padding-right: unset;
    }
    & .name {
      font-size: 22px;
      margin-bottom: 20px;
      @media screen and (max-width: 1023px) {
        text-align: center;
        font-size: 0.4rem;
        font-weight: bold;
        margin-bottom: 0.25rem;
        margin-top: 0.3rem;
      }
      @media screen and (max-width: 767px) {
        font-size: 0.3rem;
      }
    }
    & .description {
      line-height: 24px;
      color: #666666;
      @media screen and (max-width: 1023px) {
        font-size: 0.26rem;
        text-align: left;
        margin: 0.25rem 0.25rem 0 0.25rem;
        min-height: 1.1rem;
        line-height: 44px;
      }
      @media screen and (max-width: 767px) {
        font-size: 0.2rem;
        line-height: 24px;
      }
    }
  }
}
</style>
