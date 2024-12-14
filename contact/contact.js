document.addEventListener('DOMContentLoaded', function() {
  const twitterIcon = document.getElementById('twitterIcon');
  const githubIcon = document.getElementById('githubIcon');
  twitterIcon.setAttribute('height', '25');
  twitterIcon.setAttribute('width', '30');
  
  githubIcon.setAttribute('height', '27');
  githubIcon.setAttribute('width', '30');
});

function openPopUp() {
  document.getElementById("pop-up").style.display = "block";
  document.getElementById("exit-button").style.display = "block";
  document.getElementById('navbar').removeAttribute("style");
}

function closePopUp() {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("exit-button").style.display = "none";
  document.getElementById('navbar').setAttribute("style", "background-color:rgb(248, 249, 250)!important;");
}

function clipboard(id) {
  　const email = document.getElementById(id).innerText;
    navigator.clipboard.writeText(email);
    swal("Copied!", "You copied it to clipboard", "success")
}
function clipboardForTextBox(id) {
    const InputValue = document.getElementById(id).value;
    navigator.clipboard.writeText(InputValue);
    swal("Copied!", "You copied it to clipboard", "success")
}