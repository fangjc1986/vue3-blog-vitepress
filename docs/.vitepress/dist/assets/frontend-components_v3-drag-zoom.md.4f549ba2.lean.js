import{_ as D,C as c,o as l,b as g,w as n,k as a,c as d,F,D as b,d as _,h as e,H as s,N as z,t as k,Q as v}from"./chunks/framework.cac9be51.js";const w={},P={class:"flex-column flex-same",style:{"background-color":"darkred",height:"500px",width:"900px"}},S={class:"flex-grow flex-horiz flex-same"},T={class:"border-box bca-border"};function V(C,y){const p=c("v3-drag-zoom-container");return l(),g(p,{style:{width:"600px",height:"400px","background-color":"#ccc"}},{default:n(()=>[a("div",P,[(l(),d(F,null,b(10,r=>a("div",S,[(l(),d(F,null,b(10,u=>a("div",T)),64))])),64))])]),_:1})}const R=D(w,[["render",V]]),M=a("div",{class:"no"},"对齐方式：",-1),I=a("div",{class:"ml-md"},"内容尺寸",-1),O={class:"flex-grow flex-horiz flex-same"},$={class:"border-box bca-border"},N=_({__name:"v3-drag-zoom-demo2",setup(C){const y=e(),p=e("contain"),r=[{label:"400x200",value:0,size:{width:"400px",height:"200px"}},{label:"200x400",value:1,size:{width:"200px",height:"400px"}},{label:"100x100",value:2,size:{width:"100px",height:"100px"}},{label:"10000x10000",value:3,size:{width:"10000px",height:"10000px"}}],u=e(0),q=()=>{setTimeout(()=>{y.value.reset()})};return(m,E)=>{const B=c("a-select"),t=c("a-space"),x=c("v3-drag-zoom-container");return l(),g(t,{class:""},{default:n(()=>[s(t,{direction:"vertical"},{default:n(()=>[s(t,{class:"flex-horiz flex-center"},{default:n(()=>[M,s(B,{style:{width:"120px"},modelValue:p.value,"onUpdate:modelValue":E[0]||(E[0]=i=>p.value=i),onChange:q,options:[{label:"cover",value:"cover"},{label:"contain",value:"contain"},{label:"auto",value:"auto"}]},null,8,["modelValue"]),I,s(B,{options:r,modelValue:u.value,"onUpdate:modelValue":E[1]||(E[1]=i=>u.value=i),onChange:q,style:{width:"200px"}},null,8,["modelValue"])]),_:1}),s(x,{ref_key:"dragRef",ref:y,align:p.value,style:{width:"600px",height:"400px","background-color":"#ccc"}},{default:n(()=>[a("div",{class:"flex-column flex-same",style:z([{"background-color":"darkred"},r[u.value].size])},[(l(),d(F,null,b(10,i=>a("div",O,[(l(),d(F,null,b(10,h=>a("div",$)),64))])),64))],4)]),_:1},8,["align"])]),_:1})]),_:1})}}}),Z="/blog-vue3-vitepress/v3-drag-zoom/map.png",U=a("div",{class:"no"},"对齐方式：",-1),j=a("div",{class:"ml-md"},"是否允许拖拽：",-1),H=a("div",{class:"ml-md"},"是否固定大小：",-1),J=a("img",{src:Z,alt:""},null,-1),L={style:{"font-size":"20px",color:"black"}},Q=_({__name:"v3-drag-zoom-demo3",setup(C){const y=e(),p=e("contain");e(0);const r=()=>{setTimeout(()=>{y.value.reset()})},u=e([{label:1,position:{x:20,y:20},color:"darkred"},{label:1,position:{x:50,y:20},color:"darkblue"},{label:1,position:{x:80,y:20},color:"darkgreen"}]),q=e([{label:1,position:{x:20,y:50},text:"哈哈"},{label:1,position:{x:50,y:50},text:"吼吼"},{label:1,position:{x:80,y:50},text:"嘿嘿"}]),m=e(!0),E=e(!0);return(B,t)=>{const x=c("a-select"),i=c("a-switch"),h=c("a-space"),f=c("v3-drag-zoom-item"),A=c("v3-drag-zoom-container");return l(),g(h,{class:""},{default:n(()=>[s(h,{direction:"vertical"},{default:n(()=>[s(h,{class:"flex-horiz flex-center"},{default:n(()=>[U,s(x,{style:{width:"120px"},modelValue:p.value,"onUpdate:modelValue":t[0]||(t[0]=o=>p.value=o),onChange:r,options:[{label:"cover",value:"cover"},{label:"contain",value:"contain"},{label:"auto",value:"auto"}]},null,8,["modelValue"]),j,s(i,{modelValue:m.value,"onUpdate:modelValue":t[1]||(t[1]=o=>m.value=o)},null,8,["modelValue"]),H,s(i,{modelValue:E.value,"onUpdate:modelValue":t[2]||(t[2]=o=>E.value=o)},null,8,["modelValue"])]),_:1}),s(A,{ref_key:"dragRef",ref:y,align:p.value,style:{width:"600px",height:"400px","background-color":"#ccc"}},{default:n(()=>[J,(l(!0),d(F,null,b(u.value,o=>(l(),g(f,{position:o.position,style:z([{width:"40px",height:"40px"},{"background-color":o.color}]),draggable:m.value,"fixed-size":E.value},null,8,["position","style","draggable","fixed-size"]))),256)),(l(!0),d(F,null,b(q.value,o=>(l(),g(f,{position:o.position,draggable:m.value,"fixed-size":E.value},{default:n(()=>[a("span",L,k(o.text),1)]),_:2},1032,["position","draggable","fixed-size"]))),256))]),_:1},8,["align"])]),_:1})]),_:1})}}}),G=v("",19),K=v("",5),W=v("",6),X=v("",20),ns=JSON.parse('{"title":"缩放拖拽组件使用手册(v3-drag-zoom)","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"frontend-components/v3-drag-zoom.md","filePath":"frontend-components/v3-drag-zoom.md"}'),Y={name:"frontend-components/v3-drag-zoom.md"},as=Object.assign(Y,{setup(C){return(y,p)=>{const r=c("ClientOnly");return l(),d("div",null,[G,s(r,null,{default:n(()=>[s(R)]),_:1}),K,s(r,null,{default:n(()=>[s(N)]),_:1}),W,s(r,null,{default:n(()=>[s(Q)]),_:1}),X])}}});export{ns as __pageData,as as default};
