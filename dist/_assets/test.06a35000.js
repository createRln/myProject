import{b as a,u as n,i as e,j as l,w as s,k as t,t as u,c as i,d as o,e as r,f as d,l as m,v as p,F as b,m as c}from"./index.1d5dfa01.js";var v={name:"Test",setup(){const i=a({name:"我是啊啊啊",nameArr:[],aaa:1,bbb:0,newval:"",old:""});n();const o=e();const r=l((()=>i.aaa));return s((()=>i.name),((a,n)=>{i.newval=a,i.old=n})),t((()=>{i.bbb=i.aaa+1})),{...u(i),nameChange:r,pushClick:function(){i.nameArr.push(i.name),i.name="",i.aaa+=1},nextPage:function(){o.push({path:"/next"})}}}};v.render=function(a,n,e,l,s,t){return i(),o("div",null,[r("div",null,[r("div",null,"新的数值："+d(a.newval),1),r("div",null," 旧的数值："+d(a.old),1),m(r("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=n=>a.name=n)},null,512),[[p,a.name]])]),(i(!0),o(b,null,c(a.nameArr,((a,n)=>(i(),o("div",{key:n},[r("p",null,d(a),1)])))),128)),r("button",{onClick:n[1]||(n[1]=(...a)=>l.pushClick&&l.pushClick(...a))},"点击push arr"),r("button",{onClick:n[2]||(n[2]=(...a)=>l.nextPage&&l.nextPage(...a))},"点击跳转下一页"+d(l.nameChange),1),r("div",null,d(a.bbb),1)])};export{v as default};