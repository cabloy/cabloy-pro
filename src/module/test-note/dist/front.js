(()=>{var t={438:(t,e,r)=>{"use strict";function n(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}r.d(e,{Z:()=>y});const o={meta:{global:!1},props:{layoutManager:{type:Object},layoutConfig:{type:Object}},data:function(){return{}},created:function(){this.init()},beforeDestroy:function(){this.layoutManager.layout.instance===this&&(this.layoutManager.layout.instance=null)},methods:{init:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.layoutManager.subnavbar_policyDefault(),t.next=3,e.layoutManager.data_providerSwitch({providerName:"continuous",autoInit:"search"!==e.layoutManager.container.scene});case 3:e.layoutManager.layout.instance=e;case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,u,"next",t)}function u(t){n(i,o,a,s,u,"throw",t)}s(void 0)}))})()}},render:function(){var t=arguments[0];return t("div",[this.layoutManager.layout_renderBlock({blockName:"items"}),this.layoutManager.data_renderLoadMore()])}};function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}const s={meta:{global:!1},props:{layoutManager:{type:Object},layout:{type:Object},blockConfig:{type:Object}},data:function(){return{moduleMarkdownRender:null}},created:function(){this.__init()},methods:{__init:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$meta.module.use("a-markdownrender");case 2:e.moduleMarkdownRender=t.sent;case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,u,"next",t)}function u(t){i(a,n,o,s,u,"throw",t)}s(void 0)}))})()},_getMarkdownHost:function(t){var e=t;return{atomId:e.atomId,atom:e}},_renderListItem:function(t){var e=this.$createElement,r=this.layoutManager.layout_renderBlock({blockName:"item",key:t.atomId,info:{item:t},listItem:!0});return e("f7-card",{key:t.atomId,class:"card-item col-100 medium-50 large-50"},[e("f7-card-header",[e("f7-list",[r])]),e("f7-card-content",{attrs:{padding:!0}},[e("eb-markdown-render",{attrs:{host:this._getMarkdownHost(t),html:t.html}})])])},_renderList:function(){if(!this.moduleMarkdownRender)return null;var t,e=[],r=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){u=!0,i=t},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw i}}}}(this.layoutManager.data_getItems());try{for(r.s();!(t=r.n()).done;){var n=t.value;e.push(this._renderListItem(n))}}catch(t){r.e(t)}finally{r.f()}return e}},render:function(){var t=arguments[0];return t("div",{class:"atom-list-layout-card-container row"},[this._renderList()])}},u=window.Vue;function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function m(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){m(a,n,o,i,s,"next",t)}function s(t){m(a,n,o,i,s,"throw",t)}i(void 0)}))}}var p=r.n(u)().prototype.$meta.module.get("a-base").options.mixins.ebAtomActions,h={module:"test-note",atomClassName:"note"},v={type:"object",properties:{atomId:{type:"number"},atomName:{type:"string",ebType:"atom",ebTitle:"Note",ebParams:{target:"_self",atomClass:h,selectOptions:{},atomId:"atomId",mapper:{atomId:"atomId",atomName:"atomName"}}},atomStaticKey:{type:"string"}}};const y={listLayoutCard:o,listLayoutBlockCardItems:s,widgetNote:{installFactory:function(t){var e=t,r=e.prototype.$meta.module.get("a-dashboard").options.mixins.ebDashboardWidgetBase;return{meta:{widget:{schema:{props:v,attrs:null}}},mixins:[r,p],props:{atomId:{type:Number},atomName:{type:String},atomStaticKey:{type:String}},data:function(){return{item:null,moduleMarkdownEditor:null,dirty:!1,toolbar:!1,notfound:!1}},computed:{ready:function(){return this.moduleMarkdownEditor&&this.actionsAll},readyItem:function(){return this.item&&this.ready},widgetTitle:function(){var t=this.$text("Note");return this.item&&(t="".concat(t,": ").concat(this.item.atomName)),this.dirty&&(t="* ".concat(t)),t},markdownHost:function(){var t=this.item;return{atomId:t.atomId,atom:t}}},watch:{atomId:function(){this.__loadItem()}},created:function(){this.__init()},mounted:function(){this.$meta.eventHub.$on("atom:action",this.onActionChanged)},beforeDestroy:function(){this.$meta.eventHub.$off("atom:action",this.onActionChanged)},methods:{__init:function(){var t=this;return f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.__loadModuleMarkdown();case 2:return e.next=4,t.__loadItem();case 4:case"end":return e.stop()}}),e)})))()},__loadModuleMarkdown:function(){var t=this;return f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.moduleMarkdownEditor){e.next=4;break}return e.next=3,t.$meta.module.use("a-markdown");case 3:t.moduleMarkdownEditor=e.sent;case 4:case"end":return e.stop()}}),e)})))()},__loadItem:function(){var t=this;return f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.atomId){e.next=4;break}return t.item=null,t.notfound=!1,e.abrupt("return");case 4:return e.prev=4,e.next=7,t.$api.post("/a/base/atom/read",{key:{atomId:t.atomId}});case 7:t.item=e.sent,t.notfound=!1,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),t.item=null,t.notfound=!0;case 15:if(!t.item||t.item.atomName===t.atomName){e.next=18;break}return e.next=18,t.widget.setPropertyValue("atomName",{type:1,value:t.item.atomName});case 18:case"end":return e.stop()}}),e,null,[[4,11]])})))()},__saveContent:e.prototype.$meta.util.debounce((function(){this.__saveContentNow()}),3e3),__saveContentNow:function(){var t=this;return f(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d(d({},h),{},{name:"save"}),n=t.getAction(r),e.next=4,t.$meta.util.performAction({ctx:t,action:n,item:t.item});case 4:return o=e.sent,t.dirty=!1,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))()},onInput:function(t){this.item.content=t,this.dirty=!0,this.__saveContent()},onSaveEditor:function(){var t=this;return f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.__saveContentNow();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},onPerformToolbarSwitch:function(){this.toolbar=!this.toolbar},onPerformFullscreen:function(){var t=this;return f(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d(d({},h),{},{name:"write"}),n=t.getAction(r),e.next=4,t.$meta.util.performAction({ctx:t,action:n,item:t.item});case 4:case"end":return e.stop()}}),e)})))()},onPerformCreateNote:function(){var t=this;return f(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d(d({},h),{},{name:"create"}),n=d(d({},n=t.getAction(r)),{},{__noActionWrite:!0}),e.next=5,t.$meta.util.performAction({ctx:t,action:n,item:h});case 5:return o=e.sent,e.next=8,t.widget.setPropertyValue("atomId",{type:1,value:o.atomId});case 8:case"end":return e.stop()}}),e)})))()},onPerformSelectNote:function(){var t=this;return f(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$view.navigate("/a/basefront/atom/select",{target:"_self",context:{params:{selectMode:"single",atomClass:h,options:{}},callback:function(){var e=f(regeneratorRuntime.mark((function e(r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==r){e.next=3;break}return e.next=3,t.widget.setPropertyValue("atomId",{type:1,value:n.atomId});case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}});case 2:case"end":return e.stop()}}),e)})))()},onActionChanged:function(t){var e=this;return f(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.key,o=t.action,e.readyItem){r.next=4;break}return r.abrupt("return");case 4:if(e.item.atomId===n.atomId){r.next=6;break}return r.abrupt("return");case 6:if("save"!==o.name||!e.dirty){r.next=9;break}return t.actionSource===e&&(e.item.atomUpdatedAt=new Date),r.abrupt("return");case 9:if("create"!==o.name){r.next=11;break}return r.abrupt("return");case 11:if("delete"!==o.name){r.next=18;break}return r.next=14,e.widget.setPropertyValue("atomId",{type:1,value:0});case 14:return r.next=16,e.widget.setPropertyValue("atomName",{type:1,value:""});case 16:return e.dirty=!1,r.abrupt("return");case 18:return r.next=20,e.__loadItem();case 20:case"end":return r.stop()}}),r)})))()},_renderButtons:function(){var t=this.$createElement;return this.readyItem?t("div",{class:"display-flex"},[t("eb-button",{attrs:{"icon-material":"fullscreen"},props:{onPerform:this.onPerformFullscreen}}),t("eb-button",{attrs:{"icon-material":"construction",outline:this.toolbar},props:{onPerform:this.onPerformToolbarSwitch}})]):t("div")},_renderNotFound:function(){var t=this.$createElement;return this.notfound?t("div",{class:"text-align-center"},[this.$text("Not Found")]):null},_renderEmptyButtons:function(){var t=this.$createElement;return this.atomId&&!this.notfound||!this.ready?null:t("div",{class:"text-align-center"},[t("eb-link",{class:"margin-left margin-right",props:{onPerform:this.onPerformCreateNote}},[this.$text("Create Note")]),t("eb-link",{class:"margin-left margin-right",props:{onPerform:this.onPerformSelectNote}},[this.$text("Select Note")])])},_renderMarkdownEditor:function(){var t=this.$createElement;return this.readyItem?t("eb-markdown-editor",{ref:"markdownEditor",attrs:{toolbar:this.toolbar,host:this.markdownHost,value:this.item.content},on:{input:this.onInput,save:this.onSaveEditor}}):t("div")}},render:function(){var t=arguments[0],e=this._renderMarkdownEditor(),r=this._renderNotFound(),n=this._renderEmptyButtons();return t("f7-card",{class:"demo-widget-note"},[t("f7-card-header",[t("div",[this.widgetTitle]),this._renderButtons()]),t("f7-card-content",{attrs:{padding:!this.readyItem}},[e,r,n])])}}}}}},721:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=[{name:"content"},{name:"default"}],o=[{name:"default"},{name:"content"}];const a={atoms:{note:{render:{list:{info:{layout:{viewSize:{small:[{name:"card"},{name:"list"}],medium:[{name:"card"},{name:"table"}],large:[{name:"card"},{name:"table"}]}}},layouts:{card:{title:"LayoutCard",component:{module:"test-note",name:"listLayoutCard"},blocks:{items:{component:{module:"test-note",name:"listLayoutBlockCardItems"}},item:{component:{module:"a-baselayout",name:"listLayoutBlockListItem"},summary:!1}}}}},item:{info:{layout:{viewSize:{view:{small:n,medium:n,large:n},edit:{small:o,medium:o,large:o}}}},layouts:{default:{title:"LayoutInfo",component:{module:"a-baselayout",name:"itemLayoutDefault"},blocks:{main:{component:{module:"a-cms",name:"itemLayoutBlockMobileMain"},info:!0}}},content:{title:"LayoutContent",component:{module:"a-baselayout",name:"itemLayoutDefault"},blocks:{main:{component:{module:"a-cms",name:"itemLayoutBlockMobileMain"},markdown:!0}}}}}}}}}},933:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={}},978:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={Note:"便签",Name:"名称",Description:"描述","Create Note":"新建便签","Select Note":"选择便签"}},137:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={"en-us":r(933).Z,"zh-cn":r(978).Z}},644:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=[]},81:(t,e,r)=>{"use strict";function n(t){return{state:{},getters:{},mutations:{},actions:{}}}r.d(e,{Z:()=>n})},891:(t,e,r)=>{var n=r(361)((function(t){return t[1]}));n.push([t.id,".demo-widget-note .card-content {\n  max-height: 350px;\n  overflow-y: auto;\n}\n",""]),t.exports=n},361:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);n&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},650:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=function(t,e,r,n,o,a,i,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=[],c._compiled=!0),c._scopeId="data-v-662422d4",u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(t,e){return u.call(e),d(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}({data:function(){return{}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("eb-page",[r("eb-navbar",{attrs:{title:t.$text("Demo"),"eb-back-link":"Back"}}),t._v(" "),r("f7-block-title",{attrs:{medium:""}}),t._v(" "),r("f7-block",{attrs:{strong:""}})],1)})).exports},824:(t,e,r)=>{var n=r(891);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,r(159).Z)("3a3f5e9a",n,!0,{})},159:(t,e,r)=>{"use strict";function n(t,e){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],i=a[0],s={id:t+":"+o,css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}r.d(e,{Z:()=>p});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,d=function(){},l=null,m="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,r,o){c=r,l=o||{};var i=n(t,e);return h(i),function(e){for(var r=[],o=0;o<i.length;o++){var s=i[o];(u=a[s.id]).refs--,r.push(u)}for(e?h(i=n(t,e)):i=[],o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function h(t){for(var e=0;e<t.length;e++){var r=t[e],n=a[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(y(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(o=0;o<r.parts.length;o++)i.push(y(r.parts[o]));a[r.id]={id:r.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function y(t){var e,r,n=document.querySelector("style["+m+'~="'+t.id+'"]');if(n){if(c)return d;n.parentNode.removeChild(n)}if(f){var o=u++;n=s||(s=v()),e=w.bind(null,n,o,!1),r=w.bind(null,n,o,!0)}else n=v(),e=x.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}var g,b=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function w(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function x(t,e){var r=e.css,n=e.media,o=e.sourceMap;if(n&&t.setAttribute("media",n),l.ssrId&&t.setAttribute(m,e.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}},990:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=990,t.exports=e},142:(t,e,r)=>{var n={"./demo.vue":650};function o(t){var e=a(t);return r(e)}function a(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=a,t.exports=o,o.id=142}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";var t;r.r(n),r.d(n,{default:()=>e}),r(824);const e={install:function(e,n){return t?console.error("already installed."):(t=e,n({routes:r(644).Z,store:r(81).Z(t),config:r(721).Z,locales:r(137).Z,components:r(438).Z}))}}})(),window["test-note"]=n})();