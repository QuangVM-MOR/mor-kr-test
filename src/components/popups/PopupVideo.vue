<template>
  <div class="popup-alert-video" ref="popUpAlertVideoRef">
    <IconAlert />
    <div class="content">
      <p>
        【新本来袭】新增360度单体展示、多人协同布展、付费展厅、在线客服、信息提示插件等功能，现免费开放使用，快来体验！
        <a href="#">了解详情</a>
      </p>
    </div>
    <span @click="handleClosePopup">
      <IconClose />
    </span>
  </div>
</template>

<script>
import IconAlert from "../icons/IconAlert.vue";
import IconClose from "../icons/IconClose.vue";
export default {
  props: {
    closePopup: {
      type: Function,
    },
  },
  components: {
    IconAlert,
    IconClose,
  },
  methods: {
    handleClosePopup() {
      this.$refs.popUpAlertVideoRef.classList.add("conditionalClose");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/components/popups/popup-video.scss");
</style>
