(function(e){function t(t){for(var r,s,a=t[0],u=t[1],l=t[2],p=0,f=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);i&&i(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var i=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27c9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o={id:"app"},c=Object(r["createElementVNode"])("h1",null,[Object(r["createTextVNode"])(" Demo app with Suggest AutoComplete in "),Object(r["createElementVNode"])("a",{href:"https://vuejs.org/"},"Vue")],-1);function s(e,t,n,s,a,u){const l=Object(r["resolveComponent"])("Suggest");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",o,[c,Object(r["createVNode"])(l)])}const a={class:"suggest"},u={class:"suggest-label"},l={class:"suggest-list"},i={class:"suggest-item"},p={className:"user-name"},f={className:"user-email"};function b(e,t,n,o,c,s){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("label",u,[Object(r["createTextVNode"])(" 🔎 "),Object(r["createElementVNode"])("input",{onKeyup:t[0]||(t[0]=(...e)=>s.onChange&&s.onChange(...e)),class:"suggest-input",placeholder:"Example: Luke"},null,32)]),Object(r["createElementVNode"])("ul",l,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(s.suggestions,e=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("li",i,[Object(r["createElementVNode"])("span",p,Object(r["toDisplayString"])(e.name),1),Object(r["createElementVNode"])("em",f,"Height: "+Object(r["toDisplayString"])(e.height)+"cm",1)]))),256))])])}const d="https://swapi.dev/api/people/";async function g(e){const t=await fetch(e);return t.json()}const h=new Map;async function m(e){const t=`${d}?search=${e}`;if(h.has(t))return h.get(t);const{results:n}=await g(t);return h.set(t,n),n}var j=n("85b1"),O={name:"Suggest",data:()=>({users:[],query:""}),computed:{suggestions:function(){return this.users.filter(e=>e.name.toLowerCase().includes(this.query.toLowerCase()))}},methods:{onChange:Object(j["a"])((async function(e){this.query=e.target.value.trim(),0===this.query.length?this.users=[]:this.users=await m(this.query)}),500)}},y=(n("94bb"),n("6b0d")),v=n.n(y);const w=v()(O,[["render",b]]);var k=w,E={name:"App",components:{Suggest:k}};n("a676");const N=v()(E,[["render",s]]);var S=N;n("a766");const{createApp:V}=n("7a23");V(S).mount("#app")},8909:function(e,t,n){},"94bb":function(e,t,n){"use strict";n("8909")},a676:function(e,t,n){"use strict";n("27c9")},a766:function(e,t,n){}});
//# sourceMappingURL=app.dd66ed32.js.map