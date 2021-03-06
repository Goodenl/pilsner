import{r as k,w as P,o as p,c as _,a as e,b,d as T,n as f,e as d,f as m,g,F as u,V as M,h as v,i as x,j as w,t as $,k as R,l as C,v as S,m as E,p as O}from"./vendor.d5a2c40e.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};B();var h=(s,t)=>{const a=s.__vccOpts||s;for(const[c,o]of t)a[c]=o;return a};const N={name:"Popup",currentPopupController:null,props:{draggable:Boolean,blockedScreen:Boolean},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)},data(){return{show:!1}},methods:{swipeHandler(s,t){this.draggable&&(!t.target.closest(".popup__content")||t.cancelable)&&this.close()},handleKeydown(s){this.show&&s.key==="Escape"&&this.close()},open(){let s,t;const a=new Promise((c,o)=>{s=c,t=o});return this.$options.currentPopupController={resolve:s,reject:t},this.show=!0,a},confirm(s=!0){this.$options.currentPopupController.resolve(s),this.show=!1},close(s=!1){this.blockedScreen||(this.$options.currentPopupController.resolve(s),this.show=!1)}},watch:{show(s){s?(document.body.style.overflowY!="hidden"&&(document.body.style.overflowY="hidden"),this.$refs.popup&&(this.$refs.popup.style.visibility="visible")):(document.body.style.overflowY="auto",setTimeout(()=>{this.$refs.popup&&(this.$refs.popup.style.visibility="hidden")},350))}}},A={class:"popup__wrap"},j={class:"popup__content"},z={class:"popup__footer"};function D(s,t,a,c,o,n){const l=k("touch");return P((p(),_("div",{onClick:t[1]||(t[1]=T(i=>n.close(!1),["self"])),ref:"popup",class:f({popup:!0,"popup--show":o.show,"popup--draggable":a.draggable})},[e("div",A,[e("div",j,[b(s.$slots,"main")]),e("footer",z,[b(s.$slots,"footer",{confirm:n.confirm,close:n.close},()=>[e("button",{onClick:t[0]||(t[0]=(...i)=>n.confirm&&n.confirm(...i)),class:"btn"},"\u0417\u0430\u043A\u0440\u044B\u0442\u044C")])])])],2)),[[l,n.swipeHandler,"swipe",{bottom:!0}]])}var y=h(N,[["render",D]]),V="/pilsner/pwa/icons/offline.svg";const W={name:"App",components:{Popup:y},mounted(){navigator.onLine?(window.addEventListener("offline",this.handleConnection),window.addEventListener("online",this.handleConnection)):setTimeout(this.openOfflinePopup,500)},beforeUnmount(){window.removeEventListener("offline",this.handleConnection),window.removeEventListener("online",this.handleConnection)},methods:{async openOfflinePopup(){await this.$refs.offlinePopup.open()},handleConnection(){navigator.onLine?this.offlinePopup=!1:this.openOfflinePopup()}}},K=e("img",{src:V,alt:"",class:"offline__icon"},null,-1),q=e("h3",{class:"offline__warning"},"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!",-1),F=e("h2",null,"\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442",-1),H=e("p",{class:"offline__text"},"\u0414\u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0432\u044F\u0437\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0430 \u0440\u0430\u043D\u0435\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0437\u0436\u0435.",-1),Y=["onClick"];function I(s,t,a,c,o,n){const l=d("router-view"),i=d("popup");return p(),_(u,null,[m(l),m(i,{class:"popup--offline",ref:"offlinePopup",draggable:""},{main:g(()=>[K,q,F,H]),footer:g(({confirm:r})=>[e("button",{onClick:r,class:"btn btn--primary"},"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",8,Y)]),_:1},512)],64)}var J=h(W,[["render",I]]),G={state:{TM:JSON.parse(localStorage.getItem("TM"))||"\u041F\u0438\u043B\u0437\u043D\u0435\u0440"},getters:{getTM(s){return s.TM}},mutations:{setTM(s,t){localStorage.setItem("TM",JSON.stringify(t)),s.TM=t}}},Q=new M.Store({modules:{tm:G}}),X="/pilsner/pwa/bg/loading-bg-top.webp",Z="/pilsner/pwa/bg/loading-bg-bottom.webp",ee="/pilsner/pwa/icons/logo.svg";const se={name:"Loading",data(){return{loaded:!1}}},te={class:"loading"},oe=v('<div class="loading__bg-box"><img class="loading__bg loading__bg--top" src="'+X+'" alt=""><img class="loading__bg loading__bg--bottom" src="'+Z+'" alt=""></div><div class="loading__info loading__info--loaded"><img class="loading__logo" src="'+ee+'" alt=""><h2 class="text-white text-center text-huge">\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E,<br>\u0421\u0435\u0440\u0433\u0435\u0439</h2></div>',2),ne=[oe];function ie(s,t,a,c,o,n){return p(),_("div",te,ne)}var le=h(se,[["render",ie]]);const re={name:"TmPopup",props:{blockedScreen:Boolean},components:{Popup:y},data(){return{TMlist:[{imgUrl:this.$getURL("/pwa/icons/pilsner.svg"),title:"\u041F\u0438\u043B\u0437\u043D\u0435\u0440"},{imgUrl:this.$getURL("/pwa/icons/kozlovitsa.svg"),title:"\u041A\u043E\u0437\u043B\u043E\u0432\u0438\u0446\u0430"},{imgUrl:this.$getURL("/pwa/icons/kozlovna.svg"),title:"\u041A\u043E\u0437\u043B\u043E\u0432\u043D\u0430"}]}},methods:{async openTMPopup(){const s=await this.$refs.TMPopup.open();s&&(this.$store.commit("setTM",s),this.$router.push({name:"dashboard"}))}}},ae=e("h3",null,"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0442\u044C \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432",-1),ce={class:"popup-TM__list"},pe=["onClick"],_e=["src"],de={class:"text-big-norm"};function ue(s,t,a,c,o,n){const l=d("popup");return p(),x(l,{blockedScreen:a.blockedScreen,ref:"TMPopup"},{main:g(()=>[ae]),footer:g(({confirm:i})=>[e("ul",ce,[(p(!0),_(u,null,w(o.TMlist,r=>(p(),_("li",{key:r.title,onClick:ts=>i(r),class:"popup-TM__item"},[e("img",{src:r.imgUrl},null,8,_e),e("span",de,$(r.title),1)],8,pe))),128))])]),_:1},8,["blockedScreen"])}var L=h(re,[["render",ue]]);const he={name:"Index",components:{Loading:le,TmPopup:L},created(){navigator.onLine&&setTimeout(async()=>await this.$refs.TMPopup.openTMPopup(),4e3)}};function me(s,t,a,c,o,n){const l=d("loading"),i=d("tm-popup");return p(),_(u,null,[m(l),m(i,{blockedScreen:"",ref:"TMPopup"},null,512)],64)}var ge=h(he,[["render",me]]),fe="/pilsner/pwa/icons/drop-arrow.svg",ve="/pilsner/pwa/picture/panel-about.jpg",we="/pilsner/pwa/picture/panel-qr.svg",$e="/pilsner/pwa/icons/patch-prize.svg",be="/pilsner/pwa/icons/news-promo.svg",ye="/pilsner/pwa/icons/pilsner-title.svg",U="/pilsner/pwa/icons/inst.svg",Le="/pilsner/pwa/icons/kozlovna-title.svg";const Ue={name:"DashBoard",components:{TmPopup:L},data(){return{gridList:[{imgUrl:this.$getURL("/pwa/icons/time.svg"),title:"\u0411\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/my-orders.svg"),title:"\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/lunch-gift.svg"),title:"\u041B\u0430\u043D\u0447-\u043A\u0430\u0440\u0442\u0430",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/lunch.svg"),title:"\u0411\u0438\u0437\u043D\u0435\u0441-\u043B\u0430\u043D\u0447",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/delivery.svg"),title:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/pickup.svg"),title:"\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/delivery-table.svg"),title:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0434\u043E \u0441\u0442\u043E\u043B\u0430",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/marker.svg"),title:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/review.svg"),title:"\u041E\u0442\u0437\u044B\u0432",classes:["grid-panel__item--white","text-primary-childs"]},{imgUrl:this.$getURL("/pwa/icons/settings.svg"),title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",classes:["grid-panel__item--white","text-primary-childs"]}]}},methods:{openTMPopup(){this.$refs.TMPopup.openTMPopup()}}},ke={class:"dashboard section"},Pe={class:"container"},Te={class:"dashboard__wrap"},Me={class:"dashboard__header"},xe={class:"container"},Re=e("img",{src:fe,alt:""},null,-1),Ce=[Re],Se={class:"dashboard__main"},Ee={class:"panel__list"},Oe=v('<li class="panel__item"><img class="panel__bg" src="'+ve+'" alt=""><span class="title__about text-white">\u041E \u043D\u0430\u0441</span></li><li class="panel__item panel__item--primary"><div class="panel__wrap"><div class="panel__text text-white-childs"><h2>\u0411\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430</h2><p class="text-med-norm panel-bonus">\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E</p><span><h2>1280</h2><h4>\u0431\u043E\u043D\u0443\u0441\u043E\u0432</h4></span></div><img class="panel__qr" src="'+we+'" alt=""></div></li>',2),Be={class:"panel__item panel__item--accent"},Ne={class:"panel__wrap panel__wrap--p20"},Ae=e("img",{class:"panel__patch",src:$e,alt:""},null,-1),je={class:"panel__text text-white-childs"},ze=e("h2",null,"\u041F\u0430\u0447 \u043A\u0430\u0440\u0442\u0430",-1),De=e("p",{class:"panel-patch"},"\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",-1),Ve={class:"panel__patch-list"},We=["src"],Ke=e("li",{class:"panel__item"},[e("div",{class:"panel__wrap panel__wrap--news-promo"},[e("img",{src:be,alt:""}),e("h2",null,"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0430\u043A\u0446\u0438\u0438")])],-1),qe={class:"grid-panel__list text-white-childs"},Fe={class:"grid-panel__img"},He=["src"],Ye={class:"grid-panel__text"},Ie={class:"text-big-bold"},Je=v('<footer class="dashboard__footer"><ul class="soc__list"><li class="soc__item"><img src="'+ye+'" alt="" class="soc__title"><img src="'+U+'" alt="" class="soc__icon"></li><li class="soc__item"><img src="'+U+'" alt="" class="soc__icon"><img src="'+Le+'" alt="soc" class="soc__title"></li></ul></footer>',1);function Ge(s,t,a,c,o,n){const l=d("tm-popup");return p(),_(u,null,[e("section",ke,[e("div",Pe,[e("div",Te,[e("header",Me,[e("div",xe,[e("h1",null,$(s.$store.getters.getTM.title),1),e("div",{onClick:t[0]||(t[0]=(...i)=>n.openTMPopup&&n.openTMPopup(...i)),class:"dashboard__drop-arrow"},Ce)])]),e("main",Se,[e("ul",Ee,[Oe,e("li",Be,[e("div",Ne,[Ae,e("div",je,[ze,De,e("ul",Ve,[(p(!0),_(u,null,w(Array(5),(i,r)=>(p(),_("li",{key:i,class:f({"panel__patch-item":!0,"panel__patch-item--has":r<=2})},[e("img",{src:r<=2?s.$getURL("/pwa/icons/patch-has.svg"):s.$getURL("/pwa/icons/patch.svg"),alt:""},null,8,We)],2))),128))])])])]),Ke]),e("ul",qe,[(p(!0),_(u,null,w(o.gridList,i=>(p(),_("li",{key:i.title,class:f(["grid-panel__item",...i.classes])},[e("div",Fe,[e("img",{src:i.imgUrl,alt:""},null,8,He)]),e("div",Ye,[e("p",Ie,$(i.title),1)])],2))),128))])]),Je])])]),m(l,{ref:"TMPopup"},null,512)],64)}var Qe=h(Ue,[["render",Ge]]);const Xe=[{path:"/",name:"index",component:ge},{path:"/dashboard",name:"dashboard",component:Qe},{path:"/:pathMatch(.*)*",redirect:{name:"index"}}],Ze=R({history:C("/pilsner/"),routes:Xe});var es={install:s=>{s.config.globalProperties.$getURL=t=>"/pilsner/"+(t.startsWith("/")?t.slice(1):t)}};function ss(s={}){const{immediate:t=!1,onNeedRefresh:a,onOfflineReady:c,onRegistered:o,onRegisterError:n}=s;let l;const i=async(r=!0)=>{};return"serviceWorker"in navigator&&(l=new S("/pilsner/sw.js",{scope:"/pilsner/",type:"classic"}),l.addEventListener("activated",r=>{r.isUpdate?window.location.reload():c==null||c()}),l.register({immediate:t}).then(r=>{o==null||o(r)}).catch(r=>{n==null||n(r)})),i}ss({});E(J).use(Ze).use(Q).use(es).use(O).mount("#app");
