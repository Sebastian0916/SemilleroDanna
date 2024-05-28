const themeToggle = document.getElementById('toggle');

themeToggle.addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');

  const cajas = document.querySelectorAll('.caja, .caja-pequeña');
  cajas.forEach(caja => {
    caja.classList.toggle('dark-mode-caja');
  });
});
