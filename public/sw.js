if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>n(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/300.gif",revision:"11edcef46533e176121200d1803339bc"},{url:"/_next/static/LwZ4jtBTrVCA6SDTaQmlT/_buildManifest.js",revision:"2b588ec6c4079ea7e2cf0d491f08b3f0"},{url:"/_next/static/LwZ4jtBTrVCA6SDTaQmlT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/458-c1f9b29a09c59c54.js",revision:"c1f9b29a09c59c54"},{url:"/_next/static/chunks/834-b012cf7cd93961a6.js",revision:"b012cf7cd93961a6"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-24337e41c3359801.js",revision:"24337e41c3359801"},{url:"/_next/static/chunks/pages/_app-8dbd487371cb4a3a.js",revision:"8dbd487371cb4a3a"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/download/%5Bname%5D-bc16d1c4df4183ed.js",revision:"bc16d1c4df4183ed"},{url:"/_next/static/chunks/pages/index-97b334f756db0120.js",revision:"97b334f756db0120"},{url:"/_next/static/chunks/pages/library-c8536ad12d67886e.js",revision:"c8536ad12d67886e"},{url:"/_next/static/chunks/pages/singer/%5Bname%5D-d5fdf73111cc8359.js",revision:"d5fdf73111cc8359"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"d7b038a63b619762"},{url:"/_next/static/css/c713d34442d7cb4b.css",revision:"c713d34442d7cb4b"},{url:"/background.png",revision:"5b957cf18dfbbbd278c2c9dfbefd95c6"},{url:"/favicon.ico",revision:"6b431220f1e81c518a169af4e7170f39"},{url:"/icon-192x192.png",revision:"a2ffd7cbd213c42b55ac95530a6e8e35"},{url:"/icon-256x256.png",revision:"56294f6ea07c70410b62664639d00034"},{url:"/icon-384x384.png",revision:"c1851d51c8abe07c02398d3da4741651"},{url:"/icon-512x512.png",revision:"580de5c95514cef9f83a975a616bbc0d"},{url:"/manifest.json",revision:"ddde09c0c602b78b893e893a92bb41f2"},{url:"/music.gif",revision:"0bb386b52c0ea174f8c9b372811e5b29"},{url:"/singer.gif",revision:"0ab81309af9e56f426e4cda784e33297"},{url:"/songs.json",revision:"df1f9e1d0b7f06bf524663ca9a5457d4"},{url:"/songsbysinger.json",revision:"16542289bfa48c00c182a69ac6b21d33"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));