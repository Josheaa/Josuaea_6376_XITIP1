const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah nomor (tidak pake spasi): ", (inputString) => {
    console.log(`Jumlah string: ${inputString.length}`);
    rl.close();
});