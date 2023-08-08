const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat sebuah kalimat: ", (kalimat) => {
    const substringResult = kalimat.substring(7);
    console.log(`Hasil substring: ${substringResult}`)
    rl.close();
});