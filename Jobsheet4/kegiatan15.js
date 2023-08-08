const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat: ", (kalimat) => {
    const indeksKata = kalimat.indexOf(`jurusan`);
    if (indeksKata !== -1) {
        console.log(`Kata "jurusan" ditemukkan pertama kali pada kalimat: ${indeksKata}`);
    } else {
        console.log(`Kata "jurusan" tidak ditemukkan dalam kalimat.`)
    }
    rl.close();
});