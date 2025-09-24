let keranjang = ["buku","pensil","penggaris"]
console.log(keranjang);


keranjang.push("Penghapus");


keranjang.unshift("Spidol");


keranjang.pop();


keranjang.shift();


console.log("Isi keranjang:", keranjang);

console.log("Daftar barang dalam keranjang:");
for (let i = 0; i < keranjang.length; i++) {
  console.log('${i + 1}. ${keranjang[i]}');
}


let produk = [
  { nama: "Beras", harga: 50000 },
  { nama: "Minyak", harga: 20000 },
  { nama: "Gula", harga: 15000 }
];


produk.push({ nama: "Telur", harga: 30000 });


produk.pop();


console.table(produk);


function tambahProduk(nama, harga) {
  produk.push({ nama, harga });
}

function hitungTotal() {
  let total = 0;
  for (let i = 0; i < produk.length; i++) {
    total += produk[i].harga;
  }
  return total;
}


if (produk.length > 0) {
  console.log("Produk tersedia:");
  console.table(produk);
} else {
  console.log("Produk kosong");
}


function tampilkanHari(angka) {
  let hari;
  switch (angka) {
    case 0: hari = "Minggu"; break;
    case 1: hari = "Senin"; break;
    case 2: hari = "Selasa"; break;
    case 3: hari = "Rabu"; break;
    case 4: hari = "Kamis"; break;
    case 5: hari = "Jumat"; break;
    case 6: hari = "Sabtu"; break;
    default: hari = "Angka hari tidak valid";
  }
  return hari;
}

console.log("Hari ke-3 adalah:", tampilkanHari(3));

tambahProduk("Kopi", 25000);
tambahProduk("Teh", 10000);

console.table(produk);
console.log("Total harga semua produk:", hitungTotal());