<template>
  <div class="video-tutorials">
    <div class="video-tutorials__title">展厅布展视频教程大全</div>
    <div class="video-tutorials__description">新手小白晋级设计达人</div>
    <div class="video-box">
      <div class="video">
        <video
          controls
          autoplay
          ref="videoRef"
          preload="auto"
          :poster="videoActive.poster"
          :src="videoActive.src"
        />
      </div>
      <VideoPlayList
        :videoIdActive="videoActive.id"
        :videoIdPlaying="videoIdPlaying"
        :videoList="videoList"
        @onPlay="handlePlay"
      />
    </div>
  </div>
</template>
<script>
import VideoPlayList from "../items/VideoPlayList.vue";
import { videoTutorials } from "../../_mock_";

export default {
  components: {
    VideoPlayList,
  },
  data: () => ({
    videoIdPlaying: -1,
    videoList: structuredClone(videoTutorials),
    videoActive: structuredClone(videoTutorials[0]),
  }),
  methods: {
    handlePlay({ id, data }) {
      if (this.videoIdPlaying !== id) {
        this.videoIdPlaying = id;
        this.playVideo();
      } else {
        this.videoIdPlaying = -1;
        this.pauseVideo();
      }
      this.videoActive = data;
    },
    playVideo() {
      this.$refs.videoRef.play();
    },
    pauseVideo() {
      this.$refs.videoRef.pause();
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/sections/video-tutorials.scss");
</style>