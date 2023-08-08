const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// substr
rl.question("Masukkan kalimat pertama: ", (kalimat) => {
    rl.question("Masukkan indeks awal: ", (startIndex) => {
        rl.question("Masukkan indeks akhir: ", (length) => {
            // Konversi nilai indeks dan panjang ke tipe number
            startIndex = Number(startIndex);
            endIndex = Number(length);
            // Gunakkan method substr untuk mengambil substring dari startIndex dengan panjang length
            const substringResult = kalimat.substr(startIndex, length);
            console.log(`Hasil substring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}`)
            rl.close();
        });
    });
});