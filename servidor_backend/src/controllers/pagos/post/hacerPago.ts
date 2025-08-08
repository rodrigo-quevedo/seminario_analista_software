import {Response} from "express";
import validarHacerPago from "@validations/pagos/post/hacerPago";
import RequestAutenticada from "@customTypes/Request/RequestAutenticada";

export function hacerPago(req: RequestAutenticada, res: Response) {
    
    const datosCompra = validarHacerPago(req.body);    

    console.log('ID usuario:', req.idUsuario);
    console.log('datos compra:', datosCompra);

    res.json({idUsuario: req.idUsuario, datosCompra});

}