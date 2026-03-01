const { log } = require("node:console");
const path = require("node:path");

console.log(path.sep); // Barra separadora de carpetas segun SO

const filePath = path.join("content", "subfolder", "test.txt"); //unir rutas con path.join
console.log(filePath);

const base = path.basename("/tmp/kevin-files/pass.txt"); // Devuelve el nombre del fichero
console.log(base);

const filename = path.basename("/tmp/kevin-files/pass.txt", ".txt"); // Devuelve el nombre del fichero sin el .txt
console.log(filename);

const extension = path.extname("image.png"); // Da la extension final (.png)
console.log(extension);

