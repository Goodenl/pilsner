if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>n(e,r),f={module:{uri:r},exports:o,require:l};s[r]=Promise.all(i.map((e=>f[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.14fa209c.js",revision:null},{url:"assets/index.2524af45.css",revision:null},{url:"assets/vendor.eefe3233.js",revision:null},{url:"index.html",revision:"a235c066f4c017a4c58e4937028bfed9"},{url:"pwa/fonts/fonts.css",revision:"d655563f1bea02e01eec324b0e900827"},{url:"manifest.webmanifest",revision:"50ade3c91f05c889b5e348b5c1feaf15"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
