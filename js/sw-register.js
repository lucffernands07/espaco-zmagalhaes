// js/sw-register.js

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/espaco-zmagalhaes/service-worker.js")
    .then(() => console.log("✅ Service Worker registrado com sucesso"))
    .catch(err => console.log("⚠️ Erro ao registrar o Service Worker:", err));
}
