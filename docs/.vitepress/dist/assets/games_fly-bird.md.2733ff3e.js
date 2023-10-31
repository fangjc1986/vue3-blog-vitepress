import{G as Ss,S as bl}from"./chunks/start-over-mask.737a9016.js";import{_ as Ao,h as pn,x as Ml,j as Fo,C as An,o as wi,c as Ci,k as Cn,H as Rt,w as dn,a as da,t as Yi,d as Do,Q as Ti}from"./chunks/framework.c98d58aa.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ai="148",zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sl=0,Zi=1,wl=2,Lo=1,Po=2,ws=3,Ln=0,Ot=1,Fi=2,Hs=3,fn=0,is=1,$i=2,Ki=3,Ji=4,Cl=5,ns=100,Tl=101,Al=102,Qi=103,er=104,Fl=200,Dl=201,Ll=202,Pl=203,Ro=204,Io=205,Rl=206,Il=207,Bl=208,Ol=209,Nl=210,Ul=0,zl=1,kl=2,mi=3,Vl=4,Gl=5,Hl=6,Wl=7,_a=0,ql=1,Xl=2,nn=0,jl=1,Yl=2,Zl=3,$l=4,Kl=5,Bo=300,os=301,ls=302,fa=303,yi=304,xa=306,Ps=1e3,wt=1001,gi=1002,rt=1003,tr=1004,Da=1005,Dt=1006,Jl=1007,Rs=1008,Pn=1009,Ql=1010,ec=1011,Oo=1012,tc=1013,Tn=1014,un=1015,Is=1016,nc=1017,sc=1018,rs=1020,ac=1021,ic=1022,Lt=1023,rc=1024,oc=1025,Fn=1026,cs=1027,lc=1028,cc=1029,pc=1030,uc=1031,hc=1033,La=33776,Pa=33777,Ra=33778,Ia=33779,nr=35840,sr=35841,ar=35842,ir=35843,dc=36196,rr=37492,or=37496,lr=37808,cr=37809,pr=37810,ur=37811,hr=37812,dr=37813,fr=37814,mr=37815,yr=37816,gr=37817,Er=37818,_r=37819,xr=37820,vr=37821,br=36492,ma=2300,ya=2301,Ba=2302,Mr=2400,Sr=2401,wr=2402,fc=2500,Rn=3e3,Ve=3001,mc=3200,yc=3201,Di=0,gc=1,Gt="srgb",Bs="srgb-linear",Oa=7680,Ec=519,Cr=35044,Tr="300 es",Ei=1035;class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ar=1234567;const As=Math.PI/180,Os=180/Math.PI;function mn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function Li(r,e){return(r%e+e)%e}function _c(r,e,t,n,s){return n+(r-e)*(s-n)/(t-e)}function xc(r,e,t){return r!==e?(t-r)/(e-r):0}function Fs(r,e,t){return(1-t)*r+t*e}function vc(r,e,t,n){return Fs(r,e,1-Math.exp(-t*n))}function bc(r,e=1){return e-Math.abs(Li(r,e*2)-e)}function Mc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Sc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function wc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Cc(r,e){return r+Math.random()*(e-r)}function Tc(r){return r*(.5-Math.random())}function Ac(r){r!==void 0&&(Ar=r);let e=Ar+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fc(r){return r*As}function Dc(r){return r*Os}function _i(r){return(r&r-1)===0&&r!==0}function No(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ga(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Lc(r,e,t,n,s){const a=Math.cos,o=Math.sin,i=a(t/2),l=o(t/2),c=a((e+n)/2),u=o((e+n)/2),p=a((e-n)/2),h=o((e-n)/2),f=a((n-e)/2),y=o((n-e)/2);switch(s){case"XYX":r.set(i*u,l*p,l*h,i*c);break;case"YZY":r.set(l*h,i*u,l*p,i*c);break;case"ZXZ":r.set(l*p,l*h,i*u,i*c);break;case"XZX":r.set(i*u,l*y,l*f,i*c);break;case"YXY":r.set(l*f,i*u,l*y,i*c);break;case"ZYZ":r.set(l*y,l*f,i*u,i*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cs(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Wt=Object.freeze({__proto__:null,DEG2RAD:As,RAD2DEG:Os,generateUUID:mn,clamp:ot,euclideanModulo:Li,mapLinear:_c,inverseLerp:xc,lerp:Fs,damp:vc,pingpong:bc,smoothstep:Mc,smootherstep:Sc,randInt:wc,randFloat:Cc,randFloatSpread:Tc,seededRandom:Ac,degToRad:Fc,radToDeg:Dc,isPowerOfTwo:_i,ceilPowerOfTwo:No,floorPowerOfTwo:ga,setQuaternionFromProperEuler:Lc,normalize:gt,denormalize:Cs});class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*s+e.x,this.y=a*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,a,o,i,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=i,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],i=n[3],l=n[6],c=n[1],u=n[4],p=n[7],h=n[2],f=n[5],y=n[8],m=s[0],d=s[3],E=s[6],S=s[1],_=s[4],v=s[7],M=s[2],A=s[5],R=s[8];return a[0]=o*m+i*S+l*M,a[3]=o*d+i*_+l*A,a[6]=o*E+i*v+l*R,a[1]=c*m+u*S+p*M,a[4]=c*d+u*_+p*A,a[7]=c*E+u*v+p*R,a[2]=h*m+f*S+y*M,a[5]=h*d+f*_+y*A,a[8]=h*E+f*v+y*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],i=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*i*c-n*a*u+n*i*l+s*a*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],i=e[5],l=e[6],c=e[7],u=e[8],p=u*o-i*c,h=i*l-u*a,f=c*a-o*l,y=t*p+n*h+s*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/y;return e[0]=p*m,e[1]=(s*c-u*n)*m,e[2]=(i*n-s*o)*m,e[3]=h*m,e[4]=(u*t-s*l)*m,e[5]=(s*a-i*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*a)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,o,i){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*i)+o+e,-s*c,s*l,-s*(-c*o+l*i)+i+t,0,0,1),this}scale(e,t){return this.premultiply(Na.makeScale(e,t)),this}rotate(e){return this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new xt;function Uo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ns(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ua(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ua={[Gt]:{[Bs]:Dn},[Bs]:{[Gt]:ua}},ft={legacyMode:!0,get workingColorSpace(){return Bs},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ua[e]&&Ua[e][t]!==void 0){const n=Ua[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},zo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},Nt={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function za(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function qs(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Li(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=za(o,a,e+1/3),this.g=za(o,a,e),this.b=za(o,a,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let a;const o=s[1],i=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,ft.toWorkingColorSpace(this,t),n(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,ft.toWorkingColorSpace(this,t),n(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){const l=parseFloat(a[1])/360,c=parseFloat(a[2])/100,u=parseFloat(a[3])/100;return n(a[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],o=a.length;if(o===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,ft.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Gt){const n=zo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ft.fromWorkingColorSpace(qs(this,et),e),ot(et.r*255,0,255)<<16^ot(et.g*255,0,255)<<8^ot(et.b*255,0,255)<<0}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(qs(this,et),t);const n=et.r,s=et.g,a=et.b,o=Math.max(n,s,a),i=Math.min(n,s,a);let l,c;const u=(i+o)/2;if(i===o)l=0,c=0;else{const p=o-i;switch(c=u<=.5?p/(o+i):p/(2-o-i),o){case n:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-n)/p+2;break;case a:l=(n-s)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(qs(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e=Gt){return ft.fromWorkingColorSpace(qs(this,et),e),e!==Gt?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${et.r*255|0},${et.g*255|0},${et.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Nt),Nt.h+=e,Nt.s+=t,Nt.l+=n,this.setHSL(Nt.h,Nt.s,Nt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nt),e.getHSL(Ws);const n=Fs(Nt.h,Ws.h,t),s=Fs(Nt.s,Ws.s,t),a=Fs(Nt.l,Ws.l,t);return this.setHSL(n,s,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ae.NAMES=zo;let Vn;class ko{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vn===void 0&&(Vn=Ns("canvas")),Vn.width=e.width,Vn.height=e.height;const n=Vn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=Dn(a[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vo{constructor(e=null){this.isSource=!0,this.uuid=mn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,i=s.length;o<i;o++)s[o].isDataTexture?a.push(ka(s[o].image)):a.push(ka(s[o]))}else a=ka(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function ka(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ko.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pc=0;class lt extends Nn{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,n=wt,s=wt,a=Dt,o=Rs,i=Lt,l=Pn,c=lt.DEFAULT_ANISOTROPY,u=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=mn(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=i,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ps:e.x=e.x-Math.floor(e.x);break;case wt:e.x=e.x<0?0:1;break;case gi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ps:e.y=e.y-Math.floor(e.y);break;case wt:e.y=e.y<0?0:1;break;case gi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}lt.DEFAULT_IMAGE=null;lt.DEFAULT_MAPPING=Bo;lt.DEFAULT_ANISOTROPY=1;class Ue{constructor(e=0,t=0,n=0,s=1){Ue.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const l=e.elements,c=l[0],u=l[4],p=l[8],h=l[1],f=l[5],y=l[9],m=l[2],d=l[6],E=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-m)<.01&&Math.abs(y-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+m)<.1&&Math.abs(y+d)<.1&&Math.abs(c+f+E-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(f+1)/2,M=(E+1)/2,A=(u+h)/4,R=(p+m)/4,g=(y+d)/4;return _>v&&_>M?_<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(_),s=A/n,a=R/n):v>M?v<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),n=A/s,a=g/s):M<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(M),n=R/a,s=g/a),this.set(n,s,a,t),this}let S=Math.sqrt((d-y)*(d-y)+(p-m)*(p-m)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(d-y)/S,this.y=(p-m)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+E-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class In extends Nn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ue(0,0,e,t),this.scissorTest=!1,this.viewport=new Ue(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Go extends lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rt,this.minFilter=rt,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rc extends lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rt,this.minFilter=rt,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class It{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,o,i){let l=n[s+0],c=n[s+1],u=n[s+2],p=n[s+3];const h=a[o+0],f=a[o+1],y=a[o+2],m=a[o+3];if(i===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(i===1){e[t+0]=h,e[t+1]=f,e[t+2]=y,e[t+3]=m;return}if(p!==m||l!==h||c!==f||u!==y){let d=1-i;const E=l*h+c*f+u*y+p*m,S=E>=0?1:-1,_=1-E*E;if(_>Number.EPSILON){const M=Math.sqrt(_),A=Math.atan2(M,E*S);d=Math.sin(d*A)/M,i=Math.sin(i*A)/M}const v=i*S;if(l=l*d+h*v,c=c*d+f*v,u=u*d+y*v,p=p*d+m*v,d===1-i){const M=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=M,c*=M,u*=M,p*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,o){const i=n[s],l=n[s+1],c=n[s+2],u=n[s+3],p=a[o],h=a[o+1],f=a[o+2],y=a[o+3];return e[t]=i*y+u*p+l*f-c*h,e[t+1]=l*y+u*h+c*p-i*f,e[t+2]=c*y+u*f+i*h-l*p,e[t+3]=u*y-i*p-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,a=e._z,o=e._order,i=Math.cos,l=Math.sin,c=i(n/2),u=i(s/2),p=i(a/2),h=l(n/2),f=l(s/2),y=l(a/2);switch(o){case"XYZ":this._x=h*u*p+c*f*y,this._y=c*f*p-h*u*y,this._z=c*u*y+h*f*p,this._w=c*u*p-h*f*y;break;case"YXZ":this._x=h*u*p+c*f*y,this._y=c*f*p-h*u*y,this._z=c*u*y-h*f*p,this._w=c*u*p+h*f*y;break;case"ZXY":this._x=h*u*p-c*f*y,this._y=c*f*p+h*u*y,this._z=c*u*y+h*f*p,this._w=c*u*p-h*f*y;break;case"ZYX":this._x=h*u*p-c*f*y,this._y=c*f*p+h*u*y,this._z=c*u*y-h*f*p,this._w=c*u*p+h*f*y;break;case"YZX":this._x=h*u*p+c*f*y,this._y=c*f*p+h*u*y,this._z=c*u*y-h*f*p,this._w=c*u*p-h*f*y;break;case"XZY":this._x=h*u*p-c*f*y,this._y=c*f*p-h*u*y,this._z=c*u*y+h*f*p,this._w=c*u*p+h*f*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],o=t[1],i=t[5],l=t[9],c=t[2],u=t[6],p=t[10],h=n+i+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(o-s)*f}else if(n>i&&n>p){const f=2*Math.sqrt(1+n-i-p);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(a+c)/f}else if(i>p){const f=2*Math.sqrt(1+i-n-p);this._w=(a-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+p-n-i);this._w=(o-s)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,o=e._w,i=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*i+s*c-a*l,this._y=s*u+o*l+a*i-n*c,this._z=a*u+o*c+n*l-s*i,this._w=o*u-n*i-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,o=this._w;let i=o*e._w+n*e._x+s*e._y+a*e._z;if(i<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,i=-i):this.copy(e),i>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const l=1-i*i;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,i),p=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*p+this._w*h,this._x=n*p+this._x*h,this._y=s*p+this._y*h,this._z=a*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(a),n*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,o=e.y,i=e.z,l=e.w,c=l*t+o*s-i*n,u=l*n+i*t-a*s,p=l*s+a*n-o*t,h=-a*t-o*n-i*s;return this.x=c*l+h*-a+u*-i-p*-o,this.y=u*l+h*-o+p*-a-c*-i,this.z=p*l+h*-i+c*-o-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,o=t.x,i=t.y,l=t.z;return this.x=s*l-a*i,this.y=a*o-n*l,this.z=n*i-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new D,Fr=new It;class Vs{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,a=-1/0,o=-1/0,i=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],p=e[l+1],h=e[l+2];u<t&&(t=u),p<n&&(n=p),h<s&&(s=h),u>a&&(a=u),p>o&&(o=p),h>i&&(i=h)}return this.min.set(t,n,s),this.max.set(a,o,i),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,a=-1/0,o=-1/0,i=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),p=e.getY(l),h=e.getZ(l);u<t&&(t=u),p<n&&(n=p),h<s&&(s=h),u>a&&(a=u),p>o&&(o=p),h>i&&(i=h)}return this.min.set(t,n,s),this.max.set(a,o,i),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const a=n.attributes.position;for(let o=0,i=a.count;o<i;o++)xn.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(xn)}else n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox),Ga.applyMatrix4(e.matrixWorld),this.union(Ga);const s=e.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),Xs.subVectors(this.max,ys),Gn.subVectors(e.a,ys),Hn.subVectors(e.b,ys),Wn.subVectors(e.c,ys),sn.subVectors(Hn,Gn),an.subVectors(Wn,Hn),vn.subVectors(Gn,Wn);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-vn.z,vn.y,sn.z,0,-sn.x,an.z,0,-an.x,vn.z,0,-vn.x,-sn.y,sn.x,0,-an.y,an.x,0,-vn.y,vn.x,0];return!Ha(t,Gn,Hn,Wn,Xs)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,Gn,Hn,Wn,Xs))?!1:(js.crossVectors(sn,an),t=[js.x,js.y,js.z],Ha(t,Gn,Hn,Wn,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new D,new D,new D,new D,new D,new D,new D,new D],xn=new D,Ga=new Vs,Gn=new D,Hn=new D,Wn=new D,sn=new D,an=new D,vn=new D,ys=new D,Xs=new D,js=new D,bn=new D;function Ha(r,e,t,n,s){for(let a=0,o=r.length-3;a<=o;a+=3){bn.fromArray(r,a);const i=s.x*Math.abs(bn.x)+s.y*Math.abs(bn.y)+s.z*Math.abs(bn.z),l=e.dot(bn),c=t.dot(bn),u=n.dot(bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>i)return!1}return!0}const Ic=new Vs,gs=new D,Wa=new D;class va{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ic.setFromPoints(e).getCenter(n);let s=0;for(let a=0,o=e.length;a<o;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(gs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(Wa)),this.expandByPoint(gs.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new D,qa=new D,Ys=new D,rn=new D,Xa=new D,Zs=new D,ja=new D;class Ho{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.direction).multiplyScalar(t).add(this.origin),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qa.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(qa);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Ys),i=rn.dot(this.direction),l=-rn.dot(Ys),c=rn.lengthSq(),u=Math.abs(1-o*o);let p,h,f,y;if(u>0)if(p=o*l-i,h=o*i-l,y=a*u,p>=0)if(h>=-y)if(h<=y){const m=1/u;p*=m,h*=m,f=p*(p+o*h+2*i)+h*(o*p+h+2*l)+c}else h=a,p=Math.max(0,-(o*h+i)),f=-p*p+h*(h+2*l)+c;else h=-a,p=Math.max(0,-(o*h+i)),f=-p*p+h*(h+2*l)+c;else h<=-y?(p=Math.max(0,-(-o*a+i)),h=p>0?-a:Math.min(Math.max(-a,-l),a),f=-p*p+h*(h+2*l)+c):h<=y?(p=0,h=Math.min(Math.max(-a,-l),a),f=h*(h+2*l)+c):(p=Math.max(0,-(o*a+i)),h=p>0?a:Math.min(Math.max(-a,-l),a),f=-p*p+h*(h+2*l)+c);else h=o>0?-a:a,p=Math.max(0,-(o*h+i)),f=-p*p+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(p).add(this.origin),s&&s.copy(Ys).multiplyScalar(h).add(qa),f}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),s=$t.dot($t)-n*n,a=e.radius*e.radius;if(s>a)return null;const o=Math.sqrt(a-s),i=n-o,l=n+o;return i<0&&l<0?null:i<0?this.at(l,t):this.at(i,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,o,i,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),p>=0?(i=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(i=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),n>l||i>s)||((i>n||n!==n)&&(n=i),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,s,a){Xa.subVectors(t,e),Zs.subVectors(n,e),ja.crossVectors(Xa,Zs);let o=this.direction.dot(ja),i;if(o>0){if(s)return null;i=1}else if(o<0)i=-1,o=-o;else return null;rn.subVectors(this.origin,e);const l=i*this.direction.dot(Zs.crossVectors(rn,Zs));if(l<0)return null;const c=i*this.direction.dot(Xa.cross(rn));if(c<0||l+c>o)return null;const u=-i*rn.dot(ja);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,a,o,i,l,c,u,p,h,f,y,m,d){const E=this.elements;return E[0]=e,E[4]=t,E[8]=n,E[12]=s,E[1]=a,E[5]=o,E[9]=i,E[13]=l,E[2]=c,E[6]=u,E[10]=p,E[14]=h,E[3]=f,E[7]=y,E[11]=m,E[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qn.setFromMatrixColumn(e,0).length(),a=1/qn.setFromMatrixColumn(e,1).length(),o=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,o=Math.cos(n),i=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const h=o*u,f=o*p,y=i*u,m=i*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=f+y*c,t[5]=h-m*c,t[9]=-i*l,t[2]=m-h*c,t[6]=y+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*p,y=c*u,m=c*p;t[0]=h+m*i,t[4]=y*i-f,t[8]=o*c,t[1]=o*p,t[5]=o*u,t[9]=-i,t[2]=f*i-y,t[6]=m+h*i,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*p,y=c*u,m=c*p;t[0]=h-m*i,t[4]=-o*p,t[8]=y+f*i,t[1]=f+y*i,t[5]=o*u,t[9]=m-h*i,t[2]=-o*c,t[6]=i,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*p,y=i*u,m=i*p;t[0]=l*u,t[4]=y*c-f,t[8]=h*c+m,t[1]=l*p,t[5]=m*c+h,t[9]=f*c-y,t[2]=-c,t[6]=i*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,y=i*l,m=i*c;t[0]=l*u,t[4]=m-h*p,t[8]=y*p+f,t[1]=p,t[5]=o*u,t[9]=-i*u,t[2]=-c*u,t[6]=f*p+y,t[10]=h-m*p}else if(e.order==="XZY"){const h=o*l,f=o*c,y=i*l,m=i*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=h*p+m,t[5]=o*u,t[9]=f*p-y,t[2]=y*p-f,t[6]=i*u,t[10]=m*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bc,e,Oc)}lookAt(e,t,n){const s=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),on.crossVectors(n,Mt),on.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),on.crossVectors(n,Mt)),on.normalize(),$s.crossVectors(Mt,on),s[0]=on.x,s[4]=$s.x,s[8]=Mt.x,s[1]=on.y,s[5]=$s.y,s[9]=Mt.y,s[2]=on.z,s[6]=$s.z,s[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,o=n[0],i=n[4],l=n[8],c=n[12],u=n[1],p=n[5],h=n[9],f=n[13],y=n[2],m=n[6],d=n[10],E=n[14],S=n[3],_=n[7],v=n[11],M=n[15],A=s[0],R=s[4],g=s[8],T=s[12],L=s[1],X=s[5],$=s[9],O=s[13],P=s[2],V=s[6],Y=s[10],K=s[14],q=s[3],J=s[7],Z=s[11],z=s[15];return a[0]=o*A+i*L+l*P+c*q,a[4]=o*R+i*X+l*V+c*J,a[8]=o*g+i*$+l*Y+c*Z,a[12]=o*T+i*O+l*K+c*z,a[1]=u*A+p*L+h*P+f*q,a[5]=u*R+p*X+h*V+f*J,a[9]=u*g+p*$+h*Y+f*Z,a[13]=u*T+p*O+h*K+f*z,a[2]=y*A+m*L+d*P+E*q,a[6]=y*R+m*X+d*V+E*J,a[10]=y*g+m*$+d*Y+E*Z,a[14]=y*T+m*O+d*K+E*z,a[3]=S*A+_*L+v*P+M*q,a[7]=S*R+_*X+v*V+M*J,a[11]=S*g+_*$+v*Y+M*Z,a[15]=S*T+_*O+v*K+M*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],o=e[1],i=e[5],l=e[9],c=e[13],u=e[2],p=e[6],h=e[10],f=e[14],y=e[3],m=e[7],d=e[11],E=e[15];return y*(+a*l*p-s*c*p-a*i*h+n*c*h+s*i*f-n*l*f)+m*(+t*l*f-t*c*h+a*o*h-s*o*f+s*c*u-a*l*u)+d*(+t*c*p-t*i*f-a*o*p+n*o*f+a*i*u-n*c*u)+E*(-s*i*u-t*l*p+t*i*h+s*o*p-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],o=e[4],i=e[5],l=e[6],c=e[7],u=e[8],p=e[9],h=e[10],f=e[11],y=e[12],m=e[13],d=e[14],E=e[15],S=p*d*c-m*h*c+m*l*f-i*d*f-p*l*E+i*h*E,_=y*h*c-u*d*c-y*l*f+o*d*f+u*l*E-o*h*E,v=u*m*c-y*p*c+y*i*f-o*m*f-u*i*E+o*p*E,M=y*p*l-u*m*l-y*i*h+o*m*h+u*i*d-o*p*d,A=t*S+n*_+s*v+a*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=S*R,e[1]=(m*h*a-p*d*a-m*s*f+n*d*f+p*s*E-n*h*E)*R,e[2]=(i*d*a-m*l*a+m*s*c-n*d*c-i*s*E+n*l*E)*R,e[3]=(p*l*a-i*h*a-p*s*c+n*h*c+i*s*f-n*l*f)*R,e[4]=_*R,e[5]=(u*d*a-y*h*a+y*s*f-t*d*f-u*s*E+t*h*E)*R,e[6]=(y*l*a-o*d*a-y*s*c+t*d*c+o*s*E-t*l*E)*R,e[7]=(o*h*a-u*l*a+u*s*c-t*h*c-o*s*f+t*l*f)*R,e[8]=v*R,e[9]=(y*p*a-u*m*a-y*n*f+t*m*f+u*n*E-t*p*E)*R,e[10]=(o*m*a-y*i*a+y*n*c-t*m*c-o*n*E+t*i*E)*R,e[11]=(u*i*a-o*p*a-u*n*c+t*p*c+o*n*f-t*i*f)*R,e[12]=M*R,e[13]=(u*m*s-y*p*s+y*n*h-t*m*h-u*n*d+t*p*d)*R,e[14]=(y*i*s-o*m*s-y*n*l+t*m*l+o*n*d-t*i*d)*R,e[15]=(o*p*s-u*i*s+u*n*l-t*p*l-o*n*h+t*i*h)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,o=e.x,i=e.y,l=e.z,c=a*o,u=a*i;return this.set(c*o+n,c*i-s*l,c*l+s*i,0,c*i+s*l,u*i+n,u*l-s*o,0,c*l-s*i,u*l+s*o,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,o){return this.set(1,n,a,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,o=t._y,i=t._z,l=t._w,c=a+a,u=o+o,p=i+i,h=a*c,f=a*u,y=a*p,m=o*u,d=o*p,E=i*p,S=l*c,_=l*u,v=l*p,M=n.x,A=n.y,R=n.z;return s[0]=(1-(m+E))*M,s[1]=(f+v)*M,s[2]=(y-_)*M,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(h+E))*A,s[6]=(d+S)*A,s[7]=0,s[8]=(y+_)*R,s[9]=(d-S)*R,s[10]=(1-(h+m))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=qn.set(s[0],s[1],s[2]).length();const o=qn.set(s[4],s[5],s[6]).length(),i=qn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Ut.copy(this);const c=1/a,u=1/o,p=1/i;return Ut.elements[0]*=c,Ut.elements[1]*=c,Ut.elements[2]*=c,Ut.elements[4]*=u,Ut.elements[5]*=u,Ut.elements[6]*=u,Ut.elements[8]*=p,Ut.elements[9]*=p,Ut.elements[10]*=p,t.setFromRotationMatrix(Ut),n.x=a,n.y=o,n.z=i,this}makePerspective(e,t,n,s,a,o){const i=this.elements,l=2*a/(t-e),c=2*a/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),h=-(o+a)/(o-a),f=-2*o*a/(o-a);return i[0]=l,i[4]=0,i[8]=u,i[12]=0,i[1]=0,i[5]=c,i[9]=p,i[13]=0,i[2]=0,i[6]=0,i[10]=h,i[14]=f,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(e,t,n,s,a,o){const i=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-a),p=(t+e)*l,h=(n+s)*c,f=(o+a)*u;return i[0]=2*l,i[4]=0,i[8]=0,i[12]=-p,i[1]=0,i[5]=2*c,i[9]=0,i[13]=-h,i[2]=0,i[6]=0,i[10]=-2*u,i[14]=-f,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new D,Ut=new xe,Bc=new D(0,0,0),Oc=new D(1,1,1),on=new D,$s=new D,Mt=new D,Dr=new xe,Lr=new It;class Ct{constructor(e=0,t=0,n=0,s=Ct.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],o=s[4],i=s[8],l=s[1],c=s[5],u=s[9],p=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(i,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(i,f));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(i,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lr.setFromEuler(this),this.setFromQuaternion(Lr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ct.DefaultOrder="XYZ";Ct.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nc=0;const Pr=new D,Xn=new It,Kt=new xe,Ks=new D,Es=new D,Uc=new D,zc=new It,Rr=new D(1,0,0),Ir=new D(0,1,0),Br=new D(0,0,1),kc={type:"added"},Or={type:"removed"};class Xe extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DefaultUp.clone();const e=new D,t=new Ct,n=new It,s=new D(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new xt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xe.DefaultMatrixWorldAutoUpdate,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(e,t){return Xn.setFromAxisAngle(e,t),this.quaternion.premultiply(Xn),this}rotateX(e){return this.rotateOnAxis(Rr,e)}rotateY(e){return this.rotateOnAxis(Ir,e)}rotateZ(e){return this.rotateOnAxis(Br,e)}translateOnAxis(e,t){return Pr.copy(e).applyQuaternion(this.quaternion),this.position.add(Pr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rr,e)}translateY(e){return this.translateOnAxis(Ir,e)}translateZ(e){return this.translateOnAxis(Br,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kt.lookAt(Es,Ks,this.up):Kt.lookAt(Ks,Es,this.up),this.quaternion.setFromRotationMatrix(Kt),s&&(Kt.extractRotation(s.matrixWorld),Xn.setFromRotationMatrix(Kt),this.quaternion.premultiply(Xn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Or)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Or)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,a=this.children.length;s<a;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,Uc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,zc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++){const i=s[a];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function a(i,l){return i[l.uuid]===void 0&&(i[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const l=i.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let l=0,c=this.material.length;l<c;l++)i.push(a(e.materials,this.material[l]));s.material=i}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let i=0;i<this.children.length;i++)s.children.push(this.children[i].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let i=0;i<this.animations.length;i++){const l=this.animations[i];s.animations.push(a(e.animations,l))}}if(t){const i=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),p=o(e.shapes),h=o(e.skeletons),f=o(e.animations),y=o(e.nodes);i.length>0&&(n.geometries=i),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(i){const l=[];for(const c in i){const u=i[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Xe.DefaultUp=new D(0,1,0);Xe.DefaultMatrixAutoUpdate=!0;Xe.DefaultMatrixWorldAutoUpdate=!0;const zt=new D,Jt=new D,Ya=new D,Qt=new D,jn=new D,Yn=new D,Nr=new D,Za=new D,$a=new D,Ka=new D;class tn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zt.subVectors(e,t),s.cross(zt);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){zt.subVectors(s,t),Jt.subVectors(n,t),Ya.subVectors(e,t);const o=zt.dot(zt),i=zt.dot(Jt),l=zt.dot(Ya),c=Jt.dot(Jt),u=Jt.dot(Ya),p=o*c-i*i;if(p===0)return a.set(-2,-1,-1);const h=1/p,f=(c*l-i*u)*h,y=(o*u-i*l)*h;return a.set(1-f-y,y,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qt),Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getUV(e,t,n,s,a,o,i,l){return this.getBarycoord(e,t,n,s,Qt),l.set(0,0),l.addScaledVector(a,Qt.x),l.addScaledVector(o,Qt.y),l.addScaledVector(i,Qt.z),l}static isFrontFacing(e,t,n,s){return zt.subVectors(n,t),Jt.subVectors(e,t),zt.cross(Jt).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),zt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,a){return tn.getUV(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let o,i;jn.subVectors(s,n),Yn.subVectors(a,n),Za.subVectors(e,n);const l=jn.dot(Za),c=Yn.dot(Za);if(l<=0&&c<=0)return t.copy(n);$a.subVectors(e,s);const u=jn.dot($a),p=Yn.dot($a);if(u>=0&&p<=u)return t.copy(s);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(jn,o);Ka.subVectors(e,a);const f=jn.dot(Ka),y=Yn.dot(Ka);if(y>=0&&f<=y)return t.copy(a);const m=f*c-l*y;if(m<=0&&c>=0&&y<=0)return i=c/(c-y),t.copy(n).addScaledVector(Yn,i);const d=u*y-f*p;if(d<=0&&p-u>=0&&f-y>=0)return Nr.subVectors(a,s),i=(p-u)/(p-u+(f-y)),t.copy(s).addScaledVector(Nr,i);const E=1/(d+m+h);return o=m*E,i=h*E,t.copy(n).addScaledVector(jn,o).addScaledVector(Yn,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vc=0;class Un extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=is,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ro,this.blendDst=Io,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const i in a){const l=a[i];delete l.metadata,o.push(l)}return o}if(t){const a=s(e.textures),o=s(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qo extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new D,Js=new Se;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),a=gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Pi extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xo extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Gc=0;const Ft=new xe,Ja=new Xe,Zn=new D,St=new Vs,_s=new Vs,it=new D;class Vt extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uo(e)?Xo:Pi)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new xt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];St.setFromBufferAttribute(a),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const i=t[a];_s.setFromBufferAttribute(i),this.morphTargetsRelative?(it.addVectors(St.min,_s.min),St.expandByPoint(it),it.addVectors(St.max,_s.max),St.expandByPoint(it)):(St.expandByPoint(_s.min),St.expandByPoint(_s.max))}St.getCenter(n);let s=0;for(let a=0,o=e.count;a<o;a++)it.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(it));if(t)for(let a=0,o=t.length;a<o;a++){const i=t[a],l=this.morphTargetsRelative;for(let c=0,u=i.count;c<u;c++)it.fromBufferAttribute(i,c),l&&(Zn.fromBufferAttribute(e,c),it.add(Zn)),s=Math.max(s,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,a=t.normal.array,o=t.uv.array,i=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*i),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<i;L++)c[L]=new D,u[L]=new D;const p=new D,h=new D,f=new D,y=new Se,m=new Se,d=new Se,E=new D,S=new D;function _(L,X,$){p.fromArray(s,L*3),h.fromArray(s,X*3),f.fromArray(s,$*3),y.fromArray(o,L*2),m.fromArray(o,X*2),d.fromArray(o,$*2),h.sub(p),f.sub(p),m.sub(y),d.sub(y);const O=1/(m.x*d.y-d.x*m.y);isFinite(O)&&(E.copy(h).multiplyScalar(d.y).addScaledVector(f,-m.y).multiplyScalar(O),S.copy(f).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(O),c[L].add(E),c[X].add(E),c[$].add(E),u[L].add(S),u[X].add(S),u[$].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let L=0,X=v.length;L<X;++L){const $=v[L],O=$.start,P=$.count;for(let V=O,Y=O+P;V<Y;V+=3)_(n[V+0],n[V+1],n[V+2])}const M=new D,A=new D,R=new D,g=new D;function T(L){R.fromArray(a,L*3),g.copy(R);const X=c[L];M.copy(X),M.sub(R.multiplyScalar(R.dot(X))).normalize(),A.crossVectors(g,X);const O=A.dot(u[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=O}for(let L=0,X=v.length;L<X;++L){const $=v[L],O=$.start,P=$.count;for(let V=O,Y=O+P;V<Y;V+=3)T(n[V+0]),T(n[V+1]),T(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new D,a=new D,o=new D,i=new D,l=new D,c=new D,u=new D,p=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){const y=e.getX(h+0),m=e.getX(h+1),d=e.getX(h+2);s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,a),p.subVectors(s,a),u.cross(p),i.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),i.add(u),l.add(u),c.add(u),n.setXYZ(y,i.x,i.y,i.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,a),p.subVectors(s,a),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(i,l){const c=i.array,u=i.itemSize,p=i.normalized,h=new c.constructor(l.length*u);let f=0,y=0;for(let m=0,d=l.length;m<d;m++){i.isInterleavedBufferAttribute?f=l[m]*i.data.stride+i.offset:f=l[m]*u;for(let E=0;E<u;E++)h[y++]=c[f++]}return new qt(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const i in s){const l=s[i],c=e(l,n);t.setAttribute(i,c)}const a=this.morphAttributes;for(const i in a){const l=[],c=a[i];for(let u=0,p=c.length;u<p;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[i]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let i=0,l=o.length;i<l;i++){const c=o[i];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const f=c[p];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const i=this.boundingSphere;return i!==null&&(e.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],p=a[c];for(let h=0,f=p.length;h<f;h++)u.push(p[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const i=e.boundingBox;i!==null&&(this.boundingBox=i.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ur=new xe,$n=new Ho,Qa=new va,xs=new D,vs=new D,bs=new D,ei=new D,Qs=new D,ea=new Se,ta=new Se,na=new Se,ti=new D,sa=new D;class Bt extends Xe{constructor(e=new Vt,t=new qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const i=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const i=this.morphTargetInfluences;if(a&&i){Qs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=i[l],p=a[l];u!==0&&(ei.fromBufferAttribute(p,e),o?Qs.addScaledVector(ei,u):Qs.addScaledVector(ei.sub(t),u))}t.add(Qs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(a),e.ray.intersectsSphere(Qa)===!1)||(Ur.copy(a).invert(),$n.copy(e.ray).applyMatrix4(Ur),n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1))return;let o;const i=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,p=n.groups,h=n.drawRange;if(i!==null)if(Array.isArray(s))for(let f=0,y=p.length;f<y;f++){const m=p[f],d=s[m.materialIndex],E=Math.max(m.start,h.start),S=Math.min(i.count,Math.min(m.start+m.count,h.start+h.count));for(let _=E,v=S;_<v;_+=3){const M=i.getX(_),A=i.getX(_+1),R=i.getX(_+2);o=aa(this,d,e,$n,c,u,M,A,R),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const f=Math.max(0,h.start),y=Math.min(i.count,h.start+h.count);for(let m=f,d=y;m<d;m+=3){const E=i.getX(m),S=i.getX(m+1),_=i.getX(m+2);o=aa(this,s,e,$n,c,u,E,S,_),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let f=0,y=p.length;f<y;f++){const m=p[f],d=s[m.materialIndex],E=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let _=E,v=S;_<v;_+=3){const M=_,A=_+1,R=_+2;o=aa(this,d,e,$n,c,u,M,A,R),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const f=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let m=f,d=y;m<d;m+=3){const E=m,S=m+1,_=m+2;o=aa(this,s,e,$n,c,u,E,S,_),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function Hc(r,e,t,n,s,a,o,i){let l;if(e.side===Ot?l=n.intersectTriangle(o,a,s,!0,i):l=n.intersectTriangle(s,a,o,e.side===Ln,i),l===null)return null;sa.copy(i),sa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:r}}function aa(r,e,t,n,s,a,o,i,l){r.getVertexPosition(o,xs),r.getVertexPosition(i,vs),r.getVertexPosition(l,bs);const c=Hc(r,e,t,n,xs,vs,bs,ti);if(c){s&&(ea.fromBufferAttribute(s,o),ta.fromBufferAttribute(s,i),na.fromBufferAttribute(s,l),c.uv=tn.getUV(ti,xs,vs,bs,ea,ta,na,new Se)),a&&(ea.fromBufferAttribute(a,o),ta.fromBufferAttribute(a,i),na.fromBufferAttribute(a,l),c.uv2=tn.getUV(ti,xs,vs,bs,ea,ta,na,new Se));const u={a:o,b:i,c:l,normal:new D,materialIndex:0};tn.getNormal(xs,vs,bs,u.normal),c.face=u}return c}class Bn extends Vt{constructor(e=1,t=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const i=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],p=[];let h=0,f=0;y("z","y","x",-1,-1,n,t,e,o,a,0),y("z","y","x",1,-1,n,t,-e,o,a,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,a,4),y("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(p,2));function y(m,d,E,S,_,v,M,A,R,g,T){const L=v/R,X=M/g,$=v/2,O=M/2,P=A/2,V=R+1,Y=g+1;let K=0,q=0;const J=new D;for(let Z=0;Z<Y;Z++){const z=Z*X-O;for(let U=0;U<V;U++){const ne=U*L-$;J[m]=ne*S,J[d]=z*_,J[E]=P,c.push(J.x,J.y,J.z),J[m]=0,J[d]=0,J[E]=A>0?1:-1,u.push(J.x,J.y,J.z),p.push(U/R),p.push(1-Z/g),K+=1}}for(let Z=0;Z<g;Z++)for(let z=0;z<R;z++){const U=h+z+V*Z,ne=h+z+V*(Z+1),ee=h+(z+1)+V*(Z+1),ie=h+(z+1)+V*Z;l.push(U,ne,ie),l.push(ne,ee,ie),q+=6}i.addGroup(f,q,T),f+=q,h+=K}}static fromJSON(e){return new Bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const s=r[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mt(r){const e={};for(let t=0;t<r.length;t++){const n=ps(r[t]);for(const s in n)e[s]=n[s]}return e}function Wc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function jo(r){return r.getRenderTarget()===null&&r.outputEncoding===Ve?Gt:Bs}const qc={clone:ps,merge:mt};var Xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xc,this.fragmentShader=jc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Wc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yo extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ut extends Yo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const i=this.filmOffset;i!==0&&(a+=e*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,Jn=1;class Yc extends Xe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new ut(Kn,Jn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const a=new ut(Kn,Jn,e,t);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const o=new ut(Kn,Jn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const i=new ut(Kn,Jn,e,t);i.layers=this.layers,i.up.set(0,0,1),i.lookAt(0,-1,0),this.add(i);const l=new ut(Kn,Jn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ut(Kn,Jn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,a,o,i,l,c]=this.children,u=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=nn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,i),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=p,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Zo extends lt{constructor(e,t,n,s,a,o,i,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,n,s,a,o,i,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zc extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bn(5,5,5),a=new On({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:fn});a.uniforms.tEquirect.value=t;const o=new Bt(s,a),i=t.minFilter;return t.minFilter===Rs&&(t.minFilter=Dt),new Yc(1,10,this).update(e,o),t.minFilter=i,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(a)}}const ni=new D,$c=new D,Kc=new xt;class Mn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ni.subVectors(n,t).cross($c.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ni),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(n).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kc.getNormalMatrix(e),s=this.coplanarPoint(ni).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new va,ia=new D;class Ri{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,a=new Mn,o=new Mn){this.planes=[e,t,n,s,a,o]}set(e,t,n,s,a,o){const i=this.planes;return i[0].copy(e),i[1].copy(t),i[2].copy(n),i[3].copy(s),i[4].copy(a),i[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],i=n[3],l=n[4],c=n[5],u=n[6],p=n[7],h=n[8],f=n[9],y=n[10],m=n[11],d=n[12],E=n[13],S=n[14],_=n[15];return t[0].setComponents(i-s,p-l,m-h,_-d).normalize(),t[1].setComponents(i+s,p+l,m+h,_+d).normalize(),t[2].setComponents(i+a,p+c,m+f,_+E).normalize(),t[3].setComponents(i-a,p-c,m-f,_-E).normalize(),t[4].setComponents(i-o,p-u,m-y,_-S).normalize(),t[5].setComponents(i+o,p+u,m+y,_+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ia.x=s.normal.x>0?e.max.x:e.min.x,ia.y=s.normal.y>0?e.max.y:e.min.y,ia.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $o(){let r=null,e=!1,t=null,n=null;function s(a,o){t(a,o),n=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Jc(r,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const p=c.array,h=c.usage,f=r.createBuffer();r.bindBuffer(u,f),r.bufferData(u,p,h),c.onUploadCallback();let y;if(p instanceof Float32Array)y=5126;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(p instanceof Int16Array)y=5122;else if(p instanceof Uint32Array)y=5125;else if(p instanceof Int32Array)y=5124;else if(p instanceof Int8Array)y=5120;else if(p instanceof Uint8Array)y=5121;else if(p instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:f,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,p){const h=u.array,f=u.updateRange;r.bindBuffer(p,c),f.count===-1?r.bufferSubData(p,0,h):(t?r.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):r.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function i(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=n.get(c);p===void 0?n.set(c,s(c,u)):p.version<c.version&&(a(p.buffer,c,u),p.version=c.version)}return{get:o,remove:i,update:l}}class Ii extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,o=t/2,i=Math.floor(n),l=Math.floor(s),c=i+1,u=l+1,p=e/i,h=t/l,f=[],y=[],m=[],d=[];for(let E=0;E<u;E++){const S=E*h-o;for(let _=0;_<c;_++){const v=_*p-a;y.push(v,-S,0),m.push(0,0,1),d.push(_/i),d.push(1-E/l)}}for(let E=0;E<l;E++)for(let S=0;S<i;S++){const _=S+c*E,v=S+c*(E+1),M=S+1+c*(E+1),A=S+1+c*E;f.push(_,v,A),f.push(v,M,A)}this.setIndex(f),this.setAttribute("position",new _t(y,3)),this.setAttribute("normal",new _t(m,3)),this.setAttribute("uv",new _t(d,2))}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qc=`#ifdef USE_ALPHAMAP
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
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ep=`#define PI 3.141592653589793
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
}`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
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
}`,Np=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
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
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gu=`#ifdef USE_NORMALMAP
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
#endif`,Eu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,_u=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Su=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bu=`#ifdef USE_SKINNING
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
#endif`,Nu=`#ifdef USE_SKINNING
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
#endif`,Uu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zu=`#ifdef USE_SPECULARMAP
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
}`,yh=`#define MATCAP
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
}`,gh=`#define NORMAL
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
}`,Eh=`#define NORMAL
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
}`,_h=`#define PHONG
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
}`,vh=`#define STANDARD
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
}`,bh=`#define STANDARD
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
}`,Mh=`#define TOON
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
}`,Sh=`#define TOON
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
}`,wh=`uniform float size;
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
}`,Ch=`uniform vec3 diffuse;
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
}`,Th=`#include <common>
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
}`,Ah=`uniform vec3 color;
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
}`,Fh=`uniform float rotation;
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
}`,Dh=`uniform vec3 diffuse;
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
}`,Ce={alphamap_fragment:Qc,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:np,aomap_fragment:sp,aomap_pars_fragment:ap,begin_vertex:ip,beginnormal_vertex:rp,bsdfs:op,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:pp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:hp,clipping_planes_vertex:dp,color_fragment:fp,color_pars_fragment:mp,color_pars_vertex:yp,color_vertex:gp,common:Ep,cube_uv_reflection_fragment:_p,defaultnormal_vertex:xp,displacementmap_pars_vertex:vp,displacementmap_vertex:bp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,encodings_fragment:wp,encodings_pars_fragment:Cp,envmap_fragment:Tp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Fp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Pp,fog_pars_vertex:Rp,fog_fragment:Ip,fog_pars_fragment:Bp,gradientmap_pars_fragment:Op,lightmap_fragment:Np,lightmap_pars_fragment:Up,lights_lambert_fragment:zp,lights_lambert_pars_fragment:kp,lights_pars_begin:Vp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Wp,lights_phong_fragment:qp,lights_phong_pars_fragment:Xp,lights_physical_fragment:jp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Zp,lights_fragment_maps:$p,lights_fragment_end:Kp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:eu,logdepthbuf_vertex:tu,map_fragment:nu,map_pars_fragment:su,map_particle_fragment:au,map_particle_pars_fragment:iu,metalnessmap_fragment:ru,metalnessmap_pars_fragment:ou,morphcolor_vertex:lu,morphnormal_vertex:cu,morphtarget_pars_vertex:pu,morphtarget_vertex:uu,normal_fragment_begin:hu,normal_fragment_maps:du,normal_pars_fragment:fu,normal_pars_vertex:mu,normal_vertex:yu,normalmap_pars_fragment:gu,clearcoat_normal_fragment_begin:Eu,clearcoat_normal_fragment_maps:_u,clearcoat_pars_fragment:xu,iridescence_pars_fragment:vu,output_fragment:bu,packing:Mu,premultiplied_alpha_fragment:Su,project_vertex:wu,dithering_fragment:Cu,dithering_pars_fragment:Tu,roughnessmap_fragment:Au,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:Du,shadowmap_pars_vertex:Lu,shadowmap_vertex:Pu,shadowmask_pars_fragment:Ru,skinbase_vertex:Iu,skinning_pars_vertex:Bu,skinning_vertex:Ou,skinnormal_vertex:Nu,specularmap_fragment:Uu,specularmap_pars_fragment:zu,tonemapping_fragment:ku,tonemapping_pars_fragment:Vu,transmission_fragment:Gu,transmission_pars_fragment:Hu,uv_pars_fragment:Wu,uv_pars_vertex:qu,uv_vertex:Xu,uv2_pars_fragment:ju,uv2_pars_vertex:Yu,uv2_vertex:Zu,worldpos_vertex:$u,background_vert:Ku,background_frag:Ju,backgroundCube_vert:Qu,backgroundCube_frag:eh,cube_vert:th,cube_frag:nh,depth_vert:sh,depth_frag:ah,distanceRGBA_vert:ih,distanceRGBA_frag:rh,equirect_vert:oh,equirect_frag:lh,linedashed_vert:ch,linedashed_frag:ph,meshbasic_vert:uh,meshbasic_frag:hh,meshlambert_vert:dh,meshlambert_frag:fh,meshmatcap_vert:mh,meshmatcap_frag:yh,meshnormal_vert:gh,meshnormal_frag:Eh,meshphong_vert:_h,meshphong_frag:xh,meshphysical_vert:vh,meshphysical_frag:bh,meshtoon_vert:Mh,meshtoon_frag:Sh,points_vert:wh,points_frag:Ch,shadow_vert:Th,shadow_frag:Ah,sprite_vert:Fh,sprite_frag:Dh},re={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},Ht={basic:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:mt([re.points,re.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:mt([re.common,re.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:mt([re.sprite,re.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:mt([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:mt([re.lights,re.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Ht.physical={uniforms:mt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const ra={r:0,b:0,g:0};function Lh(r,e,t,n,s,a,o){const i=new Ae(0);let l=a===!0?0:1,c,u,p=null,h=0,f=null;function y(d,E){let S=!1,_=E.isScene===!0?E.background:null;_&&_.isTexture&&(_=(E.backgroundBlurriness>0?t:e).get(_));const v=r.xr,M=v.getSession&&v.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?m(i,l):_&&_.isColor&&(m(_,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===xa)?(u===void 0&&(u=new Bt(new Bn(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:ps(Ht.backgroundCube.uniforms),vertexShader:Ht.backgroundCube.vertexShader,fragmentShader:Ht.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=_.encoding!==Ve,(p!==_||h!==_.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,p=_,h=_.version,f=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Bt(new Ii(2,2),new On({name:"BackgroundMaterial",uniforms:ps(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=_.encoding!==Ve,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||h!==_.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,p=_,h=_.version,f=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,E){d.getRGB(ra,jo(r)),n.buffers.color.setClear(ra.r,ra.g,ra.b,E,o)}return{getClearColor:function(){return i},setClearColor:function(d,E=1){i.set(d),l=E,m(i,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(i,l)},render:y}}function Ph(r,e,t,n){const s=r.getParameter(34921),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,i={},l=d(null);let c=l,u=!1;function p(P,V,Y,K,q){let J=!1;if(o){const Z=m(K,Y,V);c!==Z&&(c=Z,f(c.object)),J=E(P,K,Y,q),J&&S(P,K,Y,q)}else{const Z=V.wireframe===!0;(c.geometry!==K.id||c.program!==Y.id||c.wireframe!==Z)&&(c.geometry=K.id,c.program=Y.id,c.wireframe=Z,J=!0)}q!==null&&t.update(q,34963),(J||u)&&(u=!1,g(P,V,Y,K),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function h(){return n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function f(P){return n.isWebGL2?r.bindVertexArray(P):a.bindVertexArrayOES(P)}function y(P){return n.isWebGL2?r.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function m(P,V,Y){const K=Y.wireframe===!0;let q=i[P.id];q===void 0&&(q={},i[P.id]=q);let J=q[V.id];J===void 0&&(J={},q[V.id]=J);let Z=J[K];return Z===void 0&&(Z=d(h()),J[K]=Z),Z}function d(P){const V=[],Y=[],K=[];for(let q=0;q<s;q++)V[q]=0,Y[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:K,object:P,attributes:{},index:null}}function E(P,V,Y,K){const q=c.attributes,J=V.attributes;let Z=0;const z=Y.getAttributes();for(const U in z)if(z[U].location>=0){const ee=q[U];let ie=J[U];if(ie===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),ee===void 0||ee.attribute!==ie||ie&&ee.data!==ie.data)return!0;Z++}return c.attributesNum!==Z||c.index!==K}function S(P,V,Y,K){const q={},J=V.attributes;let Z=0;const z=Y.getAttributes();for(const U in z)if(z[U].location>=0){let ee=J[U];ee===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const ie={};ie.attribute=ee,ee&&ee.data&&(ie.data=ee.data),q[U]=ie,Z++}c.attributes=q,c.attributesNum=Z,c.index=K}function _(){const P=c.newAttributes;for(let V=0,Y=P.length;V<Y;V++)P[V]=0}function v(P){M(P,0)}function M(P,V){const Y=c.newAttributes,K=c.enabledAttributes,q=c.attributeDivisors;Y[P]=1,K[P]===0&&(r.enableVertexAttribArray(P),K[P]=1),q[P]!==V&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),q[P]=V)}function A(){const P=c.newAttributes,V=c.enabledAttributes;for(let Y=0,K=V.length;Y<K;Y++)V[Y]!==P[Y]&&(r.disableVertexAttribArray(Y),V[Y]=0)}function R(P,V,Y,K,q,J){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(P,V,Y,q,J):r.vertexAttribPointer(P,V,Y,K,q,J)}function g(P,V,Y,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const q=K.attributes,J=Y.getAttributes(),Z=V.defaultAttributeValues;for(const z in J){const U=J[z];if(U.location>=0){let ne=q[z];if(ne===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor)),ne!==void 0){const ee=ne.normalized,ie=ne.itemSize,G=t.get(ne);if(G===void 0)continue;const we=G.buffer,de=G.type,oe=G.bytesPerElement;if(ne.isInterleavedBufferAttribute){const se=ne.data,be=se.stride,ue=ne.offset;if(se.isInstancedInterleavedBuffer){for(let me=0;me<U.locationSize;me++)M(U.location+me,se.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<U.locationSize;me++)v(U.location+me);r.bindBuffer(34962,we);for(let me=0;me<U.locationSize;me++)R(U.location+me,ie/U.locationSize,de,ee,be*oe,(ue+ie/U.locationSize*me)*oe)}else{if(ne.isInstancedBufferAttribute){for(let se=0;se<U.locationSize;se++)M(U.location+se,ne.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<U.locationSize;se++)v(U.location+se);r.bindBuffer(34962,we);for(let se=0;se<U.locationSize;se++)R(U.location+se,ie/U.locationSize,de,ee,ie*oe,ie/U.locationSize*se*oe)}}else if(Z!==void 0){const ee=Z[z];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(U.location,ee);break;case 3:r.vertexAttrib3fv(U.location,ee);break;case 4:r.vertexAttrib4fv(U.location,ee);break;default:r.vertexAttrib1fv(U.location,ee)}}}}A()}function T(){$();for(const P in i){const V=i[P];for(const Y in V){const K=V[Y];for(const q in K)y(K[q].object),delete K[q];delete V[Y]}delete i[P]}}function L(P){if(i[P.id]===void 0)return;const V=i[P.id];for(const Y in V){const K=V[Y];for(const q in K)y(K[q].object),delete K[q];delete V[Y]}delete i[P.id]}function X(P){for(const V in i){const Y=i[V];if(Y[P.id]===void 0)continue;const K=Y[P.id];for(const q in K)y(K[q].object),delete K[q];delete Y[P.id]}}function $(){O(),u=!0,c!==l&&(c=l,f(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:$,resetDefaultState:O,dispose:T,releaseStatesOfGeometry:L,releaseStatesOfProgram:X,initAttributes:_,enableAttribute:v,disableUnusedAttributes:A}}function Rh(r,e,t,n){const s=n.isWebGL2;let a;function o(c){a=c}function i(c,u){r.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,p){if(p===0)return;let h,f;if(s)h=r,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](a,c,u,p),t.update(u,a,p)}this.setMode=o,this.render=i,this.renderInstances=l}function Ih(r,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){if(R==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let i=t.precision!==void 0?t.precision:"highp";const l=a(i);l!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",l,"instead."),i=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,p=r.getParameter(34930),h=r.getParameter(35660),f=r.getParameter(3379),y=r.getParameter(34076),m=r.getParameter(34921),d=r.getParameter(36347),E=r.getParameter(36348),S=r.getParameter(36349),_=h>0,v=o||e.has("OES_texture_float"),M=_&&v,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:a,precision:i,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:d,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:A}}function Bh(r){const e=this;let t=null,n=0,s=!1,a=!1;const o=new Mn,i=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,f){const y=p.length!==0||h||n!==0||s;return s=h,t=u(p,f,0),n=p.length,y},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,c()},this.setState=function(p,h,f){const y=p.clippingPlanes,m=p.clipIntersection,d=p.clipShadows,E=r.get(p);if(!s||y===null||y.length===0||a&&!d)a?u(null):c();else{const S=a?0:n,_=S*4;let v=E.clippingState||null;l.value=v,v=u(y,h,_,f);for(let M=0;M!==_;++M)v[M]=t[M];E.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(p,h,f,y){const m=p!==null?p.length:0;let d=null;if(m!==0){if(d=l.value,y!==!0||d===null){const E=f+m*4,S=h.matrixWorldInverse;i.getNormalMatrix(S),(d===null||d.length<E)&&(d=new Float32Array(E));for(let _=0,v=f;_!==m;++_,v+=4)o.copy(p[_]).applyMatrix4(S,i),o.normal.toArray(d,v),d[v+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Oh(r){let e=new WeakMap;function t(o,i){return i===fa?o.mapping=os:i===yi&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const i=o.mapping;if(i===fa||i===yi)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Zc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const i=o.target;i.removeEventListener("dispose",s);const l=e.get(i);l!==void 0&&(e.delete(i),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Bi extends Yo{constructor(e=-1,t=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,o=n+e,i=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,i-=u*this.view.offsetY,l=i-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,i,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,zr=[.125,.215,.35,.446,.526,.582],wn=20,si=new Bi,kr=new Ae;let ai=null;const Sn=(1+Math.sqrt(5))/2,es=1/Sn,Vr=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Sn,es),new D(0,Sn,-es),new D(es,0,Sn),new D(-es,0,Sn),new D(Sn,es,0),new D(-Sn,es,0)];class Gr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ai=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ai),e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ai=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Is,format:Lt,encoding:Rn,depthBuffer:!1},s=Hr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hr(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nh(a)),this._blurMaterial=Uh(a,e,t)}return s}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,si)}_sceneToCubeUV(e,t,n,s){const i=new ut(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor(kr),u.toneMapping=nn,u.autoClear=!1;const f=new qo({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),y=new Bt(new Bn,f);let m=!1;const d=e.background;d?d.isColor&&(f.color.copy(d),e.background=null,m=!0):(f.color.copy(kr),m=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(i.up.set(0,l[E],0),i.lookAt(c[E],0,0)):S===1?(i.up.set(0,0,l[E]),i.lookAt(0,c[E],0)):(i.up.set(0,l[E],0),i.lookAt(0,0,c[E]));const _=this._cubeSize;oa(s,S*_,E>2?_:0,_,_),u.setRenderTarget(s),m&&u.render(y,i),u.render(e,i)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=h,u.autoClear=p,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===os||e.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wr());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],a),i=a.uniforms;i.envMap.value=e;const l=this._cubeSize;oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,si)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vr[(s-1)%Vr.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",a),this._halfBlur(o,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,o,i){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new Bt(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*wn-1),m=a/y,d=isFinite(a)?1+Math.floor(u*m):wn;d>wn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${wn}`);const E=[];let S=0;for(let R=0;R<wn;++R){const g=R/m,T=Math.exp(-g*g/2);E.push(T),R===0?S+=T:R<d&&(S+=2*T)}for(let R=0;R<E.length;R++)E[R]=E[R]/S;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=E,h.latitudinal.value=o==="latitudinal",i&&(h.poleAxis.value=i);const{_lodMax:_}=this;h.dTheta.value=y,h.mipInt.value=_-n;const v=this._sizeLods[s],M=3*v*(s>_-ss?s-_+ss:0),A=4*(this._cubeSize-v);oa(t,M,A,3*v,2*v),l.setRenderTarget(t),l.render(p,si)}}function Nh(r){const e=[],t=[],n=[];let s=r;const a=r-ss+1+zr.length;for(let o=0;o<a;o++){const i=Math.pow(2,s);t.push(i);let l=1/i;o>r-ss?l=zr[o-r+ss-1]:o===0&&(l=0),n.push(l);const c=1/(i-2),u=-c,p=1+c,h=[u,u,p,u,p,p,u,u,p,p,u,p],f=6,y=6,m=3,d=2,E=1,S=new Float32Array(m*y*f),_=new Float32Array(d*y*f),v=new Float32Array(E*y*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,g=A>2?0:-1,T=[R,g,0,R+2/3,g,0,R+2/3,g+1,0,R,g,0,R+2/3,g+1,0,R,g+1,0];S.set(T,m*y*A),_.set(h,d*y*A);const L=[A,A,A,A,A,A];v.set(L,E*y*A)}const M=new Vt;M.setAttribute("position",new qt(S,m)),M.setAttribute("uv",new qt(_,d)),M.setAttribute("faceIndex",new qt(v,E)),e.push(M),s>ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hr(r,e,t){const n=new In(r,e,t);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(r,e,t,n,s){r.viewport.set(e,t,n,s),r.scissor.set(e,t,n,s)}function Uh(r,e,t){const n=new Float32Array(wn),s=new D(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oi(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Wr(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oi(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function qr(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Oi(){return`

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
	`}function zh(r){let e=new WeakMap,t=null;function n(i){if(i&&i.isTexture){const l=i.mapping,c=l===fa||l===yi,u=l===os||l===ls;if(c||u)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let p=e.get(i);return t===null&&(t=new Gr(r)),p=c?t.fromEquirectangular(i,p):t.fromCubemap(i,p),e.set(i,p),p.texture}else{if(e.has(i))return e.get(i).texture;{const p=i.image;if(c&&p&&p.height>0||u&&p&&s(p)){t===null&&(t=new Gr(r));const h=c?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,h),i.addEventListener("dispose",a),h.texture}else return null}}}return i}function s(i){let l=0;const c=6;for(let u=0;u<c;u++)i[u]!==void 0&&l++;return l===c}function a(i){const l=i.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kh(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vh(r,e,t,n){const s={},a=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",o),delete s[h.id];const f=a.get(h);f&&(e.remove(f),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function i(p,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const y in h)e.update(h[y],34962);const f=p.morphAttributes;for(const y in f){const m=f[y];for(let d=0,E=m.length;d<E;d++)e.update(m[d],34962)}}function c(p){const h=[],f=p.index,y=p.attributes.position;let m=0;if(f!==null){const S=f.array;m=f.version;for(let _=0,v=S.length;_<v;_+=3){const M=S[_+0],A=S[_+1],R=S[_+2];h.push(M,A,A,R,R,M)}}else{const S=y.array;m=y.version;for(let _=0,v=S.length/3-1;_<v;_+=3){const M=_+0,A=_+1,R=_+2;h.push(M,A,A,R,R,M)}}const d=new(Uo(h)?Xo:Pi)(h,1);d.version=m;const E=a.get(p);E&&e.remove(E),a.set(p,d)}function u(p){const h=a.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&c(p)}else c(p);return a.get(p)}return{get:i,update:l,getWireframeAttribute:u}}function Gh(r,e,t,n){const s=n.isWebGL2;let a;function o(h){a=h}let i,l;function c(h){i=h.type,l=h.bytesPerElement}function u(h,f){r.drawElements(a,f,i,h*l),t.update(f,a,1)}function p(h,f,y){if(y===0)return;let m,d;if(s)m=r,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](a,f,i,h*l,y),t.update(f,a,y)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=p}function Hh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,i){switch(t.calls++,o){case 4:t.triangles+=i*(a/3);break;case 1:t.lines+=i*(a/2);break;case 3:t.lines+=i*(a-1);break;case 2:t.lines+=i*a;break;case 0:t.points+=i*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Wh(r,e){return r[0]-e[0]}function qh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Xh(r,e,t){const n={},s=new Float32Array(8),a=new WeakMap,o=new Ue,i=[];for(let c=0;c<8;c++)i[c]=[c,0];function l(c,u,p,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=y!==void 0?y.length:0;let d=a.get(u);if(d===void 0||d.count!==m){let V=function(){O.dispose(),a.delete(u),u.removeEventListener("dispose",V)};d!==void 0&&d.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],g=u.morphAttributes.color||[];let T=0;_===!0&&(T=1),v===!0&&(T=2),M===!0&&(T=3);let L=u.attributes.position.count*T,X=1;L>e.maxTextureSize&&(X=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const $=new Float32Array(L*X*4*m),O=new Go($,L,X,m);O.type=un,O.needsUpdate=!0;const P=T*4;for(let Y=0;Y<m;Y++){const K=A[Y],q=R[Y],J=g[Y],Z=L*X*4*Y;for(let z=0;z<K.count;z++){const U=z*P;_===!0&&(o.fromBufferAttribute(K,z),$[Z+U+0]=o.x,$[Z+U+1]=o.y,$[Z+U+2]=o.z,$[Z+U+3]=0),v===!0&&(o.fromBufferAttribute(q,z),$[Z+U+4]=o.x,$[Z+U+5]=o.y,$[Z+U+6]=o.z,$[Z+U+7]=0),M===!0&&(o.fromBufferAttribute(J,z),$[Z+U+8]=o.x,$[Z+U+9]=o.y,$[Z+U+10]=o.z,$[Z+U+11]=J.itemSize===4?o.w:1)}}d={count:m,texture:O,size:new Se(L,X)},a.set(u,d),u.addEventListener("dispose",V)}let E=0;for(let _=0;_<f.length;_++)E+=f[_];const S=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{const y=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==y){m=[];for(let v=0;v<y;v++)m[v]=[v,0];n[u.id]=m}for(let v=0;v<y;v++){const M=m[v];M[0]=v,M[1]=f[v]}m.sort(qh);for(let v=0;v<8;v++)v<y&&m[v][1]?(i[v][0]=m[v][0],i[v][1]=m[v][1]):(i[v][0]=Number.MAX_SAFE_INTEGER,i[v][1]=0);i.sort(Wh);const d=u.morphAttributes.position,E=u.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const M=i[v],A=M[0],R=M[1];A!==Number.MAX_SAFE_INTEGER&&R?(d&&u.getAttribute("morphTarget"+v)!==d[A]&&u.setAttribute("morphTarget"+v,d[A]),E&&u.getAttribute("morphNormal"+v)!==E[A]&&u.setAttribute("morphNormal"+v,E[A]),s[v]=R,S+=R):(d&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),E&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const _=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",_),h.getUniforms().setValue(r,"morphTargetInfluences",s)}}return{update:l}}function jh(r,e,t,n){let s=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,p=e.get(l,u);return s.get(p)!==c&&(e.update(p),s.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",i)===!1&&l.addEventListener("dispose",i),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),p}function o(){s=new WeakMap}function i(l){const c=l.target;c.removeEventListener("dispose",i),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Ko=new lt,Jo=new Go,Qo=new Rc,el=new Zo,Xr=[],jr=[],Yr=new Float32Array(16),Zr=new Float32Array(9),$r=new Float32Array(4);function us(r,e,t){const n=r[0];if(n<=0||n>0)return r;const s=e*t;let a=Xr[s];if(a===void 0&&(a=new Float32Array(s),Xr[s]=a),e!==0){n.toArray(a,0);for(let o=1,i=0;o!==e;++o)i+=t,r[o].toArray(a,i)}return a}function tt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ba(r,e){let t=jr[e];t===void 0&&(t=new Int32Array(e),jr[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Yh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Zh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2fv(this.addr,e),nt(t,e)}}function $h(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;r.uniform3fv(this.addr,e),nt(t,e)}}function Kh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4fv(this.addr,e),nt(t,e)}}function Jh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;$r.set(n),r.uniformMatrix2fv(this.addr,!1,$r),nt(t,n)}}function Qh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Zr.set(n),r.uniformMatrix3fv(this.addr,!1,Zr),nt(t,n)}}function ed(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Yr.set(n),r.uniformMatrix4fv(this.addr,!1,Yr),nt(t,n)}}function td(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2iv(this.addr,e),nt(t,e)}}function sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3iv(this.addr,e),nt(t,e)}}function ad(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4iv(this.addr,e),nt(t,e)}}function id(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function rd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2uiv(this.addr,e),nt(t,e)}}function od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3uiv(this.addr,e),nt(t,e)}}function ld(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4uiv(this.addr,e),nt(t,e)}}function cd(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Ko,s)}function pd(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qo,s)}function ud(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||el,s)}function hd(r,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jo,s)}function dd(r){switch(r){case 5126:return Yh;case 35664:return Zh;case 35665:return $h;case 35666:return Kh;case 35674:return Jh;case 35675:return Qh;case 35676:return ed;case 5124:case 35670:return td;case 35667:case 35671:return nd;case 35668:case 35672:return sd;case 35669:case 35673:return ad;case 5125:return id;case 36294:return rd;case 36295:return od;case 36296:return ld;case 35678:case 36198:case 36298:case 36306:case 35682:return cd;case 35679:case 36299:case 36307:return pd;case 35680:case 36300:case 36308:case 36293:return ud;case 36289:case 36303:case 36311:case 36292:return hd}}function fd(r,e){r.uniform1fv(this.addr,e)}function md(r,e){const t=us(e,this.size,2);r.uniform2fv(this.addr,t)}function yd(r,e){const t=us(e,this.size,3);r.uniform3fv(this.addr,t)}function gd(r,e){const t=us(e,this.size,4);r.uniform4fv(this.addr,t)}function Ed(r,e){const t=us(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function _d(r,e){const t=us(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function xd(r,e){const t=us(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vd(r,e){r.uniform1iv(this.addr,e)}function bd(r,e){r.uniform2iv(this.addr,e)}function Md(r,e){r.uniform3iv(this.addr,e)}function Sd(r,e){r.uniform4iv(this.addr,e)}function wd(r,e){r.uniform1uiv(this.addr,e)}function Cd(r,e){r.uniform2uiv(this.addr,e)}function Td(r,e){r.uniform3uiv(this.addr,e)}function Ad(r,e){r.uniform4uiv(this.addr,e)}function Fd(r,e,t){const n=this.cache,s=e.length,a=ba(t,s);tt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ko,a[o])}function Dd(r,e,t){const n=this.cache,s=e.length,a=ba(t,s);tt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Qo,a[o])}function Ld(r,e,t){const n=this.cache,s=e.length,a=ba(t,s);tt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||el,a[o])}function Pd(r,e,t){const n=this.cache,s=e.length,a=ba(t,s);tt(n,a)||(r.uniform1iv(this.addr,a),nt(n,a));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jo,a[o])}function Rd(r){switch(r){case 5126:return fd;case 35664:return md;case 35665:return yd;case 35666:return gd;case 35674:return Ed;case 35675:return _d;case 35676:return xd;case 5124:case 35670:return vd;case 35667:case 35671:return bd;case 35668:case 35672:return Md;case 35669:case 35673:return Sd;case 5125:return wd;case 36294:return Cd;case 36295:return Td;case 36296:return Ad;case 35678:case 36198:case 36298:case 36306:case 35682:return Fd;case 35679:case 36299:case 36307:return Dd;case 35680:case 36300:case 36308:case 36293:return Ld;case 36289:case 36303:case 36311:case 36292:return Pd}}class Id{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dd(t.type)}}class Bd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Rd(t.type)}}class Od{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const i=s[a];i.setValue(e,t[i.id],n)}}}const ii=/(\w+)(\])?(\[|\.)?/g;function Kr(r,e){r.seq.push(e),r.map[e.id]=e}function Nd(r,e,t){const n=r.name,s=n.length;for(ii.lastIndex=0;;){const a=ii.exec(n),o=ii.lastIndex;let i=a[1];const l=a[2]==="]",c=a[3];if(l&&(i=i|0),c===void 0||c==="["&&o+2===s){Kr(t,c===void 0?new Id(i,r,e):new Bd(i,r,e));break}else{let p=t.map[i];p===void 0&&(p=new Od(i),Kr(t,p)),t=p}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),o=e.getUniformLocation(t,a.name);Nd(a,o,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,o=t.length;a!==o;++a){const i=t[a],l=n[i.id];l.needsUpdate!==!1&&i.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Jr(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Ud=0;function zd(r,e){const t=r.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=s;o<a;o++){const i=o+1;n.push(`${i===e?">":" "} ${i}: ${t[o]}`)}return n.join(`
`)}function kd(r){switch(r){case Rn:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Qr(r,e,t){const n=r.getShaderParameter(e,35713),s=r.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+zd(r.getShaderSource(e),o)}else return s}function Vd(r,e){const t=kd(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Gd(r,e){let t;switch(e){case jl:t="Linear";break;case Yl:t="Reinhard";break;case Zl:t="OptimizedCineon";break;case $l:t="ACESFilmic";break;case Kl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hd(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function Wd(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qd(r,e){const t={},n=r.getProgramParameter(e,35721);for(let s=0;s<n;s++){const a=r.getActiveAttrib(e,s),o=a.name;let i=1;a.type===35674&&(i=2),a.type===35675&&(i=3),a.type===35676&&(i=4),t[o]={type:a.type,location:r.getAttribLocation(e,o),locationSize:i}}return t}function Ts(r){return r!==""}function eo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function to(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xd=/^[ \t]*#include +<([\w\d./]+)>/gm;function xi(r){return r.replace(Xd,jd)}function jd(r,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xi(t)}const Yd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(r){return r.replace(Yd,Zd)}function Zd(r,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function so(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $d(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Lo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Po?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ws&&(e="SHADOWMAP_TYPE_VSM"),e}function Kd(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case os:case ls:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jd(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Qd(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case _a:e="ENVMAP_BLENDING_MULTIPLY";break;case ql:e="ENVMAP_BLENDING_MIX";break;case Xl:e="ENVMAP_BLENDING_ADD";break}return e}function ef(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tf(r,e,t,n){const s=r.getContext(),a=t.defines;let o=t.vertexShader,i=t.fragmentShader;const l=$d(t),c=Kd(t),u=Jd(t),p=Qd(t),h=ef(t),f=t.isWebGL2?"":Hd(t),y=Wd(a),m=s.createProgram();let d,E,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[y].filter(Ts).join(`
`),d.length>0&&(d+=`
`),E=[f,y].filter(Ts).join(`
`),E.length>0&&(E+=`
`)):(d=[so(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),E=[f,so(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nn?"#define TONE_MAPPING":"",t.toneMapping!==nn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==nn?Gd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,Vd("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=xi(o),o=eo(o,t),o=to(o,t),i=xi(i),i=eo(i,t),i=to(i,t),o=no(o),i=no(i),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["#define varying in",t.glslVersion===Tr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const _=S+d+o,v=S+E+i,M=Jr(s,35633,_),A=Jr(s,35632,v);if(s.attachShader(m,M),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),r.debug.checkShaderErrors){const T=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(M).trim(),X=s.getShaderInfoLog(A).trim();let $=!0,O=!0;if(s.getProgramParameter(m,35714)===!1){$=!1;const P=Qr(s,M,"vertex"),V=Qr(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+T+`
`+P+`
`+V)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(L===""||X==="")&&(O=!1);O&&(this.diagnostics={runnable:$,programLog:T,vertexShader:{log:L,prefix:d},fragmentShader:{log:X,prefix:E}})}s.deleteShader(M),s.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new ha(s,m)),R};let g;return this.getAttributes=function(){return g===void 0&&(g=qd(s,m)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Ud++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=A,this}let nf=0;class sf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new af(e),t.set(e,n)),n}}class af{constructor(e){this.id=nf++,this.code=e,this.usedTimes=0}}function rf(r,e,t,n,s,a,o){const i=new Wo,l=new sf,c=[],u=s.isWebGL2,p=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g,T,L,X,$){const O=X.fog,P=$.geometry,V=g.isMeshStandardMaterial?X.environment:null,Y=(g.isMeshStandardMaterial?t:e).get(g.envMap||V),K=Y&&Y.mapping===xa?Y.image.height:null,q=y[g.type];g.precision!==null&&(f=s.getMaxPrecision(g.precision),f!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const J=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=J!==void 0?J.length:0;let z=0;P.morphAttributes.position!==void 0&&(z=1),P.morphAttributes.normal!==void 0&&(z=2),P.morphAttributes.color!==void 0&&(z=3);let U,ne,ee,ie;if(q){const be=Ht[q];U=be.vertexShader,ne=be.fragmentShader}else U=g.vertexShader,ne=g.fragmentShader,l.update(g),ee=l.getVertexShaderID(g),ie=l.getFragmentShaderID(g);const G=r.getRenderTarget(),we=g.alphaTest>0,de=g.clearcoat>0,oe=g.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:g.type,vertexShader:U,fragmentShader:ne,defines:g.defines,customVertexShaderID:ee,customFragmentShaderID:ie,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:h,outputEncoding:G===null?r.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Rn,map:!!g.map,matcap:!!g.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===gc,tangentSpaceNormalMap:g.normalMapType===Di,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===Ve,clearcoat:de,clearcoatMap:de&&!!g.clearcoatMap,clearcoatRoughnessMap:de&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!g.clearcoatNormalMap,iridescence:oe,iridescenceMap:oe&&!!g.iridescenceMap,iridescenceThicknessMap:oe&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===is,alphaMap:!!g.alphaMap,alphaTest:we,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!P.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.iridescenceMap||g.iridescenceThicknessMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularColorMap||g.sheen>0||g.sheenColorMap||g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!O,useFog:g.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:p,skinning:$.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:g.toneMapped?r.toneMapping:nn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Fi,flipSided:g.side===Ot,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const T=[];if(g.shaderID?T.push(g.shaderID):(T.push(g.customVertexShaderID),T.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)T.push(L),T.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(E(T,g),S(T,g),T.push(r.outputEncoding)),T.push(g.customProgramCacheKey),T.join()}function E(g,T){g.push(T.precision),g.push(T.outputEncoding),g.push(T.envMapMode),g.push(T.envMapCubeUVHeight),g.push(T.combine),g.push(T.vertexUvs),g.push(T.fogExp2),g.push(T.sizeAttenuation),g.push(T.morphTargetsCount),g.push(T.morphAttributeCount),g.push(T.numDirLights),g.push(T.numPointLights),g.push(T.numSpotLights),g.push(T.numSpotLightMaps),g.push(T.numHemiLights),g.push(T.numRectAreaLights),g.push(T.numDirLightShadows),g.push(T.numPointLightShadows),g.push(T.numSpotLightShadows),g.push(T.numSpotLightShadowsWithMaps),g.push(T.shadowMapType),g.push(T.toneMapping),g.push(T.numClippingPlanes),g.push(T.numClipIntersection),g.push(T.depthPacking)}function S(g,T){i.disableAll(),T.isWebGL2&&i.enable(0),T.supportsVertexTextures&&i.enable(1),T.instancing&&i.enable(2),T.instancingColor&&i.enable(3),T.map&&i.enable(4),T.matcap&&i.enable(5),T.envMap&&i.enable(6),T.lightMap&&i.enable(7),T.aoMap&&i.enable(8),T.emissiveMap&&i.enable(9),T.bumpMap&&i.enable(10),T.normalMap&&i.enable(11),T.objectSpaceNormalMap&&i.enable(12),T.tangentSpaceNormalMap&&i.enable(13),T.clearcoat&&i.enable(14),T.clearcoatMap&&i.enable(15),T.clearcoatRoughnessMap&&i.enable(16),T.clearcoatNormalMap&&i.enable(17),T.iridescence&&i.enable(18),T.iridescenceMap&&i.enable(19),T.iridescenceThicknessMap&&i.enable(20),T.displacementMap&&i.enable(21),T.specularMap&&i.enable(22),T.roughnessMap&&i.enable(23),T.metalnessMap&&i.enable(24),T.gradientMap&&i.enable(25),T.alphaMap&&i.enable(26),T.alphaTest&&i.enable(27),T.vertexColors&&i.enable(28),T.vertexAlphas&&i.enable(29),T.vertexUvs&&i.enable(30),T.vertexTangents&&i.enable(31),T.uvsVertexOnly&&i.enable(32),g.push(i.mask),i.disableAll(),T.fog&&i.enable(0),T.useFog&&i.enable(1),T.flatShading&&i.enable(2),T.logarithmicDepthBuffer&&i.enable(3),T.skinning&&i.enable(4),T.morphTargets&&i.enable(5),T.morphNormals&&i.enable(6),T.morphColors&&i.enable(7),T.premultipliedAlpha&&i.enable(8),T.shadowMapEnabled&&i.enable(9),T.physicallyCorrectLights&&i.enable(10),T.doubleSided&&i.enable(11),T.flipSided&&i.enable(12),T.useDepthPacking&&i.enable(13),T.dithering&&i.enable(14),T.specularIntensityMap&&i.enable(15),T.specularColorMap&&i.enable(16),T.transmission&&i.enable(17),T.transmissionMap&&i.enable(18),T.thicknessMap&&i.enable(19),T.sheen&&i.enable(20),T.sheenColorMap&&i.enable(21),T.sheenRoughnessMap&&i.enable(22),T.decodeVideoTexture&&i.enable(23),T.opaque&&i.enable(24),g.push(i.mask)}function _(g){const T=y[g.type];let L;if(T){const X=Ht[T];L=qc.clone(X.uniforms)}else L=g.uniforms;return L}function v(g,T){let L;for(let X=0,$=c.length;X<$;X++){const O=c[X];if(O.cacheKey===T){L=O,++L.usedTimes;break}}return L===void 0&&(L=new tf(r,T,g,a),c.push(L)),L}function M(g){if(--g.usedTimes===0){const T=c.indexOf(g);c[T]=c[c.length-1],c.pop(),g.destroy()}}function A(g){l.remove(g)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:v,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:R}}function of(){let r=new WeakMap;function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function t(a){r.delete(a)}function n(a,o,i){r.get(a)[o]=i}function s(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function lf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ao(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function io(){const r=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function o(p,h,f,y,m,d){let E=r[e];return E===void 0?(E={id:p.id,object:p,geometry:h,material:f,groupOrder:y,renderOrder:p.renderOrder,z:m,group:d},r[e]=E):(E.id=p.id,E.object=p,E.geometry=h,E.material=f,E.groupOrder=y,E.renderOrder=p.renderOrder,E.z=m,E.group=d),e++,E}function i(p,h,f,y,m,d){const E=o(p,h,f,y,m,d);f.transmission>0?n.push(E):f.transparent===!0?s.push(E):t.push(E)}function l(p,h,f,y,m,d){const E=o(p,h,f,y,m,d);f.transmission>0?n.unshift(E):f.transparent===!0?s.unshift(E):t.unshift(E)}function c(p,h){t.length>1&&t.sort(p||lf),n.length>1&&n.sort(h||ao),s.length>1&&s.sort(h||ao)}function u(){for(let p=e,h=r.length;p<h;p++){const f=r[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:i,unshift:l,finish:u,sort:c}}function cf(){let r=new WeakMap;function e(n,s){const a=r.get(n);let o;return a===void 0?(o=new io,r.set(n,[o])):s>=a.length?(o=new io,a.push(o)):o=a[s],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function pf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ae};break;case"SpotLight":t={position:new D,direction:new D,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function uf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let hf=0;function df(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ff(r,e){const t=new pf,n=uf(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new D);const a=new D,o=new xe,i=new xe;function l(u,p){let h=0,f=0,y=0;for(let X=0;X<9;X++)s.probe[X].set(0,0,0);let m=0,d=0,E=0,S=0,_=0,v=0,M=0,A=0,R=0,g=0;u.sort(df);const T=p!==!0?Math.PI:1;for(let X=0,$=u.length;X<$;X++){const O=u[X],P=O.color,V=O.intensity,Y=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=P.r*V*T,f+=P.g*V*T,y+=P.b*V*T;else if(O.isLightProbe)for(let q=0;q<9;q++)s.probe[q].addScaledVector(O.sh.coefficients[q],V);else if(O.isDirectionalLight){const q=t.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*T),O.castShadow){const J=O.shadow,Z=n.get(O);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,s.directionalShadow[m]=Z,s.directionalShadowMap[m]=K,s.directionalShadowMatrix[m]=O.shadow.matrix,v++}s.directional[m]=q,m++}else if(O.isSpotLight){const q=t.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(P).multiplyScalar(V*T),q.distance=Y,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,s.spot[E]=q;const J=O.shadow;if(O.map&&(s.spotLightMap[R]=O.map,R++,J.updateMatrices(O),O.castShadow&&g++),s.spotLightMatrix[E]=J.matrix,O.castShadow){const Z=n.get(O);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,s.spotShadow[E]=Z,s.spotShadowMap[E]=K,A++}E++}else if(O.isRectAreaLight){const q=t.get(O);q.color.copy(P).multiplyScalar(V),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),s.rectArea[S]=q,S++}else if(O.isPointLight){const q=t.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity*T),q.distance=O.distance,q.decay=O.decay,O.castShadow){const J=O.shadow,Z=n.get(O);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,s.pointShadow[d]=Z,s.pointShadowMap[d]=K,s.pointShadowMatrix[d]=O.shadow.matrix,M++}s.point[d]=q,d++}else if(O.isHemisphereLight){const q=t.get(O);q.skyColor.copy(O.color).multiplyScalar(V*T),q.groundColor.copy(O.groundColor).multiplyScalar(V*T),s.hemi[_]=q,_++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=f,s.ambient[2]=y;const L=s.hash;(L.directionalLength!==m||L.pointLength!==d||L.spotLength!==E||L.rectAreaLength!==S||L.hemiLength!==_||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==A||L.numSpotMaps!==R)&&(s.directional.length=m,s.spot.length=E,s.rectArea.length=S,s.point.length=d,s.hemi.length=_,s.directionalShadow.length=v,s.directionalShadowMap.length=v,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=v,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=A+R-g,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=g,L.directionalLength=m,L.pointLength=d,L.spotLength=E,L.rectAreaLength=S,L.hemiLength=_,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=A,L.numSpotMaps=R,s.version=hf++)}function c(u,p){let h=0,f=0,y=0,m=0,d=0;const E=p.matrixWorldInverse;for(let S=0,_=u.length;S<_;S++){const v=u[S];if(v.isDirectionalLight){const M=s.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(E),h++}else if(v.isSpotLight){const M=s.spot[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(E),M.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(E),y++}else if(v.isRectAreaLight){const M=s.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(E),i.identity(),o.copy(v.matrixWorld),o.premultiply(E),i.extractRotation(o),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(i),M.halfHeight.applyMatrix4(i),m++}else if(v.isPointLight){const M=s.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(E),f++}else if(v.isHemisphereLight){const M=s.hemi[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(E),d++}}}return{setup:l,setupView:c,state:s}}function ro(r,e){const t=new ff(r,e),n=[],s=[];function a(){n.length=0,s.length=0}function o(p){n.push(p)}function i(p){s.push(p)}function l(p){t.setup(n,p)}function c(p){t.setupView(n,p)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:i}}function mf(r,e){let t=new WeakMap;function n(a,o=0){const i=t.get(a);let l;return i===void 0?(l=new ro(r,e),t.set(a,[l])):o>=i.length?(l=new ro(r,e),i.push(l)):l=i[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class yf extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gf extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ef=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_f=`uniform sampler2D shadow_pass;
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
}`;function xf(r,e,t){let n=new Ri;const s=new Se,a=new Se,o=new Ue,i=new yf({depthPacking:yc}),l=new gf,c={},u=t.maxTextureSize,p={0:Ot,1:Ln,2:Fi},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Ef,fragmentShader:_f}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const y=new Vt;y.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Bt(y,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo,this.render=function(v,M,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||v.length===0)return;const R=r.getRenderTarget(),g=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),L=r.state;L.setBlending(fn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let X=0,$=v.length;X<$;X++){const O=v[X],P=O.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const V=P.getFrameExtents();if(s.multiply(V),a.copy(P.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/V.x),s.x=a.x*V.x,P.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/V.y),s.y=a.y*V.y,P.mapSize.y=a.y)),P.map===null){const K=this.type!==ws?{minFilter:rt,magFilter:rt}:{};P.map=new In(s.x,s.y,K),P.map.texture.name=O.name+".shadowMap",P.camera.updateProjectionMatrix()}r.setRenderTarget(P.map),r.clear();const Y=P.getViewportCount();for(let K=0;K<Y;K++){const q=P.getViewport(K);o.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),L.viewport(o),P.updateMatrices(O,K),n=P.getFrustum(),_(M,A,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===ws&&E(P,A),P.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(R,g,T)};function E(v,M){const A=e.update(m);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new In(s.x,s.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(M,null,A,h,m,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(M,null,A,f,m,null)}function S(v,M,A,R,g,T){let L=null;const X=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(X!==void 0)L=X;else if(L=A.isPointLight===!0?l:i,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const $=L.uuid,O=M.uuid;let P=c[$];P===void 0&&(P={},c[$]=P);let V=P[O];V===void 0&&(V=L.clone(),P[O]=V),L=V}return L.visible=M.visible,L.wireframe=M.wireframe,T===ws?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:p[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,A.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(A.matrixWorld),L.nearDistance=R,L.farDistance=g),L}function _(v,M,A,R,g){if(v.visible===!1)return;if(v.layers.test(M.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&g===ws)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const X=e.update(v),$=v.material;if(Array.isArray($)){const O=X.groups;for(let P=0,V=O.length;P<V;P++){const Y=O[P],K=$[Y.materialIndex];if(K&&K.visible){const q=S(v,K,R,A.near,A.far,g);r.renderBufferDirect(A,null,X,q,v,Y)}}}else if($.visible){const O=S(v,$,R,A.near,A.far,g);r.renderBufferDirect(A,null,X,O,v,null)}}const L=v.children;for(let X=0,$=L.length;X<$;X++)_(L[X],M,A,R,g)}}function vf(r,e,t){const n=t.isWebGL2;function s(){let F=!1;const H=new Ue;let Q=null;const he=new Ue(0,0,0,0);return{setMask:function(Ee){Q!==Ee&&!F&&(r.colorMask(Ee,Ee,Ee,Ee),Q=Ee)},setLocked:function(Ee){F=Ee},setClear:function(Ee,ze,st,ct,yn){yn===!0&&(Ee*=ct,ze*=ct,st*=ct),H.set(Ee,ze,st,ct),he.equals(H)===!1&&(r.clearColor(Ee,ze,st,ct),he.copy(H))},reset:function(){F=!1,Q=null,he.set(-1,0,0,0)}}}function a(){let F=!1,H=null,Q=null,he=null;return{setTest:function(Ee){Ee?we(2929):de(2929)},setMask:function(Ee){H!==Ee&&!F&&(r.depthMask(Ee),H=Ee)},setFunc:function(Ee){if(Q!==Ee){switch(Ee){case Ul:r.depthFunc(512);break;case zl:r.depthFunc(519);break;case kl:r.depthFunc(513);break;case mi:r.depthFunc(515);break;case Vl:r.depthFunc(514);break;case Gl:r.depthFunc(518);break;case Hl:r.depthFunc(516);break;case Wl:r.depthFunc(517);break;default:r.depthFunc(515)}Q=Ee}},setLocked:function(Ee){F=Ee},setClear:function(Ee){he!==Ee&&(r.clearDepth(Ee),he=Ee)},reset:function(){F=!1,H=null,Q=null,he=null}}}function o(){let F=!1,H=null,Q=null,he=null,Ee=null,ze=null,st=null,ct=null,yn=null;return{setTest:function(qe){F||(qe?we(2960):de(2960))},setMask:function(qe){H!==qe&&!F&&(r.stencilMask(qe),H=qe)},setFunc:function(qe,jt,At){(Q!==qe||he!==jt||Ee!==At)&&(r.stencilFunc(qe,jt,At),Q=qe,he=jt,Ee=At)},setOp:function(qe,jt,At){(ze!==qe||st!==jt||ct!==At)&&(r.stencilOp(qe,jt,At),ze=qe,st=jt,ct=At)},setLocked:function(qe){F=qe},setClear:function(qe){yn!==qe&&(r.clearStencil(qe),yn=qe)},reset:function(){F=!1,H=null,Q=null,he=null,Ee=null,ze=null,st=null,ct=null,yn=null}}}const i=new s,l=new a,c=new o,u=new WeakMap,p=new WeakMap;let h={},f={},y=new WeakMap,m=[],d=null,E=!1,S=null,_=null,v=null,M=null,A=null,R=null,g=null,T=!1,L=null,X=null,$=null,O=null,P=null;const V=r.getParameter(35661);let Y=!1,K=0;const q=r.getParameter(7938);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=K>=2);let J=null,Z={};const z=r.getParameter(3088),U=r.getParameter(2978),ne=new Ue().fromArray(z),ee=new Ue().fromArray(U);function ie(F,H,Q){const he=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(F,Ee),r.texParameteri(F,10241,9728),r.texParameteri(F,10240,9728);for(let ze=0;ze<Q;ze++)r.texImage2D(H+ze,0,6408,1,1,0,6408,5121,he);return Ee}const G={};G[3553]=ie(3553,3553,1),G[34067]=ie(34067,34069,6),i.setClear(0,0,0,1),l.setClear(1),c.setClear(0),we(2929),l.setFunc(mi),Qe(!1),ht(Zi),we(2884),He(fn);function we(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function de(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function oe(F,H){return f[F]!==H?(r.bindFramebuffer(F,H),f[F]=H,n&&(F===36009&&(f[36160]=H),F===36160&&(f[36009]=H)),!0):!1}function se(F,H){let Q=m,he=!1;if(F)if(Q=y.get(H),Q===void 0&&(Q=[],y.set(H,Q)),F.isWebGLMultipleRenderTargets){const Ee=F.texture;if(Q.length!==Ee.length||Q[0]!==36064){for(let ze=0,st=Ee.length;ze<st;ze++)Q[ze]=36064+ze;Q.length=Ee.length,he=!0}}else Q[0]!==36064&&(Q[0]=36064,he=!0);else Q[0]!==1029&&(Q[0]=1029,he=!0);he&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function be(F){return d!==F?(r.useProgram(F),d=F,!0):!1}const ue={[ns]:32774,[Tl]:32778,[Al]:32779};if(n)ue[Qi]=32775,ue[er]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(ue[Qi]=F.MIN_EXT,ue[er]=F.MAX_EXT)}const me={[Fl]:0,[Dl]:1,[Ll]:768,[Ro]:770,[Nl]:776,[Bl]:774,[Rl]:772,[Pl]:769,[Io]:771,[Ol]:775,[Il]:773};function He(F,H,Q,he,Ee,ze,st,ct){if(F===fn){E===!0&&(de(3042),E=!1);return}if(E===!1&&(we(3042),E=!0),F!==Cl){if(F!==S||ct!==T){if((_!==ns||A!==ns)&&(r.blendEquation(32774),_=ns,A=ns),ct)switch(F){case is:r.blendFuncSeparate(1,771,1,771);break;case $i:r.blendFunc(1,1);break;case Ki:r.blendFuncSeparate(0,769,0,1);break;case Ji:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case is:r.blendFuncSeparate(770,771,1,771);break;case $i:r.blendFunc(770,1);break;case Ki:r.blendFuncSeparate(0,769,0,1);break;case Ji:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,M=null,R=null,g=null,S=F,T=ct}return}Ee=Ee||H,ze=ze||Q,st=st||he,(H!==_||Ee!==A)&&(r.blendEquationSeparate(ue[H],ue[Ee]),_=H,A=Ee),(Q!==v||he!==M||ze!==R||st!==g)&&(r.blendFuncSeparate(me[Q],me[he],me[ze],me[st]),v=Q,M=he,R=ze,g=st),S=F,T=!1}function Je(F,H){F.side===Fi?de(2884):we(2884);let Q=F.side===Ot;H&&(Q=!Q),Qe(Q),F.blending===is&&F.transparent===!1?He(fn):He(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),i.setMask(F.colorWrite);const he=F.stencilWrite;c.setTest(he),he&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?we(32926):de(32926)}function Qe(F){L!==F&&(F?r.frontFace(2304):r.frontFace(2305),L=F)}function ht(F){F!==Sl?(we(2884),F!==X&&(F===Zi?r.cullFace(1029):F===wl?r.cullFace(1028):r.cullFace(1032))):de(2884),X=F}function je(F){F!==$&&(Y&&r.lineWidth(F),$=F)}function ke(F,H,Q){F?(we(32823),(O!==H||P!==Q)&&(r.polygonOffset(H,Q),O=H,P=Q)):de(32823)}function Tt(F){F?we(3089):de(3089)}function yt(F){F===void 0&&(F=33984+V-1),J!==F&&(r.activeTexture(F),J=F)}function w(F,H,Q){Q===void 0&&(J===null?Q=33984+V-1:Q=J);let he=Z[Q];he===void 0&&(he={type:void 0,texture:void 0},Z[Q]=he),(he.type!==F||he.texture!==H)&&(J!==Q&&(r.activeTexture(Q),J=Q),r.bindTexture(F,H||G[F]),he.type=F,he.texture=H)}function x(){const F=Z[J];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function k(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function C(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(F){ne.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),ne.copy(F))}function ye(F){ee.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Le(F,H){let Q=p.get(H);Q===void 0&&(Q=new WeakMap,p.set(H,Q));let he=Q.get(F);he===void 0&&(he=r.getUniformBlockIndex(H,F.name),Q.set(F,he))}function Pe(F,H){const he=p.get(H).get(F);u.get(H)!==he&&(r.uniformBlockBinding(H,he,F.__bindingPointIndex),u.set(H,he))}function Ge(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,Z={},f={},y=new WeakMap,m=[],d=null,E=!1,S=null,_=null,v=null,M=null,A=null,R=null,g=null,T=!1,L=null,X=null,$=null,O=null,P=null,ne.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),i.reset(),l.reset(),c.reset()}return{buffers:{color:i,depth:l,stencil:c},enable:we,disable:de,bindFramebuffer:oe,drawBuffers:se,useProgram:be,setBlending:He,setMaterial:Je,setFlipSided:Qe,setCullFace:ht,setLineWidth:je,setPolygonOffset:ke,setScissorTest:Tt,activeTexture:yt,bindTexture:w,unbindTexture:x,compressedTexImage2D:k,compressedTexImage3D:te,texImage2D:fe,texImage3D:ce,updateUBOMapping:Le,uniformBlockBinding:Pe,texStorage2D:I,texStorage3D:pe,texSubImage2D:ae,texSubImage3D:le,compressedTexSubImage2D:ve,compressedTexSubImage3D:C,scissor:ge,viewport:ye,reset:Ge}}function bf(r,e,t,n,s,a,o){const i=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,p=s.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let m;const d=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,x){return E?new OffscreenCanvas(w,x):Ns("canvas")}function _(w,x,k,te){let ae=1;if((w.width>te||w.height>te)&&(ae=te/Math.max(w.width,w.height)),ae<1||x===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const le=x?ga:Math.floor,ve=le(ae*w.width),C=le(ae*w.height);m===void 0&&(m=S(ve,C));const I=k?S(ve,C):m;return I.width=ve,I.height=C,I.getContext("2d").drawImage(w,0,0,ve,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ve+"x"+C+")."),I}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function v(w){return _i(w.width)&&_i(w.height)}function M(w){return i?!1:w.wrapS!==wt||w.wrapT!==wt||w.minFilter!==rt&&w.minFilter!==Dt}function A(w,x){return w.generateMipmaps&&x&&w.minFilter!==rt&&w.minFilter!==Dt}function R(w){r.generateMipmap(w)}function g(w,x,k,te,ae=!1){if(i===!1)return x;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let le=x;return x===6403&&(k===5126&&(le=33326),k===5131&&(le=33325),k===5121&&(le=33321)),x===33319&&(k===5126&&(le=33328),k===5131&&(le=33327),k===5121&&(le=33323)),x===6408&&(k===5126&&(le=34836),k===5131&&(le=34842),k===5121&&(le=te===Ve&&ae===!1?35907:32856),k===32819&&(le=32854),k===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(w,x,k){return A(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==rt&&w.minFilter!==Dt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function L(w){return w===rt||w===tr||w===Da?9728:9729}function X(w){const x=w.target;x.removeEventListener("dispose",X),O(x),x.isVideoTexture&&y.delete(x)}function $(w){const x=w.target;x.removeEventListener("dispose",$),V(x)}function O(w){const x=n.get(w);if(x.__webglInit===void 0)return;const k=w.source,te=d.get(k);if(te){const ae=te[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&P(w),Object.keys(te).length===0&&d.delete(k)}n.remove(w)}function P(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const k=w.source,te=d.get(k);delete te[x.__cacheKey],o.memory.textures--}function V(w){const x=w.texture,k=n.get(w),te=n.get(x);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)r.deleteFramebuffer(k.__webglFramebuffer[ae]),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[ae]);else{if(r.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ae=0;ae<k.__webglColorRenderbuffer.length;ae++)k.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[ae]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ae=0,le=x.length;ae<le;ae++){const ve=n.get(x[ae]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(x[ae])}n.remove(x),n.remove(w)}let Y=0;function K(){Y=0}function q(){const w=Y;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Y+=1,w}function J(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.encoding),x.join()}function Z(w,x){const k=n.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(k,w,x);return}}t.bindTexture(3553,k.__webglTexture,33984+x)}function z(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){de(k,w,x);return}t.bindTexture(35866,k.__webglTexture,33984+x)}function U(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){de(k,w,x);return}t.bindTexture(32879,k.__webglTexture,33984+x)}function ne(w,x){const k=n.get(w);if(w.version>0&&k.__version!==w.version){oe(k,w,x);return}t.bindTexture(34067,k.__webglTexture,33984+x)}const ee={[Ps]:10497,[wt]:33071,[gi]:33648},ie={[rt]:9728,[tr]:9984,[Da]:9986,[Dt]:9729,[Jl]:9985,[Rs]:9987};function G(w,x,k){if(k?(r.texParameteri(w,10242,ee[x.wrapS]),r.texParameteri(w,10243,ee[x.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,ee[x.wrapR]),r.texParameteri(w,10240,ie[x.magFilter]),r.texParameteri(w,10241,ie[x.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(x.wrapS!==wt||x.wrapT!==wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,L(x.magFilter)),r.texParameteri(w,10241,L(x.minFilter)),x.minFilter!==rt&&x.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===rt||x.minFilter!==Da&&x.minFilter!==Rs||x.type===un&&e.has("OES_texture_float_linear")===!1||i===!1&&x.type===Is&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(w,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function we(w,x){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",X));const te=x.source;let ae=d.get(te);ae===void 0&&(ae={},d.set(te,ae));const le=J(x);if(le!==w.__cacheKey){ae[le]===void 0&&(ae[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ae[le].usedTimes++;const ve=ae[w.__cacheKey];ve!==void 0&&(ae[w.__cacheKey].usedTimes--,ve.usedTimes===0&&P(x)),w.__cacheKey=le,w.__webglTexture=ae[le].texture}return k}function de(w,x,k){let te=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=35866),x.isData3DTexture&&(te=32879);const ae=we(w,x),le=x.source;t.bindTexture(te,w.__webglTexture,33984+k);const ve=n.get(le);if(le.version!==ve.__version||ae===!0){t.activeTexture(33984+k),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const C=M(x)&&v(x.image)===!1;let I=_(x.image,C,!1,u);I=yt(x,I);const pe=v(I)||i,fe=a.convert(x.format,x.encoding);let ce=a.convert(x.type),ge=g(x.internalFormat,fe,ce,x.encoding,x.isVideoTexture);G(te,x,pe);let ye;const Le=x.mipmaps,Pe=i&&x.isVideoTexture!==!0,Ge=ve.__version===void 0||ae===!0,F=T(x,I,pe);if(x.isDepthTexture)ge=6402,i?x.type===un?ge=36012:x.type===Tn?ge=33190:x.type===rs?ge=35056:ge=33189:x.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Fn&&ge===6402&&x.type!==Oo&&x.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Tn,ce=a.convert(x.type)),x.format===cs&&ge===6402&&(ge=34041,x.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=rs,ce=a.convert(x.type))),Ge&&(Pe?t.texStorage2D(3553,1,ge,I.width,I.height):t.texImage2D(3553,0,ge,I.width,I.height,0,fe,ce,null));else if(x.isDataTexture)if(Le.length>0&&pe){Pe&&Ge&&t.texStorage2D(3553,F,ge,Le[0].width,Le[0].height);for(let H=0,Q=Le.length;H<Q;H++)ye=Le[H],Pe?t.texSubImage2D(3553,H,0,0,ye.width,ye.height,fe,ce,ye.data):t.texImage2D(3553,H,ge,ye.width,ye.height,0,fe,ce,ye.data);x.generateMipmaps=!1}else Pe?(Ge&&t.texStorage2D(3553,F,ge,I.width,I.height),t.texSubImage2D(3553,0,0,0,I.width,I.height,fe,ce,I.data)):t.texImage2D(3553,0,ge,I.width,I.height,0,fe,ce,I.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Pe&&Ge&&t.texStorage3D(35866,F,ge,Le[0].width,Le[0].height,I.depth);for(let H=0,Q=Le.length;H<Q;H++)ye=Le[H],x.format!==Lt?fe!==null?Pe?t.compressedTexSubImage3D(35866,H,0,0,0,ye.width,ye.height,I.depth,fe,ye.data,0,0):t.compressedTexImage3D(35866,H,ge,ye.width,ye.height,I.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,H,0,0,0,ye.width,ye.height,I.depth,fe,ce,ye.data):t.texImage3D(35866,H,ge,ye.width,ye.height,I.depth,0,fe,ce,ye.data)}else{Pe&&Ge&&t.texStorage2D(3553,F,ge,Le[0].width,Le[0].height);for(let H=0,Q=Le.length;H<Q;H++)ye=Le[H],x.format!==Lt?fe!==null?Pe?t.compressedTexSubImage2D(3553,H,0,0,ye.width,ye.height,fe,ye.data):t.compressedTexImage2D(3553,H,ge,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,H,0,0,ye.width,ye.height,fe,ce,ye.data):t.texImage2D(3553,H,ge,ye.width,ye.height,0,fe,ce,ye.data)}else if(x.isDataArrayTexture)Pe?(Ge&&t.texStorage3D(35866,F,ge,I.width,I.height,I.depth),t.texSubImage3D(35866,0,0,0,0,I.width,I.height,I.depth,fe,ce,I.data)):t.texImage3D(35866,0,ge,I.width,I.height,I.depth,0,fe,ce,I.data);else if(x.isData3DTexture)Pe?(Ge&&t.texStorage3D(32879,F,ge,I.width,I.height,I.depth),t.texSubImage3D(32879,0,0,0,0,I.width,I.height,I.depth,fe,ce,I.data)):t.texImage3D(32879,0,ge,I.width,I.height,I.depth,0,fe,ce,I.data);else if(x.isFramebufferTexture){if(Ge)if(Pe)t.texStorage2D(3553,F,ge,I.width,I.height);else{let H=I.width,Q=I.height;for(let he=0;he<F;he++)t.texImage2D(3553,he,ge,H,Q,0,fe,ce,null),H>>=1,Q>>=1}}else if(Le.length>0&&pe){Pe&&Ge&&t.texStorage2D(3553,F,ge,Le[0].width,Le[0].height);for(let H=0,Q=Le.length;H<Q;H++)ye=Le[H],Pe?t.texSubImage2D(3553,H,0,0,fe,ce,ye):t.texImage2D(3553,H,ge,fe,ce,ye);x.generateMipmaps=!1}else Pe?(Ge&&t.texStorage2D(3553,F,ge,I.width,I.height),t.texSubImage2D(3553,0,0,0,fe,ce,I)):t.texImage2D(3553,0,ge,fe,ce,I);A(x,pe)&&R(te),ve.__version=le.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function oe(w,x,k){if(x.image.length!==6)return;const te=we(w,x),ae=x.source;t.bindTexture(34067,w.__webglTexture,33984+k);const le=n.get(ae);if(ae.version!==le.__version||te===!0){t.activeTexture(33984+k),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,I=[];for(let H=0;H<6;H++)!ve&&!C?I[H]=_(x.image[H],!1,!0,c):I[H]=C?x.image[H].image:x.image[H],I[H]=yt(x,I[H]);const pe=I[0],fe=v(pe)||i,ce=a.convert(x.format,x.encoding),ge=a.convert(x.type),ye=g(x.internalFormat,ce,ge,x.encoding),Le=i&&x.isVideoTexture!==!0,Pe=le.__version===void 0||te===!0;let Ge=T(x,pe,fe);G(34067,x,fe);let F;if(ve){Le&&Pe&&t.texStorage2D(34067,Ge,ye,pe.width,pe.height);for(let H=0;H<6;H++){F=I[H].mipmaps;for(let Q=0;Q<F.length;Q++){const he=F[Q];x.format!==Lt?ce!==null?Le?t.compressedTexSubImage2D(34069+H,Q,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(34069+H,Q,ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+H,Q,0,0,he.width,he.height,ce,ge,he.data):t.texImage2D(34069+H,Q,ye,he.width,he.height,0,ce,ge,he.data)}}}else{F=x.mipmaps,Le&&Pe&&(F.length>0&&Ge++,t.texStorage2D(34067,Ge,ye,I[0].width,I[0].height));for(let H=0;H<6;H++)if(C){Le?t.texSubImage2D(34069+H,0,0,0,I[H].width,I[H].height,ce,ge,I[H].data):t.texImage2D(34069+H,0,ye,I[H].width,I[H].height,0,ce,ge,I[H].data);for(let Q=0;Q<F.length;Q++){const Ee=F[Q].image[H].image;Le?t.texSubImage2D(34069+H,Q+1,0,0,Ee.width,Ee.height,ce,ge,Ee.data):t.texImage2D(34069+H,Q+1,ye,Ee.width,Ee.height,0,ce,ge,Ee.data)}}else{Le?t.texSubImage2D(34069+H,0,0,0,ce,ge,I[H]):t.texImage2D(34069+H,0,ye,ce,ge,I[H]);for(let Q=0;Q<F.length;Q++){const he=F[Q];Le?t.texSubImage2D(34069+H,Q+1,0,0,ce,ge,he.image[H]):t.texImage2D(34069+H,Q+1,ye,ce,ge,he.image[H])}}}A(x,fe)&&R(34067),le.__version=ae.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function se(w,x,k,te,ae){const le=a.convert(k.format,k.encoding),ve=a.convert(k.type),C=g(k.internalFormat,le,ve,k.encoding);n.get(x).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,C,x.width,x.height,x.depth,0,le,ve,null):t.texImage2D(ae,0,C,x.width,x.height,0,le,ve,null)),t.bindFramebuffer(36160,w),ke(x)?h.framebufferTexture2DMultisampleEXT(36160,te,ae,n.get(k).__webglTexture,0,je(x)):(ae===3553||ae>=34069&&ae<=34074)&&r.framebufferTexture2D(36160,te,ae,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function be(w,x,k){if(r.bindRenderbuffer(36161,w),x.depthBuffer&&!x.stencilBuffer){let te=33189;if(k||ke(x)){const ae=x.depthTexture;ae&&ae.isDepthTexture&&(ae.type===un?te=36012:ae.type===Tn&&(te=33190));const le=je(x);ke(x)?h.renderbufferStorageMultisampleEXT(36161,le,te,x.width,x.height):r.renderbufferStorageMultisample(36161,le,te,x.width,x.height)}else r.renderbufferStorage(36161,te,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(x.depthBuffer&&x.stencilBuffer){const te=je(x);k&&ke(x)===!1?r.renderbufferStorageMultisample(36161,te,35056,x.width,x.height):ke(x)?h.renderbufferStorageMultisampleEXT(36161,te,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const te=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ae=0;ae<te.length;ae++){const le=te[ae],ve=a.convert(le.format,le.encoding),C=a.convert(le.type),I=g(le.internalFormat,ve,C,le.encoding),pe=je(x);k&&ke(x)===!1?r.renderbufferStorageMultisample(36161,pe,I,x.width,x.height):ke(x)?h.renderbufferStorageMultisampleEXT(36161,pe,I,x.width,x.height):r.renderbufferStorage(36161,I,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function ue(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const te=n.get(x.depthTexture).__webglTexture,ae=je(x);if(x.depthTexture.format===Fn)ke(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ae):r.framebufferTexture2D(36160,36096,3553,te,0);else if(x.depthTexture.format===cs)ke(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ae):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function me(w){const x=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ue(x.__webglFramebuffer,w)}else if(k){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=r.createRenderbuffer(),be(x.__webglDepthbuffer[te],w,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),be(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function He(w,x,k){const te=n.get(w);x!==void 0&&se(te.__webglFramebuffer,w,w.texture,36064,3553),k!==void 0&&me(w)}function Je(w){const x=w.texture,k=n.get(w),te=n.get(x);w.addEventListener("dispose",$),w.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=x.version,o.memory.textures++);const ae=w.isWebGLCubeRenderTarget===!0,le=w.isWebGLMultipleRenderTargets===!0,ve=v(w)||i;if(ae){k.__webglFramebuffer=[];for(let C=0;C<6;C++)k.__webglFramebuffer[C]=r.createFramebuffer()}else{if(k.__webglFramebuffer=r.createFramebuffer(),le)if(s.drawBuffers){const C=w.texture;for(let I=0,pe=C.length;I<pe;I++){const fe=n.get(C[I]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&w.samples>0&&ke(w)===!1){const C=le?x:[x];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let I=0;I<C.length;I++){const pe=C[I];k.__webglColorRenderbuffer[I]=r.createRenderbuffer(),r.bindRenderbuffer(36161,k.__webglColorRenderbuffer[I]);const fe=a.convert(pe.format,pe.encoding),ce=a.convert(pe.type),ge=g(pe.internalFormat,fe,ce,pe.encoding,w.isXRRenderTarget===!0),ye=je(w);r.renderbufferStorageMultisample(36161,ye,ge,w.width,w.height),r.framebufferRenderbuffer(36160,36064+I,36161,k.__webglColorRenderbuffer[I])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),be(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,te.__webglTexture),G(34067,x,ve);for(let C=0;C<6;C++)se(k.__webglFramebuffer[C],w,x,36064,34069+C);A(x,ve)&&R(34067),t.unbindTexture()}else if(le){const C=w.texture;for(let I=0,pe=C.length;I<pe;I++){const fe=C[I],ce=n.get(fe);t.bindTexture(3553,ce.__webglTexture),G(3553,fe,ve),se(k.__webglFramebuffer,w,fe,36064+I,3553),A(fe,ve)&&R(3553)}t.unbindTexture()}else{let C=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(i?C=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,te.__webglTexture),G(C,x,ve),se(k.__webglFramebuffer,w,x,36064,C),A(x,ve)&&R(C),t.unbindTexture()}w.depthBuffer&&me(w)}function Qe(w){const x=v(w)||i,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0,ae=k.length;te<ae;te++){const le=k[te];if(A(le,x)){const ve=w.isWebGLCubeRenderTarget?34067:3553,C=n.get(le).__webglTexture;t.bindTexture(ve,C),R(ve),t.unbindTexture()}}}function ht(w){if(i&&w.samples>0&&ke(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,te=w.height;let ae=16384;const le=[],ve=w.stencilBuffer?33306:36096,C=n.get(w),I=w.isWebGLMultipleRenderTargets===!0;if(I)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),r.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){le.push(36064+pe),w.depthBuffer&&le.push(ve);const fe=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(fe===!1&&(w.depthBuffer&&(ae|=256),w.stencilBuffer&&(ae|=1024)),I&&r.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[pe]),fe===!0&&(r.invalidateFramebuffer(36008,[ve]),r.invalidateFramebuffer(36009,[ve])),I){const ce=n.get(x[pe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ce,0)}r.blitFramebuffer(0,0,k,te,0,0,k,te,ae,9728),f&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),I)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+pe,36161,C.__webglColorRenderbuffer[pe]);const fe=n.get(x[pe]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),r.framebufferTexture2D(36009,36064+pe,3553,fe,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function je(w){return Math.min(p,w.samples)}function ke(w){const x=n.get(w);return i&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(w){const x=o.render.frame;y.get(w)!==x&&(y.set(w,x),w.update())}function yt(w,x){const k=w.encoding,te=w.format,ae=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ei||k!==Rn&&(k===Ve?i===!1?e.has("EXT_sRGB")===!0&&te===Lt?(w.format=Ei,w.minFilter=Dt,w.generateMipmaps=!1):x=ko.sRGBToLinear(x):(te!==Lt||ae!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),x}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=Z,this.setTexture2DArray=z,this.setTexture3D=U,this.setTextureCube=ne,this.rebindTextures=He,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ke}function Mf(r,e,t){const n=t.isWebGL2;function s(a,o=null){let i;if(a===Pn)return 5121;if(a===nc)return 32819;if(a===sc)return 32820;if(a===Ql)return 5120;if(a===ec)return 5122;if(a===Oo)return 5123;if(a===tc)return 5124;if(a===Tn)return 5125;if(a===un)return 5126;if(a===Is)return n?5131:(i=e.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(a===ac)return 6406;if(a===Lt)return 6408;if(a===rc)return 6409;if(a===oc)return 6410;if(a===Fn)return 6402;if(a===cs)return 34041;if(a===ic)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===Ei)return i=e.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(a===lc)return 6403;if(a===cc)return 36244;if(a===pc)return 33319;if(a===uc)return 33320;if(a===hc)return 36249;if(a===La||a===Pa||a===Ra||a===Ia)if(o===Ve)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(a===La)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Pa)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ra)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ia)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(a===La)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Pa)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ra)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ia)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===nr||a===sr||a===ar||a===ir)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(a===nr)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===sr)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ar)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===ir)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===dc)return i=e.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===rr||a===or)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(a===rr)return o===Ve?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(a===or)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===lr||a===cr||a===pr||a===ur||a===hr||a===dr||a===fr||a===mr||a===yr||a===gr||a===Er||a===_r||a===xr||a===vr)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(a===lr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===cr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===pr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ur)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===hr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===dr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===fr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===mr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===yr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===gr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Er)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===_r)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===xr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===vr)return o===Ve?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===br)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(a===br)return o===Ve?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===rs?n?34042:(i=e.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:s}}class Sf extends ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class as extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wf={type:"move"};class ri{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,o=null;const i=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const d=t.getJointPose(m,n),E=this._getHandJoint(c,m);d!==null&&(E.matrix.fromArray(d.transform.matrix),E.matrix.decompose(E.position,E.rotation,E.scale),E.jointRadius=d.radius),E.visible=d!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),f=.02,y=.005;c.inputState.pinching&&h>f+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));i!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(i.matrix.fromArray(s.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),s.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(s.linearVelocity)):i.hasLinearVelocity=!1,s.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(s.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(wf)))}return i!==null&&(i.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new as;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Cf extends lt{constructor(e,t,n,s,a,o,i,l,c,u){if(u=u!==void 0?u:Fn,u!==Fn&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fn&&(n=Tn),n===void 0&&u===cs&&(n=rs),super(null,s,a,o,i,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=i!==void 0?i:rt,this.minFilter=l!==void 0?l:rt,this.flipY=!1,this.generateMipmaps=!1}}class Tf extends Nn{constructor(e,t){super();const n=this;let s=null,a=1,o=null,i="local-floor",l=null,c=null,u=null,p=null,h=null,f=null;const y=t.getContextAttributes();let m=null,d=null;const E=[],S=[],_=new Set,v=new Map,M=new ut;M.layers.enable(1),M.viewport=new Ue;const A=new ut;A.layers.enable(2),A.viewport=new Ue;const R=[M,A],g=new Sf;g.layers.enable(1),g.layers.enable(2);let T=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let U=E[z];return U===void 0&&(U=new ri,E[z]=U),U.getTargetRaySpace()},this.getControllerGrip=function(z){let U=E[z];return U===void 0&&(U=new ri,E[z]=U),U.getGripSpace()},this.getHand=function(z){let U=E[z];return U===void 0&&(U=new ri,E[z]=U),U.getHandSpace()};function X(z){const U=S.indexOf(z.inputSource);if(U===-1)return;const ne=E[U];ne!==void 0&&ne.dispatchEvent({type:z.type,data:z.inputSource})}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",O);for(let z=0;z<E.length;z++){const U=S[z];U!==null&&(S[z]=null,E[z].disconnect(U))}T=null,L=null,e.setRenderTarget(m),h=null,p=null,u=null,s=null,d=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){i=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(s,t,U),s.updateRenderState({baseLayer:h}),d=new In(h.framebufferWidth,h.framebufferHeight,{format:Lt,type:Pn,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let U=null,ne=null,ee=null;y.depth&&(ee=y.stencil?35056:33190,U=y.stencil?cs:Fn,ne=y.stencil?rs:Tn);const ie={colorFormat:32856,depthFormat:ee,scaleFactor:a};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(ie),s.updateRenderState({layers:[p]}),d=new In(p.textureWidth,p.textureHeight,{format:Lt,type:Pn,depthTexture:new Cf(p.textureWidth,p.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const G=e.properties.get(d);G.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await s.requestReferenceSpace(i),Z.setContext(s),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(z){for(let U=0;U<z.removed.length;U++){const ne=z.removed[U],ee=S.indexOf(ne);ee>=0&&(S[ee]=null,E[ee].disconnect(ne))}for(let U=0;U<z.added.length;U++){const ne=z.added[U];let ee=S.indexOf(ne);if(ee===-1){for(let G=0;G<E.length;G++)if(G>=S.length){S.push(ne),ee=G;break}else if(S[G]===null){S[G]=ne,ee=G;break}if(ee===-1)break}const ie=E[ee];ie&&ie.connect(ne)}}const P=new D,V=new D;function Y(z,U,ne){P.setFromMatrixPosition(U.matrixWorld),V.setFromMatrixPosition(ne.matrixWorld);const ee=P.distanceTo(V),ie=U.projectionMatrix.elements,G=ne.projectionMatrix.elements,we=ie[14]/(ie[10]-1),de=ie[14]/(ie[10]+1),oe=(ie[9]+1)/ie[5],se=(ie[9]-1)/ie[5],be=(ie[8]-1)/ie[0],ue=(G[8]+1)/G[0],me=we*be,He=we*ue,Je=ee/(-be+ue),Qe=Je*-be;U.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Qe),z.translateZ(Je),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const ht=we+Je,je=de+Je,ke=me-Qe,Tt=He+(ee-Qe),yt=oe*de/je*ht,w=se*de/je*ht;z.projectionMatrix.makePerspective(ke,Tt,yt,w,ht,je)}function K(z,U){U===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(U.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;g.near=A.near=M.near=z.near,g.far=A.far=M.far=z.far,(T!==g.near||L!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),T=g.near,L=g.far);const U=z.parent,ne=g.cameras;K(g,U);for(let ie=0;ie<ne.length;ie++)K(ne[ie],U);g.matrixWorld.decompose(g.position,g.quaternion,g.scale),z.matrix.copy(g.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const ee=z.children;for(let ie=0,G=ee.length;ie<G;ie++)ee[ie].updateMatrixWorld(!0);ne.length===2?Y(g,M,A):g.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return g},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(z){p!==null&&(p.fixedFoveation=z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=z)},this.getPlanes=function(){return _};let q=null;function J(z,U){if(c=U.getViewerPose(l||o),f=U,c!==null){const ne=c.views;h!==null&&(e.setRenderTargetFramebuffer(d,h.framebuffer),e.setRenderTarget(d));let ee=!1;ne.length!==g.cameras.length&&(g.cameras.length=0,ee=!0);for(let ie=0;ie<ne.length;ie++){const G=ne[ie];let we=null;if(h!==null)we=h.getViewport(G);else{const oe=u.getViewSubImage(p,G);we=oe.viewport,ie===0&&(e.setRenderTargetTextures(d,oe.colorTexture,p.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(d))}let de=R[ie];de===void 0&&(de=new ut,de.layers.enable(ie),de.viewport=new Ue,R[ie]=de),de.matrix.fromArray(G.transform.matrix),de.projectionMatrix.fromArray(G.projectionMatrix),de.viewport.set(we.x,we.y,we.width,we.height),ie===0&&g.matrix.copy(de.matrix),ee===!0&&g.cameras.push(de)}}for(let ne=0;ne<E.length;ne++){const ee=S[ne],ie=E[ne];ee!==null&&ie!==void 0&&ie.update(ee,U,l||o)}if(q&&q(z,U),U.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:U.detectedPlanes});let ne=null;for(const ee of _)U.detectedPlanes.has(ee)||(ne===null&&(ne=[]),ne.push(ee));if(ne!==null)for(const ee of ne)_.delete(ee),v.delete(ee),n.dispatchEvent({type:"planeremoved",data:ee});for(const ee of U.detectedPlanes)if(!_.has(ee))_.add(ee),v.set(ee,U.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ee});else{const ie=v.get(ee);ee.lastChangedTime>ie&&(v.set(ee,ee.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ee}))}}f=null}const Z=new $o;Z.setAnimationLoop(J),this.setAnimationLoop=function(z){q=z},this.dispose=function(){}}}function Af(r,e){function t(m,d){d.color.getRGB(m.fogColor.value,jo(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,E,S,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&h(m,d,_)):d.isMeshMatcapMaterial?(s(m,d),f(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?i(m,d,E,S):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Ot&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Ot&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let _;d.aoMap?_=d.aoMap:d.lightMap&&(_=d.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function i(m,d,E,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=S*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let _;d.map?_=d.map:d.alphaMap&&(_=d.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E;d.map?E=d.map:d.alphaMap&&(E=d.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function h(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Ot&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function f(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Ff(r,e,t,n){let s={},a={},o=[];const i=t.isWebGL2?r.getParameter(35375):0;function l(S,_){const v=_.program;n.uniformBlockBinding(S,v)}function c(S,_){let v=s[S.id];v===void 0&&(y(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",d));const M=_.program;n.updateUBOMapping(S,M);const A=e.render.frame;a[S.id]!==A&&(h(S),a[S.id]=A)}function u(S){const _=p();S.__bindingPointIndex=_;const v=r.createBuffer(),M=S.__size,A=S.usage;return r.bindBuffer(35345,v),r.bufferData(35345,M,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,v),v}function p(){for(let S=0;S<i;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const _=s[S.id],v=S.uniforms,M=S.__cache;r.bindBuffer(35345,_);for(let A=0,R=v.length;A<R;A++){const g=v[A];if(f(g,A,M)===!0){const T=g.__offset,L=Array.isArray(g.value)?g.value:[g.value];let X=0;for(let $=0;$<L.length;$++){const O=L[$],P=m(O);typeof O=="number"?(g.__data[0]=O,r.bufferSubData(35345,T+X,g.__data)):O.isMatrix3?(g.__data[0]=O.elements[0],g.__data[1]=O.elements[1],g.__data[2]=O.elements[2],g.__data[3]=O.elements[0],g.__data[4]=O.elements[3],g.__data[5]=O.elements[4],g.__data[6]=O.elements[5],g.__data[7]=O.elements[0],g.__data[8]=O.elements[6],g.__data[9]=O.elements[7],g.__data[10]=O.elements[8],g.__data[11]=O.elements[0]):(O.toArray(g.__data,X),X+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,g.__data)}}r.bindBuffer(35345,null)}function f(S,_,v){const M=S.value;if(v[_]===void 0){if(typeof M=="number")v[_]=M;else{const A=Array.isArray(M)?M:[M],R=[];for(let g=0;g<A.length;g++)R.push(A[g].clone());v[_]=R}return!0}else if(typeof M=="number"){if(v[_]!==M)return v[_]=M,!0}else{const A=Array.isArray(v[_])?v[_]:[v[_]],R=Array.isArray(M)?M:[M];for(let g=0;g<A.length;g++){const T=A[g];if(T.equals(R[g])===!1)return T.copy(R[g]),!0}}return!1}function y(S){const _=S.uniforms;let v=0;const M=16;let A=0;for(let R=0,g=_.length;R<g;R++){const T=_[R],L={boundary:0,storage:0},X=Array.isArray(T.value)?T.value:[T.value];for(let $=0,O=X.length;$<O;$++){const P=X[$],V=m(P);L.boundary+=V.boundary,L.storage+=V.storage}if(T.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=v,R>0){A=v%M;const $=M-A;A!==0&&$-L.boundary<0&&(v+=M-A,T.__offset=v)}v+=L.storage}return A=v%M,A>0&&(v+=M-A),S.__size=v,S.__cache={},this}function m(S){const _={boundary:0,storage:0};return typeof S=="number"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function d(S){const _=S.target;_.removeEventListener("dispose",d);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function E(){for(const S in s)r.deleteBuffer(s[S]);o=[],s={},a={}}return{bind:l,update:c,dispose:E}}function Df(){const r=Ns("canvas");return r.style.display="block",r}function Ni(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Df(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,s=r.stencil!==void 0?r.stencil:!0,a=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,i=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let p=null,h=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rn,this.physicallyCorrectLights=!1,this.toneMapping=nn,this.toneMappingExposure=1;const m=this;let d=!1,E=0,S=0,_=null,v=-1,M=null;const A=new Ue,R=new Ue;let g=null,T=e.width,L=e.height,X=1,$=null,O=null;const P=new Ue(0,0,T,L),V=new Ue(0,0,T,L);let Y=!1;const K=new Ri;let q=!1,J=!1,Z=null;const z=new xe,U=new Se,ne=new D,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ie(){return _===null?X:1}let G=t;function we(b,N){for(let W=0;W<b.length;W++){const B=b[W],j=e.getContext(B,N);if(j!==null)return j}return null}try{const b={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:i,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ai}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Le,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&N.shift(),G=we(N,b),G===null)throw we(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let de,oe,se,be,ue,me,He,Je,Qe,ht,je,ke,Tt,yt,w,x,k,te,ae,le,ve,C,I,pe;function fe(){de=new kh(G),oe=new Ih(G,de,r),de.init(oe),C=new Mf(G,de,oe),se=new vf(G,de,oe),be=new Hh,ue=new of,me=new bf(G,de,se,ue,oe,C,be),He=new Oh(m),Je=new zh(m),Qe=new Jc(G,oe),I=new Ph(G,de,Qe,oe),ht=new Vh(G,Qe,be,I),je=new jh(G,ht,Qe,be),ae=new Xh(G,oe,me),x=new Bh(ue),ke=new rf(m,He,Je,de,oe,I,x),Tt=new Af(m,ue),yt=new cf,w=new mf(de,oe),te=new Lh(m,He,Je,se,je,u,o),k=new xf(m,je,oe),pe=new Ff(G,be,oe,se),le=new Rh(G,de,be,oe),ve=new Gh(G,de,be,oe),be.programs=ke.programs,m.capabilities=oe,m.extensions=de,m.properties=ue,m.renderLists=yt,m.shadowMap=k,m.state=se,m.info=be}fe();const ce=new Tf(m,G);this.xr=ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=de.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=de.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(T,L,!1))},this.getSize=function(b){return b.set(T,L)},this.setSize=function(b,N,W){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=b,L=N,e.width=Math.floor(b*X),e.height=Math.floor(N*X),W!==!1&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(T*X,L*X).floor()},this.setDrawingBufferSize=function(b,N,W){T=b,L=N,X=W,e.width=Math.floor(b*W),e.height=Math.floor(N*W),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,N,W,B){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,N,W,B),se.viewport(A.copy(P).multiplyScalar(X).floor())},this.getScissor=function(b){return b.copy(V)},this.setScissor=function(b,N,W,B){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,N,W,B),se.scissor(R.copy(V).multiplyScalar(X).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(b){se.setScissorTest(Y=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){O=b},this.getClearColor=function(b){return b.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(b=!0,N=!0,W=!0){let B=0;b&&(B|=16384),N&&(B|=256),W&&(B|=1024),G.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Le,!1),yt.dispose(),w.dispose(),ue.dispose(),He.dispose(),Je.dispose(),je.dispose(),I.dispose(),pe.dispose(),ke.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",he),ce.removeEventListener("sessionend",Ee),Z&&(Z.dispose(),Z=null),ze.stop()};function ge(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const b=be.autoReset,N=k.enabled,W=k.autoUpdate,B=k.needsUpdate,j=k.type;fe(),be.autoReset=b,k.enabled=N,k.autoUpdate=W,k.needsUpdate=B,k.type=j}function Le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pe(b){const N=b.target;N.removeEventListener("dispose",Pe),Ge(N)}function Ge(b){F(b),ue.remove(b)}function F(b){const N=ue.get(b).programs;N!==void 0&&(N.forEach(function(W){ke.releaseProgram(W)}),b.isShaderMaterial&&ke.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,W,B,j,_e){N===null&&(N=ee);const Me=j.isMesh&&j.matrixWorld.determinant()<0,Te=El(b,N,W,B,j);se.setMaterial(B,Me);let Fe=W.index,Oe=1;B.wireframe===!0&&(Fe=ht.getWireframeAttribute(W),Oe=2);const Re=W.drawRange,Ie=W.attributes.position;let Ze=Re.start*Oe,vt=(Re.start+Re.count)*Oe;_e!==null&&(Ze=Math.max(Ze,_e.start*Oe),vt=Math.min(vt,(_e.start+_e.count)*Oe)),Fe!==null?(Ze=Math.max(Ze,0),vt=Math.min(vt,Fe.count)):Ie!=null&&(Ze=Math.max(Ze,0),vt=Math.min(vt,Ie.count));const Yt=vt-Ze;if(Yt<0||Yt===1/0)return;I.setup(j,B,Te,W,Fe);let gn,$e=le;if(Fe!==null&&(gn=Qe.get(Fe),$e=ve,$e.setIndex(gn)),j.isMesh)B.wireframe===!0?(se.setLineWidth(B.wireframeLinewidth*ie()),$e.setMode(1)):$e.setMode(4);else if(j.isLine){let Be=B.linewidth;Be===void 0&&(Be=1),se.setLineWidth(Be*ie()),j.isLineSegments?$e.setMode(1):j.isLineLoop?$e.setMode(2):$e.setMode(3)}else j.isPoints?$e.setMode(0):j.isSprite&&$e.setMode(4);if(j.isInstancedMesh)$e.renderInstances(Ze,Yt,j.count);else if(W.isInstancedBufferGeometry){const Be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ca=Math.min(W.instanceCount,Be);$e.renderInstances(Ze,Yt,Ca)}else $e.render(Ze,Yt)},this.compile=function(b,N){function W(B,j,_e){B.transparent===!0&&B.side===Hs?(B.side=Ot,B.needsUpdate=!0,At(B,j,_e),B.side=Ln,B.needsUpdate=!0,At(B,j,_e),B.side=Hs):At(B,j,_e)}h=w.get(b),h.init(),y.push(h),b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights(m.physicallyCorrectLights),b.traverse(function(B){const j=B.material;if(j)if(Array.isArray(j))for(let _e=0;_e<j.length;_e++){const Me=j[_e];W(Me,b,B)}else W(j,b,B)}),y.pop(),h=null};let H=null;function Q(b){H&&H(b)}function he(){ze.stop()}function Ee(){ze.start()}const ze=new $o;ze.setAnimationLoop(Q),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(b){H=b,ce.setAnimationLoop(b),b===null?ze.stop():ze.start()},ce.addEventListener("sessionstart",he),ce.addEventListener("sessionend",Ee),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(N),N=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(m,b,N,_),h=w.get(b,y.length),h.init(),y.push(h),z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(z),J=this.localClippingEnabled,q=x.init(this.clippingPlanes,J,N),p=yt.get(b,f.length),p.init(),f.push(p),st(b,N,0,m.sortObjects),p.finish(),m.sortObjects===!0&&p.sort($,O),q===!0&&x.beginShadows();const W=h.state.shadowsArray;if(k.render(W,b,N),q===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(p,b),h.setupLights(m.physicallyCorrectLights),N.isArrayCamera){const B=N.cameras;for(let j=0,_e=B.length;j<_e;j++){const Me=B[j];ct(p,b,Me,Me.viewport)}}else ct(p,b,N);_!==null&&(me.updateMultisampleRenderTarget(_),me.updateRenderTargetMipmap(_)),b.isScene===!0&&b.onAfterRender(m,b,N),I.resetDefaultState(),v=-1,M=null,y.pop(),y.length>0?h=y[y.length-1]:h=null,f.pop(),f.length>0?p=f[f.length-1]:p=null};function st(b,N,W,B){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){B&&ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(z);const Me=je.update(b),Te=b.material;Te.visible&&p.push(b,Me,Te,W,ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==be.render.frame&&(b.skeleton.update(),b.skeleton.frame=be.render.frame),!b.frustumCulled||K.intersectsObject(b))){B&&ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(z);const Me=je.update(b),Te=b.material;if(Array.isArray(Te)){const Fe=Me.groups;for(let Oe=0,Re=Fe.length;Oe<Re;Oe++){const Ie=Fe[Oe],Ze=Te[Ie.materialIndex];Ze&&Ze.visible&&p.push(b,Me,Ze,W,ne.z,Ie)}}else Te.visible&&p.push(b,Me,Te,W,ne.z,null)}}const _e=b.children;for(let Me=0,Te=_e.length;Me<Te;Me++)st(_e[Me],N,W,B)}function ct(b,N,W,B){const j=b.opaque,_e=b.transmissive,Me=b.transparent;h.setupLightsView(W),_e.length>0&&yn(j,N,W),B&&se.viewport(A.copy(B)),j.length>0&&qe(j,N,W),_e.length>0&&qe(_e,N,W),Me.length>0&&qe(Me,N,W),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function yn(b,N,W){const B=oe.isWebGL2;Z===null&&(Z=new In(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?Is:Pn,minFilter:Rs,samples:B&&a===!0?4:0})),m.getDrawingBufferSize(U),B?Z.setSize(U.x,U.y):Z.setSize(ga(U.x),ga(U.y));const j=m.getRenderTarget();m.setRenderTarget(Z),m.clear();const _e=m.toneMapping;m.toneMapping=nn,qe(b,N,W),m.toneMapping=_e,me.updateMultisampleRenderTarget(Z),me.updateRenderTargetMipmap(Z),m.setRenderTarget(j)}function qe(b,N,W){const B=N.isScene===!0?N.overrideMaterial:null;for(let j=0,_e=b.length;j<_e;j++){const Me=b[j],Te=Me.object,Fe=Me.geometry,Oe=B===null?Me.material:B,Re=Me.group;Te.layers.test(W.layers)&&jt(Te,N,W,Fe,Oe,Re)}}function jt(b,N,W,B,j,_e){b.onBeforeRender(m,N,W,B,j,_e),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(m,N,W,B,b,_e),j.transparent===!0&&j.side===Hs?(j.side=Ot,j.needsUpdate=!0,m.renderBufferDirect(W,N,B,j,b,_e),j.side=Ln,j.needsUpdate=!0,m.renderBufferDirect(W,N,B,j,b,_e),j.side=Hs):m.renderBufferDirect(W,N,B,j,b,_e),b.onAfterRender(m,N,W,B,j,_e)}function At(b,N,W){N.isScene!==!0&&(N=ee);const B=ue.get(b),j=h.state.lights,_e=h.state.shadowsArray,Me=j.state.version,Te=ke.getParameters(b,j.state,_e,N,W),Fe=ke.getProgramCacheKey(Te);let Oe=B.programs;B.environment=b.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(b.isMeshStandardMaterial?Je:He).get(b.envMap||B.environment),Oe===void 0&&(b.addEventListener("dispose",Pe),Oe=new Map,B.programs=Oe);let Re=Oe.get(Fe);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===Me)return qi(b,Te),Re}else Te.uniforms=ke.getUniforms(b),b.onBuild(W,Te,m),b.onBeforeCompile(Te,m),Re=ke.acquireProgram(Te,Fe),Oe.set(Fe,Re),B.uniforms=Te.uniforms;const Ie=B.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=x.uniform),qi(b,Te),B.needsLights=xl(b),B.lightsStateVersion=Me,B.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMap.value=j.state.directionalShadowMap,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotShadowMap.value=j.state.spotShadowMap,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMap.value=j.state.pointShadowMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ze=Re.getUniforms(),vt=ha.seqWithValue(Ze.seq,Ie);return B.currentProgram=Re,B.uniformsList=vt,Re}function qi(b,N){const W=ue.get(b);W.outputEncoding=N.outputEncoding,W.instancing=N.instancing,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function El(b,N,W,B,j){N.isScene!==!0&&(N=ee),me.resetTextureUnits();const _e=N.fog,Me=B.isMeshStandardMaterial?N.environment:null,Te=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Rn,Fe=(B.isMeshStandardMaterial?Je:He).get(B.envMap||Me),Oe=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Re=!!B.normalMap&&!!W.attributes.tangent,Ie=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color,Yt=B.toneMapped?m.toneMapping:nn,gn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$e=gn!==void 0?gn.length:0,Be=ue.get(B),Ca=h.state.lights;if(q===!0&&(J===!0||b!==M)){const bt=b===M&&B.id===v;x.setState(B,b,bt)}let at=!1;B.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ca.state.version||Be.outputEncoding!==Te||j.isInstancedMesh&&Be.instancing===!1||!j.isInstancedMesh&&Be.instancing===!0||j.isSkinnedMesh&&Be.skinning===!1||!j.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Fe||B.fog===!0&&Be.fog!==_e||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==x.numPlanes||Be.numIntersection!==x.numIntersection)||Be.vertexAlphas!==Oe||Be.vertexTangents!==Re||Be.morphTargets!==Ie||Be.morphNormals!==Ze||Be.morphColors!==vt||Be.toneMapping!==Yt||oe.isWebGL2===!0&&Be.morphTargetsCount!==$e)&&(at=!0):(at=!0,Be.__version=B.version);let En=Be.currentProgram;at===!0&&(En=At(B,N,j));let Xi=!1,ms=!1,Ta=!1;const dt=En.getUniforms(),_n=Be.uniforms;if(se.useProgram(En.program)&&(Xi=!0,ms=!0,Ta=!0),B.id!==v&&(v=B.id,ms=!0),Xi||M!==b){if(dt.setValue(G,"projectionMatrix",b.projectionMatrix),oe.logarithmicDepthBuffer&&dt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),M!==b&&(M=b,ms=!0,Ta=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const bt=dt.map.cameraPosition;bt!==void 0&&bt.setValue(G,ne.setFromMatrixPosition(b.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||j.isSkinnedMesh)&&dt.setValue(G,"viewMatrix",b.matrixWorldInverse)}if(j.isSkinnedMesh){dt.setOptional(G,j,"bindMatrix"),dt.setOptional(G,j,"bindMatrixInverse");const bt=j.skeleton;bt&&(oe.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),dt.setValue(G,"boneTexture",bt.boneTexture,me),dt.setValue(G,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Aa=W.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0&&oe.isWebGL2===!0)&&ae.update(j,W,B,En),(ms||Be.receiveShadow!==j.receiveShadow)&&(Be.receiveShadow=j.receiveShadow,dt.setValue(G,"receiveShadow",j.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(_n.envMap.value=Fe,_n.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ms&&(dt.setValue(G,"toneMappingExposure",m.toneMappingExposure),Be.needsLights&&_l(_n,Ta),_e&&B.fog===!0&&Tt.refreshFogUniforms(_n,_e),Tt.refreshMaterialUniforms(_n,B,X,L,Z),ha.upload(G,Be.uniformsList,_n,me)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ha.upload(G,Be.uniformsList,_n,me),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(G,"center",j.center),dt.setValue(G,"modelViewMatrix",j.modelViewMatrix),dt.setValue(G,"normalMatrix",j.normalMatrix),dt.setValue(G,"modelMatrix",j.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const bt=B.uniformsGroups;for(let Fa=0,vl=bt.length;Fa<vl;Fa++)if(oe.isWebGL2){const ji=bt[Fa];pe.update(ji,En),pe.bind(ji,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function _l(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function xl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(b,N,W){ue.get(b.texture).__webglTexture=N,ue.get(b.depthTexture).__webglTexture=W;const B=ue.get(b);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=W===void 0,B.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,N){const W=ue.get(b);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,W=0){_=b,E=N,S=W;let B=!0,j=null,_e=!1,Me=!1;if(b){const Fe=ue.get(b);Fe.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),B=!1):Fe.__webglFramebuffer===void 0?me.setupRenderTarget(b):Fe.__hasExternalTextures&&me.rebindTextures(b,ue.get(b.texture).__webglTexture,ue.get(b.depthTexture).__webglTexture);const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Me=!0);const Re=ue.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(j=Re[N],_e=!0):oe.isWebGL2&&b.samples>0&&me.useMultisampledRTT(b)===!1?j=ue.get(b).__webglMultisampledFramebuffer:j=Re,A.copy(b.viewport),R.copy(b.scissor),g=b.scissorTest}else A.copy(P).multiplyScalar(X).floor(),R.copy(V).multiplyScalar(X).floor(),g=Y;if(se.bindFramebuffer(36160,j)&&oe.drawBuffers&&B&&se.drawBuffers(b,j),se.viewport(A),se.scissor(R),se.setScissorTest(g),_e){const Fe=ue.get(b.texture);G.framebufferTexture2D(36160,36064,34069+N,Fe.__webglTexture,W)}else if(Me){const Fe=ue.get(b.texture),Oe=N||0;G.framebufferTextureLayer(36160,36064,Fe.__webglTexture,W||0,Oe)}v=-1},this.readRenderTargetPixels=function(b,N,W,B,j,_e,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ue.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){se.bindFramebuffer(36160,Te);try{const Fe=b.texture,Oe=Fe.format,Re=Fe.type;if(Oe!==Lt&&C.convert(Oe)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Re===Is&&(de.has("EXT_color_buffer_half_float")||oe.isWebGL2&&de.has("EXT_color_buffer_float"));if(Re!==Pn&&C.convert(Re)!==G.getParameter(35738)&&!(Re===un&&(oe.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-B&&W>=0&&W<=b.height-j&&G.readPixels(N,W,B,j,C.convert(Oe),C.convert(Re),_e)}finally{const Fe=_!==null?ue.get(_).__webglFramebuffer:null;se.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(b,N,W=0){const B=Math.pow(2,-W),j=Math.floor(N.image.width*B),_e=Math.floor(N.image.height*B);me.setTexture2D(N,0),G.copyTexSubImage2D(3553,W,0,0,b.x,b.y,j,_e),se.unbindTexture()},this.copyTextureToTexture=function(b,N,W,B=0){const j=N.image.width,_e=N.image.height,Me=C.convert(W.format),Te=C.convert(W.type);me.setTexture2D(W,0),G.pixelStorei(37440,W.flipY),G.pixelStorei(37441,W.premultiplyAlpha),G.pixelStorei(3317,W.unpackAlignment),N.isDataTexture?G.texSubImage2D(3553,B,b.x,b.y,j,_e,Me,Te,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(3553,B,b.x,b.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):G.texSubImage2D(3553,B,b.x,b.y,Me,Te,N.image),B===0&&W.generateMipmaps&&G.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(b,N,W,B,j=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Te=b.max.z-b.min.z+1,Fe=C.convert(B.format),Oe=C.convert(B.type);let Re;if(B.isData3DTexture)me.setTexture3D(B,0),Re=32879;else if(B.isDataArrayTexture)me.setTexture2DArray(B,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,B.flipY),G.pixelStorei(37441,B.premultiplyAlpha),G.pixelStorei(3317,B.unpackAlignment);const Ie=G.getParameter(3314),Ze=G.getParameter(32878),vt=G.getParameter(3316),Yt=G.getParameter(3315),gn=G.getParameter(32877),$e=W.isCompressedTexture?W.mipmaps[0]:W.image;G.pixelStorei(3314,$e.width),G.pixelStorei(32878,$e.height),G.pixelStorei(3316,b.min.x),G.pixelStorei(3315,b.min.y),G.pixelStorei(32877,b.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(Re,j,N.x,N.y,N.z,_e,Me,Te,Fe,Oe,$e.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Re,j,N.x,N.y,N.z,_e,Me,Te,Fe,$e.data)):G.texSubImage3D(Re,j,N.x,N.y,N.z,_e,Me,Te,Fe,Oe,$e),G.pixelStorei(3314,Ie),G.pixelStorei(32878,Ze),G.pixelStorei(3316,vt),G.pixelStorei(3315,Yt),G.pixelStorei(32877,gn),j===0&&B.generateMipmaps&&G.generateMipmap(Re),se.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?me.setTextureCube(b,0):b.isData3DTexture?me.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?me.setTexture2DArray(b,0):me.setTexture2D(b,0),se.unbindTexture()},this.resetState=function(){E=0,S=0,_=null,se.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Lf extends Ni{}Lf.prototype.isWebGL1Renderer=!0;class tl extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const oo=new D,lo=new Ue,co=new Ue,Pf=new D,po=new xe;class Rf extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new xe,this.bindMatrixInverse=new xe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ue,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;lo.fromBufferAttribute(s.attributes.skinIndex,e),co.fromBufferAttribute(s.attributes.skinWeight,e),oo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const o=co.getComponent(a);if(o!==0){const i=lo.getComponent(a);po.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Pf.copy(oo).applyMatrix4(po),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class vi extends Xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class If extends lt{constructor(e=null,t=1,n=1,s,a,o,i,l,c=rt,u=rt,p,h){super(null,o,i,l,c,u,s,a,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uo=new xe,Bf=new xe;class Ui{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,o=e.length;a<o;a++){const i=e[a]?e[a].matrixWorld:Bf;uo.multiplyMatrices(i,t[a]),uo.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ui(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=No(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new If(t,e,e,Lt,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let o=t[a];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),o=new vi),this.bones.push(o),this.boneInverses.push(new xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const o=t[s];e.bones.push(o.uuid);const i=n[s];e.boneInverses.push(i.toArray())}return e}}class nl extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ho=new D,fo=new D,mo=new xe,oi=new Ho,la=new va;class Of extends Xe{constructor(e=new Vt,t=new nl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)ho.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ho.distanceTo(fo);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=a,e.ray.intersectsSphere(la)===!1)return;mo.copy(s).invert(),oi.copy(e.ray).applyMatrix4(mo);const i=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=i*i,c=new D,u=new D,p=new D,h=new D,f=this.isLineSegments?2:1,y=n.index,d=n.attributes.position;if(y!==null){const E=Math.max(0,o.start),S=Math.min(y.count,o.start+o.count);for(let _=E,v=S-1;_<v;_+=f){const M=y.getX(_),A=y.getX(_+1);if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,A),oi.distanceSqToSegment(c,u,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const g=e.ray.origin.distanceTo(h);g<e.near||g>e.far||t.push({distance:g,point:p.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const E=Math.max(0,o.start),S=Math.min(d.count,o.start+o.count);for(let _=E,v=S-1;_<v;_+=f){if(c.fromBufferAttribute(d,_),u.fromBufferAttribute(d,_+1),oi.distanceSqToSegment(c,u,h,p)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:p.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const i=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=a}}}}}class Nf{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let o;t?o=t:o=e*n[a-1];let i=0,l=a-1,c;for(;i<=l;)if(s=Math.floor(i+(l-i)/2),c=n[s]-o,c<0)i=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(a-1);const u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const o=this.getPoint(s),i=this.getPoint(a),l=t||(o.isVector2?new Se:new D);return l.copy(i).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,s=[],a=[],o=[],i=new D,l=new xe;for(let f=0;f<=e;f++){const y=f/e;s[f]=this.getTangentAt(y,new D)}a[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),p=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),h<=c&&n.set(0,0,1),i.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],i),o[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),o[f]=o[f-1].clone(),i.crossVectors(s[f-1],s[f]),i.length()>Number.EPSILON){i.normalize();const y=Math.acos(ot(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(i,y))}o[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(ot(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(i.crossVectors(a[0],a[e]))>0&&(f=-f);for(let y=1;y<=e;y++)a[y].applyMatrix4(l.makeRotationAxis(s[y],f*y)),o[y].crossVectors(s[y],a[y])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ds extends Un{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bi extends Un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ln(r,e,t){return sl(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function ca(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function sl(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Uf(r){function e(s,a){return r[s]-r[a]}const t=r.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function yo(r,e,t){const n=r.length,s=new r.constructor(n);for(let a=0,o=0;o!==n;++a){const i=t[a]*e;for(let l=0;l!==e;++l)s[o++]=r[i+l]}return s}function al(r,e,t,n){let s=1,a=r[0];for(;a!==void 0&&a[n]===void 0;)a=r[s++];if(a===void 0)return;let o=a[n];if(o!==void 0)if(Array.isArray(o))do o=a[n],o!==void 0&&(e.push(a.time),t.push.apply(t,o)),a=r[s++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[n],o!==void 0&&(e.push(a.time),o.toArray(t,t.length)),a=r[s++];while(a!==void 0);else do o=a[n],o!==void 0&&(e.push(a.time),t.push(o)),a=r[s++];while(a!==void 0)}class Ma{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let o;t:{s:if(!(e<s)){for(let i=n+2;;){if(s===void 0){if(e<a)break s;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===i)break;if(a=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=a)){const i=t[1];e<i&&(n=2,a=i);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=a,a=t[--n-1],e>=a)break e}o=n,n=0;break t}break n}for(;n<o;){const i=n+o>>>1;e<t[i]?o=i:n=i+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let o=0;o!==s;++o)t[o]=n[a+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zf extends Ma{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mr,endingEnd:Mr}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,o=e+1,i=s[a],l=s[o];if(i===void 0)switch(this.getSettings_().endingStart){case Sr:a=e,i=2*t-n;break;case wr:a=s.length-2,i=t+s[a]-s[a+1];break;default:a=e,i=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sr:o=e,l=2*n-t;break;case wr:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-i),this._weightNext=c/(l-n),this._offsetPrev=a*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const a=this.resultBuffer,o=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,f=this._weightNext,y=(n-t)/(s-t),m=y*y,d=m*y,E=-h*d+2*h*m-h*y,S=(1+h)*d+(-1.5-2*h)*m+(-.5+h)*y+1,_=(-1-f)*d+(1.5+f)*m+.5*y,v=f*d-f*m;for(let M=0;M!==i;++M)a[M]=E*o[u+M]+S*o[c+M]+_*o[l+M]+v*o[p+M];return a}}class kf extends Ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,o=this.sampleValues,i=this.valueSize,l=e*i,c=l-i,u=(n-t)/(s-t),p=1-u;for(let h=0;h!==i;++h)a[h]=o[c+h]*p+o[l+h]*u;return a}}class Vf extends Ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xt{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ca(t,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ca(e.times,Array),values:ca(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ma:t=this.InterpolantFactoryMethodDiscrete;break;case ya:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ma;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,o=s-1;for(;a!==s&&n[a]<e;)++a;for(;o!==-1&&n[o]>t;)--o;if(++o,a!==0||o!==s){a>=o&&(o=Math.max(o,1),a=o-1);const i=this.getValueSize();this.times=ln(n,a,o),this.values=ln(this.values,a*i,o*i)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let i=0;i!==a;i++){const l=n[i];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,l,o),e=!1;break}o=l}if(s!==void 0&&sl(s))for(let i=0,l=s.length;i!==l;++i){const c=s[i];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,c),e=!1;break}}return e}optimize(){const e=ln(this.times),t=ln(this.values),n=this.getValueSize(),s=this.getInterpolation()===Ba,a=e.length-1;let o=1;for(let i=1;i<a;++i){let l=!1;const c=e[i],u=e[i+1];if(c!==u&&(i!==1||c!==e[0]))if(s)l=!0;else{const p=i*n,h=p-n,f=p+n;for(let y=0;y!==n;++y){const m=t[p+y];if(m!==t[h+y]||m!==t[f+y]){l=!0;break}}}if(l){if(i!==o){e[o]=e[i];const p=i*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[p+f]}++o}}if(a>0){e[o]=e[a];for(let i=a*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[i+c];++o}return o!==e.length?(this.times=ln(e,0,o),this.values=ln(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ln(this.times,0),t=ln(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Xt.prototype.TimeBufferType=Float32Array;Xt.prototype.ValueBufferType=Float32Array;Xt.prototype.DefaultInterpolation=ya;class hs extends Xt{}hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=ma;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class il extends Xt{}il.prototype.ValueTypeName="color";class Us extends Xt{}Us.prototype.ValueTypeName="number";class Gf extends Ma{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,o=this.sampleValues,i=this.valueSize,l=(n-t)/(s-t);let c=e*i;for(let u=c+i;c!==u;c+=4)It.slerpFlat(a,0,o,c-i,o,c,l);return a}}class ds extends Xt{InterpolantFactoryMethodLinear(e){return new Gf(this.times,this.values,this.getValueSize(),e)}}ds.prototype.ValueTypeName="quaternion";ds.prototype.DefaultInterpolation=ya;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Xt{}fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ma;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Xt{}zs.prototype.ValueTypeName="vector";class Hf{constructor(e,t=-1,n,s=fc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,i=n.length;o!==i;++o)t.push(qf(n[o]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,o=n.length;a!==o;++a)t.push(Xt.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,o=[];for(let i=0;i<a;i++){let l=[],c=[];l.push((i+a-1)%a,i,(i+1)%a),c.push(0,1,0);const u=Uf(l);l=yo(l,1,u),c=yo(c,1,u),!s&&l[0]===0&&(l.push(a),c.push(c[0])),o.push(new Us(".morphTargetInfluences["+t[i].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let i=0,l=e.length;i<l;i++){const c=e[i],u=c.name.match(a);if(u&&u.length>1){const p=u[1];let h=s[p];h||(s[p]=h=[]),h.push(c)}}const o=[];for(const i in s)o.push(this.CreateFromMorphTargetSequence(i,s[i],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(p,h,f,y,m){if(f.length!==0){const d=[],E=[];al(f,d,E,y),d.length!==0&&m.push(new p(h,d,E))}},s=[],a=e.name||"default",o=e.fps||30,i=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let p=0;p<c.length;p++){const h=c[p].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let y;for(y=0;y<h.length;y++)if(h[y].morphTargets)for(let m=0;m<h[y].morphTargets.length;m++)f[h[y].morphTargets[m]]=-1;for(const m in f){const d=[],E=[];for(let S=0;S!==h[y].morphTargets.length;++S){const _=h[y];d.push(_.time),E.push(_.morphTarget===m?1:0)}s.push(new Us(".morphTargetInfluence["+m+"]",d,E))}l=f.length*o}else{const f=".bones["+t[p].name+"]";n(zs,f+".position",h,"pos",s),n(ds,f+".quaternion",h,"rot",s),n(zs,f+".scale",h,"scl",s)}}return s.length===0?null:new this(a,l,s,i)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wf(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return il;case"quaternion":return ds;case"bool":case"boolean":return hs;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function qf(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wf(r.type);if(r.times===void 0){const t=[],n=[];al(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ea={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Xf{constructor(e,t,n){const s=this;let a=!1,o=0,i=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){i++,a===!1&&s.onStart!==void 0&&s.onStart(u,o,i),a=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,i),o===i&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,p){return c.push(u,p),this},this.removeHandler=function(u){const p=c.indexOf(u);return p!==-1&&c.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=c.length;p<h;p+=2){const f=c[p],y=c[p+1];if(f.global&&(f.lastIndex=0),f.test(u))return y}return null}}}const jf=new Xf;class Sa{constructor(e){this.manager=e!==void 0?e:jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const en={};class Yf extends Error{constructor(e,t){super(e),this.response=t}}class Zf extends Sa{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Ea.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(en[e]!==void 0){en[e].push({onLoad:t,onProgress:n,onError:s});return}en[e]=[],en[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=en[e],p=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,y=f!==0;let m=0;const d=new ReadableStream({start(E){S();function S(){p.read().then(({done:_,value:v})=>{if(_)E.close();else{m+=v.byteLength;const M=new ProgressEvent("progress",{lengthComputable:y,loaded:m,total:f});for(let A=0,R=u.length;A<R;A++){const g=u[A];g.onProgress&&g.onProgress(M)}E.enqueue(v),S()}})}}});return new Response(d)}else throw new Yf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,i));case"json":return c.json();default:if(i===void 0)return c.text();{const p=/charset="?([^;"\s]*)"?/i.exec(i),h=p&&p[1]?p[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(y=>f.decode(y))}}}).then(c=>{Ea.add(e,c);const u=en[e];delete en[e];for(let p=0,h=u.length;p<h;p++){const f=u[p];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=en[e];if(u===void 0)throw this.manager.itemError(e),c;delete en[e];for(let p=0,h=u.length;p<h;p++){const f=u[p];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $f extends Sa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=Ea.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const i=Ns("img");function l(){u(),Ea.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(p){u(),s&&s(p),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){i.removeEventListener("load",l,!1),i.removeEventListener("error",c,!1)}return i.addEventListener("load",l,!1),i.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),a.manager.itemStart(e),i.src=e,i}}class zi extends Sa{constructor(e){super(e)}load(e,t,n,s){const a=new lt,o=new $f(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(i){a.image=i,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class wa extends Xe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const li=new xe,go=new D,Eo=new D;class ki{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ri,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;go.setFromMatrixPosition(e.matrixWorld),t.position.copy(go),Eo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eo),t.updateMatrixWorld(),li.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(li),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(li)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kf extends ki{constructor(){super(new ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Os*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jf extends wa{constructor(e,t,n=0,s=Math.PI/3,a=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.distance=n,this.angle=s,this.penumbra=a,this.decay=o,this.map=null,this.shadow=new Kf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const _o=new xe,Ms=new D,ci=new D;class Qf extends ki{constructor(){super(new ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new Ue(2,1,1,1),new Ue(0,1,1,1),new Ue(3,1,1,1),new Ue(1,1,1,1),new Ue(3,0,1,1),new Ue(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ms),ci.copy(n.position),ci.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ci),n.updateMatrixWorld(),s.makeTranslation(-Ms.x,-Ms.y,-Ms.z),_o.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o)}}class xo extends wa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class em extends ki{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ks extends wa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.shadow=new em}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vi extends wa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Hi="\\[\\]\\.:\\/",tm=new RegExp("["+Hi+"]","g"),Wi="[^"+Hi+"]",nm="[^"+Hi.replace("\\.","")+"]",sm=/((?:WC+[\/:])*)/.source.replace("WC",Wi),am=/(WCOD+)?/.source.replace("WCOD",nm),im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wi),rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wi),om=new RegExp("^"+sm+am+im+rm+"$"),lm=["material","materials","bones","map"];class cm{constructor(e,t,n){const s=n||Ne.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ne{constructor(e,t,n){this.path=t,this.parsedPath=n||Ne.parseTrackName(t),this.node=Ne.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ne.Composite(e,t,n):new Ne(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(e){const t=om.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);lm.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let o=0;o<a.length;o++){const i=a[o];if(i.name===t||i.uuid===t)return i;const l=n(i.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ne.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let i=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ne.Composite=cm;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ai}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ai);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var bo=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(bo(""))}catch{bo=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Pt=Uint8Array,hn=Uint16Array,Mi=Uint32Array,rl=new Pt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ol=new Pt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pm=new Pt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ll=function(r,e){for(var t=new hn(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var s=new Mi(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)s[a]=a-t[n]<<5|n;return[t,s]},cl=ll(rl,2),pl=cl[0],um=cl[1];pl[28]=258,um[258]=28;var hm=ll(ol,0),dm=hm[0],Si=new hn(32768);for(var We=0;We<32768;++We){var cn=(We&43690)>>>1|(We&21845)<<1;cn=(cn&52428)>>>2|(cn&13107)<<2,cn=(cn&61680)>>>4|(cn&3855)<<4,Si[We]=((cn&65280)>>>8|(cn&255)<<8)>>>1}var Ls=function(r,e,t){for(var n=r.length,s=0,a=new hn(e);s<n;++s)++a[r[s]-1];var o=new hn(e);for(s=0;s<e;++s)o[s]=o[s-1]+a[s-1]<<1;var i;if(t){i=new hn(1<<e);var l=15-e;for(s=0;s<n;++s)if(r[s])for(var c=s<<4|r[s],u=e-r[s],p=o[r[s]-1]++<<u,h=p|(1<<u)-1;p<=h;++p)i[Si[p]>>>l]=c}else for(i=new hn(n),s=0;s<n;++s)r[s]&&(i[s]=Si[o[r[s]-1]++]>>>15-r[s]);return i},Gs=new Pt(288);for(var We=0;We<144;++We)Gs[We]=8;for(var We=144;We<256;++We)Gs[We]=9;for(var We=256;We<280;++We)Gs[We]=7;for(var We=280;We<288;++We)Gs[We]=8;var ul=new Pt(32);for(var We=0;We<32;++We)ul[We]=5;var fm=Ls(Gs,9,1),mm=Ls(ul,5,1),pi=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},kt=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},ui=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},ym=function(r){return(r/8|0)+(r&7&&1)},gm=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var n=new(r instanceof hn?hn:r instanceof Mi?Mi:Pt)(t-e);return n.set(r.subarray(e,t)),n},Em=function(r,e,t){var n=r.length;if(!n||t&&!t.l&&n<5)return e||new Pt(0);var s=!e||t,a=!t||t.i;t||(t={}),e||(e=new Pt(n*3));var o=function(G){var we=e.length;if(G>we){var de=new Pt(Math.max(we*2,G));de.set(e),e=de}},i=t.f||0,l=t.p||0,c=t.b||0,u=t.l,p=t.d,h=t.m,f=t.n,y=n*8;do{if(!u){t.f=i=kt(r,l,1);var m=kt(r,l+1,3);if(l+=3,m)if(m==1)u=fm,p=mm,h=9,f=5;else if(m==2){var _=kt(r,l,31)+257,v=kt(r,l+10,15)+4,M=_+kt(r,l+5,31)+1;l+=14;for(var A=new Pt(M),R=new Pt(19),g=0;g<v;++g)R[pm[g]]=kt(r,l+g*3,7);l+=v*3;for(var T=pi(R),L=(1<<T)-1,X=Ls(R,T,1),g=0;g<M;){var $=X[kt(r,l,L)];l+=$&15;var d=$>>>4;if(d<16)A[g++]=d;else{var O=0,P=0;for(d==16?(P=3+kt(r,l,3),l+=2,O=A[g-1]):d==17?(P=3+kt(r,l,7),l+=3):d==18&&(P=11+kt(r,l,127),l+=7);P--;)A[g++]=O}}var V=A.subarray(0,_),Y=A.subarray(_);h=pi(V),f=pi(Y),u=Ls(V,h,1),p=Ls(Y,f,1)}else throw"invalid block type";else{var d=ym(l)+4,E=r[d-4]|r[d-3]<<8,S=d+E;if(S>n){if(a)throw"unexpected EOF";break}s&&o(c+E),e.set(r.subarray(d,S),c),t.b=c+=E,t.p=l=S*8;continue}if(l>y){if(a)throw"unexpected EOF";break}}s&&o(c+131072);for(var K=(1<<h)-1,q=(1<<f)-1,J=l;;J=l){var O=u[ui(r,l)&K],Z=O>>>4;if(l+=O&15,l>y){if(a)throw"unexpected EOF";break}if(!O)throw"invalid length/literal";if(Z<256)e[c++]=Z;else if(Z==256){J=l,u=null;break}else{var z=Z-254;if(Z>264){var g=Z-257,U=rl[g];z=kt(r,l,(1<<U)-1)+pl[g],l+=U}var ne=p[ui(r,l)&q],ee=ne>>>4;if(!ne)throw"invalid distance";l+=ne&15;var Y=dm[ee];if(ee>3){var U=ol[ee];Y+=ui(r,l)&(1<<U)-1,l+=U}if(l>y){if(a)throw"unexpected EOF";break}s&&o(c+131072);for(var ie=c+z;c<ie;c+=4)e[c]=e[c-Y],e[c+1]=e[c+1-Y],e[c+2]=e[c+2-Y],e[c+3]=e[c+3-Y];c=ie}}t.l=u,t.p=J,t.b=c,u&&(i=1,t.m=h,t.d=p,t.n=f)}while(!i);return c==e.length?e:gm(e,0,c)},_m=new Pt(0),xm=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function vm(r,e){return Em((xm(r),r.subarray(2,-4)),e)}var bm=typeof TextDecoder<"u"&&new TextDecoder,Mm=0;try{bm.decode(_m,{stream:!0}),Mm=1}catch{}function hl(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let s=r,a=n,o=Math.floor((s+a)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?a=o:s=o,o=Math.floor((s+a)/2);return o}function Sm(r,e,t,n){const s=[],a=[],o=[];s[0]=1;for(let i=1;i<=t;++i){a[i]=e-n[r+1-i],o[i]=n[r+i]-e;let l=0;for(let c=0;c<i;++c){const u=o[c+1],p=a[i-c],h=s[c]/(u+p);s[c]=l+u*h,l=p*h}s[i]=l}return s}function wm(r,e,t,n){const s=hl(r,n,e),a=Sm(s,n,r,e),o=new Ue(0,0,0,0);for(let i=0;i<=r;++i){const l=t[s-r+i],c=a[i],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function Cm(r,e,t,n,s){const a=[];for(let p=0;p<=t;++p)a[p]=0;const o=[];for(let p=0;p<=n;++p)o[p]=a.slice(0);const i=[];for(let p=0;p<=t;++p)i[p]=a.slice(0);i[0][0]=1;const l=a.slice(0),c=a.slice(0);for(let p=1;p<=t;++p){l[p]=e-s[r+1-p],c[p]=s[r+p]-e;let h=0;for(let f=0;f<p;++f){const y=c[f+1],m=l[p-f];i[p][f]=y+m;const d=i[f][p-1]/i[p][f];i[f][p]=h+y*d,h=m*d}i[p][p]=h}for(let p=0;p<=t;++p)o[0][p]=i[p][t];for(let p=0;p<=t;++p){let h=0,f=1;const y=[];for(let m=0;m<=t;++m)y[m]=a.slice(0);y[0][0]=1;for(let m=1;m<=n;++m){let d=0;const E=p-m,S=t-m;p>=m&&(y[f][0]=y[h][0]/i[S+1][E],d=y[f][0]*i[E][S]);const _=E>=-1?1:-E,v=p-1<=S?m-1:t-p;for(let A=_;A<=v;++A)y[f][A]=(y[h][A]-y[h][A-1])/i[S+1][E+A],d+=y[f][A]*i[E+A][S];p<=S&&(y[f][m]=-y[h][m-1]/i[S+1][p],d+=y[f][m]*i[p][S]),o[m][p]=d;const M=h;h=f,f=M}}let u=t;for(let p=1;p<=n;++p){for(let h=0;h<=t;++h)o[p][h]*=u;u*=t-p}return o}function Tm(r,e,t,n,s){const a=s<r?s:r,o=[],i=hl(r,n,e),l=Cm(i,n,r,a,e),c=[];for(let u=0;u<t.length;++u){const p=t[u].clone(),h=p.w;p.x*=h,p.y*=h,p.z*=h,c[u]=p}for(let u=0;u<=a;++u){const p=c[i-r].clone().multiplyScalar(l[u][0]);for(let h=1;h<=r;++h)p.add(c[i-r+h].clone().multiplyScalar(l[u][h]));o[u]=p}for(let u=a+1;u<=s+1;++u)o[u]=new Ue(0,0,0);return o}function Am(r,e){let t=1;for(let s=2;s<=r;++s)t*=s;let n=1;for(let s=2;s<=e;++s)n*=s;for(let s=2;s<=r-e;++s)n*=s;return t/n}function Fm(r){const e=r.length,t=[],n=[];for(let a=0;a<e;++a){const o=r[a];t[a]=new D(o.x,o.y,o.z),n[a]=o.w}const s=[];for(let a=0;a<e;++a){const o=t[a].clone();for(let i=1;i<=a;++i)o.sub(s[a-i].clone().multiplyScalar(Am(a,i)*n[i]));s[a]=o.divideScalar(n[0])}return s}function Dm(r,e,t,n,s){const a=Tm(r,e,t,n,s);return Fm(a)}class Lm extends Nf{constructor(e,t,n,s,a){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=s||0,this.endKnot=a||this.knots.length-1;for(let o=0;o<n.length;++o){const i=n[o];this.controlPoints[o]=new Ue(i.x,i.y,i.z,i.w)}}getPoint(e,t=new D){const n=t,s=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),a=wm(this.degree,this.knots,this.controlPoints,s);return a.w!==1&&a.divideScalar(a.w),n.set(a.x,a.y,a.z)}getTangent(e,t=new D){const n=t,s=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),a=Dm(this.degree,this.knots,this.controlPoints,s,1);return n.copy(a[1]).normalize(),n}}let De,Ye,Et;class dl extends Sa{constructor(e){super(e)}load(e,t,n,s){const a=this,o=a.path===""?Gi.extractUrlBase(e):a.path,i=new Zf(this.manager);i.setPath(a.path),i.setResponseType("arraybuffer"),i.setRequestHeader(a.requestHeader),i.setWithCredentials(a.withCredentials),i.load(e,function(l){try{t(a.parse(l,o))}catch(c){s?s(c):console.error(c),a.manager.itemError(e)}},n,s)}parse(e,t){if(Nm(e))De=new Om().parse(e);else{const s=gl(e);if(!Um(s))throw new Error("THREE.FBXLoader: Unknown format.");if(So(s)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+So(s));De=new Bm().parse(s)}const n=new zi(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Pm(n,this.manager).parse(De)}}class Pm{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ye=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),s=this.parseDeformers(),a=new Rm().parse(s);return this.parseScene(s,a,n),Et}parseConnections(){const e=new Map;return"Connections"in De&&De.Connections.connections.forEach(function(n){const s=n[0],a=n[1],o=n[2];e.has(s)||e.set(s,{parents:[],children:[]});const i={ID:a,relationship:o};e.get(s).parents.push(i),e.has(a)||e.set(a,{parents:[],children:[]});const l={ID:s,relationship:o};e.get(a).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in De.Objects){const n=De.Objects.Video;for(const s in n){const a=n[s],o=parseInt(s);if(e[o]=a.RelativeFilename||a.Filename,"Content"in a){const i=a.Content instanceof ArrayBuffer&&a.Content.byteLength>0,l=typeof a.Content=="string"&&a.Content!=="";if(i||l){const c=this.parseImage(n[s]);t[a.RelativeFilename||a.Filename]=c}}}}for(const n in e){const s=e[n];t[s]!==void 0?e[n]=t[s]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,s=n.slice(n.lastIndexOf(".")+1).toLowerCase();let a;switch(s){case"bmp":a="image/bmp";break;case"jpg":case"jpeg":a="image/jpeg";break;case"png":a="image/png";break;case"tif":a="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),a="image/tga";break;default:console.warn('FBXLoader: Image type "'+s+'" is not supported.');return}if(typeof t=="string")return"data:"+a+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:a}))}}parseTextures(e){const t=new Map;if("Texture"in De.Objects){const n=De.Objects.Texture;for(const s in n){const a=this.parseTexture(n[s],e);t.set(parseInt(s),a)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const s=e.WrapModeU,a=e.WrapModeV,o=s!==void 0?s.value:0,i=a!==void 0?a.value:0;if(n.wrapS=o===0?Ps:wt,n.wrapT=i===0?Ps:wt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const s=this.textureLoader.path,a=Ye.get(e.id).children;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(n=t[a[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const i=e.FileName.slice(-3).toLowerCase();if(i==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new lt):(l.setPath(this.textureLoader.path),o=l.load(n))}else i==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new lt):o=this.textureLoader.load(n);return this.textureLoader.setPath(s),o}parseMaterials(e){const t=new Map;if("Material"in De.Objects){const n=De.Objects.Material;for(const s in n){const a=this.parseMaterial(n[s],e);a!==null&&t.set(parseInt(s),a)}}return t}parseMaterial(e,t){const n=e.id,s=e.attrName;let a=e.ShadingModel;if(typeof a=="object"&&(a=a.value),!Ye.has(n))return null;const o=this.parseParameters(e,t,n);let i;switch(a.toLowerCase()){case"phong":i=new Ds;break;case"lambert":i=new bi;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',a),i=new Ds;break}return i.setValues(o),i.name=s,i}parseParameters(e,t,n){const s={};e.BumpFactor&&(s.bumpScale=e.BumpFactor.value),e.Diffuse?s.color=new Ae().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(s.color=new Ae().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(s.displacementScale=e.DisplacementFactor.value),e.Emissive?s.emissive=new Ae().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(s.emissive=new Ae().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(s.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(s.opacity=parseFloat(e.Opacity.value)),s.opacity<1&&(s.transparent=!0),e.ReflectionFactor&&(s.reflectivity=e.ReflectionFactor.value),e.Shininess&&(s.shininess=e.Shininess.value),e.Specular?s.specular=new Ae().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(s.specular=new Ae().fromArray(e.SpecularColor.value));const a=this;return Ye.get(n).children.forEach(function(o){const i=o.relationship;switch(i){case"Bump":s.bumpMap=a.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":s.aoMap=a.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":s.map=a.getTexture(t,o.ID),s.map!==void 0&&(s.map.encoding=Ve);break;case"DisplacementColor":s.displacementMap=a.getTexture(t,o.ID);break;case"EmissiveColor":s.emissiveMap=a.getTexture(t,o.ID),s.emissiveMap!==void 0&&(s.emissiveMap.encoding=Ve);break;case"NormalMap":case"Maya|TEX_normal_map":s.normalMap=a.getTexture(t,o.ID);break;case"ReflectionColor":s.envMap=a.getTexture(t,o.ID),s.envMap!==void 0&&(s.envMap.mapping=fa,s.envMap.encoding=Ve);break;case"SpecularColor":s.specularMap=a.getTexture(t,o.ID),s.specularMap!==void 0&&(s.specularMap.encoding=Ve);break;case"TransparentColor":case"TransparencyFactor":s.alphaMap=a.getTexture(t,o.ID),s.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",i);break}}),s}getTexture(e,t){return"LayeredTexture"in De.Objects&&t in De.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ye.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in De.Objects){const n=De.Objects.Deformer;for(const s in n){const a=n[s],o=Ye.get(parseInt(s));if(a.attrType==="Skin"){const i=this.parseSkeleton(o,n);i.ID=s,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),i.geometryID=o.parents[0].ID,e[s]=i}else if(a.attrType==="BlendShape"){const i={id:s};i.rawTargets=this.parseMorphTargets(o,n),i.id=s,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[s]=i}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(s){const a=t[s.ID];if(a.attrType!=="Cluster")return;const o={ID:s.ID,indices:[],weights:[],transformLink:new xe().fromArray(a.TransformLink.a)};"Indexes"in a&&(o.indices=a.Indexes.a,o.weights=a.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let s=0;s<e.children.length;s++){const a=e.children[s],o=t[a.ID],i={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;i.geoID=Ye.get(parseInt(a.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(i)}return n}parseScene(e,t,n){Et=new as;const s=this.parseModels(e.skeletons,t,n),a=De.Objects.Model,o=this;s.forEach(function(l){const c=a[l.ID];o.setLookAtProperties(l,c),Ye.get(l.ID).parents.forEach(function(p){const h=s.get(p.ID);h!==void 0&&h.add(l)}),l.parent===null&&Et.add(l)}),this.bindSkeleton(e.skeletons,t,s),this.createAmbientLight(),Et.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=ml(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const i=new Im().parse();Et.children.length===1&&Et.children[0].isGroup&&(Et.children[0].animations=i,Et=Et.children[0]),Et.animations=i}parseModels(e,t,n){const s=new Map,a=De.Objects.Model;for(const o in a){const i=parseInt(o),l=a[o],c=Ye.get(i);let u=this.buildSkeleton(c,e,i,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new vi;break;case"Null":default:u=new as;break}u.name=l.attrName?Ne.sanitizeNodeName(l.attrName):"",u.ID=i}this.getTransformData(u,l),s.set(i,u)}return s}buildSkeleton(e,t,n,s){let a=null;return e.parents.forEach(function(o){for(const i in t){const l=t[i];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const p=a;a=new vi,a.matrixWorld.copy(c.transformLink),a.name=s?Ne.sanitizeNodeName(s):"",a.ID=n,l.bones[u]=a,p!==null&&a.add(p)}})}}),a}createCamera(e){let t,n;if(e.children.forEach(function(s){const a=De.Objects.NodeAttribute[s.ID];a!==void 0&&(n=a)}),n===void 0)t=new Xe;else{let s=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(s=1);let a=1;n.NearPlane!==void 0&&(a=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let i=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(i=n.AspectWidth.value,l=n.AspectHeight.value);const c=i/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const p=n.FocalLength?n.FocalLength.value:null;switch(s){case 0:t=new ut(u,c,a,o),p!==null&&t.setFocalLength(p);break;case 1:t=new Bi(-i/2,i/2,l/2,-l/2,a,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+s+"."),t=new Xe;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(s){const a=De.Objects.NodeAttribute[s.ID];a!==void 0&&(n=a)}),n===void 0)t=new Xe;else{let s;n.LightType===void 0?s=0:s=n.LightType.value;let a=16777215;n.Color!==void 0&&(a=new Ae().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let i=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?i=0:i=n.FarAttenuationEnd.value);const l=1;switch(s){case 0:t=new xo(a,o,i,l);break;case 1:t=new ks(a,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Wt.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Wt.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new Jf(a,o,i,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new xo(a,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let s,a=null,o=null;const i=[];return e.children.forEach(function(l){t.has(l.ID)&&(a=t.get(l.ID)),n.has(l.ID)&&i.push(n.get(l.ID))}),i.length>1?o=i:i.length>0?o=i[0]:(o=new Ds({color:13421772}),i.push(o)),"color"in a.attributes&&i.forEach(function(l){l.vertexColors=!0}),a.FBX_Deformer?(s=new Rf(a,o),s.normalizeSkinWeights()):s=new Bt(a,o),s}createCurve(e,t){const n=e.children.reduce(function(a,o){return t.has(o.ID)&&(a=t.get(o.ID)),a},null),s=new nl({color:3342591,linewidth:1});return new Of(n,s)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=yl(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Ye.get(e.ID).children.forEach(function(s){if(s.relationship==="LookAtProperty"){const a=De.Objects.Model[s.ID];if("Lcl_Translation"in a){const o=a.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Et.add(e.target)):e.lookAt(new D().fromArray(o))}}})}bindSkeleton(e,t,n){const s=this.parsePoseNodes();for(const a in e){const o=e[a];Ye.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Ye.get(c).parents.forEach(function(p){n.has(p.ID)&&n.get(p.ID).bind(new Ui(o.bones),s[p.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in De.Objects){const t=De.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const s=t[n].PoseNode;Array.isArray(s)?s.forEach(function(a){e[a.Node]=new xe().fromArray(a.Matrix.a)}):e[s.Node]=new xe().fromArray(s.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in De&&"AmbientColor"in De.GlobalSettings){const e=De.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],s=e[2];if(t!==0||n!==0||s!==0){const a=new Ae(t,n,s);Et.add(new Vi(a,1))}}}}class Rm{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in De.Objects){const n=De.Objects.Geometry;for(const s in n){const a=Ye.get(parseInt(s)),o=this.parseGeometry(a,n[s],e);t.set(parseInt(s),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const s=n.skeletons,a=[],o=e.parents.map(function(p){return De.Objects.Model[p.ID]});if(o.length===0)return;const i=e.children.reduce(function(p,h){return s[h.ID]!==void 0&&(p=s[h.ID]),p},null);e.children.forEach(function(p){n.morphTargets[p.ID]!==void 0&&a.push(n.morphTargets[p.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=yl(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=ml(c);return this.genGeometry(t,i,a,u)}genGeometry(e,t,n,s){const a=new Vt;e.attrName&&(a.name=e.attrName);const o=this.parseGeoNode(e,t),i=this.genBuffers(o),l=new _t(i.vertex,3);if(l.applyMatrix4(s),a.setAttribute("position",l),i.colors.length>0&&a.setAttribute("color",new _t(i.colors,3)),t&&(a.setAttribute("skinIndex",new Pi(i.weightsIndices,4)),a.setAttribute("skinWeight",new _t(i.vertexWeights,4)),a.FBX_Deformer=t),i.normal.length>0){const c=new xt().getNormalMatrix(s),u=new _t(i.normal,3);u.applyNormalMatrix(c),a.setAttribute("normal",u)}if(i.uvs.forEach(function(c,u){let p="uv"+(u+1).toString();u===0&&(p="uv"),a.setAttribute(p,new _t(i.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=i.materialIndex[0],u=0;if(i.materialIndex.forEach(function(p,h){p!==c&&(a.addGroup(u,h-u,c),c=p,u=h)}),a.groups.length>0){const p=a.groups[a.groups.length-1],h=p.start+p.count;h!==i.materialIndex.length&&a.addGroup(h,i.materialIndex.length-h,c)}a.groups.length===0&&a.addGroup(0,i.materialIndex.length,i.materialIndex[0])}return this.addMorphTargets(a,e,n,s),a}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let s=0;for(;e.LayerElementUV[s];)e.LayerElementUV[s].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[s])),s++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(s,a){s.indices.forEach(function(o,i){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:a,weight:s.weights[i]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,s=0,a=!1,o=[],i=[],l=[],c=[],u=[],p=[];const h=this;return e.vertexIndices.forEach(function(f,y){let m,d=!1;f<0&&(f=f^-1,d=!0);let E=[],S=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const _=pa(y,n,f,e.color);l.push(_[0],_[1],_[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(_){S.push(_.weight),E.push(_.id)}),S.length>4){a||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),a=!0);const _=[0,0,0,0],v=[0,0,0,0];S.forEach(function(M,A){let R=M,g=E[A];v.forEach(function(T,L,X){if(R>T){X[L]=R,R=T;const $=_[L];_[L]=g,g=$}})}),E=_,S=v}for(;S.length<4;)S.push(0),E.push(0);for(let _=0;_<4;++_)u.push(S[_]),p.push(E[_])}if(e.normal){const _=pa(y,n,f,e.normal);i.push(_[0],_[1],_[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=pa(y,n,f,e.material)[0],m<0&&(h.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(_,v){const M=pa(y,n,f,_);c[v]===void 0&&(c[v]=[]),c[v].push(M[0]),c[v].push(M[1])}),s++,d&&(s>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),h.genFace(t,e,o,m,i,l,c,u,p,s),n++,s=0,o=[],i=[],l=[],c=[],u=[],p=[])}),t}genFace(e,t,n,s,a,o,i,l,c,u){for(let p=2;p<u;p++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(p-1)*3]]),e.vertex.push(t.vertexPositions[n[(p-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(p-1)*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(p-1)*4]),e.vertexWeights.push(l[(p-1)*4+1]),e.vertexWeights.push(l[(p-1)*4+2]),e.vertexWeights.push(l[(p-1)*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(p-1)*4]),e.weightsIndices.push(c[(p-1)*4+1]),e.weightsIndices.push(c[(p-1)*4+2]),e.weightsIndices.push(c[(p-1)*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(p-1)*3]),e.colors.push(o[(p-1)*3+1]),e.colors.push(o[(p-1)*3+2]),e.colors.push(o[p*3]),e.colors.push(o[p*3+1]),e.colors.push(o[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(s),e.materialIndex.push(s),e.materialIndex.push(s)),t.normal&&(e.normal.push(a[0]),e.normal.push(a[1]),e.normal.push(a[2]),e.normal.push(a[(p-1)*3]),e.normal.push(a[(p-1)*3+1]),e.normal.push(a[(p-1)*3+2]),e.normal.push(a[p*3]),e.normal.push(a[p*3+1]),e.normal.push(a[p*3+2])),t.uv&&t.uv.forEach(function(h,f){e.uvs[f]===void 0&&(e.uvs[f]=[]),e.uvs[f].push(i[f][0]),e.uvs[f].push(i[f][1]),e.uvs[f].push(i[f][(p-1)*2]),e.uvs[f].push(i[f][(p-1)*2+1]),e.uvs[f].push(i[f][p*2]),e.uvs[f].push(i[f][p*2+1])})}addMorphTargets(e,t,n,s){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const a=this;n.forEach(function(o){o.rawTargets.forEach(function(i){const l=De.Objects.Geometry[i.geoID];l!==void 0&&a.genMorphGeometry(e,t,l,s,i.name)})})}genMorphGeometry(e,t,n,s,a){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],i=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let y=0;y<l.length;y++){const m=l[y]*3;u[m]=i[y*3],u[m+1]=i[y*3+1],u[m+2]=i[y*3+2]}const p={vertexIndices:o,vertexPositions:u},h=this.genBuffers(p),f=new _t(h.vertex,3);f.name=a||n.attrName,f.applyMatrix4(s),e.morphAttributes.position.push(f)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Normals.a;let a=[];return n==="IndexToDirect"&&("NormalIndex"in e?a=e.NormalIndex.a:"NormalsIndex"in e&&(a=e.NormalsIndex.a)),{dataSize:3,buffer:s,indices:a,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.UV.a;let a=[];return n==="IndexToDirect"&&(a=e.UVIndex.a),{dataSize:2,buffer:s,indices:a,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,s=e.Colors.a;let a=[];return n==="IndexToDirect"&&(a=e.ColorIndex.a),{dataSize:4,buffer:s,indices:a,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const s=e.Materials.a,a=[];for(let o=0;o<s.length;++o)a.push(o);return{dataSize:1,buffer:s,indices:a,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Vt;const n=t-1,s=e.KnotVector.a,a=[],o=e.Points.a;for(let p=0,h=o.length;p<h;p+=4)a.push(new Ue().fromArray(o,p));let i,l;if(e.Form==="Closed")a.push(a[0]);else if(e.Form==="Periodic"){i=n,l=s.length-1-i;for(let p=0;p<n;++p)a.push(a[p])}const u=new Lm(n,s,a,i,l).getPoints(a.length*12);return new Vt().setFromPoints(u)}}class Im{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const s=t[n],a=this.addClip(s);e.push(a)}return e}parseClips(){if(De.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=De.Objects.AnimationCurveNode,t=new Map;for(const n in e){const s=e[n];if(s.attrName.match(/S|R|T|DeformPercent/)!==null){const a={id:s.id,attr:s.attrName,curves:{}};t.set(a.id,a)}}return t}parseAnimationCurves(e){const t=De.Objects.AnimationCurve;for(const n in t){const s={id:t[n].id,times:t[n].KeyTime.a.map(zm),values:t[n].KeyValueFloat.a},a=Ye.get(s.id);if(a!==void 0){const o=a.parents[0].ID,i=a.parents[0].relationship;i.match(/X/)?e.get(o).curves.x=s:i.match(/Y/)?e.get(o).curves.y=s:i.match(/Z/)?e.get(o).curves.z=s:i.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=s)}}}parseAnimationLayers(e){const t=De.Objects.AnimationLayer,n=new Map;for(const s in t){const a=[],o=Ye.get(parseInt(s));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(a[c]===void 0){const p=Ye.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(p!==void 0){const h=De.Objects.Model[p.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:h.attrName?Ne.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Et.traverse(function(y){y.ID===h.id&&(f.transform=y.matrix,y.userData.transformData&&(f.eulerOrder=y.userData.transformData.eulerOrder))}),f.transform||(f.transform=new xe),"PreRotation"in h&&(f.preRotation=h.PreRotation.value),"PostRotation"in h&&(f.postRotation=h.PostRotation.value),a[c]=f}}a[c]&&(a[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(a[c]===void 0){const p=Ye.get(l.ID).parents.filter(function(E){return E.relationship!==void 0})[0].ID,h=Ye.get(p).parents[0].ID,f=Ye.get(h).parents[0].ID,y=Ye.get(f).parents[0].ID,m=De.Objects.Model[y],d={modelName:m.attrName?Ne.sanitizeNodeName(m.attrName):"",morphName:De.Objects.Deformer[p].attrName};a[c]=d}a[c][u.attr]=u}}}),n.set(parseInt(s),a))}return n}parseAnimStacks(e){const t=De.Objects.AnimationStack,n={};for(const s in t){const a=Ye.get(parseInt(s)).children;a.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(a[0].ID);n[s]={name:t[s].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(s){t=t.concat(n.generateTracks(s))}),new Hf(e.name,-1,t)}generateTracks(e){const t=[];let n=new D,s=new It,a=new D;if(e.transform&&e.transform.decompose(n,s,a),n=n.toArray(),s=new Ct().setFromQuaternion(s,e.eulerOrder).toArray(),a=a.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,s,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,a,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,s){const a=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(a,t,n);return new zs(e+"."+s,a,o)}generateRotationTrack(e,t,n,s,a,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Wt.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Wt.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Wt.degToRad));const i=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(i,t,n);s!==void 0&&(s=s.map(Wt.degToRad),s.push(o),s=new Ct().fromArray(s),s=new It().setFromEuler(s)),a!==void 0&&(a=a.map(Wt.degToRad),a.push(o),a=new Ct().fromArray(a),a=new It().setFromEuler(a).invert());const c=new It,u=new Ct,p=[];for(let h=0;h<l.length;h+=3)u.set(l[h],l[h+1],l[h+2],o),c.setFromEuler(u),s!==void 0&&c.premultiply(s),a!==void 0&&c.multiply(a),c.toArray(p,h/3*4);return new ds(e+".quaternion",i,p)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(a){return a/100}),s=Et.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Us(e.modelName+".morphTargetInfluences["+s+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,s){return n-s}),t.length>1){let n=1,s=t[0];for(let a=1;a<t.length;a++){const o=t[a];o!==s&&(t[n]=o,s=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const s=n,a=[];let o=-1,i=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(i=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];a.push(u),s[0]=u}else a.push(s[0]);if(i!==-1){const u=t.y.values[i];a.push(u),s[1]=u}else a.push(s[1]);if(l!==-1){const u=t.z.values[l];a.push(u),s[2]=u}else a.push(s[2])}),a}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],s=e.values[t]-n,a=Math.abs(s);if(a>=180){const o=a/180,i=s/o;let l=n+i;const c=e.times[t-1],p=(e.times[t]-c)/o;let h=c+p;const f=[],y=[];for(;h<e.times[t];)f.push(h),h+=p,y.push(l),l+=i;e.times=wo(e.times,t,f),e.values=wo(e.values,t,y)}}}}class Bm{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new fl,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(s,a){const o=s.match(/^[\s\t]*;/),i=s.match(/^[\s\t]*$/);if(o||i)return;const l=s.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=s.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=s.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(s,l):c?t.parseNodeProperty(s,c,n[++a]):u?t.popStack():s.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(s)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),s=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),a={name:n},o=this.parseNodeAttr(s),i=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,a):n in i?(n==="PoseNode"?i.PoseNode.push(a):i[n].id!==void 0&&(i[n]={},i[n][i[n].id]=i[n]),o.id!==""&&(i[n][o.id]=a)):typeof o.id=="number"?(i[n]={},i[n][o.id]=a):n!=="Properties70"&&(n==="PoseNode"?i[n]=[a]:i[n]=a),typeof o.id=="number"&&(a.id=o.id),o.name!==""&&(a.attrName=o.name),o.type!==""&&(a.attrType=o.type),this.pushStack(a)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",s="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),s=e[2]),{id:t,name:n,type:s}}parseNodeProperty(e,t,n){let s=t[1].replace(/^"/,"").replace(/"$/,"").trim(),a=t[2].replace(/^"/,"").replace(/"$/,"").trim();s==="Content"&&a===","&&(a=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,s,a);return}if(s==="C"){const l=a.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let p=a.split(",").slice(3);p=p.map(function(h){return h.trim().replace(/^"/,"")}),s="connections",a=[c,u],Vm(a,p),o[s]===void 0&&(o[s]=[])}s==="Node"&&(o.id=a),s in o&&Array.isArray(o[s])?o[s].push(a):s!=="a"?o[s]=a:o.a=a,this.setCurrentProp(o,s),s==="a"&&a.slice(-1)!==","&&(o.a=di(a))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=di(t.a))}parseNodeSpecialProperty(e,t,n){const s=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),a=s[0],o=s[1],i=s[2],l=s[3];let c=s[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=di(c);break}this.getPrevNode()[a]={type:o,type2:i,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),a)}}class Om{parse(e){const t=new Mo(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const s=new fl;for(;!this.endOfContent(t);){const a=this.parseNode(t,n);a!==null&&s.add(a.name,a)}return s}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},s=t>=7500?e.getUint64():e.getUint32(),a=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),i=e.getString(o);if(s===0)return null;const l=[];for(let h=0;h<a;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",p=l.length>2?l[2]:"";for(n.singleProperty=a===1&&e.getOffset()===s;s>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(i,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),p!==""&&(n.attrType=p),i!==""&&(n.name=i),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const s=n.propertyList[0];Array.isArray(s)?(t[n.name]=n,n.a=s):t[n.name]=s}else if(e==="Connections"&&n.name==="C"){const s=[];n.propertyList.forEach(function(a,o){o!==0&&s.push(a)}),t.connections===void 0&&(t.connections=[]),t.connections.push(s)}else if(n.name==="Properties70")Object.keys(n).forEach(function(a){t[a]=n[a]});else if(e==="Properties70"&&n.name==="P"){let s=n.propertyList[0],a=n.propertyList[1];const o=n.propertyList[2],i=n.propertyList[3];let l;s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),a.indexOf("Lcl ")===0&&(a=a.replace("Lcl ","Lcl_")),a==="Color"||a==="ColorRGB"||a==="Vector"||a==="Vector3D"||a.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[s]={type:a,type2:o,flag:i,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const s=e.getUint32(),a=e.getUint32(),o=e.getUint32();if(a===0)switch(t){case"b":case"c":return e.getBooleanArray(s);case"d":return e.getFloat64Array(s);case"f":return e.getFloat32Array(s);case"i":return e.getInt32Array(s);case"l":return e.getInt64Array(s)}const i=vm(new Uint8Array(e.getArrayBuffer(o))),l=new Mo(i.buffer);switch(t){case"b":case"c":return l.getBooleanArray(s);case"d":return l.getFloat64Array(s);case"f":return l.getFloat32Array(s);case"i":return l.getInt32Array(s);case"l":return l.getInt64Array(s)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Mo{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let s=0;s<e;s++)t[s]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),Gi.decodeText(new Uint8Array(t))}}class fl{add(e,t){this[e]=t}}function Nm(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===gl(r,0,e.length)}function Um(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(s){const a=r[s-1];return r=r.slice(t+s),t++,a}for(let s=0;s<e.length;++s)if(n(1)===e[s])return!1;return!0}function So(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function zm(r){return r/46186158e3}const km=[];function pa(r,e,t,n){let s;switch(n.mappingType){case"ByPolygonVertex":s=r;break;case"ByPolygon":s=e;break;case"ByVertice":s=t;break;case"AllSame":s=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(s=n.indices[s]);const a=s*n.dataSize,o=a+n.dataSize;return Gm(km,n.buffer,a,o)}const hi=new Ct,ts=new D;function ml(r){const e=new xe,t=new xe,n=new xe,s=new xe,a=new xe,o=new xe,i=new xe,l=new xe,c=new xe,u=new xe,p=new xe,h=new xe,f=r.inheritType?r.inheritType:0;if(r.translation&&e.setPosition(ts.fromArray(r.translation)),r.preRotation){const L=r.preRotation.map(Wt.degToRad);L.push(r.eulerOrder||Ct.DefaultOrder),t.makeRotationFromEuler(hi.fromArray(L))}if(r.rotation){const L=r.rotation.map(Wt.degToRad);L.push(r.eulerOrder||Ct.DefaultOrder),n.makeRotationFromEuler(hi.fromArray(L))}if(r.postRotation){const L=r.postRotation.map(Wt.degToRad);L.push(r.eulerOrder||Ct.DefaultOrder),s.makeRotationFromEuler(hi.fromArray(L)),s.invert()}r.scale&&a.scale(ts.fromArray(r.scale)),r.scalingOffset&&i.setPosition(ts.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(ts.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(ts.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(ts.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(p.copy(r.parentMatrix),u.copy(r.parentMatrixWorld));const y=t.clone().multiply(n).multiply(s),m=new xe;m.extractRotation(u);const d=new xe;d.copyPosition(u);const E=d.clone().invert().multiply(u),S=m.clone().invert().multiply(E),_=a,v=new xe;if(f===0)v.copy(m).multiply(y).multiply(S).multiply(_);else if(f===1)v.copy(m).multiply(S).multiply(y).multiply(_);else{const X=new xe().scale(new D().setFromMatrixScale(p)).clone().invert(),$=S.clone().multiply(X);v.copy(m).multiply(y).multiply($).multiply(_)}const M=c.clone().invert(),A=o.clone().invert();let R=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(s).multiply(M).multiply(i).multiply(o).multiply(a).multiply(A);const g=new xe().copyPosition(R),T=u.clone().multiply(g);return h.copyPosition(T),R=h.clone().multiply(v),R.premultiply(u.invert()),R}function yl(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function di(r){return r.split(",").map(function(t){return parseFloat(t)})}function gl(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),Gi.decodeText(new Uint8Array(r,e,t))}function Vm(r,e){for(let t=0,n=r.length,s=e.length;t<s;t++,n++)r[n]=e[t]}function Gm(r,e,t,n){for(let s=t,a=0;s<n;s++,a++)r[a]=e[s];return r}function wo(r,e,t){return r.slice(0,e).concat(t).concat(r.slice(e))}const Hm={class:"fly-bird flex-horiz flex-column flex-center-all pos-r w100p",onselectstart:"return false"},Wm={class:"pb-sm"},qm={class:"pos-r"},Xm={class:"pos-a score"},jm=Do({name:"fly-bird"}),Ym=Object.assign(jm,{setup(r){const e=pn(),[t,n,s]=[800,480,300],a=pn(0),o=new dl,i=new zi;let[l,c]=[0,0];const u=pn(Ss.wait),p=new ut(75,t/n,.001,1e4),h=new Ni({logarithmicDepthBuffer:!0,antialias:!0,alpha:!0});h.shadowMap.enabled=!0;const f=new tl;h.setSize(t,n),h.setClearColor(1415935,1),p.position.set(-1200,300,800),p.lookAt(0,0,600);let y=null;const m=[{label:"大红",value:"big-red,Mesh1"},{label:"小黑",value:"small-black,Mesh1"},{label:"小白",value:"small-white,Mesh2"},{label:"小黄",value:"small-yellow,Mesh2"},{label:"小蓝",value:"small-blue,Mesh2"},{label:"大嘴",value:"big-mouth,Mesh2"},{label:"小猪",value:"small-pig,none"}],d=pn(m[0].value);Ml(d,()=>{ne()}),f.add(new Vi(13421772));const E=new ks(4473924);E.position.set(2e3,4e3,2e3),f.add(E);const S=new ks(4473924,.5);S.position.set(10,-10,-10),f.add(S),E.castShadow=!0,E.shadow.camera.left=-2e3,E.shadow.camera.right=2e3,E.shadow.camera.top=2e3,E.shadow.camera.bottom=-2e3,E.shadow.mapSize.width=1024,E.shadow.mapSize.height=1024,E.shadow.camera.far=1e4,E.shadow.bias=-.001,h.shadowMap.type=Po;const _=()=>new Promise(oe=>{f.remove(y);const[se,be]=m.find(ue=>ue.value===d.value).value.split(",");o.load(`/bird-3d/${se}/${se}.fbx`,ue=>{if(y=ue,y.castShadow=!0,y.receiveShadow=!0,y.scale.set(.04,.04,.04),f.add(y),be==="none")return oe(!0);i.load(`/bird-3d/${se}/${se}.jpg`,me=>{y.traverse(He=>{He.castShadow=!0,He.receiveShadow=!0,He.name===be&&(He.material=new Ds({map:me}),oe(!0))})})})});let[v,M,A,R,g,T,L,X]=[-.007,0,0,0,1.5,0,800,-1200];const $=()=>{const oe=new Date().getTime()-A;R=v*oe*oe/2+M*oe+T;const se=M+v*oe;y.rotation.x=Math.min((se-g)/(-g*2)*Math.PI-Math.PI/2,Math.PI/2),y.position.y=Math.min(L,Math.max(X,R))};let[O,P,V,Y,K,q,J]=[[],340,480,860,.4,3e3,3e3];const Z=()=>{const oe=K*c,se=Math.floor(oe/Y);if(a.value=Math.max(Math.floor((oe-q+P+60)/Y),0),se<0)return;let be=-1;if(O.forEach(ue=>{be=ue[0],ue[1].position.z=ue[2].position.z=be*Y+q-oe+P/2}),be!==se){const ue=Math.random()*(L-X-V)+X+V/2;O.push([se,...U(ue,se*Y+q-oe+P/2)])}O=O.filter(ue=>ue[1].position.z<-5e3?(f.remove(ue[1]),f.remove(ue[2]),!1):!0)},z=()=>{const oe=K*c,se=Math.floor((oe-q)/Y);if((oe-q)%Y>P||se<0)return!1;const ue=O.find(me=>me[0]===se);return ue?y.position.y<ue[2].position.y+J/2+60||y.position.y>ue[2].position.y+J/2+V-60:!1},U=(oe,se)=>{const be=J,ue=new Bt(new Bn(P,be,P),new bi({color:16777215})),me=new Bt(new Bn(P,be,P),new bi({color:16777215}));return f.add(ue,me),ue.position.y=V/2+oe+be/2,me.position.y=-V/2+oe-be/2,ue.position.z=me.position.z=se,ue.receiveShadow=!0,me.receiveShadow=!0,ue.castShadow=!0,me.castShadow=!0,[ue,me]},ne=()=>{u.value=Ss.over},ee=()=>{f.remove(y),O.forEach(oe=>{f.remove(oe[1]),f.remove(oe[2])}),O=[]},ie=oe=>{oe.preventDefault(),M=g,T=y.position.y,A=new Date().getTime()},G=async()=>{ee(),await _(),u.value=Ss.gaming,y.position.y=0,l=new Date().getTime(),A=new Date().getTime()},we=()=>{if(u.value===Ss.gaming&&(c=new Date().getTime()-l,Z(),$(),z()))return ne()};Fo(()=>{e.value.appendChild(h.domElement),de()});const de=()=>{we(),requestAnimationFrame(de),h.render(f,p)};return(oe,se)=>{const be=An("n-input-group-label"),ue=An("n-select"),me=An("n-input-group");return wi(),Ci("div",Hm,[Cn("div",Wm,[Rt(me,null,{default:dn(()=>[Rt(be,null,{default:dn(()=>[da("选择小鸟")]),_:1}),Rt(ue,{value:d.value,"onUpdate:value":se[0]||(se[0]=He=>d.value=He),options:m,style:{width:"100px"}},null,8,["value"])]),_:1})]),Cn("div",qm,[Cn("div",{ref_key:"screenRef",ref:e,class:"mar-center pos-r",style:{width:"800px",height:"480px"},onClick:ie},null,512),Cn("div",Xm,Yi(a.value),1),Rt(bl,{status:u.value,onOnClickStart:G},{default:dn(()=>[da(" 得分："+Yi(a.value),1)]),_:1},8,["status"])])])}}}),Zm=Ao(Ym,[["__scopeId","data-v-4c650a29"]]),Co={type:"change"},fi={type:"start"},To={type:"end"};class $m extends Nn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zn.ROTATE,MIDDLE:zn.DOLLY,RIGHT:zn.PAN},this.touches={ONE:kn.ROTATE,TWO:kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",yt),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Co),n.update(),a=s.NONE},this.update=function(){const C=new D,I=new It().setFromUnitVectors(e.up,new D(0,1,0)),pe=I.clone().invert(),fe=new D,ce=new It,ge=2*Math.PI;return function(){const Le=n.object.position;C.copy(Le).sub(n.target),C.applyQuaternion(I),i.setFromVector3(C),n.autoRotate&&a===s.NONE&&T(R()),n.enableDamping?(i.theta+=l.theta*n.dampingFactor,i.phi+=l.phi*n.dampingFactor):(i.theta+=l.theta,i.phi+=l.phi);let Pe=n.minAzimuthAngle,Ge=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ge)&&(Pe<-Math.PI?Pe+=ge:Pe>Math.PI&&(Pe-=ge),Ge<-Math.PI?Ge+=ge:Ge>Math.PI&&(Ge-=ge),Pe<=Ge?i.theta=Math.max(Pe,Math.min(Ge,i.theta)):i.theta=i.theta>(Pe+Ge)/2?Math.max(Pe,i.theta):Math.min(Ge,i.theta)),i.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,i.phi)),i.makeSafe(),i.radius*=c,i.radius=Math.max(n.minDistance,Math.min(n.maxDistance,i.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(i),C.applyQuaternion(pe),Le.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,p||fe.distanceToSquared(n.object.position)>o||8*(1-ce.dot(n.object.quaternion))>o?(n.dispatchEvent(Co),fe.copy(n.object.position),ce.copy(n.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",He),n.domElement.removeEventListener("pointercancel",ht),n.domElement.removeEventListener("wheel",Tt),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Qe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",yt)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const o=1e-6,i=new vo,l=new vo;let c=1;const u=new D;let p=!1;const h=new Se,f=new Se,y=new Se,m=new Se,d=new Se,E=new Se,S=new Se,_=new Se,v=new Se,M=[],A={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function g(){return Math.pow(.95,n.zoomSpeed)}function T(C){l.theta-=C}function L(C){l.phi-=C}const X=function(){const C=new D;return function(pe,fe){C.setFromMatrixColumn(fe,0),C.multiplyScalar(-pe),u.add(C)}}(),$=function(){const C=new D;return function(pe,fe){n.screenSpacePanning===!0?C.setFromMatrixColumn(fe,1):(C.setFromMatrixColumn(fe,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(pe),u.add(C)}}(),O=function(){const C=new D;return function(pe,fe){const ce=n.domElement;if(n.object.isPerspectiveCamera){const ge=n.object.position;C.copy(ge).sub(n.target);let ye=C.length();ye*=Math.tan(n.object.fov/2*Math.PI/180),X(2*pe*ye/ce.clientHeight,n.object.matrix),$(2*fe*ye/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(pe*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),$(fe*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(C){h.set(C.clientX,C.clientY)}function K(C){S.set(C.clientX,C.clientY)}function q(C){m.set(C.clientX,C.clientY)}function J(C){f.set(C.clientX,C.clientY),y.subVectors(f,h).multiplyScalar(n.rotateSpeed);const I=n.domElement;T(2*Math.PI*y.x/I.clientHeight),L(2*Math.PI*y.y/I.clientHeight),h.copy(f),n.update()}function Z(C){_.set(C.clientX,C.clientY),v.subVectors(_,S),v.y>0?P(g()):v.y<0&&V(g()),S.copy(_),n.update()}function z(C){d.set(C.clientX,C.clientY),E.subVectors(d,m).multiplyScalar(n.panSpeed),O(E.x,E.y),m.copy(d),n.update()}function U(C){C.deltaY<0?V(g()):C.deltaY>0&&P(g()),n.update()}function ne(C){let I=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),I=!0;break}I&&(C.preventDefault(),n.update())}function ee(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const C=.5*(M[0].pageX+M[1].pageX),I=.5*(M[0].pageY+M[1].pageY);h.set(C,I)}}function ie(){if(M.length===1)m.set(M[0].pageX,M[0].pageY);else{const C=.5*(M[0].pageX+M[1].pageX),I=.5*(M[0].pageY+M[1].pageY);m.set(C,I)}}function G(){const C=M[0].pageX-M[1].pageX,I=M[0].pageY-M[1].pageY,pe=Math.sqrt(C*C+I*I);S.set(0,pe)}function we(){n.enableZoom&&G(),n.enablePan&&ie()}function de(){n.enableZoom&&G(),n.enableRotate&&ee()}function oe(C){if(M.length==1)f.set(C.pageX,C.pageY);else{const pe=ve(C),fe=.5*(C.pageX+pe.x),ce=.5*(C.pageY+pe.y);f.set(fe,ce)}y.subVectors(f,h).multiplyScalar(n.rotateSpeed);const I=n.domElement;T(2*Math.PI*y.x/I.clientHeight),L(2*Math.PI*y.y/I.clientHeight),h.copy(f)}function se(C){if(M.length===1)d.set(C.pageX,C.pageY);else{const I=ve(C),pe=.5*(C.pageX+I.x),fe=.5*(C.pageY+I.y);d.set(pe,fe)}E.subVectors(d,m).multiplyScalar(n.panSpeed),O(E.x,E.y),m.copy(d)}function be(C){const I=ve(C),pe=C.pageX-I.x,fe=C.pageY-I.y,ce=Math.sqrt(pe*pe+fe*fe);_.set(0,ce),v.set(0,Math.pow(_.y/S.y,n.zoomSpeed)),P(v.y),S.copy(_)}function ue(C){n.enableZoom&&be(C),n.enablePan&&se(C)}function me(C){n.enableZoom&&be(C),n.enableRotate&&oe(C)}function He(C){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",Je),n.domElement.addEventListener("pointerup",Qe)),te(C),C.pointerType==="touch"?w(C):je(C))}function Je(C){n.enabled!==!1&&(C.pointerType==="touch"?x(C):ke(C))}function Qe(C){ae(C),M.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",Je),n.domElement.removeEventListener("pointerup",Qe)),n.dispatchEvent(To),a=s.NONE}function ht(C){ae(C)}function je(C){let I;switch(C.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case zn.DOLLY:if(n.enableZoom===!1)return;K(C),a=s.DOLLY;break;case zn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;q(C),a=s.PAN}else{if(n.enableRotate===!1)return;Y(C),a=s.ROTATE}break;case zn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Y(C),a=s.ROTATE}else{if(n.enablePan===!1)return;q(C),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(fi)}function ke(C){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;J(C);break;case s.DOLLY:if(n.enableZoom===!1)return;Z(C);break;case s.PAN:if(n.enablePan===!1)return;z(C);break}}function Tt(C){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(C.preventDefault(),n.dispatchEvent(fi),U(C),n.dispatchEvent(To))}function yt(C){n.enabled===!1||n.enablePan===!1||ne(C)}function w(C){switch(le(C),M.length){case 1:switch(n.touches.ONE){case kn.ROTATE:if(n.enableRotate===!1)return;ee(),a=s.TOUCH_ROTATE;break;case kn.PAN:if(n.enablePan===!1)return;ie(),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(),a=s.TOUCH_DOLLY_PAN;break;case kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(fi)}function x(C){switch(le(C),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(C),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;se(C),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ue(C),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(C),n.update();break;default:a=s.NONE}}function k(C){n.enabled!==!1&&C.preventDefault()}function te(C){M.push(C)}function ae(C){delete A[C.pointerId];for(let I=0;I<M.length;I++)if(M[I].pointerId==C.pointerId){M.splice(I,1);return}}function le(C){let I=A[C.pointerId];I===void 0&&(I=new Se,A[C.pointerId]=I),I.set(C.pageX,C.pageY)}function ve(C){const I=C.pointerId===M[0].pointerId?M[1]:M[0];return A[I.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",He),n.domElement.addEventListener("pointercancel",ht),n.domElement.addEventListener("wheel",Tt,{passive:!1}),this.update()}}const Km={class:"fly-bird flex-horiz flex-column flex-center-all pos-r w100p",onselectstart:"return false"},Jm={class:"pb-sm"},Qm={class:"pos-r"},ey=Do({name:"fly-bird"}),ty=Object.assign(ey,{setup(r){const e=pn(),[t,n,s]=[480,480,300];pn(0);const a=new dl,o=new zi;pn(Ss.wait);const i=new ut(75,t/n,.001,1e4),l=new Ni({logarithmicDepthBuffer:!0,antialias:!0,alpha:!0}),c=new tl;l.setSize(t,n),l.setClearColor(1415935,1),i.position.set(-1200,300,800),i.lookAt(0,0,600);let u=null;const p=[{label:"大红",value:"big-red,Mesh1"},{label:"小黑",value:"small-black,Mesh1"},{label:"小白",value:"small-white,Mesh2"},{label:"小黄",value:"small-yellow,Mesh2"},{label:"小蓝",value:"small-blue,Mesh2"},{label:"大嘴",value:"big-mouth,Mesh2"},{label:"小猪",value:"small-pig,none"}],h=pn(p[0].value);c.add(new Vi(13421772));const f=new ks(4473924);f.position.set(1e3,1e3,1e3),c.add(f);const y=new ks(4473924);y.position.set(10,-10,-10),c.add(y),new $m(i,l.domElement);const m=()=>new Promise(E=>{c.remove(u);const[S,_]=p.find(v=>v.value===h.value).value.split(",");a.load(`/bird-3d/${S}/${S}.fbx`,v=>{if(u=v,u.scale.set(.2,.2,.2),c.add(u),_==="none")return E(!0);o.load(`/bird-3d/${S}/${S}.jpg`,M=>{u.traverse(A=>{A.name===_&&(A.material=new Ds({map:M}),E(!0))})})})});m(),Fo(()=>{e.value.appendChild(l.domElement),d()});const d=()=>{requestAnimationFrame(d),l.render(c,i)};return(E,S)=>{const _=An("n-input-group-label"),v=An("n-select"),M=An("n-input-group");return wi(),Ci("div",Km,[Cn("div",Jm,[Rt(M,null,{default:dn(()=>[Rt(_,null,{default:dn(()=>[da("选择小鸟")]),_:1}),Rt(v,{value:h.value,"onUpdate:value":S[0]||(S[0]=A=>h.value=A),options:p,style:{width:"100px"},onChange:S[1]||(S[1]=A=>E.$nextTick(m))},null,8,["value"]),Rt(_,null,{default:dn(()=>[da("拖动旋转，滚轮缩放")]),_:1})]),_:1})]),Cn("div",Qm,[Cn("div",{ref_key:"screenRef",ref:e,class:"mar-center pos-r",style:{width:"480px",height:"480px"}},null,512)])])}}}),ny=Ao(ty,[["__scopeId","data-v-822cb612"]]),sy=Ti('<h1 id="飞翔的小鸟-3d" tabindex="-1">飞翔的小鸟-3d <a class="header-anchor" href="#飞翔的小鸟-3d" aria-label="Permalink to &quot;飞翔的小鸟-3d&quot;">​</a></h1><h2 id="玩法" tabindex="-1">玩法 <a class="header-anchor" href="#玩法" aria-label="Permalink to &quot;玩法&quot;">​</a></h2><p>点击游戏界面小鸟会一跳一跳；</p><p>可以选择小鸟角色游玩； 查看各小鸟高清 <a href="#小鸟">3D建模</a></p><div class="tip custom-block"><p class="custom-block-title">有点小难</p><p>虽然我能玩到 100+ 关</p></div>',5),ay=Ti('<h2 id="算法" tabindex="-1">算法 <a class="header-anchor" href="#算法" aria-label="Permalink to &quot;算法&quot;">​</a></h2><p>使用 <code>three.js</code> 框架；</p><h3 id="小鸟" tabindex="-1">小鸟 <a class="header-anchor" href="#小鸟" aria-label="Permalink to &quot;小鸟&quot;">​</a></h3><p>小鸟上下运动使用重力加速度公式；</p><p>鸟头方向使用速度与角度对应关系：[<code>向上初始速度</code>, <code>- 向下初始速度</code>] -&gt; [ <code>- PI/2</code> , <code>PI/2</code> ];</p>',5),iy=Ti(`<h3 id="柱子" tabindex="-1">柱子 <a class="header-anchor" href="#柱子" aria-label="Permalink to &quot;柱子&quot;">​</a></h3><p>柱子离开屏幕后回收，以防止内存溢出；</p><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;fly-bird flex-horiz flex-column flex-center-all pos-r w100p&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">onselectstart</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;return false&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pb-sm&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">n-input-group</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">n-input-group-label</span><span style="color:#E1E4E8;">&gt;选择小鸟&lt;/</span><span style="color:#85E89D;">n-input-group-label</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">n-select</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectedBird&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:options</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;birds&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 100px&quot;</span><span style="color:#E1E4E8;">&gt; &lt;/</span><span style="color:#85E89D;">n-select</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">n-input-group</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pos-r&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;screenRef&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mar-center pos-r&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 800px; height: 480px&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;clickBird&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pos-a score&quot;</span><span style="color:#E1E4E8;">&gt;{{ score }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">start-over-mask</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:status</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;status&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@on-click-start</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;start&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        得分：{{ score }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">start-over-mask</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;"> * Created by Eric.Fang</span></span>
<span class="line"><span style="color:#6A737D;"> * Create Time : 2022/12/22</span></span>
<span class="line"><span style="color:#6A737D;"> * IDE : WebStorm</span></span>
<span class="line"><span style="color:#6A737D;">--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;fly-bird&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> THREE </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;three&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FBXLoader } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;three/examples/jsm/loaders/FBXLoader.js&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onMounted, ref, watch } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> StartOverMask </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../common/start-over-mask.vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { GameStatus } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../../utils/enum.util&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">screenRef</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">sw</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">sh</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">distance</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">480</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">score</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fbxLoader</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">FBXLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">textureLoader</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">TextureLoader</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> [startTime, gameTime] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(GameStatus.wait);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">camera</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">PerspectiveCamera</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">75</span><span style="color:#E1E4E8;">, sw </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> sh, </span><span style="color:#79B8FF;">0.001</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">renderer</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">WebGLRenderer</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  logarithmicDepthBuffer: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  alpha: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">renderer.shadowMap.enabled </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">scene</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Scene</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">renderer.</span><span style="color:#B392F0;">setSize</span><span style="color:#E1E4E8;">(sw, sh);</span></span>
<span class="line"><span style="color:#E1E4E8;">renderer.</span><span style="color:#B392F0;">setClearColor</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x159aff</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">camera.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">300</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">); </span><span style="color:#6A737D;">//设置相机位置</span></span>
<span class="line"><span style="color:#E1E4E8;">camera.</span><span style="color:#B392F0;">lookAt</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">600</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const orbitController = new OrbitControls(camera, renderer.domElement);</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> bird </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">birds</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&quot;大红&quot;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&quot;big-red,Mesh1&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&quot;小黑&quot;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&quot;small-black,Mesh1&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&quot;小白&quot;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&quot;small-white,Mesh2&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&quot;小黄&quot;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&quot;small-yellow,Mesh2&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&quot;小蓝&quot;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&quot;small-blue,Mesh2&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&quot;大嘴&quot;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&quot;big-mouth,Mesh2&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { label: </span><span style="color:#9ECBFF;">&quot;小猪&quot;</span><span style="color:#E1E4E8;">, value: </span><span style="color:#9ECBFF;">&quot;small-pig,none&quot;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">selectedBird</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(birds[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">].value);</span></span>
<span class="line"><span style="color:#B392F0;">watch</span><span style="color:#E1E4E8;">(selectedBird, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">gameOver</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">AmbientLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0xcccccc</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dirLight</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DirectionalLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x444444</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">dirLight.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(dirLight);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dirLight2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">DirectionalLight</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0x444444</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">dirLight2.position.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(dirLight2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">dirLight.castShadow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">dirLight.shadow.camera.left </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">dirLight.shadow.camera.right </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">dirLight.shadow.camera.top </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">dirLight.shadow.camera.bottom </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">dirLight.shadow.mapSize.width </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">dirLight.shadow.mapSize.height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const directionalLightCameraHelper = new THREE.CameraHelper(dirLight.shadow.camera);</span></span>
<span class="line"><span style="color:#6A737D;">// scene.add(directionalLightCameraHelper);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">dirLight.shadow.camera.far </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">dirLight.shadow.bias </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">0.001</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// //定义阴影贴图类型 减少马赛克阴影</span></span>
<span class="line"><span style="color:#E1E4E8;">renderer.shadowMap.type </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.PCFSoftShadowMap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reloadBird</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    scene.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(bird);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">mesh</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> birds.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> b.value </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> selectedBird.value).value.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;,&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    fbxLoader.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`/bird-3d/\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}.fbx\`</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      bird </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> obj;</span></span>
<span class="line"><span style="color:#E1E4E8;">      bird.castShadow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      bird.receiveShadow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      bird.scale.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0.04</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.04</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.04</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(bird);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (mesh </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;none&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      textureLoader.</span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`/bird-3d/\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}/\${</span><span style="color:#E1E4E8;">path</span><span style="color:#9ECBFF;">}.jpg\`</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">tx</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        bird.</span><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          obj.castShadow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          obj.receiveShadow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (obj.name </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> mesh) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            obj.material </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshPhongMaterial</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">              map: tx,</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> [a, v0, t0, s, V0, s0, tb, bb] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">0.007</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1.5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computeBirdPosition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">t</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> t0;</span></span>
<span class="line"><span style="color:#E1E4E8;">  s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (a </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> t) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> v0 </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> t </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> s0;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">v</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> v0 </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> t;</span></span>
<span class="line"><span style="color:#E1E4E8;">  bird.rotation.x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(((v </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">V0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">V0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, Math.</span><span style="color:#79B8FF;">PI</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  bird.position.y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(tb, Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(bb, s));</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> [pillars, pw, pg, pd, pv, ps, ph] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [[], </span><span style="color:#79B8FF;">340</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">480</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">860</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">renderPillars</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">birdDistance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pv </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> gameTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">pn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">(birdDistance </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> pd);</span></span>
<span class="line"><span style="color:#E1E4E8;">  score.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((birdDistance </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> ps </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pw </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> pd), </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (pn </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillars.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    n </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    p[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].position.z </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> p[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">].position.z </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> n </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pd </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> ps </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> birdDistance </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pw </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (n </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> pn) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">g</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">random</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (tb </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> bb </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> pg) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> bb </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pg </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    pillars.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">([pn, </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">createPillar</span><span style="color:#E1E4E8;">(g, pn </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> pd </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> ps </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> birdDistance </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pw </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillars </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pillars.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (p[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">].position.z </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      scene.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(p[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      scene.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(p[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">checkCrash</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">birdDistance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pv </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> gameTime,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">pn</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">floor</span><span style="color:#E1E4E8;">((birdDistance </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> ps) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> pd),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">y</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (birdDistance </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> ps) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> pd;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (y </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> pw </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> pn </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pillars.</span><span style="color:#B392F0;">find</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> p[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> pn);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">p) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">    bird.position.y </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> p[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">].position.y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> ph </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span></span>
<span class="line"><span style="color:#E1E4E8;">    bird.position.y </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> p[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">].position.y </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> ph </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pg </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">60</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPillar</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">pn</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">h</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ph;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pillarTop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(pw, h, pw),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshLambertMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pillarBottom</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">Mesh</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">BoxGeometry</span><span style="color:#E1E4E8;">(pw, h, pw),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">THREE</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">MeshLambertMaterial</span><span style="color:#E1E4E8;">({ color: </span><span style="color:#79B8FF;">0xffffff</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  );</span></span>
<span class="line"><span style="color:#E1E4E8;">  scene.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(pillarTop, pillarBottom);</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillarTop.position.y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pg </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> h </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillarBottom.position.y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">pg </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> g </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> h </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillarTop.position.z </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pillarBottom.position.z </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pn;</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillarTop.receiveShadow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillarBottom.receiveShadow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillarTop.castShadow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillarBottom.castShadow </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> [pillarTop, pillarBottom];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gameOver</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  status.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> GameStatus.over;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clearPillars</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  scene.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(bird);</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillars.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    scene.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(p[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">    scene.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(p[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  pillars </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clickBird</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  v0 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">V0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  s0 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> bird.position.y;</span></span>
<span class="line"><span style="color:#E1E4E8;">  t0 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">clearPillars</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reloadBird</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  status.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> GameStatus.gaming;</span></span>
<span class="line"><span style="color:#E1E4E8;">  bird.position.y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  startTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  t0 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">runtime</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (status.value </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> GameStatus.gaming) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  gameTime </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> startTime;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">renderPillars</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">computeBirdPosition</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">checkCrash</span><span style="color:#E1E4E8;">()) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gameOver</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  screenRef.value.</span><span style="color:#B392F0;">appendChild</span><span style="color:#E1E4E8;">(renderer.domElement);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">runtime</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">requestAnimationFrame</span><span style="color:#E1E4E8;">(render);</span></span>
<span class="line"><span style="color:#E1E4E8;">  renderer.</span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">(scene, camera);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// script end</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.fly-bird</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.score</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">40</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">70</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">solid</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-weight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">bold</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#1a1a1a</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;fly-bird flex-horiz flex-column flex-center-all pos-r w100p&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">onselectstart</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;return false&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pb-sm&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">n-input-group</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">n-input-group-label</span><span style="color:#24292E;">&gt;选择小鸟&lt;/</span><span style="color:#22863A;">n-input-group-label</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">n-select</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectedBird&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:options</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;birds&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 100px&quot;</span><span style="color:#24292E;">&gt; &lt;/</span><span style="color:#22863A;">n-select</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">n-input-group</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pos-r&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;screenRef&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mar-center pos-r&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 800px; height: 480px&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;clickBird&quot;</span></span>
<span class="line"><span style="color:#24292E;">      &gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pos-a score&quot;</span><span style="color:#24292E;">&gt;{{ score }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">start-over-mask</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:status</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;status&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@on-click-start</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;start&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        得分：{{ score }}</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">start-over-mask</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--</span></span>
<span class="line"><span style="color:#6A737D;"> * Created by Eric.Fang</span></span>
<span class="line"><span style="color:#6A737D;"> * Create Time : 2022/12/22</span></span>
<span class="line"><span style="color:#6A737D;"> * IDE : WebStorm</span></span>
<span class="line"><span style="color:#6A737D;">--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;fly-bird&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> THREE </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;three&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { FBXLoader } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;three/examples/jsm/loaders/FBXLoader.js&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { onMounted, ref, watch } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> StartOverMask </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../common/start-over-mask.vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { GameStatus } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../../utils/enum.util&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">screenRef</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">sw</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">sh</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">distance</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">800</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">480</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">score</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fbxLoader</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">FBXLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">textureLoader</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">TextureLoader</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> [startTime, gameTime] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">status</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(GameStatus.wait);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">camera</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">PerspectiveCamera</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">75</span><span style="color:#24292E;">, sw </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> sh, </span><span style="color:#005CC5;">0.001</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">10000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">renderer</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">WebGLRenderer</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  logarithmicDepthBuffer: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  antialias: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  alpha: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">renderer.shadowMap.enabled </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">scene</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Scene</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">renderer.</span><span style="color:#6F42C1;">setSize</span><span style="color:#24292E;">(sw, sh);</span></span>
<span class="line"><span style="color:#24292E;">renderer.</span><span style="color:#6F42C1;">setClearColor</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0x159aff</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">camera.position.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1200</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">300</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">800</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">//设置相机位置</span></span>
<span class="line"><span style="color:#24292E;">camera.</span><span style="color:#6F42C1;">lookAt</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">600</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const orbitController = new OrbitControls(camera, renderer.domElement);</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> bird </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">birds</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  { label: </span><span style="color:#032F62;">&quot;大红&quot;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&quot;big-red,Mesh1&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { label: </span><span style="color:#032F62;">&quot;小黑&quot;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&quot;small-black,Mesh1&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { label: </span><span style="color:#032F62;">&quot;小白&quot;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&quot;small-white,Mesh2&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { label: </span><span style="color:#032F62;">&quot;小黄&quot;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&quot;small-yellow,Mesh2&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { label: </span><span style="color:#032F62;">&quot;小蓝&quot;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&quot;small-blue,Mesh2&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { label: </span><span style="color:#032F62;">&quot;大嘴&quot;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&quot;big-mouth,Mesh2&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { label: </span><span style="color:#032F62;">&quot;小猪&quot;</span><span style="color:#24292E;">, value: </span><span style="color:#032F62;">&quot;small-pig,none&quot;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">selectedBird</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(birds[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">].value);</span></span>
<span class="line"><span style="color:#6F42C1;">watch</span><span style="color:#24292E;">(selectedBird, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">gameOver</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">scene.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">AmbientLight</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0xcccccc</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dirLight</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DirectionalLight</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0x444444</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">dirLight.position.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">scene.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(dirLight);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dirLight2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">DirectionalLight</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0x444444</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">dirLight2.position.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">scene.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(dirLight2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">dirLight.castShadow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">dirLight.shadow.camera.left </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">dirLight.shadow.camera.right </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">dirLight.shadow.camera.top </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">dirLight.shadow.camera.bottom </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">dirLight.shadow.mapSize.width </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">dirLight.shadow.mapSize.height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// const directionalLightCameraHelper = new THREE.CameraHelper(dirLight.shadow.camera);</span></span>
<span class="line"><span style="color:#6A737D;">// scene.add(directionalLightCameraHelper);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">dirLight.shadow.camera.far </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">dirLight.shadow.bias </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">0.001</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// //定义阴影贴图类型 减少马赛克阴影</span></span>
<span class="line"><span style="color:#24292E;">renderer.shadowMap.type </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.PCFSoftShadowMap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reloadBird</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">(</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    scene.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(bird);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">path</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">mesh</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> birds.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> b.value </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> selectedBird.value).value.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;,&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    fbxLoader.</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`/bird-3d/\${</span><span style="color:#24292E;">path</span><span style="color:#032F62;">}/\${</span><span style="color:#24292E;">path</span><span style="color:#032F62;">}.fbx\`</span><span style="color:#24292E;">, </span><span style="color:#E36209;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      bird </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> obj;</span></span>
<span class="line"><span style="color:#24292E;">      bird.castShadow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      bird.receiveShadow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      bird.scale.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0.04</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.04</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.04</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      scene.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(bird);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (mesh </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;none&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      textureLoader.</span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`/bird-3d/\${</span><span style="color:#24292E;">path</span><span style="color:#032F62;">}/\${</span><span style="color:#24292E;">path</span><span style="color:#032F62;">}.jpg\`</span><span style="color:#24292E;">, </span><span style="color:#E36209;">tx</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        bird.</span><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(</span><span style="color:#E36209;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          obj.castShadow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">          obj.receiveShadow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (obj.name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> mesh) {</span></span>
<span class="line"><span style="color:#24292E;">            obj.material </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">MeshPhongMaterial</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">              map: tx,</span></span>
<span class="line"><span style="color:#24292E;">            });</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> [a, v0, t0, s, V0, s0, tb, bb] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">0.007</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1.5</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">800</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1200</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computeBirdPosition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">t</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> t0;</span></span>
<span class="line"><span style="color:#24292E;">  s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (a </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> t) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> v0 </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> t </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> s0;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">v</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> v0 </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> t;</span></span>
<span class="line"><span style="color:#24292E;">  bird.rotation.x </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">(((v </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">V0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">V0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> Math.</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> Math.</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, Math.</span><span style="color:#005CC5;">PI</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  bird.position.y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">(tb, Math.</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(bb, s));</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> [pillars, pw, pg, pd, pv, ps, ph] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [[], </span><span style="color:#005CC5;">340</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">480</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">860</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">renderPillars</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">birdDistance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pv </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> gameTime,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">pn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">(birdDistance </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> pd);</span></span>
<span class="line"><span style="color:#24292E;">  score.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">((birdDistance </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> ps </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> pw </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> pd), </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (pn </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  pillars.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">p</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    n </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    p[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].position.z </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> p[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">].position.z </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> n </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pd </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> ps </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> birdDistance </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> pw </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (n </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> pn) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">g</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">random</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> (tb </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> bb </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> pg) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> bb </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> pg </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    pillars.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">([pn, </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">createPillar</span><span style="color:#24292E;">(g, pn </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> pd </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> ps </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> birdDistance </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> pw </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)]);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  pillars </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pillars.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">p</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (p[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">].position.z </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      scene.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(p[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">      scene.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(p[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">checkCrash</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">birdDistance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pv </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> gameTime,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">pn</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">floor</span><span style="color:#24292E;">((birdDistance </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> ps) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> pd),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">y</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (birdDistance </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> ps) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> pd;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (y </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> pw </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> pn </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">p</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pillars.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(</span><span style="color:#E36209;">p</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> p[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> pn);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">p) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">    bird.position.y </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> p[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">].position.y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> ph </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">60</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span></span>
<span class="line"><span style="color:#24292E;">    bird.position.y </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> p[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">].position.y </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> ph </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> pg </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">60</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPillar</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">g</span><span style="color:#24292E;">, </span><span style="color:#E36209;">pn</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">h</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ph;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pillarTop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Mesh</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">BoxGeometry</span><span style="color:#24292E;">(pw, h, pw),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">MeshLambertMaterial</span><span style="color:#24292E;">({ color: </span><span style="color:#005CC5;">0xffffff</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pillarBottom</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">Mesh</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">BoxGeometry</span><span style="color:#24292E;">(pw, h, pw),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">THREE</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">MeshLambertMaterial</span><span style="color:#24292E;">({ color: </span><span style="color:#005CC5;">0xffffff</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">  );</span></span>
<span class="line"><span style="color:#24292E;">  scene.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(pillarTop, pillarBottom);</span></span>
<span class="line"><span style="color:#24292E;">  pillarTop.position.y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pg </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> g </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> h </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  pillarBottom.position.y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">pg </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> g </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> h </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  pillarTop.position.z </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pillarBottom.position.z </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pn;</span></span>
<span class="line"><span style="color:#24292E;">  pillarTop.receiveShadow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  pillarBottom.receiveShadow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  pillarTop.castShadow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  pillarBottom.castShadow </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> [pillarTop, pillarBottom];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gameOver</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  status.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> GameStatus.over;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clearPillars</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  scene.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(bird);</span></span>
<span class="line"><span style="color:#24292E;">  pillars.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">p</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    scene.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(p[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">    scene.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(p[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">]);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  pillars </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clickBird</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">e</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  e.</span><span style="color:#6F42C1;">preventDefault</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  v0 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">V0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  s0 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> bird.position.y;</span></span>
<span class="line"><span style="color:#24292E;">  t0 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">start</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">clearPillars</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reloadBird</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  status.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> GameStatus.gaming;</span></span>
<span class="line"><span style="color:#24292E;">  bird.position.y </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  startTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  t0 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">runtime</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (status.value </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> GameStatus.gaming) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  gameTime </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> startTime;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">renderPillars</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">computeBirdPosition</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">checkCrash</span><span style="color:#24292E;">()) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gameOver</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  screenRef.value.</span><span style="color:#6F42C1;">appendChild</span><span style="color:#24292E;">(renderer.domElement);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">runtime</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">requestAnimationFrame</span><span style="color:#24292E;">(render);</span></span>
<span class="line"><span style="color:#24292E;">  renderer.</span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">(scene, camera);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// script end</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.fly-bird</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.score</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">40</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">70</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">right</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">border-radius</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">solid</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">center</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-weight</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">bold</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#1a1a1a</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br></div></div>`,4),cy=JSON.parse('{"title":"飞翔的小鸟-3d","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"games/fly-bird.md","filePath":"games/fly-bird.md"}'),ry={name:"games/fly-bird.md"},py=Object.assign(ry,{setup(r){return(e,t)=>{const n=An("ClientOnly");return wi(),Ci("div",null,[sy,Rt(n,null,{default:dn(()=>[Rt(Zm)]),_:1}),ay,Rt(n,null,{default:dn(()=>[Rt(ny)]),_:1}),iy])}}});export{cy as __pageData,py as default};
