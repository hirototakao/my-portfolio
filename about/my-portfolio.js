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
  const flex = document.getElementById("flex");    
  console.log(document.documentElement.clientWidth);
  if(document.documentElement.clientWidth >= 465 && document.documentElement.clientWidth <= 769){
    flex.innerHTML = `
      <div class="flex" id="flex">
        <div style="width:45%; height:400px;">
          <div style="margin-top:10px; width:100%;">
              <div class="text-center display-4">April, 2023</div>
              <div style="border:2px solid red; width:100%;"></div>
              <div class="text-center" style="margin:32px 0 22px 0;">
                <span class="h5">Entered <a href="https://nnn.ed.jp/">N high school</a></span>
              </div>
              <p style="width:100%;">N high school, which changed my life in any way such as programming, clubs, N-yobikou and events,  which the school able to provides. It's always keeping me busy. I can say that my life-changing started from here.</p>
          </div>
        </div>
        <div style="position:relative; width:10%; text-align:center; margin:0 auto;">
          <div class="timeframe-line"></div>
         <div class="event-point" style="height:50px; margin:50px auto;"></div>
         <div class="event-point" style="height:50px; margin:400px auto;"></div>
        </div>
      <div style= "width:45%; height:400px;">
          <div style="margin-top:365px; width:100%;">
              <div class="text-center display-4">April, 2024</div>
              <div class="line"></div>
              <div class="text-center" style="margin:32px 0 32px 0;">
                <span class="h5" id="webpage-width"></span>
            </div>
          </div>
      </div>
      </div>`;
   } if(document.documentElement.clientWidth < 465){
    flex.innerHTML = `
      <div class="flex" id="flex">
        <div style="width:45%; height:400px;">
          <div style="margin-top:10px; width:100%;">
              <div class="text-center display-4">April, 2023</div>
              <div style="border:2px solid red; width:100%;"></div>
              <div class="text-center" style="margin:32px 0 22px 0;">
                <span class="h5">Entered <a href="https://nnn.ed.jp/">N high school</a></span>
              </div>
              <p style="width:100%;">N high school, which changed my life in any way such as programming, clubs, N-yobikou and events,  which the school able to provides. It's always keeping me busy. I can say that my life-changing started from here.</p>
          </div>
        </div>
        <div style="position:relative; width:10%; text-align:center; margin:0 auto;">
          <div class="timeframe-line"></div>
         <div class="event-point" style="height:35px; margin:50px auto;"></div>
         <div class="event-point" style="height:35px; margin:400px auto;"></div>
        </div>
      <div style= "width:45%; height:400px;">
          <div style="margin-top:365px; width:100%;">
              <div class="text-center display-4">April, 2024</div>
              <div class="line"></div>
              <div class="text-center" style="margin:32px 0 32px 0;">
                <span class="h5" id="webpage-width"></span>
            </div>
          </div>
      </div>
      </div>`;
   }
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

    new TypeIt("#text1", {
      speed: 50,
      waitUntilVisible: true
    })
    .type("I borrowed bubble example in p5js's official website to do this. I produce the different colored bubbles in limited range of each value in rgb randomly. Especially, red in rgb is from 0 to 1. Gree")
    .move(-6)
    .type("73")
    .move(6)
    .type("n in rgb is from 0 to 1. Blue")
    .move(-7)
    .type("2")
    .move(1)
    .type("6")
    .move(6)
    .type(" in rgb is from 130 to 256.")
    .go();

    new TypeIt("#text2", {
      speed: 50,
      waitUntilVisible: true
    })
    .type("This bot is chat-based English dictionary, which can search, create, update meaning of specific word.")
    .go();
  }, 9500);
});