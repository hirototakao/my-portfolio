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
          <div class="description-div">
            <div style="margin-top:365px; width:100%;">
              <div class="text-center display-4">April, 2024</div>
              <div class="line"></div>
              <div class="text-center" style="margin:32px 0 32px 0;">
                <span class="h5" id="webpage-width">I won Certificate of Recognition.</span>
              </div>
              <p style="padding-left:10px;">By <a href="https://nisai-british-onlineschool.com/">my online school</a>, I was awarded Certificate of Recognition due to my excellent contribution to extra activities such as discussions.</p>
            </div>
          </div>
        </div>`;
     }
});

'use strict';
const audio = new Audio("../image/underwater-whale-and-diving-sound-ambient-116185.mp3");

function openPopUp() {
  document.getElementById('navbar').removeAttribute("style");
  const darken_elements = document.getElementsByName("card");
  darken_elements.forEach(el => {
    el.classList.add("text-bg-secondary");
  });
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
  const darken_elements = document.getElementsByName("card");
  darken_elements.forEach(el => {
    el.classList.remove("text-bg-secondary");
  });
  audio.pause();
  audio.currentTime = 0;
  document.getElementById('navbar').setAttribute("style", "background-color:rgb(248, 249, 250)!important;");
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("exit-button").style.display = "none";
  const frame = document.getElementById("frame");
}
