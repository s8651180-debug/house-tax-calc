const cacheName = 'house-tax-v1';
const assets = ['./index.html', './manifest.json'];

// 安裝 Service Worker 並快取檔案
self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

// 攔截請求，優先讀取快取（實現離線運作）
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});