const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nomor Anda: ", (kalimat) => {
    const sliceResult = kalimat.slice(4, 4);
    console.log(`Hasil dari slice: ${sliceResult}`)
    rl.close();
});