import{g as C,r as A,m as u,_ as b,o as F,c as D,a as r,d as y,w as m,s as d,i as f,p as h,e as i}from"./app.1c3b36fa.js";const g=C({name:"painting",props:{},setup(s){const a=A(""),o=800,t=600;let n=null;u(()=>{n=a.value.getContext("2d"),n.strokeStyle="black",n.lineWidth=2,n.lineCap="round",n.lineJoin="round"});let e=!1;return{canvasRef:a,width:o,height:t,mousemove:p=>{!e||!n||(n.lineTo(p.offsetX,p.offsetY),n.stroke())},mousedown:p=>{e=!0,n.beginPath(),n.moveTo(p.offsetX,p.offsetY)},mouseup:p=>{e=!1,n.closePath()},onClickClear:()=>{n.clearRect(0,0,o,t)}}}});const v={class:"painting flex-column flex-center-all"},_={class:"mb-xs text-right"},E=["width","height"];function q(s,a,o,t,n,e){const c=f("n-button");return F(),D("div",v,[r("div",{class:"flex-column pos-r",style:d({width:s.width+"px"})},[r("div",_,[y(c,{type:"primary",onClick:s.onClickClear},{default:m(()=>[h("\u64E6\u9664\u753B\u5E03 ")]),_:1},8,["onClick"])]),r("canvas",{ref:"canvasRef",style:{border:"3px solid #f3f3f3","background-color":"#f8f8f8"},width:s.width,height:s.height,onMousemove:a[0]||(a[0]=(...l)=>s.mousemove&&s.mousemove(...l)),onMousedown:a[1]||(a[1]=(...l)=>s.mousedown&&s.mousedown(...l)),onMouseup:a[2]||(a[2]=(...l)=>s.mouseup&&s.mouseup(...l)),onMouseleave:a[3]||(a[3]=(...l)=>s.mouseup&&s.mouseup(...l))},null,40,E)],4)])}const w=b(g,[["render",q],["__scopeId","data-v-65feb371"]]),x=i("",4),k=i("",4),B=JSON.parse('{"title":"\u753B\u753B\u73ED","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"\u73A9\u6CD5","slug":"\u73A9\u6CD5","link":"#\u73A9\u6CD5","children":[]},{"level":2,"title":"\u7B97\u6CD5","slug":"\u7B97\u6CD5","link":"#\u7B97\u6CD5","children":[]},{"level":2,"title":"\u6E90\u7801","slug":"\u6E90\u7801","link":"#\u6E90\u7801","children":[]}],"relativePath":"games/painting.md"}'),T={name:"games/painting.md"},R=Object.assign(T,{setup(s){return(a,o)=>(F(),D("div",null,[x,y(w),k]))}});export{B as __pageData,R as default};
