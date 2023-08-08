const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Last Index Of
rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan kata yang ingin Anda cari: ", (kataCari) => {
        // Gunakkan method LastindexOf untuk mencari kataCari dalam kalimat
        const indeksKataTerakhir = kalimat.indexOf(kataCari);
        if (indeksKataTerakhir !== -1) {
            console.log(`Kata '${kataCari}' ditemukkan pada indeks Terakhir: ${indeksKataTerakhir}`);
        } else {
            console.log(`Kata '${kataCari}' tidak ditemukkan dalam kalimat.`)
        }
        rl.close();
    });
});