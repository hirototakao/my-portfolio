function clipboard(id) {
  $(function() {
    const emailSpan = document.getElementById(id);
    const email = emailSpan.innerText;
    navigator.clipboard.writeText(email);
  });
}
function clipboardForTextBox() {
  $(function() {
    const Input = document.getElementById('twitter-account');
    const InputValue = Input.getAttribute('value');
    navigator.clipboard.writeText(InputValue);
  });
}