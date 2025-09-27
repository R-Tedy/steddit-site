document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-response').textContent = "Thanks for reaching out! I'll get back to you soon.";
  this.reset();
});