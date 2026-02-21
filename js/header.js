// header.js
const burgerButton = document.querySelector(".header__burger");
const navMenu = document.querySelector(".header__nav");

function closeMenu() {
  if (!burgerButton || !navMenu) return;
  burgerButton.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("header__nav--open");
}

if (burgerButton && navMenu) {
  burgerButton.addEventListener("click", () => {
    const isOpen = burgerButton.getAttribute("aria-expanded") === "true";
    burgerButton.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("header__nav--open", !isOpen);
  });

  navMenu.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link) closeMenu();
  });
}
