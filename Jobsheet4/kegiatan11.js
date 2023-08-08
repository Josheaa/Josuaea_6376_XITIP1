const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Warna kesukaanmu apa?: ", (warna) => {
    const hasil = "Saya sangat suka sekali warna "
    console.log(hasil.concat(warna));
    rl.close();
});