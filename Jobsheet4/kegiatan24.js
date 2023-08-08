const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat Anda: ", (kalimat) => {
    const sliceResult = kalimat.slice(7,8);
    console.log(`Hasil dari slice: ${sliceResult}`)
    rl.close();
});