<template>
  <div>
    <Header />
    <VideoMedia />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/sections/Header.vue";
import VideoMedia from "./components/sections/VideoMedia.vue";
import Footer from "./components/sections/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    VideoMedia,
  },
};
</script>
<style lang="scss"></style>
