function clipboard(id) {
  $(function() {
    const emailSpan = document.getElementById(id);
    const email = emailSpan.innerText;
    navigator.clipboard.writeText(email);
  });
}
function clipboardForTextBox(id) {
  $(function() {
    const Input = document.getElementById(id);
    const InputValue = Input.getAttribute('value');
    navigator.clipboard.writeText(InputValue);
  });
}