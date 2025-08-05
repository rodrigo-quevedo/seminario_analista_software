import { Request, Response} from "express";
import validarHacerPago from "@validations/pagos/post/hacerPago";

export function hacerPago(req: Request, res: Response) {
    
    const datosCompra = validarHacerPago(req.body);    

    

}