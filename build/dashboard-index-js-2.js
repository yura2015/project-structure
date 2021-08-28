(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return c}));var n=s(12),r=s(11),a=s(9);function i(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class o{constructor({label:e="",link:t="",formatHeading:s=(e=>e),url:n="",range:r={from:new Date,to:new Date}}={}){i(this,"element",void 0),i(this,"subElements",{}),i(this,"chartHeight",50),this.url=new URL(n,"https://course-js.javascript.ru/"),this.range=r,this.label=e,this.link=t,this.formatHeading=s,this.render()}render(){const{from:e,to:t}=this.range,s=document.createElement("div");s.innerHTML=this.template,this.element=s.firstElementChild,this.subElements=this.getSubElements(this.element),this.loadData(e,t)}getHeaderValue(e){return this.formatHeading(Object.values(e).reduce((e,t)=>e+t,0))}async loadData(e,t){this.element.classList.add("column-chart_loading"),this.subElements.header.textContent="",this.subElements.body.innerHTML="",this.url.searchParams.set("from",e.toISOString()),this.url.searchParams.set("to",t.toISOString());const s=await Object(a.a)(this.url);this.setNewRange(e,t),s&&Object.values(s).length&&(this.subElements.header.textContent=this.getHeaderValue(s),this.subElements.body.innerHTML=this.getColumnBody(s),this.element.classList.remove("column-chart_loading"))}setNewRange(e,t){this.range.from=e,this.range.to=t}getColumnBody(e){const t=Math.max(...Object.values(e));return Object.entries(e).map(([e,s])=>{const n=this.chartHeight/t,r=(s/t*100).toFixed(0),a=`<span>\n        <small>${e.toLocaleString("default",{dateStyle:"medium"})}</small>\n        <br>\n        <strong>${r}%</strong>\n      </span>`;return`<div style="--value: ${Math.floor(s*n)}" data-tooltip="${a}"></div>`}).join("")}getLink(){return this.link?`<a class="column-chart__link" href="${this.link}">View all</a>`:""}get template(){return`\n      <div class="column-chart column-chart_loading" style="--chart-height: ${this.chartHeight}">\n        <div class="column-chart__title">\n          Total ${this.label}\n          ${this.getLink()}\n        </div>\n        <div class="column-chart__container">\n          <div data-element="header" class="column-chart__header"></div>\n          <div data-element="body" class="column-chart__chart"></div>\n        </div>\n      </div>\n    `}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}async update(e,t){return await this.loadData(e,t)}destroy(){this.element.remove()}}var l=[{id:"images",title:"Image",sortable:!1,template:e=>`\n          <div class="sortable-table__cell">\n            <img class="sortable-table-image" alt="Image" src="${e[0].url}">\n          </div>\n        `},{id:"title",title:"Name",sortable:!0,sortType:"string"},{id:"quantity",title:"Quantity",sortable:!0,sortType:"number"},{id:"price",title:"Price",sortable:!0,sortType:"number"},{id:"status",title:"Status",sortable:!0,sortType:"number",template:e=>`<div class="sortable-table__cell">\n          ${e>0?"Active":"Inactive"}\n        </div>`}];function d(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class c{constructor(){d(this,"element",void 0),d(this,"subElements",{}),d(this,"components",{})}async updateComponents(e,t){new URL(url,"https://course-js.javascript.ru/");const s=await Object(a.a)(new URL("api/dashboard/bestsellers","https://course-js.javascript.ru/"));this.components.SortableTable.addRows(s),this.components.ordersChart.update(e,t),this.components.salesChart.update(e,t),this.components.customsChart.update(e,t)}initComponents(){const e=new Date,t=new Date,s=new Date(e.setMonth(e.getMonth()-1)),a=new n.a({from:s,to:t}),i=new r.a(l,{url:"api/dashboard/bestsellers",isSortlocaly:!0}),d=new o({url:"api/dashboard/orders",range:{from:s,to:t},label:"orders"}),c=new o({url:"api/dashboard/sales",range:{from:s,to:t},label:"orders"}),h=new o({url:"api/dashboard/customers",range:{from:s,to:t},label:"orders"});this.components={rangePicker:a,sortableTable:i,ordersChart:d,salesChart:c,customersChart:h}}randerComponents(){Object.keys(this.components).forEach(e=>{const t=this.subElements[e],{element:s}=this.components[e];t.append(s)})}get template(){return' <div class="dashboard">\n                   <div class="content__top-panel">\n                     <h2 class="page_title">Dashboard</h2>\n                     \x3c!---  --\x3e\n                     <div data-element="rangePicker"></div>\n                   </div>\n                   <div data-element="ChartsRoot" class="dashboard__charts">\n                   \x3c!---  --\x3e\n                      <div data-element="ordersChart" class="dashboard__chart_orders"></div>\n                      <div data-element="salesChart" class="dashboard__chart_sales"></div>\n                      <div data-element="customersChart" class="dashboard__chart_customers"></div>\n                   </div>\n                   <h3 class="block-title" >Best sales</h3>\n                   <div data-element="sortableTable">\n                   \x3c!---  --\x3e\n                   </div>\n                </div>\n               '}render(){return this.element=document.createElement("div"),this.element.innerHTML=this.template,this.element=this.element.firstElementChild,this.subElements=this.getSubElements(this.element),this.initComponents(),this.randerComponents(),this.initEventListener(),this.element}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}initEventListener(){this.components.rangePicker.element.addEventListener("date-select",e=>{const{from:t,to:s}=e.detail;this.updateComponents(t,s)})}remove(){this.element&&this.element.remove()}destroy(){this.remove();for(const e in this.components)this.components[e].destroy();this.element=null,this.subElements={}}}},,,,,function(e,t,s){"use strict";t.a=async function(e,t){let s,r;try{s=await fetch(e.toString(),t)}catch(e){throw new n(s,"Network error has occurred.")}if(!s.ok){let e=s.statusText;try{r=await s.json(),e=r.error&&r.error.message||r.data&&r.data.error&&r.data.error.message||e}catch(e){}let t=`Error ${s.status}: ${e}`;throw new n(s,r,t)}try{return await s.json()}catch(e){throw new n(s,null,e.message)}};class n extends Error{constructor(e,t,s){var n,r,a;super(s),a="FetchError",(r="name")in(n=this)?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,this.response=e,this.body=t}}window.addEventListener("unhandledrejection",e=>{e.reason instanceof n&&alert(e.reason.message)})},,function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var n=s(9);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class a{constructor(e=[],{url:t="",sorted:s={id:e.find(e=>e.sortable).id,order:"asc"},isSortLocally:n=!1,step:a=20,start:i=1,end:o=i+a}={}){r(this,"element",void 0),r(this,"subElements",{}),r(this,"data",[]),r(this,"loading",!1),r(this,"step",20),r(this,"start",1),r(this,"end",this.start+this.step),r(this,"onWindowScroll",async()=>{const{bottom:e}=this.element.getBoundingClientRect(),{id:t,order:s}=this.sorted;if(e<document.documentElement.clientHeight&&!this.loading&&!this.isSortLocally){this.start=this.end,this.end=this.start+this.step,this.loading=!0;const e=await this.loadData(t,s,this.start,this.end);this.updateBody(e),this.loading=!1}}),r(this,"onSortClick",e=>{const t=e.target.closest('[data-sortable="true"]');if(t){const{id:e,order:s}=t.dataset,n=(e=>({asc:"desc",desc:"asc"}[e]))(s);this.sorted={id:e,order:n},t.dataset.order=n,t.append(this.subElements.arrow),this.isSortLocally?this.sortLocally(e,n):this.sortOnServer(e,n,1,1+this.step)}}),this.headersConfig=e,this.url=new URL(t,"https://course-js.javascript.ru/"),this.sorted=s,this.isSortLocally=n,this.step=a,this.start=i,this.end=o,this.render(),this.update()}render(){const e=document.createElement("div");e.innerHTML=this.getTable([]);const t=e.firstElementChild;this.element=t,this.subElements=this.getSubElements(t)}async update(){const{id:e,order:t}=this.sorted;this.data=await this.loadData(e,t,this.start,this.end),this.renderRows([...this.data]),this.initEventListeners()}addRows(e){this.subElements.body.innerHTML=this.getTableRows(e)}updateBody(e){const t=document.createElement("div");e=[...this.data,...e],t.innerHTML=this.getTableRows(e),this.subElements.body.append(...t.childNodes)}async loadData(e,t,s=this.start,r=this.end){this.url.searchParams.set("_sort",e),this.url.searchParams.set("_order",t),this.url.searchParams.set("_start",s),this.url.searchParams.set("_end",r),this.element.classList.add("sortable-table_loading");const a=await Object(n.a)(this.url);return this.element.classList.remove("sortable-table_loading"),a}getTableHeader(){return`<div data-element="header" class="sortable-table__header sortable-table__row">\n      ${this.headersConfig.map(e=>this.getHeaderRow(e)).join("")}\n    </div>`}getHeaderRow({id:e,title:t,sortable:s}){return`\n      <div class="sortable-table__cell" data-id="${e}" data-sortable="${s}" data-order="${this.sorted.id===e?this.sorted.order:"asc"}">\n        <span>${t}</span>\n        ${this.getHeaderSortingArrow(e)}\n      </div>\n    `}getHeaderSortingArrow(e){return(this.sorted.id===e?this.sorted.order:"")?'<span data-element="arrow" class="sortable-table__sort-arrow">\n          <span class="sort-arrow"></span>\n        </span>':""}getTableBody(e){return`\n      <div data-element="body" class="sortable-table__body">\n        ${this.getTableRows(e)}\n      </div>`}getTableRows(e){return e.map(t=>`\n      <div class="sortable-table__row">\n        ${this.getTableRow(t,e)}\n      </div>`).join("")}getTableRow(e){return this.headersConfig.map(({id:e,template:t})=>({id:e,template:t})).map(({id:t,template:s})=>s?s(e[t]):`<div class="sortable-table__cell">${e[t]}</div>`).join("")}getTable(e=[]){return`\n      <div class="sortable-table">\n        ${this.getTableHeader()}\n        ${this.getTableBody(e)}\n        <div data-element="loading" class="loading-line sortable-table__loading-line"></div>\n        <div data-element="emptyPlaceholder" class="sortable-table__empty-placeholder">\n          No products\n        </div>\n      </div>`}initEventListeners(){this.subElements.header.addEventListener("pointerdown",this.onSortClick),document.addEventListener("scroll",this.onWindowScroll)}sortLocally(e,t){const s=this.sortData(e,t);this.subElements.body.innerHTML=this.getTableBody(s)}async sortOnServer(e,t,s,n){const r=await this.loadData(e,t,s,n);this.renderRows(r)}renderRows(e){e.length?(this.element.classList.remove("sortable-table_empty"),this.addRows(e)):this.element.classList.add("sortable-table_empty")}sortData(e,t){const s=[...this.data],n=this.headersConfig.find(t=>t.id===e),{sortType:r,customSorting:a}=n,i="asc"===t?1:-1;return s.sort((t,s)=>{switch(r){case"number":return i*(t[e]-s[e]);case"string":return i*t[e].localeCompare(s[e],"ru");case"custom":return i*a(t,s);default:return i*(t[e]-s[e])}})}getSubElements(e){return[...e.querySelectorAll("[data-element]")].reduce((e,t)=>(e[t.dataset.element]=t,e),{})}remove(){this.element.remove()}destroy(){this.remove(),this.subElements={},document.removeEventListener("scroll",this.onWindowScroll)}}},function(e,t,s){"use strict";function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",(function(){return r}));class r{static formatDate(e){return e.toLocaleString("ru",{dateStyle:"short"})}constructor({from:e=new Date,to:t=new Date}={}){n(this,"element",null),n(this,"subElements",{}),n(this,"selectingFrom",!0),n(this,"selected",{from:new Date,to:new Date}),n(this,"onDocumentClick",e=>{const t=this.element.classList.contains("rangepicker_open"),s=this.element.contains(e.target);t&&!s&&this.close()}),this.showDateFrom=new Date(e),this.selected={from:e,to:t},this.render()}get template(){return`<div class="rangepicker">\n      <div class="rangepicker__input" data-element="input">\n        <span data-element="from">${r.formatDate(this.selected.from)}</span> -\n        <span data-element="to">${r.formatDate(this.selected.to)}</span>\n      </div>\n      <div class="rangepicker__selector" data-element="selector"></div>\n    </div>`}render(){const e=document.createElement("div");e.innerHTML=this.template,this.element=e.firstElementChild,this.subElements=this.getSubElements(e),this.initEventListeners()}getSubElements(e){const t={};for(const s of e.querySelectorAll("[data-element]"))t[s.dataset.element]=s;return t}initEventListeners(){const{input:e,selector:t}=this.subElements;document.addEventListener("click",this.onDocumentClick,!0),e.addEventListener("click",()=>this.toggle()),t.addEventListener("click",e=>this.onSelectorClick(e))}toggle(){this.element.classList.toggle("rangepicker_open"),this.renderDateRangePicker()}onSelectorClick({target:e}){e.classList.contains("rangepicker__cell")&&this.onRangePickerCellClick(e)}close(){this.element.classList.remove("rangepicker_open")}renderDateRangePicker(){const e=new Date(this.showDateFrom),t=new Date(this.showDateFrom),{selector:s}=this.subElements;t.setMonth(t.getMonth()+1),s.innerHTML=`\n      <div class="rangepicker__selector-arrow"></div>\n      <div class="rangepicker__selector-control-left"></div>\n      <div class="rangepicker__selector-control-right"></div>\n      ${this.renderCalendar(e)}\n      ${this.renderCalendar(t)}\n    `;const n=s.querySelector(".rangepicker__selector-control-left"),r=s.querySelector(".rangepicker__selector-control-right");n.addEventListener("click",()=>this.prev()),r.addEventListener("click",()=>this.next()),this.renderHighlight()}prev(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()-1),this.renderDateRangePicker()}next(){this.showDateFrom.setMonth(this.showDateFrom.getMonth()+1),this.renderDateRangePicker()}renderHighlight(){const{from:e,to:t}=this.selected;for(const s of this.element.querySelectorAll(".rangepicker__cell")){const{value:n}=s.dataset,r=new Date(n);s.classList.remove("rangepicker__selected-from"),s.classList.remove("rangepicker__selected-between"),s.classList.remove("rangepicker__selected-to"),e&&n===e.toISOString()?s.classList.add("rangepicker__selected-from"):t&&n===t.toISOString()?s.classList.add("rangepicker__selected-to"):e&&t&&r>=e&&r<=t&&s.classList.add("rangepicker__selected-between")}if(e){const t=this.element.querySelector(`[data-value="${e.toISOString()}"]`);t&&t.closest(".rangepicker__cell").classList.add("rangepicker__selected-from")}if(t){const e=this.element.querySelector(`[data-value="${t.toISOString()}"]`);e&&e.closest(".rangepicker__cell").classList.add("rangepicker__selected-to")}}renderCalendar(e){const t=new Date(e);t.setDate(1);const s=t.toLocaleString("ru",{month:"long"});let n=`<div class="rangepicker__calendar">\n      <div class="rangepicker__month-indicator">\n        <time datetime=${s}>${s}</time>\n      </div>\n      <div class="rangepicker__day-of-week">\n        <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>\n      </div>\n      <div class="rangepicker__date-grid">\n    `;var r;for(n+=`\n      <button type="button"\n        class="rangepicker__cell"\n        data-value="${t.toISOString()}"\n        style="--start-from: ${r=t.getDay(),1+(0===r?6:r-1)}">\n          ${t.getDate()}\n      </button>`,t.setDate(2);t.getMonth()===e.getMonth();)n+=`\n        <button type="button"\n          class="rangepicker__cell"\n          data-value="${t.toISOString()}">\n            ${t.getDate()}\n        </button>`,t.setDate(t.getDate()+1);return n+="</div></div>",n}onRangePickerCellClick(e){const{value:t}=e.dataset;if(t){const e=new Date(t);this.selectingFrom?(this.selected={from:e,to:null},this.selectingFrom=!1,this.renderHighlight()):(e>this.selected.from?this.selected.to=e:(this.selected.to=this.selected.from,this.selected.from=e),this.selectingFrom=!0,this.renderHighlight()),this.selected.from&&this.selected.to&&(this.dispatchEvent(),this.close(),this.subElements.from.innerHTML=r.formatDate(this.selected.from),this.subElements.to.innerHTML=r.formatDate(this.selected.to))}}dispatchEvent(){this.element.dispatchEvent(new CustomEvent("date-select",{bubbles:!0,detail:this.selected}))}remove(){this.element&&this.element.remove(),document.removeEventListener("click",this.onDocumentClick,!0)}destroy(){return this.remove(),this.element=null,this.subElements={},this.selectingFrom=!0,this.selected={from:new Date,to:new Date},this}}}]]);
//# sourceMappingURL=dashboard-index-js-2.js.map