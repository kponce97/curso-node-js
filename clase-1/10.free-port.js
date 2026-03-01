// Importa el módulo 'net' para crear servidores TCP
const net = require("node:net");

// Importa la función resolve del módulo 'path' (no se usa en este código)
//const { resolve } = require("node:path");

// Importa availableMemory del proceso (tampoco se usa aquí)
const { availableMemory } = require("node:process");

// Función que busca un puerto disponible
function findAvailablePort(desiredPort) {
	// Retorna una nueva Promesa (operación asíncrona)
	return new Promise((resolve, reject) => {
		// Crea un servidor TCP
		const server = net.createServer();

		// Intenta escuchar en el puerto deseado
		server.listen(desiredPort, () => {
			// Obtiene el puerto asignado (especialmente útil si es 0)
			const { port } = server.address();

			// Cierra el servidor
			server.close(() => {
				// Resuelve la promesa devolviendo el puerto disponible
				resolve(port);
			});
		});

		// ⚠️ Esta línea resuelve la promesa inmediatamente con 0 (probablemente error)
//		resolve(0);

		// Maneja errores al intentar usar el puerto
		server.on("error", (err) => {
			// Si el puerto está en uso
			if (err.code === "EADDRINUSE") {
				// Intenta encontrar otro puerto disponible automáticamente
				findAvailablePort(0).then(resolve);
			} else {
				// Si es otro error, rechaza la promesa
				reject(err);
			}
		});
	});
}

// Exporta la función para poder usarla en otros archivos
module.exports = { findAvailablePort };
