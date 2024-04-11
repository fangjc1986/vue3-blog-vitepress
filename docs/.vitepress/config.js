export default {
  title: "Interesting",
  description: "Just playing around.",
  base: "/blog-vue3-vitepress/", // 设置站点根路径 /bar/
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1.0,user-scalable=0;",
      },
    ],
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: import("./theme.config").default,
};
