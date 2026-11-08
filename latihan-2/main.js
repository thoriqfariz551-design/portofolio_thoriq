// ===== TEMA GELAP =====
if (localStorage.getItem("tema") === "gelap") {
  document.body.classList.add("gelap");
}
document.querySelectorAll(".tombol-tema").forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    document.body.classList.toggle("gelap");
    if (document.body.classList.contains("gelap")) {
      localStorage.setItem("tema", "gelap");
    } else {
      localStorage.setItem("tema", "terang");
    }
  });
});

// ===== FILTER PROYEK =====
const tombolFilter = document.querySelectorAll(".filter-btn");
const semuaProyek = document.querySelectorAll(".proyek-item");
if (tombolFilter.length > 0) {
  tombolFilter.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tombolFilter.forEach(function (t) { t.classList.remove("aktif"); });
      this.classList.add("aktif");
      const kat = this.dataset.kategori;
      semuaProyek.forEach(function (item) {
        if (kat === "Semua" || item.dataset.kategori === kat) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// ===== FORM KONTAK =====
const formKontak = document.getElementById("form-kontak");
if (formKontak) {
  formKontak.addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const keperluan = document.getElementById("keperluan").value;
    const pesan = document.getElementById("pesan").value;
    document.getElementById("hasil-pesan").textContent = "Terima kasih " + nama + ", pesanmu untuk " + keperluan + " sudah terkirim! Isi pesan: " + pesan;
    formKontak.reset();
  });
}