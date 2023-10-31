import{a as Z}from"./chunks/array.util.aa365c9a.js";import{d as K,h as q,x as W,_ as ss,C as A,o as t,c as b,k as y,b as x,w as e,a as F,H as o,e as z,t as O,F as U,D as G,n as ns,X as T,Z as P,$ as H,N as as,Q as j}from"./chunks/framework.88ad42b5.js";import"./chunks/number.util.14bcf861.js";class ls{constructor(l,B,m=0){this.number=0,this.isBoom=!1,this.status=0,this.row=0,this.col=0,this.focusRound=!1,this.row=l,this.col=B,this.number=0}}const ps=["#0000FF","#008000","#FF0000","#000080","#800000","#008080","#000000","#808080"],Y=[[0,1],[0,-1],[1,0],[-1,0],[-1,-1],[-1,1],[1,1],[1,-1]],os=K({name:"mine-sweeping",components:{},props:{},setup:function(n){const l=[!1,!1,!1],B=[0,0,0],m=q(0),_=q(0),S=[{label:"简单",value:1,row:9,col:9,boom:10},{label:"正常",value:2,row:16,col:16,boom:40},{label:"困难",value:3,row:16,col:30,boom:99},{label:"自定义",value:4,row:20,col:20,boom:50}],h=q(2),C=q(S.find(s=>s.value===h.value)),E=q(1);W(h,s=>{r(!1),C.value=S.find(a=>a.value===s)});const w=()=>{const{row:s,col:a,boom:p}=C.value,c=Array(s).fill("").map((v,g)=>Array(a).fill("").map((V,M)=>new ls(g,M)));return Z(Array(s*a).fill("").map((v,g)=>[Math.floor(g/a),g%a]),p).forEach(([v,g])=>c[v][g].isBoom=!0),c},u=q(w()),D=async()=>{E.value=2,m.value=0,_.value=0,u.value=w(),u.value.forEach(s=>s.forEach(a=>{a.isBoom||d(a,p=>a.number+=p.isBoom?1:0)}))},d=(s,a)=>{const{row:p,col:c}=s;for(let v=0;v<Y.length;v++){const[g,V]=Y[v],M=p+g,$=c+V;i(M,$)&&a&&a(u.value[M][$])}},i=(s,a)=>{const{row:p,col:c}=C.value;return s>=0&&s<p&&a>=0&&a<c},r=(s=void 0)=>{if(u.value.forEach(a=>a.forEach(p=>p.status=p.status||1)),s===void 0)return E.value=3;E.value=4,s&&(s.status=3)},f=s=>{const a=new Set;for(const p of s)if(p.status===0){if(p.status=1,m.value++,p.isBoom)return r(p);if(m.value+C.value.boom===C.value.row*C.value.col)return r();p.number>0||d(p,c=>{c.status===0&&(a.has(c)||a.add(c))})}setTimeout(f.bind(this,a),20)},J=s=>{f([s]),I()},Q=s=>{s.status===0?(s.status=2,_.value++):s.status===2&&(s.status=0,_.value--)},X=s=>{if(s.status!==1&&s.number===0)return;let a=0,p=[];d(s,c=>{a+=c.status===2?1:0,c.status===0&&p.push(c)}),a===s.number&&f(p)},L=s=>{d(s,a=>{a.focusRound=l[0]&&l[2]})};let R,k=0;const N=q("0.000".padStart(8,"0")),I=()=>{if(clearTimeout(R),E.value!==2){k=0;return}k===0&&(k=new Date().getTime());const s=(new Date().getTime()-k)/1e3;N.value=s.toFixed(3).padStart(8,"0"),R=setTimeout(I,1)};return{map:u,NumberColors:ps,gameState:E,levels:S,nowLevelValue:h,nowLevel:C,openCount:m,flagCount:_,timeDisplay:N,restart:D,gameOver:r,onMouseUp:(s,a)=>{if(E.value===2&&(l[s.button]=!1,L(a),B[s.button]=new Date().getTime(),!(l[0]||l[2]))){if(Math.abs(B[0]-B[2])<100)return X(a);if(s.button===0)return J(a);if(s.button===2)return Q(a)}},onMouseDown:(s,a)=>{E.value===2&&(l[s.button]=!0,L(a))},gridClass:s=>[s.status===3?"game-over":"",s.focusRound&&s.status===0?"focus":"",s.status===1?"active":""]}}});const es={class:"mine-sweeping vue-component-container flex-column flex-center-all"},ts={class:"mb-md flex-column flex-center-all"},rs={class:"flex-horiz"},cs={class:"ml-xs"},Es={key:0,class:"flex-horiz mt-sm"},ys={class:"ml-xs"},is={class:"ml-xs"},Fs={class:"ml-xs"},us={key:0,class:"flex-horiz flex-center-all mb-xs"},bs={class:""},Cs={class:"ml-xs"},ms={class:"ml-xs"},gs={class:"ml-xs"},As={class:"flex-horiz"},Bs=["onMousedown","onMouseup"],Ds={class:""},ds={key:0,class:"iconfont icon-bug-fill"},fs={key:2,class:"iconfont icon-checkbox-blank-line color-border-light"},vs={class:"iconfont icon-flag--fill",style:{color:"#960000"}};function qs(n,l,B,m,_,S){const h=A("n-button"),C=A("n-select"),E=A("n-input-group-label"),w=A("n-input-number"),u=A("n-input-group"),D=A("n-tag"),d=A("n-input");return t(),b("div",es,[y("div",ts,[y("div",rs,[n.gameState!==2?(t(),x(h,{key:0,type:"primary",onClick:n.restart},{default:e(()=>[F("开始游戏")]),_:1},8,["onClick"])):(t(),x(h,{key:1,type:"error",onClick:l[0]||(l[0]=i=>n.gameOver(!1))},{default:e(()=>[F("停止游戏")]),_:1})),y("div",cs,[o(C,{style:{width:"100px"},options:n.levels,value:n.nowLevelValue,"onUpdate:value":l[1]||(l[1]=i=>n.nowLevelValue=i),disabled:n.gameState===2},null,8,["options","value","disabled"])])]),n.nowLevelValue===4?(t(),b("div",Es,[y("div",ys,[o(u,null,{default:e(()=>[o(E,null,{default:e(()=>[F("行")]),_:1}),o(w,{style:{width:"100px"},value:n.nowLevel.row,"onUpdate:value":l[2]||(l[2]=i=>n.nowLevel.row=i),disabled:n.gameState===2},null,8,["value","disabled"])]),_:1})]),y("div",is,[o(u,null,{default:e(()=>[o(E,null,{default:e(()=>[F("列")]),_:1}),o(w,{style:{width:"100px"},value:n.nowLevel.col,"onUpdate:value":l[3]||(l[3]=i=>n.nowLevel.col=i),disabled:n.gameState===2},null,8,["value","disabled"])]),_:1})]),y("div",Fs,[o(u,null,{default:e(()=>[o(E,null,{default:e(()=>[F("雷")]),_:1}),o(w,{style:{width:"100px"},value:n.nowLevel.boom,"onUpdate:value":l[4]||(l[4]=i=>n.nowLevel.boom=i),disabled:n.gameState===2},null,8,["value","disabled"])]),_:1})])])):z("",!0)]),n.gameState!==1?(t(),b("div",us,[y("div",bs,[n.gameState===1?(t(),x(D,{key:0},{default:e(()=>[F("未开始")]),_:1})):n.gameState===2?(t(),x(D,{key:1,type:"info"},{default:e(()=>[F("游戏中")]),_:1})):n.gameState===3?(t(),x(D,{key:2,type:"success"},{default:e(()=>[F("胜利！")]),_:1})):(t(),x(D,{key:3,type:"error"},{default:e(()=>[F("失败！")]),_:1}))]),y("div",Cs,[o(u,null,{default:e(()=>[o(E,null,{default:e(()=>[F("雷")]),_:1}),o(d,{style:{width:"100px"},readonly:!0,value:`${n.flagCount} / ${n.nowLevel.boom}`},null,8,["value"])]),_:1})]),y("div",ms,[o(u,null,{default:e(()=>[o(E,null,{default:e(()=>[F("扫")]),_:1}),o(d,{style:{width:"100px"},readonly:!0,value:`${n.openCount} / ${n.nowLevel.row*n.nowLevel.col}`},null,8,["value"])]),_:1})]),y("div",gs,[o(D,{type:"info",style:{width:"80px","text-align":"center"}},{default:e(()=>[F(O(n.timeDisplay),1)]),_:1})])])):z("",!0),y("div",{class:"grid-container flex-column",onselectstart:"return false",onContextmenu:l[6]||(l[6]=T(()=>{},["prevent"]))},[(t(!0),b(U,null,G(n.map,i=>(t(),b("div",As,[(t(!0),b(U,null,G(i,r=>(t(),b("div",{class:ns(["grid flex-horiz flex-center-all",n.gridClass(r)]),onContextmenu:l[5]||(l[5]=T(()=>{},["prevent"])),onMousedown:T(f=>n.onMouseDown(f,r),["prevent","stop"]),onMouseup:T(f=>n.onMouseUp(f,r),["prevent","stop"])},[P(y("div",Ds,[r.isBoom?(t(),b("i",ds)):r.number>0?(t(),b("span",{key:1,class:"grid-number",style:as({color:n.NumberColors[r.number-1]})},O(r.number),5)):(t(),b("i",fs))],512),[[H,r.status===1||r.status===3]]),P(y("i",vs,null,512),[[H,r.status===2]])],42,Bs))),256))]))),256))],32)])}const hs=ss(os,[["render",qs],["__scopeId","data-v-f7455ee7"]]),ws=j("",4),xs=j("",13),Ts=JSON.parse('{"title":"经典连连看","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"games/mine-sweeping.md","filePath":"games/mine-sweeping.md"}'),_s={name:"games/mine-sweeping.md"},Ls=Object.assign(_s,{setup(n){return(l,B)=>{const m=A("ClientOnly");return t(),b("div",null,[ws,o(m,null,{default:e(()=>[o(hs)]),_:1}),xs])}}});export{Ts as __pageData,Ls as default};
