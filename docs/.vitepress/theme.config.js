module.exports = {
  logo: "/logo-1.jpeg",
  sidebar: {
    "/games/": [
      {
        text: "自制小游戏",
        collapsible: true,
        items: [
          // This shows `/guide/index.md` page.
          { text: "声明", link: "/games/" }, // /guide/index.md
          { text: "AI井字棋", link: "/games/tic-tac-toe" }, // /guide/index.md
          { text: "AI五子棋", link: "/games/five-chess" }, // /guide/index.md
          { text: "Index", link: "/games/g1" }, // /guide/index.md
          { text: "One", link: "/games/g2" }, // /guide/one.md
        ],
      },
    ],
  },
  footer: {
    message: "MIT Licensed | fangjc1986@qq.com",
    copyright: "沪ICP备16055351号",
  },
};
