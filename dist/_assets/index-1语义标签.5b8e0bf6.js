let i=document.createElement("style");i.innerHTML="header[data-v-48a21fd7]{position:fixed;top:0;width:100vw;z-index:100}header hgroup[data-v-48a21fd7]{padding:10px 10px 20px;background-color:#eee;border-bottom:2px solid #999}header hgroup nav[data-v-48a21fd7]{display:flex;justify-main:flex-start;align-items:center}header hgroup nav div[data-v-48a21fd7]{width:200px;cursor:pointer;text-align:center;font-size:28px;line-height:40px;margin-right:10px}header hgroup nav div.navactive[data-v-48a21fd7]{background-color:#fff;color:#00f}main[data-v-48a21fd7]{position:relative}main aside[data-v-48a21fd7]{position:fixed;left:0;top:190px;width:200px;height:100vh;background-color:#eee}main aside .ftitle[data-v-48a21fd7]{height:40px;padding-left:10px;line-height:40px;border-bottom:1px solid #e2e2e2;cursor:pointer}main aside .ftitle.active_ftitle[data-v-48a21fd7]{background-color:#fff;border-right:3px solid #00f}main aside .ctitle[data-v-48a21fd7]{cursor:pointer;height:40px;padding-right:30px;line-height:40px;text-align:right;border:1px solid #eee}main aside .ctitle.active_ctitle[data-v-48a21fd7]{background-color:#fff}main article[data-v-48a21fd7]{padding:40px;position:absolute;right:0;top:190px;width:calc(100vw - 200px);min-height:100vh;box-sizing:border-box}main article .input[data-v-48a21fd7]{width:200px}main article .input_tishi[data-v-48a21fd7]{height:200px;overflow:hidden}main article figure[data-v-48a21fd7]{width:400px;height:300px;padding:10px;background-color:#fff8dc;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-around;align-items:center}main article figure img[data-v-48a21fd7]{width:300px;height:200px}main article details[data-v-48a21fd7]{cursor:pointer}main article details summary[data-v-48a21fd7]::marker{background-color:#fff8dc}footer[data-v-48a21fd7]{position:fixed;bottom:0}.red[data-v-48a21fd7]{color:red;font-size:18px;font-weight:500}",document.head.appendChild(i);import{n as t,b as e,t as a,p as l,q as d,x as n,c as r,d as s,e as o,y as c,z as u,F as h,m as p,A as f,B as v,f as g,h as m}from"./index.1d5dfa01.js";var x=t({setup(){const i=e({navs:[{name:"首页",id:"shouye"},{name:"热门",id:"remen"},{name:"收藏",id:"shoucang"},{name:"个人中心",id:"center"}],asides:[{title:"需选择项一",id:"select1",showList:!1,list:[{childTitle:"子选择一",id:"childSelect1"},{childTitle:"子选择二",id:"childSelect2"},{childTitle:"子选择三",id:"childSelect3"},{childTitle:"子选择四",id:"childSelect4"}]},{title:"需选择项二",id:"select2",showList:!1}],curNav:"shouye",curFtitle:"select1",curCtitle:"",inputOPtions:["小明","小红","小兰","小刚","小李","小翠","小明","小红","小兰","小刚","小李","小翠"]});return{...a(i),toChangeNav:(t,e)=>{i.curNav=t.id},changeFtitle:(t,e)=>{i.curCtitle="",i.curFtitle=t.id,t.showList=!t.showList},inputBlur:function(i){console.log(i.target.value)}}}});l("data-v-48a21fd7");const b=o("h2",null,"我是一级标题",-1),k=o("h3",null,"我是二级标题",-1),w=["onClick"],y=["onClick"],C=["onClick"],_=o("div",{class:"red"},"article是一个特殊的section标签，它比section具有更明确的语义，它代表一个独立的、完整的相关内容块，可独立于页面其它内容使用。例如一篇完整的论坛帖子，一篇博客文章，一个用户评论等等。一般来说，article会有标题部分（通常包含在header内），有时也会包含footer。article可以嵌套，内层的article对外层的article标签有隶属关系。例如，一篇博客的文章，可以用article显示，然后一些评论可以以article的形式嵌入其中。 正文信息",-1),L=o("div",{class:"red"},"实现提示语,datalist选项列表标签，id绑定到input的list上去，会出现提示语。",-1),T={id:"list",class:"input_tishi"},z=["value"],F=o("div",{class:"red"},"figure 元素代表一段独立的内容.用于对元素进行组合。多用于图片与图片描述组合。",-1),B=o("figure",null,[o("img",{src:"",alt:""}),o("figcaption",null,[o("div",null,"这是一个描述信息 ")])],-1),N=o("div",{class:"red"},"details> 标签：用于描述文档或文档某个部分的细节。summary> 标签：包含details> 标签的标题。",-1),S=o("details",null,[o("summary",null," 点击展示隐藏 "),o("p",null,"需要展示或者隐藏的内容·哈哈哈哈哈··")],-1),j=o("div",{class:"red"},"mark> 标签：定义带有记号的文本。 --\x3e",-1),H=o("div",null,[f("北京的"),o("mark",null,"强风雨"),f("将持续至3日8时")],-1),M=o("div",null,[o("time",{datetime:"2021-10-01"},"国庆节"),f("会放假")],-1),O=o("div",{class:"red"},"meter 标签：定义度量衡。 ",-1),P=o("meter",{value:"70",max:"100",min:"0",high:"80",low:"50"},null,-1),q=o("br",null,null,-1),A=o("div",{class:"red"},"rogress标签是HTML5中新增的标签，是使用来定义运行中的任务进度/进程，通常和JavaScript一起使用来实现进度条。",-1),E=o("progress",{value:"0.9",max:"1"},null,-1),I=o("footer",null,"我是底部",-1);d(),x.render=function(i,t,e,a,l,d){const f=n("hgroup");return r(),s("div",null,[o("header",null,[c(f,null,{default:u((()=>[b,k,o("nav",null,[(r(!0),s(h,null,p(i.navs,((t,e)=>(r(),s("div",{key:t.id,onClick:a=>i.toChangeNav(t,e),class:v({navactive:i.curNav==t.id})},g(t.name),11,w)))),128))])])),_:1})]),o("main",null,[o("aside",null,[(r(!0),s(h,null,p(i.asides,((t,e)=>(r(),s("div",{key:t.id},[o("div",{class:v(["ftitle",{active_ftitle:t.id==i.curFtitle}]),onClick:a=>i.changeFtitle(t,e)},g(t.title),11,y),t.list&&t.list.length>0&&t.showList?(r(!0),s(h,{key:0},p(t.list,((t,e)=>(r(),s("div",{class:v(["ctitle",{active_ctitle:t.id==i.curCtitle}]),onClick:e=>i.curCtitle=t.id,key:e},g(t.childTitle),11,C)))),128)):m("",!0)])))),128))]),_,o("article",null,[L,o("input",{class:"input",type:"text",list:"list",onBlur:t[0]||(t[0]=(...t)=>i.inputBlur&&i.inputBlur(...t))},null,32),o("datalist",T,[(r(!0),s(h,null,p(i.inputOPtions,((i,t)=>(r(),s("option",{key:t,value:i},null,8,z)))),128))]),F,B,N,S,j,H,M,O,P,q,A,E])]),I])},x.__scopeId="data-v-48a21fd7";export{x as default};
