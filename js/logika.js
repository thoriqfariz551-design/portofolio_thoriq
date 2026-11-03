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
}