document.addEventListener('DOMContentLoaded', function() {
  // TOMBOL GANTI TEMA
  const btnTema = document.getElementById('btnToggleTema');
  btnTema.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    btnTema.textContent = document.body.classList.contains('light-mode') ? '🌙 Mode Gelap' : '☀️ Mode Terang';
  });

  // TOMBOL KIRIM PESAN & TUTUP
  const btnBuka = document.getElementById('btnKontak');
  const modal = document.getElementById('modalKontak');
  const btnTutup = document.getElementById('btnTutupModal');

  btnBuka.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('show');
  });

  btnTutup.addEventListener('click', function() {
    modal.classList.remove('show');
  });
});