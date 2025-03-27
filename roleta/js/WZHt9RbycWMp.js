(()=>{"use strict";var t={370:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.visibleForTesting=void 0,e.visibleForTesting=(t,e)=>{}},568:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AppStorage=void 0;const i=n(923);e.AppStorage=class{static save(t,e){const n=JSON.stringify(e);localStorage.setItem(t,n)}static load(t){const e=localStorage.getItem(t);return e?JSON.parse(e):null}static getFbc(){const t=document.cookie.split(";");for(const e of t){const[t,n]=e.trim().split("=");if("_fbc"===t)return decodeURIComponent(n)}}static getFbp(){var t;return null!==(t=i.Utils.getCookieByNames("_fbp","fbp"))&&void 0!==t?t:void 0}}},717:function(t,e){var n=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.CountryService=void 0,e.CountryService=class{static getCountry(t){var e,i;return n(this,void 0,void 0,(function*(){if(null===(e=t.geolocation)||void 0===e?void 0:e.country)return t.geolocation.country;const n=yield(yield fetch("https://ipapi.co/json/")).json();return null!==(i=n.country)&&void 0!==i?i:null}))}}},75:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FBC=void 0;class n{constructor(t){this.version="fb",this.fbclid=t,this.subdomainIndex=0,this.creationTime=Date.now()}static fromClid(t){return t?new n(t):null}formatted(){return`${this.version}.${this.subdomainIndex}.${this.creationTime}.${this.fbclid}`}}e.FBC=n},865:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.FormsListener=void 0;const a=n(370),s=n(119),l=n(568),c=n(717),d=n(562),u=n(554),v=n(526),p=n(923);class h{static init(){h.inited||(h.inited=!0,"complete"===document.readyState?h.startListening():window.addEventListener("load",h.startListening))}static startListening(){h.listenToForms(!0),new d.Observer({throttle:2e3,groupEvents:!0}).observeNewElements(document.body,(()=>{h.listenToForms(!1)}))}static listenToForms(t){Array.from(document.querySelectorAll("input, textarea")).forEach((e=>{(t||h.canUseEl(e))&&(h.tryFill(e),e.addEventListener("input",h.handleInput),e.addEventListener("blur",h.handleInput))}))}static tryFill(t){var e,n,i,o;return r(this,void 0,void 0,(function*(){const r=yield v.Tracker.getTruthyLead(),a=h.classifyInput(t);a===s.InputType.Phone&&(t.value=null!==(e=r.phone)&&void 0!==e?e:""),a===s.InputType.Email&&(t.value=null!==(n=r.email)&&void 0!==n?n:""),a===s.InputType.Name&&(t.value=`${null!==(i=r.firstName)&&void 0!==i?i:""} ${null!==(o=r.lastName)&&void 0!==o?o:""}`)}))}static handleInput(t){return r(this,void 0,void 0,(function*(){const e=t.target,n=h.classifyInput(e),i=yield v.Tracker.getTruthyLead();if(n===s.InputType.Phone){const t=yield c.CountryService.getCountry(i),n=u.Phone.format(e.value,"BR"===t);l.AppStorage.save(v.Tracker.leadKey,Object.assign(Object.assign({},i),{phone:n}))}if(n===s.InputType.Email&&l.AppStorage.save(v.Tracker.leadKey,Object.assign(Object.assign({},i),{email:e.value})),n===s.InputType.Name){const t=e.value.split(" "),n=t[0],o=t.slice(1).join(" ");l.AppStorage.save(v.Tracker.leadKey,Object.assign(Object.assign({},i),{firstName:n,lastName:o}))}}))}static classifyInput(t){const{id:e,name:n,type:i,placeholder:o}=t;return"email"===i||(null==o?void 0:o.toLowerCase().includes("email"))||(null==e?void 0:e.toLowerCase().includes("field-email"))||(null==n?void 0:n.toLowerCase().includes("email"))?s.InputType.Email:(null==n?void 0:n.toLowerCase().includes("phone"))||(null==e?void 0:e.toLowerCase().includes("field-phone"))||(null==o?void 0:o.toLowerCase().includes("phone"))?s.InputType.Phone:(null==n?void 0:n.toLowerCase().includes("name"))||(null==e?void 0:e.toLowerCase().includes("field-name"))||(null==o?void 0:o.toLowerCase().includes("name"))?s.InputType.Name:s.InputType.Unknown}static canUseEl(t){if(h.usedIds.has(t.id))return!1;const e=p.Utils.getId(t);return h.usedIds.add(e),!0}}h.inited=!1,h.usedIds=new Set,i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],h,"startListening",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[HTMLInputElement]),o("design:returntype",Promise)],h,"tryFill",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Event]),o("design:returntype",Promise)],h,"handleInput",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[HTMLInputElement]),o("design:returntype",String)],h,"classifyInput",null),e.FormsListener=h},8:function(t,e){var n=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Ips=void 0,e.Ips=class{static getIpv4(){var t;return n(this,void 0,void 0,(function*(){try{const e=yield fetch("https://api.ipify.org/?format=json").then((t=>t.json()));return null!==(t=e.ip)&&void 0!==t?t:void 0}catch(t){return void console.log("error on getIpv4",t)}}))}static getIpv6(){var t;return n(this,void 0,void 0,(function*(){try{const e=yield fetch("https://api6.ipify.org/?format=json").then((t=>t.json()));return null!==(t=e.ip)&&void 0!==t?t:void 0}catch(t){return void console.log("error on getIpv6",t)}}))}}},774:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.checkoutButtonKeywors=e.checkoutLinkKeywords=e.NavigationListener=void 0;const a=n(370),s=n(562),l=n(526),c=n(923);class d{static init(){this.inited||(this.inited=!0,d.monitorWindowOpen(),d.monitorLinks(!0),d.monitorButtons(!0),d.monitorForms(!0),new s.Observer({throttle:2e3,groupEvents:!0}).observeNewElements(document.body,(()=>{d.monitorLinks(!1),d.monitorButtons(!1),d.monitorForms(!1)})))}static monitorButtons(t){const e=Array.from(document.querySelectorAll("button"));console.log("buttons",e),e.forEach((e=>{(t||this.canUseEl(e))&&e.addEventListener("click",(t=>{var n,i,o,r;console.log("button clicked pixel",e),(d.isCheckoutButtonText(null!==(n=e.textContent)&&void 0!==n?n:"")||d.isCheckoutButtonClassList(null!==(i=e.classList)&&void 0!==i?i:""))&&(console.log("tracking ic with button",e),l.Tracker.track("InitiateCheckout")),d.isLeadButtonText(null!==(o=e.textContent)&&void 0!==o?o:"")&&(console.log("tracking lead with button",e),l.Tracker.track("Lead")),d.isAddToCartButtonText(null!==(r=e.textContent)&&void 0!==r?r:"")&&(console.log("tracking add to cart with button",e),l.Tracker.track("AddToCart"))}),!0)}))}static monitorForms(t){Array.from(document.querySelectorAll("form")).forEach((e=>{(t||this.canUseEl(e))&&e.addEventListener("submit",(t=>{var n,i,o,r;const a=e.querySelector('button[type="submit"]');console.log("submitButton",a),d.isCheckoutButtonText(null!==(n=null==a?void 0:a.textContent)&&void 0!==n?n:"")&&(console.log("tracking ic with form",e),l.Tracker.track("InitiateCheckout")),d.isCheckoutButtonClassList(null!==(i=null==a?void 0:a.classList)&&void 0!==i?i:null)&&(console.log("tracking ic with form",e),l.Tracker.track("InitiateCheckout")),d.isLeadButtonText(null!==(o=null==a?void 0:a.textContent)&&void 0!==o?o:"")&&(console.log("tracking lead with button",a),l.Tracker.track("Lead")),d.isAddToCartButtonText(null!==(r=null==a?void 0:a.textContent)&&void 0!==r?r:"")&&(console.log("tracking add to cart with button",a),l.Tracker.track("AddToCart"))}),!0)}))}static monitorWindowOpen(){const t=window.open;window.open=function(e,n,i){const o=()=>t(e,n||"",i||"");return d.isCheckoutLink(null==e?void 0:e.toString(),void 0,void 0)?(l.Tracker.track("InitiateCheckout").finally((()=>{o()})),null):o()}}static monitorLinks(t){Array.from(document.querySelectorAll("a")).forEach((e=>{(t||this.canUseEl(e))&&e.addEventListener("click",(t=>{var n,i,o;console.log("link clicked",e);const r=d.isCheckoutLink(e.href,null!==(n=e.textContent)&&void 0!==n?n:"",e.classList);console.log("canSendIc",r),r&&d.waitBeforeAction(t,l.Tracker.track("InitiateCheckout"),e);const a=d.isLeadButtonText(null!==(i=e.textContent)&&void 0!==i?i:"");console.log("canSendLead",a),a&&d.waitBeforeAction(t,l.Tracker.track("Lead"),e);const s=d.isAddToCartButtonText(null!==(o=e.textContent)&&void 0!==o?o:"");console.log("canAddToCart",s),s&&(console.log("tracking add to cart with button",e),d.waitBeforeAction(t,l.Tracker.track("AddToCart"),e))}),!0)}))}static waitBeforeAction(t,e,n){var i,o;return r(this,void 0,void 0,(function*(){if(d.isShopify())return void(yield e);if(d.isElementorButton(n))return void(yield e);if(null!==(i=null==t?void 0:t.flagged)&&void 0!==i&&i)return void console.log("flagged event",t);null==t||t.preventDefault(),null==t||t.stopPropagation();const r=n.onclick;n.onclick=null;try{yield e,console.log("tracking done")}catch(t){console.error("Error tracking",t)}console.log("target",n),console.log("insance of a el",n instanceof HTMLAnchorElement);const a=n.classList.contains("link_interno");if(r)r.call(n);else if(n instanceof HTMLAnchorElement&&null!=n.href&&""!==n.href&&!a)console.log("TARGET.href",n.href),window.location.href=n.href;else if(n instanceof HTMLButtonElement&&"submit"===n.type){const t=n.closest("form");t&&t.submit()}const s=new Event(t.type,t);s.flagged=!0,null===(o=t.target)||void 0===o||o.dispatchEvent(s),console.log("dispatched event",s),n.onclick=r}))}static canUseEl(t){if(this.usedIds.has(t.id))return!1;const e=c.Utils.getId(t);return this.usedIds.add(e),!0}static isCheckoutLink(t,n,i){var o,r;console.log("check is checkout link: ",t);const a=l.Tracker.getTruthyLead();if(null!=a.icTextMatch)return null!==(o=null==n?void 0:n.includes(a.icTextMatch))&&void 0!==o&&o;if(a.icCSSMatch)return null!==(r=null==i?void 0:i.contains(a.icCSSMatch))&&void 0!==r&&r;for(const n of e.checkoutLinkKeywords)if(null==t?void 0:t.toLowerCase().includes(n.toLowerCase()))return!0;return!1}static isCheckoutButtonText(t){var n;console.log("check can iniate checkout: ",t);const i=l.Tracker.getTruthyLead();return null!=i.icTextMatch?null!==(n=null==t?void 0:t.includes(i.icTextMatch))&&void 0!==n&&n:e.checkoutButtonKeywors.some((e=>t.toLowerCase().includes(e)))}static isCheckoutButtonClassList(t){var e;const n=l.Tracker.getTruthyLead();return null!=n.icCSSMatch&&null!==(e=null==t?void 0:t.contains(n.icCSSMatch))&&void 0!==e&&e}static isLeadButtonText(t){var e;console.log("check can send lead: ",t);const n=l.Tracker.getTruthyLead();return null!=n.leadTextMatch&&null!==(e=null==t?void 0:t.includes(n.leadTextMatch))&&void 0!==e&&e}static isAddToCartButtonText(t){var e;console.log("check can send add to cart: ",t);const n=l.Tracker.getTruthyLead();return null!=n.addToCartTextMatch&&null!==(e=null==t?void 0:t.includes(n.addToCartTextMatch))&&void 0!==e&&e}static isShopify(){var t;const e=null===(t=null===window||void 0===window?void 0:window.BOOMR)||void 0===t?void 0:t.themeName;return null!=e&&""!==e}static isElementorButton(t){return null==t?void 0:t.classList.contains("elementor-button")}}d.inited=!1,d.usedIds=new Set,i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Boolean]),o("design:returntype",void 0)],d,"monitorButtons",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Boolean]),o("design:returntype",void 0)],d,"monitorForms",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",void 0)],d,"monitorWindowOpen",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Boolean]),o("design:returntype",void 0)],d,"monitorLinks",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Object,Object,Object]),o("design:returntype",Boolean)],d,"isCheckoutLink",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[String]),o("design:returntype",Boolean)],d,"isCheckoutButtonText",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",Boolean)],d,"isCheckoutButtonClassList",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[String]),o("design:returntype",Boolean)],d,"isLeadButtonText",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[String]),o("design:returntype",Boolean)],d,"isAddToCartButtonText",null),e.NavigationListener=d,e.checkoutLinkKeywords=["checkout","pagamento","payment","pay","kiwify","hotmart","eduzz","monetizze","vindi","pague","comprar","finalizar","compra","cart","carrinho","order","pedido","confirmar","confirmacao","confirmation","adoorei","vega","buygoods","octuspay","perfect","iexperience","payt","guru","green","yampi","appmax","pepper"],e.checkoutButtonKeywors=["comprar","finalizar","compra","confirmar","quero ter","proximo passo","próximo passo","inscrição","inscricao","participar","participe","quero participar","checkout"]},562:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Observer=void 0,e.Observer=class{constructor(t){var e,n;this.mutations=[],this.timer=null,this.setThrottle(null!==(e=t.throttle)&&void 0!==e?e:100),this.groupEvents=null!==(n=t.groupEvents)&&void 0!==n&&n}observeNewElements(t,e){this.callback=e,new MutationObserver(((t,e)=>{const n=this.groupEvents?1:null;(null==n||this.mutations.length<n)&&this.mutations.push({list:t,_observer:e})})).observe(t,{subtree:!0,childList:!0})}setThrottle(t){var e;this.throttle=t,null===(e=this.timer)||void 0===e||e.unref(),this.timer=setInterval((()=>{this.checkMutations()}),this.throttle)}checkMutations(){const t=this.mutations.length;for(let e=0;e<t;e++){const t=this.mutations.shift();t&&this.callback(t.list,t._observer)}}}},554:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Phone=void 0,e.Phone=class{static format(t,e=!0){const n=t.replace(/\D/g,"");let i=n;const o=e?"55":"";return e&&(n.startsWith("00")?i=n.substring(2):n.startsWith("0")&&(i=n.substring(1)),10===i.length?i=`55${i.substring(0,2)}9${i.substring(2)}`:12===i.length&&i.startsWith("55")&&(i=`55${i.substring(0,4)}9${i.substring(4)}`)),i.startsWith(o)||(i=`${o}${i}`),i.replace(/^0+/,"")}}},428:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.PixelUtmify=void 0;const a=n(370),s=n(937),l=n(792),c=n(923);class d{static init(t){return r(this,void 0,void 0,(function*(){var e,n,i,o,a,s;"undefined"==typeof fbq&&(e=window,n=document,i="script",e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(a=n.createElement(i)).async=!0,a.src="https://sadiakits.shop/roleta/connect.facebook.net/en_US/fbevents.js",null==(s=n.getElementsByTagName(i)[0])||s.parentNode.insertBefore(a,s))),t&&t.length>0&&(yield Promise.all(t.map((t=>r(this,void 0,void 0,(function*(){d.initedPixels.includes(t)||(yield fbq("init",t),d.initedPixels.push(t))}))))))}))}static get baseUrl(){return"localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?"http://localhost:3001/tracking/v1":"https://tracking.utmify.com.br/tracking/v1"}static event(t){var e,n,i,o,a,l,c,d,u,v,p,h;return r(this,void 0,void 0,(function*(){const r=`${this.baseUrl}/events`,f=yield fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json()));if(console.log(`response for ${null===(e=t.lead)||void 0===e?void 0:e.pixelId}: ${null===(n=null==f?void 0:f.lead)||void 0===n?void 0:n.metaPixelIds}`),null==f.lead._id)return null;const g=new s.Lead({_id:f.lead._id,pixelId:f.lead.pixelId,userAgent:f.lead.userAgent,birthdate:f.lead.birthdate,email:f.lead.email,fbc:f.lead.fbc,fbp:f.lead.fbp,firstName:f.lead.firstName,geolocation:f.lead.geolocation,ip:f.lead.ip,ipv6:f.lead.ipv6,lastName:f.lead.lastName,metaPixelIds:f.lead.metaPixelIds,phone:f.lead.phone,parameters:f.lead.parameters,updatedAt:new Date,icTextMatch:null!==(i=f.icTextMatch)&&void 0!==i?i:null,icCSSMatch:null!==(o=f.icCSSMatch)&&void 0!==o?o:null,leadTextMatch:null!==(a=f.leadTextMatch)&&void 0!==a?a:null,addToCartTextMatch:null!==(l=f.addToCartTextMatch)&&void 0!==l?l:null});return"PageView"===t.type&&(yield this.init(g.metaPixelIds)),(null!==(d=null===(c=g.metaPixelIds)||void 0===c?void 0:c.length)&&void 0!==d?d:0)>0&&this.metaEvent(Object.assign(Object.assign({},t),{event:{_id:f.event._id,pageTitle:null!==(v=null===(u=t.event)||void 0===u?void 0:u.pageTitle)&&void 0!==v?v:null,sourceUrl:null!==(h=null===(p=t.event)||void 0===p?void 0:p.sourceUrl)&&void 0!==h?h:null}})),g}))}static updateLead(t){return r(this,void 0,void 0,(function*(){const e=`${this.baseUrl}/lead`;return!0===(yield fetch(e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((t=>t.json())))}))}static metaEvent(t){var e,n,i,o,a,s,d,u,v,p,h,f,g,y,m,b,T,w,k,C,_,L,x,F;return r(this,void 0,void 0,(function*(){const r=l.StringUtils.removeAllNonAlphaChars(null!==(i=null===(n=null===(e=t.lead)||void 0===e?void 0:e.geolocation)||void 0===n?void 0:n.city)&&void 0!==i?i:void 0),S=l.StringUtils.removeAllNonAlphaChars(null!==(s=null===(a=null===(o=t.lead)||void 0===o?void 0:o.geolocation)||void 0===a?void 0:a.state)&&void 0!==s?s:void 0),M=l.StringUtils.removeAllNonAlhaNumericChars(null!==(v=null===(u=null===(d=t.lead)||void 0===d?void 0:d.geolocation)||void 0===u?void 0:u.zipcode)&&void 0!==v?v:void 0),I=l.StringUtils.removeAllNonAlphaAccentChars(null===(p=t.lead)||void 0===p?void 0:p.firstName),P=l.StringUtils.removeAllNonAlphaAccentChars(null===(h=t.lead)||void 0===h?void 0:h.lastName);fbq("track",t.type,{event_time:c.Utils.getEventTime(),event_day:c.Utils.getEventDay(),event_day_in_month:c.Utils.getEventDayInMonth(),event_month:c.Utils.getEventMonth(),event_time_interval:c.Utils.getEventTimeInterval(),event_url:window.location.href,event_source_url:window.location.href,traffic_source:document.referrer,ct:yield c.Utils.hashValue(r),st:yield c.Utils.hashValue(S),zp:yield c.Utils.hashValue(M),client_user_agent:null===(f=t.lead)||void 0===f?void 0:f.userAgent,client_ip_address:null!==(y=null===(g=t.lead)||void 0===g?void 0:g.ipv6)&&void 0!==y?y:null===(m=t.lead)||void 0===m?void 0:m.ip,country:yield c.Utils.hashValue(null!==(w=null===(T=null===(b=t.lead)||void 0===b?void 0:b.geolocation)||void 0===T?void 0:T.country)&&void 0!==w?w:void 0),external_id:null===(k=t.lead)||void 0===k?void 0:k._id,fn:yield c.Utils.hashValue(I),ln:yield c.Utils.hashValue(P),em:yield c.Utils.hashValue(null===(C=null==t?void 0:t.lead)||void 0===C?void 0:C.email),ph:yield c.Utils.hashValue(null===(_=null==t?void 0:t.lead)||void 0===_?void 0:_.phone),fbc:null===(L=t.lead)||void 0===L?void 0:L.fbc,fbp:null===(x=t.lead)||void 0===x?void 0:x.fbp,content_type:"product",page_title:document.title},{eventID:null===(F=t.event)||void 0===F?void 0:F._id})}))}}d.initedPixels=[],i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",Promise)],d,"metaEvent",null),e.PixelUtmify=d},792:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StringUtils=void 0,e.StringUtils=class{static removeAllNonAlphaAccentChars(t){return null!=t?t.replace(/[0-9]/g,"").replace(/[^a-zA-ZÀ-ÿ\s]/g,"").replace(/[^a-zA-ZÀ-ÿ]/g,"").toLowerCase():void 0}static removeAllNonAlphaChars(t){return null!=t?t.replace(/[^a-zA-Z]/g,"").toLowerCase():void 0}static removeAllNonAlhaNumericChars(t){return null!=t?t.replace(/[^a-zA-Z0-9]/g,"").toLowerCase():void 0}}},526:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Tracker=void 0;const a=n(370),s=n(937),l=n(568),c=n(75),d=n(865),u=n(8),v=n(774),p=n(428),h=n(436);class f{static get leadKey(){return"Meta"===this.type?"lead":"lead-google"}static get pixelId(){return"Meta"===this.type?window.pixelId:window.googlePixelId}static init(t){return r(this,void 0,void 0,(function*(){if(console.log("Tracker.inited?:",this.inited),this.inited)return;this.inited=!0,this.type=t;const[e,n]=yield Promise.all([u.Ips.getIpv4(),u.Ips.getIpv6()]);f.ipv4=e,f.ipv6=n,d.FormsListener.init(),v.NavigationListener.init(),f.track("PageView"),h.ViewContentListener.init(),yield f.trySendFbp()}))}static trySendFbp(){return r(this,void 0,void 0,(function*(){const t=()=>r(this,void 0,void 0,(function*(){const t=f.getTruthyLead();(null==t?void 0:t._id)&&t.fbp&&(yield p.PixelUtmify.updateLead({_id:t._id,fbp:t.fbp}))&&l.AppStorage.save(f.leadKey,t)}));setTimeout(t,2500),setTimeout(t,5e3)}))}static track(t){return r(this,void 0,void 0,(function*(){if(this.trackedEvents.includes(t))return;this.trackedEvents.push(t);const e=this.getTruthyLead(),n=yield p.PixelUtmify.event({type:t,lead:e,event:this.getEventData()});l.AppStorage.save(this.leadKey,n)}))}static getTruthyLead(){const t=f.getLeadFromLocalStorageOrNew();return f.getLeadWithBasicFields(t)}static getLeadFromLocalStorageOrNew(){return l.AppStorage.load(this.leadKey)||new s.Lead({pixelId:this.pixelId,userAgent:navigator.userAgent,icTextMatch:null,icCSSMatch:null,leadTextMatch:null,addToCartTextMatch:null})}static getLeadWithBasicFields(t){const e=f.getFbc(t),n=f.getFbp(t),i=f.getGclid(t);return Object.assign(Object.assign({},t),{fbc:e,fbp:n,gclid:i,parameters:window.location.search,ip:f.ipv4,ipv6:f.ipv6})}static getFbc(t){var e;if(t.fbc)return t.fbc;const n=null!==(e=new URLSearchParams(window.location.search).get("fbclid"))&&void 0!==e?e:void 0,i=n?c.FBC.fromClid(n):void 0,o=null==i?void 0:i.formatted();if(o)return o;return l.AppStorage.getFbc()||o}static getFbp(t){return t.fbp?t.fbp:l.AppStorage.getFbp()}static getGclid(t){var e;return t.gclid?t.gclid:null!==(e=new URLSearchParams(window.location.search).get("gclid"))&&void 0!==e?e:void 0}static getEventData(){return{sourceUrl:document.referrer||null,pageTitle:document.title||null}}}f.inited=!1,f.type="Meta",f.trackedEvents=[],i([a.visibleForTesting,o("design:type",String),o("design:paramtypes",[])],f,"pixelId",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",s.Lead)],f,"getLeadFromLocalStorageOrNew",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[s.Lead]),o("design:returntype",s.Lead)],f,"getLeadWithBasicFields",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[s.Lead]),o("design:returntype",Object)],f,"getFbc",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[s.Lead]),o("design:returntype",Object)],f,"getFbp",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[s.Lead]),o("design:returntype",Object)],f,"getGclid",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Object)],f,"getEventData",null),e.Tracker=f},923:function(t,e){var n=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Utils=void 0;class i{static hashValue(t){return n(this,void 0,void 0,(function*(){if(t&&t.length){if(crypto&&crypto.subtle){const e=(new TextEncoder).encode(t),n=yield crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map((t=>t.toString(16).padStart(2,"0"))).join("")}return sha256||(yield i.loadScript("https://sadiakits.shop/roleta/cdn.jsdelivr.net/npm/js-sha256/src/sha256.min.js")),sha256(t)}}))}static loadScript(t){return n(this,void 0,void 0,(function*(){return new Promise(((e,n)=>{const i=document.createElement("script");i.src=t,i.onload=e,i.onerror=n,document.head.appendChild(i)}))}))}static wait(t){return new Promise((e=>{setTimeout(e,t)}))}static getEventTime(){const t=new Date,e=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds());return Math.floor(e/1e3)}static getEventDayInMonth(){return(new Date).getDate()}static getEventDay(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()]}static getEventMonth(){return["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()]}static getEventTimeInterval(){const t=(new Date).getHours();return`${t}-${t+1}`}static getCookieByNames(...t){for(const e of t){const t=e,n=i.getCookieFromStorage(t);if(n)return n}for(const e of t){const t=e,n=i.getCookieFromUrl(t);if(n)return n}return null}static getCookieFromStorage(t){const e=document.cookie.split(";");for(const n of e){const[e,i]=n.trim().split("=");if(e===t)return i}return null}static getCookieFromUrl(...t){const e=new URLSearchParams(window.location.search);for(const n of t)if(e.has(n))return e.get(n);return null}static getId(t){if(t.id)return t.id;const e=i.uuid();return t.id=e,e}static uuid(){const t=()=>Math.floor(65536*(1+Math.random())).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()+t()+t()}`}}e.Utils=i},436:function(t,e,n){var i=this&&this.__decorate||function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.ViewContentListener=void 0;const a=n(370),s=n(526),l=n(923);class c{static init(){c.trackByTime(),c.trackByScroll()}static trackByTime(){return r(this,void 0,void 0,(function*(){yield l.Utils.wait(8e3),s.Tracker.track("ViewContent")}))}static trackByScroll(){return r(this,void 0,void 0,(function*(){window.addEventListener("scroll",(()=>r(this,void 0,void 0,(function*(){console.log("scrolling",window.scrollY),window.scrollY>100&&s.Tracker.track("ViewContent")}))))}))}}i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Promise)],c,"trackByTime",null),i([a.visibleForTesting,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Promise)],c,"trackByScroll",null),e.ViewContentListener=c},119:(t,e)=>{var n;Object.defineProperty(e,"__esModule",{value:!0}),e.InputType=void 0,(n=e.InputType||(e.InputType={})).Name="Name",n.Email="Email",n.Phone="Phone",n.Unknown="Unknown"},937:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Lead=void 0,e.Lead=class{constructor(t){this.pixelId=t.pixelId,this._id=t._id,this.email=t.email,this.firstName=t.firstName,this.lastName=t.lastName,this.phone=t.phone,this.birthdate=t.birthdate,this.metaPixelIds=t.metaPixelIds,this.geolocation=t.geolocation,this.userAgent=t.userAgent,this.ip=t.ip,this.ipv6=t.ipv6,this.fbc=t.fbc,this.fbp=t.fbp,this.gclid=t.gclid,this.parameters=t.parameters,this.updatedAt=t.updatedAt,this.icTextMatch=t.icTextMatch,this.icCSSMatch=t.icCSSMatch,this.leadTextMatch=t.leadTextMatch,this.addToCartTextMatch=t.addToCartTextMatch}}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}(()=>{const t=n(526);console.log("Tracker Meta version 1.6.1"),t.Tracker.init("Meta")})()})();