const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat: ", (kalimat) => {
    const indeksKata = kalimat.indexOf(`r`);
    if (indeksKata !== -1) {
        console.log(`Huruf "r" pertama kali ditemukkan pada kalimat: ${indeksKata}`);
    } else {
        console.log(`Huruf "r" tidak ditemukkan dalam kalimat.`)
    }
    rl.close();
});