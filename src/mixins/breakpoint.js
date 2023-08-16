export default {
  data: () => ({
    isDesktop: true,
  }),
  mounted() {
    window.addEventListener("resize", this.resizeHandler);
    this.resizeHandler();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler() {
      this.isDesktop = window.innerWidth > 1024;
    },
  },
};
