const fs = require("node:fs/promises");
const { text } = require("node:stream/consumers");

console.log("-----------\nLeyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
	console.log(text);
});

console.log("Hacer cosas mientras lee archivo...");

console.log("-----------\nLeyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
	console.log(text);
});
