import { Request, Response, Router } from "express";
import { DatosCompra } from "../types/compra";
import { getMsjMayorCero, getMsjMayorIgualCero, getMsjRequerido, getMsjTipoInteger, getMsjTipoNumber } from "../utils/mensajesError/mensajesError";

const router = Router();

router.post('/verificar', (req: Request, res: Response) =>
{
    const datosCompra = req.body as DatosCompra;
    
    //Validar inputs
    if (datosCompra.cantidad == null) throw new Error(getMsjRequerido("cantidad"));
    if (datosCompra.descuento == null) throw new Error(getMsjRequerido("descuento")); //si el actor Cliente no ingresa descuento, el front debe enviar 0.

    if (typeof datosCompra.cantidad !== 'number') throw new Error (getMsjTipoNumber("cantidad"));
    if (typeof datosCompra.descuento !== 'number') throw new Error (getMsjTipoNumber("descuento"));

    if (!Number.isInteger(datosCompra.cantidad)) throw new Error(getMsjTipoInteger("cantidad"));
    
    datosCompra.descuento = Number(datosCompra.descuento.toFixed(2)); // limpio decimales sobrantes (si llegan mas de 2 decimales el error es del usuario, ya que el front se va a programar para enviar 2 decimales)

    if (datosCompra.cantidad <= 0) throw new Error(getMsjMayorCero("cantidad"));
    if (datosCompra.descuento < 0) throw new Error(getMsjMayorIgualCero("cantidad"));


    // Logica de verificacion de la compra:
    // (...)
    // (...)
    // (...)

});



export default router;