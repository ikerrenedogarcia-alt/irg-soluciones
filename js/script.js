// Año del footer siempre actualizado
document.getElementById("year").textContent = new Date().getFullYear();

// Pequeña animación de aparición al hacer scroll
const revealTargets = document.querySelectorAll(
  ".problem-card, .service-card, .step-card, .why__list li"
);

if ("IntersectionObserver" in window) {
  revealTargets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
