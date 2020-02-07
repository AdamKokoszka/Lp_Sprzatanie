new WOW().init();

let offer = document.querySelectorAll(".offer_single_icon");
for (i = 0; i < offer.length; i++){
  offer[i].classList.add("wow");
  offer[i].classList.add("animate");
  offer[i].classList.add("fadeInDown");
  offer[i].setAttribute("data-wow-duration", "1500ms");
  offer[i].setAttribute("data-wow-delay", "500ms");
}

let real = document.querySelectorAll(".realization_single_icon");
for (j = 0; j < real.length; j++){
  real[j].classList.add("wow");
  real[j].classList.add("animate");
  real[j].classList.add("fadeIn");
  real[j].setAttribute("data-wow-duration", "1s");
  real[j].setAttribute("data-wow-delay", "500ms");
}

let trust = document.querySelectorAll(".trustus_icons>div");
for (j = 0; j < trust.length; j++){
  trust[j].classList.add("wow");
  trust[j].classList.add("animate");
  trust[j].classList.add("fadeIn");
  trust[j].setAttribute("data-wow-duration", "2s");
  trust[j].setAttribute("data-wow-delay", "100ms");
}
let h1 = document.querySelectorAll("h1");
for (j = 0; j < h1.length; j++){
  h1[j].classList.add("wow");
  h1[j].classList.add("animate");
  h1[j].classList.add("pulse");
  h1[j].setAttribute("data-wow-duration", "3s");
  h1[j].setAttribute("data-wow-delay", "500ms");
}

//Nawigation
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}