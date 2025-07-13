// Este archivo inicia el framework express.js, el cual se maneja con el objeto app
// Express es un framework simple que permite manejar requests a endpoints con app.[metodo]()
// Tambien permite ejecutar middlewares con app.use()

import { Request, Response } from "express";

import express from "express";
import logTime from "./middleware/logTime";

const app = express();

app.use(logTime)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

export default app;
