import { Request, Response, NextFunction } from "express";

export function logTime(req: Request, res: Response, next: NextFunction){

    console.log(req.method," request recibida en:", req.path, " ==> ", new Date().toLocaleString())

    next()
}
