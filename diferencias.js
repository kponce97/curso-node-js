console.log("Inicio CODIGO SINCRONO");
/* Aquí, tarea1() se ejecuta primero, y luego se ejecuta tarea2(). No hay 
ninguna espera o concurrencia. Todo es secuencial. */
function tarea1() {
	console.log("Tarea 1");
}

function tarea2() {
	console.log("Tarea 2");
}

tarea1();
tarea2();

console.log("Fin");

console.log("------------------------------------\n");
console.log("Inicio CODIGO ASINCRONO SECUENCIAL");
/* Aquí, tarea1() se ejecuta primero, luego se espera a que termine (gracias 
al await), después se ejecuta tarea2(), en un orden secuencial. */
async function tarea1() {
	console.log("Tarea 1 en progreso...");
	await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1 segundo
	console.log("Tarea 1 completada");
}

async function tarea2() {
	console.log("Tarea 2 en progreso...");
	await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1 segundo
	console.log("Tarea 2 completada");
}

async function ejecutar() {
	await tarea1(); // Espera que tarea1 termine
	await tarea2(); // Luego espera que tarea2 termine
	console.log("Fin");
}

ejecutar();

console.log("------------------------------------\n");
console.log("Inicio CODIGO ASINCRONO PARALELO");
/* 
Aquí, tarea1() y tarea2() se ejecutan en paralelo (al mismo tiempo). Promise.all() asegura que el código espere a que ambas tareas se resuelvan antes de imprimir "Fin".
 */
async function tarea1() {
	console.log("Tarea 1 en progreso...");
	await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1 segundo
	console.log("Tarea 1 completada");
}

async function tarea2() {
	console.log("Tarea 2 en progreso...");
	await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1 segundo
	console.log("Tarea 2 completada");
}

async function ejecutar() {
	// Ejecutar ambas tareas al mismo tiempo
	const promesas = [tarea1(), tarea2()];
	await Promise.all(promesas); // Esperar a que ambas se resuelvan
	console.log("Fin");
}

ejecutar();
