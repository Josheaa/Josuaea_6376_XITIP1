const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat Anda: ", (kalimat) => {
    const substrResult = kalimat.substr(0,3);
    console.log(`Hasil dari substr: ${substrResult}`)
    rl.close();
});