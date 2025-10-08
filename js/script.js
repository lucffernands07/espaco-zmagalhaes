const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active de todos
    buttons.forEach(b => b.classList.remove("active"));
    sections.forEach(sec => {
      sec.classList.remove("active");
    });

    // Ativa o clicado
    btn.classList.add("active");
    const target = document.getElementById(btn.dataset.section);

    // Fade suave
    target.classList.add("active");
  });
});
