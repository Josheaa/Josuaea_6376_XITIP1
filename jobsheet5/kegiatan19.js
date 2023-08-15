const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka untuk mengecek apakah lebih besar dari 10 dan lebih kecil dari 20: ", (angka) => {
    angka = parseInt(angka);
    if (angka > 10 && angka < 20) {
        console.log(`Angka tersebut lebih besar dari 10 dan lebih kecil dari 20`);
    } else {
        console.log(`Angka tersebut tidak akurat dengan "lebih besar dari 10 dan lebih kecil dari 20"`);
    }
    rl.close();
});