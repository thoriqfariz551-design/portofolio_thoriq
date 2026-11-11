// Soal 1: Ganjil atau Genap
function ganjilGenap(angka) {
  if (angka % 2 === 0) return "genap";
  return "ganjil";
}

// Soal 2: Celsius ke Fahrenheit
const celsiusKeFahrenheit = (celsius) => celsius * 9 / 5 + 32;

// Soal 3: Nilai Terbesar
function nilaiTerbesar(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

// Soal 4: Tahun Kabisat
function tahunKabisat(tahun) {
  return (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0;
}

// Soal 5: Harga Setelah Diskon
function hargaSetelahDiskon(total) {
  if (total >= 200000) return total * 0.8;
  if (total >= 100000) return total * 0.9;
  return total;
}

// 1. TEMA GELAP
if (localStorage.getItem("tema") === "gelap") {
  document.body.classList.add("gelap");
}
document.querySelectorAll(".tombol-tema").forEach((tombol) => {
  tombol.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    localStorage.setItem("tema", document.body.classList.contains("gelap") ? "gelap" : "terang");
  });
});

// 2. FORM KONTAK
const formKontak = document.getElementById("form-kontak");
if (formKontak) {
  formKontak.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const keperluan = document.getElementById("keperluan").value;
    document.getElementById("hasil-pesan").textContent =
      "Terima kasih " + nama + ", pesanmu untuk " + keperluan + " sudah terkirim!";
    formKontak.reset();
    const hitung = document.getElementById("hitung-karakter");
    if (hitung) hitung.textContent = "0 / 200 karakter";
  });
}

// 3. SKILLS
const skills = [
  { nama: "HTML", level: "Mahir" },
  { nama: "CSS", level: "Mahir" },
  { nama: "JavaScript", level: "Menengah" },
  { nama: "Git & GitHub", level: "Menengah" }
];
const skillList = document.getElementById("skill-list");
if (skillList) {
  skillList.innerHTML = "";
  skills.forEach((s) => {
    skillList.innerHTML += `<li><b>${s.nama}</b> - ${s.level}</li>`;
  });
}

// 4. HITUNG KARAKTER
const pesan = document.getElementById("pesan");
const hitung = document.getElementById("hitung-karakter");
if (pesan && hitung) {
  pesan.addEventListener("input", () => {
    hitung.textContent = `${pesan.value.length} / 200 karakter`;
  });
}

// 5. FILTER PROYEK - cuma ini, tidak ada lagi yang lain
const tombolFilter = document.querySelectorAll(".filter-btn");
const semuaProyek = document.querySelectorAll(".proyek-item");
tombolFilter.forEach((btn) => {
  btn.addEventListener("click", () => {
    tombolFilter.forEach((b) => b.classList.remove("aktif"));
    btn.classList.add("aktif");
    const filter = btn.dataset.kategori;
    semuaProyek.forEach((kartu) => {
      if (filter === "Semua" || kartu.dataset.kategori === filter) {
        kartu.style.display = "";
      } else {
        kartu.style.display = "none";
      }
    });
  });
});