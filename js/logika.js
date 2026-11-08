// Soal 1: Ganjil atau Genap
function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}


// Soal 2: Celsius ke Fahrenheit
const celsiusKeFahrenheit = (celsius) => { 
    return celsius * 9 / 5 + 32;
}

// Soal 3: Nilai Terbesar
function nilaiTerbesar(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}


// Soal 4: Tahun Kabisat
function tahunKabisat(tahun) {
    return (tahun % 4 === 0 && tahun % 100 !== 0)
        || tahun % 400 === 0;
}


// Soal 5: Harga Setelah Diskon
function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total * 0.8;
    } else if (total >= 100000) {
        return total * 0.9;
    } else {
        return total;
    }
}// 1. TEMA GELAP - jalan di semua halaman
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

// 2. FILTER PROYEK - cuma jalan di halaman proyek
var tombolFilter = document.querySelectorAll(".filter-btn");
var semuaProyek = document.querySelectorAll(".proyek-item");
if (tombolFilter.length > 0) {
  tombolFilter.forEach(function (btn) {
    btn.addEventListener("click", function () {
      tombolFilter.forEach(function (b) { b.classList.remove("aktif"); });
      btn.classList.add("aktif");
      var kat = btn.dataset.kategori;
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

// 3. FORM KONTAK - cuma jalan di halaman kontak
var formKontak = document.getElementById("form-kontak");
if (formKontak) {
  formKontak.addEventListener("submit", function (e) {
    e.preventDefault();
    var nama = document.getElementById("nama").value;
    var keperluan = document.getElementById("keperluan").value;
    document.getElementById("hasil-pesan").textContent =
      "Terima kasih " + nama + ", pesanmu untuk " + keperluan + " sudah terkirim!";
    formKontak.reset();
  });
}