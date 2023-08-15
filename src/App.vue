<template>
  <div>
    <Header />
    <VideoMedia />
    <Card3D />
    <VideoTutorials />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/sections/Header.vue";
import VideoMedia from "./components/sections/VideoMedia.vue";
import VideoTutorials from "./components/sections/VideoTutorials.vue";
import Footer from "./components/sections/Footer.vue";
import Card3D from "./components/sections/Card3D.vue";
export default {
  components: {
    Header,
    VideoMedia,
    VideoTutorials,
    Footer,
    Card3D,
  },
};
</script>
<style lang="scss"></style>
