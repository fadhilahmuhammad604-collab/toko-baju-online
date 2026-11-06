
let keranjang = [];

function tambahKeranjang(nama, harga) {
    keranjang.push({
        nama: nama,
        harga: harga
    });

    tampilkanKeranjang();
}

function tampilkanKeranjang() {
    let daftar = document.getElementById("daftar-keranjang");
    let total = document.getElementById("total-harga");

    daftar.innerHTML = "";

    let jumlah = 0;

    keranjang.forEach(function(produk) {
        let item = document.createElement("p");

        item.textContent = produk.nama + " - Rp" +
            produk.harga.toLocaleString("id-ID");

        daftar.appendChild(item);
        jumlah += produk.harga;
    });

    total.textContent = "Total: Rp" +
        jumlah.toLocaleString("id-ID");
}
