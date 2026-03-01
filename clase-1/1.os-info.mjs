// Modulo OS :  El módulo OS en Node.js proporciona información detallada sobre el hardware y el sistema operativo en
//				el que se está ejecutando la aplicación.
import { platform, release, arch, cpus, freemem, totalmem, uptime } from "node:os";

console.log("Informacion del sistema Operativo:");
console.log("------------------------------------");

console.log("Nombre del sistema operativo:", platform());
console.log("Version del sistema operativo:", release());
console.log("Arquitectura: ", arch());
console.log("CPUs: ", cpus()); // <-- vamos a poder escalar procesos de Node
console.log("Memoria libre: ", freemem() / 1024 / 1024);
console.log("Memoria total: ", totalmem() / 1024 / 1024);
console.log("Uptime: ", uptime() / 60 / 60);
