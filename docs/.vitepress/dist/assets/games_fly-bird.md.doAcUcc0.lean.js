import{G as bn,S as vl}from"./chunks/start-over-mask.4OJQFRBA.js";import{a0 as Ao,r as hi,w as bl,o as To,j as Dn,k as Sa,p as wa,v as ti,m as Si,y as fa,n as nn,z as Ya,e as Fo,a6 as Ml,a7 as Sl,Q as Ca}from"./chunks/framework.Cg7Czl7i.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="148",Bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wl=0,Za=1,Cl=2,Do=1,Lo=2,Mn=3,Ai=0,It=1,Ta=2,Hn=3,di=0,sn=1,$a=2,Ka=3,Ja=4,Al=5,Qi=100,Tl=101,Fl=102,Qa=103,er=104,Dl=200,Ll=201,Pl=202,Rl=203,Po=204,Ro=205,Il=206,Bl=207,Nl=208,Ol=209,Ul=210,zl=0,Vl=1,Gl=2,ma=3,Hl=4,Wl=5,ql=6,Xl=7,ys=0,jl=1,Yl=2,ii=0,Zl=1,$l=2,Kl=3,Jl=4,Ql=5,Io=300,rn=301,on=302,us=303,ga=304,Es=306,Ln=1e3,St=1001,ka=1002,rt=1003,tr=1004,Ts=1005,Ft=1006,eh=1007,Pn=1008,Ti=1009,th=1010,ih=1011,Bo=1012,nh=1013,Mi=1014,ci=1015,Rn=1016,sh=1017,ah=1018,an=1020,rh=1021,oh=1022,Dt=1023,lh=1024,hh=1025,wi=1026,ln=1027,ch=1028,ph=1029,dh=1030,uh=1031,fh=1033,Fs=33776,Ds=33777,Ls=33778,Ps=33779,ir=35840,nr=35841,sr=35842,ar=35843,mh=36196,rr=37492,or=37496,lr=37808,hr=37809,cr=37810,pr=37811,dr=37812,ur=37813,fr=37814,mr=37815,gr=37816,kr=37817,yr=37818,Er=37819,_r=37820,xr=37821,vr=36492,fs=2300,ms=2301,Rs=2302,br=2400,Mr=2401,Sr=2402,gh=2500,Fi=3e3,Ve=3001,kh=3200,yh=3201,Fa=0,Eh=1,Vt="srgb",In="srgb-linear",Is=7680,_h=519,wr=35044,Cr="300 es",ya=1035;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ar=1234567;const Cn=Math.PI/180,Bn=180/Math.PI;function ui(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function Da(r,e){return(r%e+e)%e}function xh(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function vh(r,e,t){return r!==e?(t-r)/(e-r):0}function An(r,e,t){return(1-t)*r+t*e}function bh(r,e,t,i){return An(r,e,1-Math.exp(-t*i))}function Mh(r,e=1){return e-Math.abs(Da(r,e*2)-e)}function Sh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function wh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ch(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ah(r,e){return r+Math.random()*(e-r)}function Th(r){return r*(.5-Math.random())}function Fh(r){r!==void 0&&(Ar=r);let e=Ar+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dh(r){return r*Cn}function Lh(r){return r*Bn}function Ea(r){return(r&r-1)===0&&r!==0}function No(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function gs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ph(r,e,t,i,n){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),h=s((e+i)/2),p=o((e+i)/2),c=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":r.set(a*p,l*c,l*d,a*h);break;case"YZY":r.set(l*d,a*p,l*c,a*h);break;case"ZXZ":r.set(l*c,l*d,a*p,a*h);break;case"XZX":r.set(a*p,l*g,l*f,a*h);break;case"YXY":r.set(l*f,a*p,l*g,a*h);break;case"ZYZ":r.set(l*g,l*f,a*p,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function kt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ht=Object.freeze({__proto__:null,DEG2RAD:Cn,RAD2DEG:Bn,generateUUID:ui,clamp:ot,euclideanModulo:Da,mapLinear:xh,inverseLerp:vh,lerp:An,damp:bh,pingpong:Mh,smoothstep:Sh,smootherstep:wh,randInt:Ch,randFloat:Ah,randFloatSpread:Th,seededRandom:Fh,degToRad:Dh,radToDeg:Lh,isPowerOfTwo:Ea,ceilPowerOfTwo:No,floorPowerOfTwo:gs,setQuaternionFromProperEuler:Ph,normalize:kt,denormalize:Sn});class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,o,a,l,h){const p=this.elements;return p[0]=e,p[1]=n,p[2]=a,p[3]=t,p[4]=s,p[5]=l,p[6]=i,p[7]=o,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],p=i[4],c=i[7],d=i[2],f=i[5],g=i[8],m=n[0],u=n[3],y=n[6],M=n[1],E=n[4],x=n[7],b=n[2],A=n[5],P=n[8];return s[0]=o*m+a*M+l*b,s[3]=o*u+a*E+l*A,s[6]=o*y+a*x+l*P,s[1]=h*m+p*M+c*b,s[4]=h*u+p*E+c*A,s[7]=h*y+p*x+c*P,s[2]=d*m+f*M+g*b,s[5]=d*u+f*E+g*A,s[8]=d*y+f*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],p=e[8];return t*o*p-t*a*h-i*s*p+i*a*l+n*s*h-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],p=e[8],c=p*o-a*h,d=a*l-p*s,f=h*s-o*l,g=t*c+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=c*m,e[1]=(n*h-p*i)*m,e[2]=(a*i-n*o)*m,e[3]=d*m,e[4]=(p*t-n*l)*m,e[5]=(n*s-a*t)*m,e[6]=f*m,e[7]=(i*l-h*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*o+h*a)+o+e,-n*h,n*l,-n*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bs.makeScale(e,t)),this}rotate(e){return this.premultiply(Bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bs.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new _t;function Oo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Nn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ci(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ns={[Vt]:{[In]:Ci},[In]:{[Vt]:ps}},ft={legacyMode:!0,get workingColorSpace(){return In},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ns[e]&&Ns[e][t]!==void 0){const i=Ns[e][t];return r.r=i(r.r),r.g=i(r.g),r.b=i(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},Bt={h:0,s:0,l:0},Wn={h:0,s:0,l:0};function Os(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function qn(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=ft.workingColorSpace){if(e=Da(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Os(o,s,e+1/3),this.g=Os(o,s,e),this.b=Os(o,s,e-1/3)}return ft.toWorkingColorSpace(this,n),this}setStyle(e,t=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ft.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ft.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,h=parseFloat(s[2])/100,p=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,h,p,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ft.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ft.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Vt){const i=Uo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ft.fromWorkingColorSpace(qn(this,et),e),ot(et.r*255,0,255)<<16^ot(et.g*255,0,255)<<8^ot(et.b*255,0,255)<<0}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(qn(this,et),t);const i=et.r,n=et.g,s=et.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,h;const p=(a+o)/2;if(a===o)l=0,h=0;else{const c=o-a;switch(h=p<=.5?c/(o+a):c/(2-o-a),o){case i:l=(n-s)/c+(n<s?6:0);break;case n:l=(s-i)/c+2;break;case s:l=(i-n)/c+4;break}l/=6}return e.h=l,e.s=h,e.l=p,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(qn(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e=Vt){return ft.fromWorkingColorSpace(qn(this,et),e),e!==Vt?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${et.r*255|0},${et.g*255|0},${et.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=i,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(Wn);const i=An(Bt.h,Wn.h,t),n=An(Bt.s,Wn.s,t),s=An(Bt.l,Wn.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ae.NAMES=Uo;let Oi;class zo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=Nn("canvas")),Oi.width=e.width,Oi.height=e.height;const i=Oi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Ci(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vo{constructor(e=null){this.isSource=!0,this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Us(n[o].image)):s.push(Us(n[o]))}else s=Us(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Us(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rh=0;class lt extends Ri{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,i=St,n=St,s=Ft,o=Pn,a=Dt,l=Ti,h=lt.DEFAULT_ANISOTROPY,p=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ui(),this.name="",this.source=new Vo(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Io)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case St:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case St:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}lt.DEFAULT_IMAGE=null;lt.DEFAULT_MAPPING=Io;lt.DEFAULT_ANISOTROPY=1;class Oe{constructor(e=0,t=0,i=0,n=1){Oe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,h=l[0],p=l[4],c=l[8],d=l[1],f=l[5],g=l[9],m=l[2],u=l[6],y=l[10];if(Math.abs(p-d)<.01&&Math.abs(c-m)<.01&&Math.abs(g-u)<.01){if(Math.abs(p+d)<.1&&Math.abs(c+m)<.1&&Math.abs(g+u)<.1&&Math.abs(h+f+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,x=(f+1)/2,b=(y+1)/2,A=(p+d)/4,P=(c+m)/4,k=(g+u)/4;return E>x&&E>b?E<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(E),n=A/i,s=P/i):x>b?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=A/n,s=k/n):b<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),i=P/s,n=k/s),this.set(i,n,s,t),this}let M=Math.sqrt((u-g)*(u-g)+(c-m)*(c-m)+(d-p)*(d-p));return Math.abs(M)<.001&&(M=1),this.x=(u-g)/M,this.y=(c-m)/M,this.z=(d-p)/M,this.w=Math.acos((h+f+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Di extends Ri{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Oe(0,0,e,t),this.scissorTest=!1,this.viewport=new Oe(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new lt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ft,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Go extends lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=rt,this.minFilter=rt,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ih extends lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=rt,this.minFilter=rt,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],h=i[n+1],p=i[n+2],c=i[n+3];const d=s[o+0],f=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=p,e[t+3]=c;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(c!==m||l!==d||h!==f||p!==g){let u=1-a;const y=l*d+h*f+p*g+c*m,M=y>=0?1:-1,E=1-y*y;if(E>Number.EPSILON){const b=Math.sqrt(E),A=Math.atan2(b,y*M);u=Math.sin(u*A)/b,a=Math.sin(a*A)/b}const x=a*M;if(l=l*u+d*x,h=h*u+f*x,p=p*u+g*x,c=c*u+m*x,u===1-a){const b=1/Math.sqrt(l*l+h*h+p*p+c*c);l*=b,h*=b,p*=b,c*=b}}e[t]=l,e[t+1]=h,e[t+2]=p,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],h=i[n+2],p=i[n+3],c=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+p*c+l*f-h*d,e[t+1]=l*g+p*d+h*c-a*f,e[t+2]=h*g+p*f+a*d-l*c,e[t+3]=p*g-a*c-l*d-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(i/2),p=a(n/2),c=a(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(o){case"XYZ":this._x=d*p*c+h*f*g,this._y=h*f*c-d*p*g,this._z=h*p*g+d*f*c,this._w=h*p*c-d*f*g;break;case"YXZ":this._x=d*p*c+h*f*g,this._y=h*f*c-d*p*g,this._z=h*p*g-d*f*c,this._w=h*p*c+d*f*g;break;case"ZXY":this._x=d*p*c-h*f*g,this._y=h*f*c+d*p*g,this._z=h*p*g+d*f*c,this._w=h*p*c-d*f*g;break;case"ZYX":this._x=d*p*c-h*f*g,this._y=h*f*c+d*p*g,this._z=h*p*g-d*f*c,this._w=h*p*c+d*f*g;break;case"YZX":this._x=d*p*c+h*f*g,this._y=h*f*c+d*p*g,this._z=h*p*g-d*f*c,this._w=h*p*c-d*f*g;break;case"XZY":this._x=d*p*c-h*f*g,this._y=h*f*c-d*p*g,this._z=h*p*g+d*f*c,this._w=h*p*c+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],h=t[2],p=t[6],c=t[10],d=i+a+c;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(p-l)*f,this._y=(s-h)*f,this._z=(o-n)*f}else if(i>a&&i>c){const f=2*Math.sqrt(1+i-a-c);this._w=(p-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+h)/f}else if(a>c){const f=2*Math.sqrt(1+a-i-c);this._w=(s-h)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+p)/f}else{const f=2*Math.sqrt(1+c-i-a);this._w=(o-n)/f,this._x=(s+h)/f,this._y=(l+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,h=t._z,p=t._w;return this._x=i*p+o*a+n*h-s*l,this._y=n*p+o*l+s*a-i*h,this._z=s*p+o*h+i*l-n*a,this._w=o*p-i*a-n*l-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),p=Math.atan2(h,a),c=Math.sin((1-t)*p)/h,d=Math.sin(t*p)/h;return this._w=o*c+this._w*d,this._x=i*c+this._x*d,this._y=n*c+this._y*d,this._z=s*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,h=l*t+o*n-a*i,p=l*i+a*t-s*n,c=l*n+s*i-o*t,d=-s*t-o*i-a*n;return this.x=h*l+d*-s+p*-a-c*-o,this.y=p*l+d*-o+c*-s-h*-a,this.z=c*l+d*-a+h*-o-p*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new F,Tr=new Pt;class Vn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,h=e.length;l<h;l+=3){const p=e[l],c=e[l+1],d=e[l+2];p<t&&(t=p),c<i&&(i=c),d<n&&(n=d),p>s&&(s=p),c>o&&(o=c),d>a&&(a=d)}return this.min.set(t,i,n),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,h=e.count;l<h;l++){const p=e.getX(l),c=e.getY(l),d=e.getZ(l);p<t&&(t=p),c<i&&(i=c),d<n&&(n=d),p>s&&(s=p),c>o&&(o=c),d>a&&(a=d)}return this.min.set(t,i,n),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)yi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(yi)}else i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox),Vs.applyMatrix4(e.matrixWorld),this.union(Vs);const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mn),Xn.subVectors(this.max,mn),Ui.subVectors(e.a,mn),zi.subVectors(e.b,mn),Vi.subVectors(e.c,mn),ni.subVectors(zi,Ui),si.subVectors(Vi,zi),Ei.subVectors(Ui,Vi);let t=[0,-ni.z,ni.y,0,-si.z,si.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,si.z,0,-si.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-si.y,si.x,0,-Ei.y,Ei.x,0];return!Gs(t,Ui,zi,Vi,Xn)||(t=[1,0,0,0,1,0,0,0,1],!Gs(t,Ui,zi,Vi,Xn))?!1:(jn.crossVectors(ni,si),t=[jn.x,jn.y,jn.z],Gs(t,Ui,zi,Vi,Xn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yt=[new F,new F,new F,new F,new F,new F,new F,new F],yi=new F,Vs=new Vn,Ui=new F,zi=new F,Vi=new F,ni=new F,si=new F,Ei=new F,mn=new F,Xn=new F,jn=new F,_i=new F;function Gs(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){_i.fromArray(r,s);const a=n.x*Math.abs(_i.x)+n.y*Math.abs(_i.y)+n.z*Math.abs(_i.z),l=e.dot(_i),h=t.dot(_i),p=i.dot(_i);if(Math.max(-Math.max(l,h,p),Math.min(l,h,p))>a)return!1}return!0}const Bh=new Vn,gn=new F,Hs=new F;class _s{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Bh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gn.subVectors(e,this.center);const t=gn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(gn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gn.copy(e.center).add(Hs)),this.expandByPoint(gn.copy(e.center).sub(Hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new F,Ws=new F,Yn=new F,ai=new F,qs=new F,Zn=new F,Xs=new F;class Ho{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.direction).multiplyScalar(t).add(this.origin),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ws.copy(e).add(t).multiplyScalar(.5),Yn.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Ws);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yn),a=ai.dot(this.direction),l=-ai.dot(Yn),h=ai.lengthSq(),p=Math.abs(1-o*o);let c,d,f,g;if(p>0)if(c=o*l-a,d=o*a-l,g=s*p,c>=0)if(d>=-g)if(d<=g){const m=1/p;c*=m,d*=m,f=c*(c+o*d+2*a)+d*(o*c+d+2*l)+h}else d=s,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;else d=-s,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;else d<=-g?(c=Math.max(0,-(-o*s+a)),d=c>0?-s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h):d<=g?(c=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+h):(c=Math.max(0,-(o*s+a)),d=c>0?s:Math.min(Math.max(-s,-l),s),f=-c*c+d*(d+2*l)+h);else d=o>0?-s:s,c=Math.max(0,-(o*d+a)),f=-c*c+d*(d+2*l)+h;return i&&i.copy(this.direction).multiplyScalar(c).add(this.origin),n&&n.copy(Yn).multiplyScalar(d).add(Ws),f}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const i=Zt.dot(this.direction),n=Zt.dot(Zt)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const h=1/this.direction.x,p=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,n=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,n=(e.min.x-d.x)*h),p>=0?(s=(e.min.y-d.y)*p,o=(e.max.y-d.y)*p):(s=(e.max.y-d.y)*p,o=(e.min.y-d.y)*p),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),c>=0?(a=(e.min.z-d.z)*c,l=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,l=(e.min.z-d.z)*c),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,i,n,s){qs.subVectors(t,e),Zn.subVectors(i,e),Xs.crossVectors(qs,Zn);let o=this.direction.dot(Xs),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const l=a*this.direction.dot(Zn.crossVectors(ai,Zn));if(l<0)return null;const h=a*this.direction.dot(qs.cross(ai));if(h<0||l+h>o)return null;const p=-a*ai.dot(Xs);return p<0?null:this.at(p/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,o,a,l,h,p,c,d,f,g,m,u){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=n,y[1]=s,y[5]=o,y[9]=a,y[13]=l,y[2]=h,y[6]=p,y[10]=c,y[14]=d,y[3]=f,y[7]=g,y[11]=m,y[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),h=Math.sin(n),p=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const d=o*p,f=o*c,g=a*p,m=a*c;t[0]=l*p,t[4]=-l*c,t[8]=h,t[1]=f+g*h,t[5]=d-m*h,t[9]=-a*l,t[2]=m-d*h,t[6]=g+f*h,t[10]=o*l}else if(e.order==="YXZ"){const d=l*p,f=l*c,g=h*p,m=h*c;t[0]=d+m*a,t[4]=g*a-f,t[8]=o*h,t[1]=o*c,t[5]=o*p,t[9]=-a,t[2]=f*a-g,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*p,f=l*c,g=h*p,m=h*c;t[0]=d-m*a,t[4]=-o*c,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*p,t[9]=m-d*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*p,f=o*c,g=a*p,m=a*c;t[0]=l*p,t[4]=g*h-f,t[8]=d*h+m,t[1]=l*c,t[5]=m*h+d,t[9]=f*h-g,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*h,g=a*l,m=a*h;t[0]=l*p,t[4]=m-d*c,t[8]=g*c+f,t[1]=c,t[5]=o*p,t[9]=-a*p,t[2]=-h*p,t[6]=f*c+g,t[10]=d-m*c}else if(e.order==="XZY"){const d=o*l,f=o*h,g=a*l,m=a*h;t[0]=l*p,t[4]=-c,t[8]=h*p,t[1]=d*c+m,t[5]=o*p,t[9]=f*c-g,t[2]=g*c-f,t[6]=a*p,t[10]=m*c+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nh,e,Oh)}lookAt(e,t,i){const n=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),ri.crossVectors(i,bt),ri.lengthSq()===0&&(Math.abs(i.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),ri.crossVectors(i,bt)),ri.normalize(),$n.crossVectors(bt,ri),n[0]=ri.x,n[4]=$n.x,n[8]=bt.x,n[1]=ri.y,n[5]=$n.y,n[9]=bt.y,n[2]=ri.z,n[6]=$n.z,n[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],p=i[1],c=i[5],d=i[9],f=i[13],g=i[2],m=i[6],u=i[10],y=i[14],M=i[3],E=i[7],x=i[11],b=i[15],A=n[0],P=n[4],k=n[8],C=n[12],D=n[1],X=n[5],$=n[9],B=n[13],L=n[2],V=n[6],Y=n[10],K=n[14],q=n[3],J=n[7],Z=n[11],U=n[15];return s[0]=o*A+a*D+l*L+h*q,s[4]=o*P+a*X+l*V+h*J,s[8]=o*k+a*$+l*Y+h*Z,s[12]=o*C+a*B+l*K+h*U,s[1]=p*A+c*D+d*L+f*q,s[5]=p*P+c*X+d*V+f*J,s[9]=p*k+c*$+d*Y+f*Z,s[13]=p*C+c*B+d*K+f*U,s[2]=g*A+m*D+u*L+y*q,s[6]=g*P+m*X+u*V+y*J,s[10]=g*k+m*$+u*Y+y*Z,s[14]=g*C+m*B+u*K+y*U,s[3]=M*A+E*D+x*L+b*q,s[7]=M*P+E*X+x*V+b*J,s[11]=M*k+E*$+x*Y+b*Z,s[15]=M*C+E*B+x*K+b*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],h=e[13],p=e[2],c=e[6],d=e[10],f=e[14],g=e[3],m=e[7],u=e[11],y=e[15];return g*(+s*l*c-n*h*c-s*a*d+i*h*d+n*a*f-i*l*f)+m*(+t*l*f-t*h*d+s*o*d-n*o*f+n*h*p-s*l*p)+u*(+t*h*c-t*a*f-s*o*c+i*o*f+s*a*p-i*h*p)+y*(-n*a*p-t*l*c+t*a*d+n*o*c-i*o*d+i*l*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],h=e[7],p=e[8],c=e[9],d=e[10],f=e[11],g=e[12],m=e[13],u=e[14],y=e[15],M=c*u*h-m*d*h+m*l*f-a*u*f-c*l*y+a*d*y,E=g*d*h-p*u*h-g*l*f+o*u*f+p*l*y-o*d*y,x=p*m*h-g*c*h+g*a*f-o*m*f-p*a*y+o*c*y,b=g*c*l-p*m*l-g*a*d+o*m*d+p*a*u-o*c*u,A=t*M+i*E+n*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=M*P,e[1]=(m*d*s-c*u*s-m*n*f+i*u*f+c*n*y-i*d*y)*P,e[2]=(a*u*s-m*l*s+m*n*h-i*u*h-a*n*y+i*l*y)*P,e[3]=(c*l*s-a*d*s-c*n*h+i*d*h+a*n*f-i*l*f)*P,e[4]=E*P,e[5]=(p*u*s-g*d*s+g*n*f-t*u*f-p*n*y+t*d*y)*P,e[6]=(g*l*s-o*u*s-g*n*h+t*u*h+o*n*y-t*l*y)*P,e[7]=(o*d*s-p*l*s+p*n*h-t*d*h-o*n*f+t*l*f)*P,e[8]=x*P,e[9]=(g*c*s-p*m*s-g*i*f+t*m*f+p*i*y-t*c*y)*P,e[10]=(o*m*s-g*a*s+g*i*h-t*m*h-o*i*y+t*a*y)*P,e[11]=(p*a*s-o*c*s-p*i*h+t*c*h+o*i*f-t*a*f)*P,e[12]=b*P,e[13]=(p*m*n-g*c*n+g*i*d-t*m*d-p*i*u+t*c*u)*P,e[14]=(g*a*n-o*m*n-g*i*l+t*m*l+o*i*u-t*a*u)*P,e[15]=(o*c*n-p*a*n+p*i*l-t*c*l-o*i*d+t*a*d)*P,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,h=s*o,p=s*a;return this.set(h*o+i,h*a-n*l,h*l+n*a,0,h*a+n*l,p*a+i,p*l-n*o,0,h*l-n*a,p*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,h=s+s,p=o+o,c=a+a,d=s*h,f=s*p,g=s*c,m=o*p,u=o*c,y=a*c,M=l*h,E=l*p,x=l*c,b=i.x,A=i.y,P=i.z;return n[0]=(1-(m+y))*b,n[1]=(f+x)*b,n[2]=(g-E)*b,n[3]=0,n[4]=(f-x)*A,n[5]=(1-(d+y))*A,n[6]=(u+M)*A,n[7]=0,n[8]=(g+E)*P,n[9]=(u-M)*P,n[10]=(1-(d+m))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Gi.set(n[0],n[1],n[2]).length();const o=Gi.set(n[4],n[5],n[6]).length(),a=Gi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Nt.copy(this);const h=1/s,p=1/o,c=1/a;return Nt.elements[0]*=h,Nt.elements[1]*=h,Nt.elements[2]*=h,Nt.elements[4]*=p,Nt.elements[5]*=p,Nt.elements[6]*=p,Nt.elements[8]*=c,Nt.elements[9]*=c,Nt.elements[10]*=c,t.setFromRotationMatrix(Nt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o){const a=this.elements,l=2*s/(t-e),h=2*s/(i-n),p=(t+e)/(t-e),c=(i+n)/(i-n),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=p,a[12]=0,a[1]=0,a[5]=h,a[9]=c,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,s,o){const a=this.elements,l=1/(t-e),h=1/(i-n),p=1/(o-s),c=(t+e)*l,d=(i+n)*h,f=(o+s)*p;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-c,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*p,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Gi=new F,Nt=new _e,Nh=new F(0,0,0),Oh=new F(1,1,1),ri=new F,$n=new F,bt=new F,Fr=new _e,Dr=new Pt;class wt{constructor(e=0,t=0,i=0,n=wt.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],h=n[5],p=n[9],c=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-p,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fr,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dr.setFromEuler(this),this.setFromQuaternion(Dr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}wt.DefaultOrder="XYZ";wt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uh=0;const Lr=new F,Hi=new Pt,$t=new _e,Kn=new F,kn=new F,zh=new F,Vh=new Pt,Pr=new F(1,0,0),Rr=new F(0,1,0),Ir=new F(0,0,1),Gh={type:"added"},Br={type:"removed"};class Xe extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DefaultUp.clone();const e=new F,t=new wt,i=new Pt,n=new F(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new _e},normalMatrix:{value:new _t}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Xe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Xe.DefaultMatrixWorldAutoUpdate,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Pr,e)}rotateY(e){return this.rotateOnAxis(Rr,e)}rotateZ(e){return this.rotateOnAxis(Ir,e)}translateOnAxis(e,t){return Lr.copy(e).applyQuaternion(this.quaternion),this.position.add(Lr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pr,e)}translateY(e){return this.translateOnAxis(Rr,e)}translateZ(e){return this.translateOnAxis(Ir,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kn.copy(e):Kn.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(kn,Kn,this.up):$t.lookAt(Kn,kn,this.up),this.quaternion.setFromRotationMatrix($t),n&&($t.extractRotation(n.matrixWorld),Hi.setFromRotationMatrix($t),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Br)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Br)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kn,e,zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kn,Vh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,p=l.length;h<p;h++){const c=l[h];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),p=o(e.images),c=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const h in a){const p=a[h];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Xe.DefaultUp=new F(0,1,0);Xe.DefaultMatrixAutoUpdate=!0;Xe.DefaultMatrixWorldAutoUpdate=!0;const Ot=new F,Kt=new F,js=new F,Jt=new F,Wi=new F,qi=new F,Nr=new F,Ys=new F,Zs=new F,$s=new F;class ei{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ot.subVectors(e,t),n.cross(Ot);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ot.subVectors(n,t),Kt.subVectors(i,t),js.subVectors(e,t);const o=Ot.dot(Ot),a=Ot.dot(Kt),l=Ot.dot(js),h=Kt.dot(Kt),p=Kt.dot(js),c=o*h-a*a;if(c===0)return s.set(-2,-1,-1);const d=1/c,f=(h*l-a*p)*d,g=(o*p-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Jt),Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,Jt),l.set(0,0),l.addScaledVector(s,Jt.x),l.addScaledVector(o,Jt.y),l.addScaledVector(a,Jt.z),l}static isFrontFacing(e,t,i,n){return Ot.subVectors(i,t),Kt.subVectors(e,t),Ot.cross(Kt).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Ot.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return ei.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;Wi.subVectors(n,i),qi.subVectors(s,i),Ys.subVectors(e,i);const l=Wi.dot(Ys),h=qi.dot(Ys);if(l<=0&&h<=0)return t.copy(i);Zs.subVectors(e,n);const p=Wi.dot(Zs),c=qi.dot(Zs);if(p>=0&&c<=p)return t.copy(n);const d=l*c-p*h;if(d<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(Wi,o);$s.subVectors(e,s);const f=Wi.dot($s),g=qi.dot($s);if(g>=0&&f<=g)return t.copy(s);const m=f*h-l*g;if(m<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(i).addScaledVector(qi,a);const u=p*g-f*c;if(u<=0&&c-p>=0&&f-g>=0)return Nr.subVectors(s,n),a=(c-p)/(c-p+(f-g)),t.copy(n).addScaledVector(Nr,a);const y=1/(u+m+d);return o=m*y,a=d*y,t.copy(i).addScaledVector(Wi,o).addScaledVector(qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hh=0;class Ii extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=sn,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Po,this.blendDst=Ro,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sn&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qo extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new F,Jn=new Me;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix3(e),this.setXY(t,Jn.x,Jn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class La extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xo extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Et extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Wh=0;const Tt=new _e,Ks=new Xe,Xi=new F,Mt=new Vn,yn=new Vn,at=new F;class zt extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oo(e)?Xo:La)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new _t().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tt.makeRotationFromQuaternion(e),this.applyMatrix4(Tt),this}rotateX(e){return Tt.makeRotationX(e),this.applyMatrix4(Tt),this}rotateY(e){return Tt.makeRotationY(e),this.applyMatrix4(Tt),this}rotateZ(e){return Tt.makeRotationZ(e),this.applyMatrix4(Tt),this}translate(e,t,i){return Tt.makeTranslation(e,t,i),this.applyMatrix4(Tt),this}scale(e,t,i){return Tt.makeScale(e,t,i),this.applyMatrix4(Tt),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Mt.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];yn.setFromBufferAttribute(a),this.morphTargetsRelative?(at.addVectors(Mt.min,yn.min),Mt.expandByPoint(at),at.addVectors(Mt.max,yn.max),Mt.expandByPoint(at)):(Mt.expandByPoint(yn.min),Mt.expandByPoint(yn.max))}Mt.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)at.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(at));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let h=0,p=a.count;h<p;h++)at.fromBufferAttribute(a,h),l&&(Xi.fromBufferAttribute(e,h),at.add(Xi)),n=Math.max(n,i.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,h=[],p=[];for(let D=0;D<a;D++)h[D]=new F,p[D]=new F;const c=new F,d=new F,f=new F,g=new Me,m=new Me,u=new Me,y=new F,M=new F;function E(D,X,$){c.fromArray(n,D*3),d.fromArray(n,X*3),f.fromArray(n,$*3),g.fromArray(o,D*2),m.fromArray(o,X*2),u.fromArray(o,$*2),d.sub(c),f.sub(c),m.sub(g),u.sub(g);const B=1/(m.x*u.y-u.x*m.y);isFinite(B)&&(y.copy(d).multiplyScalar(u.y).addScaledVector(f,-m.y).multiplyScalar(B),M.copy(f).multiplyScalar(m.x).addScaledVector(d,-u.x).multiplyScalar(B),h[D].add(y),h[X].add(y),h[$].add(y),p[D].add(M),p[X].add(M),p[$].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let D=0,X=x.length;D<X;++D){const $=x[D],B=$.start,L=$.count;for(let V=B,Y=B+L;V<Y;V+=3)E(i[V+0],i[V+1],i[V+2])}const b=new F,A=new F,P=new F,k=new F;function C(D){P.fromArray(s,D*3),k.copy(P);const X=h[D];b.copy(X),b.sub(P.multiplyScalar(P.dot(X))).normalize(),A.crossVectors(k,X);const B=A.dot(p[D])<0?-1:1;l[D*4]=b.x,l[D*4+1]=b.y,l[D*4+2]=b.z,l[D*4+3]=B}for(let D=0,X=x.length;D<X;++D){const $=x[D],B=$.start,L=$.count;for(let V=B,Y=B+L;V<Y;V+=3)C(i[V+0]),C(i[V+1]),C(i[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new F,s=new F,o=new F,a=new F,l=new F,h=new F,p=new F,c=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),m=e.getX(d+1),u=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,u),p.subVectors(o,s),c.subVectors(n,s),p.cross(c),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),h.fromBufferAttribute(i,u),a.add(p),l.add(p),h.add(p),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(u,h.x,h.y,h.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),p.subVectors(o,s),c.subVectors(n,s),p.cross(c),i.setXYZ(d+0,p.x,p.y,p.z),i.setXYZ(d+1,p.x,p.y,p.z),i.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(a,l){const h=a.array,p=a.itemSize,c=a.normalized,d=new h.constructor(l.length*p);let f=0,g=0;for(let m=0,u=l.length;m<u;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*p;for(let y=0;y<p;y++)d[g++]=h[f++]}return new Wt(d,p,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],h=e(l,i);t.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const l=[],h=s[a];for(let p=0,c=h.length;p<c;p++){const d=h[p],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],p=[];for(let c=0,d=h.length;c<d;c++){const f=h[c];p.push(f.toJSON(e.data))}p.length>0&&(n[l]=p,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const h in n){const p=n[h];this.setAttribute(h,p.clone(t))}const s=e.morphAttributes;for(const h in s){const p=[],c=s[h];for(let d=0,f=c.length;d<f;d++)p.push(c[d].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,p=o.length;h<p;h++){const c=o[h];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Or=new _e,ji=new Ho,Js=new _s,En=new F,_n=new F,xn=new F,Qs=new F,Qn=new F,es=new Me,ts=new Me,is=new Me,ea=new F,ns=new F;class Rt extends Xe{constructor(e=new zt,t=new qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){Qn.set(0,0,0);for(let l=0,h=s.length;l<h;l++){const p=a[l],c=s[l];p!==0&&(Qs.fromBufferAttribute(c,e),o?Qn.addScaledVector(Qs,p):Qn.addScaledVector(Qs.sub(t),p))}t.add(Qn)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(s),e.ray.intersectsSphere(Js)===!1)||(Or.copy(s).invert(),ji.copy(e.ray).applyMatrix4(Or),i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,h=i.attributes.uv,p=i.attributes.uv2,c=i.groups,d=i.drawRange;if(a!==null)if(Array.isArray(n))for(let f=0,g=c.length;f<g;f++){const m=c[f],u=n[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,x=M;E<x;E+=3){const b=a.getX(E),A=a.getX(E+1),P=a.getX(E+2);o=ss(this,u,e,ji,h,p,b,A,P),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const f=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=f,u=g;m<u;m+=3){const y=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);o=ss(this,n,e,ji,h,p,y,M,E),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(n))for(let f=0,g=c.length;f<g;f++){const m=c[f],u=n[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=y,x=M;E<x;E+=3){const b=E,A=E+1,P=E+2;o=ss(this,u,e,ji,h,p,b,A,P),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const f=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=f,u=g;m<u;m+=3){const y=m,M=m+1,E=m+2;o=ss(this,n,e,ji,h,p,y,M,E),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function qh(r,e,t,i,n,s,o,a){let l;if(e.side===It?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===Ai,a),l===null)return null;ns.copy(a),ns.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(ns);return h<t.near||h>t.far?null:{distance:h,point:ns.clone(),object:r}}function ss(r,e,t,i,n,s,o,a,l){r.getVertexPosition(o,En),r.getVertexPosition(a,_n),r.getVertexPosition(l,xn);const h=qh(r,e,t,i,En,_n,xn,ea);if(h){n&&(es.fromBufferAttribute(n,o),ts.fromBufferAttribute(n,a),is.fromBufferAttribute(n,l),h.uv=ei.getUV(ea,En,_n,xn,es,ts,is,new Me)),s&&(es.fromBufferAttribute(s,o),ts.fromBufferAttribute(s,a),is.fromBufferAttribute(s,l),h.uv2=ei.getUV(ea,En,_n,xn,es,ts,is,new Me));const p={a:o,b:a,c:l,normal:new F,materialIndex:0};ei.getNormal(En,_n,xn,p.normal),h.face=p}return h}class Li extends zt{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],h=[],p=[],c=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(p,3)),this.setAttribute("uv",new Et(c,2));function g(m,u,y,M,E,x,b,A,P,k,C){const D=x/P,X=b/k,$=x/2,B=b/2,L=A/2,V=P+1,Y=k+1;let K=0,q=0;const J=new F;for(let Z=0;Z<Y;Z++){const U=Z*X-B;for(let O=0;O<V;O++){const ie=O*D-$;J[m]=ie*M,J[u]=U*E,J[y]=L,h.push(J.x,J.y,J.z),J[m]=0,J[u]=0,J[y]=A>0?1:-1,p.push(J.x,J.y,J.z),c.push(O/P),c.push(1-Z/k),K+=1}}for(let Z=0;Z<k;Z++)for(let U=0;U<P;U++){const O=d+U+V*Z,ie=d+U+V*(Z+1),ee=d+(U+1)+V*(Z+1),ae=d+(U+1)+V*Z;l.push(O,ie,ae),l.push(ie,ee,ae),q+=6}a.addGroup(f,q,C),f+=q,d+=K}}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function mt(r){const e={};for(let t=0;t<r.length;t++){const i=hn(r[t]);for(const n in i)e[n]=i[n]}return e}function Xh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function jo(r){return r.getRenderTarget()===null&&r.outputEncoding===Ve?Vt:In}const jh={clone:hn,merge:mt};var Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=Zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hn(e.uniforms),this.uniformsGroups=Xh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yo extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pt extends Yo{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bn*2*Math.atan(Math.tan(Cn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/h,n*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,Zi=1;class $h extends Xe{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new pt(Yi,Zi,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new pt(Yi,Zi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new pt(Yi,Zi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new pt(Yi,Zi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new pt(Yi,Zi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const h=new pt(Yi,Zi,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,o,a,l,h]=this.children,p=e.getRenderTarget(),c=e.toneMapping,d=e.xr.enabled;e.toneMapping=ii,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(p),e.toneMapping=c,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Zo extends lt{constructor(e,t,i,n,s,o,a,l,h,p){e=e!==void 0?e:[],t=t!==void 0?t:rn,super(e,t,i,n,s,o,a,l,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kh extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Zo(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Li(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:hn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:di});s.uniforms.tEquirect.value=t;const o=new Rt(n,s),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Ft),new $h(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const ta=new F,Jh=new F,Qh=new _t;class xi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ta.subVectors(i,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(ta),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Qh.getNormalMatrix(e),n=this.coplanarPoint(ta).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new _s,as=new F;class Pa{constructor(e=new xi,t=new xi,i=new xi,n=new xi,s=new xi,o=new xi){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],o=i[2],a=i[3],l=i[4],h=i[5],p=i[6],c=i[7],d=i[8],f=i[9],g=i[10],m=i[11],u=i[12],y=i[13],M=i[14],E=i[15];return t[0].setComponents(a-n,c-l,m-d,E-u).normalize(),t[1].setComponents(a+n,c+l,m+d,E+u).normalize(),t[2].setComponents(a+s,c+h,m+f,E+y).normalize(),t[3].setComponents(a-s,c-h,m-f,E-y).normalize(),t[4].setComponents(a-o,c-p,m-g,E-M).normalize(),t[5].setComponents(a+o,c+p,m+g,E+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSprite(e){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(as.x=n.normal.x>0?e.max.x:e.min.x,as.y=n.normal.y>0?e.max.y:e.min.y,as.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $o(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ec(r,e){const t=e.isWebGL2,i=new WeakMap;function n(h,p){const c=h.array,d=h.usage,f=r.createBuffer();r.bindBuffer(p,f),r.bufferData(p,c,d),h.onUploadCallback();let g;if(c instanceof Float32Array)g=5126;else if(c instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(c instanceof Int16Array)g=5122;else if(c instanceof Uint32Array)g=5125;else if(c instanceof Int32Array)g=5124;else if(c instanceof Int8Array)g=5120;else if(c instanceof Uint8Array)g=5121;else if(c instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:h.version}}function s(h,p,c){const d=p.array,f=p.updateRange;r.bindBuffer(c,h),f.count===-1?r.bufferSubData(c,0,d):(t?r.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(c,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(r.deleteBuffer(p.buffer),i.delete(h))}function l(h,p){if(h.isGLBufferAttribute){const d=i.get(h);(!d||d.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const c=i.get(h);c===void 0?i.set(h,n(h,p)):c.version<h.version&&(s(c.buffer,h,p),c.version=h.version)}return{get:o,remove:a,update:l}}class Ra extends zt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),h=a+1,p=l+1,c=e/a,d=t/l,f=[],g=[],m=[],u=[];for(let y=0;y<p;y++){const M=y*d-o;for(let E=0;E<h;E++){const x=E*c-s;g.push(x,-M,0),m.push(0,0,1),u.push(E/a),u.push(1-y/l)}}for(let y=0;y<l;y++)for(let M=0;M<a;M++){const E=M+h*y,x=M+h*(y+1),b=M+1+h*(y+1),A=M+1+h*y;f.push(E,x,A),f.push(x,b,A)}this.setIndex(f),this.setAttribute("position",new Et(g,3)),this.setAttribute("normal",new Et(m,3)),this.setAttribute("uv",new Et(u,2))}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var tc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ac=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oc="vec3 transformed = vec3( position );",lc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,cc=`#ifdef USE_IRIDESCENCE
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
#endif`,pc=`#ifdef USE_BUMPMAP
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
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ec=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_c=`#define PI 3.141592653589793
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
}`,xc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vc=`vec3 transformedNormal = objectNormal;
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
#endif`,bc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Sc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ac=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tc=`#ifdef USE_ENVMAP
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
#endif`,Fc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pc=`#ifdef USE_ENVMAP
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
#endif`,Rc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ic=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oc=`#ifdef USE_GRADIENTMAP
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
}`,Uc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hc=`uniform bool receiveShadow;
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
#endif`,Wc=`#if defined( USE_ENVMAP )
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
#endif`,qc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zc=`PhysicalMaterial material;
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
#endif`,$c=`struct PhysicalMaterial {
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
}`,Kc=`
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
#endif`,Jc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
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
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,mp=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ip=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Up=`#ifdef USE_SKINNING
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
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,jp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Yp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Zp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$p=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Kp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ed=`uniform sampler2D t2D;
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
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ad=`#include <common>
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
}`,rd=`#if DEPTH_PACKING == 3200
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
}`,od=`#define DISTANCE
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
}`,ld=`#define DISTANCE
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
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pd=`uniform float scale;
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
}`,dd=`uniform vec3 diffuse;
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
}`,ud=`#include <common>
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
}`,fd=`uniform vec3 diffuse;
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
}`,md=`#define LAMBERT
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
}`,gd=`#define LAMBERT
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
}`,kd=`#define MATCAP
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
}`,yd=`#define MATCAP
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
}`,Ed=`#define NORMAL
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
}`,_d=`#define NORMAL
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
}`,xd=`#define PHONG
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
}`,vd=`#define PHONG
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
}`,bd=`#define STANDARD
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
}`,Md=`#define STANDARD
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
}`,Sd=`#define TOON
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
}`,wd=`#define TOON
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
}`,Cd=`uniform float size;
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
}`,Ad=`uniform vec3 diffuse;
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
}`,Td=`#include <common>
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
}`,Fd=`uniform vec3 color;
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
}`,Dd=`uniform float rotation;
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
}`,Ld=`uniform vec3 diffuse;
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
}`,we={alphamap_fragment:tc,alphamap_pars_fragment:ic,alphatest_fragment:nc,alphatest_pars_fragment:sc,aomap_fragment:ac,aomap_pars_fragment:rc,begin_vertex:oc,beginnormal_vertex:lc,bsdfs:hc,iridescence_fragment:cc,bumpmap_pars_fragment:pc,clipping_planes_fragment:dc,clipping_planes_pars_fragment:uc,clipping_planes_pars_vertex:fc,clipping_planes_vertex:mc,color_fragment:gc,color_pars_fragment:kc,color_pars_vertex:yc,color_vertex:Ec,common:_c,cube_uv_reflection_fragment:xc,defaultnormal_vertex:vc,displacementmap_pars_vertex:bc,displacementmap_vertex:Mc,emissivemap_fragment:Sc,emissivemap_pars_fragment:wc,encodings_fragment:Cc,encodings_pars_fragment:Ac,envmap_fragment:Tc,envmap_common_pars_fragment:Fc,envmap_pars_fragment:Dc,envmap_pars_vertex:Lc,envmap_physical_pars_fragment:Wc,envmap_vertex:Pc,fog_vertex:Rc,fog_pars_vertex:Ic,fog_fragment:Bc,fog_pars_fragment:Nc,gradientmap_pars_fragment:Oc,lightmap_fragment:Uc,lightmap_pars_fragment:zc,lights_lambert_fragment:Vc,lights_lambert_pars_fragment:Gc,lights_pars_begin:Hc,lights_toon_fragment:qc,lights_toon_pars_fragment:Xc,lights_phong_fragment:jc,lights_phong_pars_fragment:Yc,lights_physical_fragment:Zc,lights_physical_pars_fragment:$c,lights_fragment_begin:Kc,lights_fragment_maps:Jc,lights_fragment_end:Qc,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:np,map_fragment:sp,map_pars_fragment:ap,map_particle_fragment:rp,map_particle_pars_fragment:op,metalnessmap_fragment:lp,metalnessmap_pars_fragment:hp,morphcolor_vertex:cp,morphnormal_vertex:pp,morphtarget_pars_vertex:dp,morphtarget_vertex:up,normal_fragment_begin:fp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:kp,normal_vertex:yp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:bp,output_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:wp,project_vertex:Cp,dithering_fragment:Ap,dithering_pars_fragment:Tp,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Rp,shadowmask_pars_fragment:Ip,skinbase_vertex:Bp,skinning_pars_vertex:Np,skinning_vertex:Op,skinnormal_vertex:Up,specularmap_fragment:zp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Hp,transmission_fragment:Wp,transmission_pars_fragment:qp,uv_pars_fragment:Xp,uv_pars_vertex:jp,uv_vertex:Yp,uv2_pars_fragment:Zp,uv2_pars_vertex:$p,uv2_vertex:Kp,worldpos_vertex:Jp,background_vert:Qp,background_frag:ed,backgroundCube_vert:td,backgroundCube_frag:id,cube_vert:nd,cube_frag:sd,depth_vert:ad,depth_frag:rd,distanceRGBA_vert:od,distanceRGBA_frag:ld,equirect_vert:hd,equirect_frag:cd,linedashed_vert:pd,linedashed_frag:dd,meshbasic_vert:ud,meshbasic_frag:fd,meshlambert_vert:md,meshlambert_frag:gd,meshmatcap_vert:kd,meshmatcap_frag:yd,meshnormal_vert:Ed,meshnormal_frag:_d,meshphong_vert:xd,meshphong_frag:vd,meshphysical_vert:bd,meshphysical_frag:Md,meshtoon_vert:Sd,meshtoon_frag:wd,points_vert:Cd,points_frag:Ad,shadow_vert:Td,shadow_frag:Fd,sprite_vert:Dd,sprite_frag:Ld},re={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new _t},uv2Transform:{value:new _t},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _t}}},Gt={basic:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ae(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:mt([re.points,re.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:mt([re.common,re.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:mt([re.sprite,re.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:mt([re.common,re.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:mt([re.lights,re.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Gt.physical={uniforms:mt([Gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const rs={r:0,b:0,g:0};function Pd(r,e,t,i,n,s,o){const a=new Ae(0);let l=s===!0?0:1,h,p,c=null,d=0,f=null;function g(u,y){let M=!1,E=y.isScene===!0?y.background:null;E&&E.isTexture&&(E=(y.backgroundBlurriness>0?t:e).get(E));const x=r.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(E=null),E===null?m(a,l):E&&E.isColor&&(m(E,1),M=!0),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Es)?(p===void 0&&(p=new Rt(new Li(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:hn(Gt.backgroundCube.uniforms),vertexShader:Gt.backgroundCube.vertexShader,fragmentShader:Gt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(A,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(p)),p.material.uniforms.envMap.value=E,p.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,p.material.toneMapped=E.encoding!==Ve,(c!==E||d!==E.version||f!==r.toneMapping)&&(p.material.needsUpdate=!0,c=E,d=E.version,f=r.toneMapping),p.layers.enableAll(),u.unshift(p,p.geometry,p.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Rt(new Ra(2,2),new Pi({name:"BackgroundMaterial",uniforms:hn(Gt.background.uniforms),vertexShader:Gt.background.vertexShader,fragmentShader:Gt.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=E.encoding!==Ve,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(c!==E||d!==E.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,c=E,d=E.version,f=r.toneMapping),h.layers.enableAll(),u.unshift(h,h.geometry,h.material,0,0,null))}function m(u,y){u.getRGB(rs,jo(r)),i.buffers.color.setClear(rs.r,rs.g,rs.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(u,y=1){a.set(u),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(u){l=u,m(a,l)},render:g}}function Rd(r,e,t,i){const n=r.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=u(null);let h=l,p=!1;function c(L,V,Y,K,q){let J=!1;if(o){const Z=m(K,Y,V);h!==Z&&(h=Z,f(h.object)),J=y(L,K,Y,q),J&&M(L,K,Y,q)}else{const Z=V.wireframe===!0;(h.geometry!==K.id||h.program!==Y.id||h.wireframe!==Z)&&(h.geometry=K.id,h.program=Y.id,h.wireframe=Z,J=!0)}q!==null&&t.update(q,34963),(J||p)&&(p=!1,k(L,V,Y,K),q!==null&&r.bindBuffer(34963,t.get(q).buffer))}function d(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(L){return i.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,V,Y){const K=Y.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let J=q[V.id];J===void 0&&(J={},q[V.id]=J);let Z=J[K];return Z===void 0&&(Z=u(d()),J[K]=Z),Z}function u(L){const V=[],Y=[],K=[];for(let q=0;q<n;q++)V[q]=0,Y[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:K,object:L,attributes:{},index:null}}function y(L,V,Y,K){const q=h.attributes,J=V.attributes;let Z=0;const U=Y.getAttributes();for(const O in U)if(U[O].location>=0){const ee=q[O];let ae=J[O];if(ae===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),ee===void 0||ee.attribute!==ae||ae&&ee.data!==ae.data)return!0;Z++}return h.attributesNum!==Z||h.index!==K}function M(L,V,Y,K){const q={},J=V.attributes;let Z=0;const U=Y.getAttributes();for(const O in U)if(U[O].location>=0){let ee=J[O];ee===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const ae={};ae.attribute=ee,ee&&ee.data&&(ae.data=ee.data),q[O]=ae,Z++}h.attributes=q,h.attributesNum=Z,h.index=K}function E(){const L=h.newAttributes;for(let V=0,Y=L.length;V<Y;V++)L[V]=0}function x(L){b(L,0)}function b(L,V){const Y=h.newAttributes,K=h.enabledAttributes,q=h.attributeDivisors;Y[L]=1,K[L]===0&&(r.enableVertexAttribArray(L),K[L]=1),q[L]!==V&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),q[L]=V)}function A(){const L=h.newAttributes,V=h.enabledAttributes;for(let Y=0,K=V.length;Y<K;Y++)V[Y]!==L[Y]&&(r.disableVertexAttribArray(Y),V[Y]=0)}function P(L,V,Y,K,q,J){i.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(L,V,Y,q,J):r.vertexAttribPointer(L,V,Y,K,q,J)}function k(L,V,Y,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const q=K.attributes,J=Y.getAttributes(),Z=V.defaultAttributeValues;for(const U in J){const O=J[U];if(O.location>=0){let ie=q[U];if(ie===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),ie!==void 0){const ee=ie.normalized,ae=ie.itemSize,G=t.get(ie);if(G===void 0)continue;const Se=G.buffer,ue=G.type,oe=G.bytesPerElement;if(ie.isInterleavedBufferAttribute){const ne=ie.data,ve=ne.stride,pe=ie.offset;if(ne.isInstancedInterleavedBuffer){for(let me=0;me<O.locationSize;me++)b(O.location+me,ne.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let me=0;me<O.locationSize;me++)x(O.location+me);r.bindBuffer(34962,Se);for(let me=0;me<O.locationSize;me++)P(O.location+me,ae/O.locationSize,ue,ee,ve*oe,(pe+ae/O.locationSize*me)*oe)}else{if(ie.isInstancedBufferAttribute){for(let ne=0;ne<O.locationSize;ne++)b(O.location+ne,ie.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ne=0;ne<O.locationSize;ne++)x(O.location+ne);r.bindBuffer(34962,Se);for(let ne=0;ne<O.locationSize;ne++)P(O.location+ne,ae/O.locationSize,ue,ee,ae*oe,ae/O.locationSize*ne*oe)}}else if(Z!==void 0){const ee=Z[U];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(O.location,ee);break;case 3:r.vertexAttrib3fv(O.location,ee);break;case 4:r.vertexAttrib4fv(O.location,ee);break;default:r.vertexAttrib1fv(O.location,ee)}}}}A()}function C(){$();for(const L in a){const V=a[L];for(const Y in V){const K=V[Y];for(const q in K)g(K[q].object),delete K[q];delete V[Y]}delete a[L]}}function D(L){if(a[L.id]===void 0)return;const V=a[L.id];for(const Y in V){const K=V[Y];for(const q in K)g(K[q].object),delete K[q];delete V[Y]}delete a[L.id]}function X(L){for(const V in a){const Y=a[V];if(Y[L.id]===void 0)continue;const K=Y[L.id];for(const q in K)g(K[q].object),delete K[q];delete Y[L.id]}}function $(){B(),p=!0,h!==l&&(h=l,f(h.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:$,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:D,releaseStatesOfProgram:X,initAttributes:E,enableAttribute:x,disableUnusedAttributes:A}}function Id(r,e,t,i){const n=i.isWebGL2;let s;function o(h){s=h}function a(h,p){r.drawArrays(s,h,p),t.update(p,s,1)}function l(h,p,c){if(c===0)return;let d,f;if(n)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,h,p,c),t.update(p,s,c)}this.setMode=o,this.render=a,this.renderInstances=l}function Bd(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const h=o||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,c=r.getParameter(34930),d=r.getParameter(35660),f=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),u=r.getParameter(36347),y=r.getParameter(36348),M=r.getParameter(36349),E=d>0,x=o||e.has("OES_texture_float"),b=E&&x,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:p,maxTextures:c,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:u,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:E,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:A}}function Nd(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new xi,a=new _t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d,f){const g=c.length!==0||d||i!==0||n;return n=d,t=p(c,f,0),i=c.length,g},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1,h()},this.setState=function(c,d,f){const g=c.clippingPlanes,m=c.clipIntersection,u=c.clipShadows,y=r.get(c);if(!n||g===null||g.length===0||s&&!u)s?p(null):h();else{const M=s?0:i,E=M*4;let x=y.clippingState||null;l.value=x,x=p(g,d,E,f);for(let b=0;b!==E;++b)x[b]=t[b];y.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(c,d,f,g){const m=c!==null?c.length:0;let u=null;if(m!==0){if(u=l.value,g!==!0||u===null){const y=f+m*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(u===null||u.length<y)&&(u=new Float32Array(y));for(let E=0,x=f;E!==m;++E,x+=4)o.copy(c[E]).applyMatrix4(M,a),o.normal.toArray(u,x),u[x+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,u}}function Od(r){let e=new WeakMap;function t(o,a){return a===us?o.mapping=rn:a===ga&&(o.mapping=on),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===us||a===ga)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Kh(l.height/2);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",n),t(h.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ia extends Yo{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=p*this.view.offsetY,l=a-p*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const en=4,Ur=[.125,.215,.35,.446,.526,.582],bi=20,ia=new Ia,zr=new Ae;let na=null;const vi=(1+Math.sqrt(5))/2,Ki=1/vi,Vr=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,vi,Ki),new F(0,vi,-Ki),new F(Ki,0,vi),new F(-Ki,0,vi),new F(vi,Ki,0),new F(-vi,Ki,0)];class Gr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){na=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(na),e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rn||e.mapping===on?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Rn,format:Dt,encoding:Fi,depthBuffer:!1},n=Hr(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hr(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ud(s)),this._blurMaterial=zd(s,e,t)}return n}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,i,n){const a=new pt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,c=p.autoClear,d=p.toneMapping;p.getClearColor(zr),p.toneMapping=ii,p.autoClear=!1;const f=new qo({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new Rt(new Li,f);let m=!1;const u=e.background;u?u.isColor&&(f.color.copy(u),e.background=null,m=!0):(f.color.copy(zr),m=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(a.up.set(0,l[y],0),a.lookAt(h[y],0,0)):M===1?(a.up.set(0,0,l[y]),a.lookAt(0,h[y],0)):(a.up.set(0,l[y],0),a.lookAt(0,0,h[y]));const E=this._cubeSize;os(n,M*E,y>2?E:0,E,E),p.setRenderTarget(n),m&&p.render(g,a),p.render(e,a)}g.geometry.dispose(),g.material.dispose(),p.toneMapping=d,p.autoClear=c,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===rn||e.mapping===on;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=qr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wr());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;os(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ia)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Vr[(n-1)%Vr.length];this._blur(e,n-1,n,s,o)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,c=new Rt(this._lodPlanes[n],h),d=h.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*bi-1),m=s/g,u=isFinite(s)?1+Math.floor(p*m):bi;u>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${bi}`);const y=[];let M=0;for(let P=0;P<bi;++P){const k=P/m,C=Math.exp(-k*k/2);y.push(C),P===0?M+=C:P<u&&(M+=2*C)}for(let P=0;P<y.length;P++)y[P]=y[P]/M;d.envMap.value=e.texture,d.samples.value=u,d.weights.value=y,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const x=this._sizeLods[n],b=3*x*(n>E-en?n-E+en:0),A=4*(this._cubeSize-x);os(t,b,A,3*x,2*x),l.setRenderTarget(t),l.render(c,ia)}}function Ud(r){const e=[],t=[],i=[];let n=r;const s=r-en+1+Ur.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>r-en?l=Ur[o-r+en-1]:o===0&&(l=0),i.push(l);const h=1/(a-2),p=-h,c=1+h,d=[p,p,c,p,c,c,p,p,c,c,p,c],f=6,g=6,m=3,u=2,y=1,M=new Float32Array(m*g*f),E=new Float32Array(u*g*f),x=new Float32Array(y*g*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,k=A>2?0:-1,C=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];M.set(C,m*g*A),E.set(d,u*g*A);const D=[A,A,A,A,A,A];x.set(D,y*g*A)}const b=new zt;b.setAttribute("position",new Wt(M,m)),b.setAttribute("uv",new Wt(E,u)),b.setAttribute("faceIndex",new Wt(x,y)),e.push(b),n>en&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hr(r,e,t){const i=new Di(r,e,t);return i.texture.mapping=Es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function os(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function zd(r,e,t){const i=new Float32Array(bi),n=new F(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Wr(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function qr(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ba(){return`

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
	`}function Vd(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===us||l===ga,p=l===rn||l===on;if(h||p)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let c=e.get(a);return t===null&&(t=new Gr(r)),c=h?t.fromEquirectangular(a,c):t.fromCubemap(a,c),e.set(a,c),c.texture}else{if(e.has(a))return e.get(a).texture;{const c=a.image;if(h&&c&&c.height>0||p&&c&&n(c)){t===null&&(t=new Gr(r));const d=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function n(a){let l=0;const h=6;for(let p=0;p<h;p++)a[p]!==void 0&&l++;return l===h}function s(a){const l=a.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Gd(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Hd(r,e,t,i){const n={},s=new WeakMap;function o(c){const d=c.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(c,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(c){const d=c.attributes;for(const g in d)e.update(d[g],34962);const f=c.morphAttributes;for(const g in f){const m=f[g];for(let u=0,y=m.length;u<y;u++)e.update(m[u],34962)}}function h(c){const d=[],f=c.index,g=c.attributes.position;let m=0;if(f!==null){const M=f.array;m=f.version;for(let E=0,x=M.length;E<x;E+=3){const b=M[E+0],A=M[E+1],P=M[E+2];d.push(b,A,A,P,P,b)}}else{const M=g.array;m=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const b=E+0,A=E+1,P=E+2;d.push(b,A,A,P,P,b)}}const u=new(Oo(d)?Xo:La)(d,1);u.version=m;const y=s.get(c);y&&e.remove(y),s.set(c,u)}function p(c){const d=s.get(c);if(d){const f=c.index;f!==null&&d.version<f.version&&h(c)}else h(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:p}}function Wd(r,e,t,i){const n=i.isWebGL2;let s;function o(d){s=d}let a,l;function h(d){a=d.type,l=d.bytesPerElement}function p(d,f){r.drawElements(s,f,a,d*l),t.update(f,s,1)}function c(d,f,g){if(g===0)return;let m,u;if(n)m=r,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,f,a,d*l,g),t.update(f,s,g)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=c}function qd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Xd(r,e){return r[0]-e[0]}function jd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Yd(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,o=new Oe,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function l(h,p,c,d){const f=h.morphTargetInfluences;if(e.isWebGL2===!0){const g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,m=g!==void 0?g.length:0;let u=s.get(p);if(u===void 0||u.count!==m){let V=function(){B.dispose(),s.delete(p),p.removeEventListener("dispose",V)};u!==void 0&&u.texture.dispose();const E=p.morphAttributes.position!==void 0,x=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,A=p.morphAttributes.position||[],P=p.morphAttributes.normal||[],k=p.morphAttributes.color||[];let C=0;E===!0&&(C=1),x===!0&&(C=2),b===!0&&(C=3);let D=p.attributes.position.count*C,X=1;D>e.maxTextureSize&&(X=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const $=new Float32Array(D*X*4*m),B=new Go($,D,X,m);B.type=ci,B.needsUpdate=!0;const L=C*4;for(let Y=0;Y<m;Y++){const K=A[Y],q=P[Y],J=k[Y],Z=D*X*4*Y;for(let U=0;U<K.count;U++){const O=U*L;E===!0&&(o.fromBufferAttribute(K,U),$[Z+O+0]=o.x,$[Z+O+1]=o.y,$[Z+O+2]=o.z,$[Z+O+3]=0),x===!0&&(o.fromBufferAttribute(q,U),$[Z+O+4]=o.x,$[Z+O+5]=o.y,$[Z+O+6]=o.z,$[Z+O+7]=0),b===!0&&(o.fromBufferAttribute(J,U),$[Z+O+8]=o.x,$[Z+O+9]=o.y,$[Z+O+10]=o.z,$[Z+O+11]=J.itemSize===4?o.w:1)}}u={count:m,texture:B,size:new Me(D,X)},s.set(p,u),p.addEventListener("dispose",V)}let y=0;for(let E=0;E<f.length;E++)y+=f[E];const M=p.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}else{const g=f===void 0?0:f.length;let m=i[p.id];if(m===void 0||m.length!==g){m=[];for(let x=0;x<g;x++)m[x]=[x,0];i[p.id]=m}for(let x=0;x<g;x++){const b=m[x];b[0]=x,b[1]=f[x]}m.sort(jd);for(let x=0;x<8;x++)x<g&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Xd);const u=p.morphAttributes.position,y=p.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const b=a[x],A=b[0],P=b[1];A!==Number.MAX_SAFE_INTEGER&&P?(u&&p.getAttribute("morphTarget"+x)!==u[A]&&p.setAttribute("morphTarget"+x,u[A]),y&&p.getAttribute("morphNormal"+x)!==y[A]&&p.setAttribute("morphNormal"+x,y[A]),n[x]=P,M+=P):(u&&p.hasAttribute("morphTarget"+x)===!0&&p.deleteAttribute("morphTarget"+x),y&&p.hasAttribute("morphNormal"+x)===!0&&p.deleteAttribute("morphNormal"+x),n[x]=0)}const E=p.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function Zd(r,e,t,i){let n=new WeakMap;function s(l){const h=i.render.frame,p=l.geometry,c=e.get(l,p);return n.get(c)!==h&&(e.update(c),n.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),c}function o(){n=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}const Ko=new lt,Jo=new Go,Qo=new Ih,el=new Zo,Xr=[],jr=[],Yr=new Float32Array(16),Zr=new Float32Array(9),$r=new Float32Array(4);function cn(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Xr[n];if(s===void 0&&(s=new Float32Array(n),Xr[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function tt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function it(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function xs(r,e){let t=jr[e];t===void 0&&(t=new Int32Array(e),jr[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function $d(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Kd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2fv(this.addr,e),it(t,e)}}function Jd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;r.uniform3fv(this.addr,e),it(t,e)}}function Qd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4fv(this.addr,e),it(t,e)}}function eu(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(tt(t,i))return;$r.set(i),r.uniformMatrix2fv(this.addr,!1,$r),it(t,i)}}function tu(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(tt(t,i))return;Zr.set(i),r.uniformMatrix3fv(this.addr,!1,Zr),it(t,i)}}function iu(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(tt(t,i))return;Yr.set(i),r.uniformMatrix4fv(this.addr,!1,Yr),it(t,i)}}function nu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function su(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2iv(this.addr,e),it(t,e)}}function au(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3iv(this.addr,e),it(t,e)}}function ru(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4iv(this.addr,e),it(t,e)}}function ou(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function lu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2uiv(this.addr,e),it(t,e)}}function hu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3uiv(this.addr,e),it(t,e)}}function cu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4uiv(this.addr,e),it(t,e)}}function pu(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Ko,n)}function du(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Qo,n)}function uu(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||el,n)}function fu(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Jo,n)}function mu(r){switch(r){case 5126:return $d;case 35664:return Kd;case 35665:return Jd;case 35666:return Qd;case 35674:return eu;case 35675:return tu;case 35676:return iu;case 5124:case 35670:return nu;case 35667:case 35671:return su;case 35668:case 35672:return au;case 35669:case 35673:return ru;case 5125:return ou;case 36294:return lu;case 36295:return hu;case 36296:return cu;case 35678:case 36198:case 36298:case 36306:case 35682:return pu;case 35679:case 36299:case 36307:return du;case 35680:case 36300:case 36308:case 36293:return uu;case 36289:case 36303:case 36311:case 36292:return fu}}function gu(r,e){r.uniform1fv(this.addr,e)}function ku(r,e){const t=cn(e,this.size,2);r.uniform2fv(this.addr,t)}function yu(r,e){const t=cn(e,this.size,3);r.uniform3fv(this.addr,t)}function Eu(r,e){const t=cn(e,this.size,4);r.uniform4fv(this.addr,t)}function _u(r,e){const t=cn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xu(r,e){const t=cn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function vu(r,e){const t=cn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bu(r,e){r.uniform1iv(this.addr,e)}function Mu(r,e){r.uniform2iv(this.addr,e)}function Su(r,e){r.uniform3iv(this.addr,e)}function wu(r,e){r.uniform4iv(this.addr,e)}function Cu(r,e){r.uniform1uiv(this.addr,e)}function Au(r,e){r.uniform2uiv(this.addr,e)}function Tu(r,e){r.uniform3uiv(this.addr,e)}function Fu(r,e){r.uniform4uiv(this.addr,e)}function Du(r,e,t){const i=this.cache,n=e.length,s=xs(t,n);tt(i,s)||(r.uniform1iv(this.addr,s),it(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Ko,s[o])}function Lu(r,e,t){const i=this.cache,n=e.length,s=xs(t,n);tt(i,s)||(r.uniform1iv(this.addr,s),it(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||Qo,s[o])}function Pu(r,e,t){const i=this.cache,n=e.length,s=xs(t,n);tt(i,s)||(r.uniform1iv(this.addr,s),it(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||el,s[o])}function Ru(r,e,t){const i=this.cache,n=e.length,s=xs(t,n);tt(i,s)||(r.uniform1iv(this.addr,s),it(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Jo,s[o])}function Iu(r){switch(r){case 5126:return gu;case 35664:return ku;case 35665:return yu;case 35666:return Eu;case 35674:return _u;case 35675:return xu;case 35676:return vu;case 5124:case 35670:return bu;case 35667:case 35671:return Mu;case 35668:case 35672:return Su;case 35669:case 35673:return wu;case 5125:return Cu;case 36294:return Au;case 36295:return Tu;case 36296:return Fu;case 35678:case 36198:case 36298:case 36306:case 35682:return Du;case 35679:case 36299:case 36307:return Lu;case 35680:case 36300:case 36308:case 36293:return Pu;case 36289:case 36303:case 36311:case 36292:return Ru}}class Bu{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=mu(t.type)}}class Nu{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Iu(t.type)}}class Ou{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function Kr(r,e){r.seq.push(e),r.map[e.id]=e}function Uu(r,e,t){const i=r.name,n=i.length;for(sa.lastIndex=0;;){const s=sa.exec(i),o=sa.lastIndex;let a=s[1];const l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===n){Kr(t,h===void 0?new Bu(a,r,e):new Nu(a,r,e));break}else{let c=t.map[a];c===void 0&&(c=new Ou(a),Kr(t,c)),t=c}}}class ds{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);Uu(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function Jr(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let zu=0;function Vu(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Gu(r){switch(r){case Fi:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Qr(r,e,t){const i=r.getShaderParameter(e,35713),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+Vu(r.getShaderSource(e),o)}else return n}function Hu(r,e){const t=Gu(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Wu(r,e){let t;switch(e){case Zl:t="Linear";break;case $l:t="Reinhard";break;case Kl:t="OptimizedCineon";break;case Jl:t="ACESFilmic";break;case Ql:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qu(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wn).join(`
`)}function Xu(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ju(r,e){const t={},i=r.getProgramParameter(e,35721);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function wn(r){return r!==""}function eo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function to(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yu=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(r){return r.replace(Yu,Zu)}function Zu(r,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _a(t)}const $u=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function io(r){return r.replace($u,Ku)}function Ku(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function no(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ju(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Do?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qu(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case rn:case on:e="ENVMAP_TYPE_CUBE";break;case Es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ef(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case on:e="ENVMAP_MODE_REFRACTION";break}return e}function tf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ys:e="ENVMAP_BLENDING_MULTIPLY";break;case jl:e="ENVMAP_BLENDING_MIX";break;case Yl:e="ENVMAP_BLENDING_ADD";break}return e}function nf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sf(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ju(t),h=Qu(t),p=ef(t),c=tf(t),d=nf(t),f=t.isWebGL2?"":qu(t),g=Xu(s),m=n.createProgram();let u,y,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=[g].filter(wn).join(`
`),u.length>0&&(u+=`
`),y=[f,g].filter(wn).join(`
`),y.length>0&&(y+=`
`)):(u=[no(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wn).join(`
`),y=[f,no(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?we.tonemapping_pars_fragment:"",t.toneMapping!==ii?Wu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,Hu("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wn).join(`
`)),o=_a(o),o=eo(o,t),o=to(o,t),a=_a(a),a=eo(a,t),a=to(a,t),o=io(o),a=io(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["#define varying in",t.glslVersion===Cr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=M+u+o,x=M+y+a,b=Jr(n,35633,E),A=Jr(n,35632,x);if(n.attachShader(m,b),n.attachShader(m,A),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),r.debug.checkShaderErrors){const C=n.getProgramInfoLog(m).trim(),D=n.getShaderInfoLog(b).trim(),X=n.getShaderInfoLog(A).trim();let $=!0,B=!0;if(n.getProgramParameter(m,35714)===!1){$=!1;const L=Qr(n,b,"vertex"),V=Qr(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+L+`
`+V)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(D===""||X==="")&&(B=!1);B&&(this.diagnostics={runnable:$,programLog:C,vertexShader:{log:D,prefix:u},fragmentShader:{log:X,prefix:y}})}n.deleteShader(b),n.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new ds(n,m)),P};let k;return this.getAttributes=function(){return k===void 0&&(k=ju(n,m)),k},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=zu++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=A,this}let af=0;class rf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new of(e),t.set(e,i)),i}}class of{constructor(e){this.id=af++,this.code=e,this.usedTimes=0}}function lf(r,e,t,i,n,s,o){const a=new Wo,l=new rf,h=[],p=n.isWebGL2,c=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(k,C,D,X,$){const B=X.fog,L=$.geometry,V=k.isMeshStandardMaterial?X.environment:null,Y=(k.isMeshStandardMaterial?t:e).get(k.envMap||V),K=Y&&Y.mapping===Es?Y.image.height:null,q=g[k.type];k.precision!==null&&(f=n.getMaxPrecision(k.precision),f!==k.precision&&console.warn("THREE.WebGLProgram.getParameters:",k.precision,"not supported, using",f,"instead."));const J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=J!==void 0?J.length:0;let U=0;L.morphAttributes.position!==void 0&&(U=1),L.morphAttributes.normal!==void 0&&(U=2),L.morphAttributes.color!==void 0&&(U=3);let O,ie,ee,ae;if(q){const ve=Gt[q];O=ve.vertexShader,ie=ve.fragmentShader}else O=k.vertexShader,ie=k.fragmentShader,l.update(k),ee=l.getVertexShaderID(k),ae=l.getFragmentShaderID(k);const G=r.getRenderTarget(),Se=k.alphaTest>0,ue=k.clearcoat>0,oe=k.iridescence>0;return{isWebGL2:p,shaderID:q,shaderName:k.type,vertexShader:O,fragmentShader:ie,defines:k.defines,customVertexShaderID:ee,customFragmentShaderID:ae,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:f,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:d,outputEncoding:G===null?r.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Fi,map:!!k.map,matcap:!!k.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!k.lightMap,aoMap:!!k.aoMap,emissiveMap:!!k.emissiveMap,bumpMap:!!k.bumpMap,normalMap:!!k.normalMap,objectSpaceNormalMap:k.normalMapType===Eh,tangentSpaceNormalMap:k.normalMapType===Fa,decodeVideoTexture:!!k.map&&k.map.isVideoTexture===!0&&k.map.encoding===Ve,clearcoat:ue,clearcoatMap:ue&&!!k.clearcoatMap,clearcoatRoughnessMap:ue&&!!k.clearcoatRoughnessMap,clearcoatNormalMap:ue&&!!k.clearcoatNormalMap,iridescence:oe,iridescenceMap:oe&&!!k.iridescenceMap,iridescenceThicknessMap:oe&&!!k.iridescenceThicknessMap,displacementMap:!!k.displacementMap,roughnessMap:!!k.roughnessMap,metalnessMap:!!k.metalnessMap,specularMap:!!k.specularMap,specularIntensityMap:!!k.specularIntensityMap,specularColorMap:!!k.specularColorMap,opaque:k.transparent===!1&&k.blending===sn,alphaMap:!!k.alphaMap,alphaTest:Se,gradientMap:!!k.gradientMap,sheen:k.sheen>0,sheenColorMap:!!k.sheenColorMap,sheenRoughnessMap:!!k.sheenRoughnessMap,transmission:k.transmission>0,transmissionMap:!!k.transmissionMap,thicknessMap:!!k.thicknessMap,combine:k.combine,vertexTangents:!!k.normalMap&&!!L.attributes.tangent,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!k.map||!!k.bumpMap||!!k.normalMap||!!k.specularMap||!!k.alphaMap||!!k.emissiveMap||!!k.roughnessMap||!!k.metalnessMap||!!k.clearcoatMap||!!k.clearcoatRoughnessMap||!!k.clearcoatNormalMap||!!k.iridescenceMap||!!k.iridescenceThicknessMap||!!k.displacementMap||!!k.transmissionMap||!!k.thicknessMap||!!k.specularIntensityMap||!!k.specularColorMap||!!k.sheenColorMap||!!k.sheenRoughnessMap,uvsVertexOnly:!(k.map||k.bumpMap||k.normalMap||k.specularMap||k.alphaMap||k.emissiveMap||k.roughnessMap||k.metalnessMap||k.clearcoatNormalMap||k.iridescenceMap||k.iridescenceThicknessMap||k.transmission>0||k.transmissionMap||k.thicknessMap||k.specularIntensityMap||k.specularColorMap||k.sheen>0||k.sheenColorMap||k.sheenRoughnessMap)&&!!k.displacementMap,fog:!!B,useFog:k.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!k.flatShading,sizeAttenuation:k.sizeAttenuation,logarithmicDepthBuffer:c,skinning:$.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:U,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:k.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:k.toneMapped?r.toneMapping:ii,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===Ta,flipSided:k.side===It,useDepthPacking:!!k.depthPacking,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionDerivatives:k.extensions&&k.extensions.derivatives,extensionFragDepth:k.extensions&&k.extensions.fragDepth,extensionDrawBuffers:k.extensions&&k.extensions.drawBuffers,extensionShaderTextureLOD:k.extensions&&k.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||i.has("EXT_shader_texture_lod"),customProgramCacheKey:k.customProgramCacheKey()}}function u(k){const C=[];if(k.shaderID?C.push(k.shaderID):(C.push(k.customVertexShaderID),C.push(k.customFragmentShaderID)),k.defines!==void 0)for(const D in k.defines)C.push(D),C.push(k.defines[D]);return k.isRawShaderMaterial===!1&&(y(C,k),M(C,k),C.push(r.outputEncoding)),C.push(k.customProgramCacheKey),C.join()}function y(k,C){k.push(C.precision),k.push(C.outputEncoding),k.push(C.envMapMode),k.push(C.envMapCubeUVHeight),k.push(C.combine),k.push(C.vertexUvs),k.push(C.fogExp2),k.push(C.sizeAttenuation),k.push(C.morphTargetsCount),k.push(C.morphAttributeCount),k.push(C.numDirLights),k.push(C.numPointLights),k.push(C.numSpotLights),k.push(C.numSpotLightMaps),k.push(C.numHemiLights),k.push(C.numRectAreaLights),k.push(C.numDirLightShadows),k.push(C.numPointLightShadows),k.push(C.numSpotLightShadows),k.push(C.numSpotLightShadowsWithMaps),k.push(C.shadowMapType),k.push(C.toneMapping),k.push(C.numClippingPlanes),k.push(C.numClipIntersection),k.push(C.depthPacking)}function M(k,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),k.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),k.push(a.mask)}function E(k){const C=g[k.type];let D;if(C){const X=Gt[C];D=jh.clone(X.uniforms)}else D=k.uniforms;return D}function x(k,C){let D;for(let X=0,$=h.length;X<$;X++){const B=h[X];if(B.cacheKey===C){D=B,++D.usedTimes;break}}return D===void 0&&(D=new sf(r,C,k,s),h.push(D)),D}function b(k){if(--k.usedTimes===0){const C=h.indexOf(k);h[C]=h[h.length-1],h.pop(),k.destroy()}}function A(k){l.remove(k)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:x,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:P}}function hf(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function cf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function so(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ao(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(c,d,f,g,m,u){let y=r[e];return y===void 0?(y={id:c.id,object:c,geometry:d,material:f,groupOrder:g,renderOrder:c.renderOrder,z:m,group:u},r[e]=y):(y.id=c.id,y.object=c,y.geometry=d,y.material=f,y.groupOrder=g,y.renderOrder=c.renderOrder,y.z=m,y.group=u),e++,y}function a(c,d,f,g,m,u){const y=o(c,d,f,g,m,u);f.transmission>0?i.push(y):f.transparent===!0?n.push(y):t.push(y)}function l(c,d,f,g,m,u){const y=o(c,d,f,g,m,u);f.transmission>0?i.unshift(y):f.transparent===!0?n.unshift(y):t.unshift(y)}function h(c,d){t.length>1&&t.sort(c||cf),i.length>1&&i.sort(d||so),n.length>1&&n.sort(d||so)}function p(){for(let c=e,d=r.length;c<d;c++){const f=r[c];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:p,sort:h}}function pf(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new ao,r.set(i,[o])):n>=s.length?(o=new ao,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function df(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ae};break;case"SpotLight":t={position:new F,direction:new F,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function uf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ff=0;function mf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function gf(r,e){const t=new df,i=uf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let p=0;p<9;p++)n.probe.push(new F);const s=new F,o=new _e,a=new _e;function l(p,c){let d=0,f=0,g=0;for(let X=0;X<9;X++)n.probe[X].set(0,0,0);let m=0,u=0,y=0,M=0,E=0,x=0,b=0,A=0,P=0,k=0;p.sort(mf);const C=c!==!0?Math.PI:1;for(let X=0,$=p.length;X<$;X++){const B=p[X],L=B.color,V=B.intensity,Y=B.distance,K=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=L.r*V*C,f+=L.g*V*C,g+=L.b*V*C;else if(B.isLightProbe)for(let q=0;q<9;q++)n.probe[q].addScaledVector(B.sh.coefficients[q],V);else if(B.isDirectionalLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const J=B.shadow,Z=i.get(B);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=B.shadow.matrix,x++}n.directional[m]=q,m++}else if(B.isSpotLight){const q=t.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(L).multiplyScalar(V*C),q.distance=Y,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,n.spot[y]=q;const J=B.shadow;if(B.map&&(n.spotLightMap[P]=B.map,P++,J.updateMatrices(B),B.castShadow&&k++),n.spotLightMatrix[y]=J.matrix,B.castShadow){const Z=i.get(B);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,n.spotShadow[y]=Z,n.spotShadowMap[y]=K,A++}y++}else if(B.isRectAreaLight){const q=t.get(B);q.color.copy(L).multiplyScalar(V),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),n.rectArea[M]=q,M++}else if(B.isPointLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*C),q.distance=B.distance,q.decay=B.decay,B.castShadow){const J=B.shadow,Z=i.get(B);Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,n.pointShadow[u]=Z,n.pointShadowMap[u]=K,n.pointShadowMatrix[u]=B.shadow.matrix,b++}n.point[u]=q,u++}else if(B.isHemisphereLight){const q=t.get(B);q.skyColor.copy(B.color).multiplyScalar(V*C),q.groundColor.copy(B.groundColor).multiplyScalar(V*C),n.hemi[E]=q,E++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;const D=n.hash;(D.directionalLength!==m||D.pointLength!==u||D.spotLength!==y||D.rectAreaLength!==M||D.hemiLength!==E||D.numDirectionalShadows!==x||D.numPointShadows!==b||D.numSpotShadows!==A||D.numSpotMaps!==P)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=M,n.point.length=u,n.hemi.length=E,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=A+P-k,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=k,D.directionalLength=m,D.pointLength=u,D.spotLength=y,D.rectAreaLength=M,D.hemiLength=E,D.numDirectionalShadows=x,D.numPointShadows=b,D.numSpotShadows=A,D.numSpotMaps=P,n.version=ff++)}function h(p,c){let d=0,f=0,g=0,m=0,u=0;const y=c.matrixWorldInverse;for(let M=0,E=p.length;M<E;M++){const x=p[M];if(x.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),d++}else if(x.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),g++}else if(x.isRectAreaLight){const b=n.rectArea[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(y),a.identity(),o.copy(x.matrixWorld),o.premultiply(y),a.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(y),f++}else if(x.isHemisphereLight){const b=n.hemi[u];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(y),u++}}}return{setup:l,setupView:h,state:n}}function ro(r,e){const t=new gf(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function o(c){i.push(c)}function a(c){n.push(c)}function l(c){t.setup(i,c)}function h(c){t.setupView(i,c)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function kf(r,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ro(r,e),t.set(s,[l])):o>=a.length?(l=new ro(r,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class yf extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ef extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _f=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xf=`uniform sampler2D shadow_pass;
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
}`;function vf(r,e,t){let i=new Pa;const n=new Me,s=new Me,o=new Oe,a=new yf({depthPacking:yh}),l=new Ef,h={},p=t.maxTextureSize,c={0:It,1:Ai,2:Ta},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:_f,fragmentShader:xf}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Rt(g,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do,this.render=function(x,b,A){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||x.length===0)return;const P=r.getRenderTarget(),k=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),D=r.state;D.setBlending(di),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let X=0,$=x.length;X<$;X++){const B=x[X],L=B.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;n.copy(L.mapSize);const V=L.getFrameExtents();if(n.multiply(V),s.copy(L.mapSize),(n.x>p||n.y>p)&&(n.x>p&&(s.x=Math.floor(p/V.x),n.x=s.x*V.x,L.mapSize.x=s.x),n.y>p&&(s.y=Math.floor(p/V.y),n.y=s.y*V.y,L.mapSize.y=s.y)),L.map===null){const K=this.type!==Mn?{minFilter:rt,magFilter:rt}:{};L.map=new Di(n.x,n.y,K),L.map.texture.name=B.name+".shadowMap",L.camera.updateProjectionMatrix()}r.setRenderTarget(L.map),r.clear();const Y=L.getViewportCount();for(let K=0;K<Y;K++){const q=L.getViewport(K);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),D.viewport(o),L.updateMatrices(B,K),i=L.getFrustum(),E(b,A,L.camera,B,this.type)}L.isPointLightShadow!==!0&&this.type===Mn&&y(L,A),L.needsUpdate=!1}u.needsUpdate=!1,r.setRenderTarget(P,k,C)};function y(x,b){const A=e.update(m);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Di(n.x,n.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(b,null,A,d,m,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(b,null,A,f,m,null)}function M(x,b,A,P,k,C){let D=null;const X=A.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(X!==void 0)D=X;else if(D=A.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const $=D.uuid,B=b.uuid;let L=h[$];L===void 0&&(L={},h[$]=L);let V=L[B];V===void 0&&(V=D.clone(),L[B]=V),D=V}return D.visible=b.visible,D.wireframe=b.wireframe,C===Mn?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:c[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaTest,D.map=b.map,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,A.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(A.matrixWorld),D.nearDistance=P,D.farDistance=k),D}function E(x,b,A,P,k){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&k===Mn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,x.matrixWorld);const X=e.update(x),$=x.material;if(Array.isArray($)){const B=X.groups;for(let L=0,V=B.length;L<V;L++){const Y=B[L],K=$[Y.materialIndex];if(K&&K.visible){const q=M(x,K,P,A.near,A.far,k);r.renderBufferDirect(A,null,X,q,x,Y)}}}else if($.visible){const B=M(x,$,P,A.near,A.far,k);r.renderBufferDirect(A,null,X,B,x,null)}}const D=x.children;for(let X=0,$=D.length;X<$;X++)E(D[X],b,A,P,k)}}function bf(r,e,t){const i=t.isWebGL2;function n(){let T=!1;const H=new Oe;let Q=null;const de=new Oe(0,0,0,0);return{setMask:function(ye){Q!==ye&&!T&&(r.colorMask(ye,ye,ye,ye),Q=ye)},setLocked:function(ye){T=ye},setClear:function(ye,Ue,nt,ht,fi){fi===!0&&(ye*=ht,Ue*=ht,nt*=ht),H.set(ye,Ue,nt,ht),de.equals(H)===!1&&(r.clearColor(ye,Ue,nt,ht),de.copy(H))},reset:function(){T=!1,Q=null,de.set(-1,0,0,0)}}}function s(){let T=!1,H=null,Q=null,de=null;return{setTest:function(ye){ye?Se(2929):ue(2929)},setMask:function(ye){H!==ye&&!T&&(r.depthMask(ye),H=ye)},setFunc:function(ye){if(Q!==ye){switch(ye){case zl:r.depthFunc(512);break;case Vl:r.depthFunc(519);break;case Gl:r.depthFunc(513);break;case ma:r.depthFunc(515);break;case Hl:r.depthFunc(514);break;case Wl:r.depthFunc(518);break;case ql:r.depthFunc(516);break;case Xl:r.depthFunc(517);break;default:r.depthFunc(515)}Q=ye}},setLocked:function(ye){T=ye},setClear:function(ye){de!==ye&&(r.clearDepth(ye),de=ye)},reset:function(){T=!1,H=null,Q=null,de=null}}}function o(){let T=!1,H=null,Q=null,de=null,ye=null,Ue=null,nt=null,ht=null,fi=null;return{setTest:function(We){T||(We?Se(2960):ue(2960))},setMask:function(We){H!==We&&!T&&(r.stencilMask(We),H=We)},setFunc:function(We,Xt,At){(Q!==We||de!==Xt||ye!==At)&&(r.stencilFunc(We,Xt,At),Q=We,de=Xt,ye=At)},setOp:function(We,Xt,At){(Ue!==We||nt!==Xt||ht!==At)&&(r.stencilOp(We,Xt,At),Ue=We,nt=Xt,ht=At)},setLocked:function(We){T=We},setClear:function(We){fi!==We&&(r.clearStencil(We),fi=We)},reset:function(){T=!1,H=null,Q=null,de=null,ye=null,Ue=null,nt=null,ht=null,fi=null}}}const a=new n,l=new s,h=new o,p=new WeakMap,c=new WeakMap;let d={},f={},g=new WeakMap,m=[],u=null,y=!1,M=null,E=null,x=null,b=null,A=null,P=null,k=null,C=!1,D=null,X=null,$=null,B=null,L=null;const V=r.getParameter(35661);let Y=!1,K=0;const q=r.getParameter(7938);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=K>=2);let J=null,Z={};const U=r.getParameter(3088),O=r.getParameter(2978),ie=new Oe().fromArray(U),ee=new Oe().fromArray(O);function ae(T,H,Q){const de=new Uint8Array(4),ye=r.createTexture();r.bindTexture(T,ye),r.texParameteri(T,10241,9728),r.texParameteri(T,10240,9728);for(let Ue=0;Ue<Q;Ue++)r.texImage2D(H+Ue,0,6408,1,1,0,6408,5121,de);return ye}const G={};G[3553]=ae(3553,3553,1),G[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Se(2929),l.setFunc(ma),Qe(!1),dt(Za),Se(2884),qe(di);function Se(T){d[T]!==!0&&(r.enable(T),d[T]=!0)}function ue(T){d[T]!==!1&&(r.disable(T),d[T]=!1)}function oe(T,H){return f[T]!==H?(r.bindFramebuffer(T,H),f[T]=H,i&&(T===36009&&(f[36160]=H),T===36160&&(f[36009]=H)),!0):!1}function ne(T,H){let Q=m,de=!1;if(T)if(Q=g.get(H),Q===void 0&&(Q=[],g.set(H,Q)),T.isWebGLMultipleRenderTargets){const ye=T.texture;if(Q.length!==ye.length||Q[0]!==36064){for(let Ue=0,nt=ye.length;Ue<nt;Ue++)Q[Ue]=36064+Ue;Q.length=ye.length,de=!0}}else Q[0]!==36064&&(Q[0]=36064,de=!0);else Q[0]!==1029&&(Q[0]=1029,de=!0);de&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function ve(T){return u!==T?(r.useProgram(T),u=T,!0):!1}const pe={[Qi]:32774,[Tl]:32778,[Fl]:32779};if(i)pe[Qa]=32775,pe[er]=32776;else{const T=e.get("EXT_blend_minmax");T!==null&&(pe[Qa]=T.MIN_EXT,pe[er]=T.MAX_EXT)}const me={[Dl]:0,[Ll]:1,[Pl]:768,[Po]:770,[Ul]:776,[Nl]:774,[Il]:772,[Rl]:769,[Ro]:771,[Ol]:775,[Bl]:773};function qe(T,H,Q,de,ye,Ue,nt,ht){if(T===di){y===!0&&(ue(3042),y=!1);return}if(y===!1&&(Se(3042),y=!0),T!==Al){if(T!==M||ht!==C){if((E!==Qi||A!==Qi)&&(r.blendEquation(32774),E=Qi,A=Qi),ht)switch(T){case sn:r.blendFuncSeparate(1,771,1,771);break;case $a:r.blendFunc(1,1);break;case Ka:r.blendFuncSeparate(0,769,0,1);break;case Ja:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case sn:r.blendFuncSeparate(770,771,1,771);break;case $a:r.blendFunc(770,1);break;case Ka:r.blendFuncSeparate(0,769,0,1);break;case Ja:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}x=null,b=null,P=null,k=null,M=T,C=ht}return}ye=ye||H,Ue=Ue||Q,nt=nt||de,(H!==E||ye!==A)&&(r.blendEquationSeparate(pe[H],pe[ye]),E=H,A=ye),(Q!==x||de!==b||Ue!==P||nt!==k)&&(r.blendFuncSeparate(me[Q],me[de],me[Ue],me[nt]),x=Q,b=de,P=Ue,k=nt),M=T,C=!1}function Je(T,H){T.side===Ta?ue(2884):Se(2884);let Q=T.side===It;H&&(Q=!Q),Qe(Q),T.blending===sn&&T.transparent===!1?qe(di):qe(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),a.setMask(T.colorWrite);const de=T.stencilWrite;h.setTest(de),de&&(h.setMask(T.stencilWriteMask),h.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),h.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),ze(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?Se(32926):ue(32926)}function Qe(T){D!==T&&(T?r.frontFace(2304):r.frontFace(2305),D=T)}function dt(T){T!==wl?(Se(2884),T!==X&&(T===Za?r.cullFace(1029):T===Cl?r.cullFace(1028):r.cullFace(1032))):ue(2884),X=T}function je(T){T!==$&&(Y&&r.lineWidth(T),$=T)}function ze(T,H,Q){T?(Se(32823),(B!==H||L!==Q)&&(r.polygonOffset(H,Q),B=H,L=Q)):ue(32823)}function Ct(T){T?Se(3089):ue(3089)}function gt(T){T===void 0&&(T=33984+V-1),J!==T&&(r.activeTexture(T),J=T)}function S(T,H,Q){Q===void 0&&(J===null?Q=33984+V-1:Q=J);let de=Z[Q];de===void 0&&(de={type:void 0,texture:void 0},Z[Q]=de),(de.type!==T||de.texture!==H)&&(J!==Q&&(r.activeTexture(Q),J=Q),r.bindTexture(T,H||G[T]),de.type=T,de.texture=H)}function _(){const T=Z[J];T!==void 0&&T.type!==void 0&&(r.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function se(){try{r.texSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function xe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function w(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function R(){try{r.texStorage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ce(){try{r.texStorage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function he(){try{r.texImage3D.apply(r,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ke(T){ie.equals(T)===!1&&(r.scissor(T.x,T.y,T.z,T.w),ie.copy(T))}function ge(T){ee.equals(T)===!1&&(r.viewport(T.x,T.y,T.z,T.w),ee.copy(T))}function De(T,H){let Q=c.get(H);Q===void 0&&(Q=new WeakMap,c.set(H,Q));let de=Q.get(T);de===void 0&&(de=r.getUniformBlockIndex(H,T.name),Q.set(T,de))}function Le(T,H){const de=c.get(H).get(T);p.get(H)!==de&&(r.uniformBlockBinding(H,de,T.__bindingPointIndex),p.set(H,de))}function Ge(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),i===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},J=null,Z={},f={},g=new WeakMap,m=[],u=null,y=!1,M=null,E=null,x=null,b=null,A=null,P=null,k=null,C=!1,D=null,X=null,$=null,B=null,L=null,ie.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:Se,disable:ue,bindFramebuffer:oe,drawBuffers:ne,useProgram:ve,setBlending:qe,setMaterial:Je,setFlipSided:Qe,setCullFace:dt,setLineWidth:je,setPolygonOffset:ze,setScissorTest:Ct,activeTexture:gt,bindTexture:S,unbindTexture:_,compressedTexImage2D:z,compressedTexImage3D:te,texImage2D:fe,texImage3D:he,updateUBOMapping:De,uniformBlockBinding:Le,texStorage2D:R,texStorage3D:ce,texSubImage2D:se,texSubImage3D:le,compressedTexSubImage2D:xe,compressedTexSubImage3D:w,scissor:ke,viewport:ge,reset:Ge}}function Mf(r,e,t,i,n,s,o){const a=n.isWebGL2,l=n.maxTextures,h=n.maxCubemapSize,p=n.maxTextureSize,c=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const u=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(S,_){return y?new OffscreenCanvas(S,_):Nn("canvas")}function E(S,_,z,te){let se=1;if((S.width>te||S.height>te)&&(se=te/Math.max(S.width,S.height)),se<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const le=_?gs:Math.floor,xe=le(se*S.width),w=le(se*S.height);m===void 0&&(m=M(xe,w));const R=z?M(xe,w):m;return R.width=xe,R.height=w,R.getContext("2d").drawImage(S,0,0,xe,w),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+xe+"x"+w+")."),R}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function x(S){return Ea(S.width)&&Ea(S.height)}function b(S){return a?!1:S.wrapS!==St||S.wrapT!==St||S.minFilter!==rt&&S.minFilter!==Ft}function A(S,_){return S.generateMipmaps&&_&&S.minFilter!==rt&&S.minFilter!==Ft}function P(S){r.generateMipmap(S)}function k(S,_,z,te,se=!1){if(a===!1)return _;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let le=_;return _===6403&&(z===5126&&(le=33326),z===5131&&(le=33325),z===5121&&(le=33321)),_===33319&&(z===5126&&(le=33328),z===5131&&(le=33327),z===5121&&(le=33323)),_===6408&&(z===5126&&(le=34836),z===5131&&(le=34842),z===5121&&(le=te===Ve&&se===!1?35907:32856),z===32819&&(le=32854),z===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function C(S,_,z){return A(S,z)===!0||S.isFramebufferTexture&&S.minFilter!==rt&&S.minFilter!==Ft?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function D(S){return S===rt||S===tr||S===Ts?9728:9729}function X(S){const _=S.target;_.removeEventListener("dispose",X),B(_),_.isVideoTexture&&g.delete(_)}function $(S){const _=S.target;_.removeEventListener("dispose",$),V(_)}function B(S){const _=i.get(S);if(_.__webglInit===void 0)return;const z=S.source,te=u.get(z);if(te){const se=te[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&L(S),Object.keys(te).length===0&&u.delete(z)}i.remove(S)}function L(S){const _=i.get(S);r.deleteTexture(_.__webglTexture);const z=S.source,te=u.get(z);delete te[_.__cacheKey],o.memory.textures--}function V(S){const _=S.texture,z=i.get(S),te=i.get(_);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(z.__webglFramebuffer[se]),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let se=0;se<z.__webglColorRenderbuffer.length;se++)z.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[se]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let se=0,le=_.length;se<le;se++){const xe=i.get(_[se]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(_[se])}i.remove(_),i.remove(S)}let Y=0;function K(){Y=0}function q(){const S=Y;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),Y+=1,S}function J(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.encoding),_.join()}function Z(S,_){const z=i.get(S);if(S.isVideoTexture&&Ct(S),S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){const te=S.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(z,S,_);return}}t.bindTexture(3553,z.__webglTexture,33984+_)}function U(S,_){const z=i.get(S);if(S.version>0&&z.__version!==S.version){ue(z,S,_);return}t.bindTexture(35866,z.__webglTexture,33984+_)}function O(S,_){const z=i.get(S);if(S.version>0&&z.__version!==S.version){ue(z,S,_);return}t.bindTexture(32879,z.__webglTexture,33984+_)}function ie(S,_){const z=i.get(S);if(S.version>0&&z.__version!==S.version){oe(z,S,_);return}t.bindTexture(34067,z.__webglTexture,33984+_)}const ee={[Ln]:10497,[St]:33071,[ka]:33648},ae={[rt]:9728,[tr]:9984,[Ts]:9986,[Ft]:9729,[eh]:9985,[Pn]:9987};function G(S,_,z){if(z?(r.texParameteri(S,10242,ee[_.wrapS]),r.texParameteri(S,10243,ee[_.wrapT]),(S===32879||S===35866)&&r.texParameteri(S,32882,ee[_.wrapR]),r.texParameteri(S,10240,ae[_.magFilter]),r.texParameteri(S,10241,ae[_.minFilter])):(r.texParameteri(S,10242,33071),r.texParameteri(S,10243,33071),(S===32879||S===35866)&&r.texParameteri(S,32882,33071),(_.wrapS!==St||_.wrapT!==St)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,10240,D(_.magFilter)),r.texParameteri(S,10241,D(_.minFilter)),_.minFilter!==rt&&_.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===rt||_.minFilter!==Ts&&_.minFilter!==Pn||_.type===ci&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Rn&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(r.texParameterf(S,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Se(S,_){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",X));const te=_.source;let se=u.get(te);se===void 0&&(se={},u.set(te,se));const le=J(_);if(le!==S.__cacheKey){se[le]===void 0&&(se[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),se[le].usedTimes++;const xe=se[S.__cacheKey];xe!==void 0&&(se[S.__cacheKey].usedTimes--,xe.usedTimes===0&&L(_)),S.__cacheKey=le,S.__webglTexture=se[le].texture}return z}function ue(S,_,z){let te=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(te=35866),_.isData3DTexture&&(te=32879);const se=Se(S,_),le=_.source;t.bindTexture(te,S.__webglTexture,33984+z);const xe=i.get(le);if(le.version!==xe.__version||se===!0){t.activeTexture(33984+z),r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);const w=b(_)&&x(_.image)===!1;let R=E(_.image,w,!1,p);R=gt(_,R);const ce=x(R)||a,fe=s.convert(_.format,_.encoding);let he=s.convert(_.type),ke=k(_.internalFormat,fe,he,_.encoding,_.isVideoTexture);G(te,_,ce);let ge;const De=_.mipmaps,Le=a&&_.isVideoTexture!==!0,Ge=xe.__version===void 0||se===!0,T=C(_,R,ce);if(_.isDepthTexture)ke=6402,a?_.type===ci?ke=36012:_.type===Mi?ke=33190:_.type===an?ke=35056:ke=33189:_.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===wi&&ke===6402&&_.type!==Bo&&_.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Mi,he=s.convert(_.type)),_.format===ln&&ke===6402&&(ke=34041,_.type!==an&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=an,he=s.convert(_.type))),Ge&&(Le?t.texStorage2D(3553,1,ke,R.width,R.height):t.texImage2D(3553,0,ke,R.width,R.height,0,fe,he,null));else if(_.isDataTexture)if(De.length>0&&ce){Le&&Ge&&t.texStorage2D(3553,T,ke,De[0].width,De[0].height);for(let H=0,Q=De.length;H<Q;H++)ge=De[H],Le?t.texSubImage2D(3553,H,0,0,ge.width,ge.height,fe,he,ge.data):t.texImage2D(3553,H,ke,ge.width,ge.height,0,fe,he,ge.data);_.generateMipmaps=!1}else Le?(Ge&&t.texStorage2D(3553,T,ke,R.width,R.height),t.texSubImage2D(3553,0,0,0,R.width,R.height,fe,he,R.data)):t.texImage2D(3553,0,ke,R.width,R.height,0,fe,he,R.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Le&&Ge&&t.texStorage3D(35866,T,ke,De[0].width,De[0].height,R.depth);for(let H=0,Q=De.length;H<Q;H++)ge=De[H],_.format!==Dt?fe!==null?Le?t.compressedTexSubImage3D(35866,H,0,0,0,ge.width,ge.height,R.depth,fe,ge.data,0,0):t.compressedTexImage3D(35866,H,ke,ge.width,ge.height,R.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,H,0,0,0,ge.width,ge.height,R.depth,fe,he,ge.data):t.texImage3D(35866,H,ke,ge.width,ge.height,R.depth,0,fe,he,ge.data)}else{Le&&Ge&&t.texStorage2D(3553,T,ke,De[0].width,De[0].height);for(let H=0,Q=De.length;H<Q;H++)ge=De[H],_.format!==Dt?fe!==null?Le?t.compressedTexSubImage2D(3553,H,0,0,ge.width,ge.height,fe,ge.data):t.compressedTexImage2D(3553,H,ke,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,H,0,0,ge.width,ge.height,fe,he,ge.data):t.texImage2D(3553,H,ke,ge.width,ge.height,0,fe,he,ge.data)}else if(_.isDataArrayTexture)Le?(Ge&&t.texStorage3D(35866,T,ke,R.width,R.height,R.depth),t.texSubImage3D(35866,0,0,0,0,R.width,R.height,R.depth,fe,he,R.data)):t.texImage3D(35866,0,ke,R.width,R.height,R.depth,0,fe,he,R.data);else if(_.isData3DTexture)Le?(Ge&&t.texStorage3D(32879,T,ke,R.width,R.height,R.depth),t.texSubImage3D(32879,0,0,0,0,R.width,R.height,R.depth,fe,he,R.data)):t.texImage3D(32879,0,ke,R.width,R.height,R.depth,0,fe,he,R.data);else if(_.isFramebufferTexture){if(Ge)if(Le)t.texStorage2D(3553,T,ke,R.width,R.height);else{let H=R.width,Q=R.height;for(let de=0;de<T;de++)t.texImage2D(3553,de,ke,H,Q,0,fe,he,null),H>>=1,Q>>=1}}else if(De.length>0&&ce){Le&&Ge&&t.texStorage2D(3553,T,ke,De[0].width,De[0].height);for(let H=0,Q=De.length;H<Q;H++)ge=De[H],Le?t.texSubImage2D(3553,H,0,0,fe,he,ge):t.texImage2D(3553,H,ke,fe,he,ge);_.generateMipmaps=!1}else Le?(Ge&&t.texStorage2D(3553,T,ke,R.width,R.height),t.texSubImage2D(3553,0,0,0,fe,he,R)):t.texImage2D(3553,0,ke,fe,he,R);A(_,ce)&&P(te),xe.__version=le.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function oe(S,_,z){if(_.image.length!==6)return;const te=Se(S,_),se=_.source;t.bindTexture(34067,S.__webglTexture,33984+z);const le=i.get(se);if(se.version!==le.__version||te===!0){t.activeTexture(33984+z),r.pixelStorei(37440,_.flipY),r.pixelStorei(37441,_.premultiplyAlpha),r.pixelStorei(3317,_.unpackAlignment),r.pixelStorei(37443,0);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,w=_.image[0]&&_.image[0].isDataTexture,R=[];for(let H=0;H<6;H++)!xe&&!w?R[H]=E(_.image[H],!1,!0,h):R[H]=w?_.image[H].image:_.image[H],R[H]=gt(_,R[H]);const ce=R[0],fe=x(ce)||a,he=s.convert(_.format,_.encoding),ke=s.convert(_.type),ge=k(_.internalFormat,he,ke,_.encoding),De=a&&_.isVideoTexture!==!0,Le=le.__version===void 0||te===!0;let Ge=C(_,ce,fe);G(34067,_,fe);let T;if(xe){De&&Le&&t.texStorage2D(34067,Ge,ge,ce.width,ce.height);for(let H=0;H<6;H++){T=R[H].mipmaps;for(let Q=0;Q<T.length;Q++){const de=T[Q];_.format!==Dt?he!==null?De?t.compressedTexSubImage2D(34069+H,Q,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(34069+H,Q,ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+H,Q,0,0,de.width,de.height,he,ke,de.data):t.texImage2D(34069+H,Q,ge,de.width,de.height,0,he,ke,de.data)}}}else{T=_.mipmaps,De&&Le&&(T.length>0&&Ge++,t.texStorage2D(34067,Ge,ge,R[0].width,R[0].height));for(let H=0;H<6;H++)if(w){De?t.texSubImage2D(34069+H,0,0,0,R[H].width,R[H].height,he,ke,R[H].data):t.texImage2D(34069+H,0,ge,R[H].width,R[H].height,0,he,ke,R[H].data);for(let Q=0;Q<T.length;Q++){const ye=T[Q].image[H].image;De?t.texSubImage2D(34069+H,Q+1,0,0,ye.width,ye.height,he,ke,ye.data):t.texImage2D(34069+H,Q+1,ge,ye.width,ye.height,0,he,ke,ye.data)}}else{De?t.texSubImage2D(34069+H,0,0,0,he,ke,R[H]):t.texImage2D(34069+H,0,ge,he,ke,R[H]);for(let Q=0;Q<T.length;Q++){const de=T[Q];De?t.texSubImage2D(34069+H,Q+1,0,0,he,ke,de.image[H]):t.texImage2D(34069+H,Q+1,ge,he,ke,de.image[H])}}}A(_,fe)&&P(34067),le.__version=se.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ne(S,_,z,te,se){const le=s.convert(z.format,z.encoding),xe=s.convert(z.type),w=k(z.internalFormat,le,xe,z.encoding);i.get(_).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,w,_.width,_.height,_.depth,0,le,xe,null):t.texImage2D(se,0,w,_.width,_.height,0,le,xe,null)),t.bindFramebuffer(36160,S),ze(_)?d.framebufferTexture2DMultisampleEXT(36160,te,se,i.get(z).__webglTexture,0,je(_)):(se===3553||se>=34069&&se<=34074)&&r.framebufferTexture2D(36160,te,se,i.get(z).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(S,_,z){if(r.bindRenderbuffer(36161,S),_.depthBuffer&&!_.stencilBuffer){let te=33189;if(z||ze(_)){const se=_.depthTexture;se&&se.isDepthTexture&&(se.type===ci?te=36012:se.type===Mi&&(te=33190));const le=je(_);ze(_)?d.renderbufferStorageMultisampleEXT(36161,le,te,_.width,_.height):r.renderbufferStorageMultisample(36161,le,te,_.width,_.height)}else r.renderbufferStorage(36161,te,_.width,_.height);r.framebufferRenderbuffer(36160,36096,36161,S)}else if(_.depthBuffer&&_.stencilBuffer){const te=je(_);z&&ze(_)===!1?r.renderbufferStorageMultisample(36161,te,35056,_.width,_.height):ze(_)?d.renderbufferStorageMultisampleEXT(36161,te,35056,_.width,_.height):r.renderbufferStorage(36161,34041,_.width,_.height),r.framebufferRenderbuffer(36160,33306,36161,S)}else{const te=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let se=0;se<te.length;se++){const le=te[se],xe=s.convert(le.format,le.encoding),w=s.convert(le.type),R=k(le.internalFormat,xe,w,le.encoding),ce=je(_);z&&ze(_)===!1?r.renderbufferStorageMultisample(36161,ce,R,_.width,_.height):ze(_)?d.renderbufferStorageMultisampleEXT(36161,ce,R,_.width,_.height):r.renderbufferStorage(36161,R,_.width,_.height)}}r.bindRenderbuffer(36161,null)}function pe(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);const te=i.get(_.depthTexture).__webglTexture,se=je(_);if(_.depthTexture.format===wi)ze(_)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,se):r.framebufferTexture2D(36160,36096,3553,te,0);else if(_.depthTexture.format===ln)ze(_)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,se):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function me(S){const _=i.get(S),z=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");pe(_.__webglFramebuffer,S)}else if(z){_.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,_.__webglFramebuffer[te]),_.__webglDepthbuffer[te]=r.createRenderbuffer(),ve(_.__webglDepthbuffer[te],S,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=r.createRenderbuffer(),ve(_.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function qe(S,_,z){const te=i.get(S);_!==void 0&&ne(te.__webglFramebuffer,S,S.texture,36064,3553),z!==void 0&&me(S)}function Je(S){const _=S.texture,z=i.get(S),te=i.get(_);S.addEventListener("dispose",$),S.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=_.version,o.memory.textures++);const se=S.isWebGLCubeRenderTarget===!0,le=S.isWebGLMultipleRenderTargets===!0,xe=x(S)||a;if(se){z.__webglFramebuffer=[];for(let w=0;w<6;w++)z.__webglFramebuffer[w]=r.createFramebuffer()}else{if(z.__webglFramebuffer=r.createFramebuffer(),le)if(n.drawBuffers){const w=S.texture;for(let R=0,ce=w.length;R<ce;R++){const fe=i.get(w[R]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&ze(S)===!1){const w=le?_:[_];z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let R=0;R<w.length;R++){const ce=w[R];z.__webglColorRenderbuffer[R]=r.createRenderbuffer(),r.bindRenderbuffer(36161,z.__webglColorRenderbuffer[R]);const fe=s.convert(ce.format,ce.encoding),he=s.convert(ce.type),ke=k(ce.internalFormat,fe,he,ce.encoding,S.isXRRenderTarget===!0),ge=je(S);r.renderbufferStorageMultisample(36161,ge,ke,S.width,S.height),r.framebufferRenderbuffer(36160,36064+R,36161,z.__webglColorRenderbuffer[R])}r.bindRenderbuffer(36161,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(z.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,te.__webglTexture),G(34067,_,xe);for(let w=0;w<6;w++)ne(z.__webglFramebuffer[w],S,_,36064,34069+w);A(_,xe)&&P(34067),t.unbindTexture()}else if(le){const w=S.texture;for(let R=0,ce=w.length;R<ce;R++){const fe=w[R],he=i.get(fe);t.bindTexture(3553,he.__webglTexture),G(3553,fe,xe),ne(z.__webglFramebuffer,S,fe,36064+R,3553),A(fe,xe)&&P(3553)}t.unbindTexture()}else{let w=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?w=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(w,te.__webglTexture),G(w,_,xe),ne(z.__webglFramebuffer,S,_,36064,w),A(_,xe)&&P(w),t.unbindTexture()}S.depthBuffer&&me(S)}function Qe(S){const _=x(S)||a,z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0,se=z.length;te<se;te++){const le=z[te];if(A(le,_)){const xe=S.isWebGLCubeRenderTarget?34067:3553,w=i.get(le).__webglTexture;t.bindTexture(xe,w),P(xe),t.unbindTexture()}}}function dt(S){if(a&&S.samples>0&&ze(S)===!1){const _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],z=S.width,te=S.height;let se=16384;const le=[],xe=S.stencilBuffer?33306:36096,w=i.get(S),R=S.isWebGLMultipleRenderTargets===!0;if(R)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(36160,w.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,w.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,w.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,w.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){le.push(36064+ce),S.depthBuffer&&le.push(xe);const fe=w.__ignoreDepthValues!==void 0?w.__ignoreDepthValues:!1;if(fe===!1&&(S.depthBuffer&&(se|=256),S.stencilBuffer&&(se|=1024)),R&&r.framebufferRenderbuffer(36008,36064,36161,w.__webglColorRenderbuffer[ce]),fe===!0&&(r.invalidateFramebuffer(36008,[xe]),r.invalidateFramebuffer(36009,[xe])),R){const he=i.get(_[ce]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,he,0)}r.blitFramebuffer(0,0,z,te,0,0,z,te,se,9728),f&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),R)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(36160,w.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,w.__webglColorRenderbuffer[ce]);const fe=i.get(_[ce]).__webglTexture;t.bindFramebuffer(36160,w.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,fe,0)}t.bindFramebuffer(36009,w.__webglMultisampledFramebuffer)}}function je(S){return Math.min(c,S.samples)}function ze(S){const _=i.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ct(S){const _=o.render.frame;g.get(S)!==_&&(g.set(S,_),S.update())}function gt(S,_){const z=S.encoding,te=S.format,se=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===ya||z!==Fi&&(z===Ve?a===!1?e.has("EXT_sRGB")===!0&&te===Dt?(S.format=ya,S.minFilter=Ft,S.generateMipmaps=!1):_=zo.sRGBToLinear(_):(te!==Dt||se!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),_}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=Z,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=ie,this.rebindTextures=qe,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ze}function Sf(r,e,t){const i=t.isWebGL2;function n(s,o=null){let a;if(s===Ti)return 5121;if(s===sh)return 32819;if(s===ah)return 32820;if(s===th)return 5120;if(s===ih)return 5122;if(s===Bo)return 5123;if(s===nh)return 5124;if(s===Mi)return 5125;if(s===ci)return 5126;if(s===Rn)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rh)return 6406;if(s===Dt)return 6408;if(s===lh)return 6409;if(s===hh)return 6410;if(s===wi)return 6402;if(s===ln)return 34041;if(s===oh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ya)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ch)return 6403;if(s===ph)return 36244;if(s===dh)return 33319;if(s===uh)return 33320;if(s===fh)return 36249;if(s===Fs||s===Ds||s===Ls||s===Ps)if(o===Ve)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ds)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ls)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ir||s===nr||s===sr||s===ar)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ir)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ar)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rr||s===or)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===rr)return o===Ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===or)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===lr||s===hr||s===cr||s===pr||s===dr||s===ur||s===fr||s===mr||s===gr||s===kr||s===yr||s===Er||s===_r||s===xr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===lr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===dr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ur)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===mr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Er)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_r)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xr)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===vr)return o===Ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===an?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class wf extends pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const m of e.hand.values()){const u=t.getJointPose(m,i),y=this._getHandJoint(h,m);u!==null&&(y.matrix.fromArray(u.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=u.radius),y.visible=u!==null}const p=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=p.position.distanceTo(c.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Af extends lt{constructor(e,t,i,n,s,o,a,l,h,p){if(p=p!==void 0?p:wi,p!==wi&&p!==ln)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===wi&&(i=Mi),i===void 0&&p===ln&&(i=an),super(null,n,s,o,a,l,p,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rt,this.minFilter=l!==void 0?l:rt,this.flipY=!1,this.generateMipmaps=!1}}class Tf extends Ri{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=null,h=null,p=null,c=null,d=null,f=null;const g=t.getContextAttributes();let m=null,u=null;const y=[],M=[],E=new Set,x=new Map,b=new pt;b.layers.enable(1),b.viewport=new Oe;const A=new pt;A.layers.enable(2),A.viewport=new Oe;const P=[b,A],k=new wf;k.layers.enable(1),k.layers.enable(2);let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let O=y[U];return O===void 0&&(O=new aa,y[U]=O),O.getTargetRaySpace()},this.getControllerGrip=function(U){let O=y[U];return O===void 0&&(O=new aa,y[U]=O),O.getGripSpace()},this.getHand=function(U){let O=y[U];return O===void 0&&(O=new aa,y[U]=O),O.getHandSpace()};function X(U){const O=M.indexOf(U.inputSource);if(O===-1)return;const ie=y[O];ie!==void 0&&ie.dispatchEvent({type:U.type,data:U.inputSource})}function $(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",$),n.removeEventListener("inputsourceschange",B);for(let U=0;U<y.length;U++){const O=M[U];O!==null&&(M[U]=null,y[U].disconnect(O))}C=null,D=null,e.setRenderTarget(m),d=null,c=null,p=null,n=null,u=null,Z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return p},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(U){if(n=U,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",$),n.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,t,O),n.updateRenderState({baseLayer:d}),u=new Di(d.framebufferWidth,d.framebufferHeight,{format:Dt,type:Ti,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let O=null,ie=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,O=g.stencil?ln:wi,ie=g.stencil?an:Mi);const ae={colorFormat:32856,depthFormat:ee,scaleFactor:s};p=new XRWebGLBinding(n,t),c=p.createProjectionLayer(ae),n.updateRenderState({layers:[c]}),u=new Di(c.textureWidth,c.textureHeight,{format:Dt,type:Ti,depthTexture:new Af(c.textureWidth,c.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const G=e.properties.get(u);G.__ignoreDepthValues=c.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await n.requestReferenceSpace(a),Z.setContext(n),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function B(U){for(let O=0;O<U.removed.length;O++){const ie=U.removed[O],ee=M.indexOf(ie);ee>=0&&(M[ee]=null,y[ee].disconnect(ie))}for(let O=0;O<U.added.length;O++){const ie=U.added[O];let ee=M.indexOf(ie);if(ee===-1){for(let G=0;G<y.length;G++)if(G>=M.length){M.push(ie),ee=G;break}else if(M[G]===null){M[G]=ie,ee=G;break}if(ee===-1)break}const ae=y[ee];ae&&ae.connect(ie)}}const L=new F,V=new F;function Y(U,O,ie){L.setFromMatrixPosition(O.matrixWorld),V.setFromMatrixPosition(ie.matrixWorld);const ee=L.distanceTo(V),ae=O.projectionMatrix.elements,G=ie.projectionMatrix.elements,Se=ae[14]/(ae[10]-1),ue=ae[14]/(ae[10]+1),oe=(ae[9]+1)/ae[5],ne=(ae[9]-1)/ae[5],ve=(ae[8]-1)/ae[0],pe=(G[8]+1)/G[0],me=Se*ve,qe=Se*pe,Je=ee/(-ve+pe),Qe=Je*-ve;O.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Qe),U.translateZ(Je),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const dt=Se+Je,je=ue+Je,ze=me-Qe,Ct=qe+(ee-Qe),gt=oe*ue/je*dt,S=ne*ue/je*dt;U.projectionMatrix.makePerspective(ze,Ct,gt,S,dt,je)}function K(U,O){O===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(O.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(n===null)return;k.near=A.near=b.near=U.near,k.far=A.far=b.far=U.far,(C!==k.near||D!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),C=k.near,D=k.far);const O=U.parent,ie=k.cameras;K(k,O);for(let ae=0;ae<ie.length;ae++)K(ie[ae],O);k.matrixWorld.decompose(k.position,k.quaternion,k.scale),U.matrix.copy(k.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const ee=U.children;for(let ae=0,G=ee.length;ae<G;ae++)ee[ae].updateMatrixWorld(!0);ie.length===2?Y(k,b,A):k.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return k},this.getFoveation=function(){if(c!==null)return c.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(U){c!==null&&(c.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.getPlanes=function(){return E};let q=null;function J(U,O){if(h=O.getViewerPose(l||o),f=O,h!==null){const ie=h.views;d!==null&&(e.setRenderTargetFramebuffer(u,d.framebuffer),e.setRenderTarget(u));let ee=!1;ie.length!==k.cameras.length&&(k.cameras.length=0,ee=!0);for(let ae=0;ae<ie.length;ae++){const G=ie[ae];let Se=null;if(d!==null)Se=d.getViewport(G);else{const oe=p.getViewSubImage(c,G);Se=oe.viewport,ae===0&&(e.setRenderTargetTextures(u,oe.colorTexture,c.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(u))}let ue=P[ae];ue===void 0&&(ue=new pt,ue.layers.enable(ae),ue.viewport=new Oe,P[ae]=ue),ue.matrix.fromArray(G.transform.matrix),ue.projectionMatrix.fromArray(G.projectionMatrix),ue.viewport.set(Se.x,Se.y,Se.width,Se.height),ae===0&&k.matrix.copy(ue.matrix),ee===!0&&k.cameras.push(ue)}}for(let ie=0;ie<y.length;ie++){const ee=M[ie],ae=y[ie];ee!==null&&ae!==void 0&&ae.update(ee,O,l||o)}if(q&&q(U,O),O.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let ie=null;for(const ee of E)O.detectedPlanes.has(ee)||(ie===null&&(ie=[]),ie.push(ee));if(ie!==null)for(const ee of ie)E.delete(ee),x.delete(ee),i.dispatchEvent({type:"planeremoved",data:ee});for(const ee of O.detectedPlanes)if(!E.has(ee))E.add(ee),x.set(ee,O.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ee});else{const ae=x.get(ee);ee.lastChangedTime>ae&&(x.set(ee,ee.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ee}))}}f=null}const Z=new $o;Z.setAnimationLoop(J),this.setAnimationLoop=function(U){q=U},this.dispose=function(){}}}function Ff(r,e){function t(m,u){u.color.getRGB(m.fogColor.value,jo(r)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,y,M,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?n(m,u):u.isMeshToonMaterial?(n(m,u),p(m,u)):u.isMeshPhongMaterial?(n(m,u),h(m,u)):u.isMeshStandardMaterial?(n(m,u),c(m,u),u.isMeshPhysicalMaterial&&d(m,u,E)):u.isMeshMatcapMaterial?(n(m,u),f(m,u)):u.isMeshDepthMaterial?n(m,u):u.isMeshDistanceMaterial?(n(m,u),g(m,u)):u.isMeshNormalMaterial?n(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?a(m,u,y,M):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function n(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.bumpMap&&(m.bumpMap.value=u.bumpMap,m.bumpScale.value=u.bumpScale,u.side===It&&(m.bumpScale.value*=-1)),u.displacementMap&&(m.displacementMap.value=u.displacementMap,m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap),u.normalMap&&(m.normalMap.value=u.normalMap,m.normalScale.value.copy(u.normalScale),u.side===It&&m.normalScale.value.negate()),u.specularMap&&(m.specularMap.value=u.specularMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=e.get(u).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const x=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*x}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity);let M;u.map?M=u.map:u.specularMap?M=u.specularMap:u.displacementMap?M=u.displacementMap:u.normalMap?M=u.normalMap:u.bumpMap?M=u.bumpMap:u.roughnessMap?M=u.roughnessMap:u.metalnessMap?M=u.metalnessMap:u.alphaMap?M=u.alphaMap:u.emissiveMap?M=u.emissiveMap:u.clearcoatMap?M=u.clearcoatMap:u.clearcoatNormalMap?M=u.clearcoatNormalMap:u.clearcoatRoughnessMap?M=u.clearcoatRoughnessMap:u.iridescenceMap?M=u.iridescenceMap:u.iridescenceThicknessMap?M=u.iridescenceThicknessMap:u.specularIntensityMap?M=u.specularIntensityMap:u.specularColorMap?M=u.specularColorMap:u.transmissionMap?M=u.transmissionMap:u.thicknessMap?M=u.thicknessMap:u.sheenColorMap?M=u.sheenColorMap:u.sheenRoughnessMap&&(M=u.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let E;u.aoMap?E=u.aoMap:u.lightMap&&(E=u.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uv2Transform.value.copy(E.matrix))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function a(m,u,y,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=M*.5,u.map&&(m.map.value=u.map),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let E;u.map?E=u.map:u.alphaMap&&(E=u.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix))}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let y;u.map?y=u.map:u.alphaMap&&(y=u.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function c(m,u){m.roughness.value=u.roughness,m.metalness.value=u.metalness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap)),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),m.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===It&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap)),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap)}function f(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){m.referencePosition.value.copy(u.referencePosition),m.nearDistance.value=u.nearDistance,m.farDistance.value=u.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Df(r,e,t,i){let n={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(M,E){const x=E.program;i.uniformBlockBinding(M,x)}function h(M,E){let x=n[M.id];x===void 0&&(g(M),x=p(M),n[M.id]=x,M.addEventListener("dispose",u));const b=E.program;i.updateUBOMapping(M,b);const A=e.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function p(M){const E=c();M.__bindingPointIndex=E;const x=r.createBuffer(),b=M.__size,A=M.usage;return r.bindBuffer(35345,x),r.bufferData(35345,b,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,E,x),x}function c(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=n[M.id],x=M.uniforms,b=M.__cache;r.bindBuffer(35345,E);for(let A=0,P=x.length;A<P;A++){const k=x[A];if(f(k,A,b)===!0){const C=k.__offset,D=Array.isArray(k.value)?k.value:[k.value];let X=0;for(let $=0;$<D.length;$++){const B=D[$],L=m(B);typeof B=="number"?(k.__data[0]=B,r.bufferSubData(35345,C+X,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=B.elements[0],k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=B.elements[0],k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=B.elements[0]):(B.toArray(k.__data,X),X+=L.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,C,k.__data)}}r.bindBuffer(35345,null)}function f(M,E,x){const b=M.value;if(x[E]===void 0){if(typeof b=="number")x[E]=b;else{const A=Array.isArray(b)?b:[b],P=[];for(let k=0;k<A.length;k++)P.push(A[k].clone());x[E]=P}return!0}else if(typeof b=="number"){if(x[E]!==b)return x[E]=b,!0}else{const A=Array.isArray(x[E])?x[E]:[x[E]],P=Array.isArray(b)?b:[b];for(let k=0;k<A.length;k++){const C=A[k];if(C.equals(P[k])===!1)return C.copy(P[k]),!0}}return!1}function g(M){const E=M.uniforms;let x=0;const b=16;let A=0;for(let P=0,k=E.length;P<k;P++){const C=E[P],D={boundary:0,storage:0},X=Array.isArray(C.value)?C.value:[C.value];for(let $=0,B=X.length;$<B;$++){const L=X[$],V=m(L);D.boundary+=V.boundary,D.storage+=V.storage}if(C.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,P>0){A=x%b;const $=b-A;A!==0&&$-D.boundary<0&&(x+=b-A,C.__offset=x)}x+=D.storage}return A=x%b,A>0&&(x+=b-A),M.__size=x,M.__cache={},this}function m(M){const E={boundary:0,storage:0};return typeof M=="number"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function u(M){const E=M.target;E.removeEventListener("dispose",u);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(n[E.id]),delete n[E.id],delete s[E.id]}function y(){for(const M in n)r.deleteBuffer(n[M]);o=[],n={},s={}}return{bind:l,update:h,dispose:y}}function Lf(){const r=Nn("canvas");return r.style.display="block",r}function Na(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Lf(),t=r.context!==void 0?r.context:null,i=r.depth!==void 0?r.depth:!0,n=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let p;t!==null?p=t.getContextAttributes().alpha:p=r.alpha!==void 0?r.alpha:!1;let c=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Fi,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;const m=this;let u=!1,y=0,M=0,E=null,x=-1,b=null;const A=new Oe,P=new Oe;let k=null,C=e.width,D=e.height,X=1,$=null,B=null;const L=new Oe(0,0,C,D),V=new Oe(0,0,C,D);let Y=!1;const K=new Pa;let q=!1,J=!1,Z=null;const U=new _e,O=new Me,ie=new F,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return E===null?X:1}let G=t;function Se(v,N){for(let W=0;W<v.length;W++){const I=v[W],j=e.getContext(I,N);if(j!==null)return j}return null}try{const v={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Aa}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",De,!1),G===null){const N=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&N.shift(),G=Se(N,v),G===null)throw Se(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ue,oe,ne,ve,pe,me,qe,Je,Qe,dt,je,ze,Ct,gt,S,_,z,te,se,le,xe,w,R,ce;function fe(){ue=new Gd(G),oe=new Bd(G,ue,r),ue.init(oe),w=new Sf(G,ue,oe),ne=new bf(G,ue,oe),ve=new qd,pe=new hf,me=new Mf(G,ue,ne,pe,oe,w,ve),qe=new Od(m),Je=new Vd(m),Qe=new ec(G,oe),R=new Rd(G,ue,Qe,oe),dt=new Hd(G,Qe,ve,R),je=new Zd(G,dt,Qe,ve),se=new Yd(G,oe,me),_=new Nd(pe),ze=new lf(m,qe,Je,ue,oe,R,_),Ct=new Ff(m,pe),gt=new pf,S=new kf(ue,oe),te=new Pd(m,qe,Je,ne,je,p,o),z=new vf(m,je,oe),ce=new Df(G,ve,oe,ne),le=new Id(G,ue,ve,oe),xe=new Wd(G,ue,ve,oe),ve.programs=ze.programs,m.capabilities=oe,m.extensions=ue,m.properties=pe,m.renderLists=gt,m.shadowMap=z,m.state=ne,m.info=ve}fe();const he=new Tf(m,G);this.xr=he,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const v=ue.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ue.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(v){v!==void 0&&(X=v,this.setSize(C,D,!1))},this.getSize=function(v){return v.set(C,D)},this.setSize=function(v,N,W){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=v,D=N,e.width=Math.floor(v*X),e.height=Math.floor(N*X),W!==!1&&(e.style.width=v+"px",e.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(C*X,D*X).floor()},this.setDrawingBufferSize=function(v,N,W){C=v,D=N,X=W,e.width=Math.floor(v*W),e.height=Math.floor(N*W),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(A)},this.getViewport=function(v){return v.copy(L)},this.setViewport=function(v,N,W,I){v.isVector4?L.set(v.x,v.y,v.z,v.w):L.set(v,N,W,I),ne.viewport(A.copy(L).multiplyScalar(X).floor())},this.getScissor=function(v){return v.copy(V)},this.setScissor=function(v,N,W,I){v.isVector4?V.set(v.x,v.y,v.z,v.w):V.set(v,N,W,I),ne.scissor(P.copy(V).multiplyScalar(X).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(v){ne.setScissorTest(Y=v)},this.setOpaqueSort=function(v){$=v},this.setTransparentSort=function(v){B=v},this.getClearColor=function(v){return v.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(v=!0,N=!0,W=!0){let I=0;v&&(I|=16384),N&&(I|=256),W&&(I|=1024),G.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",De,!1),gt.dispose(),S.dispose(),pe.dispose(),qe.dispose(),Je.dispose(),je.dispose(),R.dispose(),ce.dispose(),ze.dispose(),he.dispose(),he.removeEventListener("sessionstart",de),he.removeEventListener("sessionend",ye),Z&&(Z.dispose(),Z=null),Ue.stop()};function ke(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const v=ve.autoReset,N=z.enabled,W=z.autoUpdate,I=z.needsUpdate,j=z.type;fe(),ve.autoReset=v,z.enabled=N,z.autoUpdate=W,z.needsUpdate=I,z.type=j}function De(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Le(v){const N=v.target;N.removeEventListener("dispose",Le),Ge(N)}function Ge(v){T(v),pe.remove(v)}function T(v){const N=pe.get(v).programs;N!==void 0&&(N.forEach(function(W){ze.releaseProgram(W)}),v.isShaderMaterial&&ze.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,W,I,j,Ee){N===null&&(N=ee);const be=j.isMesh&&j.matrixWorld.determinant()<0,Ce=yl(v,N,W,I,j);ne.setMaterial(I,be);let Te=W.index,Be=1;I.wireframe===!0&&(Te=dt.getWireframeAttribute(W),Be=2);const Pe=W.drawRange,Re=W.attributes.position;let Ze=Pe.start*Be,xt=(Pe.start+Pe.count)*Be;Ee!==null&&(Ze=Math.max(Ze,Ee.start*Be),xt=Math.min(xt,(Ee.start+Ee.count)*Be)),Te!==null?(Ze=Math.max(Ze,0),xt=Math.min(xt,Te.count)):Re!=null&&(Ze=Math.max(Ze,0),xt=Math.min(xt,Re.count));const jt=xt-Ze;if(jt<0||jt===1/0)return;R.setup(j,I,Ce,W,Te);let mi,$e=le;if(Te!==null&&(mi=Qe.get(Te),$e=xe,$e.setIndex(mi)),j.isMesh)I.wireframe===!0?(ne.setLineWidth(I.wireframeLinewidth*ae()),$e.setMode(1)):$e.setMode(4);else if(j.isLine){let Ie=I.linewidth;Ie===void 0&&(Ie=1),ne.setLineWidth(Ie*ae()),j.isLineSegments?$e.setMode(1):j.isLineLoop?$e.setMode(2):$e.setMode(3)}else j.isPoints?$e.setMode(0):j.isSprite&&$e.setMode(4);if(j.isInstancedMesh)$e.renderInstances(Ze,jt,j.count);else if(W.isInstancedBufferGeometry){const Ie=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ss=Math.min(W.instanceCount,Ie);$e.renderInstances(Ze,jt,Ss)}else $e.render(Ze,jt)},this.compile=function(v,N){function W(I,j,Ee){I.transparent===!0&&I.side===Hn?(I.side=It,I.needsUpdate=!0,At(I,j,Ee),I.side=Ai,I.needsUpdate=!0,At(I,j,Ee),I.side=Hn):At(I,j,Ee)}d=S.get(v),d.init(),g.push(d),v.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(m.physicallyCorrectLights),v.traverse(function(I){const j=I.material;if(j)if(Array.isArray(j))for(let Ee=0;Ee<j.length;Ee++){const be=j[Ee];W(be,v,I)}else W(j,v,I)}),g.pop(),d=null};let H=null;function Q(v){H&&H(v)}function de(){Ue.stop()}function ye(){Ue.start()}const Ue=new $o;Ue.setAnimationLoop(Q),typeof self<"u"&&Ue.setContext(self),this.setAnimationLoop=function(v){H=v,he.setAnimationLoop(v),v===null?Ue.stop():Ue.start()},he.addEventListener("sessionstart",de),he.addEventListener("sessionend",ye),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),v.isScene===!0&&v.onBeforeRender(m,v,N,E),d=S.get(v,g.length),d.init(),g.push(d),U.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(U),J=this.localClippingEnabled,q=_.init(this.clippingPlanes,J,N),c=gt.get(v,f.length),c.init(),f.push(c),nt(v,N,0,m.sortObjects),c.finish(),m.sortObjects===!0&&c.sort($,B),q===!0&&_.beginShadows();const W=d.state.shadowsArray;if(z.render(W,v,N),q===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(c,v),d.setupLights(m.physicallyCorrectLights),N.isArrayCamera){const I=N.cameras;for(let j=0,Ee=I.length;j<Ee;j++){const be=I[j];ht(c,v,be,be.viewport)}}else ht(c,v,N);E!==null&&(me.updateMultisampleRenderTarget(E),me.updateRenderTargetMipmap(E)),v.isScene===!0&&v.onAfterRender(m,v,N),R.resetDefaultState(),x=-1,b=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?c=f[f.length-1]:c=null};function nt(v,N,W,I){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||K.intersectsSprite(v)){I&&ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(U);const be=je.update(v),Ce=v.material;Ce.visible&&c.push(v,be,Ce,W,ie.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(v.isSkinnedMesh&&v.skeleton.frame!==ve.render.frame&&(v.skeleton.update(),v.skeleton.frame=ve.render.frame),!v.frustumCulled||K.intersectsObject(v))){I&&ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(U);const be=je.update(v),Ce=v.material;if(Array.isArray(Ce)){const Te=be.groups;for(let Be=0,Pe=Te.length;Be<Pe;Be++){const Re=Te[Be],Ze=Ce[Re.materialIndex];Ze&&Ze.visible&&c.push(v,be,Ze,W,ie.z,Re)}}else Ce.visible&&c.push(v,be,Ce,W,ie.z,null)}}const Ee=v.children;for(let be=0,Ce=Ee.length;be<Ce;be++)nt(Ee[be],N,W,I)}function ht(v,N,W,I){const j=v.opaque,Ee=v.transmissive,be=v.transparent;d.setupLightsView(W),Ee.length>0&&fi(j,N,W),I&&ne.viewport(A.copy(I)),j.length>0&&We(j,N,W),Ee.length>0&&We(Ee,N,W),be.length>0&&We(be,N,W),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function fi(v,N,W){const I=oe.isWebGL2;Z===null&&(Z=new Di(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Rn:Ti,minFilter:Pn,samples:I&&s===!0?4:0})),m.getDrawingBufferSize(O),I?Z.setSize(O.x,O.y):Z.setSize(gs(O.x),gs(O.y));const j=m.getRenderTarget();m.setRenderTarget(Z),m.clear();const Ee=m.toneMapping;m.toneMapping=ii,We(v,N,W),m.toneMapping=Ee,me.updateMultisampleRenderTarget(Z),me.updateRenderTargetMipmap(Z),m.setRenderTarget(j)}function We(v,N,W){const I=N.isScene===!0?N.overrideMaterial:null;for(let j=0,Ee=v.length;j<Ee;j++){const be=v[j],Ce=be.object,Te=be.geometry,Be=I===null?be.material:I,Pe=be.group;Ce.layers.test(W.layers)&&Xt(Ce,N,W,Te,Be,Pe)}}function Xt(v,N,W,I,j,Ee){v.onBeforeRender(m,N,W,I,j,Ee),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),j.onBeforeRender(m,N,W,I,v,Ee),j.transparent===!0&&j.side===Hn?(j.side=It,j.needsUpdate=!0,m.renderBufferDirect(W,N,I,j,v,Ee),j.side=Ai,j.needsUpdate=!0,m.renderBufferDirect(W,N,I,j,v,Ee),j.side=Hn):m.renderBufferDirect(W,N,I,j,v,Ee),v.onAfterRender(m,N,W,I,j,Ee)}function At(v,N,W){N.isScene!==!0&&(N=ee);const I=pe.get(v),j=d.state.lights,Ee=d.state.shadowsArray,be=j.state.version,Ce=ze.getParameters(v,j.state,Ee,N,W),Te=ze.getProgramCacheKey(Ce);let Be=I.programs;I.environment=v.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(v.isMeshStandardMaterial?Je:qe).get(v.envMap||I.environment),Be===void 0&&(v.addEventListener("dispose",Le),Be=new Map,I.programs=Be);let Pe=Be.get(Te);if(Pe!==void 0){if(I.currentProgram===Pe&&I.lightsStateVersion===be)return qa(v,Ce),Pe}else Ce.uniforms=ze.getUniforms(v),v.onBuild(W,Ce,m),v.onBeforeCompile(Ce,m),Pe=ze.acquireProgram(Ce,Te),Be.set(Te,Pe),I.uniforms=Ce.uniforms;const Re=I.uniforms;(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=_.uniform),qa(v,Ce),I.needsLights=_l(v),I.lightsStateVersion=be,I.needsLights&&(Re.ambientLightColor.value=j.state.ambient,Re.lightProbe.value=j.state.probe,Re.directionalLights.value=j.state.directional,Re.directionalLightShadows.value=j.state.directionalShadow,Re.spotLights.value=j.state.spot,Re.spotLightShadows.value=j.state.spotShadow,Re.rectAreaLights.value=j.state.rectArea,Re.ltc_1.value=j.state.rectAreaLTC1,Re.ltc_2.value=j.state.rectAreaLTC2,Re.pointLights.value=j.state.point,Re.pointLightShadows.value=j.state.pointShadow,Re.hemisphereLights.value=j.state.hemi,Re.directionalShadowMap.value=j.state.directionalShadowMap,Re.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Re.spotShadowMap.value=j.state.spotShadowMap,Re.spotLightMatrix.value=j.state.spotLightMatrix,Re.spotLightMap.value=j.state.spotLightMap,Re.pointShadowMap.value=j.state.pointShadowMap,Re.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ze=Pe.getUniforms(),xt=ds.seqWithValue(Ze.seq,Re);return I.currentProgram=Pe,I.uniformsList=xt,Pe}function qa(v,N){const W=pe.get(v);W.outputEncoding=N.outputEncoding,W.instancing=N.instancing,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function yl(v,N,W,I,j){N.isScene!==!0&&(N=ee),me.resetTextureUnits();const Ee=N.fog,be=I.isMeshStandardMaterial?N.environment:null,Ce=E===null?m.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Fi,Te=(I.isMeshStandardMaterial?Je:qe).get(I.envMap||be),Be=I.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pe=!!I.normalMap&&!!W.attributes.tangent,Re=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,xt=!!W.morphAttributes.color,jt=I.toneMapped?m.toneMapping:ii,mi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$e=mi!==void 0?mi.length:0,Ie=pe.get(I),Ss=d.state.lights;if(q===!0&&(J===!0||v!==b)){const vt=v===b&&I.id===x;_.setState(I,v,vt)}let st=!1;I.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Ss.state.version||Ie.outputEncoding!==Ce||j.isInstancedMesh&&Ie.instancing===!1||!j.isInstancedMesh&&Ie.instancing===!0||j.isSkinnedMesh&&Ie.skinning===!1||!j.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Te||I.fog===!0&&Ie.fog!==Ee||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==_.numPlanes||Ie.numIntersection!==_.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==Pe||Ie.morphTargets!==Re||Ie.morphNormals!==Ze||Ie.morphColors!==xt||Ie.toneMapping!==jt||oe.isWebGL2===!0&&Ie.morphTargetsCount!==$e)&&(st=!0):(st=!0,Ie.__version=I.version);let gi=Ie.currentProgram;st===!0&&(gi=At(I,N,j));let Xa=!1,fn=!1,ws=!1;const ut=gi.getUniforms(),ki=Ie.uniforms;if(ne.useProgram(gi.program)&&(Xa=!0,fn=!0,ws=!0),I.id!==x&&(x=I.id,fn=!0),Xa||b!==v){if(ut.setValue(G,"projectionMatrix",v.projectionMatrix),oe.logarithmicDepthBuffer&&ut.setValue(G,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),b!==v&&(b=v,fn=!0,ws=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const vt=ut.map.cameraPosition;vt!==void 0&&vt.setValue(G,ie.setFromMatrixPosition(v.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&ut.setValue(G,"isOrthographic",v.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||j.isSkinnedMesh)&&ut.setValue(G,"viewMatrix",v.matrixWorldInverse)}if(j.isSkinnedMesh){ut.setOptional(G,j,"bindMatrix"),ut.setOptional(G,j,"bindMatrixInverse");const vt=j.skeleton;vt&&(oe.floatVertexTextures?(vt.boneTexture===null&&vt.computeBoneTexture(),ut.setValue(G,"boneTexture",vt.boneTexture,me),ut.setValue(G,"boneTextureSize",vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cs=W.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0&&oe.isWebGL2===!0)&&se.update(j,W,I,gi),(fn||Ie.receiveShadow!==j.receiveShadow)&&(Ie.receiveShadow=j.receiveShadow,ut.setValue(G,"receiveShadow",j.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ki.envMap.value=Te,ki.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),fn&&(ut.setValue(G,"toneMappingExposure",m.toneMappingExposure),Ie.needsLights&&El(ki,ws),Ee&&I.fog===!0&&Ct.refreshFogUniforms(ki,Ee),Ct.refreshMaterialUniforms(ki,I,X,D,Z),ds.upload(G,Ie.uniformsList,ki,me)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ds.upload(G,Ie.uniformsList,ki,me),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&ut.setValue(G,"center",j.center),ut.setValue(G,"modelViewMatrix",j.modelViewMatrix),ut.setValue(G,"normalMatrix",j.normalMatrix),ut.setValue(G,"modelMatrix",j.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const vt=I.uniformsGroups;for(let As=0,xl=vt.length;As<xl;As++)if(oe.isWebGL2){const ja=vt[As];ce.update(ja,gi),ce.bind(ja,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function El(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function _l(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(v,N,W){pe.get(v.texture).__webglTexture=N,pe.get(v.depthTexture).__webglTexture=W;const I=pe.get(v);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=W===void 0,I.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,N){const W=pe.get(v);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,W=0){E=v,y=N,M=W;let I=!0,j=null,Ee=!1,be=!1;if(v){const Te=pe.get(v);Te.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(36160,null),I=!1):Te.__webglFramebuffer===void 0?me.setupRenderTarget(v):Te.__hasExternalTextures&&me.rebindTextures(v,pe.get(v.texture).__webglTexture,pe.get(v.depthTexture).__webglTexture);const Be=v.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);const Pe=pe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(j=Pe[N],Ee=!0):oe.isWebGL2&&v.samples>0&&me.useMultisampledRTT(v)===!1?j=pe.get(v).__webglMultisampledFramebuffer:j=Pe,A.copy(v.viewport),P.copy(v.scissor),k=v.scissorTest}else A.copy(L).multiplyScalar(X).floor(),P.copy(V).multiplyScalar(X).floor(),k=Y;if(ne.bindFramebuffer(36160,j)&&oe.drawBuffers&&I&&ne.drawBuffers(v,j),ne.viewport(A),ne.scissor(P),ne.setScissorTest(k),Ee){const Te=pe.get(v.texture);G.framebufferTexture2D(36160,36064,34069+N,Te.__webglTexture,W)}else if(be){const Te=pe.get(v.texture),Be=N||0;G.framebufferTextureLayer(36160,36064,Te.__webglTexture,W||0,Be)}x=-1},this.readRenderTargetPixels=function(v,N,W,I,j,Ee,be){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=pe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){ne.bindFramebuffer(36160,Ce);try{const Te=v.texture,Be=Te.format,Pe=Te.type;if(Be!==Dt&&w.convert(Be)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Pe===Rn&&(ue.has("EXT_color_buffer_half_float")||oe.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Pe!==Ti&&w.convert(Pe)!==G.getParameter(35738)&&!(Pe===ci&&(oe.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-I&&W>=0&&W<=v.height-j&&G.readPixels(N,W,I,j,w.convert(Be),w.convert(Pe),Ee)}finally{const Te=E!==null?pe.get(E).__webglFramebuffer:null;ne.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(v,N,W=0){const I=Math.pow(2,-W),j=Math.floor(N.image.width*I),Ee=Math.floor(N.image.height*I);me.setTexture2D(N,0),G.copyTexSubImage2D(3553,W,0,0,v.x,v.y,j,Ee),ne.unbindTexture()},this.copyTextureToTexture=function(v,N,W,I=0){const j=N.image.width,Ee=N.image.height,be=w.convert(W.format),Ce=w.convert(W.type);me.setTexture2D(W,0),G.pixelStorei(37440,W.flipY),G.pixelStorei(37441,W.premultiplyAlpha),G.pixelStorei(3317,W.unpackAlignment),N.isDataTexture?G.texSubImage2D(3553,I,v.x,v.y,j,Ee,be,Ce,N.image.data):N.isCompressedTexture?G.compressedTexSubImage2D(3553,I,v.x,v.y,N.mipmaps[0].width,N.mipmaps[0].height,be,N.mipmaps[0].data):G.texSubImage2D(3553,I,v.x,v.y,be,Ce,N.image),I===0&&W.generateMipmaps&&G.generateMipmap(3553),ne.unbindTexture()},this.copyTextureToTexture3D=function(v,N,W,I,j=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=v.max.x-v.min.x+1,be=v.max.y-v.min.y+1,Ce=v.max.z-v.min.z+1,Te=w.convert(I.format),Be=w.convert(I.type);let Pe;if(I.isData3DTexture)me.setTexture3D(I,0),Pe=32879;else if(I.isDataArrayTexture)me.setTexture2DArray(I,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,I.flipY),G.pixelStorei(37441,I.premultiplyAlpha),G.pixelStorei(3317,I.unpackAlignment);const Re=G.getParameter(3314),Ze=G.getParameter(32878),xt=G.getParameter(3316),jt=G.getParameter(3315),mi=G.getParameter(32877),$e=W.isCompressedTexture?W.mipmaps[0]:W.image;G.pixelStorei(3314,$e.width),G.pixelStorei(32878,$e.height),G.pixelStorei(3316,v.min.x),G.pixelStorei(3315,v.min.y),G.pixelStorei(32877,v.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(Pe,j,N.x,N.y,N.z,Ee,be,Ce,Te,Be,$e.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Pe,j,N.x,N.y,N.z,Ee,be,Ce,Te,$e.data)):G.texSubImage3D(Pe,j,N.x,N.y,N.z,Ee,be,Ce,Te,Be,$e),G.pixelStorei(3314,Re),G.pixelStorei(32878,Ze),G.pixelStorei(3316,xt),G.pixelStorei(3315,jt),G.pixelStorei(32877,mi),j===0&&I.generateMipmaps&&G.generateMipmap(Pe),ne.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?me.setTextureCube(v,0):v.isData3DTexture?me.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?me.setTexture2DArray(v,0):me.setTexture2D(v,0),ne.unbindTexture()},this.resetState=function(){y=0,M=0,E=null,ne.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Pf extends Na{}Pf.prototype.isWebGL1Renderer=!0;class tl extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const oo=new F,lo=new Oe,ho=new Oe,Rf=new F,co=new _e;class If extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new _e,this.bindMatrixInverse=new _e}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Oe,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,n=this.geometry;lo.fromBufferAttribute(n.attributes.skinIndex,e),ho.fromBufferAttribute(n.attributes.skinWeight,e),oo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=ho.getComponent(s);if(o!==0){const a=lo.getComponent(s);co.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Rf.copy(oo).applyMatrix4(co),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class xa extends Xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bf extends lt{constructor(e=null,t=1,i=1,n,s,o,a,l,h=rt,p=rt,c,d){super(null,o,a,l,h,p,n,s,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const po=new _e,Nf=new _e;class Oa{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new _e;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Nf;po.multiplyMatrices(a,t[s]),po.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Oa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=No(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Bf(t,e,e,Dt,ci);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new xa),this.bones.push(o),this.boneInverses.push(new _e().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const o=t[n];e.bones.push(o.uuid);const a=i[n];e.boneInverses.push(a.toArray())}return e}}class il extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uo=new F,fo=new F,mo=new _e,ra=new Ho,ls=new _s;class Of extends Xe{constructor(e=new zt,t=new il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)uo.fromBufferAttribute(t,n-1),fo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new Et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(n),ls.radius+=s,e.ray.intersectsSphere(ls)===!1)return;mo.copy(n).invert(),ra.copy(e.ray).applyMatrix4(mo);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new F,p=new F,c=new F,d=new F,f=this.isLineSegments?2:1,g=i.index,u=i.attributes.position;if(g!==null){const y=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let E=y,x=M-1;E<x;E+=f){const b=g.getX(E),A=g.getX(E+1);if(h.fromBufferAttribute(u,b),p.fromBufferAttribute(u,A),ra.distanceSqToSegment(h,p,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(d);k<e.near||k>e.far||t.push({distance:k,point:c.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,o.start),M=Math.min(u.count,o.start+o.count);for(let E=y,x=M-1;E<x;E+=f){if(h.fromBufferAttribute(u,E),p.fromBufferAttribute(u,E+1),ra.distanceSqToSegment(h,p,d,c)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:c.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Uf{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,h;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),h=i[n]-o,h<0)a=n+1;else if(h>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);const p=i[n],d=i[n+1]-p,f=(o-p)/d;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),a=this.getPoint(s),l=t||(o.isVector2?new Me:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new F,n=[],s=[],o=[],a=new F,l=new _e;for(let f=0;f<=e;f++){const g=f/e;n[f]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let h=Number.MAX_VALUE;const p=Math.abs(n[0].x),c=Math.abs(n[0].y),d=Math.abs(n[0].z);p<=h&&(h=p,i.set(1,0,0)),c<=h&&(h=c,i.set(0,1,0)),d<=h&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ot(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(ot(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Tn extends Ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class va extends Ii{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ys,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function oi(r,e,t){return nl(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function hs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function nl(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zf(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function go(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[o++]=r[a+l]}return n}function sl(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[n++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=r[n++];while(s!==void 0)}class vs{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vf extends vs{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:br,endingEnd:br}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mr:s=e,a=2*t-i;break;case Sr:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mr:o=e,l=2*i-t;break;case Sr:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}const h=(i-t)*.5,p=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(l-i),this._offsetPrev=s*p,this._offsetNext=o*p}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,p=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),m=g*g,u=m*g,y=-d*u+2*d*m-d*g,M=(1+d)*u+(-1.5-2*d)*m+(-.5+d)*g+1,E=(-1-f)*u+(1.5+f)*m+.5*g,x=f*u-f*m;for(let b=0;b!==a;++b)s[b]=y*o[p+b]+M*o[h+b]+E*o[l+b]+x*o[c+b];return s}}class Gf extends vs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,h=l-a,p=(i-t)/(n-t),c=1-p;for(let d=0;d!==a;++d)s[d]=o[h+d]*c+o[l+d]*p;return s}}class Hf extends vs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class qt{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hs(t,this.TimeBufferType),this.values=hs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:hs(e.times,Array),values:hs(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fs:t=this.InterpolantFactoryMethodDiscrete;break;case ms:t=this.InterpolantFactoryMethodLinear;break;case Rs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return ms;case this.InterpolantFactoryMethodSmooth:return Rs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=oi(i,s,o),this.values=oi(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&nl(n))for(let a=0,l=n.length;a!==l;++a){const h=n[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){const e=oi(this.times),t=oi(this.values),i=this.getValueSize(),n=this.getInterpolation()===Rs,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const h=e[a],p=e[a+1];if(h!==p&&(a!==1||h!==e[0]))if(n)l=!0;else{const c=a*i,d=c-i,f=c+i;for(let g=0;g!==i;++g){const m=t[c+g];if(m!==t[d+g]||m!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const c=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[c+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,h=0;h!==i;++h)t[l+h]=t[a+h];++o}return o!==e.length?(this.times=oi(e,0,o),this.values=oi(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=oi(this.times,0),t=oi(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=ms;class pn extends qt{}pn.prototype.ValueTypeName="bool";pn.prototype.ValueBufferType=Array;pn.prototype.DefaultInterpolation=fs;pn.prototype.InterpolantFactoryMethodLinear=void 0;pn.prototype.InterpolantFactoryMethodSmooth=void 0;class al extends qt{}al.prototype.ValueTypeName="color";class On extends qt{}On.prototype.ValueTypeName="number";class Wf extends vs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let h=e*a;for(let p=h+a;h!==p;h+=4)Pt.slerpFlat(s,0,o,h-a,o,h,l);return s}}class dn extends qt{InterpolantFactoryMethodLinear(e){return new Wf(this.times,this.values,this.getValueSize(),e)}}dn.prototype.ValueTypeName="quaternion";dn.prototype.DefaultInterpolation=ms;dn.prototype.InterpolantFactoryMethodSmooth=void 0;class un extends qt{}un.prototype.ValueTypeName="string";un.prototype.ValueBufferType=Array;un.prototype.DefaultInterpolation=fs;un.prototype.InterpolantFactoryMethodLinear=void 0;un.prototype.InterpolantFactoryMethodSmooth=void 0;class Un extends qt{}Un.prototype.ValueTypeName="vector";class qf{constructor(e,t=-1,i,n=gh){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ui(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(jf(i[o]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(qt.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],h=[];l.push((a+s-1)%s,a,(a+1)%s),h.push(0,1,0);const p=zf(l);l=go(l,1,p),h=go(h,1,p),!n&&l[0]===0&&(l.push(s),h.push(h[0])),o.push(new On(".morphTargetInfluences["+t[a].name+"]",l,h).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const h=e[a],p=h.name.match(s);if(p&&p.length>1){const c=p[1];let d=n[c];d||(n[c]=d=[]),d.push(h)}}const o=[];for(const a in n)o.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(c,d,f,g,m){if(f.length!==0){const u=[],y=[];sl(f,u,y,g),u.length!==0&&m.push(new c(d,u,y))}},n=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const h=e.hierarchy||[];for(let c=0;c<h.length;c++){const d=h[c].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)f[d[g].morphTargets[m]]=-1;for(const m in f){const u=[],y=[];for(let M=0;M!==d[g].morphTargets.length;++M){const E=d[g];u.push(E.time),y.push(E.morphTarget===m?1:0)}n.push(new On(".morphTargetInfluence["+m+"]",u,y))}l=f.length*o}else{const f=".bones["+t[c].name+"]";i(Un,f+".position",d,"pos",n),i(dn,f+".quaternion",d,"rot",n),i(Un,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Xf(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return On;case"vector":case"vector2":case"vector3":case"vector4":return Un;case"color":return al;case"quaternion":return dn;case"bool":case"boolean":return pn;case"string":return un}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function jf(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Xf(r.type);if(r.times===void 0){const t=[],i=[];sl(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ks={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Yf{constructor(e,t,i){const n=this;let s=!1,o=0,a=0,l;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){a++,s===!1&&n.onStart!==void 0&&n.onStart(p,o,a),s=!0},this.itemEnd=function(p){o++,n.onProgress!==void 0&&n.onProgress(p,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(p){n.onError!==void 0&&n.onError(p)},this.resolveURL=function(p){return l?l(p):p},this.setURLModifier=function(p){return l=p,this},this.addHandler=function(p,c){return h.push(p,c),this},this.removeHandler=function(p){const c=h.indexOf(p);return c!==-1&&h.splice(c,2),this},this.getHandler=function(p){for(let c=0,d=h.length;c<d;c+=2){const f=h[c],g=h[c+1];if(f.global&&(f.lastIndex=0),f.test(p))return g}return null}}}const Zf=new Yf;class bs{constructor(e){this.manager=e!==void 0?e:Zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Qt={};class $f extends Error{constructor(e,t){super(e),this.response=t}}class Kf extends bs{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ks.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Qt[e]!==void 0){Qt[e].push({onLoad:t,onProgress:i,onError:n});return}Qt[e]=[],Qt[e].push({onLoad:t,onProgress:i,onError:n});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const p=Qt[e],c=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let m=0;const u=new ReadableStream({start(y){M();function M(){c.read().then(({done:E,value:x})=>{if(E)y.close();else{m+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let A=0,P=p.length;A<P;A++){const k=p[A];k.onProgress&&k.onProgress(b)}y.enqueue(x),M()}})}}});return new Response(u)}else throw new $f(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(l){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(p=>new DOMParser().parseFromString(p,a));case"json":return h.json();default:if(a===void 0)return h.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),d=c&&c[1]?c[1].toLowerCase():void 0,f=new TextDecoder(d);return h.arrayBuffer().then(g=>f.decode(g))}}}).then(h=>{ks.add(e,h);const p=Qt[e];delete Qt[e];for(let c=0,d=p.length;c<d;c++){const f=p[c];f.onLoad&&f.onLoad(h)}}).catch(h=>{const p=Qt[e];if(p===void 0)throw this.manager.itemError(e),h;delete Qt[e];for(let c=0,d=p.length;c<d;c++){const f=p[c];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jf extends bs{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ks.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Nn("img");function l(){p(),ks.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(c){p(),n&&n(c),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){a.removeEventListener("load",l,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ua extends bs{constructor(e){super(e)}load(e,t,i,n){const s=new lt,o=new Jf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class Ms extends Xe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const oa=new _e,ko=new F,yo=new F;class za{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(ko),yo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yo),t.updateMatrixWorld(),oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qf extends za{constructor(){super(new pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Bn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class em extends Ms{constructor(e,t,i=0,n=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Qf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Eo=new _e,vn=new F,la=new F;class tm extends za{constructor(){super(new pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new Oe(2,1,1,1),new Oe(0,1,1,1),new Oe(3,1,1,1),new Oe(1,1,1,1),new Oe(3,0,1,1),new Oe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),vn.setFromMatrixPosition(e.matrixWorld),i.position.copy(vn),la.copy(i.position),la.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(la),i.updateMatrixWorld(),n.makeTranslation(-vn.x,-vn.y,-vn.z),Eo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo)}}class _o extends Ms{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new tm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class im extends za{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zn extends Ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DefaultUp),this.updateMatrix(),this.target=new Xe,this.shadow=new im}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Va extends Ms{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ga{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ha="\\[\\]\\.:\\/",nm=new RegExp("["+Ha+"]","g"),Wa="[^"+Ha+"]",sm="[^"+Ha.replace("\\.","")+"]",am=/((?:WC+[\/:])*)/.source.replace("WC",Wa),rm=/(WCOD+)?/.source.replace("WCOD",sm),om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wa),lm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wa),hm=new RegExp("^"+am+rm+om+lm+"$"),cm=["material","materials","bones","map"];class pm{constructor(e,t,i){const n=i||Ne.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ne{constructor(e,t,i){this.path=t,this.parsedPath=i||Ne.parseTrackName(t),this.node=Ne.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ne.Composite(e,t,i):new Ne(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nm,"")}static parseTrackName(e){const t=hm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);cm.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Ne.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[n];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ne.Composite=pm;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class xo{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var vo=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(vo(""))}catch{vo=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var Lt=Uint8Array,pi=Uint16Array,ba=Uint32Array,rl=new Lt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ol=new Lt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),dm=new Lt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ll=function(r,e){for(var t=new pi(31),i=0;i<31;++i)t[i]=e+=1<<r[i-1];for(var n=new ba(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)n[s]=s-t[i]<<5|i;return[t,n]},hl=ll(rl,2),cl=hl[0],um=hl[1];cl[28]=258,um[258]=28;var fm=ll(ol,0),mm=fm[0],Ma=new pi(32768);for(var He=0;He<32768;++He){var li=(He&43690)>>>1|(He&21845)<<1;li=(li&52428)>>>2|(li&13107)<<2,li=(li&61680)>>>4|(li&3855)<<4,Ma[He]=((li&65280)>>>8|(li&255)<<8)>>>1}var Fn=function(r,e,t){for(var i=r.length,n=0,s=new pi(e);n<i;++n)++s[r[n]-1];var o=new pi(e);for(n=0;n<e;++n)o[n]=o[n-1]+s[n-1]<<1;var a;if(t){a=new pi(1<<e);var l=15-e;for(n=0;n<i;++n)if(r[n])for(var h=n<<4|r[n],p=e-r[n],c=o[r[n]-1]++<<p,d=c|(1<<p)-1;c<=d;++c)a[Ma[c]>>>l]=h}else for(a=new pi(i),n=0;n<i;++n)r[n]&&(a[n]=Ma[o[r[n]-1]++]>>>15-r[n]);return a},Gn=new Lt(288);for(var He=0;He<144;++He)Gn[He]=8;for(var He=144;He<256;++He)Gn[He]=9;for(var He=256;He<280;++He)Gn[He]=7;for(var He=280;He<288;++He)Gn[He]=8;var pl=new Lt(32);for(var He=0;He<32;++He)pl[He]=5;var gm=Fn(Gn,9,1),km=Fn(pl,5,1),ha=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Ut=function(r,e,t){var i=e/8|0;return(r[i]|r[i+1]<<8)>>(e&7)&t},ca=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},ym=function(r){return(r/8|0)+(r&7&&1)},Em=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var i=new(r instanceof pi?pi:r instanceof ba?ba:Lt)(t-e);return i.set(r.subarray(e,t)),i},_m=function(r,e,t){var i=r.length;if(!i||t&&!t.l&&i<5)return e||new Lt(0);var n=!e||t,s=!t||t.i;t||(t={}),e||(e=new Lt(i*3));var o=function(G){var Se=e.length;if(G>Se){var ue=new Lt(Math.max(Se*2,G));ue.set(e),e=ue}},a=t.f||0,l=t.p||0,h=t.b||0,p=t.l,c=t.d,d=t.m,f=t.n,g=i*8;do{if(!p){t.f=a=Ut(r,l,1);var m=Ut(r,l+1,3);if(l+=3,m)if(m==1)p=gm,c=km,d=9,f=5;else if(m==2){var E=Ut(r,l,31)+257,x=Ut(r,l+10,15)+4,b=E+Ut(r,l+5,31)+1;l+=14;for(var A=new Lt(b),P=new Lt(19),k=0;k<x;++k)P[dm[k]]=Ut(r,l+k*3,7);l+=x*3;for(var C=ha(P),D=(1<<C)-1,X=Fn(P,C,1),k=0;k<b;){var $=X[Ut(r,l,D)];l+=$&15;var u=$>>>4;if(u<16)A[k++]=u;else{var B=0,L=0;for(u==16?(L=3+Ut(r,l,3),l+=2,B=A[k-1]):u==17?(L=3+Ut(r,l,7),l+=3):u==18&&(L=11+Ut(r,l,127),l+=7);L--;)A[k++]=B}}var V=A.subarray(0,E),Y=A.subarray(E);d=ha(V),f=ha(Y),p=Fn(V,d,1),c=Fn(Y,f,1)}else throw"invalid block type";else{var u=ym(l)+4,y=r[u-4]|r[u-3]<<8,M=u+y;if(M>i){if(s)throw"unexpected EOF";break}n&&o(h+y),e.set(r.subarray(u,M),h),t.b=h+=y,t.p=l=M*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}n&&o(h+131072);for(var K=(1<<d)-1,q=(1<<f)-1,J=l;;J=l){var B=p[ca(r,l)&K],Z=B>>>4;if(l+=B&15,l>g){if(s)throw"unexpected EOF";break}if(!B)throw"invalid length/literal";if(Z<256)e[h++]=Z;else if(Z==256){J=l,p=null;break}else{var U=Z-254;if(Z>264){var k=Z-257,O=rl[k];U=Ut(r,l,(1<<O)-1)+cl[k],l+=O}var ie=c[ca(r,l)&q],ee=ie>>>4;if(!ie)throw"invalid distance";l+=ie&15;var Y=mm[ee];if(ee>3){var O=ol[ee];Y+=ca(r,l)&(1<<O)-1,l+=O}if(l>g){if(s)throw"unexpected EOF";break}n&&o(h+131072);for(var ae=h+U;h<ae;h+=4)e[h]=e[h-Y],e[h+1]=e[h+1-Y],e[h+2]=e[h+2-Y],e[h+3]=e[h+3-Y];h=ae}}t.l=p,t.p=J,t.b=h,p&&(a=1,t.m=d,t.d=c,t.n=f)}while(!a);return h==e.length?e:Em(e,0,h)},xm=new Lt(0),vm=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function bm(r,e){return _m((vm(r),r.subarray(2,-4)),e)}var Mm=typeof TextDecoder<"u"&&new TextDecoder,Sm=0;try{Mm.decode(xm,{stream:!0}),Sm=1}catch{}function dl(r,e,t){const i=t.length-r-1;if(e>=t[i])return i-1;if(e<=t[r])return r;let n=r,s=i,o=Math.floor((n+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:n=o,o=Math.floor((n+s)/2);return o}function wm(r,e,t,i){const n=[],s=[],o=[];n[0]=1;for(let a=1;a<=t;++a){s[a]=e-i[r+1-a],o[a]=i[r+a]-e;let l=0;for(let h=0;h<a;++h){const p=o[h+1],c=s[a-h],d=n[h]/(p+c);n[h]=l+p*d,l=c*d}n[a]=l}return n}function Cm(r,e,t,i){const n=dl(r,i,e),s=wm(n,i,r,e),o=new Oe(0,0,0,0);for(let a=0;a<=r;++a){const l=t[n-r+a],h=s[a],p=l.w*h;o.x+=l.x*p,o.y+=l.y*p,o.z+=l.z*p,o.w+=l.w*h}return o}function Am(r,e,t,i,n){const s=[];for(let c=0;c<=t;++c)s[c]=0;const o=[];for(let c=0;c<=i;++c)o[c]=s.slice(0);const a=[];for(let c=0;c<=t;++c)a[c]=s.slice(0);a[0][0]=1;const l=s.slice(0),h=s.slice(0);for(let c=1;c<=t;++c){l[c]=e-n[r+1-c],h[c]=n[r+c]-e;let d=0;for(let f=0;f<c;++f){const g=h[f+1],m=l[c-f];a[c][f]=g+m;const u=a[f][c-1]/a[c][f];a[f][c]=d+g*u,d=m*u}a[c][c]=d}for(let c=0;c<=t;++c)o[0][c]=a[c][t];for(let c=0;c<=t;++c){let d=0,f=1;const g=[];for(let m=0;m<=t;++m)g[m]=s.slice(0);g[0][0]=1;for(let m=1;m<=i;++m){let u=0;const y=c-m,M=t-m;c>=m&&(g[f][0]=g[d][0]/a[M+1][y],u=g[f][0]*a[y][M]);const E=y>=-1?1:-y,x=c-1<=M?m-1:t-c;for(let A=E;A<=x;++A)g[f][A]=(g[d][A]-g[d][A-1])/a[M+1][y+A],u+=g[f][A]*a[y+A][M];c<=M&&(g[f][m]=-g[d][m-1]/a[M+1][c],u+=g[f][m]*a[c][M]),o[m][c]=u;const b=d;d=f,f=b}}let p=t;for(let c=1;c<=i;++c){for(let d=0;d<=t;++d)o[c][d]*=p;p*=t-c}return o}function Tm(r,e,t,i,n){const s=n<r?n:r,o=[],a=dl(r,i,e),l=Am(a,i,r,s,e),h=[];for(let p=0;p<t.length;++p){const c=t[p].clone(),d=c.w;c.x*=d,c.y*=d,c.z*=d,h[p]=c}for(let p=0;p<=s;++p){const c=h[a-r].clone().multiplyScalar(l[p][0]);for(let d=1;d<=r;++d)c.add(h[a-r+d].clone().multiplyScalar(l[p][d]));o[p]=c}for(let p=s+1;p<=n+1;++p)o[p]=new Oe(0,0,0);return o}function Fm(r,e){let t=1;for(let n=2;n<=r;++n)t*=n;let i=1;for(let n=2;n<=e;++n)i*=n;for(let n=2;n<=r-e;++n)i*=n;return t/i}function Dm(r){const e=r.length,t=[],i=[];for(let s=0;s<e;++s){const o=r[s];t[s]=new F(o.x,o.y,o.z),i[s]=o.w}const n=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(n[s-a].clone().multiplyScalar(Fm(s,a)*i[a]));n[s]=o.divideScalar(i[0])}return n}function Lm(r,e,t,i,n){const s=Tm(r,e,t,i,n);return Dm(s)}class Pm extends Uf{constructor(e,t,i,n,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=n||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<i.length;++o){const a=i[o];this.controlPoints[o]=new Oe(a.x,a.y,a.z,a.w)}}getPoint(e,t=new F){const i=t,n=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=Cm(this.degree,this.knots,this.controlPoints,n);return s.w!==1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)}getTangent(e,t=new F){const i=t,n=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=Lm(this.degree,this.knots,this.controlPoints,n,1);return i.copy(s[1]).normalize(),i}}let Fe,Ye,yt;class ul extends bs{constructor(e){super(e)}load(e,t,i,n){const s=this,o=s.path===""?Ga.extractUrlBase(e):s.path,a=new Kf(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(h){n?n(h):console.error(h),s.manager.itemError(e)}},i,n)}parse(e,t){if(Um(e))Fe=new Om().parse(e);else{const n=kl(e);if(!zm(n))throw new Error("THREE.FBXLoader: Unknown format.");if(Mo(n)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Mo(n));Fe=new Nm().parse(n)}const i=new Ua(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Rm(i,this.manager).parse(Fe)}}class Rm{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Ye=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),n=this.parseDeformers(),s=new Im().parse(n);return this.parseScene(n,s,i),yt}parseConnections(){const e=new Map;return"Connections"in Fe&&Fe.Connections.connections.forEach(function(i){const n=i[0],s=i[1],o=i[2];e.has(n)||e.set(n,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(n).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:n,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Fe.Objects){const i=Fe.Objects.Video;for(const n in i){const s=i[n],o=parseInt(n);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const h=this.parseImage(i[n]);t[s.RelativeFilename||s.Filename]=h}}}}for(const i in e){const n=e[i];t[n]!==void 0?e[i]=t[n]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,n=i.slice(i.lastIndexOf(".")+1).toLowerCase();let s;switch(n){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+n+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Fe.Objects){const i=Fe.Objects.Texture;for(const n in i){const s=this.parseTexture(i[n],e);t.set(parseInt(n),s)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const n=e.WrapModeU,s=e.WrapModeV,o=n!==void 0?n.value:0,a=s!==void 0?s.value:0;if(i.wrapS=o===0?Ln:St,i.wrapT=a===0?Ln:St,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){let i;const n=this.textureLoader.path,s=Ye.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(i=t[s[0].ID],(i.indexOf("blob:")===0||i.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new lt):(l.setPath(this.textureLoader.path),o=l.load(i))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new lt):o=this.textureLoader.load(i);return this.textureLoader.setPath(n),o}parseMaterials(e){const t=new Map;if("Material"in Fe.Objects){const i=Fe.Objects.Material;for(const n in i){const s=this.parseMaterial(i[n],e);s!==null&&t.set(parseInt(n),s)}}return t}parseMaterial(e,t){const i=e.id,n=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Ye.has(i))return null;const o=this.parseParameters(e,t,i);let a;switch(s.toLowerCase()){case"phong":a=new Tn;break;case"lambert":a=new va;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Tn;break}return a.setValues(o),a.name=n,a}parseParameters(e,t,i){const n={};e.BumpFactor&&(n.bumpScale=e.BumpFactor.value),e.Diffuse?n.color=new Ae().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(n.color=new Ae().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(n.displacementScale=e.DisplacementFactor.value),e.Emissive?n.emissive=new Ae().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(n.emissive=new Ae().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(n.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(n.opacity=parseFloat(e.Opacity.value)),n.opacity<1&&(n.transparent=!0),e.ReflectionFactor&&(n.reflectivity=e.ReflectionFactor.value),e.Shininess&&(n.shininess=e.Shininess.value),e.Specular?n.specular=new Ae().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(n.specular=new Ae().fromArray(e.SpecularColor.value));const s=this;return Ye.get(i).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":n.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":n.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":n.map=s.getTexture(t,o.ID),n.map!==void 0&&(n.map.encoding=Ve);break;case"DisplacementColor":n.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":n.emissiveMap=s.getTexture(t,o.ID),n.emissiveMap!==void 0&&(n.emissiveMap.encoding=Ve);break;case"NormalMap":case"Maya|TEX_normal_map":n.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":n.envMap=s.getTexture(t,o.ID),n.envMap!==void 0&&(n.envMap.mapping=us,n.envMap.encoding=Ve);break;case"SpecularColor":n.specularMap=s.getTexture(t,o.ID),n.specularMap!==void 0&&(n.specularMap.encoding=Ve);break;case"TransparentColor":case"TransparencyFactor":n.alphaMap=s.getTexture(t,o.ID),n.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),n}getTexture(e,t){return"LayeredTexture"in Fe.Objects&&t in Fe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Ye.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Fe.Objects){const i=Fe.Objects.Deformer;for(const n in i){const s=i[n],o=Ye.get(parseInt(n));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,i);a.ID=n,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[n]=a}else if(s.attrType==="BlendShape"){const a={id:n};a.rawTargets=this.parseMorphTargets(o,i),a.id=n,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[n]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(n){const s=t[n.ID];if(s.attrType!=="Cluster")return;const o={ID:n.ID,indices:[],weights:[],transformLink:new _e().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),i.push(o)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let n=0;n<e.children.length;n++){const s=e.children[n],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Ye.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(a)}return i}parseScene(e,t,i){yt=new tn;const n=this.parseModels(e.skeletons,t,i),s=Fe.Objects.Model,o=this;n.forEach(function(l){const h=s[l.ID];o.setLookAtProperties(l,h),Ye.get(l.ID).parents.forEach(function(c){const d=n.get(c.ID);d!==void 0&&d.add(l)}),l.parent===null&&yt.add(l)}),this.bindSkeleton(e.skeletons,t,n),this.createAmbientLight(),yt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const h=ml(l.userData.transformData);l.applyMatrix4(h),l.updateWorldMatrix()}});const a=new Bm().parse();yt.children.length===1&&yt.children[0].isGroup&&(yt.children[0].animations=a,yt=yt.children[0]),yt.animations=a}parseModels(e,t,i){const n=new Map,s=Fe.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],h=Ye.get(a);let p=this.buildSkeleton(h,e,a,l.attrName);if(!p){switch(l.attrType){case"Camera":p=this.createCamera(h);break;case"Light":p=this.createLight(h);break;case"Mesh":p=this.createMesh(h,t,i);break;case"NurbsCurve":p=this.createCurve(h,t);break;case"LimbNode":case"Root":p=new xa;break;case"Null":default:p=new tn;break}p.name=l.attrName?Ne.sanitizeNodeName(l.attrName):"",p.ID=a}this.getTransformData(p,l),n.set(a,p)}return n}buildSkeleton(e,t,i,n){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(h,p){if(h.ID===o.ID){const c=s;s=new xa,s.matrixWorld.copy(h.transformLink),s.name=n?Ne.sanitizeNodeName(n):"",s.ID=i,l.bones[p]=s,c!==null&&s.add(c)}})}}),s}createCamera(e){let t,i;if(e.children.forEach(function(n){const s=Fe.Objects.NodeAttribute[n.ID];s!==void 0&&(i=s)}),i===void 0)t=new Xe;else{let n=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(n=1);let s=1;i.NearPlane!==void 0&&(s=i.NearPlane.value/1e3);let o=1e3;i.FarPlane!==void 0&&(o=i.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(a=i.AspectWidth.value,l=i.AspectHeight.value);const h=a/l;let p=45;i.FieldOfView!==void 0&&(p=i.FieldOfView.value);const c=i.FocalLength?i.FocalLength.value:null;switch(n){case 0:t=new pt(p,h,s,o),c!==null&&t.setFocalLength(c);break;case 1:t=new Ia(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+n+"."),t=new Xe;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(n){const s=Fe.Objects.NodeAttribute[n.ID];s!==void 0&&(i=s)}),i===void 0)t=new Xe;else{let n;i.LightType===void 0?n=0:n=i.LightType.value;let s=16777215;i.Color!==void 0&&(s=new Ae().fromArray(i.Color.value));let o=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(o=0);let a=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?a=0:a=i.FarAttenuationEnd.value);const l=1;switch(n){case 0:t=new _o(s,o,a,l);break;case 1:t=new zn(s,o);break;case 2:let h=Math.PI/3;i.InnerAngle!==void 0&&(h=Ht.degToRad(i.InnerAngle.value));let p=0;i.OuterAngle!==void 0&&(p=Ht.degToRad(i.OuterAngle.value),p=Math.max(p,1)),t=new em(s,o,a,h,p,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new _o(s,o);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let n,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),i.has(l.ID)&&a.push(i.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Tn({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(n=new If(s,o),n.normalizeSkinWeights()):n=new Rt(s,o),n}createCurve(e,t){const i=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),n=new il({color:3342591,linewidth:1});return new Of(i,n)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=gl(t.RotationOrder.value):i.eulerOrder="ZYX","Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&Ye.get(e.ID).children.forEach(function(n){if(n.relationship==="LookAtProperty"){const s=Fe.Objects.Model[n.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),yt.add(e.target)):e.lookAt(new F().fromArray(o))}}})}bindSkeleton(e,t,i){const n=this.parsePoseNodes();for(const s in e){const o=e[s];Ye.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const h=l.ID;Ye.get(h).parents.forEach(function(c){i.has(c.ID)&&i.get(c.ID).bind(new Oa(o.bones),n[c.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Fe.Objects){const t=Fe.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const n=t[i].PoseNode;Array.isArray(n)?n.forEach(function(s){e[s.Node]=new _e().fromArray(s.Matrix.a)}):e[n.Node]=new _e().fromArray(n.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Fe&&"AmbientColor"in Fe.GlobalSettings){const e=Fe.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],n=e[2];if(t!==0||i!==0||n!==0){const s=new Ae(t,i,n);yt.add(new Va(s,1))}}}}class Im{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Fe.Objects){const i=Fe.Objects.Geometry;for(const n in i){const s=Ye.get(parseInt(n)),o=this.parseGeometry(s,i[n],e);t.set(parseInt(n),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const n=i.skeletons,s=[],o=e.parents.map(function(c){return Fe.Objects.Model[c.ID]});if(o.length===0)return;const a=e.children.reduce(function(c,d){return n[d.ID]!==void 0&&(c=n[d.ID]),c},null);e.children.forEach(function(c){i.morphTargets[c.ID]!==void 0&&s.push(i.morphTargets[c.ID])});const l=o[0],h={};"RotationOrder"in l&&(h.eulerOrder=gl(l.RotationOrder.value)),"InheritType"in l&&(h.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(h.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(h.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(h.scale=l.GeometricScaling.value);const p=ml(h);return this.genGeometry(t,a,s,p)}genGeometry(e,t,i,n){const s=new zt;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Et(a.vertex,3);if(l.applyMatrix4(n),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Et(a.colors,3)),t&&(s.setAttribute("skinIndex",new La(a.weightsIndices,4)),s.setAttribute("skinWeight",new Et(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const h=new _t().getNormalMatrix(n),p=new Et(a.normal,3);p.applyNormalMatrix(h),s.setAttribute("normal",p)}if(a.uvs.forEach(function(h,p){let c="uv"+(p+1).toString();p===0&&(c="uv"),s.setAttribute(c,new Et(a.uvs[p],2))}),o.material&&o.material.mappingType!=="AllSame"){let h=a.materialIndex[0],p=0;if(a.materialIndex.forEach(function(c,d){c!==h&&(s.addGroup(p,d-p,h),h=c,p=d)}),s.groups.length>0){const c=s.groups[s.groups.length-1],d=c.start+c.count;d!==a.materialIndex.length&&s.addGroup(d,a.materialIndex.length-d,h)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,i,n),s}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let n=0;for(;e.LayerElementUV[n];)e.LayerElementUV[n].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[n])),n++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(n,s){n.indices.forEach(function(o,a){i.weightTable[o]===void 0&&(i.weightTable[o]=[]),i.weightTable[o].push({id:s,weight:n.weights[a]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,n=0,s=!1,o=[],a=[],l=[],h=[],p=[],c=[];const d=this;return e.vertexIndices.forEach(function(f,g){let m,u=!1;f<0&&(f=f^-1,u=!0);let y=[],M=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const E=cs(g,i,f,e.color);l.push(E[0],E[1],E[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(E){M.push(E.weight),y.push(E.id)}),M.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const E=[0,0,0,0],x=[0,0,0,0];M.forEach(function(b,A){let P=b,k=y[A];x.forEach(function(C,D,X){if(P>C){X[D]=P,P=C;const $=E[D];E[D]=k,k=$}})}),y=E,M=x}for(;M.length<4;)M.push(0),y.push(0);for(let E=0;E<4;++E)p.push(M[E]),c.push(y[E])}if(e.normal){const E=cs(g,i,f,e.normal);a.push(E[0],E[1],E[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=cs(g,i,f,e.material)[0],m<0&&(d.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(E,x){const b=cs(g,i,f,E);h[x]===void 0&&(h[x]=[]),h[x].push(b[0]),h[x].push(b[1])}),n++,u&&(n>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),d.genFace(t,e,o,m,a,l,h,p,c,n),i++,n=0,o=[],a=[],l=[],h=[],p=[],c=[])}),t}genFace(e,t,i,n,s,o,a,l,h,p){for(let c=2;c<p;c++)e.vertex.push(t.vertexPositions[i[0]]),e.vertex.push(t.vertexPositions[i[1]]),e.vertex.push(t.vertexPositions[i[2]]),e.vertex.push(t.vertexPositions[i[(c-1)*3]]),e.vertex.push(t.vertexPositions[i[(c-1)*3+1]]),e.vertex.push(t.vertexPositions[i[(c-1)*3+2]]),e.vertex.push(t.vertexPositions[i[c*3]]),e.vertex.push(t.vertexPositions[i[c*3+1]]),e.vertex.push(t.vertexPositions[i[c*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(c-1)*4]),e.vertexWeights.push(l[(c-1)*4+1]),e.vertexWeights.push(l[(c-1)*4+2]),e.vertexWeights.push(l[(c-1)*4+3]),e.vertexWeights.push(l[c*4]),e.vertexWeights.push(l[c*4+1]),e.vertexWeights.push(l[c*4+2]),e.vertexWeights.push(l[c*4+3]),e.weightsIndices.push(h[0]),e.weightsIndices.push(h[1]),e.weightsIndices.push(h[2]),e.weightsIndices.push(h[3]),e.weightsIndices.push(h[(c-1)*4]),e.weightsIndices.push(h[(c-1)*4+1]),e.weightsIndices.push(h[(c-1)*4+2]),e.weightsIndices.push(h[(c-1)*4+3]),e.weightsIndices.push(h[c*4]),e.weightsIndices.push(h[c*4+1]),e.weightsIndices.push(h[c*4+2]),e.weightsIndices.push(h[c*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(c-1)*3]),e.colors.push(o[(c-1)*3+1]),e.colors.push(o[(c-1)*3+2]),e.colors.push(o[c*3]),e.colors.push(o[c*3+1]),e.colors.push(o[c*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(n),e.materialIndex.push(n),e.materialIndex.push(n)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(c-1)*3]),e.normal.push(s[(c-1)*3+1]),e.normal.push(s[(c-1)*3+2]),e.normal.push(s[c*3]),e.normal.push(s[c*3+1]),e.normal.push(s[c*3+2])),t.uv&&t.uv.forEach(function(d,f){e.uvs[f]===void 0&&(e.uvs[f]=[]),e.uvs[f].push(a[f][0]),e.uvs[f].push(a[f][1]),e.uvs[f].push(a[f][(c-1)*2]),e.uvs[f].push(a[f][(c-1)*2+1]),e.uvs[f].push(a[f][c*2]),e.uvs[f].push(a[f][c*2+1])})}addMorphTargets(e,t,i,n){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;i.forEach(function(o){o.rawTargets.forEach(function(a){const l=Fe.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,n,a.name)})})}genMorphGeometry(e,t,i,n,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=i.Vertices!==void 0?i.Vertices.a:[],l=i.Indexes!==void 0?i.Indexes.a:[],h=e.attributes.position.count*3,p=new Float32Array(h);for(let g=0;g<l.length;g++){const m=l[g]*3;p[m]=a[g*3],p[m+1]=a[g*3+1],p[m+2]=a[g*3+2]}const c={vertexIndices:o,vertexPositions:p},d=this.genBuffers(c),f=new Et(d.vertex,3);f.name=s||i.attrName,f.applyMatrix4(n),e.morphAttributes.position.push(f)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.Normals.a;let s=[];return i==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:n,indices:s,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.UV.a;let s=[];return i==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:n,indices:s,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.Colors.a;let s=[];return i==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:n,indices:s,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const n=e.Materials.a,s=[];for(let o=0;o<n.length;++o)s.push(o);return{dataSize:1,buffer:n,indices:s,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new zt;const i=t-1,n=e.KnotVector.a,s=[],o=e.Points.a;for(let c=0,d=o.length;c<d;c+=4)s.push(new Oe().fromArray(o,c));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=i,l=n.length-1-a;for(let c=0;c<i;++c)s.push(s[c])}const p=new Pm(i,n,s,a,l).getPoints(s.length*12);return new zt().setFromPoints(p)}}class Bm{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const n=t[i],s=this.addClip(n);e.push(s)}return e}parseClips(){if(Fe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Fe.Objects.AnimationCurveNode,t=new Map;for(const i in e){const n=e[i];if(n.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:n.id,attr:n.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Fe.Objects.AnimationCurve;for(const i in t){const n={id:t[i].id,times:t[i].KeyTime.a.map(Vm),values:t[i].KeyValueFloat.a},s=Ye.get(n.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=n:a.match(/Y/)?e.get(o).curves.y=n:a.match(/Z/)?e.get(o).curves.z=n:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=n)}}}parseAnimationLayers(e){const t=Fe.Objects.AnimationLayer,i=new Map;for(const n in t){const s=[],o=Ye.get(parseInt(n));o!==void 0&&(o.children.forEach(function(l,h){if(e.has(l.ID)){const p=e.get(l.ID);if(p.curves.x!==void 0||p.curves.y!==void 0||p.curves.z!==void 0){if(s[h]===void 0){const c=Ye.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(c!==void 0){const d=Fe.Objects.Model[c.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?Ne.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};yt.traverse(function(g){g.ID===d.id&&(f.transform=g.matrix,g.userData.transformData&&(f.eulerOrder=g.userData.transformData.eulerOrder))}),f.transform||(f.transform=new _e),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[h]=f}}s[h]&&(s[h][p.attr]=p)}else if(p.curves.morph!==void 0){if(s[h]===void 0){const c=Ye.get(l.ID).parents.filter(function(y){return y.relationship!==void 0})[0].ID,d=Ye.get(c).parents[0].ID,f=Ye.get(d).parents[0].ID,g=Ye.get(f).parents[0].ID,m=Fe.Objects.Model[g],u={modelName:m.attrName?Ne.sanitizeNodeName(m.attrName):"",morphName:Fe.Objects.Deformer[c].attrName};s[h]=u}s[h][p.attr]=p}}}),i.set(parseInt(n),s))}return i}parseAnimStacks(e){const t=Fe.Objects.AnimationStack,i={};for(const n in t){const s=Ye.get(parseInt(n)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);i[n]={name:t[n].attrName,layer:o}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(n){t=t.concat(i.generateTracks(n))}),new qf(e.name,-1,t)}generateTracks(e){const t=[];let i=new F,n=new Pt,s=new F;if(e.transform&&e.transform.decompose(i,n,s),i=i.toArray(),n=new wt().setFromQuaternion(n,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,n,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,i,n){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,i);return new Un(e+"."+n,s,o)}generateRotationTrack(e,t,i,n,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Ht.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Ht.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Ht.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,i);n!==void 0&&(n=n.map(Ht.degToRad),n.push(o),n=new wt().fromArray(n),n=new Pt().setFromEuler(n)),s!==void 0&&(s=s.map(Ht.degToRad),s.push(o),s=new wt().fromArray(s),s=new Pt().setFromEuler(s).invert());const h=new Pt,p=new wt,c=[];for(let d=0;d<l.length;d+=3)p.set(l[d],l[d+1],l[d+2],o),h.setFromEuler(p),n!==void 0&&h.premultiply(n),s!==void 0&&h.multiply(s),h.toArray(c,d/3*4);return new dn(e+".quaternion",a,c)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(s){return s/100}),n=yt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new On(e.modelName+".morphTargetInfluences["+n+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,n){return i-n}),t.length>1){let i=1,n=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==n&&(t[i]=o,n=o,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const n=i,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(h){if(t.x&&(o=t.x.times.indexOf(h)),t.y&&(a=t.y.times.indexOf(h)),t.z&&(l=t.z.times.indexOf(h)),o!==-1){const p=t.x.values[o];s.push(p),n[0]=p}else s.push(n[0]);if(a!==-1){const p=t.y.values[a];s.push(p),n[1]=p}else s.push(n[1]);if(l!==-1){const p=t.z.values[l];s.push(p),n[2]=p}else s.push(n[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const i=e.values[t-1],n=e.values[t]-i,s=Math.abs(n);if(s>=180){const o=s/180,a=n/o;let l=i+a;const h=e.times[t-1],c=(e.times[t]-h)/o;let d=h+c;const f=[],g=[];for(;d<e.times[t];)f.push(d),d+=c,g.push(l),l+=a;e.times=So(e.times,t,f),e.values=So(e.values,t,g)}}}}class Nm{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new fl,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(n,s){const o=n.match(/^[\s\t]*;/),a=n.match(/^[\s\t]*$/);if(o||a)return;const l=n.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),h=n.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),p=n.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(n,l):h?t.parseNodeProperty(n,h,i[++s]):p?t.popStack():n.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(n)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),n=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:i},o=this.parseNodeAttr(n),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,s):i in a?(i==="PoseNode"?a.PoseNode.push(s):a[i].id!==void 0&&(a[i]={},a[i][a[i].id]=a[i]),o.id!==""&&(a[i][o.id]=s)):typeof o.id=="number"?(a[i]={},a[i][o.id]=s):i!=="Properties70"&&(i==="PoseNode"?a[i]=[s]:a[i]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",n="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),n=e[2]),{id:t,name:i,type:n}}parseNodeProperty(e,t,i){let n=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();n==="Content"&&s===","&&(s=i.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,n,s);return}if(n==="C"){const l=s.split(",").slice(1),h=parseInt(l[0]),p=parseInt(l[1]);let c=s.split(",").slice(3);c=c.map(function(d){return d.trim().replace(/^"/,"")}),n="connections",s=[h,p],Hm(s,c),o[n]===void 0&&(o[n]=[])}n==="Node"&&(o.id=s),n in o&&Array.isArray(o[n])?o[n].push(s):n!=="a"?o[n]=s:o.a=s,this.setCurrentProp(o,n),n==="a"&&s.slice(-1)!==","&&(o.a=da(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=da(t.a))}parseNodeSpecialProperty(e,t,i){const n=i.split('",').map(function(p){return p.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=n[0],o=n[1],a=n[2],l=n[3];let h=n[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":h=parseFloat(h);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":h=da(h);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:h},this.setCurrentProp(this.getPrevNode(),s)}}class Om{parse(e){const t=new bo(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const n=new fl;for(;!this.endOfContent(t);){const s=this.parseNode(t,i);s!==null&&n.add(s.name,s)}return n}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},n=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(n===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const h=l.length>0?l[0]:"",p=l.length>1?l[1]:"",c=l.length>2?l[2]:"";for(i.singleProperty=s===1&&e.getOffset()===n;n>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,i,d)}return i.propertyList=l,typeof h=="number"&&(i.id=h),p!==""&&(i.attrName=p),c!==""&&(i.attrType=c),a!==""&&(i.name=a),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const n=i.propertyList[0];Array.isArray(n)?(t[i.name]=i,i.a=n):t[i.name]=n}else if(e==="Connections"&&i.name==="C"){const n=[];i.propertyList.forEach(function(s,o){o!==0&&n.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(n)}else if(i.name==="Properties70")Object.keys(i).forEach(function(s){t[s]=i[s]});else if(e==="Properties70"&&i.name==="P"){let n=i.propertyList[0],s=i.propertyList[1];const o=i.propertyList[2],a=i.propertyList[3];let l;n.indexOf("Lcl ")===0&&(n=n.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[n]={type:s,type2:o,flag:a,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const n=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(n);case"d":return e.getFloat64Array(n);case"f":return e.getFloat32Array(n);case"i":return e.getInt32Array(n);case"l":return e.getInt64Array(n)}const a=bm(new Uint8Array(e.getArrayBuffer(o))),l=new bo(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(n);case"d":return l.getFloat64Array(n);case"f":return l.getFloat32Array(n);case"i":return l.getInt32Array(n);case"l":return l.getInt64Array(n)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class bo{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let n=0;n<e;n++)t[n]=this.getUint8();const i=t.indexOf(0);return i>=0&&(t=t.slice(0,i)),Ga.decodeText(new Uint8Array(t))}}class fl{add(e,t){this[e]=t}}function Um(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===kl(r,0,e.length)}function zm(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(n){const s=r[n-1];return r=r.slice(t+n),t++,s}for(let n=0;n<e.length;++n)if(i(1)===e[n])return!1;return!0}function Mo(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Vm(r){return r/46186158e3}const Gm=[];function cs(r,e,t,i){let n;switch(i.mappingType){case"ByPolygonVertex":n=r;break;case"ByPolygon":n=e;break;case"ByVertice":n=t;break;case"AllSame":n=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(n=i.indices[n]);const s=n*i.dataSize,o=s+i.dataSize;return Wm(Gm,i.buffer,s,o)}const pa=new wt,Ji=new F;function ml(r){const e=new _e,t=new _e,i=new _e,n=new _e,s=new _e,o=new _e,a=new _e,l=new _e,h=new _e,p=new _e,c=new _e,d=new _e,f=r.inheritType?r.inheritType:0;if(r.translation&&e.setPosition(Ji.fromArray(r.translation)),r.preRotation){const D=r.preRotation.map(Ht.degToRad);D.push(r.eulerOrder||wt.DefaultOrder),t.makeRotationFromEuler(pa.fromArray(D))}if(r.rotation){const D=r.rotation.map(Ht.degToRad);D.push(r.eulerOrder||wt.DefaultOrder),i.makeRotationFromEuler(pa.fromArray(D))}if(r.postRotation){const D=r.postRotation.map(Ht.degToRad);D.push(r.eulerOrder||wt.DefaultOrder),n.makeRotationFromEuler(pa.fromArray(D)),n.invert()}r.scale&&s.scale(Ji.fromArray(r.scale)),r.scalingOffset&&a.setPosition(Ji.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(Ji.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(Ji.fromArray(r.rotationOffset)),r.rotationPivot&&h.setPosition(Ji.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(c.copy(r.parentMatrix),p.copy(r.parentMatrixWorld));const g=t.clone().multiply(i).multiply(n),m=new _e;m.extractRotation(p);const u=new _e;u.copyPosition(p);const y=u.clone().invert().multiply(p),M=m.clone().invert().multiply(y),E=s,x=new _e;if(f===0)x.copy(m).multiply(g).multiply(M).multiply(E);else if(f===1)x.copy(m).multiply(M).multiply(g).multiply(E);else{const X=new _e().scale(new F().setFromMatrixScale(c)).clone().invert(),$=M.clone().multiply(X);x.copy(m).multiply(g).multiply($).multiply(E)}const b=h.clone().invert(),A=o.clone().invert();let P=e.clone().multiply(l).multiply(h).multiply(t).multiply(i).multiply(n).multiply(b).multiply(a).multiply(o).multiply(s).multiply(A);const k=new _e().copyPosition(P),C=p.clone().multiply(k);return d.copyPosition(C),P=d.clone().multiply(x),P.premultiply(p.invert()),P}function gl(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function da(r){return r.split(",").map(function(t){return parseFloat(t)})}function kl(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),Ga.decodeText(new Uint8Array(r,e,t))}function Hm(r,e){for(let t=0,i=r.length,n=e.length;t<n;t++,i++)r[i]=e[t]}function Wm(r,e,t,i){for(let n=t,s=0;n<i;n++,s++)r[s]=e[n];return r}function So(r,e,t){return r.slice(0,e).concat(t).concat(r.slice(e))}const qm={class:"fly-bird flex-horiz flex-column flex-center-all pos-r w100p",onselectstart:"return false"},Xm={class:"pos-r"},jm={class:"pos-a score"},Ym=Fo({name:"fly-bird"}),Zm=Object.assign(Ym,{setup(r){const e=hi(),[t,i,n]=[800,480,300],s=hi(0),o=new ul,a=new Ua;let[l,h]=[0,0];const p=hi(bn.wait),c=new pt(75,t/i,.001,1e4),d=new Na({logarithmicDepthBuffer:!0,antialias:!0,alpha:!0});d.shadowMap.enabled=!0;const f=new tl;d.setSize(t,i),d.setClearColor(1415935,1),c.position.set(-1200,300,800),c.lookAt(0,0,600);let g=null;const m=[{label:"大红",value:"big-red,Mesh1"},{label:"小黑",value:"small-black,Mesh1"},{label:"小白",value:"small-white,Mesh2"},{label:"小黄",value:"small-yellow,Mesh2"},{label:"小蓝",value:"small-blue,Mesh2"},{label:"大嘴",value:"big-mouth,Mesh2"},{label:"小猪",value:"small-pig,none"}],u=hi(m[0].value);bl(u,()=>{ie()}),f.add(new Va(13421772));const y=new zn(4473924);y.position.set(2e3,4e3,2e3),f.add(y);const M=new zn(4473924,.5);M.position.set(10,-10,-10),f.add(M),y.castShadow=!0,y.shadow.camera.left=-2e3,y.shadow.camera.right=2e3,y.shadow.camera.top=2e3,y.shadow.camera.bottom=-2e3,y.shadow.mapSize.width=1024,y.shadow.mapSize.height=1024,y.shadow.camera.far=1e4,y.shadow.bias=-.001,d.shadowMap.type=Lo;const E=()=>new Promise(oe=>{f.remove(g);const[ne,ve]=m.find(pe=>pe.value===u.value).value.split(",");o.load(`/bird-3d/${ne}/${ne}.fbx`,pe=>{if(g=pe,g.castShadow=!0,g.receiveShadow=!0,g.scale.set(.04,.04,.04),f.add(g),ve==="none")return oe(!0);a.load(`/bird-3d/${ne}/${ne}.jpg`,me=>{g.traverse(qe=>{qe.castShadow=!0,qe.receiveShadow=!0,qe.name===ve&&(qe.material=new Tn({map:me}),oe(!0))})})})});let[x,b,A,P,k,C,D,X]=[-.007,0,0,0,1.5,0,800,-1200];const $=()=>{const oe=new Date().getTime()-A;P=x*oe*oe/2+b*oe+C;const ne=b+x*oe;g.rotation.x=Math.min((ne-k)/(-k*2)*Math.PI-Math.PI/2,Math.PI/2),g.position.y=Math.min(D,Math.max(X,P))};let[B,L,V,Y,K,q,J]=[[],340,480,860,.4,3e3,3e3];const Z=()=>{const oe=K*h,ne=Math.floor(oe/Y);if(s.value=Math.max(Math.floor((oe-q+L+60)/Y),0),ne<0)return;let ve=-1;if(B.forEach(pe=>{ve=pe[0],pe[1].position.z=pe[2].position.z=ve*Y+q-oe+L/2}),ve!==ne){const pe=Math.random()*(D-X-V)+X+V/2;B.push([ne,...O(pe,ne*Y+q-oe+L/2)])}B=B.filter(pe=>pe[1].position.z<-5e3?(f.remove(pe[1]),f.remove(pe[2]),!1):!0)},U=()=>{const oe=K*h,ne=Math.floor((oe-q)/Y);if((oe-q)%Y>L||ne<0)return!1;const pe=B.find(me=>me[0]===ne);return pe?g.position.y<pe[2].position.y+J/2+60||g.position.y>pe[2].position.y+J/2+V-60:!1},O=(oe,ne)=>{const ve=J,pe=new Rt(new Li(L,ve,L),new va({color:16777215})),me=new Rt(new Li(L,ve,L),new va({color:16777215}));return f.add(pe,me),pe.position.y=V/2+oe+ve/2,me.position.y=-V/2+oe-ve/2,pe.position.z=me.position.z=ne,pe.receiveShadow=!0,me.receiveShadow=!0,pe.castShadow=!0,me.castShadow=!0,[pe,me]},ie=()=>{p.value=bn.over},ee=()=>{f.remove(g),B.forEach(oe=>{f.remove(oe[1]),f.remove(oe[2])}),B=[]},ae=oe=>{oe.preventDefault(),b=k,C=g.position.y,A=new Date().getTime()},G=async()=>{ee(),await E(),p.value=bn.gaming,g.position.y=0,l=new Date().getTime(),A=new Date().getTime()},Se=()=>{if(p.value===bn.gaming&&(h=new Date().getTime()-l,Z(),$(),U()))return ie()};To(()=>{e.value.appendChild(d.domElement),ue()});const ue=()=>{Se(),requestAnimationFrame(ue),d.render(f,c)};return(oe,ne)=>{const ve=Dn("a-select"),pe=Dn("a-space");return Sa(),wa("div",qm,[ti(pe,{class:"pb-sm"},{default:Si(()=>[ti(ve,{modelValue:u.value,"onUpdate:modelValue":ne[0]||(ne[0]=me=>u.value=me),options:m,style:{width:"150px"}},{prefix:Si(()=>[fa(" 选择小鸟 ")]),_:1},8,["modelValue"])]),_:1}),nn("div",Xm,[nn("div",{ref_key:"screenRef",ref:e,class:"mar-center pos-r",style:{width:"800px",height:"480px"},onClick:ae},null,512),nn("div",jm,Ya(s.value),1),ti(vl,{status:p.value,onOnClickStart:G},{default:Si(()=>[fa(" 得分："+Ya(s.value),1)]),_:1},8,["status"])])])}}}),$m=Ao(Zm,[["__scopeId","data-v-6b8044ce"]]),wo={type:"change"},ua={type:"start"},Co={type:"end"};class Km extends Ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",gt),this._domElementKeyEvents=w},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(wo),i.update(),s=n.NONE},this.update=function(){const w=new F,R=new Pt().setFromUnitVectors(e.up,new F(0,1,0)),ce=R.clone().invert(),fe=new F,he=new Pt,ke=2*Math.PI;return function(){const De=i.object.position;w.copy(De).sub(i.target),w.applyQuaternion(R),a.setFromVector3(w),i.autoRotate&&s===n.NONE&&C(P()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Le=i.minAzimuthAngle,Ge=i.maxAzimuthAngle;return isFinite(Le)&&isFinite(Ge)&&(Le<-Math.PI?Le+=ke:Le>Math.PI&&(Le-=ke),Ge<-Math.PI?Ge+=ke:Ge>Math.PI&&(Ge-=ke),Le<=Ge?a.theta=Math.max(Le,Math.min(Ge,a.theta)):a.theta=a.theta>(Le+Ge)/2?Math.max(Le,a.theta):Math.min(Ge,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=h,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),w.setFromSpherical(a),w.applyQuaternion(ce),De.copy(i.target).add(w),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),p.set(0,0,0)),h=1,c||fe.distanceToSquared(i.object.position)>o||8*(1-he.dot(i.object.quaternion))>o?(i.dispatchEvent(wo),fe.copy(i.object.position),he.copy(i.object.quaternion),c=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",z),i.domElement.removeEventListener("pointerdown",qe),i.domElement.removeEventListener("pointercancel",dt),i.domElement.removeEventListener("wheel",Ct),i.domElement.removeEventListener("pointermove",Je),i.domElement.removeEventListener("pointerup",Qe),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",gt)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=n.NONE;const o=1e-6,a=new xo,l=new xo;let h=1;const p=new F;let c=!1;const d=new Me,f=new Me,g=new Me,m=new Me,u=new Me,y=new Me,M=new Me,E=new Me,x=new Me,b=[],A={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function k(){return Math.pow(.95,i.zoomSpeed)}function C(w){l.theta-=w}function D(w){l.phi-=w}const X=function(){const w=new F;return function(ce,fe){w.setFromMatrixColumn(fe,0),w.multiplyScalar(-ce),p.add(w)}}(),$=function(){const w=new F;return function(ce,fe){i.screenSpacePanning===!0?w.setFromMatrixColumn(fe,1):(w.setFromMatrixColumn(fe,0),w.crossVectors(i.object.up,w)),w.multiplyScalar(ce),p.add(w)}}(),B=function(){const w=new F;return function(ce,fe){const he=i.domElement;if(i.object.isPerspectiveCamera){const ke=i.object.position;w.copy(ke).sub(i.target);let ge=w.length();ge*=Math.tan(i.object.fov/2*Math.PI/180),X(2*ce*ge/he.clientHeight,i.object.matrix),$(2*fe*ge/he.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(ce*(i.object.right-i.object.left)/i.object.zoom/he.clientWidth,i.object.matrix),$(fe*(i.object.top-i.object.bottom)/i.object.zoom/he.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function L(w){i.object.isPerspectiveCamera?h/=w:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*w)),i.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(w){i.object.isPerspectiveCamera?h*=w:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/w)),i.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(w){d.set(w.clientX,w.clientY)}function K(w){M.set(w.clientX,w.clientY)}function q(w){m.set(w.clientX,w.clientY)}function J(w){f.set(w.clientX,w.clientY),g.subVectors(f,d).multiplyScalar(i.rotateSpeed);const R=i.domElement;C(2*Math.PI*g.x/R.clientHeight),D(2*Math.PI*g.y/R.clientHeight),d.copy(f),i.update()}function Z(w){E.set(w.clientX,w.clientY),x.subVectors(E,M),x.y>0?L(k()):x.y<0&&V(k()),M.copy(E),i.update()}function U(w){u.set(w.clientX,w.clientY),y.subVectors(u,m).multiplyScalar(i.panSpeed),B(y.x,y.y),m.copy(u),i.update()}function O(w){w.deltaY<0?V(k()):w.deltaY>0&&L(k()),i.update()}function ie(w){let R=!1;switch(w.code){case i.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),R=!0;break;case i.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),R=!0;break;case i.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),R=!0;break;case i.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),R=!0;break}R&&(w.preventDefault(),i.update())}function ee(){if(b.length===1)d.set(b[0].pageX,b[0].pageY);else{const w=.5*(b[0].pageX+b[1].pageX),R=.5*(b[0].pageY+b[1].pageY);d.set(w,R)}}function ae(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const w=.5*(b[0].pageX+b[1].pageX),R=.5*(b[0].pageY+b[1].pageY);m.set(w,R)}}function G(){const w=b[0].pageX-b[1].pageX,R=b[0].pageY-b[1].pageY,ce=Math.sqrt(w*w+R*R);M.set(0,ce)}function Se(){i.enableZoom&&G(),i.enablePan&&ae()}function ue(){i.enableZoom&&G(),i.enableRotate&&ee()}function oe(w){if(b.length==1)f.set(w.pageX,w.pageY);else{const ce=xe(w),fe=.5*(w.pageX+ce.x),he=.5*(w.pageY+ce.y);f.set(fe,he)}g.subVectors(f,d).multiplyScalar(i.rotateSpeed);const R=i.domElement;C(2*Math.PI*g.x/R.clientHeight),D(2*Math.PI*g.y/R.clientHeight),d.copy(f)}function ne(w){if(b.length===1)u.set(w.pageX,w.pageY);else{const R=xe(w),ce=.5*(w.pageX+R.x),fe=.5*(w.pageY+R.y);u.set(ce,fe)}y.subVectors(u,m).multiplyScalar(i.panSpeed),B(y.x,y.y),m.copy(u)}function ve(w){const R=xe(w),ce=w.pageX-R.x,fe=w.pageY-R.y,he=Math.sqrt(ce*ce+fe*fe);E.set(0,he),x.set(0,Math.pow(E.y/M.y,i.zoomSpeed)),L(x.y),M.copy(E)}function pe(w){i.enableZoom&&ve(w),i.enablePan&&ne(w)}function me(w){i.enableZoom&&ve(w),i.enableRotate&&oe(w)}function qe(w){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(w.pointerId),i.domElement.addEventListener("pointermove",Je),i.domElement.addEventListener("pointerup",Qe)),te(w),w.pointerType==="touch"?S(w):je(w))}function Je(w){i.enabled!==!1&&(w.pointerType==="touch"?_(w):ze(w))}function Qe(w){se(w),b.length===0&&(i.domElement.releasePointerCapture(w.pointerId),i.domElement.removeEventListener("pointermove",Je),i.domElement.removeEventListener("pointerup",Qe)),i.dispatchEvent(Co),s=n.NONE}function dt(w){se(w)}function je(w){let R;switch(w.button){case 0:R=i.mouseButtons.LEFT;break;case 1:R=i.mouseButtons.MIDDLE;break;case 2:R=i.mouseButtons.RIGHT;break;default:R=-1}switch(R){case Bi.DOLLY:if(i.enableZoom===!1)return;K(w),s=n.DOLLY;break;case Bi.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enablePan===!1)return;q(w),s=n.PAN}else{if(i.enableRotate===!1)return;Y(w),s=n.ROTATE}break;case Bi.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enableRotate===!1)return;Y(w),s=n.ROTATE}else{if(i.enablePan===!1)return;q(w),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(ua)}function ze(w){switch(s){case n.ROTATE:if(i.enableRotate===!1)return;J(w);break;case n.DOLLY:if(i.enableZoom===!1)return;Z(w);break;case n.PAN:if(i.enablePan===!1)return;U(w);break}}function Ct(w){i.enabled===!1||i.enableZoom===!1||s!==n.NONE||(w.preventDefault(),i.dispatchEvent(ua),O(w),i.dispatchEvent(Co))}function gt(w){i.enabled===!1||i.enablePan===!1||ie(w)}function S(w){switch(le(w),b.length){case 1:switch(i.touches.ONE){case Ni.ROTATE:if(i.enableRotate===!1)return;ee(),s=n.TOUCH_ROTATE;break;case Ni.PAN:if(i.enablePan===!1)return;ae(),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(i.touches.TWO){case Ni.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Se(),s=n.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ue(),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(ua)}function _(w){switch(le(w),s){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;oe(w),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;ne(w),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;pe(w),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;me(w),i.update();break;default:s=n.NONE}}function z(w){i.enabled!==!1&&w.preventDefault()}function te(w){b.push(w)}function se(w){delete A[w.pointerId];for(let R=0;R<b.length;R++)if(b[R].pointerId==w.pointerId){b.splice(R,1);return}}function le(w){let R=A[w.pointerId];R===void 0&&(R=new Me,A[w.pointerId]=R),R.set(w.pageX,w.pageY)}function xe(w){const R=w.pointerId===b[0].pointerId?b[1]:b[0];return A[R.pointerId]}i.domElement.addEventListener("contextmenu",z),i.domElement.addEventListener("pointerdown",qe),i.domElement.addEventListener("pointercancel",dt),i.domElement.addEventListener("wheel",Ct,{passive:!1}),this.update()}}const Jm=r=>(Ml("data-v-f40a595c"),r=r(),Sl(),r),Qm={class:"fly-bird flex-horiz flex-column flex-center-all pos-r w100p",onselectstart:"return false"},eg=Jm(()=>nn("div",{class:"ml-md"},"拖动旋转，滚轮缩放",-1)),tg={class:"pos-r"},ig=Fo({name:"fly-bird"}),ng=Object.assign(ig,{setup(r){const e=hi(),[t,i,n]=[480,480,300];hi(0);const s=new ul,o=new Ua;hi(bn.wait);const a=new pt(75,t/i,.001,1e4),l=new Na({logarithmicDepthBuffer:!0,antialias:!0,alpha:!0}),h=new tl;l.setSize(t,i),l.setClearColor(1415935,1),a.position.set(-1200,300,800),a.lookAt(0,0,600);let p=null;const c=[{label:"大红",value:"big-red,Mesh1"},{label:"小黑",value:"small-black,Mesh1"},{label:"小白",value:"small-white,Mesh2"},{label:"小黄",value:"small-yellow,Mesh2"},{label:"小蓝",value:"small-blue,Mesh2"},{label:"大嘴",value:"big-mouth,Mesh2"},{label:"小猪",value:"small-pig,none"}],d=hi(c[0].value);h.add(new Va(13421772));const f=new zn(4473924);f.position.set(1e3,1e3,1e3),h.add(f);const g=new zn(4473924);g.position.set(10,-10,-10),h.add(g),new Km(a,l.domElement);const m=()=>new Promise(y=>{h.remove(p);const[M,E]=c.find(x=>x.value===d.value).value.split(",");s.load(`/bird-3d/${M}/${M}.fbx`,x=>{if(p=x,p.scale.set(.2,.2,.2),h.add(p),E==="none")return y(!0);o.load(`/bird-3d/${M}/${M}.jpg`,b=>{p.traverse(A=>{A.name===E&&(A.material=new Tn({map:b}),y(!0))})})})});m(),To(()=>{e.value.appendChild(l.domElement),u()});const u=()=>{requestAnimationFrame(u),l.render(h,a)};return(y,M)=>{const E=Dn("a-select"),x=Dn("a-space");return Sa(),wa("div",Qm,[ti(x,{class:"pb-sm"},{default:Si(()=>[ti(E,{modelValue:d.value,"onUpdate:modelValue":M[0]||(M[0]=b=>d.value=b),options:c,style:{width:"150px"},onChange:M[1]||(M[1]=b=>y.$nextTick(m))},{prefix:Si(()=>[fa(" 选择小鸟 ")]),_:1},8,["modelValue"]),eg]),_:1}),nn("div",tg,[nn("div",{ref_key:"screenRef",ref:e,class:"mar-center pos-r",style:{width:"480px",height:"480px"}},null,512)])])}}}),sg=Ao(ng,[["__scopeId","data-v-f40a595c"]]),ag=Ca("",5),rg=Ca("",5),og=Ca("",4),pg=JSON.parse('{"title":"飞翔的小鸟-3d","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"games/fly-bird.md","filePath":"games/fly-bird.md"}'),lg={name:"games/fly-bird.md"},dg=Object.assign(lg,{setup(r){return(e,t)=>{const i=Dn("ClientOnly");return Sa(),wa("div",null,[ag,ti(i,null,{default:Si(()=>[ti($m)]),_:1}),rg,ti(i,null,{default:Si(()=>[ti(sg)]),_:1}),og])}}});export{pg as __pageData,dg as default};
