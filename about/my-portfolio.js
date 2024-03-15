'use strict';
const classNames = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15","body"];
const audio = new Audio("../underwater-whale-and-diving-sound-ambient-116185.mp3");

function openPopUp() {
  document.getElementById('navbar').removeAttribute("style");
  for(let i = 0; i < classNames.length; i++){
    document.getElementById(classNames[i]).classList.add("text-bg-secondary");
  }
  document.getElementById("exit-button").style.display = "block";
  document.getElementById("pop-up").style.display = "block";
  const frame = document.getElementById("frame");
  const loader = document.getElementById("loader");
  const loading = document.getElementById("loading");
  loader.style.display = "block";
  loading.style.display = "block";
  loading.animate(
    {
      opacity: [
        "1", "0.1", "0.9"
      ],
    },
    {
      duration: 1250,
      iterations: Infinity,
    },
  )
  setTimeout(function() {
    loader.style.display = "none";
    loading.style.display = "none";
    frame.style.display = "block";
  }, 2500);
  audio.play();
}

function closePopUp() {
  for(let i = 0; i < classNames.length; i++){
    document.getElementById(classNames[i]).classList.remove("text-bg-secondary");
  }
  audio.pause();
  audio.currentTime = 0;
  document.getElementById('navbar').setAttribute("style", "background-color:rgb(248, 249, 250)!important;");
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("exit-button").style.display = "none";
  const frame = document.getElementById("frame");
}

window.addEventListener("DOMContentLoaded", () => {
  const loadingPage = document.getElementById("loading-page");
  loadingPage.style.display = "block";
  document.body.style.backgroundColor = "yellow";
  document.getElementById("main-page").style.display = "none";
  window.setTimeout(function() {
    loadingPage.style.display = "none";   
    document.body.style.backgroundColor = "white";
    document.getElementById("main-page").style.display = "block";
    new TypeIt("#navbar-brand", {
      speed: 50,
      waitUntilVisible: true
    })
    .type("Hiro Takao", {delay: 300 })
    .move(-6)
    .type("ta", {delay: 300})
    .delete(1, {delay: 1000})
    .type("o")
    .go();
  }, 9500);
});