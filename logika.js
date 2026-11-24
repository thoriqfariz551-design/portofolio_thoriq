// ==========================================
// SOAL 1-5: TETAP, UDAH BENER, JANGAN DIUBAH
// ==========================================
function ganjilGenap(angka) {
  if (angka % 2 === 0) return "genap";
  return "ganjil";
}
const celsiusKeFahrenheit = (celsius) => celsius * 9 / 5 + 32;
function nilaiTerbesar(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}
function tahunKabisat(tahun) {
  return (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0;
}
function hargaSetelahDiskon(total) {
  if (total >= 200000) return total * 0.8;
  if (total >= 100000) return total * 0.9;
  return total;
}

// Contoh JSON.stringify & JSON.parse
const siswa = { nama: "Fauruz", kelas: "10", hobi: ["sepak bola", "minecraft"] };
console.log("stringify:", JSON.stringify(siswa));
console.log("parse:", JSON.parse(JSON.stringify(siswa)).nama);

// Contoh fetch pakai .then - UDAH DIGANTI KE USERNAME LU
fetch("https://api.github.com/users/thoriqfariz551-design/repos")
  .then((response) => {
    console.log("Status:", response.status, "OK?", response.ok);
    return response.json();
  })
  .then((data) => console.log("Contoh .then:", data[0].name))
  .catch((err) => console.log("Error .then:", err));

// ==========================================
// 1. TEMA GELAP
// ==========================================
if (localStorage.getItem("tema") === "gelap") {
  document.body.classList.add("gelap");
  document.querySelectorAll(".tombol-tema").forEach((t) => (t.textContent = "☀️"));
}
document.querySelectorAll(".tombol-tema").forEach((tombol) => {
  tombol.addEventListener("click", () => {
    document.body.classList.toggle("gelap");
    const isGelap = document.body.classList.contains("gelap");
    localStorage.setItem("tema", isGelap ? "gelap" : "terang");
    tombol.textContent = isGelap ? "☀️" : "🌙";
  });
});

// ==========================================
// 2. FORM KONTAK + HITUNG KARAKTER
// ==========================================
const formKontak = document.getElementById("form-kontak");
if (formKontak) {
  formKontak.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const keperluan = document.getElementById("keperluan").value;
    document.getElementById("hasil-pesan").textContent =
      "Terima kasih " + nama + ", pesanmu untuk " + keperluan + " sudah terkirim!";
    formKontak.reset();
    const hitungEl = document.getElementById("hitung-karakter");
    if (hitungEl) hitungEl.textContent = "0 / 200 karakter";
  });
}
const pesan = document.getElementById("pesan");
const hitung = document.getElementById("hitung-karakter");
if (pesan && hitung) {
  pesan.addEventListener("input", () => {
    hitung.textContent = `${pesan.value.length} / 200 karakter`;
  });
}

// ==========================================
// 3. FETCH SEMUA DATA - PROYEK + KEAHLIAN + GITHUB
// ==========================================
const GITHUB_USERNAME = "thoriqfariz551-design"; // UDAH BENER, USERNAME LU

async function muatSemuaData() {
  // --- A. PROYEK DARI data/proyek.json ---
  const wadahProyek = document.getElementById("daftar-proyek");
  const loadingProyek = document.getElementById("loading-proyek");
  if (wadahProyek) {
    try {
      const response = await fetch("data/proyek.json");
      if (!response.ok) throw new Error("Gagal: " + response.status + " - Cek folder data/data, jangan dobel!");
      const daftarProyek = await response.json();

      wadahProyek.innerHTML = "";
      daftarProyek.forEach((p) => {
        wadahProyek.innerHTML += `
          <article class="kartu proyek-item" data-kategori="${p.kategori}">
            <h3>${p.judul}</h3>
            ${p.gambar ? `<img src="${p.gambar}" alt="${p.judul}">` : ""}
            <p>${p.deskripsi}</p>
            <p><span class="tag">${p.kategori}</span></p>
            <a href="${p.link}">Lihat proyek ${p.judul}</a>
          </article>`;
      });
      if (loadingProyek) loadingProyek.textContent = "";
      console.log("Proyek ketemu:", daftarProyek.length);

      // FILTER DIPASANG DI SINI, SETELAH KARTU MUNCUL! INI KUNCINYA
      const tombolFilter = document.querySelectorAll(".filter-btn");
      tombolFilter.forEach((btn) => {
        btn.addEventListener("click", () => {
          tombolFilter.forEach((b) => b.classList.remove("aktif"));
          btn.classList.add("aktif");
          const filter = btn.dataset.kategori.toLowerCase();
          document.querySelectorAll(".proyek-item").forEach((kartu) => {
            const kategoriKartu = (kartu.dataset.kategori || "").toLowerCase();
            kartu.style.display = filter === "semua" || kategoriKartu === filter ? "" : "none";
          });
        });
      });

    } catch (error) {
      if (loadingProyek) loadingProyek.textContent = "Gagal memuat proyek: " + error.message;
      console.log("Error proyek:", error);
    }
  }

  // --- B. KEAHLIAN DARI data/keahlian.json ---
  const skillList = document.getElementById("skill-list");
  const loadingKeahlian = document.getElementById("loading-keahlian");
  if (skillList) {
    try {
      const response = await fetch("data/keahlian.json");
      if (!response.ok) throw new Error("Gagal: " + response.status);
      const skills = await response.json();
      skillList.innerHTML = "";
      skills.forEach((s) => {
        skillList.innerHTML += `<li><b>${s.nama}</b> - ${s.level}</li>`;
      });
      if (loadingKeahlian) loadingKeahlian.textContent = "";
    } catch (error) {
      if (loadingKeahlian) loadingKeahlian.textContent = "Gagal memuat keahlian: " + error.message;
    }
  }

  // --- C. GITHUB API - 6 REPO ---
  const wadahGithub = document.getElementById("daftar-github");
  const loadingGithub = document.getElementById("loading-github");
  if (wadahGithub) {
    try {
      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
      if (!response.ok) throw new Error("Username GitHub salah / tidak ditemukan: " + response.status);
      const repos = await response.json();
      wadahGithub.innerHTML = "";
      repos.slice(0, 6).forEach((repo) => {
        wadahGithub.innerHTML += `
          <div class="kartu-kecil">
            <h3>${repo.name}</h3>
            <p>${repo.description || "Tidak ada deskripsi"}</p>
            <a href="${repo.html_url}" target="_blank" rel="noopener">Lihat repositori ${repo.name} di GitHub</a>
          </div>`;
      });
      if (loadingGithub) loadingGithub.textContent = "";
    } catch (error) {
      if (loadingGithub) loadingGithub.textContent = "Gagal memuat GitHub: " + error.message;
    }
  }
}
muatSemuaData();