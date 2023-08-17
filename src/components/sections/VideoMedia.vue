<template>
  <div class="video-media">
    <PopupVideoVue :closePopup="closePopupVideo" v-if="showPopupVideo" />
    <div class="video-top">
      <h1 class="title">人人都会用的虚拟场景交付平台</h1>
      <p class="sub-title">2.6版本全新升级</p>
      <FormSignupTop />
      <div class="download">
        <ButtonCommon
          text="下载客户端"
          type="yellow"
          :animation="true"
          :border="true"
        />
        <ButtonCommon
          text="网页布展"
          type="yellow"
          :border="true"
          :animation="true"
        />
      </div>
    </div>
    <div class="triangle"></div>
    <div class="back-video"></div>
    <div class="wrap-video">
      <div class="filter-video"></div>
      <video autoplay loop muted preload="auto" class="center" ref="video">
        <source src="../../assets/mp4/video-banner.mp4" type="video/mp4" />
      </video>
    </div>
    <img
      src="../../assets/images/scrolldown.gif"
      alt="scrolldown"
      class="scrolldown"
    />
  </div>
</template>

<script>
import FormSignupTop from "../forms/FormSignupTop.vue";
import PopupVideoVue from "../popups/PopupVideo.vue";
import ButtonCommon from "../ui/ButtonCommon.vue";

export default {
  components: {
    PopupVideoVue,
    FormSignupTop,
    ButtonCommon,
  },
  data() {
    return {
      showPopupVideo: true,
    };
  },
  onMounted() {
    this.$refs.video.play();
  },
  methods: {
    closePopupVideo() {
      this.showPopupVideo = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../../assets/css/sections/video-media.scss");
</style>
