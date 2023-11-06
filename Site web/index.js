/* ---------   Voir si le site est en arrière plan et ou caché  ---------------*/

let siteVisible = true;
document.addEventListener("visibilitychange", function () {
  siteVisible = !document.hidden;

  if (siteVisible) {
    setTimeout(mainAnimation, 2500);
  }
});

/* -------------  Création d'éléments div de la section animatedBackground  --------------- */

const mainAnimation = () => {
  if (!siteVisible) {
    return;
  }

  const squareCreate = document.createElement("div");
  const selectBack = document.querySelector(".animatedBackground");
  const size = Math.random() * 80 + 20 + "px";
  const posY = Math.random() * 100 - 200 + "px";
  const posX = Math.random() * 100 + "vw";
  const degX = Math.random() * 90 - 45;
  const degY = Math.random() * 90 - 45;

  squareCreate.classList.add("square");
  selectBack.appendChild(squareCreate);
  squareCreate.style.width = size;
  squareCreate.style.height = size;
  squareCreate.style.bottom = posY;
  squareCreate.style.left = posX;
  squareCreate.style.transform = `skew(${degX}deg, ${degY}deg)`;
  squareCreate.style.setProperty("--opacity", Math.random() * 100 - 100 + "%");
  squareCreate.addEventListener("animationend", () => {
    squareCreate.remove();
  });
  let clicked = false;
  squareCreate.addEventListener("click", () => {
    squareCreate.style.background = "red";
    squareCreate.style.transform = `scale(0.5) skew(${degX}deg, ${degY}deg) rotate(50deg)`;
    squareCreate.style.zIndex = "3";
    clicked = true;
  });
  squareCreate.addEventListener("mouseenter", () => {
    if (clicked == false) {
      squareCreate.style.background = "#c2abab";
    }
  });

  setTimeout(mainAnimation, 2500);
};

mainAnimation();

/* -------------   Evenements pour la section .avis  --------------------- */

const chiffrement = document.querySelectorAll(".chiffrement");
const secretText = document.querySelectorAll(".secretText");

chiffrement.forEach((chiffrements, i) => {
  chiffrements.addEventListener("mouseover", () => {
    secretText[i].style.opacity = "1";
  });

  chiffrements.addEventListener("mouseout", () => {
    secretText[i].style.opacity = "0";
  });
});

/* --------------- Bouton menu responsive ------------------ */

const headerView = document.querySelector("header");
const menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  headerView.classList.toggle("menu2");
});

/* -------------- Evenement scroll ----------------- */

const imgScroll = document.querySelector(".imgScroll");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1400 && window.scrollY <= 2520) {
    imgScroll.style.opacity = "1";
    imgScroll.style.transform = "translate(0)";
  } else {
    imgScroll.style.opacity = "0";
    imgScroll.style.transform = "translate(400px)";
  }
});

const infoLogo = document.querySelector(".infoLogo");
window.addEventListener("scroll", () => {
  const scrollVh =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);

  if (scrollVh >= 0.18 && scrollVh <= 0.455) {
    infoLogo.style.opacity = "1";
    infoLogo.style.transform = "translate(0)";
  } else {
    infoLogo.style.opacity = "0";
    infoLogo.style.transform = "translate(-1900px)";
  }
});
const div1 = document.querySelector(".div1");
window.addEventListener("scroll", () => {
  const scrollVh =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);

  if (scrollVh >= 0.12 && scrollVh <= 0.355) {
    div1.style.opacity = "1";
    div1.style.transform = "translate(0)";
  } else {
    div1.style.opacity = "0";
    div1.style.transform = "translate(1900px)";
  }
});
