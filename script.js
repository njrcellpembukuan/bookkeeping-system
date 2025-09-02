// Fungsi untuk menghitung total uang cash
document.getElementById("calculateCashButton").addEventListener("click", function() {
    // Ambil nilai dari input uang cash
    let cash500 = parseInt(document.getElementById("cash500").value) * 500;
    let cash1000 = parseInt(document.getElementById("cash1000").value) * 1000;
    let cash2000 = parseInt(document.getElementById("cash2000").value) * 2000;
    let cash5000 = parseInt(document.getElementById("cash5000").value) * 5000;
    let cash10000 = parseInt(document.getElementById("cash10000").value) * 10000;
    let cash20000 = parseInt(document.getElementById("cash20000").value) * 20000;
    let cash50000 = parseInt(document.getElementById("cash50000").value) * 50000;
    let cash100000 = parseInt(document.getElementById("cash100000").value) * 100000;

    // Hitung total uang cash
    let totalCash = cash500 + cash1000 + cash2000 + cash5000 + cash10000 + cash20000 + cash50000 + cash100000;

    // Tampilkan hasil total uang cash
    document.getElementById("cashTotal").textContent = "Rp " + totalCash.toLocaleString();
});

// Fungsi untuk menambah transaksi ke tabel
document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    
    // Ambil data dari form transaksi utama
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let saldoAwal = parseFloat(document.getElementById("saldoAwal").value);
    let saldoAkhir = parseFloat(document.getElementById("saldoAkhir").value);
    let rincianPiutang = parseFloat(document.getElementById("rincianPiutang").value);
    let bayarPiutang = parseFloat(document.getElementById("bayarPiutang").value);
    let saldoQris = parseFloat(document.getElementById("saldoQris").value);
    let qrisCair = parseFloat(document.getElementById("qrisCair").value);

    // Hitung sisa piutang
    let sisaPiutang = rincianPiutang - bayarPiutang;

    // Tambahkan data ke tabel
    let table = document.querySelector("#dataTable tbody");
    let row = table.insertRow();
    row.innerHTML = `
        <td>${date}</td>
        <td>${category}</td>
        <td>${saldoAwal}</td>
        <td>${saldoAkhir}</td>
        <td>${sisaPiutang}</td>
        <td>${saldoQris - qrisCair}</td>
    `;

    // Reset form setelah menambah data
    document.getElementById("inputForm").reset();
});
