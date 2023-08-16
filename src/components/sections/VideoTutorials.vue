<template>
  <div class="video-tutorials">
    <h2 class="video-tutorials__title aos aos-toggle" data-aos="flip-left">
      展厅布展视频教程大全
    </h2>
    <div class="video-tutorials__description">新手小白晋级设计达人</div>
    <div class="video-box">
      <div class="video">
        <video
          class="aos"
          controls
          autoplay
          ref="videoRef"
          preload="auto"
          :poster="videoActive.poster"
          :src="videoActive.src"
          @play="handleControlPlay"
          @pause="handleControlPause"
        />
        <template v-if="isPaused">
          <div class="play-video-container">
            <PlayVideo :width="74" :height="74" />
          </div>
        </template>
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
import PlayVideo from "../icons/PlayVideo.vue";
import { videoTutorials } from "../../_mock_";

export default {
  components: {
    VideoPlayList,
    PlayVideo,
  },
  data: () => ({
    videoIdPlaying: -1,
    videoList: structuredClone(videoTutorials),
    videoActive: structuredClone(videoTutorials[0]),
    isPaused: true,
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
    handleControlPlay() {
      this.isPaused = false;
    },
    handleControlPause() {
      this.isPaused = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../../assets/css/sections/video-tutorials.scss");
</style>