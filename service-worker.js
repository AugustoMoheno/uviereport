if(!self.define){let o,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const o=document.createElement("script");o.src=r,o.onload=e,document.head.appendChild(o)}else o=r,importScripts(r),e()})).then((()=>{let o=e[r];if(!o)throw new Error(`Module ${r} didn’t register its module`);return o})));self.define=(i,l)=>{const u=o||("document"in self?document.currentScript.src:"")||location.href;if(e[u])return;let s={};const n=o=>r(o,u),t={module:{uri:u},exports:s,require:n};e[u]=Promise.all(i.map((o=>t[o]||n(o)))).then((o=>(l(...o),s)))}}define(["./workbox-2d118ab0"],(function(o){"use strict";o.setCacheNameDetails({prefix:"uviereport"}),self.addEventListener("message",(o=>{o.data&&"SKIP_WAITING"===o.data.type&&self.skipWaiting()})),o.precacheAndRoute([{url:"/uviereport/css/100.51739d53.css",revision:null},{url:"/uviereport/css/250.abbdbf43.css",revision:null},{url:"/uviereport/css/324.45d9a737.css",revision:null},{url:"/uviereport/css/332.019d3075.css",revision:null},{url:"/uviereport/css/50.3e2b6cfe.css",revision:null},{url:"/uviereport/css/554.56191d90.css",revision:null},{url:"/uviereport/css/81.c9feedc8.css",revision:null},{url:"/uviereport/css/chunk-vendors.a5dd710e.css",revision:null},{url:"/uviereport/fonts/MaterialIcons-Regular.4f3ab3a1.eot",revision:null},{url:"/uviereport/fonts/MaterialIcons-Regular.53ae192b.woff2",revision:null},{url:"/uviereport/fonts/MaterialIcons-Regular.73676d33.ttf",revision:null},{url:"/uviereport/fonts/MaterialIcons-Regular.86426dd8.woff",revision:null},{url:"/uviereport/fonts/Roboto-Black.2eaa390d.woff2",revision:null},{url:"/uviereport/fonts/Roboto-Black.b25f67ad.woff",revision:null},{url:"/uviereport/fonts/Roboto-BlackItalic.7dc03ee4.woff2",revision:null},{url:"/uviereport/fonts/Roboto-BlackItalic.c8dc6424.woff",revision:null},{url:"/uviereport/fonts/Roboto-Bold.447291a8.woff2",revision:null},{url:"/uviereport/fonts/Roboto-Bold.fc482e61.woff",revision:null},{url:"/uviereport/fonts/Roboto-BoldItalic.1b15168e.woff2",revision:null},{url:"/uviereport/fonts/Roboto-BoldItalic.e26ba339.woff",revision:null},{url:"/uviereport/fonts/Roboto-Light.0e01b6cd.woff2",revision:null},{url:"/uviereport/fonts/Roboto-Light.603ca9a5.woff",revision:null},{url:"/uviereport/fonts/Roboto-LightItalic.1b5e142f.woff",revision:null},{url:"/uviereport/fonts/Roboto-LightItalic.232ef4b2.woff2",revision:null},{url:"/uviereport/fonts/Roboto-Medium.45753203.woff2",revision:null},{url:"/uviereport/fonts/Roboto-Medium.6e1ae5f0.woff",revision:null},{url:"/uviereport/fonts/Roboto-MediumItalic.872f7060.woff2",revision:null},{url:"/uviereport/fonts/Roboto-MediumItalic.e06fb533.woff",revision:null},{url:"/uviereport/fonts/Roboto-Regular.475ba9e4.woff2",revision:null},{url:"/uviereport/fonts/Roboto-Regular.bcefbfee.woff",revision:null},{url:"/uviereport/fonts/Roboto-RegularItalic.0668fae6.woff",revision:null},{url:"/uviereport/fonts/Roboto-RegularItalic.e3a9ebda.woff2",revision:null},{url:"/uviereport/fonts/Roboto-Thin.c13c157c.woff",revision:null},{url:"/uviereport/fonts/Roboto-Thin.f7a95c9c.woff2",revision:null},{url:"/uviereport/fonts/Roboto-ThinItalic.1111028d.woff",revision:null},{url:"/uviereport/fonts/Roboto-ThinItalic.b0e084ab.woff2",revision:null},{url:"/uviereport/index.html",revision:"6d4752dbce6e67ddac94d8dab0780bdf"},{url:"/uviereport/js/100.dd12c293.js",revision:null},{url:"/uviereport/js/101.5af5ee49.js",revision:null},{url:"/uviereport/js/250.41cb40b4.js",revision:null},{url:"/uviereport/js/324.90a32c3a.js",revision:null},{url:"/uviereport/js/332.7154eacb.js",revision:null},{url:"/uviereport/js/50.90264e32.js",revision:null},{url:"/uviereport/js/554.85044d01.js",revision:null},{url:"/uviereport/js/748.6a3f9d0e.js",revision:null},{url:"/uviereport/js/81.21aa88cf.js",revision:null},{url:"/uviereport/js/about.535ca365.js",revision:null},{url:"/uviereport/js/app.083f97fe.js",revision:null},{url:"/uviereport/js/chunk-vendors.d2bbd678.js",revision:null},{url:"/uviereport/manifest.json",revision:"cb07e0af7cdf5fd95c7da61a61b5307c"},{url:"/uviereport/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
