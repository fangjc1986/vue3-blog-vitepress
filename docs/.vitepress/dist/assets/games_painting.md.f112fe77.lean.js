import{d as m,h as d,j as C,_ as f,C as y,o as i,c as u,k as c,H as r,w as F,a as q,N as g,Q as b}from"./chunks/framework.88ad42b5.js";const h=m({name:"painting",props:{},setup(s){const a=d(""),e=800,o=600;let n=null;C(()=>{n=a.value.getContext("2d"),n.strokeStyle="black",n.lineWidth=2,n.lineCap="round",n.lineJoin="round"});let t=!1;return{canvasRef:a,width:e,height:o,mousemove:p=>{!t||!n||(n.lineTo(p.offsetX,p.offsetY),n.stroke())},mousedown:p=>{t=!0,n.beginPath(),n.moveTo(p.offsetX,p.offsetY)},mouseup:p=>{t=!1,n.closePath()},onClickClear:()=>{n.clearRect(0,0,e,o)}}}});const B={class:"painting flex-column flex-center-all"},v={class:"mb-xs text-right"},D=["width","height"];function A(s,a,e,o,n,t){const E=y("n-button");return i(),u("div",B,[c("div",{class:"flex-column pos-r",style:g({width:s.width+"px"})},[c("div",v,[r(E,{type:"primary",onClick:s.onClickClear},{default:F(()=>[q("擦除画布 ")]),_:1},8,["onClick"])]),c("canvas",{ref:"canvasRef",style:{border:"3px solid #f3f3f3","background-color":"#f8f8f8"},width:s.width,height:s.height,onMousemove:a[0]||(a[0]=(...l)=>s.mousemove&&s.mousemove(...l)),onMousedown:a[1]||(a[1]=(...l)=>s.mousedown&&s.mousedown(...l)),onMouseup:a[2]||(a[2]=(...l)=>s.mouseup&&s.mouseup(...l)),onMouseleave:a[3]||(a[3]=(...l)=>s.mouseup&&s.mouseup(...l))},null,40,D)],4)])}const _=f(h,[["render",A],["__scopeId","data-v-65feb371"]]),x=b("",4),w=b("",4),P=JSON.parse('{"title":"画画班","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"games/painting.md","filePath":"games/painting.md"}'),k={name:"games/painting.md"},R=Object.assign(k,{setup(s){return(a,e)=>{const o=y("ClientOnly");return i(),u("div",null,[x,r(o,null,{default:F(()=>[r(_)]),_:1}),w])}}});export{P as __pageData,R as default};
