const toggle = document.getElementById("toggle");
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

// Toggle navigation (click event for toggle icon).
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// Show modal (click event for Sign Up button).
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Hide modal (click event for X button).
close.addEventListener("click", () => modal.classList.remove("show-modal"));
