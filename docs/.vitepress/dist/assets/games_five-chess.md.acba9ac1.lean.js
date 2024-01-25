import{M as G}from"./chunks/ai.util.f383dd1e.js";import{l as m}from"./chunks/lodash.4dce4bbd.js";import{S as I}from"./chunks/start-over-mask.13ccb049.js";import{d as O,h as f,_ as N,C as w,o as i,c as F,k as b,F as g,D as d,n as x,e as _,H as q,w as R,Q as k}from"./chunks/framework.aa4ce59a.js";import"./chunks/commonjsHelpers.de833af9.js";const h=()=>new Array(r).fill("").map(s=>new Array(r).fill(E)),V=O({name:"five-chess",components:{StartOverMask:I},props:{},setup(s,o){const a=f(new v(h(),[])),n=f(1),l=f(new v(h(),[])),p=f(!1),e=new G(2).setEvaluateResult(K).setIsLeafState(J).setNextLevelState(Z),c=()=>{if(n.value!=2||!p.value)return;const t=e.getBestChoiceByState(m.cloneDeep(a.value));t&&(l.value=m.cloneDeep(a.value),a.value=t,u(),p.value=!1)},u=()=>{const t=j(a.value);t!==E&&(n.value=t===1?3:4);for(const y of a.value.state)for(const C of y)if(C===E)return;n.value=5};return{W:B,B:D,EMPTY:E,RC:r,isAiComputing:p,gameState:n,lastState:l,chessState:a,onClickChess:(t,y)=>{const{state:C,trace:z}=a.value;n.value===2&&(p.value||C[t][y]!==E||(p.value=!0,l.value=m.cloneDeep(a.value),C[t][y]=B,z.push([t,y]),u(),setTimeout(c,10)))},onClickRestart:()=>{a.value=new v(h(),[]),l.value=new v(h(),[]),n.value=2,p.value=!1}}}});class v{constructor(o,a=[],n=!0){this.state=o,this.trace=a}}const $=[[11111,1e5,1e4],[211112,1e6,1e3],[11112,1e5,100],[12111,1e5,100],[11211,1e5,100],[211212,1e6,100],[21112,1e5,100],[21111,1e5,100],[11121,1e5,100],[212112,1e6,100],[11122,1e5,10],[22111,1e5,10],[22111,1e5,10],[11122,1e5,10],[11212,1e5,4],[21211,1e5,4],[22112,1e5,1],[21122,1e5,1]],B=1,D=3,E=2,r=15,T=[],M=[],P=[],Y=[];for(let s=0;s<r;s++){const o=[],a=[];for(let n=0;n<r;n++)o.push([n,s]),a.push([s,n]);T.push(a),M.push(o)}for(let s=-r+1;s<r;s++){const o=[],a=[];for(let n=0;n<r;n++){const l=s+n;l<0||l>=r||(o.push([n,l]),a.push([r-n-1,l]))}P.push(o),Y.push(a)}const H=(s,o)=>[T[s],M[o],P[o-s+r-1],Y[s+o]],J=s=>j(s)!==E,j=({state:s})=>{const o=ns(s);let a=!0;for(const n of o){if(n.length<5)continue;let l=0,p=0;for(const[e,c]of n){if(s[e][c]===D?(p++,l=0):s[e][c]==B?(l++,p=0):l=p=0,s[e][c]===E&&a!==E&&(a=E),p===5)return D;if(l===5)return B}}return a},L=[],S=6;for(let s=0;s<=S*2;s++)L[s]=10**s;const Q=[[0,1],[1,0],[1,1],[1,-1]],K=(s,o)=>{const{state:a,trace:n}=s;new Array(r).fill(!0).map(p=>new Array(r).fill(0));let l=0;return n.forEach(p=>{const[e,c]=p,u=a[e][c],t=[];Q.forEach(y=>{const C=U(X(a,y,p,u),o,u);l+=C,C&&t.push(C)}),t.sort();for(let y=0;y<t.length-1;y++)l+=t[y]}),l},U=(s,o,a)=>{let n=0;for(const[l,p,e]of $){let c=s;for(;c!=0;)c-l===Math.floor(c/p)*p&&(n+=e),c=Math.floor(c/10);if(n!==0)break}return a===D?n:-n},X=(s,o,a,n)=>{let l=0,[p,e]=a;for(let c=-S;c<=S;c++){const[u,t]=[p+o[0]*c,e+o[1]*c],y=L[S-c];A(u,t)&&(s[u][t]===n?l+=y:s[u][t]===E&&(l+=2*y))}return l},Z=function*(s,o){const{state:a,trace:n}=o;let l=[];W(a,p=>p!==E).forEach(p=>{ss(a,p[0],p[1]).forEach(e=>{a[e[0]][e[1]]===E&&l.push(e[0]*r+e[1])})}),l=m.shuffle(m.uniq(l)).map(p=>[Math.floor(p/r),p%r]);for(const[p,e]of l)a[p][e]=s?D:B,n.push([p,e]),yield o,a[p][e]=E,n.pop([p,e]),yield o},ss=(s,o,a,n=2)=>{const l=[];for(let p=-n;p<=n;p++){let e=p+o,c=a;A(e,c)&&s[e][c]===E&&l.push([e,c]),e=o,c=a+p,A(e,c)&&s[e][c]===E&&l.push([e,c]),e=o+p,c=a+p,A(e,c)&&s[e][c]===E&&l.push([e,c]),e=o+p,c=a-p,A(e,c)&&s[e][c]===E&&l.push([e,c])}return l},A=(s,o)=>s>=0&&s<r&&o>=0&&o<r,W=(s,o)=>{if(!s)throw Error(s);const a=[];for(let n=0;n<r;n++)for(let l=0;l<r;l++)(o?!!o(s[n][l],n,l):!1)&&a.push([n,l]);return a},ns=s=>{const o=W(s,n=>n!==E),a=new Set;return o.forEach(n=>{H(n[0],n[1]).forEach(l=>a.add(l))}),[...a]};const as={class:"five-chess vue-component-container"},ls={class:"flex-column flex-center-all"},ps={class:"text-center mb-sm pos-r"},os={key:0,class:""},es={key:1,class:""},cs={key:2,class:""},ts={class:"pos-r"},rs={class:"chess-container-b",style:{"z-index":"0"}},Es={class:"flex-horiz row-b"},ys={class:"flex-horiz grid-b"},is={class:"pos-a chess-container",style:{"z-index":"10"}},Fs={class:"flex-horiz row"},us=["onClick"],Cs={class:"mb-sm",style:{"font-size":"30px"}},bs={key:0},As={key:1},ms={key:2};function Bs(s,o,a,n,l,p){const e=w("start-over-mask");return i(),F("div",as,[b("div",ls,[b("div",ps,[s.gameState!==2?(i(),F("span",os,"等待开始")):s.isAiComputing?(i(),F("span",es," 电脑正在思考中... ")):(i(),F("span",cs," 轮到 您 走了 "))]),b("div",ts,[b("div",rs,[(i(!0),F(g,null,d(s.RC-1,c=>(i(),F("div",Es,[(i(!0),F(g,null,d(s.RC-1,u=>(i(),F("div",ys))),256))]))),256))]),b("div",is,[(i(!0),F(g,null,d(s.chessState.state,(c,u)=>(i(),F("div",Fs,[(i(!0),F(g,null,d(c,(t,y)=>(i(),F("div",{class:x(["grid flex-horiz flex-center-all",[s.lastState.state[u][y]!==t?"active":"",t===s.EMPTY?"cursor-p":""]]),onClick:C=>s.onClickChess(u,y)},[t!==s.EMPTY?(i(),F("div",{key:0,class:x(["chess bg-text",[t===s.B?"bg-black":"bg-white"]])},null,2)):_("",!0)],10,us))),256))]))),256))]),q(e,{status:s.gameState,onOnClickStart:s.onClickRestart},{default:R(()=>[b("div",Cs,[s.gameState===3?(i(),F("span",bs,"你赢了")):s.gameState===4?(i(),F("span",As,"你输了")):s.gameState===5?(i(),F("span",ms,"棋逢对手")):_("",!0)])]),_:1},8,["status","onOnClickStart"])])])])}const Ds=N(V,[["render",Bs],["__scopeId","data-v-7a6da86c"]]),fs=k("",4),gs=k("",5),_s=JSON.parse('{"title":"AI 五子棋","description":"","frontmatter":{},"headers":[],"relativePath":"games/five-chess.md","filePath":"games/five-chess.md"}'),ds={name:"games/five-chess.md"},ws=Object.assign(ds,{setup(s){return(o,a)=>{const n=w("ClientOnly");return i(),F("div",null,[fs,q(n,null,{default:R(()=>[q(Ds)]),_:1}),gs])}}});export{_s as __pageData,ws as default};