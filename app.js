/*
const http = require("http");

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World/n");
});
*/

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
//Conclusiones
//Sucede que al ejecutar se queda ejecutando la terminal, lo que significa que esta encendido por asi decirlo, y al abrirlo en el navegador con localhost:(numero de puerto) se puede ver lo que pusimos en el callbackfunctions
