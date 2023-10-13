import DefaultTheme from "vitepress/theme";
import naive from "naive-ui";
import "../assets/font_1706/iconfont.css";
import "../assets/styles/index.less";
import V3DragZoom from "v3-drag-zoom";
import "v3-drag-zoom/dist/style.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(naive);
    ctx.app.use(V3DragZoom);
  },
};
