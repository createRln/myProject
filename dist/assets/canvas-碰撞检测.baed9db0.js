var x=Object.defineProperty,b=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(e,t,s)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,m=(e,t)=>{for(var s in t||(t={}))C.call(t,s)&&u(e,s,t[s]);if(d)for(var s of d(t))y.call(t,s)&&u(e,s,t[s]);return e},f=(e,t)=>b(e,h(t));import{_ as g}from"./index.0c3764fc.js";import{s as k,v as w,r as X,o as Y,a5 as $,x as z,y as B,z as I}from"./@vue.c3bb5eb1.js";import"./vue-router.c336efea.js";import"./element-plus.12733ec3.js";import"./lodash.81388c16.js";import"./dayjs.d38e4417.js";import"./@vueuse.149d5305.js";import"./@element-plus.f66b6848.js";import"./@popperjs.7a88ba6a.js";import"./@ctrl.2e36ce53.js";import"./async-validator.5d25c98b.js";import"./memoize-one.4ee5c96d.js";import"./normalize-wheel-es.9a219a59.js";const R=k({setup(){const e=w({Ctx:null,W:300,H:600,speedX:10,speedY:10,r:20,curX:50,curY:50,timer:null});let t=X(null);Y(()=>{e.Ctx=t.value.getContext("2d"),s(e.W,e.H,e.speedX,e.speedY,e.r)});const s=(n,l,i,_,r)=>{let c=e.curX,a=e.curY;e.timer=setInterval(()=>{e.Ctx.clearRect(0,0,n,l),(c-r<=0||c+r>=n)&&(i=-i),c=c+i,(a-r<=0||a+r>=l)&&(_=-_),a=a+_,p({centerX:c,centerY:a,radius:r,startAngle:0,endAngle:Math.PI*2,type:!1,color:"pink",isFill:!0})},10)},p=({centerX:n,centerY:l,radius:i,startAngle:_,endAngle:r,type:c=!1,color:a="red",lineWidth:v=1,isFill:j=!1})=>{let o=e.Ctx;o.beginPath(),o.arc(n,l,i,_,r,c),j?(o.fillStyle=a,o.fill()):o.strokeStyle=a,o.lineWidth=v,o.stroke()};return f(m({},$(e)),{canvas:t})}}),A={class:"box"},M={width:"300",height:"600",class:"canvas",ref:"canvas"};function P(e,t,s,p,n,l){return z(),B("div",A,[I("canvas",M,"\u4F60\u4E0D\u652F\u6301\u54C8",512)])}var Q=g(R,[["render",P],["__scopeId","data-v-b68ce4bc"]]);export{Q as default};
