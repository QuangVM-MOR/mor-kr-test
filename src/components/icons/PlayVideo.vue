<template>
  <div
    class="play-video"
    :style="{
      backgroundImage: `url(${isPaused ? play : pause})`,
      backgroundSize: 'contain',
      width: `${width}px`,
      height: `${height}px`,
    }"
  ></div>
</template>
<script>
import play from "../../assets/images/play.webp";
import pause from "../../assets/images/pause.webp";

export default {
  props: {
    isPaused: {
      type: Boolean,
      default: true,
    },
    width: {
      type: Number,
      default: 32,
    },
    height: {
      type: Number,
      default: 32,
    },
  },
  computed: {
    play: () => play,
    pause: () => pause,
  },
};
</script>
<style lang="scss" scoped>
.play-video {
  border-radius: 50%;
}
</style>