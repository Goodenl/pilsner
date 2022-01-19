import{r as x,w as P,o as c,c as p,a as e,b as $,d as R,n as d,e as m,f,g as v,F as u,h as b,i as w,t as y,j as L,k as C,l as T,v as E,m as M,p as O}from"./vendor.4c6ac479.js";const S=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}};S();var h=(t,o)=>{const a=t.__vccOpts||t;for(const[l,s]of o)a[l]=s;return a};const N={name:"Popup",currentPopupController:null,props:{draggable:Boolean,blockedScreen:Boolean},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)},data(){return{show:!1}},methods:{swipeHandler(t,o){this.draggable&&(!o.target.closest(".popup__content")||o.cancelable)&&this.close()},handleKeydown(t){this.show&&t.key==="Escape"&&this.close()},open(){let t,o;const a=new Promise((l,s)=>{t=l,o=s});return this.$options.currentPopupController={resolve:t,reject:o},this.show=!0,a},confirm(t=!0){this.$options.currentPopupController.resolve(t),this.show=!1},close(t=!1){this.blockedScreen||(this.$options.currentPopupController.resolve(t),this.show=!1)}},watch:{show(t){t?(document.body.style.overflowY!="hidden"&&(document.body.style.overflowY="hidden"),this.$refs.popup&&(this.$refs.popup.style.visibility="visible")):(document.body.style.overflowY="auto",setTimeout(()=>{this.$refs.popup&&(this.$refs.popup.style.visibility="hidden")},350))}}},B={class:"popup__wrap"},A={class:"popup__content"},j={class:"popup__footer"};function z(t,o,a,l,s,i){const n=x("touch");return P((c(),p("div",{onClick:o[1]||(o[1]=R(r=>i.close(!1),["self"])),ref:"popup",class:d({popup:!0,"popup--show":s.show,"popup--draggable":a.draggable})},[e("div",B,[e("div",A,[$(t.$slots,"main")]),e("footer",j,[$(t.$slots,"footer",{confirm:i.confirm,close:i.close},()=>[e("button",{onClick:o[0]||(o[0]=(...r)=>i.confirm&&i.confirm(...r)),class:"btn"},"\u0417\u0430\u043A\u0440\u044B\u0442\u044C")])])])],2)),[[n,i.swipeHandler,"swipe",{bottom:!0}]])}var U=h(N,[["render",z]]),D="/pilsner/pwa/icons/offline.svg";const W={name:"App",components:{Popup:U},mounted(){navigator.onLine?(window.addEventListener("offline",this.handleConnection),window.addEventListener("online",this.handleConnection)):setTimeout(this.openOfflinePopup,500)},beforeUnmount(){window.removeEventListener("offline",this.handleConnection),window.removeEventListener("online",this.handleConnection)},methods:{async openOfflinePopup(){await this.$refs.offlinePopup.open()},handleConnection(){navigator.onLine?this.offlinePopup=!1:this.openOfflinePopup()}}},K=e("img",{src:D,alt:"",class:"offline__icon"},null,-1),V=e("h3",{class:"offline__warning"},"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!",-1),q=e("h2",null,"\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442",-1),F=e("p",{class:"offline__text"},"\u0414\u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0432\u044F\u0437\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0430 \u0440\u0430\u043D\u0435\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0437\u0436\u0435.",-1),H=["onClick"];function Y(t,o,a,l,s,i){const n=m("router-view"),r=m("popup");return c(),p(u,null,[f(n),f(r,{class:"popup--offline",ref:"offlinePopup",draggable:""},{main:v(()=>[K,V,q,F]),footer:v(({confirm:_})=>[e("button",{onClick:_,class:"btn btn--primary"},"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",8,H)]),_:1},512)],64)}var G=h(W,[["render",Y]]),I="/pilsner/pwa/bg/loading-bg-top.webp",J="/pilsner/pwa/bg/loading-bg-bottom.webp",Q="/pilsner/pwa/icons/logo.svg";const X={name:"Loading",data(){return{loaded:!1}}},Z={class:"loading"},ee=e("img",{rel:"preload",class:"loading__bg loading__bg--top",src:I,alt:""},null,-1),se=e("img",{rel:"preload",class:"loading__bg loading__bg--bottom",src:J,alt:""},null,-1),te=[ee,se],oe=e("img",{class:"loading__logo",src:Q,alt:""},null,-1),ie=e("h2",{class:"text-white text-center text-huge"},[b("\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E,"),e("br"),b("\u0421\u0435\u0440\u0433\u0435\u0439")],-1),ne=[oe,ie];function le(t,o,a,l,s,i){return c(),p("div",Z,[e("div",{class:d({"loading__bg-box":!0,"loading__bg-box--loaded":s.loaded})},te,2),e("div",{class:d({loading__info:!0,"loading__info--loaded":s.loaded})},ne,2)])}var ae=h(X,[["render",le]]);const re={name:"Index",components:{Loading:ae,Popup:U},created(){navigator.onLine&&setTimeout(this.openTMPopupPopup,4e3)},data(){return{TMlist:[{imgUrl:this.$getURL("/pwa/icons/pilsner.svg"),title:"\u041F\u0438\u043B\u0437\u043D\u0435\u0440"},{imgUrl:this.$getURL("/pwa/icons/kozlovitsa.svg"),title:"\u041A\u043E\u0437\u043B\u043E\u0432\u0438\u0446\u0430"},{imgUrl:this.$getURL("/pwa/icons/kozlovna.svg"),title:"\u041A\u043E\u0437\u043B\u043E\u0432\u043D\u0430"}]}},methods:{async openTMPopupPopup(){await this.$refs.TMPopup.open()&&this.$router.push({name:"dashboard"})}}},ce=e("h3",null,"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0442\u044C \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432!",-1),pe={class:"popup-TM__list"},_e=["onClick"],de=["src"];function ue(t,o,a,l,s,i){const n=m("loading"),r=m("popup");return c(),p(u,null,[f(n),f(r,{blockedScreen:"",ref:"TMPopup"},{main:v(()=>[ce]),footer:v(({confirm:_})=>[e("ul",pe,[(c(!0),p(u,null,w(s.TMlist,g=>(c(),p("li",{key:g.title,onClick:Qe=>_(g),class:"popup-TM__item"},[e("img",{src:g.imgUrl},null,8,de),e("span",null,y(g.title),1)],8,_e))),128))])]),_:1},512)],64)}var he=h(re,[["render",ue]]),ge="/pilsner/pwa/icons/drop-arrow.svg",me="/pilsner/pwa/picture/panel-about.jpg",fe="/pilsner/pwa/picture/panel-qr.svg",ve="/pilsner/pwa/icons/patch-prize.svg",we="/pilsner/pwa/icons/news-promo.svg",$e="/pilsner/pwa/icons/pilsner-title.svg",k="/pilsner/pwa/icons/inst.svg",be="/pilsner/pwa/icons/kozlovna-title.svg";const ye={name:"DashBoard",data(){return{gridList:[{imgUrl:this.$getURL("/pwa/icons/time.svg"),title:"\u0411\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/my-orders.svg"),title:"\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B",classes:["accent"]},{imgUrl:this.$getURL("/pwa/icons/lunch-gift.svg"),title:"\u041B\u0430\u043D\u0447-\u043A\u0430\u0440\u0442\u0430",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/lunch.svg"),title:"\u0411\u0438\u0437\u043D\u0435\u0441-\u043B\u0430\u043D\u0447",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/delivery.svg"),title:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/pickup.svg"),title:"\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/delivery-table.svg"),title:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0434\u043E \u0441\u0442\u043E\u043B\u0430",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/marker.svg"),title:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/review.svg"),title:"\u041E\u0442\u0437\u044B\u0432",classes:["grid-panel__item--white"]},{imgUrl:this.$getURL("/pwa/icons/settings.svg"),title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",classes:["grid-panel__item--white"]}]}}},Le={class:"dashboard section"},Ue={class:"container"},ke={class:"dashboard__wrap"},xe=e("header",{class:"dashboard__header"},[e("h1",null,"\u041F\u0438\u043B\u0437\u043D\u0435\u0440"),e("div",{class:"dashboard__drop-arrow"},[e("img",{src:ge,alt:""})])],-1),Pe={class:"dashboard__main"},Re={class:"panel__list"},Ce=L('<li class="panel__item"><img class="panel__bg" src="'+me+'" alt=""><span class="title__about text-white">\u041E \u043D\u0430\u0441</span></li><li class="panel__item panel__item--primary"><div class="panel__wrap"><div class="panel__text text-white"><h2>\u0411\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430</h2><p class="text-med-norm panel-bonus">\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E</p><span><h2>1280</h2><h4>\u0431\u043E\u043D\u0443\u0441\u043E\u0432</h4></span></div><img class="panel__qr" src="'+fe+'" alt=""></div></li>',2),Te={class:"panel__item panel__item--accent"},Ee={class:"panel__wrap panel__wrap--p20"},Me=e("img",{class:"panel__patch",src:ve,alt:""},null,-1),Oe={class:"panel__text text-white"},Se=e("h2",null,"\u041F\u0430\u0447 \u043A\u0430\u0440\u0442\u0430",-1),Ne=e("p",{class:"panel-patch"},"\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",-1),Be={class:"panel__patch-list"},Ae=["src"],je=e("li",{class:"panel__item"},[e("div",{class:"panel__wrap panel__wrap--news-promo"},[e("img",{src:we,alt:""}),e("h2",null,"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0430\u043A\u0446\u0438\u0438")])],-1),ze={class:"grid-panel__list text-white"},De={class:"grid-panel__img"},We=["src"],Ke={class:"grid-panel__text"},Ve={class:"text-big-bold"},qe=L('<footer class="dashboard__footer"><ul class="soc__list"><li class="soc__item"><img src="'+$e+'" alt="" class="soc__title"><img src="'+k+'" alt="" class="soc__icon"></li><li class="soc__item"><img src="'+k+'" alt="" class="soc__icon"><img src="'+be+'" alt="soc" class="soc__title"></li></ul></footer>',1);function Fe(t,o,a,l,s,i){return c(),p("section",Le,[e("div",Ue,[e("div",ke,[xe,e("main",Pe,[e("ul",Re,[Ce,e("li",Te,[e("div",Ee,[Me,e("div",Oe,[Se,Ne,e("ul",Be,[(c(!0),p(u,null,w(Array(5),(n,r)=>(c(),p("li",{key:n,class:d({"panel__patch-item":!0,"panel__patch-item--has":r<=2})},[e("img",{src:r<=2?"/pwa/icons/patch-has.svg":"/pwa/icons/patch.svg",alt:""},null,8,Ae)],2))),128))])])])]),je]),e("ul",ze,[(c(!0),p(u,null,w(s.gridList,n=>(c(),p("li",{key:n.title,class:d(["grid-panel__item",...n.classes])},[e("div",De,[e("img",{src:n.imgUrl,alt:""},null,8,We)]),e("div",Ke,[e("p",Ve,y(n.title),1)])],2))),128))])]),qe])])])}var He=h(ye,[["render",Fe]]);const Ye=[{path:"/",name:"index",component:he},{path:"/dashboard",name:"dashboard",component:He},{path:"/:pathMatch(.*)*",redirect:{name:"index"}}],Ge=C({history:T("/pilsner/"),routes:Ye});var Ie={install:t=>{t.config.globalProperties.$getURL=o=>"/pilsner/"+(o.startsWith("/")?o.slice(1):o)}};function Je(t={}){const{immediate:o=!1,onNeedRefresh:a,onOfflineReady:l,onRegistered:s,onRegisterError:i}=t;let n;const r=async(_=!0)=>{};return"serviceWorker"in navigator&&(n=new E("/pilsner/sw.js",{scope:"/pilsner/",type:"classic"}),n.addEventListener("activated",_=>{_.isUpdate?window.location.reload():l==null||l()}),n.register({immediate:o}).then(_=>{s==null||s(_)}).catch(_=>{i==null||i(_)})),r}Je({});M(G).use(Ge).use(Ie).use(O).mount("#app");
