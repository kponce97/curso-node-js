// Modulo OS :  El módulo OS en Node.js proporciona información detallada sobre el hardware y el sistema operativo en
//				el que se está ejecutando la aplicación.
const os = require("node:os");

console.log("Informacion del sistema Operativo:");
console.log("------------------------------------");

console.log("Nombre del sistema operativo:", os.platform());
console.log("Version del sistema operativo:", os.release());
console.log("Arquitectura: ", os.arch());
console.log("CPUs: ", os.cpus()); // <-- vamos a poder escalar procesos de Node
console.log("Memoria libre: ", os.freemem() / 1024 / 1024);
console.log("Memoria total: ", os.totalmem() / 1024 / 1024);
console.log("Uptime: ", os.uptime() / 60 / 60);
