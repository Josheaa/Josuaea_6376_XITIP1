const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Angka: ", (angka) => {
    let number = angka
    console.log(number);
    console.log(typeof number);
    console.log(number.toString());
    console.log(typeof number.toString);
    rl.close();
});