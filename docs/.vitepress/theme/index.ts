import v3DragZoom from "v3-drag-zoom";
import "v3-drag-zoom/dist/style.css";
import ArcoVue from "@arco-design/web-vue";
// import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import "@arco-design/web-vue/dist/arco.css";
import { EnhanceAppContext } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "../assets/font_1706/iconfont.css";
import "../assets/styles/index.less";
// @ts-ignore
import MyLayout from "./my-layout.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    const { app, router, siteData } = ctx;
    DefaultTheme.enhanceApp(ctx);
    app.use(ArcoVue);
    app.use(v3DragZoom);
    // app.use(ArcoVueIcon);
    // app.use(MavonEditor);
  },
  Layout: MyLayout,
};
