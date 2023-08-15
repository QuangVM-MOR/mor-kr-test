import poster1 from "../assets/images/playlistitem-poster1.jpg";
import poster2 from "../assets/images/playlistitem-poster2.jpg";
import poster3 from "../assets/images/playlistitem-poster3.jpg";
import poster4 from "../assets/images/playlistitem-poster4.jpg";
import poster5 from "../assets/images/playlistitem-poster5.jpg";
import ourAdvantage1 from "../assets/images/our-advantage-1.svg";
import ourAdvantage2 from "../assets/images/our-advantage-2.svg";
import ourAdvantage3 from "../assets/images/our-advantage-3.svg";
import ourAdvantage4 from "../assets/images/our-advantage-4.svg";

export const videoTutorials = [
  {
    id: 1,
    name: "在线布展教程",
    poster: poster1,
    thumbnail: poster1,
    src: "https://cloud.chan3d.com/cdn/website/video/知了云展布展教程.mp4",
  },
  {
    id: 2,
    name: "客户端布展教程",
    poster: poster2,
    thumbnail: poster2,
    src: "https://cloud.chan3d.com/cdn/website/video/客户端布展教程.mp4",
  },
  {
    id: 3,
    name: "导入教程",
    poster: poster3,
    thumbnail: poster3,
    src: "https://cloud.chan3d.com/cdn/website/video/模型导入教程.mp4",
  },
  {
    id: 4,
    name: "客户端布展教程",
    poster: poster4,
    thumbnail: poster4,
    src: "https://cloud.chan3d.com/cdn/website/video/烘焙教程.mp4",
  },
  {
    id: 5,
    name: "插件教程",
    poster: poster5,
    thumbnail: poster5,
    src: "https://cloud.chan3d.com/cdn/website/video/插件教程.mp4",
  },
];

export const listCards = [
  {
    id: 1,
    name: "纯三维漫游体验",
    description:
      "这是纯三维场景，您可以自由走动，查看每个角落和细节，身临其境般享受设计美学。与传统的360度全景图不同，知了云展并不受限制于几个固定的某几个视角，高度还原场景各个角落细节。",
    thumbnail: "https://cloud.chan3d.com/cdn/website/img/home/pc/card1.gif",
  },
  {
    id: 2,
    name: "实时渲染效果",
    description:
      "知了云展使用全局光照反向追踪渲染技术，支持CPU和CUDA双形式渲染，为你的模型场景提供真实的光影反射效果，无需使用任何第三方软件进行烘焙及光照贴图展UV。",
    thumbnail: "https://cloud.chan3d.com/cdn/website/img/home/pc/card2.gif",
  },
  {
    id: 3,
    name: "强大的插件系统",
    description:
      "系统内置几十种插件系统，无需编程，一键拖拽，轻松设置各种场景交互：材质修改、设置背景音乐、配置链接热点、设置场景信息及封面等。",
    thumbnail: "https://cloud.chan3d.com/cdn/website/img/home/pc/card3.gif",
  },
  {
    id: 4,
    name: "全局光照",
    description:
      "基于真实的光照物理特性，进行5次复杂的灯光跟踪计算，重现真实的光照效果，帮您的设计还原逼真的光照环境。",
    thumbnail: "https://cloud.chan3d.com/cdn/website/img/home/pc/card4.gif",
  },
  {
    id: 5,
    name: "快速二次布展",
    description:
      "三维场景制作完成，客户还可以随时往场景中添加图片、视频、文字等素材、调整模型位置，进行二次快速布展。",
    thumbnail: "https://cloud.chan3d.com/cdn/website/img/home/pc/card5.gif",
  },
  {
    id: 6,
    name: "一键分享、轻松体验",
    description:
      "知了云展采用HTML5和WebGL技术，依托阿里云，只需一个链接，无需安装任何程序及插件，即可任意设备直接浏览器打开访问。",
    thumbnail: "https://cloud.chan3d.com/cdn/website/img/home/pc/card6.gif",
  },
];

export const listAdvantages = [
  {
    id: 1,
    name: "更低的交付成本",
    description:
      "无需招聘高工资程序员、通过强大的插件系统、轻松交付纯三维互动空间。",
    icon: ourAdvantage1,
  },
  {
    id: 2,
    name: "丰富的交互功能",
    description:
      "提供内容丰富、形式多样的素材管理系统，内置材质修改、自动漫游、留言聊天、视频会议等在线交流工具。",
    icon: ourAdvantage2,
  },
  {
    id: 3,
    name: "更短的交付周期",
    description: "一小时将空间设计发布云端、纯三维网页漫游。",
    icon: ourAdvantage3,
  },
  {
    id: 4,
    name: "更好的服务",
    description:
      "提供7*12小时技术服务、项目设计将指派本地合作设计公司实施交付。",
    icon: ourAdvantage4,
  },
];
