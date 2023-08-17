export default {
  created() {
    this.myEventHandler();
    window.addEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      const htmlElement = document.getElementsByTagName("html")[0];
      const isLandScape = height < width;
      const e = navigator.userAgent;
      let device = {
        Android: /Android/.test(e),
        BlackBerry: /BlackBerry/.test(e),
        iOS: /iPhone|iPad|iPod/.test(e),
        iPad:
          /iPad/.test(e) ||
          ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints),
        Windows: /IEMobile/.test(e),
      };
      device.any =
        device.Android || device.BlackBerry || device.iOS || device.Windows;

      if (device.iPad) {
        htmlElement.style.fontSize = isLandScape ? "10vh" : "10vw";
      } else if (device.any) {
        htmlElement.style.fontSize = isLandScape ? "12vh" : "12vw";
      } else {
        let scale = 1;
        if (isLandScape && 1920 < width) {
          scale = width / 1920;
        } else if (1920 < height) {
          scale = height / 1920;
        }
        htmlElement.style.fontSize = 100 * scale + "px";
      }
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
};
