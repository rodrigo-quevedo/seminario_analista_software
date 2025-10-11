import { Request, Response, NextFunction } from "express";
import CustomError from "../errors/CustomError";

export function errorHandler(e:Error, req: Request, res: Response, next: NextFunction){

    let customError = e as CustomError;

    // console.log("Error:", e.name, ". Descripcion:", e.message);
    console.log(e);

    res.status(customError.statusCode || 500);
    // res.send("Error: "+ e.name + ". Descripcion: " + e.message);
    res.json({
        name: e.name,
        descripcion: e.message
    });
}
