<template>
  <div>
    <Header />
    <VideoMedia />
    <VideoTutorials />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/sections/Header.vue";
import VideoMedia from "./components/sections/VideoMedia.vue";
import VideoTutorials from "./components/sections/VideoTutorials.vue";
import Footer from "./components/sections/Footer.vue";
export default {
  components: {
    Header,
    VideoMedia,
    VideoTutorials,
    Footer,
  },
};
</script>
<style lang="scss"></style>
