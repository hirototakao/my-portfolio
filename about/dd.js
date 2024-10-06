
window.addEventListener("DOMContentLoaded", () => {
  const loadingPage = document.getElementById("loading-page");  
  loadingPage.style.display = "block";
  document.body.style.backgroundColor = "yellow";
  document.getElementById("main-page").style.display = "none";
  setTimeout(function() {
    loadingPage.style.display = "none";   
    document.body.style.backgroundColor = "white";
    console.log("body's background became white.");
    document.getElementById("main-page").style.display = "block";
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
    new TypeIt("#navbar-br", {
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