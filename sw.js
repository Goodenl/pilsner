if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>n(e,r),c={module:{uri:r},exports:o,require:l};s[r]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.0358dd00.js",revision:null},{url:"assets/index.ae35afea.css",revision:null},{url:"assets/vendor.d5a2c40e.js",revision:null},{url:"index.html",revision:"ad374711ba3230824ebb3a56cfc7cbf2"},{url:"pwa/fonts/fonts.css",revision:"5ac83756a8e11b5349a9c6ec8bb519f1"},{url:"manifest.webmanifest",revision:"258e949e763ad91c06213c33b5537bee"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
