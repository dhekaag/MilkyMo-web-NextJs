if(!self.define){let e,n={};const s=(s,a)=>(s=new URL(s+".js",a).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let i={};const r=e=>s(e,t),m={module:{uri:t},exports:i,require:r};n[t]=Promise.all(a.map((e=>m[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6flEbenTwkX2Z50ckmPnm/_buildManifest.js",revision:"3a9b05f0dfa9b930a3402ec3996aaef4"},{url:"/_next/static/6flEbenTwkX2Z50ckmPnm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1365.44b70c1d2948998a.js",revision:"44b70c1d2948998a"},{url:"/_next/static/chunks/2005-460eb13886e73547.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/2539-da86eff34003081f.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/275-62aa1508597115a7.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/5885-31a278e9fed68b4e.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/6634-a21c4f72befa0a06.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/675eacc3.3d37d74e47a790f4.js",revision:"3d37d74e47a790f4"},{url:"/_next/static/chunks/7350-296017d40ae0de29.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/8163-fedc267409ace30e.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/8346-96de054331e188bf.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/8905-4c83bd23bf817076.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/a765029f-23cb5570be0cc10f.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/blog-posts/create/page-faa559697100e2d7.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/blog-posts/edit/%5Bid%5D/page-ae7dea99de20d085.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/blog-posts/layout-0bf49678c6bcd12c.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/blog-posts/page-d2ac26971736c67c.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/blog-posts/show/%5Bid%5D/page-01806a415876de9a.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/categories/create/page-afbf9f0c97555287.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/categories/edit/%5Bid%5D/page-60615e8485e124ca.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/categories/layout-437f20bb35167110.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/categories/page-735d2133204f7412.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/categories/show/%5Bid%5D/page-1687deed5dd815ba.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/daftar-admin/create/page-9c69cee81cacc8e9.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/daftar-admin/edit/%5Bid%5D/page-8f37c0c508ee10ea.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/daftar-admin/layout-6bd2967b5d61ce85.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/daftar-admin/page-9e77c6a0718550c1.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/daftar-admin/show/%5Bid%5D/page-7e5f0fff89735ba6.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/daftar-peternak/create/page-df2ffac7366a7c02.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/daftar-peternak/edit/%5Bid%5D/page-d68d0fee5019f018.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/daftar-peternak/layout-ea5ae03e6af66544.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/daftar-peternak/page-fedaef1d806b5b57.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/daftar-peternak/show/%5Bid%5D/page-bfada2b968162822.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/forgot-password/page-b5d13261d05063a0.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/layout-3cd91692fa650759.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/login/page-d3df73d6cd07df34.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/not-found-e91f9cf4b2575756.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/page-dc040a41eb4af62c.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/penyetoran-susu/create/page-9a21a0999f0841b9.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/penyetoran-susu/layout-18ec0f6103f5f304.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/penyetoran-susu/page-3dcf520b9df55700.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/register/page-a0114931dee9aa4e.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/stok-penjualan-susu/create/page-37d4c09a5c4a2a53.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/stok-penjualan-susu/layout-0d47ad39635e8635.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/app/stok-penjualan-susu/page-694afc129d8d57a7.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/b27dc69b-e90bb229cbc86840.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/be9799c5-896ee101183611fd.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/framework-c86f4b55c4d53453.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/main-1d33a6e324205fbc.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/main-app-450eed59281f6c24.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/pages/_app-ce3556c52ac083b1.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/pages/_error-097a7f5a3b6367a7.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-211dd6ea0d7e787f.js",revision:"6flEbenTwkX2Z50ckmPnm"},{url:"/_next/static/css/335fc7b1d269a890.css",revision:"335fc7b1d269a890"},{url:"/_next/static/css/3cdca591b056ce4d.css",revision:"3cdca591b056ce4d"},{url:"/_next/static/media/splash1024.a6eea39d.png",revision:"fdd9e71530d636f32e310e4a5261dd69"},{url:"/icon-192x192.png",revision:"214f93f05a01ff4b0f467d344452cda8"},{url:"/icon-256x256.png",revision:"45cc59d57b9b92715aae5ff95d4cfd47"},{url:"/icon-384x384.png",revision:"ddc131823ab5b01f3b98be4451f30047"},{url:"/icon-512x512.png",revision:"efacf7885bf0f6d5883ecba14a6e66bc"},{url:"/manifest.json",revision:"1627df9530682c565f1b6927296ef4d6"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:n}})=>!(!e||n.startsWith("/api/auth/callback")||!n.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:n},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!n.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:n},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!n.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:n})=>n&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
