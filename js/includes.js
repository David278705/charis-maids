async function include(selector, url) {
  const container = document.querySelector(selector);
  if (!container) return;
  const res = await fetch(url);
  const html = await res.text();
  container.innerHTML = html;

  // Marca el link activo
  const path = location.pathname.replace(/\/$/, "") || "/";
  container.querySelectorAll(".nav-link").forEach((a) => {
    if (a.getAttribute("href").replace(/\/$/, "") === path) {
      a.classList.add("text-blue-600", "font-semibold");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  include("#site-header", "/partials/header.html");
  include("#site-footer", "/partials/footer.html");
});
