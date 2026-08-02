document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("nav-open");
    });
  }

  document.querySelectorAll("[data-faq] details").forEach((detail) => {
    detail.addEventListener("toggle", () => {
      detail.classList.toggle("open", detail.open);
    });
  });
});
