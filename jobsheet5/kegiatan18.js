const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka untuk mengecek apakah sama dengan angka 7: ", (angka) => {
    angka = parseInt(angka);
    let angka2 = 7;
    let Jumlah = (angka == angka2);
    console.log(`Hasil dari pengecekan: ${Jumlah}`)
    rl.close();
});