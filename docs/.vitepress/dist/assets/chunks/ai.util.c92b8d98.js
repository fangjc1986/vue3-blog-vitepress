import{l as f}from"./lodash.783d75e0.js";const c=class i{constructor(t=5,e=null){this.root=e,this.maxDepth=t}getBestChoiceByState(t,e=!0,a=this.maxDepth,h=i.MIN_SCORE,l=i.MAX_SCORE){if(a===0||this.isLeafState&&this.isLeafState(t))return this.getEvaluateResult(t,e);let s=e?i.MIN_SCORE:i.MAX_SCORE,o=null;const n=this.getNextLevelState(e,t);for(const S of n){const r=this.getBestChoiceByState(S,!e,a-1,h,l);if(e?r>s&&(s=r,a===this.maxDepth&&(o=f.cloneDeep(S)),h=s):r<s&&(s=r,a===this.maxDepth&&(o=f.cloneDeep(S)),l=s),n.next&&n.next(),h>=l)break}return a===this.maxDepth?o:s}setNextLevelState(t){return this.getNextLevelState=t,this}setEvaluateResult(t){return this.getEvaluateResult=t,this}setIsLeafState(t){return this.isLeafState=t,this}};c.MAX_SCORE=2**30;c.MIN_SCORE=-(2**30);let u=c;export{u as M};
