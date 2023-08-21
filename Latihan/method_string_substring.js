const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// slice
rl.question("Masukkan kalimat: ", (kalimat) => {
    rl.question("Masukkan indeks awal: ", (startIndex) => {
        rl.question("Masukkan indeks akhir: ", (endIndex) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            const slicedSubstring = kalimat.slice(startIndex, endIndex);
            console.log(`Hasil substring dari indeks ${startIndex} dengan panjang ${endIndex}: ${slicedSubstring}`)
            rl.close();
        });
    });
});