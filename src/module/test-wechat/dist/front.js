(()=>{var e={236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={}},788:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={}},978:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={Test:"测试"}},137:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={"zh-cn":n(978).Z}},644:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=[{path:"test/index",component:("test/index",n(142)("./".concat("test/index",".vue")).default)}]},81:(e,t,n)=>{"use strict";function r(e){return{state:{},getters:{},mutations:{},actions:{}}}n.d(t,{Z:()=>r})},891:(e,t,n)=>{var r=n(233),o=n(361)(r);o.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),e.exports=o},361:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},233:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),u="/*# ".concat(c," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},680:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(e,t,n,r,o,a,i,s){var c,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=[],u._compiled=!0),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}({data:function(){return{wx:null,openid:null}},created:function(){var e=this;this.$meta.util.performAction({ctx:this,action:{actionModule:"a-wechat",actionComponent:"jssdk",name:"config"}}).then((function(t){e.wx=t&&t.wx})).catch((function(t){e.$view.toast.show({text:t.message})}))},methods:{onPerformScanQRCode:function(){var e=this;this.wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(t){e.$view.toast.show({text:t.resultStr})}})},onPerformOpenid:function(){var e=this;return this.$api.post("test/getOpenid").then((function(t){e.openid=t.openid}))}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("eb-page",[n("eb-navbar",{attrs:{large:"",largeTransparent:"",title:e.$text("Test"),"eb-back-link":"Back"}}),e._v(" "),e.wx?n("eb-list",{attrs:{"no-hairlines-md":""}},[n("eb-list-item",{attrs:{title:"微信扫一扫",link:"#",onPerform:e.onPerformScanQRCode}}),e._v(" "),n("eb-list-item",{attrs:{title:"获取openid",link:"#",onPerform:e.onPerformOpenid}}),e._v(" "),n("eb-list-item",{attrs:{title:"openid"}},[n("div",{attrs:{slot:"after"},slot:"after"},[e._v(e._s(e.openid))])])],1):e._e()],1)})).exports},824:(e,t,n)=>{var r=n(891);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(159).Z)("720d037f",r,!0,{})},159:(e,t,n)=>{"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.d(t,{Z:()=>v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,o){u=n,d=o||{};var i=r(e,t);return h(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o];(c=a[s.id]).refs--,n.push(c)}for(t?h(i=r(e,t)):i=[],o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete a[c.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(y(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function m(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function y(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(p){var o=c++;r=s||(s=m()),t=x.bind(null,r,o,!1),n=x.bind(null,r,o,!0)}else r=m(),t=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g,b=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function w(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(f,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},142:(e,t,n)=>{var r={"./test/index.vue":680};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=142}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";var e;n.r(r),n.d(r,{default:()=>t}),n(824);const t={install:function(t,r){return e?console.error("already installed."):(e=t,r({routes:n(644).Z,store:n(81).Z(e),config:n(788).Z,locales:n(137).Z,components:n(236).Z}))}}})(),window["test-wechat"]=r})();
//# sourceMappingURL=front.js.map