const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Last index of
rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan kata/huruf yang ingin Anda cari: ", (kataCari) => {
        const indeksKataTerakhir = kalimat.indexOf(kataCari);
        if (indeksKataTerakhir !== -1) {
            console.log(`Kata '${kataCari}' ditemukkan pada indeks Terakhir: ${indeksKataTerakhir}`);
        } else {
            console.log(`Kata '${kataCari}' tidak ditemukkan dalam kalimat.`)
        }
        rl.close();
    });
});