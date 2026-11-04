// 2. Harga dalam variabel const
const hargaNasiGoreng = 12000;
const hargaEsTeh = 4000;

// 3. Fungsi hitungTotal
function hitungTotal(jumlahNasi, jumlahEs) {
  return (jumlahNasi * hargaNasiGoreng) + (jumlahEs * hargaEsTeh);
}

// 4. Arrow function hitungKembalian
const hitungKembalian = (bayar, total) => {
  return bayar - total;
};

// 5. Fungsi cekPembayaran dengan if, else if, else
function cekPembayaran(bayar, total) {
  if (bayar < total) {
    return `Uang kurang Rp${total - bayar}`;
  } else if (bayar === total) {
    return `Uang pas`;
  } else {
    return `Kembalian Rp${hitungKembalian(bayar, total)}`;
  }
}

// 6. Tampilkan struk 3 pembeli dengan template literal

// Pembeli 1: Uang KURANG
// Beli 1 nasi + 1 es = 16000, bayar 10000
const total1 = hitungTotal(1, 1);
console.log(`--- Struk Pembeli 1 ---`);
console.log(`Total: Rp${total1}, Bayar: Rp10000`);
console.log(`${cekPembayaran(10000, total1)}`);

// Pembeli 2: Uang PAS
// Beli 1 nasi + 1 es = 16000, bayar 16000
const total2 = hitungTotal(1, 1);
console.log(`--- Struk Pembeli 2 ---`);
console.log(`Total: Rp${total2}, Bayar: Rp16000`);
console.log(`${cekPembayaran(16000, total2)}`);

// Pembeli 3: Uang BERLEBIH
// Beli 2 nasi + 1 es = 28000, bayar 50000
const total3 = hitungTotal(2, 1);
console.log(`--- Struk Pembeli 3 ---`);
console.log(`Total: Rp${total3}, Bayar: Rp50000`);
console.log(`${cekPembayaran(50000, total3)}`);