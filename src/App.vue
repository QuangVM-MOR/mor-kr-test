<template>
  <div>
    <Header />
    <VideoMedia />
    <FreeProduct />
    <VideoTutorials />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/sections/Header.vue";
import VideoMedia from "./components/sections/VideoMedia.vue";
import VideoTutorials from "./components/sections/VideoTutorials.vue";
import Footer from "./components/sections/Footer.vue";
import FreeProduct from "./components/sections/FreeProduct.vue";
export default {
  components: {
    Header,
    VideoMedia,
    VideoTutorials,
    Footer,
    FreeProduct,
  },
};
</script>
<style lang="scss"></style>
