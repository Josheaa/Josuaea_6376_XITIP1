const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan Angka 1: ", (angka1) => {
    rl.question("Masukkan Angka 2: ", (angka2) => {
        let int = angka1
        let real = angka2
        let strInt = parseInt(int);
        let strReal = parseInt(real);
        console.log(int);
        console.log(typeof int);
        console.log(strInt);
        console.log(typeof strInt);
        console.log(real);
        console.log(typeof real);
        console.log(strReal);
        console.log(typeof strReal);
        rl.close();
    });
});