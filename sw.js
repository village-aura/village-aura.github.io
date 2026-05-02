// Village Aura Service Worker — network-first for navigation
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if(e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request, {cache:'no-store'})
        .catch(() => caches.match(e.request))
    );
  }
});
