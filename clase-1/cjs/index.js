// .js -> por defecto utilza CommonJS
// .mjs -> para utilizar ES Modulesr
// .cjs -> para utilizar  CommonJS

console.log("hola mundoo");
//console.log(global); // <-- VARIBALE GLOBAL DE NodeJs
/* Todo lo que es GLOBAL, sale del 'this' */

const { sum } = require("./sum"); //Forma clasica, pero no recomendable, de importar una funcion

console.log(sum(1, 2));
