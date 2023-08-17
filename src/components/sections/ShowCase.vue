<template>
  <div class="showcase">
    <div class="container">
      <template v-if="isDesktop">
        <ShowImage
          :listDataImage="listShowCase"
          :activeTab="activeTab"
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
      </template>
      <template v-else>
        <ShowCaseMobile />
      </template>
    </div>
  </div>
</template>
<script>
import breakpointMixin from "../../mixins/breakpoint";
import { dataShowCase } from "../../_mock_";
import ShowCaseMobile from "../ui/ShowCaseMobile.vue";
import ShowImage from "../ui/ShowImage.vue";
import Tab from "../ui/Tab.vue";
export default {
  mixins: [breakpointMixin],
  components: {
    Tab,
    ShowImage,
    ShowCaseMobile,
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
      return dataShowCase;
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
