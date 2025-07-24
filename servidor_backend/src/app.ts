// Este archivo inicia el framework express.js, el cual se maneja con el objeto app
// Express es un framework simple que permite manejar requests a endpoints con app.[metodo]()
// Tambien permite ejecutar middlewares con app.use()

import express from "express";
import { Request, Response } from "express";

import router from './routes/index'
import logTime from "./middleware/logTime";



const app = express();

console.log('primero va esto')
app.use(logTime)

console.log('luego esto otro')
app.use(router)


console.log('y al final, esto')
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

export default app;
