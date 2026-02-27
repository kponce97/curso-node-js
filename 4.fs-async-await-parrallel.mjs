// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

import { readFile } from "node:fs/promises";
// Se ejecuta en paralelo
Promise.all([
	readFile("./archivo.txt", "utf-8"),
	readFile("./archivo2.txt", "utf-8"),
]).then(([text, text2]) => {
	console.log("Primer text: ", text);
	console.log("Segundo text: ", text2);
});
