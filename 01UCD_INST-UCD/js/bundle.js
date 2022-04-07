(()=>{var i={"./primo-explore/custom/01UCD_INST-UCD/js/external-search.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>function(e){e.value("searchTargets",[{name:"Worldcat",url:"https://ucdavis.on.worldcat.org/search?",img:"custom/01UCD_INST-UCD/img/worldcat-logo.png",alt:"WorldCat logo",mapping:function(e,t){const i={any:"kw",title:"ti",creator:"au",subject:"su",isbn:"bn",issn:"n2"};try{return"queryString="+e.map(e=>{e=e.split(",");return(i[e[0]]||"kw")+":"+(e[2]||"")+" "+(e[3]||"")+" "}).join("")}catch(e){return""}}},{name:"Google Scholar",url:"https://scholar.google.com/scholar?q=",img:"custom/01UCD_INST-UCD/img/google-scholar.svg",alt:"Google Scholar Logo",mapping:function(e,t){try{return e.map(e=>e.split(",")[2]||"").join(" ")}catch(e){return""}}}]),e.value("externalSearchText","Can't find what you're looking for? Search items held at other libraries.")}})},"./primo-explore/custom/01UCD_INST-UCD/js/ga.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{loadGoogleAnalytics:()=>function(){angular.module("googleAnalytics",[]),angular.module("googleAnalytics").run(["$rootScope",function(e){var t,i,r,s;t=window,s=document,i="script",r="ga",t.GoogleAnalyticsObject=r,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=+new Date,r=s.createElement(i),s=s.getElementsByTagName(i)[0],r.async=1,r.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(r,s),ga("create","UA-65988958-7","auto"),e.$on("$locationChangeSuccess",function(){ga&&ga("send","pageview")})}])}})},"./primo-explore/custom/01UCD_INST-UCD/js/search-bar-after.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>function(e){e.component("prmSearchBarAfter",{bindings:{parentCtrl:"<"},controller:"SearchBarAfterController",templateUrl:"custom/01UCD_INST-UCD/html/templates/prmSearchBarAfter.html"}),e.controller("SearchBarAfterController",["$location","$window",function(r,s){this.navigateToHomePage=function(){var e=r.search(),t=e.vid,e=e.lang||"en_US",i=r.absUrl().split("/discovery/");if(1===i.length)return console.log(i[0]+" : Could not detect the view name!"),!1;i=i[0];return s.location.href=i+"/discovery/search?vid="+t+"&lang="+e,!0}}])}})},"./primo-explore/custom/01UCD_INST-UCD/js/search-result-availability-line-after.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>function(e){window.browzine={api:"https://public-api.thirdiron.com/public/v1/libraries/75",apiKey:"c5635332-0b38-4ded-9adc-b16be01f079c",journalCoverImagesEnabled:!0,journalBrowZineWebLinkTextEnabled:!0,journalBrowZineWebLinkText:"View Journal Contents",acticleBrowZineWebLinkTextEnabled:!0,articleBrowZineWebLinkText:"View Issue Contents",articlePDFDownloadLinkEnabled:!0,articlePDFDownloadLinkText:"Download PDF",printRecordsIntegrationEnabled:!0},browzine.script=document.createElement("script"),browzine.script.src="https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js",document.head.appendChild(browzine.script),e.component("prmSearchResultAvailabilityLineAfter",{bindings:{parentCtrl:"<"},controller:"prmSearchResultAvailabilityLineAfterController"}),e.controller("prmSearchResultAvailabilityLineAfterController",["$scope",function(e){window.browzine.primo.searchResult(e)}])}})},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/brand/ucd-theme-list-accordion/ucd-theme-list-accordion.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o});var t=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/lit/index.js"),r=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/brand/ucd-theme-list-accordion/ucd-theme-list-accordion.tpl.js"),s=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/index.js");class o extends t.LitElement{static get properties(){return{listStyle:{type:String,attribute:"list-style"},_listItems:{attribute:!1,state:!0},_availableStyles:{attribute:!1,state:!0},_expandedItems:{attribute:!1,state:!0},role:{type:String,reflect:!0}}}constructor(){super(),this.render=r.render.bind(this),this.mutationObserver=new s.MutationObserverController(this),this._listItems=[],this._availableStyles=["accordion","faq"],this.listStyle=this._availableStyles[0],this._expandedItems=new Set,this.role="list"}static get styles(){return(0,r.styles)()}willUpdate(e){!e.has("listStyle")||this._availableStyles.includes(this.listStyle.toLowerCase())||(this.listStyle=this._availableStyles[0])}async toggleItemVisiblity(e,t=!0,i=!1){t=t?e:Math.floor(e/2);this._expandedItems.has(t)?this._expandedItems.delete(t):this._expandedItems.add(t),this.requestUpdate(),await this.updateComplete,i&&this._dispatchItemToggleEvent(e)}itemIsExpanded(e,t=!0){t=t?e:Math.floor(e/2);return this._expandedItems.has(t)}_onTitleClick(e){e=parseInt(e.target.getAttribute("item-index"));this.toggleItemVisiblity(e,!1,!0)}_onTitleKeyUp(e){13===e.which&&(e=parseInt(e.target.getAttribute("item-index")),this.toggleItemVisiblity(e,!1,!0))}_onChildListMutation(){let i=[];Array.from(this.children).forEach((e,t)=>{e.setAttribute("slot","list-item-"+t),"faq"===this.listStyle&&(e.style.display="inline"),i.push({child:e,slotName:"list-item-"+t})}),this._listItems=i}_dispatchItemToggleEvent(e){e=new CustomEvent("item-toggle",{detail:{message:"A list item has been expanded or collapsed",isExpanded:this.itemIsExpanded(e,!1),item:{title:this._listItems[e],content:this._listItems[e+1]},listItemIndex:e,listItemPairIndex:Math.floor(e/2)},bubbles:!0,composed:!0});this.dispatchEvent(e)}_isTitle(e){return!(e%2)}_isContent(e){return!this._isTitle(e)}}customElements.define("ucd-theme-list-accordion",o)},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/brand/ucd-theme-list-accordion/ucd-theme-list-accordion.tpl.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{render:()=>function(){return r.html`
<ul class="list--${this.listStyle}">
${this._listItems.map((e,t)=>r.html`
  ${this._isTitle(t)?r.html`
    <li 
      id="accordion-${t}"
      class="item-title ${this.itemIsExpanded(t,!1)?"active":""}"
      item-index="${t}" 
      tabindex="0"
      @click=${this._onTitleClick}
      @keyup=${this._onTitleKeyUp}
      aria-controls="accordion-${t}-panel"
      aria-expanded="${this.itemIsExpanded(t,!1)}">
      <slot name="${e.slotName}"></slot>
    </li>
  `:r.html`
    <li 
      id="accordion-${t}-panel" 
      class="item-content"
      role="region" 
      aria-labelledby="accordion-${t}" 
      ?hidden="${!this.itemIsExpanded(t,!1)}">
      <slot name="${e.slotName}"></slot>
    </li>
  `}
`)}
</ul>
`},styles:()=>function(){var e=r.css`
    :host {
      display: block;
    }
    [hidden] {
      display: none;
    }
    .item-title ::slotted(*) {
      pointer-events: none;
    }
    .list--accordion {
      margin-bottom: 0;
    }
  `;return[s.default,e]}});var r=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/lit/index.js"),s=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-sass/2_base_class/_lists.css.js")},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/break-points.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{BreakPointsController:()=>r});class r{constructor(e){(this.host=e).addController(this),this.mobileBreakPoint=992}isDesktop(){return window.innerWidth>=this.mobileBreakPoint}isMobile(){return!this.isDesktop()}}},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/index.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{BreakPointsController:()=>r.BreakPointsController,IntersectionObserverController:()=>s.IntersectionObserverController,MutationObserverController:()=>o.MutationObserverController,PopStateObserverController:()=>l.PopStateObserverController,SilsPrimoController:()=>n.SilsPrimoController,WaitController:()=>a.WaitController});var r=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/break-points.js"),s=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/intersection-observer.js"),o=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/mutation-observer.js"),l=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/popstate-observer.js"),n=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/sils-primo.js"),a=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/wait.js")},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/intersection-observer.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{IntersectionObserverController:()=>r});class r{constructor(e,t={},i="_onIntersection",r=!0){(this.host=e).addController(this),this.options=t,this.callback=i,this.observeSelf=r}hostConnected(){this.observer=new IntersectionObserver(this._callback.bind(this),this.options),this.observeSelf&&this.observer.observe(this.host)}hostDisconnected(){this.observer.disconnect()}_callback(e,t){this.host[this.callback]?this.host[this.callback](e,t):console.warn(`Element has no '${this.callback}' method. 
        Either add this method, or change the 'callback' argument on controller instantiation.`)}}},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/mutation-observer.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{MutationObserverController:()=>r});class r{constructor(e,t={childList:!0},i="_onChildListMutation"){(this.host=e).addController(this),this.options=t,this.callback=i}hostConnected(){this._observer=new MutationObserver((e,t)=>this._onMutation(e,t)),this._observer.observe(this.host,this.options),this._onMutation()}hostDisconnected(){this._observer.disconnect()}_onMutation(e,t){this.host[this.callback]?this.host[this.callback](e,t):console.warn(`Element has no '${this.callback}' method. 
        Either add this method, or change the 'callback' argument on instantiation.`)}}},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/popstate-observer.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{PopStateObserverController:()=>r});class r{constructor(e,t="_onPopstate"){(this.host=e).addController(this),this.callback=t,this._onPopstate=this._onPopstate.bind(this)}hostConnected(){window.addEventListener("popstate",this._onPopstate)}hostDisconnected(){window.removeEventListener("popstate",this._onPopstate)}_onPopstate(e){var t;this.host[this.callback]?(t=this._getLocationObject(),this.host[this.callback](t,e)):console.warn(`Element has no '${this.callback}' method. 
        Either add this method, or change the 'callback' argument on instantiation.`)}_getLocationObject(){return{fullpath:window.location.href.replace(window.location.origin,"").replace(/^\/+/,"/"),pathname:window.location.pathname.replace(/^\/+/,"/"),path:window.location.pathname.replace(/(^\/+|\/+$)/g,"").split("/"),query:new URLSearchParams(window.location.search),hash:window.location.hash.replace(/^#/,"")}}}},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/sils-primo.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{SilsPrimoController:()=>r});class r{constructor(e,t={}){(this.host=e).addController(this),this.updateConfig(t)}updateConfig(e){var t="LibraryCatalog";this.config=Object.assign({host:"https://search.library.ucdavis.edu",paths:{search:"discovery/search",browse:"discovery/browse"},defaultParams:{vid:"01UCD_INST:UCD"},corpora:{everything:{tab:"UCSILSDefaultSearch",scope:"DN_and_CI"},uc:{tab:"UCSDiscoveryNetwork",scope:"UCSDiscoveryNetwork"},ucd:{tab:t,scope:"MyInstitution"},specialCollections:{tab:t,scope:"SSPEC"},medical:{tab:t,scope:"BLAISDELL"},healthSciences:{tab:t,scope:"CARLSON"},law:{tab:t,scope:"Mabie"}}},e)}makeSearchUrl(e,t="everything",i=!1,r={}){var s=""+this._trailingSlashIt(this.config.host)+this.config.paths.search;let o=Object.assign({},this.config.defaultParams);return i&&(o.mode="advanced"),e&&(o.query="any,contains,"+e.replace(/,/g," ")),this.config.corpora[t]?(o.tab=this.config.corpora[t].tab,o.search_scope=this.config.corpora[t].scope):console.warn(t+" is not a recognized corpus"),r&&Object.assign(o,r),s+"?"+(o=new URLSearchParams(o)).toString()}_trailingSlashIt(e){return e.endsWith("/")?e:e+"/"}}},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/utils/controllers/wait.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{WaitController:()=>r});class r{constructor(e){(this.host=e).addController(this)}async wait(t){return new Promise(e=>{setTimeout(e,t)})}async waitForUpdate(){this.host.requestUpdate(),await this.host.updateComplete}async waitForFrames(t=1){for(let e=0;e<t;e++)await new Promise(e=>{requestAnimationFrame(e)})}}},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-sass/2_base_class/_lists.css.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});const r=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/lit/index.js").css`

@charset "UTF-8";
:host {
  --list-arrow-color: #ffc519;
  --list-bordered-border: #dbeaf7;
  --list-faq-question: #13639e;
  --list-faq-question-hover: #001124;
  --list-faq-a: #022851;
  --list-pipe-pipe: #4c4c4c;
  --list-faq-prefix-spacing: 1.5rem;
  --list-bordered-vertical-spacing: 0.5rem;
}

.list--flush,
.list-wrapper--flush ul {
  margin: 0;
  padding: 0 0 0 1.25rem;
}

.list--arrow li,
.list-wrapper--arrow ul li {
  position: relative;
  margin-left: -1ch;
  padding-left: 1ch;
}
.list--arrow li::marker,
.list-wrapper--arrow ul li::marker {
  color: var(--list-arrow-color);
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 0.8em;
  font-weight: 900;
}
.list--arrow li li::marker,
.list-wrapper--arrow ul li li::marker {
  content: "";
  font-size: 1em;
}
.list--arrow li li li::marker,
.list-wrapper--arrow ul li li li::marker {
  content: "";
  font-size: 0.8em;
}

.list--white-arrow,
.list-wrapper--white-arrow ul {
  --list-arrow-color: #fff;
}
.list--white-arrow li,
.list-wrapper--white-arrow ul li {
  position: relative;
  margin-left: -1ch;
  padding-left: 1ch;
}
.list--white-arrow li::marker,
.list-wrapper--white-arrow ul li::marker {
  color: var(--list-arrow-color);
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 0.8em;
  font-weight: 900;
}
.list--white-arrow li li::marker,
.list-wrapper--white-arrow ul li li::marker {
  content: "";
  font-size: 1em;
}
.list--white-arrow li li li::marker,
.list-wrapper--white-arrow ul li li li::marker {
  content: "";
  font-size: 0.8em;
}

.list--bordered,
.list-wrapper--bordered ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list--bordered ul,
.list-wrapper--bordered ul ul {
  margin-top: var(--list-bordered-vertical-spacing);
  border-top: 1px solid var(--list-bordered-border);
}
.list--bordered ul li:first-child,
.list-wrapper--bordered ul ul li:first-child {
  padding-top: var(--list-bordered-vertical-spacing);
}
.list--bordered li,
.list--bordered > div,
.list-wrapper--bordered ul li,
.list-wrapper--bordered ul > div {
  position: relative;
  margin-bottom: var(--list-bordered-vertical-spacing);
  padding: 0 0 var(--list-bordered-vertical-spacing) 2rem;
  border-bottom: 1px solid var(--list-bordered-border);
}
.list--bordered li:last-child,
.list--bordered > div:last-child,
.list-wrapper--bordered ul li:last-child,
.list-wrapper--bordered ul > div:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}
.list--bordered li:before,
.list--bordered > div:before,
.list-wrapper--bordered ul li:before,
.list-wrapper--bordered ul > div:before {
  position: absolute;
  margin: 0 0 0 -1.7em;
  color: var(--list-arrow-color);
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 0.8em;
  font-weight: 900;
  line-height: 2.1;
}
.list--bordered li li,
.list--bordered > div li,
.list-wrapper--bordered ul li li,
.list-wrapper--bordered ul > div li {
  padding-left: 0;
}
.list--bordered li li:before,
.list--bordered > div li:before,
.list-wrapper--bordered ul li li:before,
.list-wrapper--bordered ul > div li:before {
  content: "";
}

.list--faq,
.list-wrapper--faq ul {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
  margin-left: 1rem;
}
.list--faq li,
.list-wrapper--faq ul li {
  list-style: none;
}
.list--faq > li,
.list-wrapper--faq ul > li {
  padding: 0 0.5rem 0.5rem var(--list-faq-prefix-spacing);
}
.list--faq > li:nth-child(odd),
.list-wrapper--faq ul > li:nth-child(odd) {
  padding-top: 0.5rem;
  color: var(--category-brand-contrast-color, var(--list-faq-question));
  cursor: pointer;
  font-weight: 800;
  text-decoration: none;
}
.list--faq > li:nth-child(odd):hover,
.list-wrapper--faq ul > li:nth-child(odd):hover {
  color: var(--category-brand-contrast-color, var(--list-faq-question-hover));
  opacity: 0.8;
}
.list--faq > li:nth-child(odd):not(:first-child),
.list-wrapper--faq ul > li:nth-child(odd):not(:first-child) {
  border-top: 1px solid var(--list-bordered-border);
}
.list--faq > li:nth-child(odd):before,
.list-wrapper--faq ul > li:nth-child(odd):before {
  display: inline-block;
  width: var(--list-faq-prefix-spacing);
  margin-left: calc(-1 * var(--list-faq-prefix-spacing));
  content: "Q:";
  font-weight: 800;
}
.list--faq > li:nth-child(odd) > p,
.list-wrapper--faq ul > li:nth-child(odd) > p {
  margin: 0;
}
.list--faq > li:nth-child(even),
.list-wrapper--faq ul > li:nth-child(even) {
  padding-bottom: 1rem;
}
.list--faq > li:nth-child(even):before,
.list-wrapper--faq ul > li:nth-child(even):before {
  display: inline-block;
  float: left;
  width: var(--list-faq-prefix-spacing);
  margin-left: calc(-1 * var(--list-faq-prefix-spacing));
  color: var(--category-brand-contrast-color, var(--list-faq-a));
  content: "A:";
  font-weight: 800;
}

.list--pipe,
.list-wrapper--pipe ul {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.list--pipe li,
.list-wrapper--pipe ul li {
  list-style: none;
}
.list--pipe li,
.list-wrapper--pipe ul li {
  display: inline-block;
  margin-right: 0.25rem;
  padding-right: 0.5rem;
  border-right: 1px solid var(--category-brand-contrast-color, var(--list-pipe-pipe));
  line-height: 1;
}
.list--pipe li:last-child,
.list-wrapper--pipe ul li:last-child {
  margin-right: 0;
  padding-right: 0;
  border-right: 0;
}

.list--comment {
  margin: 0;
  padding: 0;
  list-style: none;
  margin: 0;
  padding: 0 0 2rem;
}
.list--comment ul {
  margin-top: var(--list-bordered-vertical-spacing);
  border-top: 1px solid var(--list-bordered-border);
}
.list--comment ul li:first-child {
  padding-top: var(--list-bordered-vertical-spacing);
}
.list--comment li,
.list--comment > div {
  position: relative;
  margin-bottom: var(--list-bordered-vertical-spacing);
  padding: 0 0 var(--list-bordered-vertical-spacing) 2rem;
  border-bottom: 1px solid var(--list-bordered-border);
}
.list--comment li:last-child,
.list--comment > div:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}
.list--comment li:before,
.list--comment > div:before {
  position: absolute;
  margin: 0 0 0 -1.7em;
  color: var(--list-arrow-color);
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 0.8em;
  font-weight: 900;
  line-height: 2.1;
}
.list--comment li li,
.list--comment > div li {
  padding-left: 0;
}
.list--comment li li:before,
.list--comment > div li:before {
  content: "";
}

.list--simple,
.list-wrapper--simple ul {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.list--simple li,
.list-wrapper--simple ul li {
  list-style: none;
}
.list--simple li,
.list-wrapper--simple ul li {
  margin-bottom: 0;
  font-size: 1rem;
  font-style: normal;
  margin-bottom: 1rem;
}
.list--simple li ul,
.list-wrapper--simple ul li ul {
  margin-top: 1rem;
}
.list--simple a,
.list-wrapper--simple ul a {
  font-weight: 400;
}

.list--filter {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.list--filter li {
  list-style: none;
}
.list--filter li {
  padding: 0.25rem 0 0.25rem 0.5rem;
}

.list--multilevel {
  list-style-type: decimal;
}
.list--multilevel ol {
  list-style-type: lower-alpha;
}
.list--multilevel ol ol {
  list-style-type: lower-roman;
}

.list--outline {
  list-style-type: upper-roman;
}
.list--outline ol {
  list-style-type: upper-alpha;
}
.list--outline ol ol {
  list-style-type: decimal;
}
.list--outline ol ol ol {
  list-style-type: lower-latin;
}
.list--outline ol ol ol ol {
  list-style-type: lower-roman;
}

.list--reset {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.list--reset li {
  list-style: none;
}

.list--accordion {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
  margin-bottom: 1rem;
}
.list--accordion li {
  list-style: none;
}
.list--accordion > li {
  padding: 0 0.5rem 0.5rem var(--list-faq-prefix-spacing);
}
.list--accordion > li:nth-child(odd) {
  position: relative;
  display: block;
  padding: 0.5rem 2rem;
  border: 0;
  border-bottom: 1px solid #cce0f3;
  background-color: #022851;
  color: #fff;
  cursor: pointer;
  font-style: normal;
  font-weight: 800;
  text-align: left;
  white-space: normal;
}
.list--accordion > li:nth-child(odd):before {
  position: absolute;
  margin: -0.15em 0 0 -1.43em;
  color: var(--list-arrow-color);
  content: "";
  font-family: "Font Awesome 5 Free";
  font-size: 0.8em;
  font-weight: 900;
  line-height: 2.5;
}
.list--accordion > li:nth-child(odd) > p {
  margin: 0;
}
.list--accordion > li:nth-child(even) {
  padding: 0.5rem 2rem;
  background-color: #ebf3fa;
  color: #000;
}
.list--accordion .active:before {
  transform: rotate(90deg);
}

.list--download {
  margin: 0;
  padding: 0 0 0 1.25rem;
  padding-left: 0;
  list-style: none;
}
.list--download li {
  list-style: none;
}
.list--download a {
  color: #13639e;
  text-decoration: underline;
}
.list--download a:hover {
  color: #00b2e3;
}

`},"./primo-explore/custom/01UCD_INST-UCD/node_modules/primo-explore-external-search/index.js":(e,t,i)=>{i("./primo-explore/custom/01UCD_INST-UCD/node_modules/primo-explore-external-search/js/external-search.module.js"),e.exports="externalSearch"},"./primo-explore/custom/01UCD_INST-UCD/node_modules/primo-explore-external-search/js/external-search.module.js":()=>{angular.module("externalSearch",[]).value("searchTargets",[]).value("externalSearchText","").component("prmFacetAfter",{bindings:{parentCtrl:"<"},controller:["externalSearch","$scope",function(e,t){this.$onInit=function(){e.setController(this.parentCtrl),e.addExtSearch(),t.$watch("$ctrl.parentCtrl.facets",function(){e.addExtSearch()})}}]}).component("prmPageNavMenuAfter",{controller:["externalSearch",function(e){this.$onInit=function(){e.getController()&&e.addExtSearch()}}]}).component("prmFacetExactAfter",{bindings:{parentCtrl:"<"},template:'<div ng-if="name === \'External Search\'">          <div ng-hide="$ctrl.parentCtrl.facetGroup.facetGroupCollapsed">              <div class="section-content animate-max-height-variable">                  <div ng-if="introText" id="external-search-intro">{{introText}}</div>                  <div class="md-chips md-chips-wrap">                      <div ng-repeat="target in targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">                          <div class="md-chip-content layout-row" role="button" tabindex="0">                              <strong dir="auto" title="{{ target.name }}">                                  <a ng-href="{{ target.url + target.mapping(queries, filters) }}" target="_blank">                                      <img ng-src="{{ target.img }}" width="22" height="22" alt="{{ target.alt }}" style="vertical-align:middle;"> {{ target.name }}                                  </a>                              </strong>                          </div>                      </div>                  </div>              </div>          </div>      </div>',controller:["$scope","$location","searchTargets","externalSearchText",function(i,r,s,o){this.$onInit=function(){i.name=this.parentCtrl.facetGroup.name,i.targets=s,i.introText=o;var e=r.search().query,t=r.search().pfilter;i.queries="[object Array]"===Object.prototype.toString.call(e)?e:!!e&&[e],i.filters="[object Array]"===Object.prototype.toString.call(t)?t:!!t&&[t]}}]}).factory("externalSearch",function(){return{getController:function(){return this.prmFacetCtrl||!1},setController:function(e){this.prmFacetCtrl=e},addExtSearch:function(e){((e=e||this.prmFacetCtrl).facets.length<1||"External Search"!==e.facets[0].name)&&e.facets.unshift({name:"External Search",displayedType:"exact",limitCount:0,facetGroupCollapsed:!1,values:[]})}}})},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@lit/reactive-element/development/css-tag.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{CSSResult:()=>l,adoptStyles:()=>d,css:()=>a,getCompatibleStyle:()=>c,supportsAdoptingStyleSheets:()=>s,unsafeCSS:()=>n});const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new Map;class l{constructor(e,t){if(this._$cssResult$=!0,t!==o)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=r.get(this.cssText);return s&&void 0===e&&(r.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=e=>new l("string"==typeof e?e:String(e),o),a=(r,...e)=>{e=1===r.length?r[0]:e.reduce((e,t,i)=>e+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw new Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+r[i+1],r[0]);return new l(e,o)},d=(r,e)=>{s?r.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):e.forEach(e=>{const t=document.createElement("style");var i=window.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=e.cssText,r.appendChild(t)})},c=s?e=>e:t=>{if(t instanceof CSSStyleSheet){let e="";for(const i of t.cssRules)e+=i.cssText;return n(e)}return t}},"./primo-explore/custom/01UCD_INST-UCD/node_modules/@lit/reactive-element/development/reactive-element.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{CSSResult:()=>r.CSSResult,ReactiveElement:()=>m,adoptStyles:()=>r.adoptStyles,css:()=>r.css,defaultConverter:()=>d,getCompatibleStyle:()=>r.getCompatibleStyle,notEqual:()=>c,supportsAdoptingStyleSheets:()=>r.supportsAdoptingStyleSheets,unsafeCSS:()=>r.unsafeCSS});var r=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@lit/reactive-element/development/css-tag.js");let o,l;var t=window.trustedTypes;const s=t?t.emptyScript:"",n=window.reactiveElementPolyfillSupportDevMode;{const u=null!=(i=globalThis.litIssuedWarnings)?i:globalThis.litIssuedWarnings=new Set;(l=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,u.has(t)||(console.warn(t),u.add(t))})("dev-mode","Lit is in dev mode. Not recommended for production!"),null!=(t=window.ShadyDOM)&&t.inUse&&void 0===n&&l("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded."),o=i=>({then:(e,t)=>{l("request-update-promise","The `requestUpdate` method should no longer return a Promise but "+`does so on \`${i}\`. Use \`updateComplete\` instead.`),void 0!==e&&e(!1)}})}const a=e=>{window.emitLitDebugLogEvents&&window.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))},d={toAttribute(e,t){switch(t){case Boolean:e=e?s:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},c=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:c},h="finalized";class m extends HTMLElement{constructor(){super(),this.__instanceProperties=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this._initialize()}static addInitializer(e){null==this._initializers&&(this._initializers=[]),this._initializers.push(e)}static get observedAttributes(){this.finalize();const i=[];return this.elementProperties.forEach((e,t)=>{e=this.__attributeNameForProperty(t,e);void 0!==e&&(this.__attributeToPropertyMap.set(e,t),i.push(e))}),i}static createProperty(e,t=p){var i;t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e)||(i="symbol"==typeof e?Symbol():"__"+e,void 0!==(i=this.getPropertyDescriptor(e,i,t))&&(Object.defineProperty(this.prototype,e,i),this.hasOwnProperty("__reactivePropertyKeys")||(this.__reactivePropertyKeys=new Set(null!=(t=this.__reactivePropertyKeys)?t:[])),this.__reactivePropertyKeys.add(e)))}static getPropertyDescriptor(i,r,s){return{get(){return this[r]},set(e){var t=this[i];this[r]=e,this.requestUpdate(i,t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty(h))return!1;this[h]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.__attributeToPropertyMap=new Map,this.hasOwnProperty("properties")){var t=this.properties;for(const r of[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)])this.createProperty(r,t[r])}this.elementStyles=this.finalizeStyles(this.styles);var i=(e,t=!1)=>{this.prototype.hasOwnProperty(e)&&l(t?"renamed-api":"removed-api",`\`${e}\` is implemented on class ${this.name}. It `+`has been ${t?"renamed":"removed"} `+"in this version of LitElement.")};return i("initialize"),i("requestUpdateInternal"),i("_getUpdateComplete",!0),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e))for(const i of new Set(e.flat(1/0).reverse()))t.unshift((0,r.getCompatibleStyle)(i));else void 0!==e&&t.push((0,r.getCompatibleStyle)(e));return t}static __attributeNameForProperty(e,t){t=t.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}_initialize(){var e;this.__updatePromise=new Promise(e=>this.enableUpdating=e),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),null!=(e=this.constructor._initializers)&&e.forEach(e=>e(this))}addController(e){var t;(null!=(t=this.__controllers)?t:this.__controllers=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&null!=(t=e.hostConnected)&&t.call(e)}removeController(e){var t;null!=(t=this.__controllers)&&t.splice(this.__controllers.indexOf(e)>>>0,1)}__saveInstanceProperties(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this.__instanceProperties.set(t,this[t]),delete this[t])})}createRenderRoot(){var e=null!=(e=this.shadowRoot)?e:this.attachShadow(this.constructor.shadowRootOptions);return(0,r.adoptStyles)(e,this.constructor.elementStyles),e}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null!=(e=this.__controllers)&&e.forEach(e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null!=(e=this.__controllers)&&e.forEach(e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$attributeToProperty(e,i)}__propertyToAttribute(e,t,i=p){var r=this.constructor.__attributeNameForProperty(e,i);if(void 0!==r&&!0===i.reflect){const o=null!=(s=null==(s=i.converter)?void 0:s.toAttribute)?s:d.toAttribute;var s=o(t,i.type);0<=this.constructor.enabledWarnings.indexOf("migration")&&void 0===s&&l("undefined-attribute-value",`The attribute value for the ${e} property is `+`undefined on element ${this.localName}. The attribute will be `+"removed, but in the previous version of `ReactiveElement`, the attribute would not have changed."),this.__reflectingProperty=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this.__reflectingProperty=null}}_$attributeToProperty(e,t){var i;const r=this.constructor;e=r.__attributeToPropertyMap.get(e);if(void 0!==e&&this.__reflectingProperty!==e){var s=r.getPropertyOptions(e),o=s.converter;const l=null!=(i=null!=(i=null==(i=o)?void 0:i.fromAttribute)?i:"function"==typeof o?o:null)?i:d.fromAttribute;this.__reflectingProperty=e,this[e]=l(t,s.type),this.__reflectingProperty=null}}requestUpdate(e,t,i){let r=!0;if(void 0!==e){const s=(i=i||this.constructor.getPropertyOptions(e)).hasChanged||c;s(this[e],t)?(this._$changedProperties.has(e)||this._$changedProperties.set(e,t),!0===i.reflect&&this.__reflectingProperty!==e&&(void 0===this.__reflectingProperties&&(this.__reflectingProperties=new Map),this.__reflectingProperties.set(e,i))):r=!1}return!this.isUpdatePending&&r&&(this.__updatePromise=this.__enqueueUpdate()),o(this.localName)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(e){Promise.reject(e)}var e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(this.isUpdatePending){if(null!==a&&void 0!==a&&a({kind:"update"}),!this.hasUpdated){const r=[];if(null!=(i=this.constructor.__reactivePropertyKeys)&&i.forEach(e=>{var t;!this.hasOwnProperty(e)||null!=(t=this.__instanceProperties)&&t.has(e)||r.push(e)}),r.length)throw new Error(`The following properties on element ${this.localName} will not `+"trigger updates as expected because they are set using class "+`fields: ${r.join(", ")}. `+"Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.")}this.__instanceProperties&&(this.__instanceProperties.forEach((e,t)=>this[t]=e),this.__instanceProperties=void 0);let t=!1;var i=this._$changedProperties;try{(t=this.shouldUpdate(i))?(this.willUpdate(i),null!=(e=this.__controllers)&&e.forEach(e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)}),this.update(i)):this.__markUpdated()}catch(e){throw t=!1,this.__markUpdated(),e}t&&this._$didUpdate(i)}}willUpdate(e){}_$didUpdate(e){var t;null!=(t=this.__controllers)&&t.forEach(e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&0<=this.constructor.enabledWarnings.indexOf("change-in-update")&&l("change-in-update",`Element ${this.localName} scheduled an update `+"(generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.")}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this.__reflectingProperties&&(this.__reflectingProperties.forEach((e,t)=>this.__propertyToAttribute(t,this[t],e)),this.__reflectingProperties=void 0),this.__markUpdated()}updated(e){}firstUpdated(e){}}h,m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null!==n&&void 0!==n&&n({ReactiveElement:m});{m.enabledWarnings=["change-in-update"];const g=function(e){e.hasOwnProperty("enabledWarnings")||(e.enabledWarnings=e.enabledWarnings.slice())};m.enableWarning=function(e){g(this),this.enabledWarnings.indexOf(e)<0&&this.enabledWarnings.push(e)},m.disableWarning=function(e){g(this);e=this.enabledWarnings.indexOf(e);0<=e&&this.enabledWarnings.splice(e,1)}}(null!=(i=globalThis.reactiveElementVersions)?i:globalThis.reactiveElementVersions=[]).push("1.3.1"),1<globalThis.reactiveElementVersions.length&&l("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")},"./primo-explore/custom/01UCD_INST-UCD/node_modules/lit-element/development/lit-element.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{CSSResult:()=>r.CSSResult,INTERNAL:()=>s.INTERNAL,LitElement:()=>n,ReactiveElement:()=>r.ReactiveElement,UpdatingElement:()=>o,_$LE:()=>d,_$LH:()=>s._$LH,adoptStyles:()=>r.adoptStyles,css:()=>r.css,defaultConverter:()=>r.defaultConverter,getCompatibleStyle:()=>r.getCompatibleStyle,html:()=>s.html,noChange:()=>s.noChange,notEqual:()=>r.notEqual,nothing:()=>s.nothing,render:()=>s.render,supportsAdoptingStyleSheets:()=>r.supportsAdoptingStyleSheets,svg:()=>s.svg,unsafeCSS:()=>r.unsafeCSS});var r=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@lit/reactive-element/development/reactive-element.js"),s=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/lit-html/development/lit-html.js");const o=r.ReactiveElement;let l;{const c=null!=(t=globalThis.litIssuedWarnings)?t:globalThis.litIssuedWarnings=new Set;l=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,c.has(t)||(console.warn(t),c.add(t))}}class n extends r.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){var e,t=super.createRenderRoot();return null==(e=this.renderOptions).renderBefore&&(e.renderBefore=t.firstChild),t}update(e){var t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=(0,s.render)(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null!=(e=this.__childPart)&&e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null!=(e=this.__childPart)&&e.setConnected(!1)}render(){return s.noChange}}n.finalized=!0,n._$litElement$=!0,null!=(i=globalThis.litElementHydrateSupport)&&i.call(globalThis,{LitElement:n});const a=globalThis.litElementPolyfillSupportDevMode,d=(null!==a&&void 0!==a&&a({LitElement:n}),n.finalize=function(){if(!r.ReactiveElement.finalize.call(this))return!1;var e=(e,t,i=!1)=>{e.hasOwnProperty(t)&&(e=("function"==typeof e?e:e.constructor).name,l(i?"renamed-api":"removed-api",`\`${t}\` is implemented on class ${e}. It `+`has been ${i?"renamed":"removed"} `+"in this version of LitElement."))};return e(this,"render"),e(this,"getStyles",!0),e(this.prototype,"adoptStyles"),!0},{_$attributeToProperty:(e,t,i)=>{e._$attributeToProperty(t,i)},_$changedProperties:e=>e._$changedProperties});(null!=(t=globalThis.litElementVersions)?t:globalThis.litElementVersions=[]).push("3.2.0"),1<globalThis.litElementVersions.length&&l("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")},"./primo-explore/custom/01UCD_INST-UCD/node_modules/lit-html/development/lit-html.js":(L,e,t)=>{"use strict";t.r(e),t.d(e,{INTERNAL:()=>d,_$LH:()=>Z,html:()=>V,noChange:()=>p,nothing:()=>f,render:()=>y,svg:()=>M});const C=e=>{window.emitLitDebugLogEvents&&window.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))};let O=0;const d=!0;let S;null==globalThis.litIssuedWarnings&&(globalThis.litIssuedWarnings=new Set),(S=(e,t)=>{t+=e?` See https://lit.dev/msg/${e} for more information.`:"",globalThis.litIssuedWarnings.has(t)||(console.warn(t),globalThis.litIssuedWarnings.add(t))})("dev-mode","Lit is in dev mode. Not recommended for production!");const o=null!=(t=window.ShadyDOM)&&t.inUse&&!0===(null==(e=window.ShadyDOM)?void 0:e.noPatch)?window.ShadyDOM.wrap:e=>e,x=globalThis.trustedTypes,i=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,q=e=>e,r=(e,t,i)=>q;const s=(e,t,i)=>w(e,t,i),$="$lit$",U=`lit$${String(Math.random()).slice(9)}$`,T="?"+U,z=`<${T}>`,a=document,P=(e="")=>a.createComment(e),c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,l=Array.isArray,n=e=>{return l(e)||"function"==typeof(null==(e=e)?void 0:e[Symbol.iterator])};var t=`[ 	
\r]`;const h=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,u=/>/g,g=new RegExp(`>|${t}(?:([^\\s"'>=/]+)(${t}*=${t}*(?:[^ 	
\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,_=/"/g,D=/^(?:script|style|textarea|title)$/i;e=i=>(e,...t)=>(e.some(e=>void 0===e)&&console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences."),{_$litType$:i,strings:e,values:t});const V=e(1),M=e(2),p=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),b=new WeakMap,y=(e,t,i)=>{var r,s=O++;const o=null!=(r=null==i?void 0:i.renderBefore)?r:t;let l=o._$litPart$;if(null!==C&&void 0!==C&&C({kind:"begin render",id:s,value:e,container:t,options:i,part:l}),void 0===l){var n=null!=(r=null==i?void 0:i.renderBefore)?r:null;if(d&&!0===(null==(r=i)?void 0:r.clearContainerForLit2MigrationOnly)){let e=t.firstChild;for(;e&&e!==n;){var a=e.nextSibling;e.remove(),e=a}}o._$litPart$=l=new k(t.insertBefore(P(),n),n,void 0,null!=i?i:{})}return l._$setValue(e),null!==C&&void 0!==C&&C({kind:"end render",id:s,value:e,container:t,options:i,part:l}),l},N=(y.setSanitizer=e=>{if(w!==r)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");w=e},y.createSanitizer=s,y._testOnlyClearSanitizerFactoryDoNotCallOrElse=()=>{w=r},a.createTreeWalker(a,129,null,!1));let w=r;const R=(s,e)=>{var o,t=s.length-1;const l=[];let n=2===e?"<svg>":"",a,d=h;for(let r=0;r<t;r++){const p=s[r];let e=-1,t,i=0;for(;i<p.length&&(d.lastIndex=i,null!==(o=d.exec(p)));)if(i=d.lastIndex,d===h){if("!--"===o[1])d=m;else if(void 0!==o[1])d=u;else if(void 0!==o[2])D.test(o[2])&&(a=new RegExp("</"+o[2],"g")),d=g;else if(void 0!==o[3])throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else d===g?">"===o[0]?(d=null!==a&&void 0!==a?a:h,e=-1):void 0===o[1]?e=-2:(e=d.lastIndex-o[2].length,t=o[1],d=void 0===o[3]?g:'"'===o[3]?_:v):d===_||d===v?d=g:d===m||d===u?d=h:(d=g,a=void 0);console.assert(-1===e||d===g||d===v||d===_,"unexpected parse state B");var c=d===g&&s[r+1].startsWith("/>")?" ":"";n+=d===h?p+z:0<=e?(l.push(t),p.slice(0,e)+$+p.slice(e)+U+c):p+U+(-2===e?(l.push(void 0),r):c)}e=n+(s[t]||"<?>")+(2===e?"</svg>":"");if(Array.isArray(s)&&s.hasOwnProperty("raw"))return[void 0!==i?i.createHTML(e):e,l];{let e="invalid template strings array";throw e="Internal Error: expected template strings to be an array with a 'raw' field. Please file a bug at https://github.com/lit/lit/issues/new?template=bug_report.md and include information about your build tooling, if any.",new Error(e)}};class E{constructor({strings:t,_$litType$:e},i){this.parts=[];let r,s=0,o=0;var l=t.length-1;const n=this.parts;var[a,d]=R(t,e);if(this.el=E.createElement(a,i),N.currentNode=this.el.content,2===e){const g=this.el.content,v=g.firstChild;v.remove(),g.append(...v.childNodes)}for(;null!==(r=N.nextNode())&&n.length<l;){if(1===r.nodeType){var c=r.localName;if(/^(?:textarea|template)$/i.test(c)&&r.innerHTML.includes(U)){var p=`Expressions are not supported inside \`${c}\` `+`elements. See https://lit.dev/msg/expression-in-${c} for more `+"information.";if("template"===c)throw new Error(p);S("",p)}if(r.hasAttributes()){const _=[];for(const f of r.getAttributeNames())if(f.endsWith($)||f.startsWith(U)){const b=d[o++];if(_.push(f),void 0!==b){const y=r.getAttribute(b.toLowerCase()+$);var h=y.split(U),m=/([.?@])?(.*)/.exec(b);n.push({type:1,index:s,name:m[2],strings:h,ctor:"."===m[1]?F:"?"===m[1]?H:"@"===m[1]?G:j})}else n.push({type:6,index:s})}for(const w of _)r.removeAttribute(w)}if(D.test(r.tagName)){const t=r.textContent.split(U);var u=t.length-1;if(0<u){r.textContent=x?x.emptyScript:"";for(let e=0;e<u;e++)r.append(t[e],P()),N.nextNode(),n.push({type:2,index:++s});r.append(t[u],P())}}}else if(8===r.nodeType)if(r.data===T)n.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf(U,e+1));)n.push({type:7,index:s}),e+=U.length-1}s++}null!==C&&void 0!==C&&C({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:t})}static createElement(e,t){const i=a.createElement("template");return i.innerHTML=e,i}}function I(e,t,i=e,r){var s;if(t===p)return t;let o=void 0!==r?null==(s=i.__directives)?void 0:s[r]:i.__directive;const l=c(t)?void 0:t._$litDirective$;return(null===o||void 0===o?void 0:o.constructor)!==l&&(null!=(s=null===o||void 0===o?void 0:o._$notifyDirectiveConnectionChanged)&&s.call(o,!1),void 0===l?o=void 0:(o=new l(e))._$initialize(e,i,r),void 0!==r?(null!=(s=i.__directives)?s:i.__directives=[])[r]=o:i.__directive=o),t=void 0!==o?I(e,o._$resolve(e,t.values),o,r):t}class W{constructor(e,t){this._parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(t){var{el:{content:e},parts:i}=this._$template,r=(null!=(r=null==t?void 0:t.creationScope)?r:a).importNode(e,!0);N.currentNode=r;let s=N.nextNode(),o=0,l=0,n=i[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new k(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new K(s,this,t)),this._parts.push(e),n=i[++l]}o!==(null===n||void 0===n?void 0:n.index)&&(s=N.nextNode(),o++)}return r}_update(e){let t=0;for(const i of this._parts)void 0!==i&&(null!==C&&void 0!==C&&C({kind:"set part",part:i,value:e[t],valueIndex:t,values:e,templateInstance:this}),void 0!==i.strings?(i._$setValue(e,i,t),t+=i.strings.length-2):i._$setValue(e[t])),t++}}class k{constructor(e,t,i,r){this.type=2,this._$committedValue=f,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=i,this.options=r,this.__isConnected=null==(e=null==r?void 0:r.isConnected)||e,this._textSanitizer=void 0}get _$isConnected(){var e;return null!=(e=null==(e=this._$parent)?void 0:e._$isConnected)?e:this.__isConnected}get parentNode(){let e=o(this._$startNode).parentNode;var t=this._$parent;return e=void 0!==t&&11===e.nodeType?t.parentNode:e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(null===this.parentNode)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");e=I(this,e,t),c(e)?e===f||null==e||""===e?(this._$committedValue!==f&&(null!==C&&void 0!==C&&C({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=f):e!==this._$committedValue&&e!==p&&this._commitText(e):void 0!==e._$litType$?this._commitTemplateResult(e):void 0!==e.nodeType?this._commitNode(e):n(e)?this._commitIterable(e):this._commitText(e)}_insert(e,t=this._$endNode){return o(o(this._$startNode).parentNode).insertBefore(e,t)}_commitNode(e){if(this._$committedValue!==e){if(this._$clear(),w!==r){var t=null==(t=this._$startNode.parentNode)?void 0:t.nodeName;if("STYLE"===t||"SCRIPT"===t){let e="Forbidden";throw e="STYLE"===t?"Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":"Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(e)}}null!==C&&void 0!==C&&C({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==f&&c(this._$committedValue)){const t=o(this._$startNode).nextSibling;void 0===this._textSanitizer&&(this._textSanitizer=s(t,"data","property")),e=this._textSanitizer(e),null!==C&&void 0!==C&&C({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{const i=document.createTextNode("");this._commitNode(i),void 0===this._textSanitizer&&(this._textSanitizer=s(i,"data","property")),e=this._textSanitizer(e),null!==C&&void 0!==C&&C({kind:"commit text",node:i,value:e,options:this.options}),i.data=e}this._$committedValue=e}_commitTemplateResult(e){const{values:t,_$litType$:i}=e;e="number"==typeof i?this._$getTemplate(e):(void 0===i.el&&(i.el=E.createElement(i.h,this.options)),i);if((null==(r=this._$committedValue)?void 0:r._$template)===e)null!==C&&void 0!==C&&C({kind:"template updating",template:e,instance:this._$committedValue,parts:this._$committedValue._parts,options:this.options,values:t}),this._$committedValue._update(t);else{const s=new W(e,this);var r=s._clone(this.options);null!==C&&void 0!==C&&C({kind:"template instantiated",template:e,instance:s,parts:s._parts,options:this.options,fragment:r,values:t}),s._update(t),null!==C&&void 0!==C&&C({kind:"template instantiated and updated",template:e,instance:s,parts:s._parts,options:this.options,fragment:r,values:t}),this._commitNode(r),this._$committedValue=s}}_$getTemplate(e){let t=b.get(e.strings);return void 0===t&&b.set(e.strings,t=new E(e)),t}_commitIterable(e){l(this._$committedValue)||(this._$committedValue=[],this._$clear());const t=this._$committedValue;let i=0,r;for(const s of e)i===t.length?t.push(r=new k(this._insert(P()),this._insert(P()),this,this.options)):r=t[i],r._$setValue(s),i++;i<t.length&&(this._$clear(r&&o(r._$endNode).nextSibling,i),t.length=i)}_$clear(e=o(this._$startNode).nextSibling,t){var i;for(null!=(i=this._$notifyConnectionChanged)&&i.call(this,!1,!0,t);e&&e!==this._$endNode;){var r=o(e).nextSibling;o(e).remove(),e=r}}setConnected(e){var t;if(void 0!==this._$parent)throw new Error("part.setConnected() may only be called on a RootPart returned from render().");this.__isConnected=e,null!=(t=this._$notifyConnectionChanged)&&t.call(this,e)}}class j{constructor(e,t,i,r,s){this.type=1,this._$committedValue=f,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=r,this.options=s,2<i.length||""!==i[0]||""!==i[1]?(this._$committedValue=new Array(i.length-1).fill(new String),this.strings=i):this._$committedValue=f,this._sanitizer=void 0}get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}_$setValue(i,r=this,s,e){var o=this.strings;let l=!1;if(void 0===o)i=I(this,i,r,0),(l=!c(i)||i!==this._$committedValue&&i!==p)&&(this._$committedValue=i);else{var n=i;i=o[0];let e,t;for(e=0;e<o.length-1;e++)(t=I(this,n[s+e],r,e))===p&&(t=this._$committedValue[e]),l=l||(!c(t)||t!==this._$committedValue[e]),t===f?i=f:i!==f&&(i+=(null!==t&&void 0!==t?t:"")+o[e+1]),this._$committedValue[e]=t}l&&!e&&this._commitValue(i)}_commitValue(e){e===f?o(this.element).removeAttribute(this.name):(void 0===this._sanitizer&&(this._sanitizer=w(this.element,this.name,"attribute")),e=this._sanitizer(null!=e?e:""),null!==C&&void 0!==C&&C({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),o(this.element).setAttribute(this.name,null!=e?e:""))}}class F extends j{constructor(){super(...arguments),this.type=3}_commitValue(e){void 0===this._sanitizer&&(this._sanitizer=w(this.element,this.name,"property")),e=this._sanitizer(e),null!==C&&void 0!==C&&C({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===f?void 0:e}}const B=x?x.emptyScript:"";class H extends j{constructor(){super(...arguments),this.type=4}_commitValue(e){null!==C&&void 0!==C&&C({kind:"commit boolean attribute",element:this.element,name:this.name,value:!(!e||e===f),options:this.options}),e&&e!==f?o(this.element).setAttribute(this.name,B):o(this.element).removeAttribute(this.name)}}class G extends j{constructor(e,t,i,r,s){if(super(e,t,i,r,s),this.type=5,void 0!==this.strings)throw new Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with `+"invalid content. Event listeners in templates must have exactly one expression and no surrounding text.")}_$setValue(e,t=this){var i,r;(e=null!=(t=I(this,e,t,0))?t:f)!==p&&(t=this._$committedValue,i=e===f&&t!==f||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,r=e!==f&&(t===f||i),null!==C&&void 0!==C&&C({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:i,addListener:r,oldListener:t}),i&&this.element.removeEventListener(this.name,this,t),r&&this.element.addEventListener(this.name,this,e),this._$committedValue=e)}handleEvent(e){var t;"function"==typeof this._$committedValue?this._$committedValue.call(null!=(t=null==(t=this.options)?void 0:t.host)?t:this.element,e):this._$committedValue.handleEvent(e)}}class K{constructor(e,t,i){this.element=e,this.type=6,this._$disconnectableChildren=void 0,this._$parent=t,this.options=i}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){null!==C&&void 0!==C&&C({kind:"commit to element binding",element:this.element,value:e,options:this.options}),I(this,e)}}const Z={_boundAttributeSuffix:$,_marker:U,_markerMatch:T,_HTML_RESULT:1,_getTemplateHtml:R,_TemplateInstance:W,_isIterable:n,_resolveDirective:I,_ChildPart:k,_AttributePart:j,_BooleanAttributePart:H,_EventPart:G,_PropertyPart:F,_ElementPart:K},A=window.litHtmlPolyfillSupportDevMode;null!==A&&void 0!==A&&A(E,k),(null!=(t=globalThis.litHtmlVersions)?t:globalThis.litHtmlVersions=[]).push("2.2.1"),1<globalThis.litHtmlVersions.length&&S("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")},"./primo-explore/custom/01UCD_INST-UCD/node_modules/lit/index.js":(e,t,i)=>{"use strict";i.r(t),i.d(t,{CSSResult:()=>r.CSSResult,INTERNAL:()=>r.INTERNAL,LitElement:()=>r.LitElement,ReactiveElement:()=>r.ReactiveElement,UpdatingElement:()=>r.UpdatingElement,_$LE:()=>r._$LE,_$LH:()=>r._$LH,adoptStyles:()=>r.adoptStyles,css:()=>r.css,defaultConverter:()=>r.defaultConverter,getCompatibleStyle:()=>r.getCompatibleStyle,html:()=>r.html,noChange:()=>r.noChange,notEqual:()=>r.notEqual,nothing:()=>r.nothing,render:()=>r.render,supportsAdoptingStyleSheets:()=>r.supportsAdoptingStyleSheets,svg:()=>r.svg,unsafeCSS:()=>r.unsafeCSS});i("./primo-explore/custom/01UCD_INST-UCD/node_modules/@lit/reactive-element/development/reactive-element.js"),i("./primo-explore/custom/01UCD_INST-UCD/node_modules/lit-html/development/lit-html.js");var r=i("./primo-explore/custom/01UCD_INST-UCD/node_modules/lit-element/development/lit-element.js")}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;t=r[e]={exports:{}};return i[e](t,t.exports,s),t.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";s.r(o);s("./primo-explore/custom/01UCD_INST-UCD/node_modules/primo-explore-external-search/index.js");var e=s("./primo-explore/custom/01UCD_INST-UCD/js/ga.js"),t=s("./primo-explore/custom/01UCD_INST-UCD/js/external-search.js"),i=s("./primo-explore/custom/01UCD_INST-UCD/js/search-bar-after.js"),r=s("./primo-explore/custom/01UCD_INST-UCD/js/search-result-availability-line-after.js"),e=(s("./primo-explore/custom/01UCD_INST-UCD/node_modules/@ucd-lib/theme-elements/brand/ucd-theme-list-accordion/ucd-theme-list-accordion.js"),s("./primo-explore/custom/01UCD_INST-UCD/node_modules/lit/index.js"),(0,e.loadGoogleAnalytics)(),window.ucdlibVersion="2.2.2",console.log("Using build version: 2.2.2"),angular.module("viewCustom",["angularLoad","externalSearch","googleAnalytics"]));(0,t.default)(e),(0,i.default)(e),(0,r.default)(e)})()})();