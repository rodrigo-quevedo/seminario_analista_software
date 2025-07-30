import { Request, Response} from "express";
import validarHacerPago from "@validations/pagos/post/hacerPago";

export function hacerPago(req: Request, res: Response) {
    
    const datosPago = validarHacerPago(req.body)    

    console.log("Datos enviados:", datosPago);

    res.send("ok");
}