const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (inputString) => {
        const panjang = inputString.length
        const index = panjang - 1
        if (panjang <= 0) {
            console.log("Kata tidak valid mohon ulang lagi")
        } else {
            console.log(`Karakter terakhir cari kata ${inputString} adalah ${inputString.charAt(index)}`)
        }
        rl.close();
});