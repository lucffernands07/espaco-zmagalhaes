const CACHE_NAME = "espaco-zmagalhaes-v1";
const FILES_TO_CACHE = [
  "/espaco-zmagalhaes/",                   // index.html
  "/espaco-zmagalhaes/index.html",
  "/espaco-zmagalhaes/css/style.css",
  "/espaco-zmagalhaes/js/script.js",
  "/espaco-zmagalhaes/js/sw-register.js",
  "/espaco-zmagalhaes/img/logo_zm.png"
];

// Instala e faz cache inicial
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => key !== CACHE_NAME && caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Responde com cache ou busca online
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
