import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";

export function errorHandler(e:CustomError, req: Request, res: Response, next: NextFunction){

    console.log("Error:", e.name, ". Descripcion:", e.message);

    res.status(e.statusCode);
    res.send("Error: "+ e.name + ". Descripcion: " + e.message);
}
