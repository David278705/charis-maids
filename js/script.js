document.addEventListener("DOMContentLoaded", function () {
  // Manejo del preloader
  setTimeout(function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("fade-out");

    setTimeout(function () {
      preloader.style.display = "none";
      const mainContent = document.getElementById("main-content");
      mainContent.style.display = "block";

      // Forzar recalculación de estilos y animar el fade-in
      setTimeout(function () {
        mainContent.classList.add("fade-in");
      }, 50);
    }, 500);
  }, 1000);

  // Quitar efecto "dirty" y agregar "sparkle" al logo
  setTimeout(function () {
    const logo = document.querySelector(".logo");
    logo.classList.remove("dirty");
    logo.classList.add("sparkle");
  }, 100);
});

// Menú hamburguesa (móvil)
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Cerrar menú móvil al seleccionar un enlace
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

// IntersectionObserver para animación en scroll
const sections = document.querySelectorAll(".fade-section");
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  observer.observe(section);
});
