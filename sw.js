if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>n(e,t),u={module:{uri:t},exports:o,require:l};s[t]=Promise.all(i.map((e=>u[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.b7ed7d28.js",revision:null},{url:"assets/index.c174774c.css",revision:null},{url:"assets/MenuCards.a173b798.js",revision:null},{url:"assets/MenuSheets.11328e9d.js",revision:null},{url:"assets/vendor.dfe7fb94.js",revision:null},{url:"index.html",revision:"c6432ce4655562618d6c7c4b0271d553"},{url:"pwa/fonts/fonts.css",revision:"d655563f1bea02e01eec324b0e900827"},{url:"manifest.webmanifest",revision:"50ade3c91f05c889b5e348b5c1feaf15"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
