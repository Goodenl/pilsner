import{f as v,g as l}from"./reload.41ccf9bc.js";import{_ as m}from"./index.a21505ad.js";import{r as u,o as a,c as n,b as s,y as x,t as _,i as p,f as d,e as f,k as b,h,F as k,l as C}from"./vendor.44cb18f7.js";var q="/pilsner/assets/menu-card.697547f5.jpg",j="/pilsner/assets/info.cd37849b.svg";const D={name:"MenuCard",props:{card:Object},methods:{changeQuantity(c,t){t.toLowerCase().trim()=="plus"?c.quantity++:t.toLowerCase().trim()=="minus"&&c.quantity&&c.quantity--},openDetail(){this.$emit("openDetal")}}},N={class:"menu-card__item"},V={key:0,class:"menu-card__promo-text"},w=b('<img src="'+q+'" alt="position" class="menu-card__img"><div class="menu-card__icons"><img src="'+j+'" alt="" class="menu-card__info"><ul class="menu-card__icons-list"><li class="menu-card__icons-item"><img src="'+v+'" alt=""></li><li class="menu-card__icons-item"><img src="'+l+'" alt=""></li><li class="menu-card__icons-item"><img src="'+l+'" alt=""></li></ul></div>',2),B={class:"menu-card__footer"},M={class:"menu-card__text"},$={key:0,class:"text-med-norm text-primary-light"},L={key:1,class:"text-med-norm text-primary-light menu-card__quantity-text"},O=s("span",{class:"text-med-bold text-accent"},"650 \u20BD",-1),Q=s("span",null,"/ 1050 \u0433",-1),F=[O,Q],S=s("h3",{class:"text-white"},"545 \u20BD",-1),E={key:1,class:"menu-card__quantity"},T=h("-"),z={class:"menu-card__quantity-count"},A=h("+");function G(c,t,e,y,g,o){const r=u("c-button");return a(),n("li",N,[s("div",{onClick:t[0]||(t[0]=(...i)=>o.openDetail&&o.openDetail(...i)),class:"menu-card__header"},[e.card.promo?(a(),n("span",V,"\u0410\u043A\u0446\u0438\u044F")):x("",!0),w]),s("div",B,[s("div",M,[s("h4",null,_(e.card.title),1),e.card.quantity==null?(a(),n("span",$,"1050 \u0433")):(a(),n("p",L,F))]),e.card.quantity==null?(a(),p(r,{key:0,class:"btn"},{default:d(()=>[S]),_:1})):(a(),n("div",E,[f(r,{onClick:t[1]||(t[1]=i=>o.changeQuantity(e.card,"minus")),class:"btn"},{default:d(()=>[T]),_:1}),s("span",z,_(e.card.quantity),1),f(r,{onClick:t[2]||(t[2]=i=>o.changeQuantity(e.card,"plus")),class:"btn"},{default:d(()=>[A]),_:1})]))])])}var H=m(D,[["render",G]]);const I={name:"MenuCards",components:{MenuCard:H},props:{cards:Object}},J={class:"menu-card"},K={class:"menu-card__list"};function P(c,t,e,y,g,o){const r=u("menu-card");return a(),n("li",J,[s("h1",null,_(e.cards.tabName),1),s("ul",K,[(a(!0),n(k,null,C(e.cards.cards,i=>(a(),p(r,{key:i.title,card:i,onOpenDetal:t[0]||(t[0]=R=>c.$emit("openDetal")),class:"menu-card__item"},null,8,["card"]))),128))])])}var Y=m(I,[["render",P]]);export{Y as default};
