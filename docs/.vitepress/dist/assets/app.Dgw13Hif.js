import{ak as s,as as p,at as u,au as l,av as c,aw as f,ax as d,ay as m,az as h,aA as A,aB as g,ao as v,e as P,a1 as _,o as w,h as y,aC as C,aD as E,aE as R,X as T}from"./chunks/framework.Cg7Czl7i.js";import{R as b}from"./chunks/theme.Bss3IADF.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(b),D=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=_();return w(()=>{y(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),E(),R(),o.setup&&o.setup(),()=>T(o.Layout)}});async function S(){globalThis.__VITEPRESS__=!0;const e=L(),a=x();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function x(){return h(D)}function L(){let e=s,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),[])),s&&(e=!1),r},o.NotFound)}s&&S().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{S as createApp};
