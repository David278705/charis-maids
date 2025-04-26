document.addEventListener("DOMContentLoaded", () => {
  new Swup({
    containers: ["#swup"], // el main de arriba
    animationSelector: '[class*="transition-"]',
  });
});
