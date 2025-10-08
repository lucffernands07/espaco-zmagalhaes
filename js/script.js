// Controle de seções e transição fade
const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    sections.forEach(sec => sec.classList.remove("active"));

    btn.classList.add("active");
    const target = document.getElementById(btn.dataset.section);
    target.classList.add("active");
  });
});
