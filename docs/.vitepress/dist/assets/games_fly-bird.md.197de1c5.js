import{G as As,S as vl}from"./chunks/start-over-mask.df5c4d55.js";import{g as wo,_ as Eo,r as pn,l as bl,m as To,o as Ci,c as Mi,a as Cn,d as Wt,w as ss,t as Yi,i as as,p as da,e as Si}from"./app.1c3b36fa.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wi="148",Un={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Al=0,Zi=1,Cl=2,Lo=1,Po=2,Cs=3,En=0,Nt=1,Ei=2,Hs=3,dn=0,is=1,$i=2,Ki=3,Ji=4,Ml=5,es=100,Sl=101,wl=102,Qi=103,er=104,El=200,Tl=201,Ll=202,Pl=203,Ro=204,Io=205,Rl=206,Il=207,Nl=208,Ol=209,Ul=210,zl=0,Bl=1,kl=2,mi=3,Vl=4,Gl=5,Hl=6,Wl=7,Da=0,ql=1,Xl=2,nn=0,jl=1,Yl=2,Zl=3,$l=4,Kl=5,No=300,os=301,ls=302,fa=303,gi=304,xa=306,Ps=1e3,Ct=1001,yi=1002,rt=1003,tr=1004,Ta=1005,Tt=1006,Jl=1007,Rs=1008,Tn=1009,Ql=1010,ec=1011,Oo=1012,tc=1013,Mn=1014,un=1015,Is=1016,nc=1017,sc=1018,rs=1020,ac=1021,ic=1022,Lt=1023,rc=1024,oc=1025,Sn=1026,cs=1027,lc=1028,cc=1029,pc=1030,uc=1031,hc=1033,La=33776,Pa=33777,Ra=33778,Ia=33779,nr=35840,sr=35841,ar=35842,ir=35843,dc=36196,rr=37492,or=37496,lr=37808,cr=37809,pr=37810,ur=37811,hr=37812,dr=37813,fr=37814,mr=37815,gr=37816,yr=37817,_r=37818,Dr=37819,xr=37820,Fr=37821,vr=36492,ma=2300,ga=2301,Na=2302,br=2400,Ar=2401,Cr=2402,fc=2500,Ln=3e3,Ve=3001,mc=3200,gc=3201,Ti=0,yc=1,Vt="srgb",Ns="srgb-linear",Oa=7680,_c=519,Mr=35044,Sr="300 es",_i=1035;class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wr=1234567;const ws=Math.PI/180,Os=180/Math.PI;function fn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function Li(r,e){return(r%e+e)%e}function Dc(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function xc(r,e,t){return r!==e?(t-r)/(e-r):0}function Es(r,e,t){return(1-t)*r+t*e}function Fc(r,e,t,n){return Es(r,e,1-Math.exp(-t*n))}function vc(r,e=1){return e-Math.abs(Li(r,e*2)-e)}function bc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ac(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Cc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Mc(r,e){return r+Math.random()*(e-r)}function Sc(r){return r*(.5-Math.random())}function wc(r){r!==void 0&&(wr=r);let e=wr+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ec(r){return r*ws}function Tc(r){return r*Os}function Di(r){return(r&r-1)===0&&r!==0}function Uo(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ya(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lc(r,e,t,n,s){const a=Math.cos,o=Math.sin,i=a(t/2),l=o(t/2),c=a((e+n)/2),u=o((e+n)/2),p=a((e-n)/2),h=o((e-n)/2),f=a((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":r.set(i*u,l*p,l*h,i*c);break;case"YZY":r.set(l*h,i*u,l*p,i*c);break;case"ZXZ":r.set(l*p,l*h,i*u,i*c);break;case"XZX":r.set(i*u,l*g,l*f,i*c);break;case"YXY":r.set(l*f,i*u,l*g,i*c);break;case"ZYZ":r.set(l*g,l*f,i*u,i*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ms(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ht=Object.freeze({__proto__:null,DEG2RAD:ws,RAD2DEG:Os,generateUUID:fn,clamp:ot,euclideanModulo:Li,mapLinear:Dc,inverseLerp:xc,lerp:Es,damp:Fc,pingpong:vc,smoothstep:bc,smootherstep:Ac,randInt:Cc,randFloat:Mc,randFloatSpread:Sc,seededRandom:wc,degToRad:Ec,radToDeg:Tc,isPowerOfTwo:Di,ceilPowerOfTwo:Uo,floorPowerOfTwo:ya,setQuaternionFromProperEuler:Lc,normalize:yt,denormalize:Ms});class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*s+e.x,this.y=a*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,a,o,i,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=i,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],i=n[3],l=n[6],c=n[1],u=n[4],p=n[7],h=n[2],f=n[5],g=n[8],m=s[0],d=s[3],_=s[6],A=s[1],D=s[4],F=s[7],b=s[2],w=s[5],R=s[8];return a[0]=o*m+i*A+l*b,a[3]=o*d+i*D+l*w,a[6]=o*_+i*F+l*R,a[1]=c*m+u*A+p*b,a[4]=c*d+u*D+p*w,a[7]=c*_+u*F+p*R,a[2]=h*m+f*A+g*b,a[5]=h*d+f*D+g*w,a[8]=h*_+f*F+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],i=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*i*c-n*a*u+n*i*l+s*a*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],i=e[5],l=e[6],c=e[7],u=e[8],p=u*o-i*c,h=i*l-u*a,f=c*a-o*l,g=t*p+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=p*m,e[1]=(s*c-u*n)*m,e[2]=(i*n-s*o)*m,e[3]=h*m,e[4]=(u*t-s*l)*m,e[5]=(s*a-i*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*a)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,o,i){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*i)+o+e,-s*c,s*l,-s*(-c*o+l*i)+i+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new xt;function zo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Us(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ua(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const za={[Vt]:{[Ns]:wn},[Ns]:{[Vt]:ua}},ft={legacyMode:!0,get workingColorSpace(){return Ns},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(za[e]&&za[e][t]!==void 0){const n=za[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},Ot={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Ba(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function qs(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Li(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Ba(o,a,e+1/3),this.g=Ba(o,a,e),this.b=Ba(o,a,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const o=s[1],i=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,ft.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,ft.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){const l=parseFloat(a[1])/360,c=parseFloat(a[2])/100,u=parseFloat(a[3])/100;return n(a[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],o=a.length;if(o===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,ft.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Vt){const n=Bo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ft.fromWorkingColorSpace(qs(this,et),e),ot(et.r*255,0,255)<<16^ot(et.g*255,0,255)<<8^ot(et.b*255,0,255)<<0}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(qs(this,et),t);const n=et.r,s=et.g,a=et.b,o=Math.max(n,s,a),i=Math.min(n,s,a);let l,c;const u=(i+o)/2;if(i===o)l=0,c=0;else{const p=o-i;switch(c=u<=.5?p/(o+i):p/(2-o-i),o){case n:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-n)/p+2;break;case a:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(qs(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e=Vt){return ft.fromWorkingColorSpace(qs(this,et),e),e!==Vt?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${et.r*255|0},${et.g*255|0},${et.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ot),Ot.h+=e,Ot.s+=t,Ot.l+=n,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(Ws);const n=Es(Ot.h,Ws.h,t),s=Es(Ot.s,Ws.s,t),a=Es(Ot.l,Ws.l,t);return this.setHSL(n,s,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}we.NAMES=Bo;let Bn;class ko{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bn===void 0&&(Bn=Us("canvas")),Bn.width=e.width,Bn.height=e.height;const n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=wn(a[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vo{constructor(e=null){this.isSource=!0,this.uuid=fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,i=s.length;o<i;o++)s[o].isDataTexture?a.push(ka(s[o].image)):a.push(ka(s[o]))}else a=ka(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function ka(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ko.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pc=0;class lt extends Nn{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,n=Ct,s=Ct,a=Tt,o=Rs,i=Lt,l=Tn,c=lt.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=fn(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=i,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==No)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case yi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case yi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}lt.DEFAULT_IMAGE=null;lt.DEFAULT_MAPPING=No;lt.DEFAULT_ANISOTROPY=1;class ze{constructor(e=0,t=0,n=0,s=1){ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],u=l[4],p=l[8],h=l[1],f=l[5],g=l[9],m=l[2],d=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-m)<.01&&Math.abs(g-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+m)<.1&&Math.abs(g+d)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(c+1)/2,F=(f+1)/2,b=(_+1)/2,w=(u+h)/4,R=(p+m)/4,y=(g+d)/4;return D>F&&D>b?D<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(D),s=w/n,a=R/n):F>b?F<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(F),n=w/s,a=y/s):b<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(b),n=R/a,s=y/a),this.set(n,s,a,t),this}let A=Math.sqrt((d-g)*(d-g)+(p-m)*(p-m)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(d-g)/A,this.y=(p-m)/A,this.z=(h-u)/A,this.w=Math.acos((c+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pn extends Nn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ze(0,0,e,t),this.scissorTest=!1,this.viewport=new ze(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Go extends lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rt,this.minFilter=rt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rc extends lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rt,this.minFilter=rt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,o,i){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3];const h=a[o+0],f=a[o+1],g=a[o+2],m=a[o+3];if(i===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(i===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(p!==m||l!==h||c!==f||u!==g){let d=1-i;const _=l*h+c*f+u*g+p*m,A=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const b=Math.sqrt(D),w=Math.atan2(b,_*A);d=Math.sin(d*w)/b,i=Math.sin(i*w)/b}const F=i*A;if(l=l*d+h*F,c=c*d+f*F,u=u*d+g*F,p=p*d+m*F,d===1-i){const b=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=b,c*=b,u*=b,p*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,o){const i=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=a[o],h=a[o+1],f=a[o+2],g=a[o+3];return e[t]=i*g+u*p+l*f-c*h,e[t+1]=l*g+u*h+c*p-i*f,e[t+2]=c*g+u*f+i*h-l*p,e[t+3]=u*g-i*p-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,a=e._z,o=e._order,i=Math.cos,l=Math.sin,c=i(n/2),u=i(s/2),p=i(a/2),h=l(n/2),f=l(s/2),g=l(a/2);switch(o){case"XYZ":this._x=h*u*p+c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p-h*f*g;break;case"YXZ":this._x=h*u*p+c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p+h*f*g;break;case"ZXY":this._x=h*u*p-c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p-h*f*g;break;case"ZYX":this._x=h*u*p-c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p+h*f*g;break;case"YZX":this._x=h*u*p+c*f*g,this._y=c*f*p+h*u*g,this._z=c*u*g-h*f*p,this._w=c*u*p-h*f*g;break;case"XZY":this._x=h*u*p-c*f*g,this._y=c*f*p-h*u*g,this._z=c*u*g+h*f*p,this._w=c*u*p+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],o=t[1],i=t[5],l=t[9],c=t[2],u=t[6],p=t[10],h=n+i+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(o-s)*f}else if(n>i&&n>p){const f=2*Math.sqrt(1+n-i-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(a+c)/f}else if(i>p){const f=2*Math.sqrt(1+i-n-p);this._w=(a-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+p-n-i);this._w=(o-s)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,o=e._w,i=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*i+s*c-a*l,this._y=s*u+o*l+a*i-n*c,this._z=a*u+o*c+n*l-s*i,this._w=o*u-n*i-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,o=this._w;let i=o*e._w+n*e._x+s*e._y+a*e._z;if(i<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,i=-i):this.copy(e),i>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const l=1-i*i;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,i),p=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*p+this._w*h,this._x=n*p+this._x*h,this._y=s*p+this._y*h,this._z=a*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(a),n*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Er.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Er.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,o=e.y,i=e.z,l=e.w,c=l*t+o*s-i*n,u=l*n+i*t-a*s,p=l*s+a*n-o*t,h=-a*t-o*n-i*s;return this.x=c*l+h*-a+u*-i-p*-o,this.y=u*l+h*-o+p*-a-c*-i,this.z=p*l+h*-i+c*-o-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,o=t.x,i=t.y,l=t.z;return this.x=s*l-a*i,this.y=a*o-n*l,this.z=n*i-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new T,Er=new Rt;class Vs{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,a=-1/0,o=-1/0,i=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],p=e[l+1],h=e[l+2];u<t&&(t=u),p<n&&(n=p),h<s&&(s=h),u>a&&(a=u),p>o&&(o=p),h>i&&(i=h)}return this.min.set(t,n,s),this.max.set(a,o,i),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,a=-1/0,o=-1/0,i=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),p=e.getY(l),h=e.getZ(l);u<t&&(t=u),p<n&&(n=p),h<s&&(s=h),u>a&&(a=u),p>o&&(o=p),h>i&&(i=h)}return this.min.set(t,n,s),this.max.set(a,o,i),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let o=0,i=a.count;o<i;o++)Dn.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Dn)}else n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox),Ga.applyMatrix4(e.matrixWorld),this.union(Ga);const s=e.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Xs.subVectors(this.max,gs),kn.subVectors(e.a,gs),Vn.subVectors(e.b,gs),Gn.subVectors(e.c,gs),sn.subVectors(Vn,kn),an.subVectors(Gn,Vn),xn.subVectors(kn,Gn);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-xn.z,xn.y,sn.z,0,-sn.x,an.z,0,-an.x,xn.z,0,-xn.x,-sn.y,sn.x,0,-an.y,an.x,0,-xn.y,xn.x,0];return!Ha(t,kn,Vn,Gn,Xs)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,kn,Vn,Gn,Xs))?!1:(js.crossVectors(sn,an),t=[js.x,js.y,js.z],Ha(t,kn,Vn,Gn,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Dn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new T,new T,new T,new T,new T,new T,new T,new T],Dn=new T,Ga=new Vs,kn=new T,Vn=new T,Gn=new T,sn=new T,an=new T,xn=new T,gs=new T,Xs=new T,js=new T,Fn=new T;function Ha(r,e,t,n,s){for(let a=0,o=r.length-3;a<=o;a+=3){Fn.fromArray(r,a);const i=s.x*Math.abs(Fn.x)+s.y*Math.abs(Fn.y)+s.z*Math.abs(Fn.z),l=e.dot(Fn),c=t.dot(Fn),u=n.dot(Fn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>i)return!1}return!0}const Ic=new Vs,ys=new T,Wa=new T;class Fa{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ic.setFromPoints(e).getCenter(n);let s=0;for(let a=0,o=e.length;a<o;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(Wa)),this.expandByPoint(ys.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new T,qa=new T,Ys=new T,rn=new T,Xa=new T,Zs=new T,ja=new T;class Ho{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.direction).multiplyScalar(t).add(this.origin),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qa.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(qa);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Ys),i=rn.dot(this.direction),l=-rn.dot(Ys),c=rn.lengthSq(),u=Math.abs(1-o*o);let p,h,f,g;if(u>0)if(p=o*l-i,h=o*i-l,g=a*u,p>=0)if(h>=-g)if(h<=g){const m=1/u;p*=m,h*=m,f=p*(p+o*h+2*i)+h*(o*p+h+2*l)+c}else h=a,p=Math.max(0,-(o*h+i)),f=-p*p+h*(h+2*l)+c;else h=-a,p=Math.max(0,-(o*h+i)),f=-p*p+h*(h+2*l)+c;else h<=-g?(p=Math.max(0,-(-o*a+i)),h=p>0?-a:Math.min(Math.max(-a,-l),a),f=-p*p+h*(h+2*l)+c):h<=g?(p=0,h=Math.min(Math.max(-a,-l),a),f=h*(h+2*l)+c):(p=Math.max(0,-(o*a+i)),h=p>0?a:Math.min(Math.max(-a,-l),a),f=-p*p+h*(h+2*l)+c);else h=o>0?-a:a,p=Math.max(0,-(o*h+i)),f=-p*p+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(p).add(this.origin),s&&s.copy(Ys).multiplyScalar(h).add(qa),f}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),s=$t.dot($t)-n*n,a=e.radius*e.radius;if(s>a)return null;const o=Math.sqrt(a-s),i=n-o,l=n+o;return i<0&&l<0?null:i<0?this.at(l,t):this.at(i,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,o,i,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),p>=0?(i=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(i=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||i>s)||((i>n||n!==n)&&(n=i),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,s,a){Xa.subVectors(t,e),Zs.subVectors(n,e),ja.crossVectors(Xa,Zs);let o=this.direction.dot(ja),i;if(o>0){if(s)return null;i=1}else if(o<0)i=-1,o=-o;else return null;rn.subVectors(this.origin,e);const l=i*this.direction.dot(Zs.crossVectors(rn,Zs));if(l<0)return null;const c=i*this.direction.dot(Xa.cross(rn));if(c<0||l+c>o)return null;const u=-i*rn.dot(ja);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,a,o,i,l,c,u,p,h,f,g,m,d){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=a,_[5]=o,_[9]=i,_[13]=l,_[2]=c,_[6]=u,_[10]=p,_[14]=h,_[3]=f,_[7]=g,_[11]=m,_[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Hn.setFromMatrixColumn(e,0).length(),a=1/Hn.setFromMatrixColumn(e,1).length(),o=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,o=Math.cos(n),i=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const h=o*u,f=o*p,g=i*u,m=i*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=f+g*c,t[5]=h-m*c,t[9]=-i*l,t[2]=m-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*p,g=c*u,m=c*p;t[0]=h+m*i,t[4]=g*i-f,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-i,t[2]=f*i-g,t[6]=m+h*i,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*p,g=c*u,m=c*p;t[0]=h-m*i,t[4]=-o*p,t[8]=g+f*i,t[1]=f+g*i,t[5]=o*u,t[9]=m-h*i,t[2]=-o*c,t[6]=i,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*p,g=i*u,m=i*p;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+m,t[1]=l*p,t[5]=m*c+h,t[9]=f*c-g,t[2]=-c,t[6]=i*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=i*l,m=i*c;t[0]=l*u,t[4]=m-h*p,t[8]=g*p+f,t[1]=p,t[5]=o*u,t[9]=-i*u,t[2]=-c*u,t[6]=f*p+g,t[10]=h-m*p}else if(e.order==="XZY"){const h=o*l,f=o*c,g=i*l,m=i*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=h*p+m,t[5]=o*u,t[9]=f*p-g,t[2]=g*p-f,t[6]=i*u,t[10]=m*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nc,e,Oc)}lookAt(e,t,n){const s=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),on.crossVectors(n,bt),on.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),on.crossVectors(n,bt)),on.normalize(),$s.crossVectors(bt,on),s[0]=on.x,s[4]=$s.x,s[8]=bt.x,s[1]=on.y,s[5]=$s.y,s[9]=bt.y,s[2]=on.z,s[6]=$s.z,s[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],i=n[4],l=n[8],c=n[12],u=n[1],p=n[5],h=n[9],f=n[13],g=n[2],m=n[6],d=n[10],_=n[14],A=n[3],D=n[7],F=n[11],b=n[15],w=s[0],R=s[4],y=s[8],S=s[12],L=s[1],X=s[5],$=s[9],O=s[13],P=s[2],V=s[6],Y=s[10],K=s[14],q=s[3],J=s[7],Z=s[11],B=s[15];return a[0]=o*w+i*L+l*P+c*q,a[4]=o*R+i*X+l*V+c*J,a[8]=o*y+i*$+l*Y+c*Z,a[12]=o*S+i*O+l*K+c*B,a[1]=u*w+p*L+h*P+f*q,a[5]=u*R+p*X+h*V+f*J,a[9]=u*y+p*$+h*Y+f*Z,a[13]=u*S+p*O+h*K+f*B,a[2]=g*w+m*L+d*P+_*q,a[6]=g*R+m*X+d*V+_*J,a[10]=g*y+m*$+d*Y+_*Z,a[14]=g*S+m*O+d*K+_*B,a[3]=A*w+D*L+F*P+b*q,a[7]=A*R+D*X+F*V+b*J,a[11]=A*y+D*$+F*Y+b*Z,a[15]=A*S+D*O+F*K+b*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],o=e[1],i=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],f=e[14],g=e[3],m=e[7],d=e[11],_=e[15];return g*(+a*l*p-s*c*p-a*i*h+n*c*h+s*i*f-n*l*f)+m*(+t*l*f-t*c*h+a*o*h-s*o*f+s*c*u-a*l*u)+d*(+t*c*p-t*i*f-a*o*p+n*o*f+a*i*u-n*c*u)+_*(-s*i*u-t*l*p+t*i*h+s*o*p-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],i=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],f=e[11],g=e[12],m=e[13],d=e[14],_=e[15],A=p*d*c-m*h*c+m*l*f-i*d*f-p*l*_+i*h*_,D=g*h*c-u*d*c-g*l*f+o*d*f+u*l*_-o*h*_,F=u*m*c-g*p*c+g*i*f-o*m*f-u*i*_+o*p*_,b=g*p*l-u*m*l-g*i*h+o*m*h+u*i*d-o*p*d,w=t*A+n*D+s*F+a*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=A*R,e[1]=(m*h*a-p*d*a-m*s*f+n*d*f+p*s*_-n*h*_)*R,e[2]=(i*d*a-m*l*a+m*s*c-n*d*c-i*s*_+n*l*_)*R,e[3]=(p*l*a-i*h*a-p*s*c+n*h*c+i*s*f-n*l*f)*R,e[4]=D*R,e[5]=(u*d*a-g*h*a+g*s*f-t*d*f-u*s*_+t*h*_)*R,e[6]=(g*l*a-o*d*a-g*s*c+t*d*c+o*s*_-t*l*_)*R,e[7]=(o*h*a-u*l*a+u*s*c-t*h*c-o*s*f+t*l*f)*R,e[8]=F*R,e[9]=(g*p*a-u*m*a-g*n*f+t*m*f+u*n*_-t*p*_)*R,e[10]=(o*m*a-g*i*a+g*n*c-t*m*c-o*n*_+t*i*_)*R,e[11]=(u*i*a-o*p*a-u*n*c+t*p*c+o*n*f-t*i*f)*R,e[12]=b*R,e[13]=(u*m*s-g*p*s+g*n*h-t*m*h-u*n*d+t*p*d)*R,e[14]=(g*i*s-o*m*s-g*n*l+t*m*l+o*n*d-t*i*d)*R,e[15]=(o*p*s-u*i*s+u*n*l-t*p*l-o*n*h+t*i*h)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,o=e.x,i=e.y,l=e.z,c=a*o,u=a*i;return this.set(c*o+n,c*i-s*l,c*l+s*i,0,c*i+s*l,u*i+n,u*l-s*o,0,c*l-s*i,u*l+s*o,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,o){return this.set(1,n,a,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,o=t._y,i=t._z,l=t._w,c=a+a,u=o+o,p=i+i,h=a*c,f=a*u,g=a*p,m=o*u,d=o*p,_=i*p,A=l*c,D=l*u,F=l*p,b=n.x,w=n.y,R=n.z;return s[0]=(1-(m+_))*b,s[1]=(f+F)*b,s[2]=(g-D)*b,s[3]=0,s[4]=(f-F)*w,s[5]=(1-(h+_))*w,s[6]=(d+A)*w,s[7]=0,s[8]=(g+D)*R,s[9]=(d-A)*R,s[10]=(1-(h+m))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Hn.set(s[0],s[1],s[2]).length();const o=Hn.set(s[4],s[5],s[6]).length(),i=Hn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ut.copy(this);const c=1/a,u=1/o,p=1/i;return Ut.elements[0]*=c,Ut.elements[1]*=c,Ut.elements[2]*=c,Ut.elements[4]*=u,Ut.elements[5]*=u,Ut.elements[6]*=u,Ut.elements[8]*=p,Ut.elements[9]*=p,Ut.elements[10]*=p,t.setFromRotationMatrix(Ut),n.x=a,n.y=o,n.z=i,this}makePerspective(e,t,n,s,a,o){const i=this.elements,l=2*a/(t-e),c=2*a/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),h=-(o+a)/(o-a),f=-2*o*a/(o-a);return i[0]=l,i[4]=0,i[8]=u,i[12]=0,i[1]=0,i[5]=c,i[9]=p,i[13]=0,i[2]=0,i[6]=0,i[10]=h,i[14]=f,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(e,t,n,s,a,o){const i=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-a),p=(t+e)*l,h=(n+s)*c,f=(o+a)*u;return i[0]=2*l,i[4]=0,i[8]=0,i[12]=-p,i[1]=0,i[5]=2*c,i[9]=0,i[13]=-h,i[2]=0,i[6]=0,i[10]=-2*u,i[14]=-f,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hn=new T,Ut=new xe,Nc=new T(0,0,0),Oc=new T(1,1,1),on=new T,$s=new T,bt=new T,Tr=new xe,Lr=new Rt;class Mt{constructor(e=0,t=0,n=0,s=Mt.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],o=s[4],i=s[8],l=s[1],c=s[5],u=s[9],p=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(i,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(i,f));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(i,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lr.setFromEuler(this),this.setFromQuaternion(Lr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Mt.DefaultOrder="XYZ";Mt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uc=0;const Pr=new T,Wn=new Rt,Kt=new xe,Ks=new T,_s=new T,zc=new T,Bc=new Rt,Rr=new T(1,0,0),Ir=new T(0,1,0),Nr=new T(0,0,1),kc={type:"added"},Or={type:"removed"};class Xe extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DefaultUp.clone();const e=new T,t=new Mt,n=new Rt,s=new T(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new xt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xe.DefaultMatrixWorldAutoUpdate,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(Rr,e)}rotateY(e){return this.rotateOnAxis(Ir,e)}rotateZ(e){return this.rotateOnAxis(Nr,e)}translateOnAxis(e,t){return Pr.copy(e).applyQuaternion(this.quaternion),this.position.add(Pr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rr,e)}translateY(e){return this.translateOnAxis(Ir,e)}translateZ(e){return this.translateOnAxis(Nr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(_s,Ks,this.up):Kt.lookAt(Ks,_s,this.up),this.quaternion.setFromRotationMatrix(Kt),s&&(Kt.extractRotation(s.matrixWorld),Wn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Or)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Or)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,a=this.children.length;s<a;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,zc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Bc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++){const i=s[a];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function a(i,l){return i[l.uuid]===void 0&&(i[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const l=i.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let l=0,c=this.material.length;l<c;l++)i.push(a(e.materials,this.material[l]));s.material=i}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let i=0;i<this.children.length;i++)s.children.push(this.children[i].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let i=0;i<this.animations.length;i++){const l=this.animations[i];s.animations.push(a(e.animations,l))}}if(t){const i=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);i.length>0&&(n.geometries=i),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(i){const l=[];for(const c in i){const u=i[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Xe.DefaultUp=new T(0,1,0);Xe.DefaultMatrixAutoUpdate=!0;Xe.DefaultMatrixWorldAutoUpdate=!0;const zt=new T,Jt=new T,Ya=new T,Qt=new T,qn=new T,Xn=new T,Ur=new T,Za=new T,$a=new T,Ka=new T;class tn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zt.subVectors(e,t),s.cross(zt);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){zt.subVectors(s,t),Jt.subVectors(n,t),Ya.subVectors(e,t);const o=zt.dot(zt),i=zt.dot(Jt),l=zt.dot(Ya),c=Jt.dot(Jt),u=Jt.dot(Ya),p=o*c-i*i;if(p===0)return a.set(-2,-1,-1);const h=1/p,f=(c*l-i*u)*h,g=(o*u-i*l)*h;return a.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qt),Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getUV(e,t,n,s,a,o,i,l){return this.getBarycoord(e,t,n,s,Qt),l.set(0,0),l.addScaledVector(a,Qt.x),l.addScaledVector(o,Qt.y),l.addScaledVector(i,Qt.z),l}static isFrontFacing(e,t,n,s){return zt.subVectors(n,t),Jt.subVectors(e,t),zt.cross(Jt).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),zt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,a){return tn.getUV(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let o,i;qn.subVectors(s,n),Xn.subVectors(a,n),Za.subVectors(e,n);const l=qn.dot(Za),c=Xn.dot(Za);if(l<=0&&c<=0)return t.copy(n);$a.subVectors(e,s);const u=qn.dot($a),p=Xn.dot($a);if(u>=0&&p<=u)return t.copy(s);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qn,o);Ka.subVectors(e,a);const f=qn.dot(Ka),g=Xn.dot(Ka);if(g>=0&&f<=g)return t.copy(a);const m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return i=c/(c-g),t.copy(n).addScaledVector(Xn,i);const d=u*g-f*p;if(d<=0&&p-u>=0&&f-g>=0)return Ur.subVectors(a,s),i=(p-u)/(p-u+(f-g)),t.copy(s).addScaledVector(Ur,i);const _=1/(d+m+h);return o=m*_,i=h*_,t.copy(n).addScaledVector(qn,o).addScaledVector(Xn,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vc=0;class On extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=is,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ro,this.blendDst=Io,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const i in a){const l=a[i];delete l.metadata,o.push(l)}return o}if(t){const a=s(e.textures),o=s(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qo extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new T,Js=new Ae;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),a=yt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Pi extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xo extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gc=0;const Et=new xe,Ja=new Xe,jn=new T,At=new Vs,Ds=new Vs,it=new T;class kt extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zo(e)?Xo:Pi)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new xt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Et.makeRotationFromQuaternion(e),this.applyMatrix4(Et),this}rotateX(e){return Et.makeRotationX(e),this.applyMatrix4(Et),this}rotateY(e){return Et.makeRotationY(e),this.applyMatrix4(Et),this}rotateZ(e){return Et.makeRotationZ(e),this.applyMatrix4(Et),this}translate(e,t,n){return Et.makeTranslation(e,t,n),this.applyMatrix4(Et),this}scale(e,t,n){return Et.makeScale(e,t,n),this.applyMatrix4(Et),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];At.setFromBufferAttribute(a),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const i=t[a];Ds.setFromBufferAttribute(i),this.morphTargetsRelative?(it.addVectors(At.min,Ds.min),At.expandByPoint(it),it.addVectors(At.max,Ds.max),At.expandByPoint(it)):(At.expandByPoint(Ds.min),At.expandByPoint(Ds.max))}At.getCenter(n);let s=0;for(let a=0,o=e.count;a<o;a++)it.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(it));if(t)for(let a=0,o=t.length;a<o;a++){const i=t[a],l=this.morphTargetsRelative;for(let c=0,u=i.count;c<u;c++)it.fromBufferAttribute(i,c),l&&(jn.fromBufferAttribute(e,c),it.add(jn)),s=Math.max(s,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,a=t.normal.array,o=t.uv.array,i=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<i;L++)c[L]=new T,u[L]=new T;const p=new T,h=new T,f=new T,g=new Ae,m=new Ae,d=new Ae,_=new T,A=new T;function D(L,X,$){p.fromArray(s,L*3),h.fromArray(s,X*3),f.fromArray(s,$*3),g.fromArray(o,L*2),m.fromArray(o,X*2),d.fromArray(o,$*2),h.sub(p),f.sub(p),m.sub(g),d.sub(g);const O=1/(m.x*d.y-d.x*m.y);!isFinite(O)||(_.copy(h).multiplyScalar(d.y).addScaledVector(f,-m.y).multiplyScalar(O),A.copy(f).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(O),c[L].add(_),c[X].add(_),c[$].add(_),u[L].add(A),u[X].add(A),u[$].add(A))}let F=this.groups;F.length===0&&(F=[{start:0,count:n.length}]);for(let L=0,X=F.length;L<X;++L){const $=F[L],O=$.start,P=$.count;for(let V=O,Y=O+P;V<Y;V+=3)D(n[V+0],n[V+1],n[V+2])}const b=new T,w=new T,R=new T,y=new T;function S(L){R.fromArray(a,L*3),y.copy(R);const X=c[L];b.copy(X),b.sub(R.multiplyScalar(R.dot(X))).normalize(),w.crossVectors(y,X);const O=w.dot(u[L])<0?-1:1;l[L*4]=b.x,l[L*4+1]=b.y,l[L*4+2]=b.z,l[L*4+3]=O}for(let L=0,X=F.length;L<X;++L){const $=F[L],O=$.start,P=$.count;for(let V=O,Y=O+P;V<Y;V+=3)S(n[V+0]),S(n[V+1]),S(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new T,a=new T,o=new T,i=new T,l=new T,c=new T,u=new T,p=new T;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,a),p.subVectors(s,a),u.cross(p),i.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),i.add(u),l.add(u),c.add(u),n.setXYZ(g,i.x,i.y,i.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,a),p.subVectors(s,a),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(i,l){const c=i.array,u=i.itemSize,p=i.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let m=0,d=l.length;m<d;m++){i.isInterleavedBufferAttribute?f=l[m]*i.data.stride+i.offset:f=l[m]*u;for(let _=0;_<u;_++)h[g++]=c[f++]}return new qt(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,s=this.attributes;for(const i in s){const l=s[i],c=e(l,n);t.setAttribute(i,c)}const a=this.morphAttributes;for(const i in a){const l=[],c=a[i];for(let u=0,p=c.length;u<p;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[i]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let i=0,l=o.length;i<l;i++){const c=o[i];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const f=c[p];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const i=this.boundingSphere;return i!==null&&(e.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],p=a[c];for(let h=0,f=p.length;h<f;h++)u.push(p[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const i=e.boundingBox;i!==null&&(this.boundingBox=i.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const zr=new xe,Yn=new Ho,Qa=new Fa,xs=new T,Fs=new T,vs=new T,ei=new T,Qs=new T,ea=new Ae,ta=new Ae,na=new Ae,ti=new T,sa=new T;class It extends Xe{constructor(e=new kt,t=new qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const i=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const i=this.morphTargetInfluences;if(a&&i){Qs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=i[l],p=a[l];u!==0&&(ei.fromBufferAttribute(p,e),o?Qs.addScaledVector(ei,u):Qs.addScaledVector(ei.sub(t),u))}t.add(Qs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(a),e.ray.intersectsSphere(Qa)===!1)||(zr.copy(a).invert(),Yn.copy(e.ray).applyMatrix4(zr),n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1))return;let o;const i=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,p=n.groups,h=n.drawRange;if(i!==null)if(Array.isArray(s))for(let f=0,g=p.length;f<g;f++){const m=p[f],d=s[m.materialIndex],_=Math.max(m.start,h.start),A=Math.min(i.count,Math.min(m.start+m.count,h.start+h.count));for(let D=_,F=A;D<F;D+=3){const b=i.getX(D),w=i.getX(D+1),R=i.getX(D+2);o=aa(this,d,e,Yn,c,u,b,w,R),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const f=Math.max(0,h.start),g=Math.min(i.count,h.start+h.count);for(let m=f,d=g;m<d;m+=3){const _=i.getX(m),A=i.getX(m+1),D=i.getX(m+2);o=aa(this,s,e,Yn,c,u,_,A,D),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let f=0,g=p.length;f<g;f++){const m=p[f],d=s[m.materialIndex],_=Math.max(m.start,h.start),A=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let D=_,F=A;D<F;D+=3){const b=D,w=D+1,R=D+2;o=aa(this,d,e,Yn,c,u,b,w,R),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const f=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=f,d=g;m<d;m+=3){const _=m,A=m+1,D=m+2;o=aa(this,s,e,Yn,c,u,_,A,D),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Hc(r,e,t,n,s,a,o,i){let l;if(e.side===Nt?l=n.intersectTriangle(o,a,s,!0,i):l=n.intersectTriangle(s,a,o,e.side===En,i),l===null)return null;sa.copy(i),sa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:r}}function aa(r,e,t,n,s,a,o,i,l){r.getVertexPosition(o,xs),r.getVertexPosition(i,Fs),r.getVertexPosition(l,vs);const c=Hc(r,e,t,n,xs,Fs,vs,ti);if(c){s&&(ea.fromBufferAttribute(s,o),ta.fromBufferAttribute(s,i),na.fromBufferAttribute(s,l),c.uv=tn.getUV(ti,xs,Fs,vs,ea,ta,na,new Ae)),a&&(ea.fromBufferAttribute(a,o),ta.fromBufferAttribute(a,i),na.fromBufferAttribute(a,l),c.uv2=tn.getUV(ti,xs,Fs,vs,ea,ta,na,new Ae));const u={a:o,b:i,c:l,normal:new T,materialIndex:0};tn.getNormal(xs,Fs,vs,u.normal),c.face=u}return c}class Rn extends kt{constructor(e=1,t=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const i=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],p=[];let h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,a,0),g("z","y","x",1,-1,n,t,-e,o,a,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,a,4),g("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new Dt(c,3)),this.setAttribute("normal",new Dt(u,3)),this.setAttribute("uv",new Dt(p,2));function g(m,d,_,A,D,F,b,w,R,y,S){const L=F/R,X=b/y,$=F/2,O=b/2,P=w/2,V=R+1,Y=y+1;let K=0,q=0;const J=new T;for(let Z=0;Z<Y;Z++){const B=Z*X-O;for(let z=0;z<V;z++){const ne=z*L-$;J[m]=ne*A,J[d]=B*D,J[_]=P,c.push(J.x,J.y,J.z),J[m]=0,J[d]=0,J[_]=w>0?1:-1,u.push(J.x,J.y,J.z),p.push(z/R),p.push(1-Z/y),K+=1}}for(let Z=0;Z<y;Z++)for(let B=0;B<R;B++){const z=h+B+V*Z,ne=h+B+V*(Z+1),ee=h+(B+1)+V*(Z+1),ie=h+(B+1)+V*Z;l.push(z,ne,ie),l.push(ne,ee,ie),q+=6}i.addGroup(f,q,S),f+=q,h+=K}}static fromJSON(e){return new Rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mt(r){const e={};for(let t=0;t<r.length;t++){const n=ps(r[t]);for(const s in n)e[s]=n[s]}return e}function Wc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function jo(r){return r.getRenderTarget()===null&&r.outputEncoding===Ve?Vt:Ns}const qc={clone:ps,merge:mt};var Xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Wc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yo extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ut extends Yo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const i=this.filmOffset;i!==0&&(a+=e*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zn=-90,$n=1;class Yc extends Xe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new ut(Zn,$n,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const a=new ut(Zn,$n,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const o=new ut(Zn,$n,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const i=new ut(Zn,$n,e,t);i.layers=this.layers,i.up.set(0,0,1),i.lookAt(0,-1,0),this.add(i);const l=new ut(Zn,$n,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ut(Zn,$n,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,a,o,i,l,c]=this.children,u=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=nn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,i),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=p,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Zo extends lt{constructor(e,t,n,s,a,o,i,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,n,s,a,o,i,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zc extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rn(5,5,5),a=new In({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:dn});a.uniforms.tEquirect.value=t;const o=new It(s,a),i=t.minFilter;return t.minFilter===Rs&&(t.minFilter=Tt),new Yc(1,10,this).update(e,o),t.minFilter=i,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(a)}}const ni=new T,$c=new T,Kc=new xt;class vn{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ni.subVectors(n,t).cross($c.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ni),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kc.getNormalMatrix(e),s=this.coplanarPoint(ni).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Fa,ia=new T;class Ri{constructor(e=new vn,t=new vn,n=new vn,s=new vn,a=new vn,o=new vn){this.planes=[e,t,n,s,a,o]}set(e,t,n,s,a,o){const i=this.planes;return i[0].copy(e),i[1].copy(t),i[2].copy(n),i[3].copy(s),i[4].copy(a),i[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],i=n[3],l=n[4],c=n[5],u=n[6],p=n[7],h=n[8],f=n[9],g=n[10],m=n[11],d=n[12],_=n[13],A=n[14],D=n[15];return t[0].setComponents(i-s,p-l,m-h,D-d).normalize(),t[1].setComponents(i+s,p+l,m+h,D+d).normalize(),t[2].setComponents(i+a,p+c,m+f,D+_).normalize(),t[3].setComponents(i-a,p-c,m-f,D-_).normalize(),t[4].setComponents(i-o,p-u,m-g,D-A).normalize(),t[5].setComponents(i+o,p+u,m+g,D+A).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $o(){let r=null,e=!1,t=null,n=null;function s(a,o){t(a,o),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Jc(r,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const p=c.array,h=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,p,h),c.onUploadCallback();let g;if(p instanceof Float32Array)g=5126;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(p instanceof Int16Array)g=5122;else if(p instanceof Uint32Array)g=5125;else if(p instanceof Int32Array)g=5124;else if(p instanceof Int8Array)g=5120;else if(p instanceof Uint8Array)g=5121;else if(p instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:f,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,p){const h=u.array,f=u.updateRange;r.bindBuffer(p,c),f.count===-1?r.bufferSubData(p,0,h):(t?r.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):r.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function i(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=n.get(c);p===void 0?n.set(c,s(c,u)):p.version<c.version&&(a(p.buffer,c,u),p.version=c.version)}return{get:o,remove:i,update:l}}class Ii extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,o=t/2,i=Math.floor(n),l=Math.floor(s),c=i+1,u=l+1,p=e/i,h=t/l,f=[],g=[],m=[],d=[];for(let _=0;_<u;_++){const A=_*h-o;for(let D=0;D<c;D++){const F=D*p-a;g.push(F,-A,0),m.push(0,0,1),d.push(D/i),d.push(1-_/l)}}for(let _=0;_<l;_++)for(let A=0;A<i;A++){const D=A+c*_,F=A+c*(_+1),b=A+1+c*(_+1),w=A+1+c*_;f.push(D,F,w),f.push(F,b,w)}this.setIndex(f),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(m,3)),this.setAttribute("uv",new Dt(d,2))}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ap=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip="vec3 transformed = vec3( position );",rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,lp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Up=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Yp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,su=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,au=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,du=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,_u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Du=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Au=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tu=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lu=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ru=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ou=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ku=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Hu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Wu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,qu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Xu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ju=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Yu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Zu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,$u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ju=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ah=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ih=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ch=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ph=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_h=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ah=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ch=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Eh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Th=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Me={alphamap_fragment:Qc,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:np,aomap_fragment:sp,aomap_pars_fragment:ap,begin_vertex:ip,beginnormal_vertex:rp,bsdfs:op,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:hp,clipping_planes_vertex:dp,color_fragment:fp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:yp,common:_p,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:xp,displacementmap_pars_vertex:Fp,displacementmap_vertex:vp,emissivemap_fragment:bp,emissivemap_pars_fragment:Ap,encodings_fragment:Cp,encodings_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Ep,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Pp,fog_pars_vertex:Rp,fog_fragment:Ip,fog_pars_fragment:Np,gradientmap_pars_fragment:Op,lightmap_fragment:Up,lightmap_pars_fragment:zp,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:kp,lights_pars_begin:Vp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Wp,lights_phong_fragment:qp,lights_phong_pars_fragment:Xp,lights_physical_fragment:jp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Zp,lights_fragment_maps:$p,lights_fragment_end:Kp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:eu,logdepthbuf_vertex:tu,map_fragment:nu,map_pars_fragment:su,map_particle_fragment:au,map_particle_pars_fragment:iu,metalnessmap_fragment:ru,metalnessmap_pars_fragment:ou,morphcolor_vertex:lu,morphnormal_vertex:cu,morphtarget_pars_vertex:pu,morphtarget_vertex:uu,normal_fragment_begin:hu,normal_fragment_maps:du,normal_pars_fragment:fu,normal_pars_vertex:mu,normal_vertex:gu,normalmap_pars_fragment:yu,clearcoat_normal_fragment_begin:_u,clearcoat_normal_fragment_maps:Du,clearcoat_pars_fragment:xu,iridescence_pars_fragment:Fu,output_fragment:vu,packing:bu,premultiplied_alpha_fragment:Au,project_vertex:Cu,dithering_fragment:Mu,dithering_pars_fragment:Su,roughnessmap_fragment:wu,roughnessmap_pars_fragment:Eu,shadowmap_pars_fragment:Tu,shadowmap_pars_vertex:Lu,shadowmap_vertex:Pu,shadowmask_pars_fragment:Ru,skinbase_vertex:Iu,skinning_pars_vertex:Nu,skinning_vertex:Ou,skinnormal_vertex:Uu,specularmap_fragment:zu,specularmap_pars_fragment:Bu,tonemapping_fragment:ku,tonemapping_pars_fragment:Vu,transmission_fragment:Gu,transmission_pars_fragment:Hu,uv_pars_fragment:Wu,uv_pars_vertex:qu,uv_vertex:Xu,uv2_pars_fragment:ju,uv2_pars_vertex:Yu,uv2_vertex:Zu,worldpos_vertex:$u,background_vert:Ku,background_frag:Ju,backgroundCube_vert:Qu,backgroundCube_frag:eh,cube_vert:th,cube_frag:nh,depth_vert:sh,depth_frag:ah,distanceRGBA_vert:ih,distanceRGBA_frag:rh,equirect_vert:oh,equirect_frag:lh,linedashed_vert:ch,linedashed_frag:ph,meshbasic_vert:uh,meshbasic_frag:hh,meshlambert_vert:dh,meshlambert_frag:fh,meshmatcap_vert:mh,meshmatcap_frag:gh,meshnormal_vert:yh,meshnormal_frag:_h,meshphong_vert:Dh,meshphong_frag:xh,meshphysical_vert:Fh,meshphysical_frag:vh,meshtoon_vert:bh,meshtoon_frag:Ah,points_vert:Ch,points_frag:Mh,shadow_vert:Sh,shadow_frag:wh,sprite_vert:Eh,sprite_frag:Th},re={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},Gt={basic:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new we(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new we(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:mt([re.points,re.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:mt([re.common,re.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:mt([re.sprite,re.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:mt([re.common,re.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:mt([re.lights,re.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Gt.physical={uniforms:mt([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const ra={r:0,b:0,g:0};function Lh(r,e,t,n,s,a,o){const i=new we(0);let l=a===!0?0:1,c,u,p=null,h=0,f=null;function g(d,_){let A=!1,D=_.isScene===!0?_.background:null;D&&D.isTexture&&(D=(_.backgroundBlurriness>0?t:e).get(D));const F=r.xr,b=F.getSession&&F.getSession();b&&b.environmentBlendMode==="additive"&&(D=null),D===null?m(i,l):D&&D.isColor&&(m(D,1),A=!0),(r.autoClear||A)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),D&&(D.isCubeTexture||D.mapping===xa)?(u===void 0&&(u=new It(new Rn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:ps(Gt.backgroundCube.uniforms),vertexShader:Gt.backgroundCube.vertexShader,fragmentShader:Gt.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=D.encoding!==Ve,(p!==D||h!==D.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,p=D,h=D.version,f=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new It(new Ii(2,2),new In({name:"BackgroundMaterial",uniforms:ps(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=D.encoding!==Ve,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||h!==D.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,p=D,h=D.version,f=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,_){d.getRGB(ra,jo(r)),n.buffers.color.setClear(ra.r,ra.g,ra.b,_,o)}return{getClearColor:function(){return i},setClearColor:function(d,_=1){i.set(d),l=_,m(i,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(i,l)},render:g}}function Ph(r,e,t,n){const s=r.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,i={},l=d(null);let c=l,u=!1;function p(P,V,Y,K,q){let J=!1;if(o){const Z=m(K,Y,V);c!==Z&&(c=Z,f(c.object)),J=_(P,K,Y,q),J&&A(P,K,Y,q)}else{const Z=V.wireframe===!0;(c.geometry!==K.id||c.program!==Y.id||c.wireframe!==Z)&&(c.geometry=K.id,c.program=Y.id,c.wireframe=Z,J=!0)}q!==null&&t.update(q,34963),(J||u)&&(u=!1,y(P,V,Y,K),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function h(){return n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function f(P){return n.isWebGL2?r.bindVertexArray(P):a.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?r.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function m(P,V,Y){const K=Y.wireframe===!0;let q=i[P.id];q===void 0&&(q={},i[P.id]=q);let J=q[V.id];J===void 0&&(J={},q[V.id]=J);let Z=J[K];return Z===void 0&&(Z=d(h()),J[K]=Z),Z}function d(P){const V=[],Y=[],K=[];for(let q=0;q<s;q++)V[q]=0,Y[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:K,object:P,attributes:{},index:null}}function _(P,V,Y,K){const q=c.attributes,J=V.attributes;let Z=0;const B=Y.getAttributes();for(const z in B)if(B[z].location>=0){const ee=q[z];let ie=J[z];if(ie===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),ee===void 0||ee.attribute!==ie||ie&&ee.data!==ie.data)return!0;Z++}return c.attributesNum!==Z||c.index!==K}function A(P,V,Y,K){const q={},J=V.attributes;let Z=0;const B=Y.getAttributes();for(const z in B)if(B[z].location>=0){let ee=J[z];ee===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const ie={};ie.attribute=ee,ee&&ee.data&&(ie.data=ee.data),q[z]=ie,Z++}c.attributes=q,c.attributesNum=Z,c.index=K}function D(){const P=c.newAttributes;for(let V=0,Y=P.length;V<Y;V++)P[V]=0}function F(P){b(P,0)}function b(P,V){const Y=c.newAttributes,K=c.enabledAttributes,q=c.attributeDivisors;Y[P]=1,K[P]===0&&(r.enableVertexAttribArray(P),K[P]=1),q[P]!==V&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),q[P]=V)}function w(){const P=c.newAttributes,V=c.enabledAttributes;for(let Y=0,K=V.length;Y<K;Y++)V[Y]!==P[Y]&&(r.disableVertexAttribArray(Y),V[Y]=0)}function R(P,V,Y,K,q,J){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(P,V,Y,q,J):r.vertexAttribPointer(P,V,Y,K,q,J)}function y(P,V,Y,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;D();const q=K.attributes,J=Y.getAttributes(),Z=V.defaultAttributeValues;for(const B in J){const z=J[B];if(z.location>=0){let ne=q[B];if(ne===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const ee=ne.normalized,ie=ne.itemSize,G=t.get(ne);if(G===void 0)continue;const Ce=G.buffer,de=G.type,oe=G.bytesPerElement;if(ne.isInterleavedBufferAttribute){const se=ne.data,ve=se.stride,ue=ne.offset;if(se.isInstancedInterleavedBuffer){for(let me=0;me<z.locationSize;me++)b(z.location+me,se.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<z.locationSize;me++)F(z.location+me);r.bindBuffer(34962,Ce);for(let me=0;me<z.locationSize;me++)R(z.location+me,ie/z.locationSize,de,ee,ve*oe,(ue+ie/z.locationSize*me)*oe)}else{if(ne.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)b(z.location+se,ne.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<z.locationSize;se++)F(z.location+se);r.bindBuffer(34962,Ce);for(let se=0;se<z.locationSize;se++)R(z.location+se,ie/z.locationSize,de,ee,ie*oe,ie/z.locationSize*se*oe)}}else if(Z!==void 0){const ee=Z[B];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(z.location,ee);break;case 3:r.vertexAttrib3fv(z.location,ee);break;case 4:r.vertexAttrib4fv(z.location,ee);break;default:r.vertexAttrib1fv(z.location,ee)}}}}w()}function S(){$();for(const P in i){const V=i[P];for(const Y in V){const K=V[Y];for(const q in K)g(K[q].object),delete K[q];delete V[Y]}delete i[P]}}function L(P){if(i[P.id]===void 0)return;const V=i[P.id];for(const Y in V){const K=V[Y];for(const q in K)g(K[q].object),delete K[q];delete V[Y]}delete i[P.id]}function X(P){for(const V in i){const Y=i[V];if(Y[P.id]===void 0)continue;const K=Y[P.id];for(const q in K)g(K[q].object),delete K[q];delete Y[P.id]}}function $(){O(),u=!0,c!==l&&(c=l,f(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:$,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:X,initAttributes:D,enableAttribute:F,disableUnusedAttributes:w}}function Rh(r,e,t,n){const s=n.isWebGL2;let a;function o(c){a=c}function i(c,u){r.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,p){if(p===0)return;let h,f;if(s)h=r,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](a,c,u,p),t.update(u,a,p)}this.setMode=o,this.render=i,this.renderInstances=l}function Ih(r,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){if(R==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let i=t.precision!==void 0?t.precision:"highp";const l=a(i);l!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",l,"instead."),i=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=r.getParameter(34930),h=r.getParameter(35660),f=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),d=r.getParameter(36347),_=r.getParameter(36348),A=r.getParameter(36349),D=h>0,F=o||e.has("OES_texture_float"),b=D&&F,w=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:a,precision:i,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:A,vertexTextures:D,floatFragmentTextures:F,floatVertexTextures:b,maxSamples:w}}function Nh(r){const e=this;let t=null,n=0,s=!1,a=!1;const o=new vn,i=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,f){const g=p.length!==0||h||n!==0||s;return s=h,t=u(p,f,0),n=p.length,g},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,c()},this.setState=function(p,h,f){const g=p.clippingPlanes,m=p.clipIntersection,d=p.clipShadows,_=r.get(p);if(!s||g===null||g.length===0||a&&!d)a?u(null):c();else{const A=a?0:n,D=A*4;let F=_.clippingState||null;l.value=F,F=u(g,h,D,f);for(let b=0;b!==D;++b)F[b]=t[b];_.clippingState=F,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,h,f,g){const m=p!==null?p.length:0;let d=null;if(m!==0){if(d=l.value,g!==!0||d===null){const _=f+m*4,A=h.matrixWorldInverse;i.getNormalMatrix(A),(d===null||d.length<_)&&(d=new Float32Array(_));for(let D=0,F=f;D!==m;++D,F+=4)o.copy(p[D]).applyMatrix4(A,i),o.normal.toArray(d,F),d[F+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Oh(r){let e=new WeakMap;function t(o,i){return i===fa?o.mapping=os:i===gi&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const i=o.mapping;if(i===fa||i===gi)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Zc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const i=o.target;i.removeEventListener("dispose",s);const l=e.get(i);l!==void 0&&(e.delete(i),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Ni extends Yo{constructor(e=-1,t=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,o=n+e,i=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,i-=u*this.view.offsetY,l=i-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,i,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ts=4,Br=[.125,.215,.35,.446,.526,.582],An=20,si=new Ni,kr=new we;let ai=null;const bn=(1+Math.sqrt(5))/2,Jn=1/bn,Vr=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,bn,Jn),new T(0,bn,-Jn),new T(Jn,0,bn),new T(-Jn,0,bn),new T(bn,Jn,0),new T(-bn,Jn,0)];class Gr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ai=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ai),e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ai=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Is,format:Lt,encoding:Ln,depthBuffer:!1},s=Hr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hr(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uh(a)),this._blurMaterial=zh(a,e,t)}return s}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,si)}_sceneToCubeUV(e,t,n,s){const i=new ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(kr),u.toneMapping=nn,u.autoClear=!1;const f=new qo({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new It(new Rn,f);let m=!1;const d=e.background;d?d.isColor&&(f.color.copy(d),e.background=null,m=!0):(f.color.copy(kr),m=!0);for(let _=0;_<6;_++){const A=_%3;A===0?(i.up.set(0,l[_],0),i.lookAt(c[_],0,0)):A===1?(i.up.set(0,0,l[_]),i.lookAt(0,c[_],0)):(i.up.set(0,l[_],0),i.lookAt(0,0,c[_]));const D=this._cubeSize;oa(s,A*D,_>2?D:0,D,D),u.setRenderTarget(s),m&&u.render(g,i),u.render(e,i)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=p,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===os||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wr());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],a),i=a.uniforms;i.envMap.value=e;const l=this._cubeSize;oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,si)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vr[(s-1)%Vr.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",a),this._halfBlur(o,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,o,i){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new It(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*An-1),m=a/g,d=isFinite(a)?1+Math.floor(u*m):An;d>An&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${An}`);const _=[];let A=0;for(let R=0;R<An;++R){const y=R/m,S=Math.exp(-y*y/2);_.push(S),R===0?A+=S:R<d&&(A+=2*S)}for(let R=0;R<_.length;R++)_[R]=_[R]/A;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=_,h.latitudinal.value=o==="latitudinal",i&&(h.poleAxis.value=i);const{_lodMax:D}=this;h.dTheta.value=g,h.mipInt.value=D-n;const F=this._sizeLods[s],b=3*F*(s>D-ts?s-D+ts:0),w=4*(this._cubeSize-F);oa(t,b,w,3*F,2*F),l.setRenderTarget(t),l.render(p,si)}}function Uh(r){const e=[],t=[],n=[];let s=r;const a=r-ts+1+Br.length;for(let o=0;o<a;o++){const i=Math.pow(2,s);t.push(i);let l=1/i;o>r-ts?l=Br[o-r+ts-1]:o===0&&(l=0),n.push(l);const c=1/(i-2),u=-c,p=1+c,h=[u,u,p,u,p,p,u,u,p,p,u,p],f=6,g=6,m=3,d=2,_=1,A=new Float32Array(m*g*f),D=new Float32Array(d*g*f),F=new Float32Array(_*g*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,y=w>2?0:-1,S=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];A.set(S,m*g*w),D.set(h,d*g*w);const L=[w,w,w,w,w,w];F.set(L,_*g*w)}const b=new kt;b.setAttribute("position",new qt(A,m)),b.setAttribute("uv",new qt(D,d)),b.setAttribute("faceIndex",new qt(F,_)),e.push(b),s>ts&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hr(r,e,t){const n=new Pn(r,e,t);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function zh(r,e,t){const n=new Float32Array(An),s=new T(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Wr(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function qr(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Oi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bh(r){let e=new WeakMap,t=null;function n(i){if(i&&i.isTexture){const l=i.mapping,c=l===fa||l===gi,u=l===os||l===ls;if(c||u)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let p=e.get(i);return t===null&&(t=new Gr(r)),p=c?t.fromEquirectangular(i,p):t.fromCubemap(i,p),e.set(i,p),p.texture}else{if(e.has(i))return e.get(i).texture;{const p=i.image;if(c&&p&&p.height>0||u&&p&&s(p)){t===null&&(t=new Gr(r));const h=c?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,h),i.addEventListener("dispose",a),h.texture}else return null}}}return i}function s(i){let l=0;const c=6;for(let u=0;u<c;u++)i[u]!==void 0&&l++;return l===c}function a(i){const l=i.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vh(r,e,t,n){const s={},a=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=a.get(h);f&&(e.remove(f),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function i(p,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const g in h)e.update(h[g],34962);const f=p.morphAttributes;for(const g in f){const m=f[g];for(let d=0,_=m.length;d<_;d++)e.update(m[d],34962)}}function c(p){const h=[],f=p.index,g=p.attributes.position;let m=0;if(f!==null){const A=f.array;m=f.version;for(let D=0,F=A.length;D<F;D+=3){const b=A[D+0],w=A[D+1],R=A[D+2];h.push(b,w,w,R,R,b)}}else{const A=g.array;m=g.version;for(let D=0,F=A.length/3-1;D<F;D+=3){const b=D+0,w=D+1,R=D+2;h.push(b,w,w,R,R,b)}}const d=new(zo(h)?Xo:Pi)(h,1);d.version=m;const _=a.get(p);_&&e.remove(_),a.set(p,d)}function u(p){const h=a.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&c(p)}else c(p);return a.get(p)}return{get:i,update:l,getWireframeAttribute:u}}function Gh(r,e,t,n){const s=n.isWebGL2;let a;function o(h){a=h}let i,l;function c(h){i=h.type,l=h.bytesPerElement}function u(h,f){r.drawElements(a,f,i,h*l),t.update(f,a,1)}function p(h,f,g){if(g===0)return;let m,d;if(s)m=r,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](a,f,i,h*l,g),t.update(f,a,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=p}function Hh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,i){switch(t.calls++,o){case 4:t.triangles+=i*(a/3);break;case 1:t.lines+=i*(a/2);break;case 3:t.lines+=i*(a-1);break;case 2:t.lines+=i*a;break;case 0:t.points+=i*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Wh(r,e){return r[0]-e[0]}function qh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Xh(r,e,t){const n={},s=new Float32Array(8),a=new WeakMap,o=new ze,i=[];for(let c=0;c<8;c++)i[c]=[c,0];function l(c,u,p,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let d=a.get(u);if(d===void 0||d.count!==m){let V=function(){O.dispose(),a.delete(u),u.removeEventListener("dispose",V)};d!==void 0&&d.texture.dispose();const D=u.morphAttributes.position!==void 0,F=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let S=0;D===!0&&(S=1),F===!0&&(S=2),b===!0&&(S=3);let L=u.attributes.position.count*S,X=1;L>e.maxTextureSize&&(X=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const $=new Float32Array(L*X*4*m),O=new Go($,L,X,m);O.type=un,O.needsUpdate=!0;const P=S*4;for(let Y=0;Y<m;Y++){const K=w[Y],q=R[Y],J=y[Y],Z=L*X*4*Y;for(let B=0;B<K.count;B++){const z=B*P;D===!0&&(o.fromBufferAttribute(K,B),$[Z+z+0]=o.x,$[Z+z+1]=o.y,$[Z+z+2]=o.z,$[Z+z+3]=0),F===!0&&(o.fromBufferAttribute(q,B),$[Z+z+4]=o.x,$[Z+z+5]=o.y,$[Z+z+6]=o.z,$[Z+z+7]=0),b===!0&&(o.fromBufferAttribute(J,B),$[Z+z+8]=o.x,$[Z+z+9]=o.y,$[Z+z+10]=o.z,$[Z+z+11]=J.itemSize===4?o.w:1)}}d={count:m,texture:O,size:new Ae(L,X)},a.set(u,d),u.addEventListener("dispose",V)}let _=0;for(let D=0;D<f.length;D++)_+=f[D];const A=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",A),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{const g=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let F=0;F<g;F++)m[F]=[F,0];n[u.id]=m}for(let F=0;F<g;F++){const b=m[F];b[0]=F,b[1]=f[F]}m.sort(qh);for(let F=0;F<8;F++)F<g&&m[F][1]?(i[F][0]=m[F][0],i[F][1]=m[F][1]):(i[F][0]=Number.MAX_SAFE_INTEGER,i[F][1]=0);i.sort(Wh);const d=u.morphAttributes.position,_=u.morphAttributes.normal;let A=0;for(let F=0;F<8;F++){const b=i[F],w=b[0],R=b[1];w!==Number.MAX_SAFE_INTEGER&&R?(d&&u.getAttribute("morphTarget"+F)!==d[w]&&u.setAttribute("morphTarget"+F,d[w]),_&&u.getAttribute("morphNormal"+F)!==_[w]&&u.setAttribute("morphNormal"+F,_[w]),s[F]=R,A+=R):(d&&u.hasAttribute("morphTarget"+F)===!0&&u.deleteAttribute("morphTarget"+F),_&&u.hasAttribute("morphNormal"+F)===!0&&u.deleteAttribute("morphNormal"+F),s[F]=0)}const D=u.morphTargetsRelative?1:1-A;h.getUniforms().setValue(r,"morphTargetBaseInfluence",D),h.getUniforms().setValue(r,"morphTargetInfluences",s)}}return{update:l}}function jh(r,e,t,n){let s=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,p=e.get(l,u);return s.get(p)!==c&&(e.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",i)===!1&&l.addEventListener("dispose",i),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),p}function o(){s=new WeakMap}function i(l){const c=l.target;c.removeEventListener("dispose",i),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Ko=new lt,Jo=new Go,Qo=new Rc,el=new Zo,Xr=[],jr=[],Yr=new Float32Array(16),Zr=new Float32Array(9),$r=new Float32Array(4);function us(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=Xr[s];if(a===void 0&&(a=new Float32Array(s),Xr[s]=a),e!==0){n.toArray(a,0);for(let o=1,i=0;o!==e;++o)i+=t,r[o].toArray(a,i)}return a}function tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function va(r,e){let t=jr[e];t===void 0&&(t=new Int32Array(e),jr[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Yh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Zh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2fv(this.addr,e),nt(t,e)}}function $h(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;r.uniform3fv(this.addr,e),nt(t,e)}}function Kh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4fv(this.addr,e),nt(t,e)}}function Jh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;$r.set(n),r.uniformMatrix2fv(this.addr,!1,$r),nt(t,n)}}function Qh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Zr.set(n),r.uniformMatrix3fv(this.addr,!1,Zr),nt(t,n)}}function ed(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Yr.set(n),r.uniformMatrix4fv(this.addr,!1,Yr),nt(t,n)}}function td(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2iv(this.addr,e),nt(t,e)}}function sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3iv(this.addr,e),nt(t,e)}}function ad(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4iv(this.addr,e),nt(t,e)}}function id(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2uiv(this.addr,e),nt(t,e)}}function od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3uiv(this.addr,e),nt(t,e)}}function ld(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4uiv(this.addr,e),nt(t,e)}}function cd(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Ko,s)}function pd(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qo,s)}function ud(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||el,s)}function hd(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jo,s)}function dd(r){switch(r){case 5126:return Yh;case 35664:return Zh;case 35665:return $h;case 35666:return Kh;case 35674:return Jh;case 35675:return Qh;case 35676:return ed;case 5124:case 35670:return td;case 35667:case 35671:return nd;case 35668:case 35672:return sd;case 35669:case 35673:return ad;case 5125:return id;case 36294:return rd;case 36295:return od;case 36296:return ld;case 35678:case 36198:case 36298:case 36306:case 35682:return cd;case 35679:case 36299:case 36307:return pd;case 35680:case 36300:case 36308:case 36293:return ud;case 36289:case 36303:case 36311:case 36292:return hd}}function fd(r,e){r.uniform1fv(this.addr,e)}function md(r,e){const t=us(e,this.size,2);r.uniform2fv(this.addr,t)}function gd(r,e){const t=us(e,this.size,3);r.uniform3fv(this.addr,t)}function yd(r,e){const t=us(e,this.size,4);r.uniform4fv(this.addr,t)}function _d(r,e){const t=us(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Dd(r,e){const t=us(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function xd(r,e){const t=us(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Fd(r,e){r.uniform1iv(this.addr,e)}function vd(r,e){r.uniform2iv(this.addr,e)}function bd(r,e){r.uniform3iv(this.addr,e)}function Ad(r,e){r.uniform4iv(this.addr,e)}function Cd(r,e){r.uniform1uiv(this.addr,e)}function Md(r,e){r.uniform2uiv(this.addr,e)}function Sd(r,e){r.uniform3uiv(this.addr,e)}function wd(r,e){r.uniform4uiv(this.addr,e)}function Ed(r,e,t){const n=this.cache,s=e.length,a=va(t,s);tt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ko,a[o])}function Td(r,e,t){const n=this.cache,s=e.length,a=va(t,s);tt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Qo,a[o])}function Ld(r,e,t){const n=this.cache,s=e.length,a=va(t,s);tt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||el,a[o])}function Pd(r,e,t){const n=this.cache,s=e.length,a=va(t,s);tt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jo,a[o])}function Rd(r){switch(r){case 5126:return fd;case 35664:return md;case 35665:return gd;case 35666:return yd;case 35674:return _d;case 35675:return Dd;case 35676:return xd;case 5124:case 35670:return Fd;case 35667:case 35671:return vd;case 35668:case 35672:return bd;case 35669:case 35673:return Ad;case 5125:return Cd;case 36294:return Md;case 36295:return Sd;case 36296:return wd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ed;case 35679:case 36299:case 36307:return Td;case 35680:case 36300:case 36308:case 36293:return Ld;case 36289:case 36303:case 36311:case 36292:return Pd}}class Id{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dd(t.type)}}class Nd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Rd(t.type)}}class Od{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const i=s[a];i.setValue(e,t[i.id],n)}}}const ii=/(\w+)(\])?(\[|\.)?/g;function Kr(r,e){r.seq.push(e),r.map[e.id]=e}function Ud(r,e,t){const n=r.name,s=n.length;for(ii.lastIndex=0;;){const a=ii.exec(n),o=ii.lastIndex;let i=a[1];const l=a[2]==="]",c=a[3];if(l&&(i=i|0),c===void 0||c==="["&&o+2===s){Kr(t,c===void 0?new Id(i,r,e):new Nd(i,r,e));break}else{let p=t.map[i];p===void 0&&(p=new Od(i),Kr(t,p)),t=p}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),o=e.getUniformLocation(t,a.name);Ud(a,o,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,o=t.length;a!==o;++a){const i=t[a],l=n[i.id];l.needsUpdate!==!1&&i.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Jr(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let zd=0;function Bd(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=s;o<a;o++){const i=o+1;n.push(`${i===e?">":" "} ${i}: ${t[o]}`)}return n.join(`
`)}function kd(r){switch(r){case Ln:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Qr(r,e,t){const n=r.getShaderParameter(e,35713),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Bd(r.getShaderSource(e),o)}else return s}function Vd(r,e){const t=kd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gd(r,e){let t;switch(e){case jl:t="Linear";break;case Yl:t="Reinhard";break;case Zl:t="OptimizedCineon";break;case $l:t="ACESFilmic";break;case Kl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hd(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ss).join(`
`)}function Wd(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qd(r,e){const t={},n=r.getProgramParameter(e,35721);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),o=a.name;let i=1;a.type===35674&&(i=2),a.type===35675&&(i=3),a.type===35676&&(i=4),t[o]={type:a.type,location:r.getAttribLocation(e,o),locationSize:i}}return t}function Ss(r){return r!==""}function eo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function to(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xd=/^[ \t]*#include +<([\w\d./]+)>/gm;function xi(r){return r.replace(Xd,jd)}function jd(r,e){const t=Me[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xi(t)}const Yd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(r){return r.replace(Yd,Zd)}function Zd(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function so(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $d(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Po?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Cs&&(e="SHADOWMAP_TYPE_VSM"),e}function Kd(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case os:case ls:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jd(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Qd(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Da:e="ENVMAP_BLENDING_MULTIPLY";break;case ql:e="ENVMAP_BLENDING_MIX";break;case Xl:e="ENVMAP_BLENDING_ADD";break}return e}function ef(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tf(r,e,t,n){const s=r.getContext(),a=t.defines;let o=t.vertexShader,i=t.fragmentShader;const l=$d(t),c=Kd(t),u=Jd(t),p=Qd(t),h=ef(t),f=t.isWebGL2?"":Hd(t),g=Wd(a),m=s.createProgram();let d,_,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(Ss).join(`
`),d.length>0&&(d+=`
`),_=[f,g].filter(Ss).join(`
`),_.length>0&&(_+=`
`)):(d=[so(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),_=[f,so(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?Me.tonemapping_pars_fragment:"",t.toneMapping!==nn?Gd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Me.encodings_pars_fragment,Vd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),o=xi(o),o=eo(o,t),o=to(o,t),i=xi(i),i=eo(i,t),i=to(i,t),o=no(o),i=no(i),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["#define varying in",t.glslVersion===Sr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=A+d+o,F=A+_+i,b=Jr(s,35633,D),w=Jr(s,35632,F);if(s.attachShader(m,b),s.attachShader(m,w),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),r.debug.checkShaderErrors){const S=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(b).trim(),X=s.getShaderInfoLog(w).trim();let $=!0,O=!0;if(s.getProgramParameter(m,35714)===!1){$=!1;const P=Qr(s,b,"vertex"),V=Qr(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+P+`
`+V)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(L===""||X==="")&&(O=!1);O&&(this.diagnostics={runnable:$,programLog:S,vertexShader:{log:L,prefix:d},fragmentShader:{log:X,prefix:_}})}s.deleteShader(b),s.deleteShader(w);let R;this.getUniforms=function(){return R===void 0&&(R=new ha(s,m)),R};let y;return this.getAttributes=function(){return y===void 0&&(y=qd(s,m)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=zd++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}let nf=0;class sf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new af(e),t.set(e,n)),n}}class af{constructor(e){this.id=nf++,this.code=e,this.usedTimes=0}}function rf(r,e,t,n,s,a,o){const i=new Wo,l=new sf,c=[],u=s.isWebGL2,p=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,S,L,X,$){const O=X.fog,P=$.geometry,V=y.isMeshStandardMaterial?X.environment:null,Y=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),K=!!Y&&Y.mapping===xa?Y.image.height:null,q=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const J=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=J!==void 0?J.length:0;let B=0;P.morphAttributes.position!==void 0&&(B=1),P.morphAttributes.normal!==void 0&&(B=2),P.morphAttributes.color!==void 0&&(B=3);let z,ne,ee,ie;if(q){const ve=Gt[q];z=ve.vertexShader,ne=ve.fragmentShader}else z=y.vertexShader,ne=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),ie=l.getFragmentShaderID(y);const G=r.getRenderTarget(),Ce=y.alphaTest>0,de=y.clearcoat>0,oe=y.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:y.type,vertexShader:z,fragmentShader:ne,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:ie,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:h,outputEncoding:G===null?r.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Ln,map:!!y.map,matcap:!!y.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===yc,tangentSpaceNormalMap:y.normalMapType===Ti,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ve,clearcoat:de,clearcoatMap:de&&!!y.clearcoatMap,clearcoatRoughnessMap:de&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!y.clearcoatNormalMap,iridescence:oe,iridescenceMap:oe&&!!y.iridescenceMap,iridescenceThicknessMap:oe&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===is,alphaMap:!!y.alphaMap,alphaTest:Ce,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!P.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:p,skinning:$.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:B,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:nn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ei,flipSided:y.side===Nt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(_(S,y),A(S,y),S.push(r.outputEncoding)),S.push(y.customProgramCacheKey),S.join()}function _(y,S){y.push(S.precision),y.push(S.outputEncoding),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.combine),y.push(S.vertexUvs),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function A(y,S){i.disableAll(),S.isWebGL2&&i.enable(0),S.supportsVertexTextures&&i.enable(1),S.instancing&&i.enable(2),S.instancingColor&&i.enable(3),S.map&&i.enable(4),S.matcap&&i.enable(5),S.envMap&&i.enable(6),S.lightMap&&i.enable(7),S.aoMap&&i.enable(8),S.emissiveMap&&i.enable(9),S.bumpMap&&i.enable(10),S.normalMap&&i.enable(11),S.objectSpaceNormalMap&&i.enable(12),S.tangentSpaceNormalMap&&i.enable(13),S.clearcoat&&i.enable(14),S.clearcoatMap&&i.enable(15),S.clearcoatRoughnessMap&&i.enable(16),S.clearcoatNormalMap&&i.enable(17),S.iridescence&&i.enable(18),S.iridescenceMap&&i.enable(19),S.iridescenceThicknessMap&&i.enable(20),S.displacementMap&&i.enable(21),S.specularMap&&i.enable(22),S.roughnessMap&&i.enable(23),S.metalnessMap&&i.enable(24),S.gradientMap&&i.enable(25),S.alphaMap&&i.enable(26),S.alphaTest&&i.enable(27),S.vertexColors&&i.enable(28),S.vertexAlphas&&i.enable(29),S.vertexUvs&&i.enable(30),S.vertexTangents&&i.enable(31),S.uvsVertexOnly&&i.enable(32),y.push(i.mask),i.disableAll(),S.fog&&i.enable(0),S.useFog&&i.enable(1),S.flatShading&&i.enable(2),S.logarithmicDepthBuffer&&i.enable(3),S.skinning&&i.enable(4),S.morphTargets&&i.enable(5),S.morphNormals&&i.enable(6),S.morphColors&&i.enable(7),S.premultipliedAlpha&&i.enable(8),S.shadowMapEnabled&&i.enable(9),S.physicallyCorrectLights&&i.enable(10),S.doubleSided&&i.enable(11),S.flipSided&&i.enable(12),S.useDepthPacking&&i.enable(13),S.dithering&&i.enable(14),S.specularIntensityMap&&i.enable(15),S.specularColorMap&&i.enable(16),S.transmission&&i.enable(17),S.transmissionMap&&i.enable(18),S.thicknessMap&&i.enable(19),S.sheen&&i.enable(20),S.sheenColorMap&&i.enable(21),S.sheenRoughnessMap&&i.enable(22),S.decodeVideoTexture&&i.enable(23),S.opaque&&i.enable(24),y.push(i.mask)}function D(y){const S=g[y.type];let L;if(S){const X=Gt[S];L=qc.clone(X.uniforms)}else L=y.uniforms;return L}function F(y,S){let L;for(let X=0,$=c.length;X<$;X++){const O=c[X];if(O.cacheKey===S){L=O,++L.usedTimes;break}}return L===void 0&&(L=new tf(r,S,y,a),c.push(L)),L}function b(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:D,acquireProgram:F,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:R}}function of(){let r=new WeakMap;function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function t(a){r.delete(a)}function n(a,o,i){r.get(a)[o]=i}function s(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function lf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ao(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function io(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function o(p,h,f,g,m,d){let _=r[e];return _===void 0?(_={id:p.id,object:p,geometry:h,material:f,groupOrder:g,renderOrder:p.renderOrder,z:m,group:d},r[e]=_):(_.id=p.id,_.object=p,_.geometry=h,_.material=f,_.groupOrder=g,_.renderOrder=p.renderOrder,_.z=m,_.group=d),e++,_}function i(p,h,f,g,m,d){const _=o(p,h,f,g,m,d);f.transmission>0?n.push(_):f.transparent===!0?s.push(_):t.push(_)}function l(p,h,f,g,m,d){const _=o(p,h,f,g,m,d);f.transmission>0?n.unshift(_):f.transparent===!0?s.unshift(_):t.unshift(_)}function c(p,h){t.length>1&&t.sort(p||lf),n.length>1&&n.sort(h||ao),s.length>1&&s.sort(h||ao)}function u(){for(let p=e,h=r.length;p<h;p++){const f=r[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:i,unshift:l,finish:u,sort:c}}function cf(){let r=new WeakMap;function e(n,s){const a=r.get(n);let o;return a===void 0?(o=new io,r.set(n,[o])):s>=a.length?(o=new io,a.push(o)):o=a[s],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function pf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new we};break;case"SpotLight":t={position:new T,direction:new T,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new T,halfWidth:new T,halfHeight:new T};break}return r[e.id]=t,t}}}function uf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let hf=0;function df(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ff(r,e){const t=new pf,n=uf(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new T);const a=new T,o=new xe,i=new xe;function l(u,p){let h=0,f=0,g=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let m=0,d=0,_=0,A=0,D=0,F=0,b=0,w=0,R=0,y=0;u.sort(df);const S=p!==!0?Math.PI:1;for(let X=0,$=u.length;X<$;X++){const O=u[X],P=O.color,V=O.intensity,Y=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=P.r*V*S,f+=P.g*V*S,g+=P.b*V*S;else if(O.isLightProbe)for(let q=0;q<9;q++)s.probe[q].addScaledVector(O.sh.coefficients[q],V);else if(O.isDirectionalLight){const q=t.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const J=O.shadow,Z=n.get(O);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,s.directionalShadow[m]=Z,s.directionalShadowMap[m]=K,s.directionalShadowMatrix[m]=O.shadow.matrix,F++}s.directional[m]=q,m++}else if(O.isSpotLight){const q=t.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(P).multiplyScalar(V*S),q.distance=Y,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,s.spot[_]=q;const J=O.shadow;if(O.map&&(s.spotLightMap[R]=O.map,R++,J.updateMatrices(O),O.castShadow&&y++),s.spotLightMatrix[_]=J.matrix,O.castShadow){const Z=n.get(O);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,s.spotShadow[_]=Z,s.spotShadowMap[_]=K,w++}_++}else if(O.isRectAreaLight){const q=t.get(O);q.color.copy(P).multiplyScalar(V),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),s.rectArea[A]=q,A++}else if(O.isPointLight){const q=t.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*S),q.distance=O.distance,q.decay=O.decay,O.castShadow){const J=O.shadow,Z=n.get(O);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,s.pointShadow[d]=Z,s.pointShadowMap[d]=K,s.pointShadowMatrix[d]=O.shadow.matrix,b++}s.point[d]=q,d++}else if(O.isHemisphereLight){const q=t.get(O);q.skyColor.copy(O.color).multiplyScalar(V*S),q.groundColor.copy(O.groundColor).multiplyScalar(V*S),s.hemi[D]=q,D++}}A>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=g;const L=s.hash;(L.directionalLength!==m||L.pointLength!==d||L.spotLength!==_||L.rectAreaLength!==A||L.hemiLength!==D||L.numDirectionalShadows!==F||L.numPointShadows!==b||L.numSpotShadows!==w||L.numSpotMaps!==R)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=A,s.point.length=d,s.hemi.length=D,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=b,s.spotLightMatrix.length=w+R-y,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=y,L.directionalLength=m,L.pointLength=d,L.spotLength=_,L.rectAreaLength=A,L.hemiLength=D,L.numDirectionalShadows=F,L.numPointShadows=b,L.numSpotShadows=w,L.numSpotMaps=R,s.version=hf++)}function c(u,p){let h=0,f=0,g=0,m=0,d=0;const _=p.matrixWorldInverse;for(let A=0,D=u.length;A<D;A++){const F=u[A];if(F.isDirectionalLight){const b=s.directional[h];b.direction.setFromMatrixPosition(F.matrixWorld),a.setFromMatrixPosition(F.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(_),h++}else if(F.isSpotLight){const b=s.spot[g];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(F.matrixWorld),a.setFromMatrixPosition(F.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(_),g++}else if(F.isRectAreaLight){const b=s.rectArea[m];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(_),i.identity(),o.copy(F.matrixWorld),o.premultiply(_),i.extractRotation(o),b.halfWidth.set(F.width*.5,0,0),b.halfHeight.set(0,F.height*.5,0),b.halfWidth.applyMatrix4(i),b.halfHeight.applyMatrix4(i),m++}else if(F.isPointLight){const b=s.point[f];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(_),f++}else if(F.isHemisphereLight){const b=s.hemi[d];b.direction.setFromMatrixPosition(F.matrixWorld),b.direction.transformDirection(_),d++}}}return{setup:l,setupView:c,state:s}}function ro(r,e){const t=new ff(r,e),n=[],s=[];function a(){n.length=0,s.length=0}function o(p){n.push(p)}function i(p){s.push(p)}function l(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:i}}function mf(r,e){let t=new WeakMap;function n(a,o=0){const i=t.get(a);let l;return i===void 0?(l=new ro(r,e),t.set(a,[l])):o>=i.length?(l=new ro(r,e),i.push(l)):l=i[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class gf extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yf extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _f=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Df=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xf(r,e,t){let n=new Ri;const s=new Ae,a=new Ae,o=new ze,i=new gf({depthPacking:gc}),l=new yf,c={},u=t.maxTextureSize,p={0:Nt,1:En,2:Ei},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:_f,fragmentShader:Df}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new It(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo,this.render=function(F,b,w){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||F.length===0)return;const R=r.getRenderTarget(),y=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),L=r.state;L.setBlending(dn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let X=0,$=F.length;X<$;X++){const O=F[X],P=O.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const V=P.getFrameExtents();if(s.multiply(V),a.copy(P.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/V.x),s.x=a.x*V.x,P.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/V.y),s.y=a.y*V.y,P.mapSize.y=a.y)),P.map===null){const K=this.type!==Cs?{minFilter:rt,magFilter:rt}:{};P.map=new Pn(s.x,s.y,K),P.map.texture.name=O.name+".shadowMap",P.camera.updateProjectionMatrix()}r.setRenderTarget(P.map),r.clear();const Y=P.getViewportCount();for(let K=0;K<Y;K++){const q=P.getViewport(K);o.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),L.viewport(o),P.updateMatrices(O,K),n=P.getFrustum(),D(b,w,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===Cs&&_(P,w),P.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(R,y,S)};function _(F,b){const w=e.update(m);h.defines.VSM_SAMPLES!==F.blurSamples&&(h.defines.VSM_SAMPLES=F.blurSamples,f.defines.VSM_SAMPLES=F.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Pn(s.x,s.y)),h.uniforms.shadow_pass.value=F.map.texture,h.uniforms.resolution.value=F.mapSize,h.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(b,null,w,h,m,null),f.uniforms.shadow_pass.value=F.mapPass.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(b,null,w,f,m,null)}function A(F,b,w,R,y,S){let L=null;const X=w.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(X!==void 0)L=X;else if(L=w.isPointLight===!0?l:i,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const $=L.uuid,O=b.uuid;let P=c[$];P===void 0&&(P={},c[$]=P);let V=P[O];V===void 0&&(V=L.clone(),P[O]=V),L=V}return L.visible=b.visible,L.wireframe=b.wireframe,S===Cs?L.side=b.shadowSide!==null?b.shadowSide:b.side:L.side=b.shadowSide!==null?b.shadowSide:p[b.side],L.alphaMap=b.alphaMap,L.alphaTest=b.alphaTest,L.map=b.map,L.clipShadows=b.clipShadows,L.clippingPlanes=b.clippingPlanes,L.clipIntersection=b.clipIntersection,L.displacementMap=b.displacementMap,L.displacementScale=b.displacementScale,L.displacementBias=b.displacementBias,L.wireframeLinewidth=b.wireframeLinewidth,L.linewidth=b.linewidth,w.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(w.matrixWorld),L.nearDistance=R,L.farDistance=y),L}function D(F,b,w,R,y){if(F.visible===!1)return;if(F.layers.test(b.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&y===Cs)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,F.matrixWorld);const X=e.update(F),$=F.material;if(Array.isArray($)){const O=X.groups;for(let P=0,V=O.length;P<V;P++){const Y=O[P],K=$[Y.materialIndex];if(K&&K.visible){const q=A(F,K,R,w.near,w.far,y);r.renderBufferDirect(w,null,X,q,F,Y)}}}else if($.visible){const O=A(F,$,R,w.near,w.far,y);r.renderBufferDirect(w,null,X,O,F,null)}}const L=F.children;for(let X=0,$=L.length;X<$;X++)D(L[X],b,w,R,y)}}function Ff(r,e,t){const n=t.isWebGL2;function s(){let E=!1;const H=new ze;let Q=null;const he=new ze(0,0,0,0);return{setMask:function(_e){Q!==_e&&!E&&(r.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){E=_e},setClear:function(_e,Be,st,ct,mn){mn===!0&&(_e*=ct,Be*=ct,st*=ct),H.set(_e,Be,st,ct),he.equals(H)===!1&&(r.clearColor(_e,Be,st,ct),he.copy(H))},reset:function(){E=!1,Q=null,he.set(-1,0,0,0)}}}function a(){let E=!1,H=null,Q=null,he=null;return{setTest:function(_e){_e?Ce(2929):de(2929)},setMask:function(_e){H!==_e&&!E&&(r.depthMask(_e),H=_e)},setFunc:function(_e){if(Q!==_e){switch(_e){case zl:r.depthFunc(512);break;case Bl:r.depthFunc(519);break;case kl:r.depthFunc(513);break;case mi:r.depthFunc(515);break;case Vl:r.depthFunc(514);break;case Gl:r.depthFunc(518);break;case Hl:r.depthFunc(516);break;case Wl:r.depthFunc(517);break;default:r.depthFunc(515)}Q=_e}},setLocked:function(_e){E=_e},setClear:function(_e){he!==_e&&(r.clearDepth(_e),he=_e)},reset:function(){E=!1,H=null,Q=null,he=null}}}function o(){let E=!1,H=null,Q=null,he=null,_e=null,Be=null,st=null,ct=null,mn=null;return{setTest:function(qe){E||(qe?Ce(2960):de(2960))},setMask:function(qe){H!==qe&&!E&&(r.stencilMask(qe),H=qe)},setFunc:function(qe,jt,wt){(Q!==qe||he!==jt||_e!==wt)&&(r.stencilFunc(qe,jt,wt),Q=qe,he=jt,_e=wt)},setOp:function(qe,jt,wt){(Be!==qe||st!==jt||ct!==wt)&&(r.stencilOp(qe,jt,wt),Be=qe,st=jt,ct=wt)},setLocked:function(qe){E=qe},setClear:function(qe){mn!==qe&&(r.clearStencil(qe),mn=qe)},reset:function(){E=!1,H=null,Q=null,he=null,_e=null,Be=null,st=null,ct=null,mn=null}}}const i=new s,l=new a,c=new o,u=new WeakMap,p=new WeakMap;let h={},f={},g=new WeakMap,m=[],d=null,_=!1,A=null,D=null,F=null,b=null,w=null,R=null,y=null,S=!1,L=null,X=null,$=null,O=null,P=null;const V=r.getParameter(35661);let Y=!1,K=0;const q=r.getParameter(7938);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=K>=2);let J=null,Z={};const B=r.getParameter(3088),z=r.getParameter(2978),ne=new ze().fromArray(B),ee=new ze().fromArray(z);function ie(E,H,Q){const he=new Uint8Array(4),_e=r.createTexture();r.bindTexture(E,_e),r.texParameteri(E,10241,9728),r.texParameteri(E,10240,9728);for(let Be=0;Be<Q;Be++)r.texImage2D(H+Be,0,6408,1,1,0,6408,5121,he);return _e}const G={};G[3553]=ie(3553,3553,1),G[34067]=ie(34067,34069,6),i.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(2929),l.setFunc(mi),Qe(!1),ht(Zi),Ce(2884),He(dn);function Ce(E){h[E]!==!0&&(r.enable(E),h[E]=!0)}function de(E){h[E]!==!1&&(r.disable(E),h[E]=!1)}function oe(E,H){return f[E]!==H?(r.bindFramebuffer(E,H),f[E]=H,n&&(E===36009&&(f[36160]=H),E===36160&&(f[36009]=H)),!0):!1}function se(E,H){let Q=m,he=!1;if(E)if(Q=g.get(H),Q===void 0&&(Q=[],g.set(H,Q)),E.isWebGLMultipleRenderTargets){const _e=E.texture;if(Q.length!==_e.length||Q[0]!==36064){for(let Be=0,st=_e.length;Be<st;Be++)Q[Be]=36064+Be;Q.length=_e.length,he=!0}}else Q[0]!==36064&&(Q[0]=36064,he=!0);else Q[0]!==1029&&(Q[0]=1029,he=!0);he&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function ve(E){return d!==E?(r.useProgram(E),d=E,!0):!1}const ue={[es]:32774,[Sl]:32778,[wl]:32779};if(n)ue[Qi]=32775,ue[er]=32776;else{const E=e.get("EXT_blend_minmax");E!==null&&(ue[Qi]=E.MIN_EXT,ue[er]=E.MAX_EXT)}const me={[El]:0,[Tl]:1,[Ll]:768,[Ro]:770,[Ul]:776,[Nl]:774,[Rl]:772,[Pl]:769,[Io]:771,[Ol]:775,[Il]:773};function He(E,H,Q,he,_e,Be,st,ct){if(E===dn){_===!0&&(de(3042),_=!1);return}if(_===!1&&(Ce(3042),_=!0),E!==Ml){if(E!==A||ct!==S){if((D!==es||w!==es)&&(r.blendEquation(32774),D=es,w=es),ct)switch(E){case is:r.blendFuncSeparate(1,771,1,771);break;case $i:r.blendFunc(1,1);break;case Ki:r.blendFuncSeparate(0,769,0,1);break;case Ji:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case is:r.blendFuncSeparate(770,771,1,771);break;case $i:r.blendFunc(770,1);break;case Ki:r.blendFuncSeparate(0,769,0,1);break;case Ji:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}F=null,b=null,R=null,y=null,A=E,S=ct}return}_e=_e||H,Be=Be||Q,st=st||he,(H!==D||_e!==w)&&(r.blendEquationSeparate(ue[H],ue[_e]),D=H,w=_e),(Q!==F||he!==b||Be!==R||st!==y)&&(r.blendFuncSeparate(me[Q],me[he],me[Be],me[st]),F=Q,b=he,R=Be,y=st),A=E,S=!1}function Je(E,H){E.side===Ei?de(2884):Ce(2884);let Q=E.side===Nt;H&&(Q=!Q),Qe(Q),E.blending===is&&E.transparent===!1?He(dn):He(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),l.setFunc(E.depthFunc),l.setTest(E.depthTest),l.setMask(E.depthWrite),i.setMask(E.colorWrite);const he=E.stencilWrite;c.setTest(he),he&&(c.setMask(E.stencilWriteMask),c.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),c.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),ke(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Ce(32926):de(32926)}function Qe(E){L!==E&&(E?r.frontFace(2304):r.frontFace(2305),L=E)}function ht(E){E!==Al?(Ce(2884),E!==X&&(E===Zi?r.cullFace(1029):E===Cl?r.cullFace(1028):r.cullFace(1032))):de(2884),X=E}function je(E){E!==$&&(Y&&r.lineWidth(E),$=E)}function ke(E,H,Q){E?(Ce(32823),(O!==H||P!==Q)&&(r.polygonOffset(H,Q),O=H,P=Q)):de(32823)}function St(E){E?Ce(3089):de(3089)}function gt(E){E===void 0&&(E=33984+V-1),J!==E&&(r.activeTexture(E),J=E)}function C(E,H,Q){Q===void 0&&(J===null?Q=33984+V-1:Q=J);let he=Z[Q];he===void 0&&(he={type:void 0,texture:void 0},Z[Q]=he),(he.type!==E||he.texture!==H)&&(J!==Q&&(r.activeTexture(Q),J=Q),r.bindTexture(E,H||G[E]),he.type=E,he.texture=H)}function x(){const E=Z[J];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function k(){try{r.compressedTexImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ae(){try{r.texSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function M(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function I(){try{r.texStorage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function pe(){try{r.texStorage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ce(){try{r.texImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ye(E){ne.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),ne.copy(E))}function ge(E){ee.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),ee.copy(E))}function Le(E,H){let Q=p.get(H);Q===void 0&&(Q=new WeakMap,p.set(H,Q));let he=Q.get(E);he===void 0&&(he=r.getUniformBlockIndex(H,E.name),Q.set(E,he))}function Pe(E,H){const he=p.get(H).get(E);u.get(H)!==he&&(r.uniformBlockBinding(H,he,E.__bindingPointIndex),u.set(H,he))}function Ge(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,Z={},f={},g=new WeakMap,m=[],d=null,_=!1,A=null,D=null,F=null,b=null,w=null,R=null,y=null,S=!1,L=null,X=null,$=null,O=null,P=null,ne.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),i.reset(),l.reset(),c.reset()}return{buffers:{color:i,depth:l,stencil:c},enable:Ce,disable:de,bindFramebuffer:oe,drawBuffers:se,useProgram:ve,setBlending:He,setMaterial:Je,setFlipSided:Qe,setCullFace:ht,setLineWidth:je,setPolygonOffset:ke,setScissorTest:St,activeTexture:gt,bindTexture:C,unbindTexture:x,compressedTexImage2D:k,compressedTexImage3D:te,texImage2D:fe,texImage3D:ce,updateUBOMapping:Le,uniformBlockBinding:Pe,texStorage2D:I,texStorage3D:pe,texSubImage2D:ae,texSubImage3D:le,compressedTexSubImage2D:Fe,compressedTexSubImage3D:M,scissor:ye,viewport:ge,reset:Ge}}function vf(r,e,t,n,s,a,o){const i=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,p=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(C,x){return _?new OffscreenCanvas(C,x):Us("canvas")}function D(C,x,k,te){let ae=1;if((C.width>te||C.height>te)&&(ae=te/Math.max(C.width,C.height)),ae<1||x===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const le=x?ya:Math.floor,Fe=le(ae*C.width),M=le(ae*C.height);m===void 0&&(m=A(Fe,M));const I=k?A(Fe,M):m;return I.width=Fe,I.height=M,I.getContext("2d").drawImage(C,0,0,Fe,M),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Fe+"x"+M+")."),I}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function F(C){return Di(C.width)&&Di(C.height)}function b(C){return i?!1:C.wrapS!==Ct||C.wrapT!==Ct||C.minFilter!==rt&&C.minFilter!==Tt}function w(C,x){return C.generateMipmaps&&x&&C.minFilter!==rt&&C.minFilter!==Tt}function R(C){r.generateMipmap(C)}function y(C,x,k,te,ae=!1){if(i===!1)return x;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le=x;return x===6403&&(k===5126&&(le=33326),k===5131&&(le=33325),k===5121&&(le=33321)),x===33319&&(k===5126&&(le=33328),k===5131&&(le=33327),k===5121&&(le=33323)),x===6408&&(k===5126&&(le=34836),k===5131&&(le=34842),k===5121&&(le=te===Ve&&ae===!1?35907:32856),k===32819&&(le=32854),k===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function S(C,x,k){return w(C,k)===!0||C.isFramebufferTexture&&C.minFilter!==rt&&C.minFilter!==Tt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function L(C){return C===rt||C===tr||C===Ta?9728:9729}function X(C){const x=C.target;x.removeEventListener("dispose",X),O(x),x.isVideoTexture&&g.delete(x)}function $(C){const x=C.target;x.removeEventListener("dispose",$),V(x)}function O(C){const x=n.get(C);if(x.__webglInit===void 0)return;const k=C.source,te=d.get(k);if(te){const ae=te[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&P(C),Object.keys(te).length===0&&d.delete(k)}n.remove(C)}function P(C){const x=n.get(C);r.deleteTexture(x.__webglTexture);const k=C.source,te=d.get(k);delete te[x.__cacheKey],o.memory.textures--}function V(C){const x=C.texture,k=n.get(C),te=n.get(x);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)r.deleteFramebuffer(k.__webglFramebuffer[ae]),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[ae]);else{if(r.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ae=0;ae<k.__webglColorRenderbuffer.length;ae++)k.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[ae]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ae=0,le=x.length;ae<le;ae++){const Fe=n.get(x[ae]);Fe.__webglTexture&&(r.deleteTexture(Fe.__webglTexture),o.memory.textures--),n.remove(x[ae])}n.remove(x),n.remove(C)}let Y=0;function K(){Y=0}function q(){const C=Y;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Y+=1,C}function J(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.encoding),x.join()}function Z(C,x){const k=n.get(C);if(C.isVideoTexture&&St(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(k,C,x);return}}t.bindTexture(3553,k.__webglTexture,33984+x)}function B(C,x){const k=n.get(C);if(C.version>0&&k.__version!==C.version){de(k,C,x);return}t.bindTexture(35866,k.__webglTexture,33984+x)}function z(C,x){const k=n.get(C);if(C.version>0&&k.__version!==C.version){de(k,C,x);return}t.bindTexture(32879,k.__webglTexture,33984+x)}function ne(C,x){const k=n.get(C);if(C.version>0&&k.__version!==C.version){oe(k,C,x);return}t.bindTexture(34067,k.__webglTexture,33984+x)}const ee={[Ps]:10497,[Ct]:33071,[yi]:33648},ie={[rt]:9728,[tr]:9984,[Ta]:9986,[Tt]:9729,[Jl]:9985,[Rs]:9987};function G(C,x,k){if(k?(r.texParameteri(C,10242,ee[x.wrapS]),r.texParameteri(C,10243,ee[x.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,ee[x.wrapR]),r.texParameteri(C,10240,ie[x.magFilter]),r.texParameteri(C,10241,ie[x.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(x.wrapS!==Ct||x.wrapT!==Ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,L(x.magFilter)),r.texParameteri(C,10241,L(x.minFilter)),x.minFilter!==rt&&x.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===rt||x.minFilter!==Ta&&x.minFilter!==Rs||x.type===un&&e.has("OES_texture_float_linear")===!1||i===!1&&x.type===Is&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Ce(C,x){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",X));const te=x.source;let ae=d.get(te);ae===void 0&&(ae={},d.set(te,ae));const le=J(x);if(le!==C.__cacheKey){ae[le]===void 0&&(ae[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ae[le].usedTimes++;const Fe=ae[C.__cacheKey];Fe!==void 0&&(ae[C.__cacheKey].usedTimes--,Fe.usedTimes===0&&P(x)),C.__cacheKey=le,C.__webglTexture=ae[le].texture}return k}function de(C,x,k){let te=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=35866),x.isData3DTexture&&(te=32879);const ae=Ce(C,x),le=x.source;t.bindTexture(te,C.__webglTexture,33984+k);const Fe=n.get(le);if(le.version!==Fe.__version||ae===!0){t.activeTexture(33984+k),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const M=b(x)&&F(x.image)===!1;let I=D(x.image,M,!1,u);I=gt(x,I);const pe=F(I)||i,fe=a.convert(x.format,x.encoding);let ce=a.convert(x.type),ye=y(x.internalFormat,fe,ce,x.encoding,x.isVideoTexture);G(te,x,pe);let ge;const Le=x.mipmaps,Pe=i&&x.isVideoTexture!==!0,Ge=Fe.__version===void 0||ae===!0,E=S(x,I,pe);if(x.isDepthTexture)ye=6402,i?x.type===un?ye=36012:x.type===Mn?ye=33190:x.type===rs?ye=35056:ye=33189:x.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Sn&&ye===6402&&x.type!==Oo&&x.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mn,ce=a.convert(x.type)),x.format===cs&&ye===6402&&(ye=34041,x.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=rs,ce=a.convert(x.type))),Ge&&(Pe?t.texStorage2D(3553,1,ye,I.width,I.height):t.texImage2D(3553,0,ye,I.width,I.height,0,fe,ce,null));else if(x.isDataTexture)if(Le.length>0&&pe){Pe&&Ge&&t.texStorage2D(3553,E,ye,Le[0].width,Le[0].height);for(let H=0,Q=Le.length;H<Q;H++)ge=Le[H],Pe?t.texSubImage2D(3553,H,0,0,ge.width,ge.height,fe,ce,ge.data):t.texImage2D(3553,H,ye,ge.width,ge.height,0,fe,ce,ge.data);x.generateMipmaps=!1}else Pe?(Ge&&t.texStorage2D(3553,E,ye,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,fe,ce,I.data)):t.texImage2D(3553,0,ye,I.width,I.height,0,fe,ce,I.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pe&&Ge&&t.texStorage3D(35866,E,ye,Le[0].width,Le[0].height,I.depth);for(let H=0,Q=Le.length;H<Q;H++)ge=Le[H],x.format!==Lt?fe!==null?Pe?t.compressedTexSubImage3D(35866,H,0,0,0,ge.width,ge.height,I.depth,fe,ge.data,0,0):t.compressedTexImage3D(35866,H,ye,ge.width,ge.height,I.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,H,0,0,0,ge.width,ge.height,I.depth,fe,ce,ge.data):t.texImage3D(35866,H,ye,ge.width,ge.height,I.depth,0,fe,ce,ge.data)}else{Pe&&Ge&&t.texStorage2D(3553,E,ye,Le[0].width,Le[0].height);for(let H=0,Q=Le.length;H<Q;H++)ge=Le[H],x.format!==Lt?fe!==null?Pe?t.compressedTexSubImage2D(3553,H,0,0,ge.width,ge.height,fe,ge.data):t.compressedTexImage2D(3553,H,ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,H,0,0,ge.width,ge.height,fe,ce,ge.data):t.texImage2D(3553,H,ye,ge.width,ge.height,0,fe,ce,ge.data)}else if(x.isDataArrayTexture)Pe?(Ge&&t.texStorage3D(35866,E,ye,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,fe,ce,I.data)):t.texImage3D(35866,0,ye,I.width,I.height,I.depth,0,fe,ce,I.data);else if(x.isData3DTexture)Pe?(Ge&&t.texStorage3D(32879,E,ye,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,fe,ce,I.data)):t.texImage3D(32879,0,ye,I.width,I.height,I.depth,0,fe,ce,I.data);else if(x.isFramebufferTexture){if(Ge)if(Pe)t.texStorage2D(3553,E,ye,I.width,I.height);else{let H=I.width,Q=I.height;for(let he=0;he<E;he++)t.texImage2D(3553,he,ye,H,Q,0,fe,ce,null),H>>=1,Q>>=1}}else if(Le.length>0&&pe){Pe&&Ge&&t.texStorage2D(3553,E,ye,Le[0].width,Le[0].height);for(let H=0,Q=Le.length;H<Q;H++)ge=Le[H],Pe?t.texSubImage2D(3553,H,0,0,fe,ce,ge):t.texImage2D(3553,H,ye,fe,ce,ge);x.generateMipmaps=!1}else Pe?(Ge&&t.texStorage2D(3553,E,ye,I.width,I.height),t.texSubImage2D(3553,0,0,0,fe,ce,I)):t.texImage2D(3553,0,ye,fe,ce,I);w(x,pe)&&R(te),Fe.__version=le.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function oe(C,x,k){if(x.image.length!==6)return;const te=Ce(C,x),ae=x.source;t.bindTexture(34067,C.__webglTexture,33984+k);const le=n.get(ae);if(ae.version!==le.__version||te===!0){t.activeTexture(33984+k),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const Fe=x.isCompressedTexture||x.image[0].isCompressedTexture,M=x.image[0]&&x.image[0].isDataTexture,I=[];for(let H=0;H<6;H++)!Fe&&!M?I[H]=D(x.image[H],!1,!0,c):I[H]=M?x.image[H].image:x.image[H],I[H]=gt(x,I[H]);const pe=I[0],fe=F(pe)||i,ce=a.convert(x.format,x.encoding),ye=a.convert(x.type),ge=y(x.internalFormat,ce,ye,x.encoding),Le=i&&x.isVideoTexture!==!0,Pe=le.__version===void 0||te===!0;let Ge=S(x,pe,fe);G(34067,x,fe);let E;if(Fe){Le&&Pe&&t.texStorage2D(34067,Ge,ge,pe.width,pe.height);for(let H=0;H<6;H++){E=I[H].mipmaps;for(let Q=0;Q<E.length;Q++){const he=E[Q];x.format!==Lt?ce!==null?Le?t.compressedTexSubImage2D(34069+H,Q,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(34069+H,Q,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+H,Q,0,0,he.width,he.height,ce,ye,he.data):t.texImage2D(34069+H,Q,ge,he.width,he.height,0,ce,ye,he.data)}}}else{E=x.mipmaps,Le&&Pe&&(E.length>0&&Ge++,t.texStorage2D(34067,Ge,ge,I[0].width,I[0].height));for(let H=0;H<6;H++)if(M){Le?t.texSubImage2D(34069+H,0,0,0,I[H].width,I[H].height,ce,ye,I[H].data):t.texImage2D(34069+H,0,ge,I[H].width,I[H].height,0,ce,ye,I[H].data);for(let Q=0;Q<E.length;Q++){const _e=E[Q].image[H].image;Le?t.texSubImage2D(34069+H,Q+1,0,0,_e.width,_e.height,ce,ye,_e.data):t.texImage2D(34069+H,Q+1,ge,_e.width,_e.height,0,ce,ye,_e.data)}}else{Le?t.texSubImage2D(34069+H,0,0,0,ce,ye,I[H]):t.texImage2D(34069+H,0,ge,ce,ye,I[H]);for(let Q=0;Q<E.length;Q++){const he=E[Q];Le?t.texSubImage2D(34069+H,Q+1,0,0,ce,ye,he.image[H]):t.texImage2D(34069+H,Q+1,ge,ce,ye,he.image[H])}}}w(x,fe)&&R(34067),le.__version=ae.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function se(C,x,k,te,ae){const le=a.convert(k.format,k.encoding),Fe=a.convert(k.type),M=y(k.internalFormat,le,Fe,k.encoding);n.get(x).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,M,x.width,x.height,x.depth,0,le,Fe,null):t.texImage2D(ae,0,M,x.width,x.height,0,le,Fe,null)),t.bindFramebuffer(36160,C),ke(x)?h.framebufferTexture2DMultisampleEXT(36160,te,ae,n.get(k).__webglTexture,0,je(x)):(ae===3553||ae>=34069&&ae<=34074)&&r.framebufferTexture2D(36160,te,ae,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(C,x,k){if(r.bindRenderbuffer(36161,C),x.depthBuffer&&!x.stencilBuffer){let te=33189;if(k||ke(x)){const ae=x.depthTexture;ae&&ae.isDepthTexture&&(ae.type===un?te=36012:ae.type===Mn&&(te=33190));const le=je(x);ke(x)?h.renderbufferStorageMultisampleEXT(36161,le,te,x.width,x.height):r.renderbufferStorageMultisample(36161,le,te,x.width,x.height)}else r.renderbufferStorage(36161,te,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(x.depthBuffer&&x.stencilBuffer){const te=je(x);k&&ke(x)===!1?r.renderbufferStorageMultisample(36161,te,35056,x.width,x.height):ke(x)?h.renderbufferStorageMultisampleEXT(36161,te,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const te=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ae=0;ae<te.length;ae++){const le=te[ae],Fe=a.convert(le.format,le.encoding),M=a.convert(le.type),I=y(le.internalFormat,Fe,M,le.encoding),pe=je(x);k&&ke(x)===!1?r.renderbufferStorageMultisample(36161,pe,I,x.width,x.height):ke(x)?h.renderbufferStorageMultisampleEXT(36161,pe,I,x.width,x.height):r.renderbufferStorage(36161,I,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function ue(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const te=n.get(x.depthTexture).__webglTexture,ae=je(x);if(x.depthTexture.format===Sn)ke(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ae):r.framebufferTexture2D(36160,36096,3553,te,0);else if(x.depthTexture.format===cs)ke(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ae):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function me(C){const x=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ue(x.__webglFramebuffer,C)}else if(k){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=r.createRenderbuffer(),ve(x.__webglDepthbuffer[te],C,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),ve(x.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function He(C,x,k){const te=n.get(C);x!==void 0&&se(te.__webglFramebuffer,C,C.texture,36064,3553),k!==void 0&&me(C)}function Je(C){const x=C.texture,k=n.get(C),te=n.get(x);C.addEventListener("dispose",$),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=x.version,o.memory.textures++);const ae=C.isWebGLCubeRenderTarget===!0,le=C.isWebGLMultipleRenderTargets===!0,Fe=F(C)||i;if(ae){k.__webglFramebuffer=[];for(let M=0;M<6;M++)k.__webglFramebuffer[M]=r.createFramebuffer()}else{if(k.__webglFramebuffer=r.createFramebuffer(),le)if(s.drawBuffers){const M=C.texture;for(let I=0,pe=M.length;I<pe;I++){const fe=n.get(M[I]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&C.samples>0&&ke(C)===!1){const M=le?x:[x];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let I=0;I<M.length;I++){const pe=M[I];k.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(36161,k.__webglColorRenderbuffer[I]);const fe=a.convert(pe.format,pe.encoding),ce=a.convert(pe.type),ye=y(pe.internalFormat,fe,ce,pe.encoding,C.isXRRenderTarget===!0),ge=je(C);r.renderbufferStorageMultisample(36161,ge,ye,C.width,C.height),r.framebufferRenderbuffer(36160,36064+I,36161,k.__webglColorRenderbuffer[I])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,te.__webglTexture),G(34067,x,Fe);for(let M=0;M<6;M++)se(k.__webglFramebuffer[M],C,x,36064,34069+M);w(x,Fe)&&R(34067),t.unbindTexture()}else if(le){const M=C.texture;for(let I=0,pe=M.length;I<pe;I++){const fe=M[I],ce=n.get(fe);t.bindTexture(3553,ce.__webglTexture),G(3553,fe,Fe),se(k.__webglFramebuffer,C,fe,36064+I,3553),w(fe,Fe)&&R(3553)}t.unbindTexture()}else{let M=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(i?M=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(M,te.__webglTexture),G(M,x,Fe),se(k.__webglFramebuffer,C,x,36064,M),w(x,Fe)&&R(M),t.unbindTexture()}C.depthBuffer&&me(C)}function Qe(C){const x=F(C)||i,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ae=k.length;te<ae;te++){const le=k[te];if(w(le,x)){const Fe=C.isWebGLCubeRenderTarget?34067:3553,M=n.get(le).__webglTexture;t.bindTexture(Fe,M),R(Fe),t.unbindTexture()}}}function ht(C){if(i&&C.samples>0&&ke(C)===!1){const x=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],k=C.width,te=C.height;let ae=16384;const le=[],Fe=C.stencilBuffer?33306:36096,M=n.get(C),I=C.isWebGLMultipleRenderTargets===!0;if(I)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,M.__webglFramebuffer),r.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,M.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,M.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){le.push(36064+pe),C.depthBuffer&&le.push(Fe);const fe=M.__ignoreDepthValues!==void 0?M.__ignoreDepthValues:!1;if(fe===!1&&(C.depthBuffer&&(ae|=256),C.stencilBuffer&&(ae|=1024)),I&&r.framebufferRenderbuffer(36008,36064,36161,M.__webglColorRenderbuffer[pe]),fe===!0&&(r.invalidateFramebuffer(36008,[Fe]),r.invalidateFramebuffer(36009,[Fe])),I){const ce=n.get(x[pe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ce,0)}r.blitFramebuffer(0,0,k,te,0,0,k,te,ae,9728),f&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(36160,M.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+pe,36161,M.__webglColorRenderbuffer[pe]);const fe=n.get(x[pe]).__webglTexture;t.bindFramebuffer(36160,M.__webglFramebuffer),r.framebufferTexture2D(36009,36064+pe,3553,fe,0)}t.bindFramebuffer(36009,M.__webglMultisampledFramebuffer)}}function je(C){return Math.min(p,C.samples)}function ke(C){const x=n.get(C);return i&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function St(C){const x=o.render.frame;g.get(C)!==x&&(g.set(C,x),C.update())}function gt(C,x){const k=C.encoding,te=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===_i||k!==Ln&&(k===Ve?i===!1?e.has("EXT_sRGB")===!0&&te===Lt?(C.format=_i,C.minFilter=Tt,C.generateMipmaps=!1):x=ko.sRGBToLinear(x):(te!==Lt||ae!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),x}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=Z,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=ne,this.rebindTextures=He,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ke}function bf(r,e,t){const n=t.isWebGL2;function s(a,o=null){let i;if(a===Tn)return 5121;if(a===nc)return 32819;if(a===sc)return 32820;if(a===Ql)return 5120;if(a===ec)return 5122;if(a===Oo)return 5123;if(a===tc)return 5124;if(a===Mn)return 5125;if(a===un)return 5126;if(a===Is)return n?5131:(i=e.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(a===ac)return 6406;if(a===Lt)return 6408;if(a===rc)return 6409;if(a===oc)return 6410;if(a===Sn)return 6402;if(a===cs)return 34041;if(a===ic)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===_i)return i=e.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(a===lc)return 6403;if(a===cc)return 36244;if(a===pc)return 33319;if(a===uc)return 33320;if(a===hc)return 36249;if(a===La||a===Pa||a===Ra||a===Ia)if(o===Ve)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(a===La)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Pa)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ra)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ia)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(a===La)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Pa)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ra)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ia)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===nr||a===sr||a===ar||a===ir)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(a===nr)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===sr)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ar)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ir)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===dc)return i=e.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===rr||a===or)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(a===rr)return o===Ve?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(a===or)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===lr||a===cr||a===pr||a===ur||a===hr||a===dr||a===fr||a===mr||a===gr||a===yr||a===_r||a===Dr||a===xr||a===Fr)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(a===lr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===cr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===pr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ur)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===hr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===dr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===fr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===mr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===gr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===yr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_r)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Dr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===xr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Fr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===vr)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(a===vr)return o===Ve?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===rs?n?34042:(i=e.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:s}}class Af extends ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ns extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class ri{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,o=null;const i=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n),_=this._getHandJoint(c,m);d!==null&&(_.matrix.fromArray(d.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=d.radius),_.visible=d!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));i!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(i.matrix.fromArray(s.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),s.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(s.linearVelocity)):i.hasLinearVelocity=!1,s.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(s.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return i!==null&&(i.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ns;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Mf extends lt{constructor(e,t,n,s,a,o,i,l,c,u){if(u=u!==void 0?u:Sn,u!==Sn&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sn&&(n=Mn),n===void 0&&u===cs&&(n=rs),super(null,s,a,o,i,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=i!==void 0?i:rt,this.minFilter=l!==void 0?l:rt,this.flipY=!1,this.generateMipmaps=!1}}class Sf extends Nn{constructor(e,t){super();const n=this;let s=null,a=1,o=null,i="local-floor",l=null,c=null,u=null,p=null,h=null,f=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],A=[],D=new Set,F=new Map,b=new ut;b.layers.enable(1),b.viewport=new ze;const w=new ut;w.layers.enable(2),w.viewport=new ze;const R=[b,w],y=new Af;y.layers.enable(1),y.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let z=_[B];return z===void 0&&(z=new ri,_[B]=z),z.getTargetRaySpace()},this.getControllerGrip=function(B){let z=_[B];return z===void 0&&(z=new ri,_[B]=z),z.getGripSpace()},this.getHand=function(B){let z=_[B];return z===void 0&&(z=new ri,_[B]=z),z.getHandSpace()};function X(B){const z=A.indexOf(B.inputSource);if(z===-1)return;const ne=_[z];ne!==void 0&&ne.dispatchEvent({type:B.type,data:B.inputSource})}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",O);for(let B=0;B<_.length;B++){const z=A[B];z!==null&&(A[B]=null,_[B].disconnect(z))}S=null,L=null,e.setRenderTarget(m),h=null,p=null,u=null,s=null,d=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){i=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(s,t,z),s.updateRenderState({baseLayer:h}),d=new Pn(h.framebufferWidth,h.framebufferHeight,{format:Lt,type:Tn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let z=null,ne=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,z=g.stencil?cs:Sn,ne=g.stencil?rs:Mn);const ie={colorFormat:32856,depthFormat:ee,scaleFactor:a};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(ie),s.updateRenderState({layers:[p]}),d=new Pn(p.textureWidth,p.textureHeight,{format:Lt,type:Tn,depthTexture:new Mf(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const G=e.properties.get(d);G.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(i),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(B){for(let z=0;z<B.removed.length;z++){const ne=B.removed[z],ee=A.indexOf(ne);ee>=0&&(A[ee]=null,_[ee].disconnect(ne))}for(let z=0;z<B.added.length;z++){const ne=B.added[z];let ee=A.indexOf(ne);if(ee===-1){for(let G=0;G<_.length;G++)if(G>=A.length){A.push(ne),ee=G;break}else if(A[G]===null){A[G]=ne,ee=G;break}if(ee===-1)break}const ie=_[ee];ie&&ie.connect(ne)}}const P=new T,V=new T;function Y(B,z,ne){P.setFromMatrixPosition(z.matrixWorld),V.setFromMatrixPosition(ne.matrixWorld);const ee=P.distanceTo(V),ie=z.projectionMatrix.elements,G=ne.projectionMatrix.elements,Ce=ie[14]/(ie[10]-1),de=ie[14]/(ie[10]+1),oe=(ie[9]+1)/ie[5],se=(ie[9]-1)/ie[5],ve=(ie[8]-1)/ie[0],ue=(G[8]+1)/G[0],me=Ce*ve,He=Ce*ue,Je=ee/(-ve+ue),Qe=Je*-ve;z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Qe),B.translateZ(Je),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ht=Ce+Je,je=de+Je,ke=me-Qe,St=He+(ee-Qe),gt=oe*de/je*ht,C=se*de/je*ht;B.projectionMatrix.makePerspective(ke,St,gt,C,ht,je)}function K(B,z){z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;y.near=w.near=b.near=B.near,y.far=w.far=b.far=B.far,(S!==y.near||L!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,L=y.far);const z=B.parent,ne=y.cameras;K(y,z);for(let ie=0;ie<ne.length;ie++)K(ne[ie],z);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),B.matrix.copy(y.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const ee=B.children;for(let ie=0,G=ee.length;ie<G;ie++)ee[ie].updateMatrixWorld(!0);ne.length===2?Y(y,b,w):y.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){p!==null&&(p.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)},this.getPlanes=function(){return D};let q=null;function J(B,z){if(c=z.getViewerPose(l||o),f=z,c!==null){const ne=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ee=!1;ne.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let ie=0;ie<ne.length;ie++){const G=ne[ie];let Ce=null;if(h!==null)Ce=h.getViewport(G);else{const oe=u.getViewSubImage(p,G);Ce=oe.viewport,ie===0&&(e.setRenderTargetTextures(d,oe.colorTexture,p.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(d))}let de=R[ie];de===void 0&&(de=new ut,de.layers.enable(ie),de.viewport=new ze,R[ie]=de),de.matrix.fromArray(G.transform.matrix),de.projectionMatrix.fromArray(G.projectionMatrix),de.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ie===0&&y.matrix.copy(de.matrix),ee===!0&&y.cameras.push(de)}}for(let ne=0;ne<_.length;ne++){const ee=A[ne],ie=_[ne];ee!==null&&ie!==void 0&&ie.update(ee,z,l||o)}if(q&&q(B,z),z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:z.detectedPlanes});let ne=null;for(const ee of D)z.detectedPlanes.has(ee)||(ne===null&&(ne=[]),ne.push(ee));if(ne!==null)for(const ee of ne)D.delete(ee),F.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of z.detectedPlanes)if(!D.has(ee))D.add(ee),F.set(ee,z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const ie=F.get(ee);ee.lastChangedTime>ie&&(F.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}f=null}const Z=new $o;Z.setAnimationLoop(J),this.setAnimationLoop=function(B){q=B},this.dispose=function(){}}}function wf(r,e){function t(m,d){d.color.getRGB(m.fogColor.value,jo(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,_,A,D){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&h(m,d,D)):d.isMeshMatcapMaterial?(s(m,d),f(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?i(m,d,_,A):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Nt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Nt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const F=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*F}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let A;d.map?A=d.map:d.specularMap?A=d.specularMap:d.displacementMap?A=d.displacementMap:d.normalMap?A=d.normalMap:d.bumpMap?A=d.bumpMap:d.roughnessMap?A=d.roughnessMap:d.metalnessMap?A=d.metalnessMap:d.alphaMap?A=d.alphaMap:d.emissiveMap?A=d.emissiveMap:d.clearcoatMap?A=d.clearcoatMap:d.clearcoatNormalMap?A=d.clearcoatNormalMap:d.clearcoatRoughnessMap?A=d.clearcoatRoughnessMap:d.iridescenceMap?A=d.iridescenceMap:d.iridescenceThicknessMap?A=d.iridescenceThicknessMap:d.specularIntensityMap?A=d.specularIntensityMap:d.specularColorMap?A=d.specularColorMap:d.transmissionMap?A=d.transmissionMap:d.thicknessMap?A=d.thicknessMap:d.sheenColorMap?A=d.sheenColorMap:d.sheenRoughnessMap&&(A=d.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),m.uvTransform.value.copy(A.matrix));let D;d.aoMap?D=d.aoMap:d.lightMap&&(D=d.lightMap),D!==void 0&&(D.isWebGLRenderTarget&&(D=D.texture),D.matrixAutoUpdate===!0&&D.updateMatrix(),m.uv2Transform.value.copy(D.matrix))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function i(m,d,_,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=A*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let D;d.map?D=d.map:d.alphaMap&&(D=d.alphaMap),D!==void 0&&(D.matrixAutoUpdate===!0&&D.updateMatrix(),m.uvTransform.value.copy(D.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Nt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function f(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ef(r,e,t,n){let s={},a={},o=[];const i=t.isWebGL2?r.getParameter(35375):0;function l(A,D){const F=D.program;n.uniformBlockBinding(A,F)}function c(A,D){let F=s[A.id];F===void 0&&(g(A),F=u(A),s[A.id]=F,A.addEventListener("dispose",d));const b=D.program;n.updateUBOMapping(A,b);const w=e.render.frame;a[A.id]!==w&&(h(A),a[A.id]=w)}function u(A){const D=p();A.__bindingPointIndex=D;const F=r.createBuffer(),b=A.__size,w=A.usage;return r.bindBuffer(35345,F),r.bufferData(35345,b,w),r.bindBuffer(35345,null),r.bindBufferBase(35345,D,F),F}function p(){for(let A=0;A<i;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const D=s[A.id],F=A.uniforms,b=A.__cache;r.bindBuffer(35345,D);for(let w=0,R=F.length;w<R;w++){const y=F[w];if(f(y,w,b)===!0){const S=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let X=0;for(let $=0;$<L.length;$++){const O=L[$],P=m(O);typeof O=="number"?(y.__data[0]=O,r.bufferSubData(35345,S+X,y.__data)):O.isMatrix3?(y.__data[0]=O.elements[0],y.__data[1]=O.elements[1],y.__data[2]=O.elements[2],y.__data[3]=O.elements[0],y.__data[4]=O.elements[3],y.__data[5]=O.elements[4],y.__data[6]=O.elements[5],y.__data[7]=O.elements[0],y.__data[8]=O.elements[6],y.__data[9]=O.elements[7],y.__data[10]=O.elements[8],y.__data[11]=O.elements[0]):(O.toArray(y.__data,X),X+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,S,y.__data)}}r.bindBuffer(35345,null)}function f(A,D,F){const b=A.value;if(F[D]===void 0){if(typeof b=="number")F[D]=b;else{const w=Array.isArray(b)?b:[b],R=[];for(let y=0;y<w.length;y++)R.push(w[y].clone());F[D]=R}return!0}else if(typeof b=="number"){if(F[D]!==b)return F[D]=b,!0}else{const w=Array.isArray(F[D])?F[D]:[F[D]],R=Array.isArray(b)?b:[b];for(let y=0;y<w.length;y++){const S=w[y];if(S.equals(R[y])===!1)return S.copy(R[y]),!0}}return!1}function g(A){const D=A.uniforms;let F=0;const b=16;let w=0;for(let R=0,y=D.length;R<y;R++){const S=D[R],L={boundary:0,storage:0},X=Array.isArray(S.value)?S.value:[S.value];for(let $=0,O=X.length;$<O;$++){const P=X[$],V=m(P);L.boundary+=V.boundary,L.storage+=V.storage}if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=F,R>0){w=F%b;const $=b-w;w!==0&&$-L.boundary<0&&(F+=b-w,S.__offset=F)}F+=L.storage}return w=F%b,w>0&&(F+=b-w),A.__size=F,A.__cache={},this}function m(A){const D={boundary:0,storage:0};return typeof A=="number"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),D}function d(A){const D=A.target;D.removeEventListener("dispose",d);const F=o.indexOf(D.__bindingPointIndex);o.splice(F,1),r.deleteBuffer(s[D.id]),delete s[D.id],delete a[D.id]}function _(){for(const A in s)r.deleteBuffer(s[A]);o=[],s={},a={}}return{bind:l,update:c,dispose:_}}function Tf(){const r=Us("canvas");return r.style.display="block",r}function Ui(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Tf(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,i=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let p=null,h=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ln,this.physicallyCorrectLights=!1,this.toneMapping=nn,this.toneMappingExposure=1;const m=this;let d=!1,_=0,A=0,D=null,F=-1,b=null;const w=new ze,R=new ze;let y=null,S=e.width,L=e.height,X=1,$=null,O=null;const P=new ze(0,0,S,L),V=new ze(0,0,S,L);let Y=!1;const K=new Ri;let q=!1,J=!1,Z=null;const B=new xe,z=new Ae,ne=new T,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return D===null?X:1}let G=t;function Ce(v,U){for(let W=0;W<v.length;W++){const N=v[W],j=e.getContext(N,U);if(j!==null)return j}return null}try{const v={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:i,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wi}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Le,!1),G===null){const U=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&U.shift(),G=Ce(U,v),G===null)throw Ce(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let de,oe,se,ve,ue,me,He,Je,Qe,ht,je,ke,St,gt,C,x,k,te,ae,le,Fe,M,I,pe;function fe(){de=new kh(G),oe=new Ih(G,de,r),de.init(oe),M=new bf(G,de,oe),se=new Ff(G,de,oe),ve=new Hh,ue=new of,me=new vf(G,de,se,ue,oe,M,ve),He=new Oh(m),Je=new Bh(m),Qe=new Jc(G,oe),I=new Ph(G,de,Qe,oe),ht=new Vh(G,Qe,ve,I),je=new jh(G,ht,Qe,ve),ae=new Xh(G,oe,me),x=new Nh(ue),ke=new rf(m,He,Je,de,oe,I,x),St=new wf(m,ue),gt=new cf,C=new mf(de,oe),te=new Lh(m,He,Je,se,je,u,o),k=new xf(m,je,oe),pe=new Ef(G,ve,oe,se),le=new Rh(G,de,ve,oe),Fe=new Gh(G,de,ve,oe),ve.programs=ke.programs,m.capabilities=oe,m.extensions=de,m.properties=ue,m.renderLists=gt,m.shadowMap=k,m.state=se,m.info=ve}fe();const ce=new Sf(m,G);this.xr=ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const v=de.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=de.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(v){v!==void 0&&(X=v,this.setSize(S,L,!1))},this.getSize=function(v){return v.set(S,L)},this.setSize=function(v,U,W){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=v,L=U,e.width=Math.floor(v*X),e.height=Math.floor(U*X),W!==!1&&(e.style.width=v+"px",e.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(S*X,L*X).floor()},this.setDrawingBufferSize=function(v,U,W){S=v,L=U,X=W,e.width=Math.floor(v*W),e.height=Math.floor(U*W),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(P)},this.setViewport=function(v,U,W,N){v.isVector4?P.set(v.x,v.y,v.z,v.w):P.set(v,U,W,N),se.viewport(w.copy(P).multiplyScalar(X).floor())},this.getScissor=function(v){return v.copy(V)},this.setScissor=function(v,U,W,N){v.isVector4?V.set(v.x,v.y,v.z,v.w):V.set(v,U,W,N),se.scissor(R.copy(V).multiplyScalar(X).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(v){se.setScissorTest(Y=v)},this.setOpaqueSort=function(v){$=v},this.setTransparentSort=function(v){O=v},this.getClearColor=function(v){return v.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(v=!0,U=!0,W=!0){let N=0;v&&(N|=16384),U&&(N|=256),W&&(N|=1024),G.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),gt.dispose(),C.dispose(),ue.dispose(),He.dispose(),Je.dispose(),je.dispose(),I.dispose(),pe.dispose(),ke.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",he),ce.removeEventListener("sessionend",_e),Z&&(Z.dispose(),Z=null),Be.stop()};function ye(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const v=ve.autoReset,U=k.enabled,W=k.autoUpdate,N=k.needsUpdate,j=k.type;fe(),ve.autoReset=v,k.enabled=U,k.autoUpdate=W,k.needsUpdate=N,k.type=j}function Le(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Pe(v){const U=v.target;U.removeEventListener("dispose",Pe),Ge(U)}function Ge(v){E(v),ue.remove(v)}function E(v){const U=ue.get(v).programs;U!==void 0&&(U.forEach(function(W){ke.releaseProgram(W)}),v.isShaderMaterial&&ke.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,W,N,j,De){U===null&&(U=ee);const be=j.isMesh&&j.matrixWorld.determinant()<0,Se=_l(v,U,W,N,j);se.setMaterial(N,be);let Ee=W.index,Oe=1;N.wireframe===!0&&(Ee=ht.getWireframeAttribute(W),Oe=2);const Re=W.drawRange,Ie=W.attributes.position;let Ze=Re.start*Oe,Ft=(Re.start+Re.count)*Oe;De!==null&&(Ze=Math.max(Ze,De.start*Oe),Ft=Math.min(Ft,(De.start+De.count)*Oe)),Ee!==null?(Ze=Math.max(Ze,0),Ft=Math.min(Ft,Ee.count)):Ie!=null&&(Ze=Math.max(Ze,0),Ft=Math.min(Ft,Ie.count));const Yt=Ft-Ze;if(Yt<0||Yt===1/0)return;I.setup(j,N,Se,W,Ee);let gn,$e=le;if(Ee!==null&&(gn=Qe.get(Ee),$e=Fe,$e.setIndex(gn)),j.isMesh)N.wireframe===!0?(se.setLineWidth(N.wireframeLinewidth*ie()),$e.setMode(1)):$e.setMode(4);else if(j.isLine){let Ne=N.linewidth;Ne===void 0&&(Ne=1),se.setLineWidth(Ne*ie()),j.isLineSegments?$e.setMode(1):j.isLineLoop?$e.setMode(2):$e.setMode(3)}else j.isPoints?$e.setMode(0):j.isSprite&&$e.setMode(4);if(j.isInstancedMesh)$e.renderInstances(Ze,Yt,j.count);else if(W.isInstancedBufferGeometry){const Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ma=Math.min(W.instanceCount,Ne);$e.renderInstances(Ze,Yt,Ma)}else $e.render(Ze,Yt)},this.compile=function(v,U){function W(N,j,De){N.transparent===!0&&N.side===Hs?(N.side=Nt,N.needsUpdate=!0,wt(N,j,De),N.side=En,N.needsUpdate=!0,wt(N,j,De),N.side=Hs):wt(N,j,De)}h=C.get(v),h.init(),g.push(h),v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights(m.physicallyCorrectLights),v.traverse(function(N){const j=N.material;if(j)if(Array.isArray(j))for(let De=0;De<j.length;De++){const be=j[De];W(be,v,N)}else W(j,v,N)}),g.pop(),h=null};let H=null;function Q(v){H&&H(v)}function he(){Be.stop()}function _e(){Be.start()}const Be=new $o;Be.setAnimationLoop(Q),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(v){H=v,ce.setAnimationLoop(v),v===null?Be.stop():Be.start()},ce.addEventListener("sessionstart",he),ce.addEventListener("sessionend",_e),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),v.isScene===!0&&v.onBeforeRender(m,v,U,D),h=C.get(v,g.length),h.init(),g.push(h),B.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(B),J=this.localClippingEnabled,q=x.init(this.clippingPlanes,J,U),p=gt.get(v,f.length),p.init(),f.push(p),st(v,U,0,m.sortObjects),p.finish(),m.sortObjects===!0&&p.sort($,O),q===!0&&x.beginShadows();const W=h.state.shadowsArray;if(k.render(W,v,U),q===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(p,v),h.setupLights(m.physicallyCorrectLights),U.isArrayCamera){const N=U.cameras;for(let j=0,De=N.length;j<De;j++){const be=N[j];ct(p,v,be,be.viewport)}}else ct(p,v,U);D!==null&&(me.updateMultisampleRenderTarget(D),me.updateRenderTargetMipmap(D)),v.isScene===!0&&v.onAfterRender(m,v,U),I.resetDefaultState(),F=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?p=f[f.length-1]:p=null};function st(v,U,W,N){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||K.intersectsSprite(v)){N&&ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(B);const be=je.update(v),Se=v.material;Se.visible&&p.push(v,be,Se,W,ne.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==ve.render.frame&&(v.skeleton.update(),v.skeleton.frame=ve.render.frame),!v.frustumCulled||K.intersectsObject(v))){N&&ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(B);const be=je.update(v),Se=v.material;if(Array.isArray(Se)){const Ee=be.groups;for(let Oe=0,Re=Ee.length;Oe<Re;Oe++){const Ie=Ee[Oe],Ze=Se[Ie.materialIndex];Ze&&Ze.visible&&p.push(v,be,Ze,W,ne.z,Ie)}}else Se.visible&&p.push(v,be,Se,W,ne.z,null)}}const De=v.children;for(let be=0,Se=De.length;be<Se;be++)st(De[be],U,W,N)}function ct(v,U,W,N){const j=v.opaque,De=v.transmissive,be=v.transparent;h.setupLightsView(W),De.length>0&&mn(j,U,W),N&&se.viewport(w.copy(N)),j.length>0&&qe(j,U,W),De.length>0&&qe(De,U,W),be.length>0&&qe(be,U,W),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function mn(v,U,W){const N=oe.isWebGL2;Z===null&&(Z=new Pn(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Is:Tn,minFilter:Rs,samples:N&&a===!0?4:0})),m.getDrawingBufferSize(z),N?Z.setSize(z.x,z.y):Z.setSize(ya(z.x),ya(z.y));const j=m.getRenderTarget();m.setRenderTarget(Z),m.clear();const De=m.toneMapping;m.toneMapping=nn,qe(v,U,W),m.toneMapping=De,me.updateMultisampleRenderTarget(Z),me.updateRenderTargetMipmap(Z),m.setRenderTarget(j)}function qe(v,U,W){const N=U.isScene===!0?U.overrideMaterial:null;for(let j=0,De=v.length;j<De;j++){const be=v[j],Se=be.object,Ee=be.geometry,Oe=N===null?be.material:N,Re=be.group;Se.layers.test(W.layers)&&jt(Se,U,W,Ee,Oe,Re)}}function jt(v,U,W,N,j,De){v.onBeforeRender(m,U,W,N,j,De),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),j.onBeforeRender(m,U,W,N,v,De),j.transparent===!0&&j.side===Hs?(j.side=Nt,j.needsUpdate=!0,m.renderBufferDirect(W,U,N,j,v,De),j.side=En,j.needsUpdate=!0,m.renderBufferDirect(W,U,N,j,v,De),j.side=Hs):m.renderBufferDirect(W,U,N,j,v,De),v.onAfterRender(m,U,W,N,j,De)}function wt(v,U,W){U.isScene!==!0&&(U=ee);const N=ue.get(v),j=h.state.lights,De=h.state.shadowsArray,be=j.state.version,Se=ke.getParameters(v,j.state,De,U,W),Ee=ke.getProgramCacheKey(Se);let Oe=N.programs;N.environment=v.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(v.isMeshStandardMaterial?Je:He).get(v.envMap||N.environment),Oe===void 0&&(v.addEventListener("dispose",Pe),Oe=new Map,N.programs=Oe);let Re=Oe.get(Ee);if(Re!==void 0){if(N.currentProgram===Re&&N.lightsStateVersion===be)return qi(v,Se),Re}else Se.uniforms=ke.getUniforms(v),v.onBuild(W,Se,m),v.onBeforeCompile(Se,m),Re=ke.acquireProgram(Se,Ee),Oe.set(Ee,Re),N.uniforms=Se.uniforms;const Ie=N.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ie.clippingPlanes=x.uniform),qi(v,Se),N.needsLights=xl(v),N.lightsStateVersion=be,N.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMap.value=j.state.directionalShadowMap,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotShadowMap.value=j.state.spotShadowMap,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMap.value=j.state.pointShadowMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ze=Re.getUniforms(),Ft=ha.seqWithValue(Ze.seq,Ie);return N.currentProgram=Re,N.uniformsList=Ft,Re}function qi(v,U){const W=ue.get(v);W.outputEncoding=U.outputEncoding,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function _l(v,U,W,N,j){U.isScene!==!0&&(U=ee),me.resetTextureUnits();const De=U.fog,be=N.isMeshStandardMaterial?U.environment:null,Se=D===null?m.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Ln,Ee=(N.isMeshStandardMaterial?Je:He).get(N.envMap||be),Oe=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Re=!!N.normalMap&&!!W.attributes.tangent,Ie=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,Ft=!!W.morphAttributes.color,Yt=N.toneMapped?m.toneMapping:nn,gn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$e=gn!==void 0?gn.length:0,Ne=ue.get(N),Ma=h.state.lights;if(q===!0&&(J===!0||v!==b)){const vt=v===b&&N.id===F;x.setState(N,v,vt)}let at=!1;N.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ma.state.version||Ne.outputEncoding!==Se||j.isInstancedMesh&&Ne.instancing===!1||!j.isInstancedMesh&&Ne.instancing===!0||j.isSkinnedMesh&&Ne.skinning===!1||!j.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Ee||N.fog===!0&&Ne.fog!==De||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==x.numPlanes||Ne.numIntersection!==x.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==Re||Ne.morphTargets!==Ie||Ne.morphNormals!==Ze||Ne.morphColors!==Ft||Ne.toneMapping!==Yt||oe.isWebGL2===!0&&Ne.morphTargetsCount!==$e)&&(at=!0):(at=!0,Ne.__version=N.version);let yn=Ne.currentProgram;at===!0&&(yn=wt(N,U,j));let Xi=!1,ms=!1,Sa=!1;const dt=yn.getUniforms(),_n=Ne.uniforms;if(se.useProgram(yn.program)&&(Xi=!0,ms=!0,Sa=!0),N.id!==F&&(F=N.id,ms=!0),Xi||b!==v){if(dt.setValue(G,"projectionMatrix",v.projectionMatrix),oe.logarithmicDepthBuffer&&dt.setValue(G,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),b!==v&&(b=v,ms=!0,Sa=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const vt=dt.map.cameraPosition;vt!==void 0&&vt.setValue(G,ne.setFromMatrixPosition(v.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&dt.setValue(G,"isOrthographic",v.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||j.isSkinnedMesh)&&dt.setValue(G,"viewMatrix",v.matrixWorldInverse)}if(j.isSkinnedMesh){dt.setOptional(G,j,"bindMatrix"),dt.setOptional(G,j,"bindMatrixInverse");const vt=j.skeleton;vt&&(oe.floatVertexTextures?(vt.boneTexture===null&&vt.computeBoneTexture(),dt.setValue(G,"boneTexture",vt.boneTexture,me),dt.setValue(G,"boneTextureSize",vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const wa=W.morphAttributes;if((wa.position!==void 0||wa.normal!==void 0||wa.color!==void 0&&oe.isWebGL2===!0)&&ae.update(j,W,N,yn),(ms||Ne.receiveShadow!==j.receiveShadow)&&(Ne.receiveShadow=j.receiveShadow,dt.setValue(G,"receiveShadow",j.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(_n.envMap.value=Ee,_n.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),ms&&(dt.setValue(G,"toneMappingExposure",m.toneMappingExposure),Ne.needsLights&&Dl(_n,Sa),De&&N.fog===!0&&St.refreshFogUniforms(_n,De),St.refreshMaterialUniforms(_n,N,X,L,Z),ha.upload(G,Ne.uniformsList,_n,me)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ha.upload(G,Ne.uniformsList,_n,me),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&dt.setValue(G,"center",j.center),dt.setValue(G,"modelViewMatrix",j.modelViewMatrix),dt.setValue(G,"normalMatrix",j.normalMatrix),dt.setValue(G,"modelMatrix",j.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const vt=N.uniformsGroups;for(let Ea=0,Fl=vt.length;Ea<Fl;Ea++)if(oe.isWebGL2){const ji=vt[Ea];pe.update(ji,yn),pe.bind(ji,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function Dl(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function xl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(v,U,W){ue.get(v.texture).__webglTexture=U,ue.get(v.depthTexture).__webglTexture=W;const N=ue.get(v);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,U){const W=ue.get(v);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,W=0){D=v,_=U,A=W;let N=!0,j=null,De=!1,be=!1;if(v){const Ee=ue.get(v);Ee.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),N=!1):Ee.__webglFramebuffer===void 0?me.setupRenderTarget(v):Ee.__hasExternalTextures&&me.rebindTextures(v,ue.get(v.texture).__webglTexture,ue.get(v.depthTexture).__webglTexture);const Oe=v.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(be=!0);const Re=ue.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(j=Re[U],De=!0):oe.isWebGL2&&v.samples>0&&me.useMultisampledRTT(v)===!1?j=ue.get(v).__webglMultisampledFramebuffer:j=Re,w.copy(v.viewport),R.copy(v.scissor),y=v.scissorTest}else w.copy(P).multiplyScalar(X).floor(),R.copy(V).multiplyScalar(X).floor(),y=Y;if(se.bindFramebuffer(36160,j)&&oe.drawBuffers&&N&&se.drawBuffers(v,j),se.viewport(w),se.scissor(R),se.setScissorTest(y),De){const Ee=ue.get(v.texture);G.framebufferTexture2D(36160,36064,34069+U,Ee.__webglTexture,W)}else if(be){const Ee=ue.get(v.texture),Oe=U||0;G.framebufferTextureLayer(36160,36064,Ee.__webglTexture,W||0,Oe)}F=-1},this.readRenderTargetPixels=function(v,U,W,N,j,De,be){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ue.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se){se.bindFramebuffer(36160,Se);try{const Ee=v.texture,Oe=Ee.format,Re=Ee.type;if(Oe!==Lt&&M.convert(Oe)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Re===Is&&(de.has("EXT_color_buffer_half_float")||oe.isWebGL2&&de.has("EXT_color_buffer_float"));if(Re!==Tn&&M.convert(Re)!==G.getParameter(35738)&&!(Re===un&&(oe.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-N&&W>=0&&W<=v.height-j&&G.readPixels(U,W,N,j,M.convert(Oe),M.convert(Re),De)}finally{const Ee=D!==null?ue.get(D).__webglFramebuffer:null;se.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(v,U,W=0){const N=Math.pow(2,-W),j=Math.floor(U.image.width*N),De=Math.floor(U.image.height*N);me.setTexture2D(U,0),G.copyTexSubImage2D(3553,W,0,0,v.x,v.y,j,De),se.unbindTexture()},this.copyTextureToTexture=function(v,U,W,N=0){const j=U.image.width,De=U.image.height,be=M.convert(W.format),Se=M.convert(W.type);me.setTexture2D(W,0),G.pixelStorei(37440,W.flipY),G.pixelStorei(37441,W.premultiplyAlpha),G.pixelStorei(3317,W.unpackAlignment),U.isDataTexture?G.texSubImage2D(3553,N,v.x,v.y,j,De,be,Se,U.image.data):U.isCompressedTexture?G.compressedTexSubImage2D(3553,N,v.x,v.y,U.mipmaps[0].width,U.mipmaps[0].height,be,U.mipmaps[0].data):G.texSubImage2D(3553,N,v.x,v.y,be,Se,U.image),N===0&&W.generateMipmaps&&G.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(v,U,W,N,j=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=v.max.x-v.min.x+1,be=v.max.y-v.min.y+1,Se=v.max.z-v.min.z+1,Ee=M.convert(N.format),Oe=M.convert(N.type);let Re;if(N.isData3DTexture)me.setTexture3D(N,0),Re=32879;else if(N.isDataArrayTexture)me.setTexture2DArray(N,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,N.flipY),G.pixelStorei(37441,N.premultiplyAlpha),G.pixelStorei(3317,N.unpackAlignment);const Ie=G.getParameter(3314),Ze=G.getParameter(32878),Ft=G.getParameter(3316),Yt=G.getParameter(3315),gn=G.getParameter(32877),$e=W.isCompressedTexture?W.mipmaps[0]:W.image;G.pixelStorei(3314,$e.width),G.pixelStorei(32878,$e.height),G.pixelStorei(3316,v.min.x),G.pixelStorei(3315,v.min.y),G.pixelStorei(32877,v.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(Re,j,U.x,U.y,U.z,De,be,Se,Ee,Oe,$e.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Re,j,U.x,U.y,U.z,De,be,Se,Ee,$e.data)):G.texSubImage3D(Re,j,U.x,U.y,U.z,De,be,Se,Ee,Oe,$e),G.pixelStorei(3314,Ie),G.pixelStorei(32878,Ze),G.pixelStorei(3316,Ft),G.pixelStorei(3315,Yt),G.pixelStorei(32877,gn),j===0&&N.generateMipmaps&&G.generateMipmap(Re),se.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?me.setTextureCube(v,0):v.isData3DTexture?me.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?me.setTexture2DArray(v,0):me.setTexture2D(v,0),se.unbindTexture()},this.resetState=function(){_=0,A=0,D=null,se.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Lf extends Ui{}Lf.prototype.isWebGL1Renderer=!0;class tl extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const oo=new T,lo=new ze,co=new ze,Pf=new T,po=new xe;class Rf extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new xe,this.bindMatrixInverse=new xe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ze,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;lo.fromBufferAttribute(s.attributes.skinIndex,e),co.fromBufferAttribute(s.attributes.skinWeight,e),oo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const o=co.getComponent(a);if(o!==0){const i=lo.getComponent(a);po.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Pf.copy(oo).applyMatrix4(po),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fi extends Xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class If extends lt{constructor(e=null,t=1,n=1,s,a,o,i,l,c=rt,u=rt,p,h){super(null,o,i,l,c,u,s,a,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uo=new xe,Nf=new xe;class zi{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,o=e.length;a<o;a++){const i=e[a]?e[a].matrixWorld:Nf;uo.multiplyMatrices(i,t[a]),uo.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new zi(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Uo(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new If(t,e,e,Lt,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let o=t[a];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),o=new Fi),this.bones.push(o),this.boneInverses.push(new xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const o=t[s];e.bones.push(o.uuid);const i=n[s];e.boneInverses.push(i.toArray())}return e}}class nl extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ho=new T,fo=new T,mo=new xe,oi=new Ho,la=new Fa;class Of extends Xe{constructor(e=new kt,t=new nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)ho.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ho.distanceTo(fo);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=a,e.ray.intersectsSphere(la)===!1)return;mo.copy(s).invert(),oi.copy(e.ray).applyMatrix4(mo);const i=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=i*i,c=new T,u=new T,p=new T,h=new T,f=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),A=Math.min(g.count,o.start+o.count);for(let D=_,F=A-1;D<F;D+=f){const b=g.getX(D),w=g.getX(D+1);if(c.fromBufferAttribute(d,b),u.fromBufferAttribute(d,w),oi.distanceSqToSegment(c,u,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(h);y<e.near||y>e.far||t.push({distance:y,point:p.clone().applyMatrix4(this.matrixWorld),index:D,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),A=Math.min(d.count,o.start+o.count);for(let D=_,F=A-1;D<F;D+=f){if(c.fromBufferAttribute(d,D),u.fromBufferAttribute(d,D+1),oi.distanceSqToSegment(c,u,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:p.clone().applyMatrix4(this.matrixWorld),index:D,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const i=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=a}}}}}class Uf{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let o;t?o=t:o=e*n[a-1];let i=0,l=a-1,c;for(;i<=l;)if(s=Math.floor(i+(l-i)/2),c=n[s]-o,c<0)i=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(a-1);const u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const o=this.getPoint(s),i=this.getPoint(a),l=t||(o.isVector2?new Ae:new T);return l.copy(i).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new T,s=[],a=[],o=[],i=new T,l=new xe;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new T)}a[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),h<=c&&n.set(0,0,1),i.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],i),o[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),o[f]=o[f-1].clone(),i.crossVectors(s[f-1],s[f]),i.length()>Number.EPSILON){i.normalize();const g=Math.acos(ot(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(i,g))}o[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(ot(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(i.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ts extends On{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ti,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vi extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ti,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ln(r,e,t){return sl(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function ca(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function sl(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zf(r){function e(s,a){return r[s]-r[a]}const t=r.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function go(r,e,t){const n=r.length,s=new r.constructor(n);for(let a=0,o=0;o!==n;++a){const i=t[a]*e;for(let l=0;l!==e;++l)s[o++]=r[i+l]}return s}function al(r,e,t,n){let s=1,a=r[0];for(;a!==void 0&&a[n]===void 0;)a=r[s++];if(a===void 0)return;let o=a[n];if(o!==void 0)if(Array.isArray(o))do o=a[n],o!==void 0&&(e.push(a.time),t.push.apply(t,o)),a=r[s++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[n],o!==void 0&&(e.push(a.time),o.toArray(t,t.length)),a=r[s++];while(a!==void 0);else do o=a[n],o!==void 0&&(e.push(a.time),t.push(o)),a=r[s++];while(a!==void 0)}class ba{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let o;t:{s:if(!(e<s)){for(let i=n+2;;){if(s===void 0){if(e<a)break s;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===i)break;if(a=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=a)){const i=t[1];e<i&&(n=2,a=i);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=a,a=t[--n-1],e>=a)break e}o=n,n=0;break t}break n}for(;n<o;){const i=n+o>>>1;e<t[i]?o=i:n=i+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let o=0;o!==s;++o)t[o]=n[a+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Bf extends ba{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:br,endingEnd:br}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,o=e+1,i=s[a],l=s[o];if(i===void 0)switch(this.getSettings_().endingStart){case Ar:a=e,i=2*t-n;break;case Cr:a=s.length-2,i=t+s[a]-s[a+1];break;default:a=e,i=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ar:o=e,l=2*n-t;break;case Cr:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-i),this._weightNext=c/(l-n),this._offsetPrev=a*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const a=this.resultBuffer,o=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),m=g*g,d=m*g,_=-h*d+2*h*m-h*g,A=(1+h)*d+(-1.5-2*h)*m+(-.5+h)*g+1,D=(-1-f)*d+(1.5+f)*m+.5*g,F=f*d-f*m;for(let b=0;b!==i;++b)a[b]=_*o[u+b]+A*o[c+b]+D*o[l+b]+F*o[p+b];return a}}class kf extends ba{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,o=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=(n-t)/(s-t),p=1-u;for(let h=0;h!==i;++h)a[h]=o[c+h]*p+o[l+h]*u;return a}}class Vf extends ba{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xt{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ca(t,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ca(e.times,Array),values:ca(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case ga:t=this.InterpolantFactoryMethodLinear;break;case Na:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,o=s-1;for(;a!==s&&n[a]<e;)++a;for(;o!==-1&&n[o]>t;)--o;if(++o,a!==0||o!==s){a>=o&&(o=Math.max(o,1),a=o-1);const i=this.getValueSize();this.times=ln(n,a,o),this.values=ln(this.values,a*i,o*i)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let i=0;i!==a;i++){const l=n[i];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,l,o),e=!1;break}o=l}if(s!==void 0&&sl(s))for(let i=0,l=s.length;i!==l;++i){const c=s[i];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,c),e=!1;break}}return e}optimize(){const e=ln(this.times),t=ln(this.values),n=this.getValueSize(),s=this.getInterpolation()===Na,a=e.length-1;let o=1;for(let i=1;i<a;++i){let l=!1;const c=e[i],u=e[i+1];if(c!==u&&(i!==1||c!==e[0]))if(s)l=!0;else{const p=i*n,h=p-n,f=p+n;for(let g=0;g!==n;++g){const m=t[p+g];if(m!==t[h+g]||m!==t[f+g]){l=!0;break}}}if(l){if(i!==o){e[o]=e[i];const p=i*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[p+f]}++o}}if(a>0){e[o]=e[a];for(let i=a*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[i+c];++o}return o!==e.length?(this.times=ln(e,0,o),this.values=ln(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ln(this.times,0),t=ln(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Xt.prototype.TimeBufferType=Float32Array;Xt.prototype.ValueBufferType=Float32Array;Xt.prototype.DefaultInterpolation=ga;class hs extends Xt{}hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=ma;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class il extends Xt{}il.prototype.ValueTypeName="color";class zs extends Xt{}zs.prototype.ValueTypeName="number";class Gf extends ba{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,o=this.sampleValues,i=this.valueSize,l=(n-t)/(s-t);let c=e*i;for(let u=c+i;c!==u;c+=4)Rt.slerpFlat(a,0,o,c-i,o,c,l);return a}}class ds extends Xt{InterpolantFactoryMethodLinear(e){return new Gf(this.times,this.values,this.getValueSize(),e)}}ds.prototype.ValueTypeName="quaternion";ds.prototype.DefaultInterpolation=ga;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Xt{}fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ma;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Xt{}Bs.prototype.ValueTypeName="vector";class Hf{constructor(e,t=-1,n,s=fc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,i=n.length;o!==i;++o)t.push(qf(n[o]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,o=n.length;a!==o;++a)t.push(Xt.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,o=[];for(let i=0;i<a;i++){let l=[],c=[];l.push((i+a-1)%a,i,(i+1)%a),c.push(0,1,0);const u=zf(l);l=go(l,1,u),c=go(c,1,u),!s&&l[0]===0&&(l.push(a),c.push(c[0])),o.push(new zs(".morphTargetInfluences["+t[i].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let i=0,l=e.length;i<l;i++){const c=e[i],u=c.name.match(a);if(u&&u.length>1){const p=u[1];let h=s[p];h||(s[p]=h=[]),h.push(c)}}const o=[];for(const i in s)o.push(this.CreateFromMorphTargetSequence(i,s[i],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,h,f,g,m){if(f.length!==0){const d=[],_=[];al(f,d,_,g),d.length!==0&&m.push(new p(h,d,_))}},s=[],a=e.name||"default",o=e.fps||30,i=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let p=0;p<c.length;p++){const h=c[p].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let m=0;m<h[g].morphTargets.length;m++)f[h[g].morphTargets[m]]=-1;for(const m in f){const d=[],_=[];for(let A=0;A!==h[g].morphTargets.length;++A){const D=h[g];d.push(D.time),_.push(D.morphTarget===m?1:0)}s.push(new zs(".morphTargetInfluence["+m+"]",d,_))}l=f.length*o}else{const f=".bones["+t[p].name+"]";n(Bs,f+".position",h,"pos",s),n(ds,f+".quaternion",h,"rot",s),n(Bs,f+".scale",h,"scl",s)}}return s.length===0?null:new this(a,l,s,i)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wf(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return Bs;case"color":return il;case"quaternion":return ds;case"bool":case"boolean":return hs;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function qf(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wf(r.type);if(r.times===void 0){const t=[],n=[];al(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const _a={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Xf{constructor(e,t,n){const s=this;let a=!1,o=0,i=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){i++,a===!1&&s.onStart!==void 0&&s.onStart(u,o,i),a=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,i),o===i&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){const p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=c.length;p<h;p+=2){const f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const jf=new Xf;class Aa{constructor(e){this.manager=e!==void 0?e:jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const en={};class Yf extends Error{constructor(e,t){super(e),this.response=t}}class Zf extends Aa{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=_a.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(en[e]!==void 0){en[e].push({onLoad:t,onProgress:n,onError:s});return}en[e]=[],en[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=en[e],p=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,g=f!==0;let m=0;const d=new ReadableStream({start(_){A();function A(){p.read().then(({done:D,value:F})=>{if(D)_.close();else{m+=F.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let w=0,R=u.length;w<R;w++){const y=u[w];y.onProgress&&y.onProgress(b)}_.enqueue(F),A()}})}}});return new Response(d)}else throw new Yf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,i));case"json":return c.json();default:if(i===void 0)return c.text();{const p=/charset="?([^;"\s]*)"?/i.exec(i),h=p&&p[1]?p[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{_a.add(e,c);const u=en[e];delete en[e];for(let p=0,h=u.length;p<h;p++){const f=u[p];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=en[e];if(u===void 0)throw this.manager.itemError(e),c;delete en[e];for(let p=0,h=u.length;p<h;p++){const f=u[p];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $f extends Aa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=_a.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const i=Us("img");function l(){u(),_a.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(p){u(),s&&s(p),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){i.removeEventListener("load",l,!1),i.removeEventListener("error",c,!1)}return i.addEventListener("load",l,!1),i.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),a.manager.itemStart(e),i.src=e,i}}class Bi extends Aa{constructor(e){super(e)}load(e,t,n,s){const a=new lt,o=new $f(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(i){a.image=i,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class Ca extends Xe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const li=new xe,yo=new T,_o=new T;class ki{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ri,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(yo),_o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_o),t.updateMatrixWorld(),li.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(li),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(li)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kf extends ki{constructor(){super(new ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Os*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jf extends Ca{constructor(e,t,n=0,s=Math.PI/3,a=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=a,this.decay=o,this.map=null,this.shadow=new Kf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Do=new xe,bs=new T,ci=new T;class Qf extends ki{constructor(){super(new ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),ci.copy(n.position),ci.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ci),n.updateMatrixWorld(),s.makeTranslation(-bs.x,-bs.y,-bs.z),Do.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do)}}class xo extends Ca{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class em extends ki{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ks extends Ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.shadow=new em}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vi extends Ca{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Hi="\\[\\]\\.:\\/",tm=new RegExp("["+Hi+"]","g"),Wi="[^"+Hi+"]",nm="[^"+Hi.replace("\\.","")+"]",sm=/((?:WC+[\/:])*)/.source.replace("WC",Wi),am=/(WCOD+)?/.source.replace("WCOD",nm),im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wi),rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wi),om=new RegExp("^"+sm+am+im+rm+"$"),lm=["material","materials","bones","map"];class cm{constructor(e,t,n){const s=n||Ue.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ue{constructor(e,t,n){this.path=t,this.parsedPath=n||Ue.parseTrackName(t),this.node=Ue.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ue.Composite(e,t,n):new Ue(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(e){const t=om.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);lm.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let o=0;o<a.length;o++){const i=a[o];if(i.name===t||i.uuid===t)return i;const l=n(i.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ue.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let i=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ue.Composite=cm;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wi);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var vo=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(vo(""))}catch{vo=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Pt=Uint8Array,hn=Uint16Array,bi=Uint32Array,rl=new Pt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ol=new Pt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pm=new Pt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ll=function(r,e){for(var t=new hn(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var s=new bi(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)s[a]=a-t[n]<<5|n;return[t,s]},cl=ll(rl,2),pl=cl[0],um=cl[1];pl[28]=258,um[258]=28;var hm=ll(ol,0),dm=hm[0],Ai=new hn(32768);for(var We=0;We<32768;++We){var cn=(We&43690)>>>1|(We&21845)<<1;cn=(cn&52428)>>>2|(cn&13107)<<2,cn=(cn&61680)>>>4|(cn&3855)<<4,Ai[We]=((cn&65280)>>>8|(cn&255)<<8)>>>1}var Ls=function(r,e,t){for(var n=r.length,s=0,a=new hn(e);s<n;++s)++a[r[s]-1];var o=new hn(e);for(s=0;s<e;++s)o[s]=o[s-1]+a[s-1]<<1;var i;if(t){i=new hn(1<<e);var l=15-e;for(s=0;s<n;++s)if(r[s])for(var c=s<<4|r[s],u=e-r[s],p=o[r[s]-1]++<<u,h=p|(1<<u)-1;p<=h;++p)i[Ai[p]>>>l]=c}else for(i=new hn(n),s=0;s<n;++s)r[s]&&(i[s]=Ai[o[r[s]-1]++]>>>15-r[s]);return i},Gs=new Pt(288);for(var We=0;We<144;++We)Gs[We]=8;for(var We=144;We<256;++We)Gs[We]=9;for(var We=256;We<280;++We)Gs[We]=7;for(var We=280;We<288;++We)Gs[We]=8;var ul=new Pt(32);for(var We=0;We<32;++We)ul[We]=5;var fm=Ls(Gs,9,1),mm=Ls(ul,5,1),pi=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Bt=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},ui=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},gm=function(r){return(r/8|0)+(r&7&&1)},ym=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var n=new(r instanceof hn?hn:r instanceof bi?bi:Pt)(t-e);return n.set(r.subarray(e,t)),n},_m=function(r,e,t){var n=r.length;if(!n||t&&!t.l&&n<5)return e||new Pt(0);var s=!e||t,a=!t||t.i;t||(t={}),e||(e=new Pt(n*3));var o=function(G){var Ce=e.length;if(G>Ce){var de=new Pt(Math.max(Ce*2,G));de.set(e),e=de}},i=t.f||0,l=t.p||0,c=t.b||0,u=t.l,p=t.d,h=t.m,f=t.n,g=n*8;do{if(!u){t.f=i=Bt(r,l,1);var m=Bt(r,l+1,3);if(l+=3,m)if(m==1)u=fm,p=mm,h=9,f=5;else if(m==2){var D=Bt(r,l,31)+257,F=Bt(r,l+10,15)+4,b=D+Bt(r,l+5,31)+1;l+=14;for(var w=new Pt(b),R=new Pt(19),y=0;y<F;++y)R[pm[y]]=Bt(r,l+y*3,7);l+=F*3;for(var S=pi(R),L=(1<<S)-1,X=Ls(R,S,1),y=0;y<b;){var $=X[Bt(r,l,L)];l+=$&15;var d=$>>>4;if(d<16)w[y++]=d;else{var O=0,P=0;for(d==16?(P=3+Bt(r,l,3),l+=2,O=w[y-1]):d==17?(P=3+Bt(r,l,7),l+=3):d==18&&(P=11+Bt(r,l,127),l+=7);P--;)w[y++]=O}}var V=w.subarray(0,D),Y=w.subarray(D);h=pi(V),f=pi(Y),u=Ls(V,h,1),p=Ls(Y,f,1)}else throw"invalid block type";else{var d=gm(l)+4,_=r[d-4]|r[d-3]<<8,A=d+_;if(A>n){if(a)throw"unexpected EOF";break}s&&o(c+_),e.set(r.subarray(d,A),c),t.b=c+=_,t.p=l=A*8;continue}if(l>g){if(a)throw"unexpected EOF";break}}s&&o(c+131072);for(var K=(1<<h)-1,q=(1<<f)-1,J=l;;J=l){var O=u[ui(r,l)&K],Z=O>>>4;if(l+=O&15,l>g){if(a)throw"unexpected EOF";break}if(!O)throw"invalid length/literal";if(Z<256)e[c++]=Z;else if(Z==256){J=l,u=null;break}else{var B=Z-254;if(Z>264){var y=Z-257,z=rl[y];B=Bt(r,l,(1<<z)-1)+pl[y],l+=z}var ne=p[ui(r,l)&q],ee=ne>>>4;if(!ne)throw"invalid distance";l+=ne&15;var Y=dm[ee];if(ee>3){var z=ol[ee];Y+=ui(r,l)&(1<<z)-1,l+=z}if(l>g){if(a)throw"unexpected EOF";break}s&&o(c+131072);for(var ie=c+B;c<ie;c+=4)e[c]=e[c-Y],e[c+1]=e[c+1-Y],e[c+2]=e[c+2-Y],e[c+3]=e[c+3-Y];c=ie}}t.l=u,t.p=J,t.b=c,u&&(i=1,t.m=h,t.d=p,t.n=f)}while(!i);return c==e.length?e:ym(e,0,c)},Dm=new Pt(0),xm=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Fm(r,e){return _m((xm(r),r.subarray(2,-4)),e)}var vm=typeof TextDecoder<"u"&&new TextDecoder,bm=0;try{vm.decode(Dm,{stream:!0}),bm=1}catch{}function hl(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let s=r,a=n,o=Math.floor((s+a)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?a=o:s=o,o=Math.floor((s+a)/2);return o}function Am(r,e,t,n){const s=[],a=[],o=[];s[0]=1;for(let i=1;i<=t;++i){a[i]=e-n[r+1-i],o[i]=n[r+i]-e;let l=0;for(let c=0;c<i;++c){const u=o[c+1],p=a[i-c],h=s[c]/(u+p);s[c]=l+u*h,l=p*h}s[i]=l}return s}function Cm(r,e,t,n){const s=hl(r,n,e),a=Am(s,n,r,e),o=new ze(0,0,0,0);for(let i=0;i<=r;++i){const l=t[s-r+i],c=a[i],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function Mm(r,e,t,n,s){const a=[];for(let p=0;p<=t;++p)a[p]=0;const o=[];for(let p=0;p<=n;++p)o[p]=a.slice(0);const i=[];for(let p=0;p<=t;++p)i[p]=a.slice(0);i[0][0]=1;const l=a.slice(0),c=a.slice(0);for(let p=1;p<=t;++p){l[p]=e-s[r+1-p],c[p]=s[r+p]-e;let h=0;for(let f=0;f<p;++f){const g=c[f+1],m=l[p-f];i[p][f]=g+m;const d=i[f][p-1]/i[p][f];i[f][p]=h+g*d,h=m*d}i[p][p]=h}for(let p=0;p<=t;++p)o[0][p]=i[p][t];for(let p=0;p<=t;++p){let h=0,f=1;const g=[];for(let m=0;m<=t;++m)g[m]=a.slice(0);g[0][0]=1;for(let m=1;m<=n;++m){let d=0;const _=p-m,A=t-m;p>=m&&(g[f][0]=g[h][0]/i[A+1][_],d=g[f][0]*i[_][A]);const D=_>=-1?1:-_,F=p-1<=A?m-1:t-p;for(let w=D;w<=F;++w)g[f][w]=(g[h][w]-g[h][w-1])/i[A+1][_+w],d+=g[f][w]*i[_+w][A];p<=A&&(g[f][m]=-g[h][m-1]/i[A+1][p],d+=g[f][m]*i[p][A]),o[m][p]=d;const b=h;h=f,f=b}}let u=t;for(let p=1;p<=n;++p){for(let h=0;h<=t;++h)o[p][h]*=u;u*=t-p}return o}function Sm(r,e,t,n,s){const a=s<r?s:r,o=[],i=hl(r,n,e),l=Mm(i,n,r,a,e),c=[];for(let u=0;u<t.length;++u){const p=t[u].clone(),h=p.w;p.x*=h,p.y*=h,p.z*=h,c[u]=p}for(let u=0;u<=a;++u){const p=c[i-r].clone().multiplyScalar(l[u][0]);for(let h=1;h<=r;++h)p.add(c[i-r+h].clone().multiplyScalar(l[u][h]));o[u]=p}for(let u=a+1;u<=s+1;++u)o[u]=new ze(0,0,0);return o}function wm(r,e){let t=1;for(let s=2;s<=r;++s)t*=s;let n=1;for(let s=2;s<=e;++s)n*=s;for(let s=2;s<=r-e;++s)n*=s;return t/n}function Em(r){const e=r.length,t=[],n=[];for(let a=0;a<e;++a){const o=r[a];t[a]=new T(o.x,o.y,o.z),n[a]=o.w}const s=[];for(let a=0;a<e;++a){const o=t[a].clone();for(let i=1;i<=a;++i)o.sub(s[a-i].clone().multiplyScalar(wm(a,i)*n[i]));s[a]=o.divideScalar(n[0])}return s}function Tm(r,e,t,n,s){const a=Sm(r,e,t,n,s);return Em(a)}class Lm extends Uf{constructor(e,t,n,s,a){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=a||this.knots.length-1;for(let o=0;o<n.length;++o){const i=n[o];this.controlPoints[o]=new ze(i.x,i.y,i.z,i.w)}}getPoint(e,t=new T){const n=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),a=Cm(this.degree,this.knots,this.controlPoints,s);return a.w!==1&&a.divideScalar(a.w),n.set(a.x,a.y,a.z)}getTangent(e,t=new T){const n=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),a=Tm(this.degree,this.knots,this.controlPoints,s,1);return n.copy(a[1]).normalize(),n}}let Te,Ye,_t;class dl extends Aa{constructor(e){super(e)}load(e,t,n,s){const a=this,o=a.path===""?Gi.extractUrlBase(e):a.path,i=new Zf(this.manager);i.setPath(a.path),i.setResponseType("arraybuffer"),i.setRequestHeader(a.requestHeader),i.setWithCredentials(a.withCredentials),i.load(e,function(l){try{t(a.parse(l,o))}catch(c){s?s(c):console.error(c),a.manager.itemError(e)}},n,s)}parse(e,t){if(Um(e))Te=new Om().parse(e);else{const s=yl(e);if(!zm(s))throw new Error("THREE.FBXLoader: Unknown format.");if(Ao(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Ao(s));Te=new Nm().parse(s)}const n=new Bi(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Pm(n,this.manager).parse(Te)}}class Pm{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ye=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),s=this.parseDeformers(),a=new Rm().parse(s);return this.parseScene(s,a,n),_t}parseConnections(){const e=new Map;return"Connections"in Te&&Te.Connections.connections.forEach(function(n){const s=n[0],a=n[1],o=n[2];e.has(s)||e.set(s,{parents:[],children:[]});const i={ID:a,relationship:o};e.get(s).parents.push(i),e.has(a)||e.set(a,{parents:[],children:[]});const l={ID:s,relationship:o};e.get(a).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Te.Objects){const n=Te.Objects.Video;for(const s in n){const a=n[s],o=parseInt(s);if(e[o]=a.RelativeFilename||a.Filename,"Content"in a){const i=a.Content instanceof ArrayBuffer&&a.Content.byteLength>0,l=typeof a.Content=="string"&&a.Content!=="";if(i||l){const c=this.parseImage(n[s]);t[a.RelativeFilename||a.Filename]=c}}}}for(const n in e){const s=e[n];t[s]!==void 0?e[n]=t[s]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,s=n.slice(n.lastIndexOf(".")+1).toLowerCase();let a;switch(s){case"bmp":a="image/bmp";break;case"jpg":case"jpeg":a="image/jpeg";break;case"png":a="image/png";break;case"tif":a="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),a="image/tga";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+a+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:a}))}}parseTextures(e){const t=new Map;if("Texture"in Te.Objects){const n=Te.Objects.Texture;for(const s in n){const a=this.parseTexture(n[s],e);t.set(parseInt(s),a)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const s=e.WrapModeU,a=e.WrapModeV,o=s!==void 0?s.value:0,i=a!==void 0?a.value:0;if(n.wrapS=o===0?Ps:Ct,n.wrapT=i===0?Ps:Ct,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const s=this.textureLoader.path,a=Ye.get(e.id).children;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(n=t[a[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const i=e.FileName.slice(-3).toLowerCase();if(i==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new lt):(l.setPath(this.textureLoader.path),o=l.load(n))}else i==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new lt):o=this.textureLoader.load(n);return this.textureLoader.setPath(s),o}parseMaterials(e){const t=new Map;if("Material"in Te.Objects){const n=Te.Objects.Material;for(const s in n){const a=this.parseMaterial(n[s],e);a!==null&&t.set(parseInt(s),a)}}return t}parseMaterial(e,t){const n=e.id,s=e.attrName;let a=e.ShadingModel;if(typeof a=="object"&&(a=a.value),!Ye.has(n))return null;const o=this.parseParameters(e,t,n);let i;switch(a.toLowerCase()){case"phong":i=new Ts;break;case"lambert":i=new vi;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',a),i=new Ts;break}return i.setValues(o),i.name=s,i}parseParameters(e,t,n){const s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=new we().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=new we().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=new we().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=new we().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(s.opacity=parseFloat(e.Opacity.value)),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=new we().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=new we().fromArray(e.SpecularColor.value));const a=this;return Ye.get(n).children.forEach(function(o){const i=o.relationship;switch(i){case"Bump":s.bumpMap=a.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":s.aoMap=a.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=a.getTexture(t,o.ID),s.map!==void 0&&(s.map.encoding=Ve);break;case"DisplacementColor":s.displacementMap=a.getTexture(t,o.ID);break;case"EmissiveColor":s.emissiveMap=a.getTexture(t,o.ID),s.emissiveMap!==void 0&&(s.emissiveMap.encoding=Ve);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=a.getTexture(t,o.ID);break;case"ReflectionColor":s.envMap=a.getTexture(t,o.ID),s.envMap!==void 0&&(s.envMap.mapping=fa,s.envMap.encoding=Ve);break;case"SpecularColor":s.specularMap=a.getTexture(t,o.ID),s.specularMap!==void 0&&(s.specularMap.encoding=Ve);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=a.getTexture(t,o.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",i);break}}),s}getTexture(e,t){return"LayeredTexture"in Te.Objects&&t in Te.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ye.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Te.Objects){const n=Te.Objects.Deformer;for(const s in n){const a=n[s],o=Ye.get(parseInt(s));if(a.attrType==="Skin"){const i=this.parseSkeleton(o,n);i.ID=s,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),i.geometryID=o.parents[0].ID,e[s]=i}else if(a.attrType==="BlendShape"){const i={id:s};i.rawTargets=this.parseMorphTargets(o,n),i.id=s,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=i}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(s){const a=t[s.ID];if(a.attrType!=="Cluster")return;const o={ID:s.ID,indices:[],weights:[],transformLink:new xe().fromArray(a.TransformLink.a)};"Indexes"in a&&(o.indices=a.Indexes.a,o.weights=a.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let s=0;s<e.children.length;s++){const a=e.children[s],o=t[a.ID],i={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;i.geoID=Ye.get(parseInt(a.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(i)}return n}parseScene(e,t,n){_t=new ns;const s=this.parseModels(e.skeletons,t,n),a=Te.Objects.Model,o=this;s.forEach(function(l){const c=a[l.ID];o.setLookAtProperties(l,c),Ye.get(l.ID).parents.forEach(function(p){const h=s.get(p.ID);h!==void 0&&h.add(l)}),l.parent===null&&_t.add(l)}),this.bindSkeleton(e.skeletons,t,s),this.createAmbientLight(),_t.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=ml(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const i=new Im().parse();_t.children.length===1&&_t.children[0].isGroup&&(_t.children[0].animations=i,_t=_t.children[0]),_t.animations=i}parseModels(e,t,n){const s=new Map,a=Te.Objects.Model;for(const o in a){const i=parseInt(o),l=a[o],c=Ye.get(i);let u=this.buildSkeleton(c,e,i,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Fi;break;case"Null":default:u=new ns;break}u.name=l.attrName?Ue.sanitizeNodeName(l.attrName):"",u.ID=i}this.getTransformData(u,l),s.set(i,u)}return s}buildSkeleton(e,t,n,s){let a=null;return e.parents.forEach(function(o){for(const i in t){const l=t[i];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const p=a;a=new Fi,a.matrixWorld.copy(c.transformLink),a.name=s?Ue.sanitizeNodeName(s):"",a.ID=n,l.bones[u]=a,p!==null&&a.add(p)}})}}),a}createCamera(e){let t,n;if(e.children.forEach(function(s){const a=Te.Objects.NodeAttribute[s.ID];a!==void 0&&(n=a)}),n===void 0)t=new Xe;else{let s=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(s=1);let a=1;n.NearPlane!==void 0&&(a=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let i=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(i=n.AspectWidth.value,l=n.AspectHeight.value);const c=i/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const p=n.FocalLength?n.FocalLength.value:null;switch(s){case 0:t=new ut(u,c,a,o),p!==null&&t.setFocalLength(p);break;case 1:t=new Ni(-i/2,i/2,l/2,-l/2,a,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new Xe;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(s){const a=Te.Objects.NodeAttribute[s.ID];a!==void 0&&(n=a)}),n===void 0)t=new Xe;else{let s;n.LightType===void 0?s=0:s=n.LightType.value;let a=16777215;n.Color!==void 0&&(a=new we().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let i=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?i=0:i=n.FarAttenuationEnd.value);const l=1;switch(s){case 0:t=new xo(a,o,i,l);break;case 1:t=new ks(a,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Ht.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Ht.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new Jf(a,o,i,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new xo(a,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let s,a=null,o=null;const i=[];return e.children.forEach(function(l){t.has(l.ID)&&(a=t.get(l.ID)),n.has(l.ID)&&i.push(n.get(l.ID))}),i.length>1?o=i:i.length>0?o=i[0]:(o=new Ts({color:13421772}),i.push(o)),"color"in a.attributes&&i.forEach(function(l){l.vertexColors=!0}),a.FBX_Deformer?(s=new Rf(a,o),s.normalizeSkinWeights()):s=new It(a,o),s}createCurve(e,t){const n=e.children.reduce(function(a,o){return t.has(o.ID)&&(a=t.get(o.ID)),a},null),s=new nl({color:3342591,linewidth:1});return new Of(n,s)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=gl(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Ye.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){const a=Te.Objects.Model[s.ID];if("Lcl_Translation"in a){const o=a.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),_t.add(e.target)):e.lookAt(new T().fromArray(o))}}})}bindSkeleton(e,t,n){const s=this.parsePoseNodes();for(const a in e){const o=e[a];Ye.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Ye.get(c).parents.forEach(function(p){n.has(p.ID)&&n.get(p.ID).bind(new zi(o.bones),s[p.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Te.Objects){const t=Te.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const s=t[n].PoseNode;Array.isArray(s)?s.forEach(function(a){e[a.Node]=new xe().fromArray(a.Matrix.a)}):e[s.Node]=new xe().fromArray(s.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Te&&"AmbientColor"in Te.GlobalSettings){const e=Te.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],s=e[2];if(t!==0||n!==0||s!==0){const a=new we(t,n,s);_t.add(new Vi(a,1))}}}}class Rm{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Te.Objects){const n=Te.Objects.Geometry;for(const s in n){const a=Ye.get(parseInt(s)),o=this.parseGeometry(a,n[s],e);t.set(parseInt(s),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const s=n.skeletons,a=[],o=e.parents.map(function(p){return Te.Objects.Model[p.ID]});if(o.length===0)return;const i=e.children.reduce(function(p,h){return s[h.ID]!==void 0&&(p=s[h.ID]),p},null);e.children.forEach(function(p){n.morphTargets[p.ID]!==void 0&&a.push(n.morphTargets[p.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=gl(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=ml(c);return this.genGeometry(t,i,a,u)}genGeometry(e,t,n,s){const a=new kt;e.attrName&&(a.name=e.attrName);const o=this.parseGeoNode(e,t),i=this.genBuffers(o),l=new Dt(i.vertex,3);if(l.applyMatrix4(s),a.setAttribute("position",l),i.colors.length>0&&a.setAttribute("color",new Dt(i.colors,3)),t&&(a.setAttribute("skinIndex",new Pi(i.weightsIndices,4)),a.setAttribute("skinWeight",new Dt(i.vertexWeights,4)),a.FBX_Deformer=t),i.normal.length>0){const c=new xt().getNormalMatrix(s),u=new Dt(i.normal,3);u.applyNormalMatrix(c),a.setAttribute("normal",u)}if(i.uvs.forEach(function(c,u){let p="uv"+(u+1).toString();u===0&&(p="uv"),a.setAttribute(p,new Dt(i.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=i.materialIndex[0],u=0;if(i.materialIndex.forEach(function(p,h){p!==c&&(a.addGroup(u,h-u,c),c=p,u=h)}),a.groups.length>0){const p=a.groups[a.groups.length-1],h=p.start+p.count;h!==i.materialIndex.length&&a.addGroup(h,i.materialIndex.length-h,c)}a.groups.length===0&&a.addGroup(0,i.materialIndex.length,i.materialIndex[0])}return this.addMorphTargets(a,e,n,s),a}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(s,a){s.indices.forEach(function(o,i){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:a,weight:s.weights[i]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,s=0,a=!1,o=[],i=[],l=[],c=[],u=[],p=[];const h=this;return e.vertexIndices.forEach(function(f,g){let m,d=!1;f<0&&(f=f^-1,d=!0);let _=[],A=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const D=pa(g,n,f,e.color);l.push(D[0],D[1],D[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(D){A.push(D.weight),_.push(D.id)}),A.length>4){a||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),a=!0);const D=[0,0,0,0],F=[0,0,0,0];A.forEach(function(b,w){let R=b,y=_[w];F.forEach(function(S,L,X){if(R>S){X[L]=R,R=S;const $=D[L];D[L]=y,y=$}})}),_=D,A=F}for(;A.length<4;)A.push(0),_.push(0);for(let D=0;D<4;++D)u.push(A[D]),p.push(_[D])}if(e.normal){const D=pa(g,n,f,e.normal);i.push(D[0],D[1],D[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=pa(g,n,f,e.material)[0],m<0&&(h.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(D,F){const b=pa(g,n,f,D);c[F]===void 0&&(c[F]=[]),c[F].push(b[0]),c[F].push(b[1])}),s++,d&&(s>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),h.genFace(t,e,o,m,i,l,c,u,p,s),n++,s=0,o=[],i=[],l=[],c=[],u=[],p=[])}),t}genFace(e,t,n,s,a,o,i,l,c,u){for(let p=2;p<u;p++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(p-1)*3]]),e.vertex.push(t.vertexPositions[n[(p-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(p-1)*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(p-1)*4]),e.vertexWeights.push(l[(p-1)*4+1]),e.vertexWeights.push(l[(p-1)*4+2]),e.vertexWeights.push(l[(p-1)*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(p-1)*4]),e.weightsIndices.push(c[(p-1)*4+1]),e.weightsIndices.push(c[(p-1)*4+2]),e.weightsIndices.push(c[(p-1)*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(p-1)*3]),e.colors.push(o[(p-1)*3+1]),e.colors.push(o[(p-1)*3+2]),e.colors.push(o[p*3]),e.colors.push(o[p*3+1]),e.colors.push(o[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(a[0]),e.normal.push(a[1]),e.normal.push(a[2]),e.normal.push(a[(p-1)*3]),e.normal.push(a[(p-1)*3+1]),e.normal.push(a[(p-1)*3+2]),e.normal.push(a[p*3]),e.normal.push(a[p*3+1]),e.normal.push(a[p*3+2])),t.uv&&t.uv.forEach(function(h,f){e.uvs[f]===void 0&&(e.uvs[f]=[]),e.uvs[f].push(i[f][0]),e.uvs[f].push(i[f][1]),e.uvs[f].push(i[f][(p-1)*2]),e.uvs[f].push(i[f][(p-1)*2+1]),e.uvs[f].push(i[f][p*2]),e.uvs[f].push(i[f][p*2+1])})}addMorphTargets(e,t,n,s){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const a=this;n.forEach(function(o){o.rawTargets.forEach(function(i){const l=Te.Objects.Geometry[i.geoID];l!==void 0&&a.genMorphGeometry(e,t,l,s,i.name)})})}genMorphGeometry(e,t,n,s,a){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],i=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const m=l[g]*3;u[m]=i[g*3],u[m+1]=i[g*3+1],u[m+2]=i[g*3+2]}const p={vertexIndices:o,vertexPositions:u},h=this.genBuffers(p),f=new Dt(h.vertex,3);f.name=a||n.attrName,f.applyMatrix4(s),e.morphAttributes.position.push(f)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Normals.a;let a=[];return n==="IndexToDirect"&&("NormalIndex"in e?a=e.NormalIndex.a:"NormalsIndex"in e&&(a=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:a,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.UV.a;let a=[];return n==="IndexToDirect"&&(a=e.UVIndex.a),{dataSize:2,buffer:s,indices:a,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Colors.a;let a=[];return n==="IndexToDirect"&&(a=e.ColorIndex.a),{dataSize:4,buffer:s,indices:a,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const s=e.Materials.a,a=[];for(let o=0;o<s.length;++o)a.push(o);return{dataSize:1,buffer:s,indices:a,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new kt;const n=t-1,s=e.KnotVector.a,a=[],o=e.Points.a;for(let p=0,h=o.length;p<h;p+=4)a.push(new ze().fromArray(o,p));let i,l;if(e.Form==="Closed")a.push(a[0]);else if(e.Form==="Periodic"){i=n,l=s.length-1-i;for(let p=0;p<n;++p)a.push(a[p])}const u=new Lm(n,s,a,i,l).getPoints(a.length*12);return new kt().setFromPoints(u)}}class Im{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const s=t[n],a=this.addClip(s);e.push(a)}return e}parseClips(){if(Te.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Te.Objects.AnimationCurveNode,t=new Map;for(const n in e){const s=e[n];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){const a={id:s.id,attr:s.attrName,curves:{}};t.set(a.id,a)}}return t}parseAnimationCurves(e){const t=Te.Objects.AnimationCurve;for(const n in t){const s={id:t[n].id,times:t[n].KeyTime.a.map(Bm),values:t[n].KeyValueFloat.a},a=Ye.get(s.id);if(a!==void 0){const o=a.parents[0].ID,i=a.parents[0].relationship;i.match(/X/)?e.get(o).curves.x=s:i.match(/Y/)?e.get(o).curves.y=s:i.match(/Z/)?e.get(o).curves.z=s:i.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=s)}}}parseAnimationLayers(e){const t=Te.Objects.AnimationLayer,n=new Map;for(const s in t){const a=[],o=Ye.get(parseInt(s));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(a[c]===void 0){const p=Ye.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(p!==void 0){const h=Te.Objects.Model[p.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:h.attrName?Ue.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};_t.traverse(function(g){g.ID===h.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new xe),"PreRotation"in h&&(f.preRotation=h.PreRotation.value),"PostRotation"in h&&(f.postRotation=h.PostRotation.value),a[c]=f}}a[c]&&(a[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(a[c]===void 0){const p=Ye.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,h=Ye.get(p).parents[0].ID,f=Ye.get(h).parents[0].ID,g=Ye.get(f).parents[0].ID,m=Te.Objects.Model[g],d={modelName:m.attrName?Ue.sanitizeNodeName(m.attrName):"",morphName:Te.Objects.Deformer[p].attrName};a[c]=d}a[c][u.attr]=u}}}),n.set(parseInt(s),a))}return n}parseAnimStacks(e){const t=Te.Objects.AnimationStack,n={};for(const s in t){const a=Ye.get(parseInt(s)).children;a.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(a[0].ID);n[s]={name:t[s].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(s){t=t.concat(n.generateTracks(s))}),new Hf(e.name,-1,t)}generateTracks(e){const t=[];let n=new T,s=new Rt,a=new T;if(e.transform&&e.transform.decompose(n,s,a),n=n.toArray(),s=new Mt().setFromQuaternion(s,e.eulerOrder).toArray(),a=a.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,s,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,a,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,s){const a=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(a,t,n);return new Bs(e+"."+s,a,o)}generateRotationTrack(e,t,n,s,a,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Ht.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Ht.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Ht.degToRad));const i=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(i,t,n);s!==void 0&&(s=s.map(Ht.degToRad),s.push(o),s=new Mt().fromArray(s),s=new Rt().setFromEuler(s)),a!==void 0&&(a=a.map(Ht.degToRad),a.push(o),a=new Mt().fromArray(a),a=new Rt().setFromEuler(a).invert());const c=new Rt,u=new Mt,p=[];for(let h=0;h<l.length;h+=3)u.set(l[h],l[h+1],l[h+2],o),c.setFromEuler(u),s!==void 0&&c.premultiply(s),a!==void 0&&c.multiply(a),c.toArray(p,h/3*4);return new ds(e+".quaternion",i,p)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(a){return a/100}),s=_t.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new zs(e.modelName+".morphTargetInfluences["+s+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,s){return n-s}),t.length>1){let n=1,s=t[0];for(let a=1;a<t.length;a++){const o=t[a];o!==s&&(t[n]=o,s=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const s=n,a=[];let o=-1,i=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(i=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];a.push(u),s[0]=u}else a.push(s[0]);if(i!==-1){const u=t.y.values[i];a.push(u),s[1]=u}else a.push(s[1]);if(l!==-1){const u=t.z.values[l];a.push(u),s[2]=u}else a.push(s[2])}),a}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],s=e.values[t]-n,a=Math.abs(s);if(a>=180){const o=a/180,i=s/o;let l=n+i;const c=e.times[t-1],p=(e.times[t]-c)/o;let h=c+p;const f=[],g=[];for(;h<e.times[t];)f.push(h),h+=p,g.push(l),l+=i;e.times=Co(e.times,t,f),e.values=Co(e.values,t,g)}}}}class Nm{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new fl,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(s,a){const o=s.match(/^[\s\t]*;/),i=s.match(/^[\s\t]*$/);if(o||i)return;const l=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=s.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(s,l):c?t.parseNodeProperty(s,c,n[++a]):u?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),a={name:n},o=this.parseNodeAttr(s),i=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,a):n in i?(n==="PoseNode"?i.PoseNode.push(a):i[n].id!==void 0&&(i[n]={},i[n][i[n].id]=i[n]),o.id!==""&&(i[n][o.id]=a)):typeof o.id=="number"?(i[n]={},i[n][o.id]=a):n!=="Properties70"&&(n==="PoseNode"?i[n]=[a]:i[n]=a),typeof o.id=="number"&&(a.id=o.id),o.name!==""&&(a.attrName=o.name),o.type!==""&&(a.attrType=o.type),this.pushStack(a)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",s="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:n,type:s}}parseNodeProperty(e,t,n){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),a=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&a===","&&(a=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,s,a);return}if(s==="C"){const l=a.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let p=a.split(",").slice(3);p=p.map(function(h){return h.trim().replace(/^"/,"")}),s="connections",a=[c,u],Vm(a,p),o[s]===void 0&&(o[s]=[])}s==="Node"&&(o.id=a),s in o&&Array.isArray(o[s])?o[s].push(a):s!=="a"?o[s]=a:o.a=a,this.setCurrentProp(o,s),s==="a"&&a.slice(-1)!==","&&(o.a=di(a))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=di(t.a))}parseNodeSpecialProperty(e,t,n){const s=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),a=s[0],o=s[1],i=s[2],l=s[3];let c=s[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=di(c);break}this.getPrevNode()[a]={type:o,type2:i,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),a)}}class Om{parse(e){const t=new bo(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const s=new fl;for(;!this.endOfContent(t);){const a=this.parseNode(t,n);a!==null&&s.add(a.name,a)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},s=t>=7500?e.getUint64():e.getUint32(),a=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),i=e.getString(o);if(s===0)return null;const l=[];for(let h=0;h<a;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",p=l.length>2?l[2]:"";for(n.singleProperty=a===1&&e.getOffset()===s;s>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(i,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),p!==""&&(n.attrType=p),i!==""&&(n.name=i),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const s=n.propertyList[0];Array.isArray(s)?(t[n.name]=n,n.a=s):t[n.name]=s}else if(e==="Connections"&&n.name==="C"){const s=[];n.propertyList.forEach(function(a,o){o!==0&&s.push(a)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(n.name==="Properties70")Object.keys(n).forEach(function(a){t[a]=n[a]});else if(e==="Properties70"&&n.name==="P"){let s=n.propertyList[0],a=n.propertyList[1];const o=n.propertyList[2],i=n.propertyList[3];let l;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),a.indexOf("Lcl ")===0&&(a=a.replace("Lcl ","Lcl_")),a==="Color"||a==="ColorRGB"||a==="Vector"||a==="Vector3D"||a.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[s]={type:a,type2:o,flag:i,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const s=e.getUint32(),a=e.getUint32(),o=e.getUint32();if(a===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}const i=Fm(new Uint8Array(e.getArrayBuffer(o))),l=new bo(i.buffer);switch(t){case"b":case"c":return l.getBooleanArray(s);case"d":return l.getFloat64Array(s);case"f":return l.getFloat32Array(s);case"i":return l.getInt32Array(s);case"l":return l.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class bo{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let s=0;s<e;s++)t[s]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),Gi.decodeText(new Uint8Array(t))}}class fl{add(e,t){this[e]=t}}function Um(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===yl(r,0,e.length)}function zm(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(s){const a=r[s-1];return r=r.slice(t+s),t++,a}for(let s=0;s<e.length;++s)if(n(1)===e[s])return!1;return!0}function Ao(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Bm(r){return r/46186158e3}const km=[];function pa(r,e,t,n){let s;switch(n.mappingType){case"ByPolygonVertex":s=r;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(s=n.indices[s]);const a=s*n.dataSize,o=a+n.dataSize;return Gm(km,n.buffer,a,o)}const hi=new Mt,Qn=new T;function ml(r){const e=new xe,t=new xe,n=new xe,s=new xe,a=new xe,o=new xe,i=new xe,l=new xe,c=new xe,u=new xe,p=new xe,h=new xe,f=r.inheritType?r.inheritType:0;if(r.translation&&e.setPosition(Qn.fromArray(r.translation)),r.preRotation){const L=r.preRotation.map(Ht.degToRad);L.push(r.eulerOrder||Mt.DefaultOrder),t.makeRotationFromEuler(hi.fromArray(L))}if(r.rotation){const L=r.rotation.map(Ht.degToRad);L.push(r.eulerOrder||Mt.DefaultOrder),n.makeRotationFromEuler(hi.fromArray(L))}if(r.postRotation){const L=r.postRotation.map(Ht.degToRad);L.push(r.eulerOrder||Mt.DefaultOrder),s.makeRotationFromEuler(hi.fromArray(L)),s.invert()}r.scale&&a.scale(Qn.fromArray(r.scale)),r.scalingOffset&&i.setPosition(Qn.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(Qn.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(Qn.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(Qn.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(p.copy(r.parentMatrix),u.copy(r.parentMatrixWorld));const g=t.clone().multiply(n).multiply(s),m=new xe;m.extractRotation(u);const d=new xe;d.copyPosition(u);const _=d.clone().invert().multiply(u),A=m.clone().invert().multiply(_),D=a,F=new xe;if(f===0)F.copy(m).multiply(g).multiply(A).multiply(D);else if(f===1)F.copy(m).multiply(A).multiply(g).multiply(D);else{const X=new xe().scale(new T().setFromMatrixScale(p)).clone().invert(),$=A.clone().multiply(X);F.copy(m).multiply(g).multiply($).multiply(D)}const b=c.clone().invert(),w=o.clone().invert();let R=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(s).multiply(b).multiply(i).multiply(o).multiply(a).multiply(w);const y=new xe().copyPosition(R),S=u.clone().multiply(y);return h.copyPosition(S),R=h.clone().multiply(F),R.premultiply(u.invert()),R}function gl(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function di(r){return r.split(",").map(function(t){return parseFloat(t)})}function yl(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),Gi.decodeText(new Uint8Array(r,e,t))}function Vm(r,e){for(let t=0,n=r.length,s=e.length;t<s;t++,n++)r[n]=e[t]}function Gm(r,e,t,n){for(let s=t,a=0;s<n;s++,a++)r[a]=e[s];return r}function Co(r,e,t){return r.slice(0,e).concat(t).concat(r.slice(e))}const Hm={class:"fly-bird flex-horiz flex-column flex-center-all pos-r w100p",onselectstart:"return false"},Wm={class:"pb-sm"},qm={class:"pos-r"},Xm={class:"pos-a score"},jm=wo({name:"fly-bird"}),Ym=Object.assign(jm,{setup(r){const e=pn(),[t,n,s]=[800,480,300],a=pn(0),o=new dl,i=new Bi;let[l,c]=[0,0];const u=pn(As.wait),p=new ut(75,t/n,.001,1e4),h=new Ui({logarithmicDepthBuffer:!0,antialias:!0,alpha:!0});h.shadowMap.enabled=!0;const f=new tl;h.setSize(t,n),h.setClearColor(1415935,1),p.position.set(-1200,300,800),p.lookAt(0,0,600);let g=null;const m=[{label:"\u5927\u7EA2",value:"big-red,Mesh1"},{label:"\u5C0F\u9ED1",value:"small-black,Mesh1"},{label:"\u5C0F\u767D",value:"small-white,Mesh2"},{label:"\u5C0F\u9EC4",value:"small-yellow,Mesh2"},{label:"\u5C0F\u84DD",value:"small-blue,Mesh2"},{label:"\u5927\u5634",value:"big-mouth,Mesh2"},{label:"\u5C0F\u732A",value:"small-pig,none"}],d=pn(m[0].value);bl(d,()=>{ne()}),f.add(new Vi(13421772));const _=new ks(4473924);_.position.set(2e3,4e3,2e3),f.add(_);const A=new ks(4473924,.5);A.position.set(10,-10,-10),f.add(A),_.castShadow=!0,_.shadow.camera.left=-2e3,_.shadow.camera.right=2e3,_.shadow.camera.top=2e3,_.shadow.camera.bottom=-2e3,_.shadow.mapSize.width=1024,_.shadow.mapSize.height=1024,_.shadow.camera.far=1e4,_.shadow.bias=-.001,h.shadowMap.type=Po;const D=()=>new Promise(oe=>{f.remove(g);const[se,ve]=m.find(ue=>ue.value===d.value).value.split(",");o.load(`/bird-3d/${se}/${se}.fbx`,ue=>{if(g=ue,g.castShadow=!0,g.receiveShadow=!0,g.scale.set(.04,.04,.04),f.add(g),ve==="none")return oe(!0);i.load(`/bird-3d/${se}/${se}.jpg`,me=>{g.traverse(He=>{He.castShadow=!0,He.receiveShadow=!0,He.name===ve&&(He.material=new Ts({map:me}),oe(!0))})})})});let[F,b,w,R,y,S,L,X]=[-.007,0,0,0,1.5,0,800,-1200];const $=()=>{const oe=new Date().getTime()-w;R=F*oe*oe/2+b*oe+S;const se=b+F*oe;g.rotation.x=Math.min((se-y)/(-y*2)*Math.PI-Math.PI/2,Math.PI/2),g.position.y=Math.min(L,Math.max(X,R))};let[O,P,V,Y,K,q,J]=[[],340,480,860,.4,3e3,3e3];const Z=()=>{const oe=K*c,se=Math.floor(oe/Y);if(a.value=Math.max(Math.floor((oe-q+P+60)/Y),0),se<0)return;let ve=-1;if(O.forEach(ue=>{ve=ue[0],ue[1].position.z=ue[2].position.z=ve*Y+q-oe+P/2}),ve!==se){const ue=Math.random()*(L-X-V)+X+V/2;O.push([se,...z(ue,se*Y+q-oe+P/2)])}O=O.filter(ue=>ue[1].position.z<-5e3?(f.remove(ue[1]),f.remove(ue[2]),!1):!0)},B=()=>{const oe=K*c,se=Math.floor((oe-q)/Y);if((oe-q)%Y>P||se<0)return!1;const ue=O.find(me=>me[0]===se);return ue?g.position.y<ue[2].position.y+J/2+60||g.position.y>ue[2].position.y+J/2+V-60:!1},z=(oe,se)=>{const ve=J,ue=new It(new Rn(P,ve,P),new vi({color:16777215})),me=new It(new Rn(P,ve,P),new vi({color:16777215}));return f.add(ue,me),ue.position.y=V/2+oe+ve/2,me.position.y=-V/2+oe-ve/2,ue.position.z=me.position.z=se,ue.receiveShadow=!0,me.receiveShadow=!0,ue.castShadow=!0,me.castShadow=!0,[ue,me]},ne=()=>{u.value=As.over},ee=()=>{f.remove(g),O.forEach(oe=>{f.remove(oe[1]),f.remove(oe[2])}),O=[]},ie=oe=>{oe.preventDefault(),b=y,S=g.position.y,w=new Date().getTime()},G=async()=>{ee(),await D(),u.value=As.gaming,g.position.y=0,l=new Date().getTime(),w=new Date().getTime()},Ce=()=>{if(u.value===As.gaming&&(c=new Date().getTime()-l,Z(),$(),B()))return ne()};To(()=>{e.value.appendChild(h.domElement),de()});const de=()=>{Ce(),requestAnimationFrame(de),h.render(f,p)};return(oe,se)=>{const ve=as("n-input-group-label"),ue=as("n-select"),me=as("n-input-group");return Ci(),Mi("div",Hm,[Cn("div",Wm,[Wt(me,null,{default:ss(()=>[Wt(ve,null,{default:ss(()=>[da("\u9009\u62E9\u5C0F\u9E1F")]),_:1}),Wt(ue,{value:d.value,"onUpdate:value":se[0]||(se[0]=He=>d.value=He),options:m,style:{width:"100px"}},null,8,["value"])]),_:1})]),Cn("div",qm,[Cn("div",{ref_key:"screenRef",ref:e,class:"mar-center pos-r",style:{width:"800px",height:"480px"},onClick:ie},null,512),Cn("div",Xm,Yi(a.value),1),Wt(vl,{status:u.value,onOnClickStart:G},{default:ss(()=>[da(" \u5F97\u5206\uFF1A"+Yi(a.value),1)]),_:1},8,["status"])])])}}}),Zm=Eo(Ym,[["__scopeId","data-v-4c650a29"]]),Mo={type:"change"},fi={type:"start"},So={type:"end"};class $m extends Nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:zn.ROTATE,TWO:zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",gt),this._domElementKeyEvents=M},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Mo),n.update(),a=s.NONE},this.update=function(){const M=new T,I=new Rt().setFromUnitVectors(e.up,new T(0,1,0)),pe=I.clone().invert(),fe=new T,ce=new Rt,ye=2*Math.PI;return function(){const Le=n.object.position;M.copy(Le).sub(n.target),M.applyQuaternion(I),i.setFromVector3(M),n.autoRotate&&a===s.NONE&&S(R()),n.enableDamping?(i.theta+=l.theta*n.dampingFactor,i.phi+=l.phi*n.dampingFactor):(i.theta+=l.theta,i.phi+=l.phi);let Pe=n.minAzimuthAngle,Ge=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ge)&&(Pe<-Math.PI?Pe+=ye:Pe>Math.PI&&(Pe-=ye),Ge<-Math.PI?Ge+=ye:Ge>Math.PI&&(Ge-=ye),Pe<=Ge?i.theta=Math.max(Pe,Math.min(Ge,i.theta)):i.theta=i.theta>(Pe+Ge)/2?Math.max(Pe,i.theta):Math.min(Ge,i.theta)),i.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,i.phi)),i.makeSafe(),i.radius*=c,i.radius=Math.max(n.minDistance,Math.min(n.maxDistance,i.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),M.setFromSpherical(i),M.applyQuaternion(pe),Le.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,p||fe.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o?(n.dispatchEvent(Mo),fe.copy(n.object.position),ce.copy(n.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",He),n.domElement.removeEventListener("pointercancel",ht),n.domElement.removeEventListener("wheel",St),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Qe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",gt)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const o=1e-6,i=new Fo,l=new Fo;let c=1;const u=new T;let p=!1;const h=new Ae,f=new Ae,g=new Ae,m=new Ae,d=new Ae,_=new Ae,A=new Ae,D=new Ae,F=new Ae,b=[],w={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function S(M){l.theta-=M}function L(M){l.phi-=M}const X=function(){const M=new T;return function(pe,fe){M.setFromMatrixColumn(fe,0),M.multiplyScalar(-pe),u.add(M)}}(),$=function(){const M=new T;return function(pe,fe){n.screenSpacePanning===!0?M.setFromMatrixColumn(fe,1):(M.setFromMatrixColumn(fe,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(pe),u.add(M)}}(),O=function(){const M=new T;return function(pe,fe){const ce=n.domElement;if(n.object.isPerspectiveCamera){const ye=n.object.position;M.copy(ye).sub(n.target);let ge=M.length();ge*=Math.tan(n.object.fov/2*Math.PI/180),X(2*pe*ge/ce.clientHeight,n.object.matrix),$(2*fe*ge/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(pe*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),$(fe*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(M){n.object.isPerspectiveCamera?c/=M:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*M)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(M){n.object.isPerspectiveCamera?c*=M:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/M)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(M){h.set(M.clientX,M.clientY)}function K(M){A.set(M.clientX,M.clientY)}function q(M){m.set(M.clientX,M.clientY)}function J(M){f.set(M.clientX,M.clientY),g.subVectors(f,h).multiplyScalar(n.rotateSpeed);const I=n.domElement;S(2*Math.PI*g.x/I.clientHeight),L(2*Math.PI*g.y/I.clientHeight),h.copy(f),n.update()}function Z(M){D.set(M.clientX,M.clientY),F.subVectors(D,A),F.y>0?P(y()):F.y<0&&V(y()),A.copy(D),n.update()}function B(M){d.set(M.clientX,M.clientY),_.subVectors(d,m).multiplyScalar(n.panSpeed),O(_.x,_.y),m.copy(d),n.update()}function z(M){M.deltaY<0?V(y()):M.deltaY>0&&P(y()),n.update()}function ne(M){let I=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),I=!0;break}I&&(M.preventDefault(),n.update())}function ee(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const M=.5*(b[0].pageX+b[1].pageX),I=.5*(b[0].pageY+b[1].pageY);h.set(M,I)}}function ie(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const M=.5*(b[0].pageX+b[1].pageX),I=.5*(b[0].pageY+b[1].pageY);m.set(M,I)}}function G(){const M=b[0].pageX-b[1].pageX,I=b[0].pageY-b[1].pageY,pe=Math.sqrt(M*M+I*I);A.set(0,pe)}function Ce(){n.enableZoom&&G(),n.enablePan&&ie()}function de(){n.enableZoom&&G(),n.enableRotate&&ee()}function oe(M){if(b.length==1)f.set(M.pageX,M.pageY);else{const pe=Fe(M),fe=.5*(M.pageX+pe.x),ce=.5*(M.pageY+pe.y);f.set(fe,ce)}g.subVectors(f,h).multiplyScalar(n.rotateSpeed);const I=n.domElement;S(2*Math.PI*g.x/I.clientHeight),L(2*Math.PI*g.y/I.clientHeight),h.copy(f)}function se(M){if(b.length===1)d.set(M.pageX,M.pageY);else{const I=Fe(M),pe=.5*(M.pageX+I.x),fe=.5*(M.pageY+I.y);d.set(pe,fe)}_.subVectors(d,m).multiplyScalar(n.panSpeed),O(_.x,_.y),m.copy(d)}function ve(M){const I=Fe(M),pe=M.pageX-I.x,fe=M.pageY-I.y,ce=Math.sqrt(pe*pe+fe*fe);D.set(0,ce),F.set(0,Math.pow(D.y/A.y,n.zoomSpeed)),P(F.y),A.copy(D)}function ue(M){n.enableZoom&&ve(M),n.enablePan&&se(M)}function me(M){n.enableZoom&&ve(M),n.enableRotate&&oe(M)}function He(M){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",Je),n.domElement.addEventListener("pointerup",Qe)),te(M),M.pointerType==="touch"?C(M):je(M))}function Je(M){n.enabled!==!1&&(M.pointerType==="touch"?x(M):ke(M))}function Qe(M){ae(M),b.length===0&&(n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Qe)),n.dispatchEvent(So),a=s.NONE}function ht(M){ae(M)}function je(M){let I;switch(M.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Un.DOLLY:if(n.enableZoom===!1)return;K(M),a=s.DOLLY;break;case Un.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;q(M),a=s.PAN}else{if(n.enableRotate===!1)return;Y(M),a=s.ROTATE}break;case Un.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;Y(M),a=s.ROTATE}else{if(n.enablePan===!1)return;q(M),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(fi)}function ke(M){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;J(M);break;case s.DOLLY:if(n.enableZoom===!1)return;Z(M);break;case s.PAN:if(n.enablePan===!1)return;B(M);break}}function St(M){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(M.preventDefault(),n.dispatchEvent(fi),z(M),n.dispatchEvent(So))}function gt(M){n.enabled===!1||n.enablePan===!1||ne(M)}function C(M){switch(le(M),b.length){case 1:switch(n.touches.ONE){case zn.ROTATE:if(n.enableRotate===!1)return;ee(),a=s.TOUCH_ROTATE;break;case zn.PAN:if(n.enablePan===!1)return;ie(),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case zn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),a=s.TOUCH_DOLLY_PAN;break;case zn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(fi)}function x(M){switch(le(M),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(M),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;se(M),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ue(M),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(M),n.update();break;default:a=s.NONE}}function k(M){n.enabled!==!1&&M.preventDefault()}function te(M){b.push(M)}function ae(M){delete w[M.pointerId];for(let I=0;I<b.length;I++)if(b[I].pointerId==M.pointerId){b.splice(I,1);return}}function le(M){let I=w[M.pointerId];I===void 0&&(I=new Ae,w[M.pointerId]=I),I.set(M.pageX,M.pageY)}function Fe(M){const I=M.pointerId===b[0].pointerId?b[1]:b[0];return w[I.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",He),n.domElement.addEventListener("pointercancel",ht),n.domElement.addEventListener("wheel",St,{passive:!1}),this.update()}}const Km={class:"fly-bird flex-horiz flex-column flex-center-all pos-r w100p",onselectstart:"return false"},Jm={class:"pb-sm"},Qm={class:"pos-r"},eg=wo({name:"fly-bird"}),tg=Object.assign(eg,{setup(r){const e=pn(),[t,n,s]=[480,480,300];pn(0);const a=new dl,o=new Bi;pn(As.wait);const i=new ut(75,t/n,.001,1e4),l=new Ui({logarithmicDepthBuffer:!0,antialias:!0,alpha:!0}),c=new tl;l.setSize(t,n),l.setClearColor(1415935,1),i.position.set(-1200,300,800),i.lookAt(0,0,600);let u=null;const p=[{label:"\u5927\u7EA2",value:"big-red,Mesh1"},{label:"\u5C0F\u9ED1",value:"small-black,Mesh1"},{label:"\u5C0F\u767D",value:"small-white,Mesh2"},{label:"\u5C0F\u9EC4",value:"small-yellow,Mesh2"},{label:"\u5C0F\u84DD",value:"small-blue,Mesh2"},{label:"\u5927\u5634",value:"big-mouth,Mesh2"},{label:"\u5C0F\u732A",value:"small-pig,none"}],h=pn(p[0].value);c.add(new Vi(13421772));const f=new ks(4473924);f.position.set(1e3,1e3,1e3),c.add(f);const g=new ks(4473924);g.position.set(10,-10,-10),c.add(g),new $m(i,l.domElement);const m=()=>new Promise(_=>{c.remove(u);const[A,D]=p.find(F=>F.value===h.value).value.split(",");a.load(`/bird-3d/${A}/${A}.fbx`,F=>{if(u=F,u.scale.set(.2,.2,.2),c.add(u),D==="none")return _(!0);o.load(`/bird-3d/${A}/${A}.jpg`,b=>{u.traverse(w=>{w.name===D&&(w.material=new Ts({map:b}),_(!0))})})})});m(),To(()=>{e.value.appendChild(l.domElement),d()});const d=()=>{requestAnimationFrame(d),l.render(c,i)};return(_,A)=>{const D=as("n-input-group-label"),F=as("n-select"),b=as("n-input-group");return Ci(),Mi("div",Km,[Cn("div",Jm,[Wt(b,null,{default:ss(()=>[Wt(D,null,{default:ss(()=>[da("\u9009\u62E9\u5C0F\u9E1F")]),_:1}),Wt(F,{value:h.value,"onUpdate:value":A[0]||(A[0]=w=>h.value=w),options:p,style:{width:"100px"},onChange:A[1]||(A[1]=w=>_.$nextTick(m))},null,8,["value"]),Wt(D,null,{default:ss(()=>[da("\u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E")]),_:1})]),_:1})]),Cn("div",Qm,[Cn("div",{ref_key:"screenRef",ref:e,class:"mar-center pos-r",style:{width:"480px",height:"480px"}},null,512)])])}}}),ng=Eo(tg,[["__scopeId","data-v-822cb612"]]),sg=Si('<h1 id="\u98DE\u7FD4\u7684\u5C0F\u9E1F-3d" tabindex="-1">\u98DE\u7FD4\u7684\u5C0F\u9E1F-3d <a class="header-anchor" href="#\u98DE\u7FD4\u7684\u5C0F\u9E1F-3d" aria-hidden="true">#</a></h1><h2 id="\u73A9\u6CD5" tabindex="-1">\u73A9\u6CD5 <a class="header-anchor" href="#\u73A9\u6CD5" aria-hidden="true">#</a></h2><p>\u70B9\u51FB\u6E38\u620F\u754C\u9762\u5C0F\u9E1F\u4F1A\u4E00\u8DF3\u4E00\u8DF3\uFF1B</p><p>\u53EF\u4EE5\u9009\u62E9\u5C0F\u9E1F\u89D2\u8272\u6E38\u73A9\uFF1B \u67E5\u770B\u5404\u5C0F\u9E1F\u9AD8\u6E05 <a href="#%E5%B0%8F%E9%B8%9F">3D\u5EFA\u6A21</a></p><div class="tip custom-block"><p class="custom-block-title">\u6709\u70B9\u5C0F\u96BE</p><p>\u867D\u7136\u6211\u80FD\u73A9\u5230 100+ \u5173</p></div>',5),ag=Si('<h2 id="\u7B97\u6CD5" tabindex="-1">\u7B97\u6CD5 <a class="header-anchor" href="#\u7B97\u6CD5" aria-hidden="true">#</a></h2><p>\u4F7F\u7528 <code>three.js</code> \u6846\u67B6\uFF1B</p><h3 id="\u5C0F\u9E1F" tabindex="-1">\u5C0F\u9E1F <a class="header-anchor" href="#\u5C0F\u9E1F" aria-hidden="true">#</a></h3><p>\u5C0F\u9E1F\u4E0A\u4E0B\u8FD0\u52A8\u4F7F\u7528\u91CD\u529B\u52A0\u901F\u5EA6\u516C\u5F0F\uFF1B</p><p>\u9E1F\u5934\u65B9\u5411\u4F7F\u7528\u901F\u5EA6\u4E0E\u89D2\u5EA6\u5BF9\u5E94\u5173\u7CFB\uFF1A[<code>\u5411\u4E0A\u521D\u59CB\u901F\u5EA6</code>, <code>- \u5411\u4E0B\u521D\u59CB\u901F\u5EA6</code>] -&gt; [ <code>- PI/2</code> , <code>PI/2</code> ];</p>',5),ig=Si(`<h3 id="\u67F1\u5B50" tabindex="-1">\u67F1\u5B50 <a class="header-anchor" href="#\u67F1\u5B50" aria-hidden="true">#</a></h3><p>\u67F1\u5B50\u79BB\u5F00\u5C4F\u5E55\u540E\u56DE\u6536\uFF0C\u4EE5\u9632\u6B62\u5185\u5B58\u6EA2\u51FA\uFF1B</p><h2 id="\u6E90\u7801" tabindex="-1">\u6E90\u7801 <a class="header-anchor" href="#\u6E90\u7801" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fly-bird flex-horiz flex-column flex-center-all pos-r w100p</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">onselectstart</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">return false</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pb-sm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">n-input-group</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">n-input-group-label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u9009\u62E9\u5C0F\u9E1F</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">n-input-group-label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">n-select</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">selectedBird</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">options</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">birds</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 100px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">n-select</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">n-input-group</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pos-r</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">screenRef</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mar-center pos-r</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width: 800px; height: 480px</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">clickBird</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      &gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pos-a score</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">start-over-mask</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">status</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">on-click-start</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u5F97\u5206\uFF1A</span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">start-over-mask</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">&lt;!--</span></span>
<span class="line"><span style="color:#676E95;"> * Created by Eric.Fang</span></span>
<span class="line"><span style="color:#676E95;"> * Create Time : 2022/12/22</span></span>
<span class="line"><span style="color:#676E95;"> * IDE : WebStorm</span></span>
<span class="line"><span style="color:#676E95;">--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineComponent</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fly-bird</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> THREE </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">three</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">FBXLoader</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">three/examples/jsm/loaders/FBXLoader.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">onMounted</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">watch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> StartOverMask </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../common/start-over-mask.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">GameStatus</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../utils/enum.util</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> screenRef </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">sw</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sh</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> distance</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">480</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> score </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fbxLoader </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">FBXLoader</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> textureLoader </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">TextureLoader</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">startTime</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> gameTime</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> status </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(GameStatus</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">wait)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> camera </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">PerspectiveCamera</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">75</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sw </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> sh</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.001</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> renderer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WebGLRenderer</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">logarithmicDepthBuffer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">antialias</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">alpha</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadowMap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">enabled </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scene </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Scene</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setSize</span><span style="color:#A6ACCD;">(sw</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sh)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setClearColor</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0x159aff</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">800</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//\u8BBE\u7F6E\u76F8\u673A\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lookAt</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">600</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// const orbitController = new OrbitControls(camera, renderer.domElement);</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> bird </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> birds </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5927\u7EA2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">big-red,Mesh1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u9ED1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small-black,Mesh1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u767D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small-white,Mesh2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u9EC4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small-yellow,Mesh2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u84DD</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small-blue,Mesh2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5927\u5634</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">big-mouth,Mesh2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u5C0F\u732A</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small-pig,none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> selectedBird </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(birds[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">watch</span><span style="color:#A6ACCD;">(selectedBird</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">gameOver</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">AmbientLight</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0xcccccc</span><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dirLight </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DirectionalLight</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0x444444</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dirLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(dirLight)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> dirLight2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">DirectionalLight</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0x444444</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dirLight2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(dirLight2)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dirLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">castShadow </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dirLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dirLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dirLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dirLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bottom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dirLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mapSize</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dirLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mapSize</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// const directionalLightCameraHelper = new THREE.CameraHelper(dirLight.shadow.camera);</span></span>
<span class="line"><span style="color:#676E95;">// scene.add(directionalLightCameraHelper);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">dirLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">far </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">dirLight</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bias </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0.001</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// //\u5B9A\u4E49\u9634\u5F71\u8D34\u56FE\u7C7B\u578B \u51CF\u5C11\u9A6C\u8D5B\u514B\u9634\u5F71</span></span>
<span class="line"><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">shadowMap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> THREE</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PCFSoftShadowMap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> reloadBird </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">bird</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mesh</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">birds</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">selectedBird</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">fbxLoader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">/bird-3d/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.fbx</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">bird</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">bird</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">castShadow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">bird</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">receiveShadow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">bird</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scale</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0.04</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.04</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.04</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">bird</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">mesh</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">textureLoader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">/bird-3d/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.jpg</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tx</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">bird</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">traverse</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">obj</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">castShadow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">receiveShadow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mesh</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">material</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshPhongMaterial</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              map</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tx</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> t0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> V0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> s0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> tb</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> bb</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0.007</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">800</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1200</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> computeBirdPosition </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">t</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">t0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">t</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">t</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">v0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">t</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">v</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">v0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">bird</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rotation</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(((</span><span style="color:#A6ACCD;">v</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">V0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">V0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">PI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">bird</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">tb</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">bb</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">pillars</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pw</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pv</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ps</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ph</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [[]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">340</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">480</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">860</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> renderPillars </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">birdDistance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pv</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">gameTime</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">birdDistance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pd</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">score</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">max</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">birdDistance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">60</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pd</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">pn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillars</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">z</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">z</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pd</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">birdDistance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pn</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">g</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">random</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">tb</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bb</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pg</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bb</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pillars</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">([</span><span style="color:#A6ACCD;">pn</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#82AAFF;">createPillar</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pd</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">birdDistance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillars</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pillars</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">z</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">5000</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> checkCrash </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">birdDistance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pv</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">gameTime</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">floor</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">birdDistance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ps</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pd</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">birdDistance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ps</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">%</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pd</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pn</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pillars</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pn</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">bird</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ph</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">60</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">bird</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ph</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">60</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> createPillar </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">g</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">pn</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">h</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ph</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pillarTop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Mesh</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BoxGeometry</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pw</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pw</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshLambertMaterial</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0xffffff</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pillarBottom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Mesh</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">BoxGeometry</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pw</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pw</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">THREE</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeshLambertMaterial</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0xffffff</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">pillarTop</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pillarBottom</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillarTop</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">g</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">h</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillarBottom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">pg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">g</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">h</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillarTop</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">z</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pillarBottom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">z</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pn</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillarTop</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">receiveShadow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillarBottom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">receiveShadow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillarTop</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">castShadow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillarBottom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">castShadow</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">pillarTop</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pillarBottom</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> gameOver </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">GameStatus</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">over</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> clearPillars </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">bird</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillars</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pillars</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> clickBird </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">preventDefault</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">v0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">V0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">s0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bird</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">t0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> start </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">clearPillars</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">reloadBird</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">GameStatus</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gaming</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">bird</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">startTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">t0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> runtime </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">GameStatus</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gaming</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">gameTime</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Date</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getTime</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">startTime</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">renderPillars</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">computeBirdPosition</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#82AAFF;">checkCrash</span><span style="color:#F07178;">()) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">gameOver</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">screenRef</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">domElement</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> render </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">runtime</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">requestAnimationFrame</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">renderer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">scene</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">camera</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// script end</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">less</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">fly-bird</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">score</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">70px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> #fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> solid #fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-weight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> bold</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> #1a1a1a</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br></div></div>`,4),cg=JSON.parse('{"title":"\u98DE\u7FD4\u7684\u5C0F\u9E1F-3d","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"\u73A9\u6CD5","slug":"\u73A9\u6CD5","link":"#\u73A9\u6CD5","children":[]},{"level":2,"title":"\u7B97\u6CD5","slug":"\u7B97\u6CD5","link":"#\u7B97\u6CD5","children":[{"level":3,"title":"\u5C0F\u9E1F","slug":"\u5C0F\u9E1F","link":"#\u5C0F\u9E1F","children":[]},{"level":3,"title":"\u67F1\u5B50","slug":"\u67F1\u5B50","link":"#\u67F1\u5B50","children":[]}]},{"level":2,"title":"\u6E90\u7801","slug":"\u6E90\u7801","link":"#\u6E90\u7801","children":[]}],"relativePath":"games/fly-bird.md"}'),rg={name:"games/fly-bird.md"},pg=Object.assign(rg,{setup(r){return(e,t)=>(Ci(),Mi("div",null,[sg,Wt(Zm),ag,Wt(ng),ig]))}});export{cg as __pageData,pg as default};
