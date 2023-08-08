const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Silahkan tulis namamu: ", (nama) => {
    const hasil = "Welcome! "
    console.log(hasil.concat(nama));
    rl.close();
});