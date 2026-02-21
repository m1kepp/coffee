// accordion.js
function setPanelState(button, panel, isOpen) {
  button.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    panel.hidden = false;
    panel.style.maxHeight = "0px";
    requestAnimationFrame(() => {
      panel.style.maxHeight = panel.scrollHeight + "px";
    });
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    requestAnimationFrame(() => {
      panel.style.maxHeight = "0px";
    });
    window.setTimeout(() => {
      panel.hidden = true;
    }, 260);
  }
}

// init: закрываем все панели
document.querySelectorAll(".accordion__panel").forEach((panel) => {
  panel.hidden = true;
  panel.style.maxHeight = "0px";
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".accordion__button");
  if (!button) return;

  const panelId = button.getAttribute("aria-controls");
  if (!panelId) return;

  const panel = document.getElementById(panelId);
  if (!panel) return;

  const isOpen = button.getAttribute("aria-expanded") === "true";
  setPanelState(button, panel, !isOpen);
});
