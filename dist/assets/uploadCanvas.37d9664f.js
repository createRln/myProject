var y=Object.defineProperty,G=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var C=(t,a,n)=>a in t?y(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,f=(t,a)=>{for(var n in a||(a={}))b.call(a,n)&&C(t,n,a[n]);if(w)for(var n of w(a))D.call(a,n)&&C(t,n,a[n]);return t},g=(t,a)=>G(t,L(a));import{_}from"./index.abeff2d8.js";import{y as U,j as H,f as k,t as T,o as m,c as p,k as l,z as Y,m as I,A as S,B,r as R,a as j}from"./vendor.b123f8a6.js";const O=U({emits:["transmit"],setup(t,{emit:a}){let n=document.documentElement.clientWidth,r=n,u=r*.7;console.log(n,r,u);const e=H({cW:r,cH:r,mW:u,mH:u,mL:(r-u)/2,mT:(r-u)/2,showMark:!1,iW:0,iH:0,iL:0,iT:0,IMAGE:null,CTX:null,curX:0,curY:0,newDataUrl:null});let s=k(null);const E=o=>{e.showMark=!0;let i=s.value.files[0];if(!i)return;let c=new FileReader;c.readAsDataURL(i),c.onload=d=>{e.IMAGE=new Image,e.IMAGE.src=d.target.result,e.IMAGE.onload=()=>{if(e.iW=e.IMAGE.width,e.iH=e.IMAGE.height,e.iW>e.cW){let h=e.iW/e.cW;e.iW=e.cW,e.iH=e.iH/h}else if(e.iH>e.cH){let h=e.iH/e.cH;e.iH=e.cH,e.iW=e.iW/h}e.iL=(e.cW-e.iW)/2,e.iT=(e.cW-e.iW)/2,v()}}},M=o=>{if(!e.IMAGE)return;let i=e.iW/e.iH,c=20,d=c/i;o?(e.iW+=c,e.iH+=d):(e.iW-=c,e.iH-=d),v()},$=o=>{!e.IMAGE||(e.curX=o.touches[0].clientX,e.curY=o.touches[0].clientY)},A=o=>{if(!e.IMAGE)return;let i=o.touches[0].clientX-e.curX,c=o.touches[0].clientY-e.curY;e.iL=e.iL+i,e.iT=e.iT+c,v(),e.curX=o.touches[0].clientX,e.curY=o.touches[0].clientY},X=()=>{if(!e.IMAGE)return;let o=e.CTX.getImageData(e.mL,e.mT,e.mW,e.mH),i=document.createElement("canvas");i.width=e.mW,i.height=e.mH,i.getContext("2d").putImageData(o,0,0,0,0,e.mW,e.mH),e.newDataUrl=i.toDataURL("image/png"),a("transmit",e.newDataUrl)};let W=k(null);const v=()=>{e.CTX=W.value.getContext("2d"),e.CTX.clearRect(0,0,e.cW,e.cH),e.CTX.drawImage(e.IMAGE,e.iL,e.iT,e.iW,e.iH)};return g(f({},T(e)),{fileOnchange:E,uploadfile:s,changeImage:M,touchstart:$,touchmove:A,keepSave:X,canvas:W})}}),z=t=>(S("data-v-0c88f618"),t=t(),B(),t),N={class:"bord"},V=["width","height"],F={class:"btns"},q={class:"input"},J=z(()=>l("button",null,"\u9009\u62E9\u56FE\u7247",-1));function K(t,a,n,r,u,e){return m(),p("div",N,[l("div",{class:"detail",onTouchstart:a[0]||(a[0]=(...s)=>t.touchstart&&t.touchstart(...s)),onTouchmove:a[1]||(a[1]=(...s)=>t.touchmove&&t.touchmove(...s))},[l("canvas",{width:t.cW,height:t.cH,ref:"canvas"},null,8,V),t.showMark?(m(),p("div",{key:0,class:"mark",style:Y({width:t.mW+"px",height:t.mH+"px",left:t.mL+"px",top:t.mT+"px"})},null,4)):I("",!0)],32),l("div",F,[l("div",q,[l("input",{type:"file",accept:"image/*",ref:"uploadfile",onChange:a[2]||(a[2]=(...s)=>t.fileOnchange&&t.fileOnchange(...s))},null,544)]),J,l("button",{onClick:a[3]||(a[3]=s=>t.changeImage(1))},"\u653E\u5927"),l("button",{onClick:a[4]||(a[4]=s=>t.changeImage(0))},"\u7F29\u5C0F"),l("button",{onClick:a[5]||(a[5]=(...s)=>t.keepSave&&t.keepSave(...s))},"\u4FDD\u5B58\u56FE\u7247")])])}var P=_(O,[["render",K],["__scopeId","data-v-0c88f618"]]);const Q={components:{ClipImage:P},setup(){const t=H({showImg:!1,dataUrl:""}),a=n=>{n&&(t.showImg=!0,t.dataUrl=n)};return g(f({},T(t)),{transmit:a})}},Z={class:"test"},x={key:1,class:"img"},ee=["src"];function te(t,a,n,r,u,e){const s=R("ClipImage");return m(),p("div",Z,[t.showImg?I("",!0):(m(),j(s,{key:0,onTransmit:r.transmit},null,8,["onTransmit"])),t.showImg?(m(),p("div",x,[l("img",{src:t.dataUrl,alt:""},null,8,ee)])):I("",!0)])}var oe=_(Q,[["render",te],["__scopeId","data-v-1e2f2b3d"]]);export{oe as default};