!function(e){function t(t){for(var n,o,i=t[0],s=t[1],a=0,u=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(d&&d(t);u.length;)u.shift()()}var n={},r={0:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=function(e){return o.p+""+({1:"categories-index-js",2:"dashboard-index-js",3:"error404-index-js",4:"products-edit-index-js",5:"products-list-index-js",6:"sales-index-js"}[e]||e)+"-"+e+".js"}(e);var d=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var d=s;o(o.s=2)}([function(e,t,n){var r={"./categories/index.js":[6,1],"./dashboard/index.js":[4,2],"./error404/index.js":[3,3],"./products/edit/index.js":[7,4],"./products/list/index.js":[5,5],"./sales/index.js":[8,6]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=0,e.exports=o},,function(e,t,n){"use strict";n.r(t);class r{constructor(){this.routes=[],this.initEventListeners()}initEventListeners(){document.addEventListener("click",e=>{const t=e.target.closest("a");if(!t)return;const n=t.getAttribute("href");n&&n.startsWith("/")&&(e.preventDefault(),this.navigate(n))})}static instance(){return this._instance||(this._instance=new r),this._instance}async route(){let e,t=decodeURI(window.location.pathname).replace(/^\/|\/$/,"");for(let n of this.routes)if(e=t.match(n.pattern),e){this.page=await this.changePage(n.path,e);break}e||(this.page=await this.changePage(this.notFoundPagePath)),document.dispatchEvent(new CustomEvent("route",{detail:{page:this.page}}))}async changePage(e,t){return this.page&&this.page.destroy&&this.page.destroy(),await async function(e,t){const r=document.querySelector("main");r.classList.add("is-loading");const{default:o}=await n(0)(`./${e}/index.js`);t.length>1&&(t=t[1]);const i=new o(t),s=await i.render();r.classList.remove("is-loading");const a=document.querySelector("#content");return a.innerHTML="",a.append(s),i}(e,t)}navigate(e){history.pushState(null,null,e),this.route()}addRoute(e,t){return this.routes.push({pattern:e,path:t}),this}setNotFoundPagePath(e){return this.notFoundPagePath=e,this}listen(){window.addEventListener("popstate",()=>this.route()),this.route()}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class i{constructor(){if(o(this,"element",void 0),o(this,"handlerMove",e=>{this.moveAt(e)}),o(this,"handlerOut",e=>{this.remove(),document.body.removeEventListener("mousemove",this.handlerMove)}),o(this,"handlerOver",e=>{let t=e.target.closest("data-tooltip");t&&(this.render(t.dataset.tooltip),document.body.addEventListener("mousemove",this.handlerMove))}),i.instance)return i.instance;i.instance=this}initialize(){this.initEventListeners()}initEventListeners(){document.body.addEventListener("pointerover",this.handlerOver),document.body.addEventListener("pointerout",this.handlerOut)}render(e){const t=document.createElement("div");t.innerHTML=`<div> ${e} </div>`;this.element=t,this.element.classList.add("tooltip"),document.body.append(this.element)}moveAt(e){const t=e.clientX+10,n=e.clientY+10;this.element.style.left=t+"px",this.element.style.top=n+"px"}remove(){this.element&&this.element.remove()}destroy(){document.body.removeEventListener("pointerover",this.handlerOut),document.body.removeEventListener("pointerout",this.handlerOut),document.removeEventListener("mousemove",this.handlerMove),this.remove(),this.element=null}}o(i,"instance",void 0);(new i).initialize();r.instance().addRoute(/^$/,"dashboard").addRoute(/^products$/,"products/list").addRoute(/^products\/add$/,"products/edit").addRoute(/^products\/([\w()-]+)$/,"products/edit").addRoute(/^sales$/,"sales").addRoute(/^categories$/,"categories").addRoute(/^404\/?$/,"error404").setNotFoundPagePath("error404").listen()}]);
//# sourceMappingURL=app.bundle.js.map