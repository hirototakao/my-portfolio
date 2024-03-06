'use strict';
const classNames = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15","body"];

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
        "1", "0.2"
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
}

function closePopUp() {
  for(let i = 0; i < classNames.length; i++){
    document.getElementById(classNames[i]).classList.remove("text-bg-secondary");
  }
  document.getElementById('navbar').setAttribute("style", "background-color:rgb(248, 249, 250)!important;");
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("exit-button").style.display = "none";
  const frame = document.getElementById("frame");
}