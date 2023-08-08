const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat: ", (kalimat) => {
    const indeksKata = kalimat.indexOf(`a`);
    if (indeksKata !== -1) {
        console.log(`Huruf "a" pertama kali muncul dikalimat: ${indeksKata}`);
    } else {
        console.log(`Huruf "a" tidak ditemukkan dalam kalimat.`)
    }
    rl.close();
});