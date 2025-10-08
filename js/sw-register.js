if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/espaco-zmagalhaes/service-worker.js")
      .then(reg => console.log("Service Worker registrado", reg))
      .catch(err => console.log("Falha ao registrar Service Worker", err));
  });
}
