const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka untuk disimpan: ", (angka) => {
    let nilai = angka;
    console.log(`Angka yang anda simpan adalah: ${nilai}`)
    rl.close();
});