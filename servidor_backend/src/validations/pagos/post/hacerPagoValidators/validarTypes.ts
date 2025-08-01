import { DatosPago } from "@customTypes/pagos";
import TypeNumberError from "@errors/400/InvalidTypeErrors/TypeNumberError";
import TypeIntegerError from "@errors/400/InvalidTypeErrors/TypeIntegerError";
import TypeStringError from "@errors/400/InvalidTypeErrors/TypeStringError";

export default function validarTypes(datosPago: DatosPago){
    
    if (typeof datosPago.cantidadCuotas !== 'number') throw new TypeNumberError("cantidadCuotas");
    if (!Number.isInteger(datosPago.cantidadCuotas)) throw new TypeIntegerError("cantidadCuotas");

    if (typeof datosPago.codigoSeguridad !== 'string') throw new TypeStringError("codigoSeguridad");
    
    if (typeof datosPago.documento !== 'string') throw new TypeStringError("documento");
    
    if (typeof datosPago.idTarjeta !== 'string') throw new TypeStringError("idTarjeta");
    
    if (typeof datosPago.mail !== 'string') throw new TypeStringError("mail");
    
    if (typeof datosPago.titular !== 'string') throw new TypeStringError("titular");

    if (typeof datosPago.vencimiento !== 'string') throw new TypeStringError("vencimiento");

}