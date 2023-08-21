const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama depan: ", (depan) => {
    rl.question("Masukkan nama belakang: ", (belakang) => {
        const index = 0;
        const namaDepan = depan.charAt(index)
        const namaBelakang = belakang.charAt(index)
        console.log(`Halo ${depan}: Inisial ${namaDepan} ${belakang}: Inisial ${namaBelakang}`)
        rl.close();
    });
});