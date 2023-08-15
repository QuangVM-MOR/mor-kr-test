import poster1 from "../assets/images/playlistitem-poster1.jpg";
import poster2 from "../assets/images/playlistitem-poster2.jpg";
import poster3 from "../assets/images/playlistitem-poster3.jpg";
import poster4 from "../assets/images/playlistitem-poster4.jpg";
import poster5 from "../assets/images/playlistitem-poster5.jpg";
import videoTutorial1 from "../assets/mp4/video-tutorial-1.mp4";
import videoTutorial3 from "../assets/mp4/video-tutorial-3.mp4";
import shareSvg from "../assets/images/svg-share.svg";
import boxSvg from "../assets/images/svg-box.svg";
import globalSvg from "../assets/images/svg-global.svg";

export const videoTutorials = [
  {
    id: 1,
    name: "在线布展教程",
    poster: poster1,
    thumbnail: poster1,
    src: videoTutorial1,
  },
  {
    id: 2,
    name: "客户端布展教程",
    poster: poster2,
    thumbnail: poster2,
  },
  {
    id: 3,
    name: "导入教程",
    poster: poster3,
    thumbnail: poster3,
    src: videoTutorial3,
  },
  {
    id: 4,
    name: "客户端布展教程",
    poster: poster4,
    thumbnail: poster4,
  },
  {
    id: 5,
    name: "插件教程",
    poster: poster5,
    thumbnail: poster5,
  },
];

export const freeProducts = [
  {
    image: shareSvg,
    title: "轻分享",
    description:
      "只需发送展厅链接或嵌入您的网站中，客户便可以在任何设备上网页浏览。",
  },
  {
    image: globalSvg,
    title: "高互动",
    description:
      "一流的漫游互动将帮助您在任何行业取得成功，增强您作品的竞争力，打动客户并给他们留下深刻的印象。",
  },
  {
    image: boxSvg,
    title: "易上手",
    description:
      "知了云展与国内常用的建模工具集成在一起，您无需更改工作流程，快速上手。",
  },
];

