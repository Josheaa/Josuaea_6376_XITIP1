const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka yang mau di bagi (A): ", (angka1) => {
    rl.question("Masukkan angka pembaginya (B): ", (angka2) => {
            let a = parseInt(angka1);
            let b = parseInt(angka2);
            let Jumlah = (a/b);
            console.log(`Hasil dari pembagian A, dan B adalah: ${Jumlah}`)
            rl.close();
    });
});