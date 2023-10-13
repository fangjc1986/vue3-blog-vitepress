var X=Object.defineProperty;var Z=(n,l,F)=>l in n?X(n,l,{enumerable:!0,configurable:!0,writable:!0,value:F}):n[l]=F;var v=(n,l,F)=>(Z(n,typeof l!="symbol"?l+"":l,F),F);import{a as ss}from"./chunks/array.util.cf045339.js";import{g as ns,r as h,l as as,_ as ls,o as r,c as u,a as D,z as x,w as e,d as o,b as U,F as O,h as G,q as L,i as q,p as A,t as P,n as ps,j as H,v as j,s as os,e as Y}from"./app.1c3b36fa.js";import"./chunks/number.util.6354c1c0.js";class es{constructor(l,F,w=0){v(this,"number",0);v(this,"isBoom",!1);v(this,"status",0);v(this,"row",0);v(this,"col",0);v(this,"focusRound",!1);this.row=l,this.col=F,this.number=0}}const rs=["#0000FF","#008000","#FF0000","#000080","#800000","#008080","#000000","#808080"],J=[[0,1],[0,-1],[1,0],[-1,0],[-1,-1],[-1,1],[1,1],[1,-1]],ts=ns({name:"mine-sweeping",components:{},props:{},setup:function(n){const l=[!1,!1,!1],F=[0,0,0],w=h(0),S=h(0),k=[{label:"\u7B80\u5355",value:1,row:9,col:9,boom:10},{label:"\u6B63\u5E38",value:2,row:16,col:16,boom:40},{label:"\u56F0\u96BE",value:3,row:16,col:30,boom:99},{label:"\u81EA\u5B9A\u4E49",value:4,row:20,col:20,boom:50}],B=h(2),b=h(k.find(s=>s.value===B.value)),y=h(1);as(B,s=>{t(!1),b.value=k.find(a=>a.value===s)});const _=()=>{const{row:s,col:a,boom:p}=b.value,c=Array(s).fill("").map((f,m)=>Array(a).fill("").map((z,M)=>new es(m,M)));return ss(Array(s*a).fill("").map((f,m)=>[Math.floor(m/a),m%a]),p).forEach(([f,m])=>c[f][m].isBoom=!0),c},i=h(_()),d=async()=>{y.value=2,w.value=0,S.value=0,i.value=_(),i.value.forEach(s=>s.forEach(a=>{a.isBoom||g(a,p=>a.number+=p.isBoom?1:0)}))},g=(s,a)=>{const{row:p,col:c}=s;for(let f=0;f<J.length;f++){const[m,z]=J[f],M=p+m,I=c+z;C(M,I)&&a&&a(i.value[M][I])}},C=(s,a)=>{const{row:p,col:c}=b.value;return s>=0&&s<p&&a>=0&&a<c},t=(s=void 0)=>{if(i.value.forEach(a=>a.forEach(p=>p.status=p.status||1)),s===void 0)return y.value=3;y.value=4,s&&(s.status=3)},E=s=>{const a=new Set;for(const p of s)if(p.status===0){if(p.status=1,w.value++,p.isBoom)return t(p);if(w.value+b.value.boom===b.value.row*b.value.col)return t();p.number>0||g(p,c=>{c.status===0&&(a.has(c)||a.add(c))})}setTimeout(E.bind(this,a),20)},K=s=>{E([s]),$()},Q=s=>{s.status===0?(s.status=2,S.value++):s.status===2&&(s.status=0,S.value--)},W=s=>{if(s.status!==1&&s.number===0)return;let a=0,p=[];g(s,c=>{a+=c.status===2?1:0,c.status===0&&p.push(c)}),a===s.number&&E(p)},R=s=>{g(s,a=>{a.focusRound=l[0]&&l[2]})};let N,T=0;const V=h("0.000".padStart(8,"0")),$=()=>{if(clearTimeout(N),y.value!==2){T=0;return}T===0&&(T=new Date().getTime());const s=(new Date().getTime()-T)/1e3;V.value=s.toFixed(3).padStart(8,"0"),N=setTimeout($,1)};return{map:i,NumberColors:rs,gameState:y,levels:k,nowLevelValue:B,nowLevel:b,openCount:w,flagCount:S,timeDisplay:V,restart:d,gameOver:t,onMouseUp:(s,a)=>{if(y.value===2&&(l[s.button]=!1,R(a),F[s.button]=new Date().getTime(),!(l[0]||l[2]))){if(Math.abs(F[0]-F[2])<100)return W(a);if(s.button===0)return K(a);if(s.button===2)return Q(a)}},onMouseDown:(s,a)=>{y.value===2&&(l[s.button]=!0,R(a))},gridClass:s=>[s.status===3?"game-over":"",s.focusRound&&s.status===0?"focus":"",s.status===1?"active":""]}}});const cs={class:"mine-sweeping vue-component-container flex-column flex-center-all"},Fs={class:"mb-md flex-column flex-center-all"},ys={class:"flex-horiz"},Ds={class:"ml-xs"},Cs={key:0,class:"flex-horiz mt-sm"},As={class:"ml-xs"},is={class:"ml-xs"},us={class:"ml-xs"},bs={key:0,class:"flex-horiz flex-center-all mb-xs"},ms={class:""},ds={class:"ml-xs"},gs={class:"ml-xs"},Es={class:"ml-xs"},fs={class:"flex-horiz"},vs=["onMousedown","onMouseup"],hs={class:""},qs={key:0,class:"iconfont icon-bug-fill"},ws={key:2,class:"iconfont icon-checkbox-blank-line color-border-light"},Bs={class:"iconfont icon-flag--fill",style:{color:"#960000"}};function _s(n,l,F,w,S,k){const B=q("n-button"),b=q("n-select"),y=q("n-input-group-label"),_=q("n-input-number"),i=q("n-input-group"),d=q("n-tag"),g=q("n-input");return r(),u("div",cs,[D("div",Fs,[D("div",ys,[n.gameState!==2?(r(),x(B,{key:0,type:"primary",onClick:n.restart},{default:e(()=>[A("\u5F00\u59CB\u6E38\u620F")]),_:1},8,["onClick"])):(r(),x(B,{key:1,type:"error",onClick:l[0]||(l[0]=C=>n.gameOver(!1))},{default:e(()=>[A("\u505C\u6B62\u6E38\u620F")]),_:1})),D("div",Ds,[o(b,{style:{width:"100px"},options:n.levels,value:n.nowLevelValue,"onUpdate:value":l[1]||(l[1]=C=>n.nowLevelValue=C),disabled:n.gameState===2},null,8,["options","value","disabled"])])]),n.nowLevelValue===4?(r(),u("div",Cs,[D("div",As,[o(i,null,{default:e(()=>[o(y,null,{default:e(()=>[A("\u884C")]),_:1}),o(_,{style:{width:"100px"},value:n.nowLevel.row,"onUpdate:value":l[2]||(l[2]=C=>n.nowLevel.row=C),disabled:n.gameState===2},null,8,["value","disabled"])]),_:1})]),D("div",is,[o(i,null,{default:e(()=>[o(y,null,{default:e(()=>[A("\u5217")]),_:1}),o(_,{style:{width:"100px"},value:n.nowLevel.col,"onUpdate:value":l[3]||(l[3]=C=>n.nowLevel.col=C),disabled:n.gameState===2},null,8,["value","disabled"])]),_:1})]),D("div",us,[o(i,null,{default:e(()=>[o(y,null,{default:e(()=>[A("\u96F7")]),_:1}),o(_,{style:{width:"100px"},value:n.nowLevel.boom,"onUpdate:value":l[4]||(l[4]=C=>n.nowLevel.boom=C),disabled:n.gameState===2},null,8,["value","disabled"])]),_:1})])])):U("",!0)]),n.gameState!==1?(r(),u("div",bs,[D("div",ms,[n.gameState===1?(r(),x(d,{key:0},{default:e(()=>[A("\u672A\u5F00\u59CB")]),_:1})):n.gameState===2?(r(),x(d,{key:1,type:"info"},{default:e(()=>[A("\u6E38\u620F\u4E2D")]),_:1})):n.gameState===3?(r(),x(d,{key:2,type:"success"},{default:e(()=>[A("\u80DC\u5229\uFF01")]),_:1})):(r(),x(d,{key:3,type:"error"},{default:e(()=>[A("\u5931\u8D25\uFF01")]),_:1}))]),D("div",ds,[o(i,null,{default:e(()=>[o(y,null,{default:e(()=>[A("\u96F7")]),_:1}),o(g,{style:{width:"100px"},readonly:!0,value:`${n.flagCount} / ${n.nowLevel.boom}`},null,8,["value"])]),_:1})]),D("div",gs,[o(i,null,{default:e(()=>[o(y,null,{default:e(()=>[A("\u626B")]),_:1}),o(g,{style:{width:"100px"},readonly:!0,value:`${n.openCount} / ${n.nowLevel.row*n.nowLevel.col}`},null,8,["value"])]),_:1})]),D("div",Es,[o(d,{type:"info",style:{width:"80px","text-align":"center"}},{default:e(()=>[A(P(n.timeDisplay),1)]),_:1})])])):U("",!0),D("div",{class:"grid-container flex-column",onselectstart:"return false",onContextmenu:l[6]||(l[6]=L(()=>{},["prevent"]))},[(r(!0),u(O,null,G(n.map,C=>(r(),u("div",fs,[(r(!0),u(O,null,G(C,t=>(r(),u("div",{class:ps(["grid flex-horiz flex-center-all",n.gridClass(t)]),onContextmenu:l[5]||(l[5]=L(()=>{},["prevent"])),onMousedown:L(E=>n.onMouseDown(E,t),["prevent","stop"]),onMouseup:L(E=>n.onMouseUp(E,t),["prevent","stop"])},[H(D("div",hs,[t.isBoom?(r(),u("i",qs)):t.number>0?(r(),u("span",{key:1,class:"grid-number",style:os({color:n.NumberColors[t.number-1]})},P(t.number),5)):(r(),u("i",ws))],512),[[j,t.status===1||t.status===3]]),H(D("i",Bs,null,512),[[j,t.status===2]])],42,vs))),256))]))),256))],32)])}const xs=ls(ts,[["render",_s],["__scopeId","data-v-f7455ee7"]]),Ss=Y("",4),ks=Y("",13),Vs=JSON.parse('{"title":"\u7ECF\u5178\u8FDE\u8FDE\u770B","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"\u73A9\u6CD5","slug":"\u73A9\u6CD5","link":"#\u73A9\u6CD5","children":[]},{"level":2,"title":"\u7B97\u6CD5","slug":"\u7B97\u6CD5","link":"#\u7B97\u6CD5","children":[{"level":3,"title":"\u6446\u653E\u5730\u96F7","slug":"\u6446\u653E\u5730\u96F7","link":"#\u6446\u653E\u5730\u96F7","children":[]},{"level":3,"title":"\u6269\u6563\u7B97\u6CD5","slug":"\u6269\u6563\u7B97\u6CD5","link":"#\u6269\u6563\u7B97\u6CD5","children":[]}]},{"level":2,"title":"\u6E90\u7801","slug":"\u6E90\u7801","link":"#\u6E90\u7801","children":[]}],"relativePath":"games/mine-sweeping.md"}'),Ts={name:"games/mine-sweeping.md"},$s=Object.assign(Ts,{setup(n){return(l,F)=>(r(),u("div",null,[Ss,o(xs),ks]))}});export{Vs as __pageData,$s as default};
