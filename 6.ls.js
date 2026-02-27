const fs = require("node:fs");
fs.readdir(".", (err, files) => {
	if (err) {
		console.error("Error al leer el directorio: ", err);
		return;
	}
	files.forEach((file) => {
		console.log(file);
	});
});

/* 
fs.readdir(path, callback): Esta función lee el contenido de un 
directorio en el sistema de archivos.

path: La ruta del directorio que deseas leer. En este caso, . 
representa el directorio actual.

callback(err, files): Es una función de retorno (callback) que se |
ejecuta una vez que se ha leído el directorio. Recibe dos 
parámetros:

err: Un objeto de error si ocurrió un problema al leer el 
directorio. Si todo va bien, será null.

files: Un arreglo con los nombres de los archivos y subdirectorios 
dentro del directorio especificado.

*/