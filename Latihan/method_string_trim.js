const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// trim
rl.question("Masukkan kalimat: ", (kalimat) => {
    // Gunakkan method trim untuk menghapus spasi di awal dan di akhir kalimat
    const kalimatTrimmed = kalimat.trim();
    console.log(`Kalimat seelah di-trim: ${kalimatTrimmed}`);
    rl.close();
});