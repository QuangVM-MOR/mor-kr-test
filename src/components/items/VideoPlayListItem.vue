<template>
  <li class="video-playlist-item">
    <div class="video-playlist-item__poster">
      <img :src="video.thumbnail" alt="Thumbnail" />
      <div class="play-video-container">
        <PlayVideo :isPaused="isPaused" />
      </div>
    </div>
    <div class="name">
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
  },
  components: { PlayVideo },
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
    & .play-video-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  & .name {
    font-size: 16px;
  }
}
</style>