const fs = require("node:fs");
// Lee el contenido del archivo "archivo.txt" de forma síncrona y lo guarda como una cadena de texto en la variable "text" --> readFileSync()
console.log("-----------\nLeyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
	console.log(text);
});

console.log("Hacer cosas mientras lee archivo...");

console.log("-----------\nLeyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
	console.log(text);
});

