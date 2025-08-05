import { Response } from "express";
import validarVerificarCompra from "@validations/compras/post/verificarCompra";
import RequestAutenticada from "@customTypes/Request/RequestAutenticada";
import verificarCompraService from "@services/compras/verificarCompraService";
import UserNotAuthenticatedError from "@errors/400/UserNotAuthenticatedError";

export async function verificarCompraController (req: RequestAutenticada, res: Response){
    
    const datosCompra = validarVerificarCompra(req.body);
    
    const idUsuario = req.idUsuario as string;
    if (! idUsuario) throw new UserNotAuthenticatedError();


    // Logica de verificacion de la compra:
    await verificarCompraService(datosCompra, idUsuario);


    res.sendStatus(200);    
}