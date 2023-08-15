const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Angka A: ", (angka1) => {
    rl.question("Masukkan Angka B: ", (angka2) => {
        rl.question("Masukkan Angka C: ", (angka3) => {
            let a = parseFloat(angka1);
            let b = parseFloat(angka2);
            let c = parseFloat(angka3);
            let Jumlah = (a*b*c);
            console.log(`Hasil dari perkalian angka A, B dan C adalah: ${Jumlah}`)
            rl.close();
        });
    });
});