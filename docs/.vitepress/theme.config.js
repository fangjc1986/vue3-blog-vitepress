module.exports = {
  logo: "/logo-1.jpeg",
  nav: [{ text: "小游戏", link: "/games/" }],
  sidebar: {
    "/games/": [
      {
        text: "自制小游戏",
        collapsible: true,
        items: [
          // This shows `/guide/index.md` page.
          { text: "声明", link: "/games/" }, // /guide/index.md
          { text: "AI井字棋", link: "/games/tic-tac-toe" },
          { text: "AI五子棋", link: "/games/five-chess" },
          { text: "飞翔的小鸟-3d", link: "/games/fly-bird" },
          { text: "砖块酷跑", link: "/games/parkour" },
          { text: "打砖块", link: "/games/arknoid" },
          { text: "🌈连连看", link: "/games/link-link" },
          { text: "经典扫雷", link: "/games/mine-sweeping" },
          { text: "俄罗斯方块", link: "/games/tetris" },
          { text: "画画板", link: "/games/painting" },
          { text: "贪吃蛇", link: "/games/snake" },
        ],
      },
    ],
  },
  footer: {
    message: "MIT Licensed | fangjc1986@qq.com",
    copyright: "沪ICP备16055351号",
  },
};
