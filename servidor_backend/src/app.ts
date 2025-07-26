// Este archivo inicia el framework express.js, el cual se maneja con el objeto app
// Express es un framework simple que permite manejar requests a endpoints con app.[metodo]()
// Tambien permite ejecutar middlewares con app.use()

import express from "express";
import logTime from "./middleware/logTime";
import errorHandler from "./middleware/errorHandler";
import router from './routes/index';



const app = express();

app.use(logTime); // Mostrar fechahora en que la request llega al servidor
app.use(express.json());//Parsear el req.body, es obligatorio que venga en formato JSON

app.use(router); // Manejar endpoints de la API

app.use(errorHandler); // Manejo de errores. Obligatorio hacer catch del error en el endpoint y llamar a next()


export default app;
