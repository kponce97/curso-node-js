const ditto = require("./pokemon/ditto.json");
const express = require("express");
const app = express();

app.disable("x-powered-by");

const PORT = process.env.PORT ?? 4000;
app.use((req, res, next) => {
	//console.log("Mi primer middleware");
	if (req.method !== "POST") return next();
	if (req.headers["content-type"] !== "application/json") return next();

	let body = "";
	//escuchar el evento data
	req.on("data", (chunk) => {
		body += chunk.toString();
	});
	req.on("end", () => {
		const data = JSON.parse(body);
		data.timestamp = Date.now();
		//mutar la request y meter la info en el req.body
		req.body = data;
		next();
	});
});

app.get("/", (req, res) => {
	res.send("<h1>Mi pagina con Express</h1>");
});
app.get("/pokemon/ditto", (req, res) => {
	res.json(ditto);
});
app.post("/pokemon", (req, res) => {
	// req.body deberiamos guardar en BD
	res.status(201).json(req.body);
});

//La ultima a la que va a llegar
app.use((req, res) => {
	res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
	console.log(`Server listening on port http://localhost:${PORT}`);
});
