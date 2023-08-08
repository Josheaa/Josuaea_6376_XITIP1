const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat: ", (kalimat) => {
        const indeksKata = kalimat.indexOf(`apel`);
        if (indeksKata !== -1) {
            console.log(`Kata "apel" pertama kali ditemukkan pada kalimat: ${indeksKata}`);
        } else {
            console.log(`Kata "apel" tidak ditemukkan dalam kalimat.`)
        }
        rl.close();
});