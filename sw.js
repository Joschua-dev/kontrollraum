// Minimaler Service Worker – dient nur dazu, die App installierbar zu machen.
// Es wird absichtlich NICHT gecacht, damit immer die neueste Version geladen wird.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  self.clients.claim();
});
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
