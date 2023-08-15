<template>
  <div>
    <Header />
    <VideoMedia />
    <FreeProduct />
    <ShowCase />
    <WhoAreWe />
    <OurAdvantages />
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
import OurAdvantages from "./components/sections/OurAdvantages.vue";
import WhoAreWe from "./components/sections/WhoAreWe.vue";
export default {
  components: {
    Header,
    VideoMedia,
    VideoTutorials,
    Footer,
    FreeProduct,
    Card3D,
    ShowCase,
    OurAdvantages,
    WhoAreWe,
  },
  mounted() {
    const elements = document.getElementsByClassName("aos");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const classAnimation = entry.target.getAttribute("data-aos");
          if (classAnimation) {
            entry.target.classList.add(classAnimation);
          }
        }
      });
    });
    Array.from(elements).forEach((element) => {
      observer.observe(element);
    });
  },
};
</script>
<style lang="scss"></style>
