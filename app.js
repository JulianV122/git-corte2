const express = require("express");
/* app conectar por el puerto local el express
    especificar los middleware a utilizar */
const app = express();

const API_VERSION = 'api/v1'

const workerRoutes = require("./routes/worker");
const personRoutes = require("./routes/person");

//Pruebas con extension REST Client
app.use(express.json());

//Pruebas desde postman
app.use(express.urlencoded({extended:true}));

//http://localhost:3100/api/v1/workers
app.use(`/${API_VERSION}/workers`,workerRoutes);
app.use(`/${API_VERSION}/persons`,personRoutes);


module.exports = app;
