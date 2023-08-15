const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka untuk mengecek apakah sama dengan string 5: ", (angka) => {
    angka = parseInt(angka);
    let string = 5;
    let Jumlah = (angka == string);
    console.log(`Hasil dari pengecekan: ${Jumlah}`)
    rl.close();
});