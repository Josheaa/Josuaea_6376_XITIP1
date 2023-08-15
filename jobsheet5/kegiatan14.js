const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka untuk dibagikan dengan variable total (20): ", (angka) => {
    let nilai = parseInt(angka);
    let total = 20;
    let Jumlah = (total/nilai);
    console.log(`Hasil pembagian dari variable total (20) dengan angka yang dimasukkan adalah: ${Jumlah}`)
    rl.close();
});