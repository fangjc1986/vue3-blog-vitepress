module.exports = {
  title: "Interesting",
  description: "Just playing around.",
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
  themeConfig: require("./theme.config"),
};
