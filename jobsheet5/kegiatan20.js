const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka untuk mengecek apakah lebih besar dari 0 dan lebih kecil dari 100: ", (angka) => {
    angka = parseInt(angka);
    if (angka > 0 && angka < 100) {
        console.log(`Angka tersebut lebih besar dari 0 dan lebih kecil dari 100`);
    } else {
        console.log(`Angka tersebut tidak akurat dengan "lebih besar dari 0 dan lebih kecil dari 100"`);
    }
    rl.close();
});