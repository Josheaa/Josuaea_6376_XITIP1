const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan makanan favoritemu: ", (makanan) => {
    const hasil = "Makanan favorite saya adalah "
    console.log(hasil.concat(makanan));
    rl.close();
});