const http = require("node:http");
// commonJS -> modulos calsicos de node
const dittoJSON = require("./pokemon/ditto.json");

const desiredPort = process.env.PORT ?? 4000;
const proccessRequest = (req, res) => {
	const { method, url } = req;
	switch (method) {
		case "GET":
			switch (url) {
				case "/pokemon/ditto": {
					res.setHeader("Content-Type", "text/json; charset=utf-8");
					const strJSON = JSON.stringify(dittoJSON);
					return res.end(strJSON);
				}
				default: {
					res.statusCode = 404;
					res.setHeader("Content-Type", "text/html; charset=utf-8");

					res.end("<h1>404</h1>");
				}
			}
		case "POST":
			switch (url) {
				case "/pokemon": {
					let body = "";
					//escuchar el evento data
					req.on("data", (chunk) => {
						body += chunk.toString();
					});
					req.on("end", () => {
						const data = JSON.parse(body);
						//Llamar a una BD para guardar la info
						res.writeHead(201, {
							"Content-Type": "application/json; charset=utf-8",
						});
						res.end(JSON.stringify(data));
					});
					break
				}
				default: {
					res.statusCode = 404;
					res.setHeader("Content-Type", "text/plain; charset=utf-8");

					res.end("404 Not Found");
				}
			}
	}
};

const server = http.createServer(proccessRequest);

server.listen(desiredPort, () => {
	console.log(`Server listening ong port http://localhost:${desiredPort}`);
});
