import { Request, Response, NextFunction } from "express";

export default function errorHandler(e:Error, req: Request, res: Response, next: NextFunction){

    console.log("Error:", e.name, ". Descripcion:", e.message)

    
}
