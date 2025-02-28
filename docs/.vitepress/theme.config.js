module.exports = {
  logo: "/logo-1.jpeg",
  nav: [
    { text: "小游戏", link: "/games/" },
    { text: "前端自制组件", link: "/frontend-components/" },
    { text: "算法演示", link: "/algorithms/" },
  ],
  sidebar: {
    "/games/": [
      {
        text: "自制小游戏",
        collapsible: true,
        items: [
          // This shows `/guide/index.md` page.
          { text: "声明", link: "/games/" }, // /guide/index.md
          //{ text: "双色球", link: "/games/double-ball" },
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
    "/frontend-components/": [
      {
        text: "前端自制组件",
        collapsible: true,
        items: [
          // This shows `/guide/index.md` page.
          { text: "声明", link: "/frontend-components/" }, // /guide/index.md
          { text: "V3DragZoom - 缩放拖拽", link: "/frontend-components/v3-drag-zoom" },
          {
            text: "MermaidItMarkdown - 支持mermaid的markdown插件",
            link: "/frontend-components/mermaid-it-markdown",
          },
          {
            text: "CoordinateDrawLine - 坐标轴折线绘制",
            link: "/frontend-components/coordinate-draw-line",
          },
        ],
      },
    ],
    "/algorithms/": [
      { text: "声明", link: "/algorithms/" },
      {
        text: "排序算法",
        collapsible: true,
        items: [
          // This shows `/guide/index.md` page.
          { text: "冒泡排序", link: "/algorithms/sort/bubble" },
          { text: "快速排序", link: "/algorithms/sort/quick" },
          { text: "堆（二叉树）排序", link: "/algorithms/sort/heap" },
          { text: "归并排序", link: "/algorithms/sort/merge" },
        ],
      },
      {
        text: "搜索算法",
        collapsible: true,
        items: [
          // This shows `/guide/index.md` page.
          { text: "广度优先搜索(BFS)", link: "/algorithms/search/bfs" },
          { text: "深度优先搜索(DFS)", link: "/algorithms/search/dfs" },
        ],
      },
    ],
  },
  footer: {
    message: "MIT Licensed | fangjc1986@qq.com",
    copyright: "沪ICP备16055351号",
  },
};
