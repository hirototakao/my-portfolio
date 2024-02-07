function clipboard(id) {
    const emailSpan = document.getElementById(id);
    const email = emailSpan.innerText;
    navigator.clipboard.writeText(email);
}
function clipboardForTextBox(id) {
    const Input = document.getElementById(id);
    const InputValue = Input.getAttribute('value');
    navigator.clipboard.writeText(InputValue);
}

document.addEventListener('DOMContentLoaded', function() {
  const twitterIcon = document.getElementById('twitterIcon');
  const githubIcon = document.getElementById('githubIcon');
  twitterIcon.setAttribute('height', '25');
  twitterIcon.setAttribute('width', '30');

  githubIcon.setAttribute('height', '27');
  githubIcon.setAttribute('width', '30');
});