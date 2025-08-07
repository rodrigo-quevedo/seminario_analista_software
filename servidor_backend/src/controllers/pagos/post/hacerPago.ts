import { Request, Response} from "express";
import validarHacerPago from "@validations/pagos/post/hacerPago";

export function hacerPago(req: Request, res: Response) {
    
    // const datosCompra = req.body;


    const datosCompra = validarHacerPago(req.body);    

    console.log('datos compra:', datosCompra)

}