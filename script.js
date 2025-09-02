// Fungsi untuk menghitung Laba dan Selisih
function calculateProfitAndDifference() {
    const rows = document.querySelectorAll('#bookkeepingTable tbody tr');

    rows.forEach(row => {
        const saldoAwal = parseInt(row.querySelector('.saldo-awal').value);
        const jumlahTransaksi = parseInt(row.querySelector('.jumlah-transaksi').value);
        const uangBelumCair = parseInt(row.querySelector('.uang-belum-cair').value);

        // Menghitung Laba
        const laba = jumlahTransaksi - uangBelumCair;

        // Menghitung Selisih
        const selisih = saldoAwal - laba;

        // Menampilkan hasil perhitungan ke kolom Laba dan Selisih
        row.querySelector('.laba').textContent = laba.toLocaleString();
        row.querySelector('.selisih').textContent = selisih.toLocaleString();
    });
}

// Menambahkan event listener pada tombol hitung
document.getElementById('calculateButton').addEventListener('click', calculateProfitAndDifference);
