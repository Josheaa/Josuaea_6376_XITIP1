const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka 1: ", (angka) => {
    rl.question("Masukkan angka 2: ", (angka2) => {
        angka = parseInt(angka);
        angka2 = parseInt(angka2);
        let Jumlah = (angka == angka2);
        console.log(`Apakah angka pertama sama dengan dari angka kedua: ${Jumlah}`)
        rl.close();
    });
});