var m=Object.defineProperty,C=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var f=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&f(e,a,t[a]);if(u)for(var a of u(t))k.call(t,a)&&f(e,a,t[a]);return e},v=(e,t)=>C(e,g(t));import{_ as y}from"./index.75b44ca5.js";import{y as X,j as Y,f as $,g as j,t as w,o as B,c as I,k as R}from"./vendor.31692098.js";const A=X({setup(){const e=Y({Ctx:null,W:300,H:600,speedX:10,speedY:10,r:20,curX:50,curY:50,timer:null});let t=$(null);j(()=>{e.Ctx=t.value.getContext("2d"),a(e.W,e.H,e.speedX,e.speedY,e.r)});const a=(l,o,_,i,r)=>{let c=e.curX,s=e.curY;e.timer=setInterval(()=>{e.Ctx.clearRect(0,0,l,o),(c-r<=0||c+r>=l)&&(_=-_),c=c+_,(s-r<=0||s+r>=o)&&(i=-i),s=s+i,d({centerX:c,centerY:s,radius:r,startAngle:0,endAngle:Math.PI*2,type:!1,color:"pink",isFill:!0})},10)},d=({centerX:l,centerY:o,radius:_,startAngle:i,endAngle:r,type:c=!1,color:s="red",lineWidth:x=1,isFill:h=!1})=>{let n=e.Ctx;n.beginPath(),n.arc(l,o,_,i,r,c),h?(n.fillStyle=s,n.fill()):n.strokeStyle=s,n.lineWidth=x,n.stroke()};return v(p({},w(e)),{canvas:t})}}),M={class:"box"},P={width:"300",height:"600",class:"canvas",ref:"canvas"};function S(e,t,a,d,l,o){return B(),I("div",M,[R("canvas",P,"\u4F60\u4E0D\u652F\u6301\u54C8",512)])}var F=y(A,[["render",S],["__scopeId","data-v-b68ce4bc"]]);export{F as default};
