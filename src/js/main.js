import { gsap } from "gsap";

const toggleDarkModeBtn2 = document.querySelector("#dark-mode-btn-2");
const toggleLightModeBtn2 = document.querySelector("#light-mode-btn-2");
// On commence par créer deux variables JavaScript,
// pour sélectionner chacune un des deux boutons (light et dark)
const toggleDarkModeBtn = document.querySelector("#dark-mode-btn");
const toggleLightModeBtn = document.querySelector("#light-mode-btn");

toggleDarkModeBtn2.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "dark");
});
toggleDarkModeBtn.addEventListener("click", function () {
  // Lors du clic sur le bouton "Dark mode", nous voulons que
  // l'attribut data-theme de la balise <html> prenne pour valeur "dark"
  document.querySelector("html").setAttribute("data-theme", "dark");
});

toggleLightModeBtn2.addEventListener("click", function () {
  document.querySelector("html").setAttribute("data-theme", "light");
});
// Clic sur "Light mode" → passage au thème clair
toggleLightModeBtn.addEventListener("click", function () {
  // Lors du clic sur le bouton "Light mode", nous voulons que
  // l'attribut data-theme de la balise <html> prenne pour valeur "light"
  document.querySelector("html").setAttribute("data-theme", "light");
});

const burgerButton = document.querySelector(".burger");
const burgerPopUp = document.querySelector(".burger-nav-container");

burgerButton.addEventListener("click", function () {
  burgerPopUp.classList.toggle("hidden");
});
