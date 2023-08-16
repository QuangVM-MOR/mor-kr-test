<template>
  <div class="tab-wrap">
    <div
      class="tab"
      v-for="(tab, index) in listTab"
      :key="index"
      :class="[activeTab == index ? 'active' : '']"
      @click="setTab(index)"
    >
      {{ tab }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeOut: null,
    };
  },
  props: {
    listTab: {
      type: Array,
      default: [],
    },
    activeTab: {
      type: Number,
      default: 0,
    },
    autoNextTab: {
      type: Boolean,
      default: false,
    },
    timeAutoNextTab: {
      type: Number,
      default: 3000,
    },
  },
  watch: {
    autoNextTab: {
      handler(val) {
        if (val) {
          this.timeOut = setInterval(this.nextTab, this.timeAutoNextTab);
        } else {
          clearInterval(this.timeOut);
        }
      },
      immediate: true,
    },
  },
  methods: {
    setTab(index) {
      this.$emit("onSetActiveTab", index);
      if (!!this.timeOut) {
        clearInterval(this.timeOut);
        this.timeOut = setInterval(this.nextTab, this.timeAutoNextTab);
      }
    },
    nextTab() {
      const nextTab =
        this.activeTab != this.listTab.length - 1 ? this.activeTab + 1 : 0;
      this.setTab(nextTab);
    },
  },
  beforeDestroy() {
    clearInterval(this.timeOut);
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/components/ui/tab.scss");
</style>
