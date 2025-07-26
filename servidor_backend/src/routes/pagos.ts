import { Request, Response, Router } from "express";
import { DatosPago } from "../types/pagos";
import { getMsjRequerido } from "../utils/mensajesError/mensajesError";



const router = Router();

router.post('/', (req: Request, res: Response) =>
{
    if (req.body === undefined || req.body === null) throw new Error("No hay un JSON valido en la HTTP request Body.");

    const datosPago = req.body as DatosPago;

    //Validar inputs 
    if (datosPago.cantidadCuotas == null) throw new Error(getMsjRequerido("cantidadCuotas"));
    if (datosPago.codigoSeguridad == null) throw new Error(getMsjRequerido("codigoSeguridad"));
    if (datosPago.documento == null) throw new Error(getMsjRequerido("documento"));
    if (datosPago.idTarjeta == null) throw new Error(getMsjRequerido("idTarjeta"));
    if (datosPago.mail == null) throw new Error(getMsjRequerido("mail"));
    if (datosPago.titular == null) throw new Error(getMsjRequerido("titular"));
    if (datosPago.vencimiento == null) throw new Error(getMsjRequerido("vencimiento"));


    console.log("Datos enviados:", datosPago);

    res.send("ok");
})



export default router;