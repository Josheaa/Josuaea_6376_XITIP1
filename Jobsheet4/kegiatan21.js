const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat Anda: ", (kalimat) => {
    const substringResult = kalimat.substring(11);
    console.log(`Hasil dari substring: ${substringResult}`)
    rl.close();
});