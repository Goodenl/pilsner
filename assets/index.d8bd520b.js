var Q=Object.defineProperty;var D=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var O=(e,s,n)=>s in e?Q(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,B=(e,s)=>{for(var n in s||(s={}))F.call(s,n)&&O(e,n,s[n]);if(D)for(var n of D(s))z.call(s,n)&&O(e,n,s[n]);return e};import{r as f,a as A,w as P,o,c,b as t,d as L,e as K,n as k,f as h,g as p,h as y,F as b,T as V,i as w,j as Y,V as J,k as M,l as $,t as u,m as H,v as E,p as G,q as X,s as Z,u as ee,x as te,y as se,z as ne,A as ie,B as oe}from"./vendor.d9b8b97c.js";const le=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))_(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&_(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function _(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};le();var v=(e,s)=>{const n=e.__vccOpts||e;for(const[_,a]of s)n[_]=a;return n};const ae={name:"Popup",currentPopupController:null,props:{draggable:Boolean,blockedScreen:Boolean,swipeHide:Boolean},mounted(){document.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeydown)},data(){return{show:!1}},methods:{swipeHandler(e,s){const n=this.$el.closest(".popup").parentElement.closest(".popup");n&&n.scrollTop==0&&(n.scrollTop=1),this.swipeHide&&s.currentTarget.scrollTop==0&&s.cancelable&&this.close()},handleKeydown(e){this.show&&e.key==="Escape"&&this.close()},open(){let e,s;const n=new Promise((_,a)=>{e=_,s=a});return this.$options.currentPopupController={resolve:e,reject:s},this.show=!0,n},confirm(e=!0){this.$options.currentPopupController.resolve(e),this.closeDown()},close(e=!1){this.blockedScreen||(this.$options.currentPopupController.resolve(e),this.closeDown())},closeDown(){this.show=!1,this.$el.scrollTop=0,document.body.removeAttribute("style")}},watch:{show(e){e?(document.body.style.overflowY!="hidden"&&(document.body.style.overflowY="hidden"),this.$refs.popup&&(this.$refs.popup.style.visibility="visible")):(document.body.style.overflowY="auto",setTimeout(()=>{this.$refs.popup&&(this.$refs.popup.style.visibility="hidden")},350))}}},ce={class:"popup__wrap"},re={class:"popup__content"},_e={class:"popup__footer"},de=y("\u0417\u0430\u043A\u0440\u044B\u0442\u044C");function ue(e,s,n,_,a,i){const l=f("c-button"),r=A("touch");return P((o(),c("div",{onClick:s[0]||(s[0]=K(m=>i.close(!1),["self"])),ref:"popup",class:k({popup:!0,"popup--show":a.show,"popup--draggable":n.draggable})},[t("div",ce,[t("div",re,[L(e.$slots,"main",{confirm:i.confirm,close:i.close})]),t("footer",_e,[L(e.$slots,"footer",{confirm:i.confirm,close:i.close},()=>[h(l,{onClick:i.confirm,class:"btn"},{default:p(()=>[de]),_:1},8,["onClick"])])])])],2)),[[r,i.swipeHandler,"swipe",{bottom:!0}]])}var T=v(ae,[["render",ue]]),pe="/pilsner/pwa/icons/offline.svg";const me={name:"App",components:{Popup:T},mounted(){navigator.onLine?(window.addEventListener("offline",this.handleConnection),window.addEventListener("online",this.handleConnection)):setTimeout(this.openOfflinePopup,500)},beforeUnmount(){window.removeEventListener("offline",this.handleConnection),window.removeEventListener("online",this.handleConnection)},methods:{async openOfflinePopup(){await this.$refs.offlinePopup.open()},handleConnection(){navigator.onLine?this.offlinePopup=!1:this.openOfflinePopup()}}},he=t("img",{src:pe,alt:"",class:"offline__icon"},null,-1),fe=t("h3",{class:"offline__warning"},"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435!",-1),ge=t("h2",null,"\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442",-1),ve=t("p",{class:"offline__text"},"\u0414\u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u0432\u044F\u0437\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043D\u0430 \u0440\u0430\u043D\u0435\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0437\u0436\u0435.",-1),be=["onClick"];function $e(e,s,n,_,a,i){const l=f("router-view"),r=f("popup");return o(),c(b,null,[h(l,null,{default:p(({Component:m,route:C})=>[h(V,{name:C.meta.transition||"fade"},{default:p(()=>[(o(),w(Y(m)))]),_:2},1032,["name"])]),_:1}),h(r,{class:"popup--offline",ref:"offlinePopup",draggable:""},{main:p(()=>[he,fe,ge,ve]),footer:p(({confirm:m})=>[t("button",{onClick:m,class:"btn btn--primary"},"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",8,be)]),_:1},512)],64)}var ke=v(me,[["render",$e]]);const ye={name:"CButton",data(){return{timeout:null}},methods:{tapHandler({currentTarget:e}){e.classList.add("btn--pressed"),this.timeout==null?this.timeout=setTimeout(()=>{e.classList.remove("btn--pressed"),clearTimeout(this.timeout)},600):(clearTimeout(this.timeout),this.timeout=setTimeout(()=>{e.classList.remove("btn--pressed"),clearTimeout(this.timeout)},600))}}};function we(e,s,n,_,a,i){const l=A("touch");return P((o(),c("button",null,[L(e.$slots,"default")])),[[l,i.tapHandler,"tap"]])}var xe=v(ye,[["render",we]]),Ce={state:{TM:JSON.parse(localStorage.getItem("TM"))||"\u041F\u0438\u043B\u0437\u043D\u0435\u0440"},getters:{getTM(e){return e.TM},getTabs(){return[]},getCards(){return[]},getMenuTree(){return[]}},mutations:{setTM(e,s){localStorage.setItem("TM",JSON.stringify(s)),e.TM=s}}},Le=new J.Store({modules:{tm:Ce}}),Me="/pilsner/pwa/bg/loading-bg-top.webp",Pe="/pilsner/pwa/bg/loading-bg-bottom.webp",Te="/pilsner/pwa/icons/logo.svg";const Ue={name:"Loading",data(){return{loaded:!1}}},He={class:"loading"},qe=M('<div class="loading__bg-box"><img class="loading__bg loading__bg--top" src="'+Me+'" alt=""><img class="loading__bg loading__bg--bottom" src="'+Pe+'" alt=""></div><div class="loading__info loading__info--loaded"><img class="loading__logo" src="'+Te+'" alt=""><h2 class="text-white text-center text-huge">\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E,<br>\u0421\u0435\u0440\u0433\u0435\u0439</h2></div>',2),Re=[qe];function Se(e,s,n,_,a,i){return o(),c("div",He,Re)}var Ie=v(Ue,[["render",Se]]);const De={name:"TmPopup",props:{blockedScreen:Boolean},components:{Popup:T},data(){return{TMlist:[{imgUrl:this.$getURL("/pwa/icons/pilsner.svg"),title:"\u041F\u0438\u043B\u0437\u043D\u0435\u0440"},{imgUrl:this.$getURL("/pwa/icons/kozlovitsa.svg"),title:"\u041A\u043E\u0437\u043B\u043E\u0432\u0438\u0446\u0430"},{imgUrl:this.$getURL("/pwa/icons/kozlovna.svg"),title:"\u041A\u043E\u0437\u043B\u043E\u0432\u043D\u0430"}]}},methods:{async openTMPopup(){const e=await this.$refs.TMPopup.open();e&&(this.$store.commit("setTM",e),this.$router.push({name:"dashboard"}))}}},Oe=t("span",{class:"text-tabs-active"},"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0435\u0442\u044C \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u043E\u0432",-1),Be={class:"popup-TM__list"},Ae=["onClick"],Ve=["src"],Ee={class:"text-big-norm"};function je(e,s,n,_,a,i){const l=f("popup");return o(),w(l,{blockedScreen:n.blockedScreen,ref:"TMPopup"},{main:p(()=>[Oe]),footer:p(({confirm:r})=>[t("ul",Be,[(o(!0),c(b,null,$(a.TMlist,m=>(o(),c("li",{key:m.title,onClick:C=>r(m),class:"popup-TM__item"},[t("img",{src:m.imgUrl},null,8,Ve),t("span",Ee,u(m.title),1)],8,Ae))),128))])]),_:1},8,["blockedScreen"])}var j=v(De,[["render",je]]);const We={name:"Index",components:{Loading:Ie,TmPopup:j},created(){navigator.onLine&&setTimeout(async()=>await this.$refs.TMPopup.openTMPopup(),4e3)}};function Ne(e,s,n,_,a,i){const l=f("loading"),r=f("tm-popup");return o(),c("section",null,[h(l),h(r,{blockedScreen:"",ref:"TMPopup"},null,512)])}var Qe=v(We,[["render",Ne]]),q="/pilsner/assets/drop-arrow.0b3fcd84.svg",Fe="/pilsner/pwa/picture/panel-about.jpg",ze="/pilsner/pwa/picture/panel-qr.svg",Ke="/pilsner/pwa/icons/patch-prize.svg",Ye="/pilsner/pwa/icons/news-promo.svg",Je="/pilsner/pwa/icons/pilsner-title.svg",W="/pilsner/pwa/icons/inst.svg",Ge="/pilsner/pwa/icons/kozlovna-title.svg";const Xe={name:"DashBoard",components:{TmPopup:j},data(){return{gridList:[{imgUrl:this.$getURL("/pwa/icons/time.svg"),title:"\u0411\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/my-orders.svg"),title:"\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/lunch-gift.svg"),title:"\u041B\u0430\u043D\u0447-\u043A\u0430\u0440\u0442\u0430",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/lunch.svg"),title:"\u0411\u0438\u0437\u043D\u0435\u0441-\u043B\u0430\u043D\u0447",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/menu.svg"),title:"\u041C\u0435\u043D\u044E",link:{name:"menu"},classes:[null]},{imgUrl:this.$getURL("/pwa/icons/pickup.svg"),title:"\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437",link:{name:"menu-market"},classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/delivery-table.svg"),title:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0434\u043E \u0441\u0442\u043E\u043B\u0430",classes:["grid-panel__item--accent"]},{imgUrl:this.$getURL("/pwa/icons/marker.svg"),title:"\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B",classes:[null]},{imgUrl:this.$getURL("/pwa/icons/review.svg"),title:"\u041E\u0442\u0437\u044B\u0432",classes:["grid-panel__item--white","text-primary-childs"]},{imgUrl:this.$getURL("/pwa/icons/settings.svg"),title:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",classes:["grid-panel__item--white","text-primary-childs"]}]}},methods:{openTMPopup(){this.$refs.TMPopup.openTMPopup()}}},Ze={class:"dashboard section"},et={class:"container"},tt={class:"dashboard__wrap"},st={class:"dashboard__header"},nt={class:"container"},it=t("img",{src:q,alt:""},null,-1),ot=[it],lt={class:"dashboard__main"},at={class:"panel__list"},ct=M('<li class="panel__item"><img class="panel__bg" src="'+Fe+'" alt=""><span class="title__about text-white">\u041E \u043D\u0430\u0441</span></li><li class="panel__item panel__item--primary"><div class="panel__wrap"><div class="panel__text text-white-childs"><h2>\u0411\u043E\u043D\u0443\u0441\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430</h2><p class="text-med-norm panel-bonus">\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E</p><span><h2>1280</h2><h4>\u0431\u043E\u043D\u0443\u0441\u043E\u0432</h4></span></div><img class="panel__qr" src="'+ze+'" alt=""></div></li>',2),rt={class:"panel__item panel__item--accent"},_t={class:"panel__wrap panel__wrap--p20"},dt=t("img",{class:"panel__patch",src:Ke,alt:""},null,-1),ut={class:"panel__text text-white-childs"},pt=t("h2",null,"\u041F\u0430\u0447 \u043A\u0430\u0440\u0442\u0430",-1),mt=t("p",{class:"panel-patch"},"\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C",-1),ht={class:"panel__patch-list"},ft=["src"],gt=t("li",{class:"panel__item"},[t("div",{class:"panel__wrap panel__wrap--news-promo"},[t("img",{src:Ye,alt:""}),t("h2",null,"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0430\u043A\u0446\u0438\u0438")])],-1),vt={class:"grid-panel__list text-white-childs"},bt=["onClick"],$t={class:"grid-panel__img"},kt=["src"],yt={class:"grid-panel__text"},wt={class:"text-big-bold"},xt=M('<footer class="dashboard__footer"><ul class="soc__list"><li class="soc__item"><img src="'+Je+'" alt="" class="soc__title"><img src="'+W+'" alt="" class="soc__icon"></li><li class="soc__item"><img src="'+W+'" alt="" class="soc__icon"><img src="'+Ge+'" alt="soc" class="soc__title"></li></ul></footer>',1);function Ct(e,s,n,_,a,i){const l=f("tm-popup");return o(),c("section",Ze,[t("div",et,[t("div",tt,[t("header",st,[t("div",nt,[t("h1",null,u(e.$store.getters.getTM.title),1),t("div",{onClick:s[0]||(s[0]=(...r)=>i.openTMPopup&&i.openTMPopup(...r)),class:"dashboard__drop-arrow"},ot)])]),t("main",lt,[t("ul",at,[ct,t("li",rt,[t("div",_t,[dt,t("div",ut,[pt,mt,t("ul",ht,[(o(!0),c(b,null,$(Array(5),(r,m)=>(o(),c("li",{key:r,class:k({"panel__patch-item":!0,"panel__patch-item--has":m<=2})},[t("img",{src:m<=2?e.$getURL("/pwa/icons/patch-has.svg"):e.$getURL("/pwa/icons/patch.svg"),alt:""},null,8,ft)],2))),128))])])])]),gt]),t("ul",vt,[(o(!0),c(b,null,$(a.gridList,r=>(o(),c("li",{key:r.title,class:k(["grid-panel__item",...r.classes]),onClick:m=>e.$router.push(r.link)},[t("div",$t,[t("img",{src:r.imgUrl,alt:""},null,8,kt)]),t("div",yt,[t("p",wt,u(r.title),1)])],10,bt))),128))])]),xt])]),h(l,{ref:"TMPopup"},null,512)])}var Lt=v(Xe,[["render",Ct]]),Mt="/pilsner/assets/popup-menu.730276f5.jpg",Pt="/pilsner/assets/popup-menu-arrow.95af6d2d.svg";const Tt={name:"MenuPopupItem",props:{item:Object,confirm:Function},computed:{lastChild(){return Boolean(this.item.children==null)},lastParent(){var e;return this.lastChild?!1:!Boolean((e=this.item.children)==null?void 0:e.length)},nextItemRender(){return this.lastParent?this.item.positions:this.item.children}},methods:{toggleMenuItem(){if(this.item.selected=!this.item.selected,this.lastChild){const e=this.$store.getters.getCards.find(s=>s.positions.includes(this.item));this.selTabHandle(e)}},selTabHandle(e){this.confirm(e)}}},Ut={class:"popup-menu__item"},Ht={key:0,class:"popup-menu__img",src:Mt,alt:""},qt={key:1,class:"popup-menu__arrow",src:Pt,alt:""},Rt={key:2,class:"popup-menu__last-marker"},St={key:3,class:"popup-menu__position-count text-accent-childs"},It=t("span",{class:"text-small"},"\u043F\u043E\u0437.",-1),Dt={key:4,class:"popup-menu__position-action"},Ot=t("img",{src:q,alt:""},null,-1),Bt=[Ot];function At(e,s,n,_,a,i){const l=f("menu-popup-item",!0);return o(),w(V,{name:"grow",mode:"out-in"},{default:p(()=>[t("li",Ut,[t("div",{onClick:s[0]||(s[0]=(...r)=>i.toggleMenuItem&&i.toggleMenuItem(...r)),class:k({"popup-menu__item-content":!0,"popup-menu__item-content--selected":n.item.selected&&!i.lastChild,"popup-menu__item-content--last":i.lastChild})},[!n.item.parent_category&&!i.lastChild?(o(),c("img",Ht)):i.lastChild?(o(),c("span",Rt)):(o(),c("img",qt)),t("h3",null,u(n.item.title),1),!i.lastChild&&(n.item.children.length||!n.item.parent_category)?(o(),c("div",St,[t("h3",null,u(n.item.allPositions),1),It])):i.lastChild?(o(),c("div",Dt,Bt)):H("",!0)],2),(o(!0),c(b,null,$(i.nextItemRender,r=>P((o(),w(l,{key:r.title,item:r,confirm:n.confirm},null,8,["item","confirm"])),[[E,n.item.selected]])),128))])]),_:1})}var Vt=v(Tt,[["render",At]]);const Et={name:"MenuPopupTree",components:{MenuPopupItem:Vt},props:{list:Array,confirm:Function}},jt={class:"popup-menu__list"};function Wt(e,s,n,_,a,i){const l=f("menu-popup-item");return o(),c("ul",jt,[(o(!0),c(b,null,$(n.list,r=>(o(),w(l,{key:r.title,item:r,confirm:n.confirm},null,8,["item","confirm"]))),128))])}var Nt=v(Et,[["render",Wt]]);const Qt={name:"RadioPicker",emits:{"update:modelValue":null},props:{childs:Array,name:String,modelValue:String},methods:{selectedHandle(){this.$emit("update:modelValue",this.modelValue)}}},Ft={class:"picker__list"},zt={class:"picker__label"},Kt=["name","value"],Yt=t("span",{class:"picker__marker picker__marker--radio"},null,-1);function Jt(e,s,n,_,a,i){return o(),c("ul",Ft,[t("h3",null,[L(e.$slots,"title")]),(o(!0),c(b,null,$(n.childs,l=>(o(),c("li",{key:l.title,class:"picker__item"},[t("label",zt,[P(t("input",{name:n.name,value:l.title,"onUpdate:modelValue":s[0]||(s[0]=r=>n.modelValue=r),type:"radio",onChange:s[1]||(s[1]=(...r)=>i.selectedHandle&&i.selectedHandle(...r))},null,40,Kt),[[G,n.modelValue]]),Yt,L(e.$slots,"default",{child:l},()=>[t("p",null,u(l.title),1)])])]))),128))])}var Gt=v(Qt,[["render",Jt]]);const Xt={name:"CheckboxPicker",props:{childs:Array},methods:{quantityHandle(e){e.selected&&e.quantity==0&&(e.quantity=1)}}},Zt={class:"picker__list"},es={class:"picker__label"},ts=["onUpdate:modelValue","onChange"],ss=t("span",{class:"picker__marker picker__marker--checkbox"},null,-1);function ns(e,s,n,_,a,i){return o(),c("ul",Zt,[t("h3",null,[L(e.$slots,"title")]),(o(!0),c(b,null,$(n.childs,l=>(o(),c("li",{key:l.title,class:"picker__item"},[t("label",es,[P(t("input",{"onUpdate:modelValue":r=>l.selected=r,onChange:r=>i.quantityHandle(l),type:"checkbox"},null,40,ts),[[X,l.selected]]),ss,L(e.$slots,"default",{child:l},()=>[t("p",null,u(l.title),1)])])]))),128))])}var is=v(Xt,[["render",ns]]),N="/pilsner/assets/spicy.be8e3f9b.svg",R="/pilsner/assets/vegan.0c78abb6.svg";const os={name:"PositionMenu",components:{RadioPicker:Gt,CheckboxPicker:is,Popup:T},props:{item:Object,close:Function},preventQuantity:void 0,data(){return{meal:{name:"",price:750,quantity:1},fullDescription:!1,radioPickerList:[{title:"\u041E\u0441\u043D\u043E\u0432\u0430 \u043D\u0430 \u0432\u044B\u0431\u043E\u0440",name:"main",selected:"\u0420\u0438\u0441",childs:[{title:"\u0420\u0438\u0441",price:"0"},{title:"\u0420\u0438\u0441\u043E\u0432\u0430\u044F \u041B\u0430\u043F\u0448\u0430",price:"0"},{title:"\u041F\u0448\u0435\u043D\u0438\u0447\u043D\u0430\u044F \u041B\u0430\u043F\u0448\u0430",price:"0"}]},{title:"\u041D\u0430\u0447\u0438\u043D\u043A\u0430 \u043D\u0430 \u0432\u044B\u0431\u043E\u0440",name:"inner",selected:"\u041A\u0443\u0440\u0438\u0446\u0430",childs:[{title:"\u041A\u0443\u0440\u0438\u0446\u0430",price:"50"},{title:"\u0421\u0432\u0438\u043D\u0438\u043D\u0430",price:"70"},{title:"\u0413\u043E\u0432\u044F\u0434\u0438\u043D\u0430",price:"100"},{title:"\u041A\u0440\u0435\u0432\u0435\u0442\u043A\u0438",price:"150"},{title:"\u041E\u0432\u043E\u0449\u0438",price:"0"}]}],checkboxPicker:{title:"\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0433\u0440\u0438\u0434\u0438\u0435\u043D\u0442\u044B \u043D\u0430 \u0432\u044B\u0431\u043E\u0440",childs:[{title:"\u041A\u0443\u0440\u0438\u0446\u0430",selected:!1,quantity:0,price:"100"},{title:"\u0421\u0432\u0438\u043D\u0438\u043D\u0430",selected:!1,quantity:0,price:"70"},{title:"\u0413\u043E\u0432\u044F\u0434\u0438\u043D\u0430",selected:!1,quantity:0,price:"100"},{title:"\u041A\u0440\u0435\u0432\u0435\u0442\u043A\u0438",selected:!1,quantity:0,price:"150"}]},markerList:[{svgId:"vegan",title:"\u0432\u0435\u0433\u0430\u043D\u0441\u043A\u043E\u0435 \u0431\u043B\u044E\u0434\u043E, \u0431\u0435\u0437 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0436\u0438\u0432\u043E\u0442\u043D\u043E\u0433\u043E \u043C\u0430\u0441\u043B\u0430"},{svgId:"spicy",title:"\u043E\u0441\u0442\u0440\u043E\u0435 \u0431\u043B\u044E\u0434\u043E"},{svgId:"kosh",title:"\u043A\u043E\u0448\u0435\u0440\u043D\u043E\u0435 \u0431\u043B\u044E\u0434\u043E"},{svgId:"halal",title:"\u0445\u0430\u043B\u044F\u043B\u044C\u043D\u043E\u0435 \u0431\u043B\u044E\u0434\u043E"}],energyValues:[{title:"\u042D\u043D\u0435\u0440\u0433. \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C",value:"256,8 \u043A\u043A\u0430\u043B"},{title:"\u0411\u0435\u043B\u043A\u0438",value:"10,7\u0433"},{title:"\u0416\u0438\u0440\u044B",value:"8,4\u0433"},{title:"\u0423\u0433\u043B\u0435\u0432\u043E\u0434\u044B",value:"33\u0433"}]}},computed:{mealDescription(){var s,n;const e=(s=this.item.description)==null?void 0:s.split(/\s+/).splice(0,5).toString().replaceAll(/(?<!\ )\,(?<!\ )/gm," ");return this.fullDescription?(n=this.item)==null?void 0:n.description:(e==null?void 0:e.slice(0,-1))+"..."},isIos(){return/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())}},methods:{changeQuantity(e,s,n=!1){n?s.toLowerCase().trim()=="plus"?e.count++:s.toLowerCase().trim()=="minus"&&e.count>1&&e.count--:s.toLowerCase().trim()=="plus"?e.quantity++:s.toLowerCase().trim()=="minus"&&e.quantity>1?e.quantity--:e.quantity==1&&(e.selected=!1)},toggleDescription(){this.fullDescription=!this.fullDescription},async markerPopupHandle(e){await this.$refs.markerPopup.open()},async energyPopupHandle(e){await this.$refs.energyPopup.open()}},watch:{item(){this.item.count=1,this.checkboxPicker.childs.map(e=>{e.quantity=0,e.selected=!1})}}},ls={class:"position-menu section"},as={class:"position-menu__header"},cs=["src"],rs=t("img",{src:q,alt:""},null,-1),_s=[rs],ds={class:"btn--circle btn--white"},us=["xlink:href"],ps=t("span",{class:"position-menu__promo-text"},"\u0410\u043A\u0446\u0438\u044F",-1),ms=M('<li class="menu-card__icons-item menu-card__icons-item--position"><img src="'+N+'" alt=""></li><li class="menu-card__icons-item menu-card__icons-item--position"><img src="'+R+'" alt=""></li><li class="menu-card__icons-item menu-card__icons-item--position"><img src="'+R+'" alt=""></li>',3),hs=[ms],fs={class:"position-menu__main container"},gs=t("span",{class:"text-big-norm text-grey"},"\u0410\u0440\u0442. 157890",-1),vs={class:"position-menu__title"},bs=["xlink:href"],$s={class:"text-big-norm"},ks=t("svg",{width:"6",height:"3",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M1 1L6 6L11 1",stroke:"#47474A","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ys={class:"text-big-norm"},ws={class:"text-big-bold"},xs=t("span",{class:"text-big-middle"},"\u20BD",-1),Cs={class:"text-big-norm"},Ls={class:"text-big-bold"},Ms=t("span",{class:"text-big-middle"},"\u20BD",-1),Ps={class:"menu-card__quantity menu-card__quantity--position-menu"},Ts=y("-"),Us={class:"menu-card__quantity-count"},Hs=y("+"),qs={class:"position-menu__footer"},Rs={class:"position-menu__total-price"},Ss=t("div",{class:"position-menu__name"},[t("span",{class:"text-big-bold"},"\u0412\u043E\u043A"),t("span",{class:"text-big-middle text-grey"},"450 \u0433")],-1),Is={class:"text-accent text-accent-childs"},Ds=t("span",{class:"currency"},"\u20BD",-1),Os=t("p",{class:"text-med-norm text-grey"},"\u0420\u0438\u0441\u043E\u0432\u0430\u044F \u043B\u0430\u043F\u0448\u0430, \u043A\u0440\u0435\u0432\u0435\u0442\u043A\u0438, \u043A\u0443\u0440\u0438\u0446\u0430",-1),Bs={class:"position-menu__footer-action"},As={class:"menu-card__quantity menu-card__quantity--position-menu"},Vs=y(" - "),Es={class:"text-big-bold"},js=y(" + "),Ws=y("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"),Ns=t("span",{class:"text-tabs-active"},"\u041C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u043A\u0430 \u0431\u043B\u044E\u0434\u0430",-1),Qs={class:"popup-marker__list"},Fs={class:"popup-marker__icon"},zs=["xlink:href"],Ks={class:"text-big-norm"},Ys=["onClick"],Js=t("span",{class:"text-tabs-active"},"\u041F\u0438\u0449\u0435\u0432\u0430\u044F \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0431\u043B\u044E\u0434\u0430 \u043D\u0430 100 \u0433.",-1),Gs={class:"popup-marker__list"},Xs={class:"text-big-bold"},Zs={class:"popup-marker__item popup-marker__item--weight"},en=t("span",{class:"text-big-norm"},"\u0412\u0435\u0441",-1),tn={class:"text-big-bold"},sn=["onClick"];function nn(e,s,n,_,a,i){const l=f("radio-picker"),r=f("c-button"),m=f("checkbox-picker"),C=f("popup");return o(),c("section",ls,[t("header",as,[t("img",{ref:"positionImage",src:n.item.image||e.$getURL("/img/picture/not-photo.jpg"),alt:"",class:"position-menu__img"},null,8,cs),t("div",{class:k({"position-menu__actions container":!0,"position-menu__actions--ios":i.isIos})},[t("button",{onClick:s[0]||(s[0]=(...d)=>n.close&&n.close(...d)),class:"btn--circle btn--white"},_s),t("button",ds,[(o(),c("svg",null,[t("use",{"xlink:href":e.$getURL("/pwa/icons/nav-pack.svg#cart")},null,8,us)]))])],2),ps,t("ul",{onClick:s[1]||(s[1]=(...d)=>i.markerPopupHandle&&i.markerPopupHandle(...d)),class:"menu-card__icons-list menu-card__icons-list--position"},hs)]),t("main",fs,[gs,t("div",vs,[t("h2",null,u(n.item.title||"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u044E\u0434\u0430"),1),(o(),c("svg",{onClick:s[2]||(s[2]=(...d)=>i.energyPopupHandle&&i.energyPopupHandle(...d)),class:"position-menu__title-info"},[t("use",{"xlink:href":e.$getURL("/pwa/icons/nav-pack.svg#info")},null,8,bs)]))]),t("p",$s,u(i.mealDescription),1),t("button",{onClick:s[3]||(s[3]=(...d)=>i.toggleDescription&&i.toggleDescription(...d)),class:k({"btn--clear text-accent-childs position-menu__read-more":!0,"position-menu__read-more--opened":this.fullDescription})},[t("span",null,u(a.fullDescription?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C":"\u0427\u0438\u0442\u0430\u0442\u044C \u0432\u0441\u0435"),1),ks],2),(o(!0),c(b,null,$(a.radioPickerList,d=>(o(),w(l,{key:d.title,name:d.name,modelValue:d.selected,"onUpdate:modelValue":g=>d.selected=g,childs:d.childs},{title:p(()=>[y(u(d.title),1)]),default:p(({child:g})=>[t("div",{class:k({picker__between:!0,"picker--selected":d.selected==g.title})},[t("p",ys,u(g.title),1),t("span",ws,[y(" +"+u(g.price)+" ",1),xs])],2)]),_:2},1032,["name","modelValue","onUpdate:modelValue","childs"]))),128)),h(m,{childs:a.checkboxPicker.childs},{title:p(()=>[y(u(a.checkboxPicker.title),1)]),default:p(({child:d})=>[t("div",{class:k({"picker__checkbox-content":!0,"picker--selected":d.selected})},[t("p",Cs,u(d.title),1),t("span",Ls,[y(" +"+u(d.price*d.quantity||d.price)+" ",1),Ms]),P(t("div",Ps,[h(r,{onClick:g=>i.changeQuantity(d,"minus"),class:"btn btn--outline"},{default:p(()=>[Ts]),_:2},1032,["onClick"]),t("span",Us,u(d.quantity),1),h(r,{onClick:g=>i.changeQuantity(d,"plus"),class:"btn btn--outline"},{default:p(()=>[Hs]),_:2},1032,["onClick"])],512),[[E,d.selected]])],2)]),_:1},8,["childs"])]),t("footer",qs,[t("div",Rs,[Ss,t("h3",Is,[y("+"+u(n.item.price*n.item.count||n.item.price)+" ",1),Ds])]),Os,t("div",Bs,[t("div",As,[h(r,{onClick:s[4]||(s[4]=d=>i.changeQuantity(n.item,"minus",!0)),class:"btn btn--outline-grey",blocked:n.item.count==1},{default:p(()=>[Vs]),_:1},8,["blocked"]),t("span",Es,u(n.item.count),1),h(r,{onClick:s[5]||(s[5]=d=>i.changeQuantity(n.item,"plus",!0)),class:"btn btn--outline-grey"},{default:p(()=>[js]),_:1})]),h(r,{class:"btn"},{default:p(()=>[Ws]),_:1})])]),h(C,{class:"popup--marker",ref:"markerPopup"},{main:p(()=>[Ns]),footer:p(({confirm:d})=>[t("ul",Qs,[(o(!0),c(b,null,$(a.markerList,g=>(o(),c("li",{key:g.title,class:"popup-marker__item"},[(o(),c("svg",Fs,[t("use",{"xlink:href":e.$getURL(`/pwa/icons/marker-pack.svg#${g.svgId}`)},null,8,zs)])),t("span",Ks,u(g.title),1)]))),128))]),t("button",{onClick:d,class:"btn btn--primary"},"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",8,Ys)]),_:1},512),h(C,{class:"popup--energy",ref:"energyPopup"},{main:p(()=>[Js]),footer:p(({confirm:d})=>[t("ul",Gs,[(o(!0),c(b,null,$(a.energyValues,(g,S)=>(o(),c("li",{key:g.title,class:"popup-marker__item"},[t("span",{class:k([S==0?"text-big-bold":"text-big-norm"])},u(g.title),3),t("span",Xs,u(g.value),1)]))),128)),t("li",Zs,[en,t("span",tn,u(n.item.weight),1)])]),t("button",{onClick:d,class:"btn btn--primary"},"\u041F\u043E\u043D\u044F\u0442\u043D\u043E",8,sn)]),_:1},512)])}var on=v(os,[["render",nn]]),ln="/pilsner/assets/more.9024127f.svg",an="/pilsner/assets/special-board.04dd8a5b.jpg";const cn={name:"MenuSpecial",data(){return{}}},rn={class:"menu-special"},_n=M('<div class="container"><div class="menu-special__title"><h2>\u0410\u043A\u0446\u0438\u0438</h2><img class="menu-special__more" src="'+ln+'" alt=""></div><div class="menu-special__board"><img class="menu-special__bg" src="'+an+'" alt=""><div class="menu-special__text text-white-childs"><h3>\u0421\u043A\u0438\u0434\u043A\u0430 -20% \u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0443</h3><p class="text-small"> \u041E\u0447\u0435\u043D\u044C \u0432\u044B\u0433\u043E\u0434\u043D\u043E\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435. \u0422\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0432\u0430\u0441 \u0438 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F. \u041D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0435! </p></div></div></div>',1),dn=[_n];function un(e,s,n,_,a,i){return o(),c("div",rn,dn)}var pn=v(cn,[["render",un]]),mn="/pilsner/assets/info.cd37849b.svg";const hn={name:"MenuCard",props:{card:Object},computed:{formatedWeight(){var e;return((e=this.card.weight)==null?void 0:e.search(/(г|кг|мл|л)\.?/gmi))==-1?this.card.weight+" \u0433.":this.card.weight}},methods:{changeQuantity(e,s){s.toLowerCase().trim()=="plus"?e.quantity++:s.toLowerCase().trim()=="minus"&&e.quantity&&e.quantity--},openDetail(){this.$emit("openDetail")}}},fn={key:0,class:"menu-card__item"},gn={key:0,class:"menu-card__promo-text"},vn=["src"],bn=M('<div class="menu-card__icons"><img src="'+mn+'" alt="" class="menu-card__info"><ul class="menu-card__icons-list"><li class="menu-card__icons-item"><img src="'+N+'" alt=""></li><li class="menu-card__icons-item"><img src="'+R+'" alt=""></li><li class="menu-card__icons-item"><img src="'+R+'" alt=""></li></ul></div>',1),$n={class:"menu-card__footer"},kn={class:"menu-card__text"},yn={key:0,class:"text-med-norm text-primary-light"},wn={key:1,class:"text-med-norm text-primary-light menu-card__quantity-text"},xn={class:"text-med-bold text-accent"},Cn=t("h3",{class:"text-white"},"545 \u20BD",-1),Ln={key:1,class:"menu-card__quantity"},Mn=y("-"),Pn={class:"menu-card__quantity-count"},Tn=y("+");function Un(e,s,n,_,a,i){const l=f("c-button");return n.card?(o(),c("li",fn,[t("div",{onClick:s[0]||(s[0]=(...r)=>i.openDetail&&i.openDetail(...r)),class:"menu-card__header"},[n.card.promo?(o(),c("span",gn,"\u0410\u043A\u0446\u0438\u044F")):H("",!0),t("img",{src:n.card.image||e.$getURL("/img/picture/not-photo.jpg"),alt:"position",class:"menu-card__img"},null,8,vn),bn]),t("div",$n,[t("div",kn,[t("h4",null,u(n.card.title),1),n.card.quantity==null?(o(),c("span",yn,u(i.formatedWeight),1)):(o(),c("p",wn,[t("span",xn,u(n.card.price)+" \u20BD",1),t("span",null,"/ "+u(i.formatedWeight),1)]))]),n.card.quantity==null?(o(),w(l,{key:0,class:"btn"},{default:p(()=>[Cn]),_:1})):(o(),c("div",Ln,[h(l,{onClick:s[1]||(s[1]=r=>i.changeQuantity(n.card,"minus")),class:"btn"},{default:p(()=>[Mn]),_:1}),t("span",Pn,u(n.card.quantity),1),h(l,{onClick:s[2]||(s[2]=r=>i.changeQuantity(n.card,"plus")),class:"btn"},{default:p(()=>[Tn]),_:1})]))])])):H("",!0)}var Hn=v(hn,[["render",Un]]);const qn={name:"MenuCards",components:{MenuCard:Hn},props:{cards:Object}},Rn={class:"menu-card"},Sn={class:"menu-card__list"};function In(e,s,n,_,a,i){const l=f("menu-card");return o(),c("li",Rn,[t("h1",null,u(n.cards.title),1),t("ul",Sn,[(o(!0),c(b,null,$(n.cards.positions,r=>(o(),w(l,{card:r,onOpenDetail:m=>e.$emit("openDetail",r),class:"menu-card__item"},null,8,["card","onOpenDetail"]))),256))])])}var Dn=v(qn,[["render",In]]),On="/pilsner/assets/more-tabs.a8f0058a.svg";const Bn={name:"MenuTabs",components:{Popup:T},props:{tabs:Array,isMarket:Boolean},emits:{selTabHandle:null,fullMenuPopupHandle:null},mounted(){this.changeOnScroll(),window.addEventListener("scroll",this.scrollHandle,{passive:!0})},beforeUnmount(){window.removeEventListener("scroll",this.scrollHandle)},data(){return{lastCur:""}},computed:{tabsListWidth(){return this.$refs.tabList.clientWidth}},methods:{selTab(e){this.tabs.map(s=>s.selected=!1),e.selected=!0,this.$emit("selTabHandle",e)},scrollHandle(){this.changeOnScroll();const e=this.$refs.tabList.children,s=document.querySelectorAll("li.menu-card");let n=window.pageYOffset+123+40,_=[...s].filter(i=>i.offsetTop<n),a=_[_.length-1].id;if(this.lastCur!==a){this.lastCur=a;const i=document.querySelector(`li[data-link="${a}"]`);for(let l of e)l.classList.remove("menu-tab__item--active");i==null||i.classList.add("menu-tab__item--active"),(i.offsetLeft>this.tabsListWidth||i.offsetLeft<this.tabsListWidth+i.offsetParent.scrollLeft)&&i.offsetParent.scrollTo({behavior:"smooth",top:0,left:i.offsetLeft}),_=[]}},changeOnScroll(){this.isMarket&&(document.documentElement.scrollTop>=250?(document.querySelector(".menu-sheets__cards").classList.add("menu-sheets__cards--fixed-tabs"),this.$el.classList.add("menu-tab--fixed")):(document.querySelector(".menu-sheets__cards").classList.remove("menu-sheets__cards--fixed-tabs"),this.$el.classList.remove("menu-tab--fixed")))},fullMenuPopupHandle(){this.$emit("fullMenuPopupHandle")}}},An={class:"menu-tab"},Vn={class:"menu-tab__list",ref:"tabList"},En=["data-link","onClick"];function jn(e,s,n,_,a,i){return o(),c("div",An,[t("img",{onClick:s[0]||(s[0]=(...l)=>i.fullMenuPopupHandle&&i.fullMenuPopupHandle(...l)),src:On,alt:"more",class:"menu-tab__more-tabs"}),t("ul",Vn,[(o(!0),c(b,null,$(n.tabs,l=>(o(),c("li",{class:k(["menu-tab__item","text-tabs-norm",l.selected?"menu-tab__item--active":""]),"data-link":e.$globalLink(l.title),onClick:r=>i.selTab(l)},u(l.title),11,En))),256))],512)])}var Wn=v(Bn,[["render",jn]]);const Nn={name:"NavBar",data(){return{navs:[{svgId:"dashboard",selected:!1,title:"\u041C\u0435\u043D\u044E"},{svgId:"info",selected:!1,title:"\u0423\u0441\u043B\u043E\u0432\u0438\u044F"},{svgId:"menu",selected:!0,title:"\u041A\u0430\u0442\u0430\u043B\u043E\u0433"},{svgId:"delivery",selected:!1,title:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"},{svgId:"cart",selected:!1,title:"\u041A\u043E\u0440\u0437\u0438\u043D\u0430"}]}},computed:{isIos(){return/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())}},methods:{selNav(e){this.navs.map(s=>s.selected=!1),this.$router.push({name:e.svgId}),e.selected=!0}}},Qn={class:"nav-bar__list"},Fn=["onClick"],zn={class:"nav-bar__icon"},Kn=["xlink:href"],Yn={class:"text-small-menu"};function Jn(e,s,n,_,a,i){return o(),c("nav",{class:k({"nav-bar":!0,"nav-bar--ios":i.isIos})},[t("ul",Qn,[(o(!0),c(b,null,$(a.navs,l=>(o(),c("li",{class:k({"nav-bar__item":!0,"nav-bar__item--selected":l.selected}),onClick:r=>i.selNav(l)},[(o(),c("svg",zn,[t("use",{"xlink:href":e.$getURL(`/pwa/icons/nav-pack.svg#${l.svgId}`)},null,8,Kn)])),t("span",Yn,u(l.title),1)],10,Fn))),256))])],2)}var Gn=v(Nn,[["render",Jn]]),Xn="/pilsner/assets/prize.f1c84496.svg",Zn="/pilsner/assets/search.fdf77fe3.svg",ei="/pilsner/assets/crossline.e50af867.svg",ti="/pilsner/assets/reload.9a81db51.svg";const si={name:"MenuSheets",components:{MenuPopupTree:Nt,PositionMenu:on,MenuSpecial:pn,MenuCards:Dn,MenuTabs:Wn,NavBar:Gn,Popup:T},mounted(){},props:{isMarket:Boolean},beforeUnmounted(){document.body.removeAttribute("style")},data(){return{selItem:{}}},computed:B({},Z({menuTreeList:"getMenuTree"})),methods:{selHandle({title:e}){const s=document.querySelector(`li#${this.$globalLink(e)}`);window.scrollTo({behavior:"smooth",top:(s==null?void 0:s.offsetTop)-40,left:0})},selMenuHandle(e){setTimeout(()=>{const s=n=>{n.map(_=>{_.selected=!1,_.childs&&s(_.childs)})};s(this.menuTreeList)},500),this.selHandle(e)},animateReload(e){e.target.classList.contains("popup-menu__reload--pressed")||(e.target.classList.add("popup-menu__reload--pressed"),setTimeout(()=>e.target.classList.remove("popup-menu__reload--pressed"),300))},async openDetail(e){this.selItem=e,document.body.style.background=`url(${this.$refs.position.$refs.positionImage.src}) no-repeat`,await this.$refs.positionMenu.open()&&document.body.removeAttribute("style")},async fullMenuPopupHandle(){const e=await this.$refs.fullMenuPopup.open();e&&this.selMenuHandle(e)}}},ni=M('<header class="menu-sheets__header"><div class="container"><div class="menu-sheets__address"><h2 class="text-big-middle"> \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0430\u0434\u0440\u0435\u0441 </h2><img src="'+q+'" alt=""></div><div class="menu-sheets__actions"><img src="'+Xn+'" alt=""><img src="'+Zn+'" alt=""></div></div></header>',1),ii={class:"menu-sheets__main"},oi={class:"menu-sheets__menu menu-sheets__menu"},li={class:"container"},ai={class:"menu-sheets__cards"},ci={class:"popup-menu__header"},ri=["onClick"],_i=t("h3",null,"\u041D\u0430\u0448\u0435 \u041C\u0415\u041D\u042E",-1);function di(e,s,n,_,a,i){const l=f("menu-special"),r=f("menu-tabs"),m=f("menu-cards"),C=f("nav-bar"),d=f("menu-popup-tree"),g=f("popup"),S=f("position-menu");return o(),c("section",{class:k({"menu-sheets section":!0,"menu-sheets--market":n.isMarket})},[ni,t("main",ii,[n.isMarket?(o(),w(l,{key:0})):H("",!0),t("div",oi,[t("div",li,[h(r,{isMarket:n.isMarket,tabs:this.$store.getters.getTabs,onSelTabHandle:i.selHandle,onFullMenuPopupHandle:i.fullMenuPopupHandle},null,8,["isMarket","tabs","onSelTabHandle","onFullMenuPopupHandle"]),t("ul",ai,[(o(!0),c(b,null,$(this.$store.getters.getCards,x=>(o(),w(m,{onOpenDetail:i.openDetail,cards:x,id:this.$globalLink(x.title)},null,8,["onOpenDetail","cards","id"]))),256))])])])]),t("footer",null,[h(C)]),h(g,{ref:"fullMenuPopup"},{main:p(({close:x})=>[t("div",ci,[t("img",{onClick:I=>x(!1),src:ei,alt:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"},null,8,ri),_i,t("img",{onClick:s[0]||(s[0]=(...I)=>i.animateReload&&i.animateReload(...I)),class:"popup-menu__reload",src:ti,alt:"\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C"})])]),footer:p(({confirm:x})=>[h(d,{list:e.menuTreeList,confirm:x},null,8,["list","confirm"])]),_:1},512),h(g,{class:"popup-position",ref:"positionMenu",swipeHide:""},{footer:p(({confirm:x})=>[h(S,{ref:"position",item:a.selItem,close:x},null,8,["item","close"])]),_:1},512)],2)}var U=v(si,[["render",di]]);const ui=[{path:"/",name:"index",component:Qe},{path:"/dashboard",name:"dashboard",component:Lt},{path:"/menu",name:"menu",component:U,meta:{transition:"none"}},{path:"/menu-market",name:"menu-market",component:U,props:{isMarket:!0},meta:{transition:"none"}},{path:"/delivery",name:"delivery",component:U},{path:"/cart",name:"cart",component:U},{path:"/info",name:"info",component:U},{path:"/:pathMatch(.*)*",redirect:{name:"index"}}],pi=ee({history:te("/pilsner/"),routes:ui,scrollBehavior(){return{top:0}}});var mi={install:e=>{e.config.globalProperties.$getURL=s=>"/pilsner/"+(s.startsWith("/")?s.slice(1):s)}},hi={install:e=>{e.config.globalProperties.$globalLink=s=>s==null?void 0:s.toLowerCase().trim().replaceAll(" ","_")}};function fi(e={}){const{immediate:s=!1,onNeedRefresh:n,onOfflineReady:_,onRegistered:a,onRegisterError:i}=e;let l;const r=async(m=!0)=>{};return"serviceWorker"in navigator&&(l=new se("/pilsner/sw.js",{scope:"/pilsner/",type:"classic"}),l.addEventListener("activated",m=>{m.isUpdate?window.location.reload():_==null||_()}),l.register({immediate:s}).then(m=>{a==null||a(m)}).catch(m=>{i==null||i(m)})),r}fi({onRegistered(e){e.update(),e&&setInterval(()=>{e.update()},60*60*1e3)}});ne.polyfill();ie(ke).use(pi).use(Le).use(mi).use(hi).use(oe).component("CButton",xe).mount("#app");
