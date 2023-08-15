const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka untuk dikurangkan dengan variable total (50): ", (angka) => {
    let nilai = parseInt(angka);
    let total = 50;
    let Jumlah = (nilai - total);
    console.log(`Hasil pengurangan dari variable total (50) dengan angka yang dimasukkan adalah: ${Jumlah}`)
    rl.close();
});