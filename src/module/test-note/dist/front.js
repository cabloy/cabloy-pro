(()=>{var e={277:(e,t,n)=>{"use strict";function r(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}n.d(t,{Z:()=>i});const i={listLayoutCard:{meta:{global:!1},props:{layoutManager:{type:Object},layoutConfig:{type:Object}},data:function(){return{}},created:function(){this.init()},beforeDestroy:function(){this.layoutManager.layout.instance===this&&(this.layoutManager.layout.instance=null)},methods:{init:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.layoutManager.subnavbar_policyDefault(),e.next=3,t.layoutManager.data_providerSwitch({providerName:"continuous",autoInit:"search"!==t.layoutManager.container.scene});case 3:t.layoutManager.layout.instance=t;case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,u,"next",e)}function u(e){r(i,o,a,s,u,"throw",e)}s(void 0)}))})()}},render:function(){var e=arguments[0];return e("div",[this.layoutManager.layout_renderBlock({blockName:"items"}),this.layoutManager.data_renderLoadMore()])}},listLayoutBlockCardItems:{meta:{global:!1},props:{layoutManager:{type:Object},layout:{type:Object},blockConfig:{type:Object}},data:function(){return{moduleMarkdownRender:null}},created:function(){this.__init()},methods:{__init:function(){var e,t=this;return(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$meta.module.use("a-markdownrender");case 2:t.moduleMarkdownRender=e.sent;case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,u,"next",e)}function u(e){a(i,r,o,s,u,"throw",e)}s(void 0)}))})()},_getMarkdownHost:function(e){var t=e;return{atomId:t.atomId,atom:t}},_renderListItem:function(e){var t=this.$createElement,n=this.layoutManager.layout_renderBlock({blockName:"item",key:e.atomId,info:{item:e},listItem:!0});return t("f7-card",{key:e.atomId,class:"card-item col-100 medium-50 large-50"},[t("f7-card-header",[t("f7-list",[n])]),t("f7-card-content",{attrs:{padding:!0}},[t("eb-markdown-render",{attrs:{host:this._getMarkdownHost(e),html:e.html}})])])},_renderList:function(){if(!this.moduleMarkdownRender)return null;var e,t=[],n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw i}}}}(this.layoutManager.data_getItems());try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push(this._renderListItem(r))}}catch(e){n.e(e)}finally{n.f()}return t}},render:function(){var e=arguments[0];return e("div",{class:"atom-list-layout-card-container row"},[this._renderList()])}}}},721:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=[{name:"content"},{name:"default"}],o=[{name:"default"},{name:"content"}];const a={atoms:{note:{render:{list:{info:{layout:{viewSize:{small:[{name:"card"},{name:"list"}],medium:[{name:"card"},{name:"table"}],large:[{name:"card"},{name:"table"}]}}},layouts:{card:{title:"LayoutCard",component:{module:"test-note",name:"listLayoutCard"},blocks:{items:{component:{module:"test-note",name:"listLayoutBlockCardItems"}},item:{component:{module:"a-baselayout",name:"listLayoutBlockListItem"},summary:!1}}}}},item:{info:{layout:{viewSize:{view:{small:r,medium:r,large:r},edit:{small:o,medium:o,large:o}}}},layouts:{default:{title:"LayoutInfo",component:{module:"a-baselayout",name:"itemLayoutDefault"},blocks:{main:{component:{module:"a-cms",name:"itemLayoutBlockMobileMain"},info:!0}}},content:{title:"LayoutContent",component:{module:"a-baselayout",name:"itemLayoutDefault"},blocks:{main:{component:{module:"a-cms",name:"itemLayoutBlockMobileMain"},markdown:!0}}}}}}}}}},933:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={}},978:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={Name:"名称",Description:"描述"}},137:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={"en-us":n(933).Z,"zh-cn":n(978).Z}},644:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=[]},81:(e,t,n)=>{"use strict";function r(e){return{state:{},getters:{},mutations:{},actions:{}}}n.d(t,{Z:()=>r})},891:(e,t,n)=>{var r=n(361)((function(e){return e[1]}));r.push([e.id,"",""]),e.exports=r},361:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},650:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});const r=function(e,t,n,r,o,a,i,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=[],c._compiled=!0),c._scopeId="data-v-662422d4",u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:c}}({data:function(){return{}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("eb-page",[n("eb-navbar",{attrs:{title:e.$text("Demo"),"eb-back-link":"Back"}}),e._v(" "),n("f7-block-title",{attrs:{medium:""}}),e._v(" "),n("f7-block",{attrs:{strong:""}})],1)})).exports},824:(e,t,n)=>{var r=n(891);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(159).Z)("3a3f5e9a",r,!0,{})},159:(e,t,n)=>{"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.d(t,{Z:()=>p});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},d=null,f="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,o){c=n,d=o||{};var i=r(e,t);return v(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o];(u=a[s.id]).refs--,n.push(u)}for(t?v(i=r(e,t)):i=[],o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=a[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(h(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(o=0;o<n.parts.length;o++)i.push(h(n.parts[o]));a[n.id]={id:n.id,refs:1,parts:i}}}}function y(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function h(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(m){var o=u++;r=s||(s=y()),t=w.bind(null,r,o,!1),n=w.bind(null,r,o,!0)}else r=y(),t=k.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g,b=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function k(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(f,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},990:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=990,e.exports=t},142:(e,t,n)=>{var r={"./demo.vue":650};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=142}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";var e;n.r(r),n.d(r,{default:()=>t}),n(824);const t={install:function(t,r){return e?console.error("already installed."):(e=t,r({routes:n(644).Z,store:n(81).Z(e),config:n(721).Z,locales:n(137).Z,components:n(277).Z}))}}})(),window["test-note"]=r})();