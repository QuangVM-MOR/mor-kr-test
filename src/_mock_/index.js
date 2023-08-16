import poster1 from "../assets/images/playlistitem-poster1.jpg";
import poster2 from "../assets/images/playlistitem-poster2.jpg";
import poster3 from "../assets/images/playlistitem-poster3.jpg";
import poster4 from "../assets/images/playlistitem-poster4.jpg";
import poster5 from "../assets/images/playlistitem-poster5.jpg";
import shareSvg from "../assets/images/svg-share.svg";
import boxSvg from "../assets/images/svg-box.svg";
import globalSvg from "../assets/images/svg-global.svg";
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

export const dataShowCase = [
  {
    title: "企业展厅",
    animation: "showImg0",
    listShowcase: [
      {
        image:
          "https://cloud.chan3d.com/scenes/d8b49d9bd2613f42cbbf6ba9a0b1c211/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638845674909",
        caption: "海迈科技云展厅",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/c29163d1cb4e23925c4103874b10e953/cover.png?x-oss-process=image%2Fresize%2Cl_512&t=1638857452419",
        caption: "国家生态环境科技成果转化综合服务平台展厅",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/4c9c339049f081cb24d7b7a3e7a95ad9/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638846903991",
        caption: "内蒙河山大观超低能耗展厅",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/6fd1acef201f7adfaf914a9fe6a0223f/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638849238841",
        caption: "中国煤科信息公司云展厅",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/1n3UcojTSzQQcHOxWmZdvCk4Vr6/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452420",
        caption: "创维展台",
      },
    ],
  },
  {
    title: "数字史馆",
    animation: "showImg1",
    listShowcase: [
      {
        image:
          "https://cloud.chan3d.com/scenes/874f7e7b3b1a30c5e76d1fe24db86993/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452419",
        caption: "延边老区革命馆",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/865ee277cdd04acba18daabbaace3d1f/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452419",
        caption: "纪录小康 云南征程",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/5d2bf08096f53d57867fc7dc8e20995b/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638857452419",
        caption: "肇庆市庆祝中国共产党成立100周年——“3个100”红色党史网上展馆",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/1qBoT3meedkko1VADOCltquptNu/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638860218258",
        caption: "建党100周年",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/022ce5e295ebe4557ebbb6a278e9ab9b/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638860780247",
        caption: "回顾党的长征历程，感怀党的百年之恩",
      },
    ],
  },
  {
    title: "艺术画展",
    animation: "showImg2",
    listShowcase: [
      {
        image:
          "https://cloud.chan3d.com/scenes/1wMvJhNuJ9O14Jfo2SQb02IbETj/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638860780248",
        caption: "君子之风马少君个人画展",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/1sHVsQ8DY5HFbHtySsvKizkisez/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861267545",
        caption: "近思艺廊：赵伯辉春日花语油画个展",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/1pCLyFDnyVy3uAUEibDJI03cmuo/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861550469",
        caption: "寻梦艺源|贾越个人画展",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/093ef26df96db0ecc1a37f1ce984ab93/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861753401",
        caption: "浙江交通集团",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/art20201117/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638864965487",
        caption: "艺术展",
      },
    ],
  },
  {
    title: "党建军史",
    animation: "showImg3",
    listShowcase: [
      {
        image:
          "https://cloud.chan3d.com/scenes/022ce5e295ebe4557ebbb6a278e9ab9b/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638845177443",
        caption: "延边老区革命馆",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/1znZyZEXiWdVBujHev8YuLk43A5/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861188930",
        caption: "纪录小康 云南征程",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/1uL6P8Bh6VXBdyQpj9UeGN9Vika/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861267544",
        caption: "肇庆市庆祝中国共产党成立100周年——“3个100”红色党史网上展馆",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/d099cc072b3e6efd7c0f36a1754d0796/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638865671643",
        caption: "建党100周年",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/1qbOABXWEKFDjA66WJjOHKra6lG/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638865671644",
        caption: "回顾党的长征历程，感怀党的百年之恩",
      },
    ],
  },
  {
    title: "畅享创意",
    animation: "showImg4",
    listShowcase: [
      {
        image:
          "https://cloud.chan3d.com/scenes/1nvHgyNlo7x33T9HFEOryur8T0t/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638860780248",
        caption: "森林狂想曲",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/1rZTbmbeqYyKVNUu08BwRNTn5LR/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861267545",
        caption: "时光浸润的艺术角落——上世纪广告插画展",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/00d5ec08d692405eae1cd97060ee5110/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861550469",
        caption: "”映彩“广彩文化品牌推广设计",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/1purrnymO5ZpnafVUHjzl9cBei2/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638861550469",
        caption: "On The Way主题线上摄影展",
      },
      {
        image:
          "https://cloud.chan3d.com/scenes/1p8qF1RgyPnZwI2HwxTmheohsGt/cover.jpg?x-oss-process=image%2Fresize%2Cl_512&t=1638864965487",
        caption: "艺术与灵感",
      },
    ],
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
