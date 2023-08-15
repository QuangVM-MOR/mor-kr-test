<template>
  <li class="video-playlist-item" @click="handlePlay">
    <div class="video-playlist-item__poster">
      <img :src="video.thumbnail" alt="Thumbnail" />
      <div class="play-video-container">
        <PlayVideo :isPaused="isPaused" />
      </div>
    </div>
    <div :class="['name', isActive && 'active']">
      {{ video.name }}
    </div>
  </li>
</template>
<script>
import PlayVideo from "../icons/PlayVideo.vue";
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
    isPaused: {
      type: Boolean,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  components: { PlayVideo },
  methods: {
    handlePlay() {
      this.$emit("onPlay", {
        id: this.video.id,
        data: this.video,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.video-playlist-item {
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  &__poster {
    width: 160px;
    height: 90px;
    position: relative;
    & img {
      border-radius: 4px;
    }
  }
  & .name {
    font-size: 16px;
    &.active {
      color: #0f7bff;
    }
  }
}
</style>