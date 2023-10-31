import DefaultTheme from "vitepress/theme";
import naive from "naive-ui";
import "../assets/font_1706/iconfont.css";
import "../assets/styles/index.less";
import v3DragZoom from "v3-drag-zoom";
import "v3-drag-zoom/dist/style.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    const { app, router, siteData } = ctx;
    DefaultTheme.enhanceApp(ctx);
    app.use(naive);
    app.use(v3DragZoom);
  },
};
