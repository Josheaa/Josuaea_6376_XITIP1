const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// index Of
rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan kata yang ingin Anda cari: ", (kataCari) => {
        // Gunakkan method indexOf untuk mencari kataCari dalam kalimat
        const indeksKata = kalimat.indexOf(kataCari);
        if (indeksKata !== -1){
            console.log(`Kata '${kataCari}' ditemukkan pada indeks: ${indeksKata}`);
        } else {
            console.log(`Kata '${kataCari}' tidak ditemukkan dalam kalimat.`)
        }
        rl.close();
    });
});