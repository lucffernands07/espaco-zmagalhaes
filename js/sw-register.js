if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/espaco-zmagalhaes/service-worker.js")
      .then(reg => console.log("SW registrado", reg))
      .catch(err => console.log("Falha ao registrar SW", err));
  });
}
