<template>
  <div>
    <Header />
    <VideoMedia />
    <FreeProduct />
    <ShowCase />
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
import FreeProduct from "./components/sections/FreeProduct.vue";
import Card3D from "./components/sections/Card3D.vue";
import ShowCase from "./components/sections/ShowCase.vue";
export default {
  components: {
    Header,
    VideoMedia,
    VideoTutorials,
    Footer,
    FreeProduct,
    Card3D,
    ShowCase,
  },
};
</script>
<style lang="scss"></style>
