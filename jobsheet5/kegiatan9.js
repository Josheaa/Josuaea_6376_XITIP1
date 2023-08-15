const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka A: ", (angka1) => {
    rl.question("Masukkan angka B: ", (angka2) => {
        rl.question("Masukkan angka C: ", (angka3) => {
            let a = parseInt(angka1);
            let b = parseInt(angka2);
            let c = parseInt(angka3);
            let Jumlah = ((a+b)*c);
            console.log(`Hasil dari perhitungan (a + b) * c adalah: ${Jumlah}`)
            rl.close();
        });
    });
});