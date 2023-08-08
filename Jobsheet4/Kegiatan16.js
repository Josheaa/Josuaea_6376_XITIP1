const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan string: ", (kalimat) => {
    const indeksKata = kalimat.indexOf(`5`);
    if (indeksKata !== -1) {
        console.log(`String "5" ditemukkan pertama kali pada string: ${indeksKata}`);
    } else {
        console.log(`String "5" tidak ditemukkan dalam string.`)
    }
    rl.close();
});