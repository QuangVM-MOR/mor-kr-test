<template>
  <Teleport to="body">
    <div class="modal" v-show="isShow">
      <div class="content">
        <slot></slot>
      </div>
      <div class="backdrop" @click="$emit('close')">
        <span class="close" @click="$emit('close')"
          ><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABMElEQVQ4T53UXUrEMBAH8BkS2jsI3RYrsuAhZD2MPuiDXkRFEHzxLMteQmnZUEpB2CO05ENauks3mzTJ9rEtPzKZ/wwWRbGklD5EUfSZJMkWzniqqsqklPdSym9kjL0BwLNS6g8RV3melyFmWZaXhJA1ACwA4B2bprlq23aDiBehqIbthBAr7E/DGLtWSq1DUB2jlN6lafozgKGoDeudA+iLzmEnoAt1YUbQhgoh+KSbu/2d6Yk4Knn60dAoPkbDillPaGrU+G4Wc4LanYFPTq0l6w1QSgmfnBpBUzc559wn/CfgXDR8JuoI9MmZCz2APpjPmA5gCOZCcVyOG5/Q6lOhlx/H8W2/YF8B4AUAnKE1Ld4pOizYuq5vOOdPhJCPLMt+Q7b1/t9+SXdd94iIX/+LPUFpOTMzEgAAAABJRU5ErkJggg=="
            alt="close"
        /></span>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/components/modals/modal.scss");
</style>
