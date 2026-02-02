"use strict";
const showButtons = document.querySelectorAll(".show-modal");
const closeButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function displayModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function closeModalByEscape(e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
}

for (let i = 0; i < showButtons.length; i++) {
  showButtons[i].addEventListener("click", displayModal);
}

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", closeModalByEscape);
