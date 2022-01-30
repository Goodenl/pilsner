import{r as f,a as R,w as L,o as c,c as _,b as e,d as y,e as g,f as u,g as E,n as k,h as v,F as $,T as B,i as U,j as A,V as O,k as P,l as w,t as m,v as I,m as j,p as z,q as N,s as W,u as Q,x as F,y as K,z as Y}from"./vendor.dfe7fb94.js";const J=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))p(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};J();var b=(t,s)=>{const r=t.__vccOpts||t;for(const[p,n]of s)r[p]=n;return r};const G={name:"Popup",currentPopupController:null,props:{draggable:Boolean,blockedScreen:Boolean,swipeHide:Boolean},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)},data(){return{show:!1}},methods:{swipeHandler(t,s){s.stopImmediatePropagation(),this.swipeHide&&s.currentTarget.scrollTop==0&&s.cancelable&&this.close()},handleKeydown(t){this.show&&t.key==="Escape"&&this.close()},open(){let t,s;const r=new Promise((p,n)=>{t=p,s=n});return this.$options.currentPopupController={resolve:t,reject:s},this.show=!0,r},confirm(t=!0){this.$options.currentPopupController.resolve(t),this.show=!1},close(t=!1){this.blockedScreen||(this.$options.currentPopupController.resolve(t),this.show=!1)}},watch:{show(t){t?(document.body.style.overflowY!="hidden"&&(document.body.style.overflowY="hidden"),this.$refs.popup&&(this.$refs.popup.style.visibility="visible")):(document.body.style.overflowY="auto",setTimeout(()=>{this.$refs.popup&&(this.$refs.popup.style.visibility="hidden")},350))}}},X={class:"popup__wrap"},Z={class:"popup__content"},ee={class:"popup__footer"},te=v("\u0417\u0430\u043A\u0440\u044B\u0442\u044C");function se(t,s,r,p,n,o){const i=f("c-button"),l=R("touch");return L((c(),_("div",{onClick:s[0]||(s[0]=E(d=>o.close(!1),["self"])),ref:"popup",class:k({popup:!0,"popup--show":n.show,"popup--draggable":r.draggable})},[e("div",X,[e("div",Z,[y(t.$slots,"main",{confirm:o.confirm,close:o.close})]),e("footer",ee,[y(t.$slots,"footer",{confirm:o.confirm,close:o.close},()=>[g(i,{onClick:o.confirm,class:"btn"},{default:u(()=>[te]),_:1},8,["onClick"])])])])],2)),[[l,o.swipeHandler,"swipe",{bottom:!0}]])}var T=b(G,[["render",se]]),ne="/pilsner/pwa/icons/offline.svg";const oe={name:"App",components:{Popup:T},mounted(){navigator.onLine?(window.addEventListener("offline",this.handleConnection),window.addEventListener("online",this.handleConnection)):setTimeout(this.openOfflinePopup,500)},beforeUnmount(){window.removeEventListener("offline",this.handleConnection),window.removeEventListener("online",this.handleConnection)},methods:{async openOfflinePopup(){await this.$refs.offlinePopup.open()},handleConnection(){navigator.onLine?this.offlinePopup=!1:this.openOfflinePopup()}}},ie=e("img",{src:ne,alt:"",class:"offline__icon"},null,-1),le=e("h3",{class:"offline__warning"},"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!",-1),ae=e("h2",null,"\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442",-1),re=e("p",{class:"offline__text"},"\u0414\u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0432\u044F\u0437\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0430 \u0440\u0430\u043D\u0435\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0437\u0436\u0435.",-1),ce=["onClick"];function pe(t,s,r,p,n,o){const i=f("router-view"),l=f("popup");return c(),_($,null,[g(i,null,{default:u(({Component:d,route:x})=>[g(B,{name:x.meta.transition||"fade"},{default:u(()=>[(c(),U(A(d)))]),_:2},1032,["name"])]),_:1}),g(l,{class:"popup--offline",ref:"offlinePopup",draggable:""},{main:u(()=>[ie,le,ae,re]),footer:u(({confirm:d})=>[e("button",{onClick:d,class:"btn btn--primary"},"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",8,ce)]),_:1},512)],64)}var _e=b(oe,[["render",pe]]);const de={name:"CButton",data(){return{timeout:null}},methods:{tapHandler({currentTarget:t}){t.classList.add("btn--pressed"),this.timeout==null?this.timeout=setTimeout(()=>{t.classList.remove("btn--pressed"),clearTimeout(this.timeout)},600):(clearTimeout(this.timeout),this.timeout=setTimeout(()=>{t.classList.remove("btn--pressed"),clearTimeout(this.timeout)},600))}}};function ue(t,s,r,p,n,o){const i=R("touch");return L((c(),_("button",null,[y(t.$slots,"default")])),[[i,o.tapHandler,"tap"]])}var me=b(de,[["render",ue]]),he={state:{TM:JSON.parse(localStorage.getItem("TM"))||"\u041F\u0438\u043B\u0437\u043D\u0435\u0440"},getters:{getTM(t){return t.TM}},mutations:{setTM(t,s){localStorage.setItem("TM",JSON.stringify(s)),t.TM=s}}},ge=new O.Store({modules:{tm:he}});const fe="modulepreload",q={},ve="/pilsner/",be=function(s,r){return!r||r.length===0?s():Promise.all(r.map(p=>{if(p=`${ve}${p}`,p in q)return;q[p]=!0;const n=p.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${o}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":fe,n||(i.as="script",i.crossOrigin=""),i.href=p,document.head.appendChild(i),n)return new Promise((l,d)=>{i.addEventListener("load",l),i.addEventListener("error",d)})})).then(()=>s())};var ke="/pilsner/pwa/bg/loading-bg-top.webp",$e="/pilsner/pwa/bg/loading-bg-bottom.webp",we="/pilsner/pwa/icons/logo.svg";const ye={name:"Loading",data(){return{loaded:!1}}},xe={class:"loading"},Le=P('<div class="loading__bg-box"><img class="loading__bg loading__bg--top" src="'+ke+'" alt=""><img class="loading__bg loading__bg--bottom" src="'+$e+'" alt=""></div><div class="loading__info loading__info--loaded"><img class="loading__logo" src="'+we+'" alt=""><h2 class="text-white text-center text-huge">\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E,<br>\u0421\u0435\u0440\u0433\u0435\u0439</h2></div>',2),Pe=[Le];function Ce(t,s,r,p,n,o){return c(),_("div",xe,Pe)}var Ue=b(ye,[["render",Ce]]);const Te={name:"TmPopup",props:{blockedScreen:Boolean},components:{Popup:T},data(){return{TMlist:[{imgUrl:this.$getURL("/pwa/icons/pilsner.svg"),title:"\u041F\u0438\u043B\u0437\u043D\u0435\u0440"},{imgUrl:this.$getURL("/pwa/icons/kozlovitsa.svg"),title:"\u041A\u043E\u0437\u043B\u043E\u0432\u0438\u0446\u0430"},{imgUrl:this.$getURL("/pwa/icons/kozlovna.svg"),title:"\u041A\u043E\u0437\u043B\u043E\u0432\u043D\u0430"}]}},methods:{async openTMPopup(){const t=await this.$refs.TMPopup.open();t&&(this.$store.commit("setTM",t),this.$router.push({name:"dashboard"}))}}},Me=e("span",{class:"text-tabs-active"},"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0442\u044C \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432",-1),Re={class:"popup-TM__list"},qe=["onClick"],Se=["src"],Ve={class:"text-big-norm"};function He(t,s,r,p,n,o){const i=f("popup");return c(),U(i,{blockedScreen:r.blockedScreen,ref:"TMPopup"},{main:u(()=>[Me]),footer:u(({confirm:l})=>[e("ul",Re,[(c(!0),_($,null,w(n.TMlist,d=>(c(),_("li",{key:d.title,onClick:x=>l(d),class:"popup-TM__item"},[e("img",{src:d.imgUrl},null,8,Se),e("span",Ve,m(d.title),1)],8,qe))),128))])]),_:1},8,["blockedScreen"])}var S=b(Te,[["render",He]]);const De={name:"Index",components:{Loading:Ue,TmPopup:S},created(){navigator.onLine&&setTimeout(async()=>await this.$refs.TMPopup.openTMPopup(),4e3)}};function Ee(t,s,r,p,n,o){const i=f("loading"),l=f("tm-popup");return c(),_("section",null,[g(i),g(l,{blockedScreen:"",ref:"TMPopup"},null,512)])}var Be=b(De,[["render",Ee]]),V="/pilsner/assets/drop-arrow.0b3fcd84.svg",Ae="/pilsner/pwa/picture/panel-about.jpg",Oe="/pilsner/pwa/picture/panel-qr.svg",Ie="/pilsner/pwa/icons/patch-prize.svg",je="/pilsner/pwa/icons/news-promo.svg",ze="/pilsner/pwa/icons/pilsner-title.svg",H="/pilsner/pwa/icons/inst.svg",Ne="/pilsner/pwa/icons/kozlovna-title.svg";const We={name:"DashBoard",components:{TmPopup:S},data(){return{gridList:[{imgUrl:this.$getURL("/pwa/icons/time.svg"),title:"\u0411\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/my-orders.svg"),title:"\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/lunch-gift.svg"),title:"\u041B\u0430\u043D\u0447-\u043A\u0430\u0440\u0442\u0430",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/lunch.svg"),title:"\u0411\u0438\u0437\u043D\u0435\u0441-\u043B\u0430\u043D\u0447",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/menu.svg"),title:"\u041C\u0435\u043D\u044E",link:{name:"menu"},classes:[null]},{imgUrl:this.$getURL("/pwa/icons/pickup.svg"),title:"\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/delivery-table.svg"),title:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0434\u043E \u0441\u0442\u043E\u043B\u0430",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/marker.svg"),title:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/review.svg"),title:"\u041E\u0442\u0437\u044B\u0432",classes:["grid-panel__item--white","text-primary-childs"]},{imgUrl:this.$getURL("/pwa/icons/settings.svg"),title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",classes:["grid-panel__item--white","text-primary-childs"]}]}},methods:{openTMPopup(){this.$refs.TMPopup.openTMPopup()}}},Qe={class:"dashboard section"},Fe={class:"container"},Ke={class:"dashboard__wrap"},Ye={class:"dashboard__header"},Je={class:"container"},Ge=e("img",{src:V,alt:""},null,-1),Xe=[Ge],Ze={class:"dashboard__main"},et={class:"panel__list"},tt=P('<li class="panel__item"><img class="panel__bg" src="'+Ae+'" alt=""><span class="title__about text-white">\u041E \u043D\u0430\u0441</span></li><li class="panel__item panel__item--primary"><div class="panel__wrap"><div class="panel__text text-white-childs"><h2>\u0411\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430</h2><p class="text-med-norm panel-bonus">\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E</p><span><h2>1280</h2><h4>\u0431\u043E\u043D\u0443\u0441\u043E\u0432</h4></span></div><img class="panel__qr" src="'+Oe+'" alt=""></div></li>',2),st={class:"panel__item panel__item--accent"},nt={class:"panel__wrap panel__wrap--p20"},ot=e("img",{class:"panel__patch",src:Ie,alt:""},null,-1),it={class:"panel__text text-white-childs"},lt=e("h2",null,"\u041F\u0430\u0447 \u043A\u0430\u0440\u0442\u0430",-1),at=e("p",{class:"panel-patch"},"\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",-1),rt={class:"panel__patch-list"},ct=["src"],pt=e("li",{class:"panel__item"},[e("div",{class:"panel__wrap panel__wrap--news-promo"},[e("img",{src:je,alt:""}),e("h2",null,"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0430\u043A\u0446\u0438\u0438")])],-1),_t={class:"grid-panel__list text-white-childs"},dt=["onClick"],ut={class:"grid-panel__img"},mt=["src"],ht={class:"grid-panel__text"},gt={class:"text-big-bold"},ft=P('<footer class="dashboard__footer"><ul class="soc__list"><li class="soc__item"><img src="'+ze+'" alt="" class="soc__title"><img src="'+H+'" alt="" class="soc__icon"></li><li class="soc__item"><img src="'+H+'" alt="" class="soc__icon"><img src="'+Ne+'" alt="soc" class="soc__title"></li></ul></footer>',1);function vt(t,s,r,p,n,o){const i=f("tm-popup");return c(),_("section",Qe,[e("div",Fe,[e("div",Ke,[e("header",Ye,[e("div",Je,[e("h1",null,m(t.$store.getters.getTM.title),1),e("div",{onClick:s[0]||(s[0]=(...l)=>o.openTMPopup&&o.openTMPopup(...l)),class:"dashboard__drop-arrow"},Xe)])]),e("main",Ze,[e("ul",et,[tt,e("li",st,[e("div",nt,[ot,e("div",it,[lt,at,e("ul",rt,[(c(!0),_($,null,w(Array(5),(l,d)=>(c(),_("li",{key:l,class:k({"panel__patch-item":!0,"panel__patch-item--has":d<=2})},[e("img",{src:d<=2?t.$getURL("/pwa/icons/patch-has.svg"):t.$getURL("/pwa/icons/patch.svg"),alt:""},null,8,ct)],2))),128))])])])]),pt]),e("ul",_t,[(c(!0),_($,null,w(n.gridList,l=>(c(),_("li",{key:l.title,class:k(["grid-panel__item",...l.classes]),onClick:d=>t.$router.push(l.link)},[e("div",ut,[e("img",{src:l.imgUrl,alt:""},null,8,mt)]),e("div",ht,[e("p",gt,m(l.title),1)])],10,dt))),128))])]),ft])]),g(i,{ref:"TMPopup"},null,512)])}var bt=b(We,[["render",vt]]);const kt={name:"RadioPicker",emits:{"update:modelValue":null},props:{childs:Array,name:String,modelValue:String},methods:{selectedHandle(){this.$emit("update:modelValue",this.modelValue)}}},$t={class:"picker__list"},wt={class:"picker__label"},yt=["name","value"],xt=e("span",{class:"picker__marker picker__marker--radio"},null,-1);function Lt(t,s,r,p,n,o){return c(),_("ul",$t,[e("h3",null,[y(t.$slots,"title")]),(c(!0),_($,null,w(r.childs,i=>(c(),_("li",{key:i.title,class:"picker__item"},[e("label",wt,[L(e("input",{name:r.name,value:i.title,"onUpdate:modelValue":s[0]||(s[0]=l=>r.modelValue=l),type:"radio",onChange:s[1]||(s[1]=(...l)=>o.selectedHandle&&o.selectedHandle(...l))},null,40,yt),[[I,r.modelValue]]),xt,y(t.$slots,"default",{child:i},()=>[e("p",null,m(i.title),1)])])]))),128))])}var Pt=b(kt,[["render",Lt]]);const Ct={name:"CheckboxPicker",props:{childs:Array},methods:{quantityHandle(t){t.selected&&t.quantity==0&&(t.quantity=1)}}},Ut={class:"picker__list"},Tt={class:"picker__label"},Mt=["onUpdate:modelValue","onChange"],Rt=e("span",{class:"picker__marker picker__marker--checkbox"},null,-1);function qt(t,s,r,p,n,o){return c(),_("ul",Ut,[e("h3",null,[y(t.$slots,"title")]),(c(!0),_($,null,w(r.childs,i=>(c(),_("li",{key:i.title,class:"picker__item"},[e("label",Tt,[L(e("input",{"onUpdate:modelValue":l=>i.selected=l,onChange:l=>o.quantityHandle(i),type:"checkbox"},null,40,Mt),[[j,i.selected]]),Rt,y(t.$slots,"default",{child:i},()=>[e("p",null,m(i.title),1)])])]))),128))])}var St=b(Ct,[["render",qt]]),Vt="/pilsner/assets/position-menu.547ffac6.jpg",Ht="/pilsner/assets/spicy.be8e3f9b.svg",D="/pilsner/assets/vegan.0c78abb6.svg";const Dt={name:"PositionMenu",components:{RadioPicker:Pt,CheckboxPicker:St,Popup:T},props:{close:Function},beforeUnmounted(){document.body.removeAttribute("style")},data(){return{meal:{name:"",price:750,quantity:1},fullDescription:!1,radioPickerList:[{title:"\u041E\u0441\u043D\u043E\u0432\u0430 \u043D\u0430 \u0432\u044B\u0431\u043E\u0440",name:"main",selected:"\u0420\u0438\u0441",childs:[{title:"\u0420\u0438\u0441",price:"0"},{title:"\u0420\u0438\u0441\u043E\u0432\u0430\u044F \u041B\u0430\u043F\u0448\u0430",price:"0"},{title:"\u041F\u0448\u0435\u043D\u0438\u0447\u043D\u0430\u044F \u041B\u0430\u043F\u0448\u0430",price:"0"}]},{title:"\u041D\u0430\u0447\u0438\u043D\u043A\u0430 \u043D\u0430 \u0432\u044B\u0431\u043E\u0440",name:"inner",selected:"\u041A\u0443\u0440\u0438\u0446\u0430",childs:[{title:"\u041A\u0443\u0440\u0438\u0446\u0430",price:"50"},{title:"\u0421\u0432\u0438\u043D\u0438\u043D\u0430",price:"70"},{title:"\u0413\u043E\u0432\u044F\u0434\u0438\u043D\u0430",price:"100"},{title:"\u041A\u0440\u0435\u0432\u0435\u0442\u043A\u0438",price:"150"},{title:"\u041E\u0432\u043E\u0449\u0438",price:"0"}]}],checkboxPicker:{title:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0433\u0440\u0438\u0434\u0438\u0435\u043D\u0442\u044B \u043D\u0430 \u0432\u044B\u0431\u043E\u0440",childs:[{title:"\u041A\u0443\u0440\u0438\u0446\u0430",selected:!1,quantity:0,price:"100"},{title:"\u0421\u0432\u0438\u043D\u0438\u043D\u0430",selected:!1,quantity:0,price:"70"},{title:"\u0413\u043E\u0432\u044F\u0434\u0438\u043D\u0430",selected:!1,quantity:0,price:"100"},{title:"\u041A\u0440\u0435\u0432\u0435\u0442\u043A\u0438",selected:!1,quantity:0,price:"150"}]},markerList:[{svgId:"vegan",title:"\u0432\u0435\u0433\u0430\u043D\u0441\u043A\u043E\u0435 \u0431\u043B\u044E\u0434\u043E, \u0431\u0435\u0437 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u043C\u0430\u0441\u043B\u0430"},{svgId:"spicy",title:"\u043E\u0441\u0442\u0440\u043E\u0435 \u0431\u043B\u044E\u0434\u043E"},{svgId:"kosh",title:"\u043A\u043E\u0448\u0435\u0440\u043D\u043E\u0435 \u0431\u043B\u044E\u0434\u043E"},{svgId:"halal",title:"\u0445\u0430\u043B\u044F\u043B\u044C\u043D\u043E\u0435 \u0431\u043B\u044E\u0434\u043E"}],energyValues:[{title:"\u042D\u043D\u0435\u0440\u0433. \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C",value:"256,8 \u043A\u043A\u0430\u043B"},{title:"\u0411\u0435\u043B\u043A\u0438",value:"10,7\u0433"},{title:"\u0416\u0438\u0440\u044B",value:"8,4\u0433"},{title:"\u0423\u0433\u043B\u0435\u0432\u043E\u0434\u044B",value:"33\u0433"},{title:"\u0412\u0435\u0441",value:"540\u0433"}]}},computed:{mealDescription(){return this.fullDescription?"\u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u044B\u0439 \u0432\u043A\u0443\u0441 \u043F\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u043C \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u043C. \u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u044B\u0439 \u0432\u043A\u0443\u0441 \u043F\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u043C \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u043C. \u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u044B\u0439 \u0432\u043A\u0443\u0441 \u043F\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u043C \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u043C.":"\u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u044B\u0439 \u0432\u043A\u0443\u0441 \u043F\u043E \u043B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u043C \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u043C..."},isIos(){return/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())}},methods:{changeQuantity(t,s){s.toLowerCase().trim()=="plus"?t.quantity++:s.toLowerCase().trim()=="minus"&&t.quantity>1?t.quantity--:t.quantity==1&&(t.selected=!1)},async markerPopupHandle(t){await this.$refs.markerPopup.open()},async energyPopupHandle(t){await this.$refs.energyPopup.open()},toggleDescription(){this.fullDescription=!this.fullDescription}}},Et={class:"position-menu section"},Bt={class:"position-menu__header"},At={ref:"positionImage",src:Vt,alt:"",class:"position-menu__img"},Ot=e("img",{src:V,alt:""},null,-1),It=[Ot],jt={class:"btn--circle btn--white"},zt=["xlink:href"],Nt=e("span",{class:"position-menu__promo-text"},"\u0410\u043A\u0446\u0438\u044F",-1),Wt=P('<li class="menu-card__icons-item menu-card__icons-item--position"><img src="'+Ht+'" alt=""></li><li class="menu-card__icons-item menu-card__icons-item--position"><img src="'+D+'" alt=""></li><li class="menu-card__icons-item menu-card__icons-item--position"><img src="'+D+'" alt=""></li>',3),Qt=[Wt],Ft={class:"position-menu__main container"},Kt=e("span",{class:"text-big-norm text-grey"},"\u0410\u0440\u0442. 157890",-1),Yt={class:"position-menu__title"},Jt=e("h2",null,"\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0441\u043A\u043E\u0432\u043E\u0440\u043E\u0434\u0430 \u041F\u0438\u043B\u0437\u043D\u0435\u0440",-1),Gt=["xlink:href"],Xt={class:"text-big-norm"},Zt=e("svg",{width:"6",height:"3",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M1 1L6 6L11 1",stroke:"#47474A","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),es={class:"text-big-norm"},ts={class:"text-big-bold"},ss=e("span",{class:"text-big-middle"},"\u20BD",-1),ns={class:"text-big-norm"},os={class:"text-big-bold"},is=e("span",{class:"text-big-middle"},"\u20BD",-1),ls={class:"menu-card__quantity menu-card__quantity--position-menu"},as=v("-"),rs={class:"menu-card__quantity-count"},cs=v("+"),ps={class:"position-menu__footer"},_s={class:"position-menu__total-price"},ds=e("div",{class:"position-menu__name"},[e("span",{class:"text-big-bold"},"\u0412\u043E\u043A"),e("span",{class:"text-big-middle text-grey"},"450 \u0433")],-1),us={class:"text-accent text-accent-childs"},ms=e("span",{class:"currency"},"\u20BD",-1),hs=e("p",{class:"text-med-norm text-grey"},"\u0420\u0438\u0441\u043E\u0432\u0430\u044F \u043B\u0430\u043F\u0448\u0430, \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0438, \u043A\u0443\u0440\u0438\u0446\u0430",-1),gs={class:"position-menu__footer-action"},fs={class:"menu-card__quantity menu-card__quantity--position-menu"},vs=v(" - "),bs={class:"text-big-bold"},ks=v(" + "),$s=v("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"),ws=e("span",{class:"text-tabs-active"},"\u041C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0431\u043B\u044E\u0434\u0430",-1),ys={class:"popup-marker__list"},xs={class:"popup-marker__icon"},Ls=["xlink:href"],Ps={class:"text-big-norm"},Cs=["onClick"],Us=e("span",{class:"text-tabs-active"},"\u041F\u0438\u0449\u0435\u0432\u0430\u044F \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0431\u043B\u044E\u0434\u0430 \u043D\u0430 100 \u0433.",-1),Ts={class:"popup-marker__list"},Ms={class:"text-big-bold"},Rs=["onClick"];function qs(t,s,r,p,n,o){const i=f("radio-picker"),l=f("c-button"),d=f("checkbox-picker"),x=f("popup");return c(),_("section",Et,[e("header",Bt,[e("img",At,null,512),e("div",{class:k({"position-menu__actions container":!0,"position-menu__actions--ios":o.isIos})},[e("button",{onClick:s[0]||(s[0]=(...a)=>r.close&&r.close(...a)),class:"btn--circle btn--white"},It),e("button",jt,[(c(),_("svg",null,[e("use",{"xlink:href":t.$getURL("/pwa/icons/nav-pack.svg#cart")},null,8,zt)]))])],2),Nt,e("ul",{onClick:s[1]||(s[1]=(...a)=>o.markerPopupHandle&&o.markerPopupHandle(...a)),class:"menu-card__icons-list menu-card__icons-list--position"},Qt)]),e("main",Ft,[Kt,e("div",Yt,[Jt,(c(),_("svg",{onClick:s[2]||(s[2]=(...a)=>o.energyPopupHandle&&o.energyPopupHandle(...a)),class:"position-menu__title-info"},[e("use",{"xlink:href":t.$getURL("/pwa/icons/nav-pack.svg#info")},null,8,Gt)]))]),e("p",Xt,m(o.mealDescription),1),e("button",{onClick:s[3]||(s[3]=(...a)=>o.toggleDescription&&o.toggleDescription(...a)),class:k({"btn--clear text-accent-childs position-menu__read-more":!0,"position-menu__read-more--opened":this.fullDescription})},[e("span",null,m(n.fullDescription?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C":"\u0427\u0438\u0442\u0430\u0442\u044C \u0432\u0441\u0435"),1),Zt],2),(c(!0),_($,null,w(n.radioPickerList,a=>(c(),U(i,{key:a.title,name:a.name,modelValue:a.selected,"onUpdate:modelValue":h=>a.selected=h,childs:a.childs},{title:u(()=>[v(m(a.title),1)]),default:u(({child:h})=>[e("div",{class:k({picker__between:!0,"picker--selected":a.selected==h.title})},[e("p",es,m(h.title),1),e("span",ts,[v(" +"+m(h.price)+" ",1),ss])],2)]),_:2},1032,["name","modelValue","onUpdate:modelValue","childs"]))),128)),g(d,{childs:n.checkboxPicker.childs},{title:u(()=>[v(m(n.checkboxPicker.title),1)]),default:u(({child:a})=>[e("div",{class:k({"picker__checkbox-content":!0,"picker--selected":a.selected})},[e("p",ns,m(a.title),1),e("span",os,[v(" +"+m(a.price*a.quantity||a.price)+" ",1),is]),L(e("div",ls,[g(l,{onClick:h=>o.changeQuantity(a,"minus"),class:"btn btn--outline"},{default:u(()=>[as]),_:2},1032,["onClick"]),e("span",rs,m(a.quantity),1),g(l,{onClick:h=>o.changeQuantity(a,"plus"),class:"btn btn--outline"},{default:u(()=>[cs]),_:2},1032,["onClick"])],512),[[z,a.selected]])],2)]),_:1},8,["childs"])]),e("footer",ps,[e("div",_s,[ds,e("h3",us,[v("+"+m(n.meal.price*n.meal.quantity||n.meal.price)+" ",1),ms])]),hs,e("div",gs,[e("div",fs,[g(l,{onClick:s[4]||(s[4]=a=>o.changeQuantity(n.meal,"minus")),class:"btn btn--outline-grey",blocked:n.meal.quantity==1},{default:u(()=>[vs]),_:1},8,["blocked"]),e("span",bs,m(n.meal.quantity),1),g(l,{onClick:s[5]||(s[5]=a=>o.changeQuantity(n.meal,"plus")),class:"btn btn--outline-grey"},{default:u(()=>[ks]),_:1})]),g(l,{class:"btn"},{default:u(()=>[$s]),_:1})])]),g(x,{class:"popup--marker",ref:"markerPopup"},{main:u(()=>[ws]),footer:u(({confirm:a})=>[e("ul",ys,[(c(!0),_($,null,w(n.markerList,h=>(c(),_("li",{key:h.title,class:"popup-marker__item"},[(c(),_("svg",xs,[e("use",{"xlink:href":t.$getURL(`/pwa/icons/marker-pack.svg#${h.svgId}`)},null,8,Ls)])),e("span",Ps,m(h.title),1)]))),128))]),e("button",{onClick:a,class:"btn btn--primary"},"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",8,Cs)]),_:1},512),g(x,{class:"popup--energy",ref:"energyPopup",swipeHide:""},{main:u(()=>[Us]),footer:u(({confirm:a})=>[e("ul",Ts,[(c(!0),_($,null,w(n.energyValues,(h,M)=>(c(),_("li",{key:h.title,class:k({"popup-marker__item":!0,"popup-marker__item--weight":M==n.energyValues.length-1})},[e("span",{class:k([M==0?"text-big-bold":"text-big-norm"])},m(h.title),3),e("span",Ms,m(h.value),1)],2))),128))]),e("button",{onClick:a,class:"btn btn--primary"},"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",8,Rs)]),_:1},512)])}var Ss=b(Dt,[["render",qs]]);const C=()=>be(()=>import("./MenuSheets.97f3a6d6.js"),["assets/MenuSheets.97f3a6d6.js","assets/vendor.dfe7fb94.js"]),Vs=[{path:"/",name:"index",component:Be},{path:"/dashboard",name:"dashboard",component:bt},{path:"/menu",name:"menu",component:C,meta:{transition:"none"}},{path:"/menu/:id",name:"position-menu",component:Ss,meta:{transition:"none"}},{path:"/delivery",name:"delivery",component:C},{path:"/cart",name:"cart",component:C},{path:"/info",name:"info",component:C},{path:"/:pathMatch(.*)*",redirect:{name:"index"}}],Hs=N({history:W("/pilsner/"),routes:Vs,scrollBehavior(){return{top:0}}});var Ds={install:t=>{t.config.globalProperties.$getURL=s=>"/pilsner/"+(s.startsWith("/")?s.slice(1):s)}},Es={install:t=>{t.config.globalProperties.$globalLink=s=>s==null?void 0:s.toLowerCase().trim().replaceAll(" ","_")}};function Bs(t={}){const{immediate:s=!1,onNeedRefresh:r,onOfflineReady:p,onRegistered:n,onRegisterError:o}=t;let i;const l=async(d=!0)=>{};return"serviceWorker"in navigator&&(i=new Q("/pilsner/sw.js",{scope:"/pilsner/",type:"classic"}),i.addEventListener("activated",d=>{d.isUpdate?window.location.reload():p==null||p()}),i.register({immediate:s}).then(d=>{n==null||n(d)}).catch(d=>{o==null||o(d)})),l}Bs({onRegistered(t){t.update(),t&&setInterval(()=>{t.update()},60*60*1e3)}});F.polyfill();K(_e).use(Hs).use(ge).use(Ds).use(Es).use(Y).component("CButton",me).mount("#app");export{T as P,b as _,V as a,Ss as b,be as c,Ht as d,D as e};
