<template>
  <div class="video-playlist">
    <div class="video-playlist__title">
      <div class="title">视频目录</div>
      <a href="#" class="more">查看更多>></a>
    </div>
    <ul class="video-playlist__list scrollbar">
      <VideoPlayListItem
        v-for="video in videoList"
        :isPaused="video.id !== videoIdPlaying"
        :isActive="video.id === videoIdActive"
        :key="video.id"
        :video="video"
        @onPlay="handlePlay"
      />
    </ul>
  </div>
</template>
<script>
import VideoPlayListItem from "./VideoPlayListItem.vue";

export default {
  props: {
    videoList: {
      type: Array,
      required: true,
    },
    videoIdPlaying: {
      type: Number,
      required: true,
    },
    videoIdActive: {
      type: Number,
      required: true,
    },
  },
  components: {
    VideoPlayListItem,
  },
  methods: {
    handlePlay({ id, data }) {
      this.$emit("onPlay", { id, data });
    },
  },
};
</script>
<style lang="scss" scoped>
.video-playlist {
  padding: 20px 0px 0px 30px;
  max-width: 350px;
  background-color: #ffffff;
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
    overflow-y: auto;
    height: 470px;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 30px;
    .title {
      font-size: 20px;
    }
    .more {
      color: #999999;
    }
  }
}
</style>
