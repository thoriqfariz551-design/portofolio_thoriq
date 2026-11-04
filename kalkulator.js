// Fungsi hitung nilai akhir
// Bobot: Tugas 30%, UTS 30%, UAS 40%
function hitungNilaiAkhir(tugas, uts, uas) {
  return (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);
}

// Fungsi cek grade pakai if - else if - else
function cekGrade(nilaiAkhir) {
  if (nilaiAkhir >= 90) {
    return "A - Sangat Baik";
  } else if (nilaiAkhir >= 80) {
    return "B - Baik";
  } else if (nilaiAkhir >= 70) {
    return "C - Cukup";
  } else if (nilaiAkhir >= 60) {
    return "D - Kurang";
  } else {
    return "E - Tidak Lulus";
  }
}

// Fungsi cek kelulusan
const cekKelulusan = (nilaiAkhir) => {
  return nilaiAkhir >= 70 ? "LULUS" : "TIDAK LULUS";
};

// Bagian UI - pas tombol diklik
document.getElementById("btnHitung").addEventListener("click", function() {
  const tugas = Number(document.getElementById("tugas").value) || 0;
  const uts = Number(document.getElementById("uts").value) || 0;
  const uas = Number(document.getElementById("uas").value) || 0;

  const nilaiAkhir = hitungNilaiAkhir(tugas, uts, uas);
  const grade = cekGrade(nilaiAkhir);
  const status = cekKelulusan(nilaiAkhir);

  const hasil = document.getElementById("hasil");
  hasil.style.display = "block";
  hasil.textContent = `Nilai Akhir: ${nilaiAkhir.toFixed(1)}\nGrade: ${grade}\nStatus: ${status}`;

  // Biar tetep muncul di Console juga
  console.log(`Nilai Akhir: ${nilaiAkhir}, Grade: ${grade}, Status: ${status}`);
});