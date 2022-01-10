"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[532],{5093:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(3645),o=r.n(a)()((function(e){return e[1]}));o.push([e.id,".bg-gray-100[data-v-b355c4de]{background-color:#f7fafc;background-color:rgba(247,250,252,var(--tw-bg-opacity))}.border-gray-200[data-v-b355c4de]{border-color:#edf2f7;border-color:rgba(237,242,247,var(--tw-border-opacity))}.text-gray-400[data-v-b355c4de]{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}.text-gray-500[data-v-b355c4de]{color:#a0aec0;color:rgba(160,174,192,var(--tw-text-opacity))}.text-gray-600[data-v-b355c4de]{color:#718096;color:rgba(113,128,150,var(--tw-text-opacity))}.text-gray-700[data-v-b355c4de]{color:#4a5568;color:rgba(74,85,104,var(--tw-text-opacity))}.text-gray-900[data-v-b355c4de]{color:#1a202c;color:rgba(26,32,44,var(--tw-text-opacity))}@media (prefers-color-scheme:dark){.dark\\:bg-gray-800[data-v-b355c4de]{background-color:#2d3748;background-color:rgba(45,55,72,var(--tw-bg-opacity))}.dark\\:bg-gray-900[data-v-b355c4de]{background-color:#1a202c;background-color:rgba(26,32,44,var(--tw-bg-opacity))}.dark\\:border-gray-700[data-v-b355c4de]{border-color:#4a5568;border-color:rgba(74,85,104,var(--tw-border-opacity))}.dark\\:text-white[data-v-b355c4de]{color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.dark\\:text-gray-400[data-v-b355c4de]{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}}",""]);const n=o},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var n=0;n<this.length;n++){var c=this[n][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var i=[].concat(e[l]);a&&o[i[0]]||(r&&(i[2]?i[2]="".concat(r," and ").concat(i[2]):i[2]=r),t.push(i))}},t}},3379:(e,t,r)=>{var a,o=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},n=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),c=[];function l(e){for(var t=-1,r=0;r<c.length;r++)if(c[r].identifier===e){t=r;break}return t}function i(e,t){for(var r={},a=[],o=0;o<e.length;o++){var n=e[o],i=t.base?n[0]+t.base:n[0],d=r[i]||0,s="".concat(i," ").concat(d);r[i]=d+1;var u=l(s),v={css:n[1],media:n[2],sourceMap:n[3]};-1!==u?(c[u].references++,c[u].updater(v)):c.push({identifier:s,updater:h(v,t),references:1}),a.push(s)}return a}function d(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var o=r.nc;o&&(a.nonce=o)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var c=n(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function v(e,t,r,a){var o=r?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var n=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(n,c[t]):e.appendChild(n)}}function f(e,t,r){var a=r.css,o=r.media,n=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),n&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,g=0;function h(e,t){var r,a,o;if(t.singleton){var n=g++;r=p||(p=d(t)),a=v.bind(null,r,n,!1),o=v.bind(null,r,n,!0)}else r=d(t),a=f.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<r.length;a++){var o=l(r[a]);c[o].references--}for(var n=i(e,t),d=0;d<r.length;d++){var s=l(r[d]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}r=n}}}},3744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,a]of t)r[e]=a;return r}},8532:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var a=r(821),o=function(e){return(0,a.pushScopeId)("data-v-b355c4de"),e=e(),(0,a.popScopeId)(),e},n={class:"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"},c={key:0,class:"hidden fixed top-0 right-0 px-6 py-4 sm:block"},l=(0,a.createTextVNode)(" Dashboard "),i=(0,a.createTextVNode)(" Log in "),d=(0,a.createTextVNode)(" Register "),s={class:"max-w-6xl mx-auto sm:px-6 lg:px-8"},u=o((function(){return(0,a.createElementVNode)("div",{class:"flex justify-center pt-8 sm:justify-start sm:pt-0"},[(0,a.createElementVNode)("svg",{viewBox:"0 0 651 192",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"h-16 w-auto text-gray-700 sm:h-20"},[(0,a.createElementVNode)("g",{"clip-path":"url(#clip0)",fill:"#EF3B2D"},[(0,a.createElementVNode)("path",{d:"M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z"})])])],-1)})),v={class:"ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0"};var f=r(9038);const p=(0,a.defineComponent)({components:{Head:f.Fb,Link:f.rU},props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String}});var g=r(3379),h=r.n(g),m=r(5093),b={insert:"head",singleton:!1};h()(m.Z,b);m.Z.locals;const y=(0,r(3744).Z)(p,[["render",function(e,t,r,o,f,p){var g=(0,a.resolveComponent)("Head"),h=(0,a.resolveComponent)("Link");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(g,{title:"Welcome"}),(0,a.createElementVNode)("div",n,[e.canLogin?((0,a.openBlock)(),(0,a.createElementBlock)("div",c,[e.$page.props.user?((0,a.openBlock)(),(0,a.createBlock)(h,{key:0,href:e.route("dashboard"),class:"text-sm text-gray-700 underline"},{default:(0,a.withCtx)((function(){return[l]})),_:1},8,["href"])):((0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,{key:1},[(0,a.createVNode)(h,{href:e.route("login"),class:"text-sm text-gray-700 underline"},{default:(0,a.withCtx)((function(){return[i]})),_:1},8,["href"]),e.canRegister?((0,a.openBlock)(),(0,a.createBlock)(h,{key:0,href:e.route("register"),class:"ml-4 text-sm text-gray-700 underline"},{default:(0,a.withCtx)((function(){return[d]})),_:1},8,["href"])):(0,a.createCommentVNode)("",!0)],64))])):(0,a.createCommentVNode)("",!0),(0,a.createElementVNode)("div",s,[u,(0,a.createElementVNode)("div",v," Laravel v"+(0,a.toDisplayString)(e.laravelVersion)+" (PHP v"+(0,a.toDisplayString)(e.phpVersion)+") ",1)])])],64)}],["__scopeId","data-v-b355c4de"]])}}]);