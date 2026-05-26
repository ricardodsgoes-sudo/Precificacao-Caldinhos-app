// Delicaldos Service Worker
// Estratégia: network-first para HTML (sempre puxa atualizações),
// cache-first para assets estáticos (logo, manifest).

const VERSAO = 'delicaldos-v1';
const ASSETS = [
  './',
  './index.html',
  './delicaldos-logo.jpg',
  './manifest.json'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(VERSAO).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((nomes) =>
      Promise.all(nomes.filter((n) => n !== VERSAO).map((n) => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (evt) => {
  const req = evt.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const ehHtml = req.mode === 'navigate' || req.destination === 'document' || url.pathname.endsWith('.html');

  if (ehHtml) {
    // Network-first: tenta puxar do servidor, cai pro cache se offline
    evt.respondWith(
      fetch(req).then((resp) => {
        const clone = resp.clone();
        caches.open(VERSAO).then((c) => c.put(req, clone));
        return resp;
      }).catch(() => caches.match(req).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first pro resto (imagens, manifest, etc.)
  evt.respondWith(
    caches.match(req).then((resp) => resp || fetch(req).then((r) => {
      if (r.ok) {
        const clone = r.clone();
        caches.open(VERSAO).then((c) => c.put(req, clone));
      }
      return r;
    }))
  );
});
