function showPopUp() {
  document.getElementById('pop-up').style.display = "block";
  document.body.style.backgroundColor = "rgba(0, 0, 0, .5)"; 
  document.getElementById('class-remover').classList.remove('bg-light');
}

function hidePopUp() {
  document.getElementById('pop-up').style.display = "none";
  document.body.style.backgroundColor = "white"; 
  document.getElementById('class-remover').classList.add('bg-light');
}