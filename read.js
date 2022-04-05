const fs = require ("fs");

const isi = fs.readFileSync("./baru.json", "utf-8");

console.log(isi);