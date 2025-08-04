import RequestAutenticada from "@customTypes/Request/RequestAutenticada";
import UserNotAuthenticatedError from "@errors/400/UserNotAuthenticatedError";
import { NextFunction, Response } from "express";
import mongoose from "mongoose";


export default function simularAuth(req: RequestAutenticada, res: Response, next: NextFunction){

    //Verificar que haya un campo userId en el req.body y asignarlo al objeto 'req'
    
    if (req.body.idUsuario && mongoose.Types.ObjectId.isValid(req.body.idUsuario)) //if(valor) en JavaScript verifica != '', != 0, != null y != undefined
        req.idUsuario = req.body.idUsuario 
    
    else throw new UserNotAuthenticatedError();

    next()
}