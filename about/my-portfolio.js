
function showPopUp() {
  document.getElementById('pop-up').style.display = "block";
  document.body.style.backgroundColor = "rgba(0, 0, 0, .5)";
  document.getElementById('class-remover').classList.remove('bg-light'); 
  document.getElementById('theme-change1').style.backgroundColor = "rgba(0, 0, 0, .5)";
  document.getElementById('theme-change2').style.backgroundColor = "rgba(0, 0, 0, .5)";
  document.getElementById('theme-change3').style.backgroundColor = "rgba(0, 0, 0, .5)";
  document.getElementById('theme-change4').style.backgroundColor = "rgba(0, 0, 0, .5)";
  document.getElementById('theme-change5').style.backgroundColor = "rgba(0, 0, 0, .5)";
  document.getElementById('theme-change6').style.backgroundColor = "rgba(0, 0, 0, .5)";
  document.getElementById('theme-change7').style.backgroundColor = "rgba(0, 0, 0, .5)";
  document.getElementById('theme-change8').style.backgroundColor = "rgba(0, 0, 0, .5)";
  document.getElementById('theme-change9').style.backgroundColor = "rgba(0, 0, 0, .5)";
}

function hidePopUp() {
  document.getElementById('pop-up').style.display = "none";
  document.body.style.backgroundColor = "white"; 
  document.getElementById('class-remover').classList.add('bg-light');
  document.getElementById('theme-change1').style.backgroundColor = "white";
  document.getElementById('theme-change2').style.backgroundColor = "white";
  document.getElementById('theme-change3').style.backgroundColor = "white";
  document.getElementById('theme-change4').style.backgroundColor = "white";
  document.getElementById('theme-change5').style.backgroundColor = "white";
  document.getElementById('theme-change6').style.backgroundColor = "white";
  document.getElementById('theme-change7').style.backgroundColor = "white";
  document.getElementById('theme-change8').style.backgroundColor = "white";
  document.getElementById('theme-change9').style.backgroundColor = "white";
}