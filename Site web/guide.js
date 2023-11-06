/* --------------- Bouton menu responsive ------------------ */

const headerView = document.querySelector("header");
const menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  headerView.classList.toggle("menu2");
});
