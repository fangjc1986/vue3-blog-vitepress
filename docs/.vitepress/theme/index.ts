import DefaultTheme from "vitepress/theme";
import naive from "naive-ui";
import "../assets/font_1706/iconfont.css";
import "../assets/styles/index.less";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.use(naive);
  },
};
