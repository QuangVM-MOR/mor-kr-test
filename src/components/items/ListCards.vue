<template>
  <div class="list-cards">
    <ListCardsItem
      :isReverse="index % 2 === 1"
      v-for="(cardItem, index) in listCards"
      :key="cardItem.id"
      :cardItem="cardItem"
    />
  </div>
</template>

<script>
import ListCardsItem from "./ListCardsItem.vue";

export default {
  props: {
    listCards: {
      type: Array,
      required: true,
    },
  },
  components: {
    ListCardsItem,
  },
};
</script>
