<template>
  <div class="showcase">
    <div class="container">
      <ShowImage
        :listDataImage="listShowCase"
        @onMouseOver="setAutoNextTab(false)"
        @onMouseOut="setAutoNextTab(true)"
      />
      <div class="bottom">
        <Tab
          :listTab="listTab"
          :activeTab="activeTab"
          :autoNextTab="autoNextTab"
          @onSetActiveTab="setActiveTab"
        />
        <div class="more">查看更多>></div>
      </div>
    </div>
  </div>
</template>
<script>
import { dataShowCase } from "../../_mock_";
import ShowImage from "../ui/ShowImage.vue";
import Tab from "../ui/Tab.vue";
export default {
  components: {
    Tab,
    ShowImage,
  },
  data() {
    return {
      activeTab: 0,
      autoNextTab: true,
    };
  },
  computed: {
    listTab() {
      return dataShowCase.map((item) => item.title);
    },
    listShowCase() {
      return dataShowCase?.at(this.activeTab);
    },
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    },
    setAutoNextTab(value) {
      this.autoNextTab = value;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/sections/showcase.scss");
</style>
