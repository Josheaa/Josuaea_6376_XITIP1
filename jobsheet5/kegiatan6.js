const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Angka A: ", (angka1) => {
    rl.question("Masukkan Angka B: ", (angka2) => {
        let a = parseFloat(angka1);
        let b = parseFloat(angka2);
        let Jumlah = (a - b);
        console.log(`Hasil dari pengurangan angka A dan B adalah: ${Jumlah}`)
        rl.close();
    });
});