if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>n(e,r),c={module:{uri:r},exports:o,require:l};s[r]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.93a3203c.js",revision:null},{url:"assets/index.f811f4b1.css",revision:null},{url:"assets/vendor.eea20c18.js",revision:null},{url:"index.html",revision:"90e4062e6664629fcfe5d418745f97e4"},{url:"pwa/fonts/fonts.css",revision:"5ac83756a8e11b5349a9c6ec8bb519f1"},{url:"manifest.webmanifest",revision:"203abe3bf14a3bcc89d174550eca8bec"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
