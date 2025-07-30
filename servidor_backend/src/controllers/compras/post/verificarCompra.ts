import { Request, Response} from "express";
import validarVerificarCompra from "@validations/compras/post/verificarCompra";

export function verificarCompra (req: Request, res: Response){
    
    const datosCompra = validarVerificarCompra(req.body);
    

    // Logica de verificacion de la compra:
    // (...)
    // (...)
    // (...)

    res.send("Datos enviados:"+ JSON.stringify(datosCompra))
}