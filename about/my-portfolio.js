'use strict';
const classNames = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15","body"];

function openPopUp() {
  document.getElementById("pop-up").style.display = "block";
  document.getElementById("exit-button").style.display = "block";
  document.getElementById('navbar').removeAttribute("style");
  for(let i = 0; i < classNames.length; i++){
    document.getElementById(classNames[i]).classList.add("text-bg-secondary");
  }
}

function closePopUp() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("exit-button").style.display = "none";
    document.getElementById('navbar').setAttribute("style", "background-color:rgb(248, 249, 250)!important;");
    for(let i = 0; i < classNames.length; i++){
      document.getElementById(classNames[i]).classList.remove("text-bg-secondary");
    }
}