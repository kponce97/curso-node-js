const http = require("node:http"); // Protocolo HTTP
const fs = require("node:fs");
const path = require("path");

//console.log(process.env);

const desiredPort = process.env.PORT ?? 4000;

// Procesar la req
const proccessRequest = (req, res) => {
	res.setHeader("Content-Type", "text/html; charset=utf-8");
	if (req.url === "/") {
		req.statusCode == 200;
		//res.setHeader("Content-Type", "text/plain; charset=utf-8"); // Texto plano
		//res.end("Bienvenido a mi pagina de inicio");
		//res.setHeader("Content-Type", "text/html"); // Texto html
		res.end("<h1>Bienvenido a mi pagina de inicio</h1>");
	} else if (req.url === "/spiderMan.png") {
		const imagePath = path.join(__dirname, "spider-man.png"); // Asegúrate que la ruta sea correcta

		fs.readFile(imagePath, (err, data) => {
			if (err) {
				res.statusCode = 500;
				res.end("<h1>Error internal server</h1>");
			} else {
				res.setHeader("Content-Type", "image/png");
				res.end(data);
			}
		});
	} else if (req.url === "/contacto") {
		const filePath = path.join(__dirname, "../index.html"); // Ruta al archivo HTML

		fs.readFile(filePath, "utf8", (err, data) => {
			if (err) {
				res.writeHead(500, { "Content-Type": "text/plain" });
				res.end("Error al leer el archivo");
				return;
			}
			res.writeHead(200, { "Content-Type": "text/html" }); // Establecer tipo de contenido HTML
			res.end(data); // Enviar el contenido del archivo HTML
		});

		//res.statusCode = 200;
		//res.end();
	} else {
		res.statusCode = 404;
		res.end("<h1>404</h1>");
	}
};
const server = http.createServer(proccessRequest);
/* 
	Una callback es una función que se pasa como argumento a otra 
	función para que se ejecute después, normalmente cuando ocurre 
	algo (como terminar una operación o dispararse un evento).
	La función que la recibe es la que decide cuándo ejecutarla.

	StatusCode ( http.cat )
		100-199: Respuestas informativas
		200-299: Respuestas satisfactorias
		300-399: Redirecciones
		400-499: Errores del cliente
		500-599: Errores del servidor

	Resetear el proceso --> --watch || nodemon (dependencia)
	-D --> dependencia de desarrollo
*/
server.listen(desiredPort, () => {
	console.log(`server listening in port http://localhost:${desiredPort}`);
});
