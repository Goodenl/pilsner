if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>n(e,t),u={module:{uri:t},exports:l,require:o};s[t]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.8564e69b.css",revision:null},{url:"assets/index.fc69b0b1.js",revision:null},{url:"assets/MenuCards.e3264bd6.js",revision:null},{url:"assets/MenuSheets.096cac9e.js",revision:null},{url:"assets/MenuSheetsMarket.b40e5648.js",revision:null},{url:"assets/reload.06b2462c.js",revision:null},{url:"assets/vendor.44cb18f7.js",revision:null},{url:"index.html",revision:"6ee1e359e63b7b99a4d18f1f196def51"},{url:"pwa/fonts/fonts.css",revision:"d655563f1bea02e01eec324b0e900827"},{url:"manifest.webmanifest",revision:"50ade3c91f05c889b5e348b5c1feaf15"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
