<template>
  <div class="video-media">
    <PopupVideoVue :closePopup="closePopupVideo" v-if="showPopupVideo" />
    <div class="filter-video">
      <h1 class="title">人人都会用的虚拟场景交付平台</h1>
      <p class="sub-title">2.6版本全新升级</p>
      <FormSignupTop />
    </div>
    <div class="triangle"></div>
    <video autoplay loop muted preload="auto" class="center" ref="video">
      <source
        src="https://cloud.chan3d.com/cdn/website/video/lead-30_1.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
import FormSignupTop from "../forms/FormSignupTop.vue";
import PopupVideoVue from "../popups/PopupVideo.vue";
export default {
  components: {
    PopupVideoVue,
    FormSignupTop,
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
