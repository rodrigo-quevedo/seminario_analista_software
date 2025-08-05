import { DatosCompra } from "@customTypes/pagos";
import TypeNumberError from "@errors/400/InvalidTypeErrors/TypeNumberError";
import TypeIntegerError from "@errors/400/InvalidTypeErrors/TypeIntegerError";
import TypeStringError from "@errors/400/InvalidTypeErrors/TypeStringError";

export default function validarTypes(datosCompra: DatosCompra){

    if (typeof datosCompra.pago.cantidadCuotas !== 'number') throw new TypeNumberError("pago.cantidadCuotas");
    if (!Number.isInteger(datosCompra.pago.cantidadCuotas)) throw new TypeIntegerError("pago.cantidadCuotas");

    if (typeof datosCompra.pago.codigoSeguridad !== 'string') throw new TypeStringError("pago.codigoSeguridad");
    if (typeof datosCompra.pago.documento !== 'string') throw new TypeStringError("pago.documento");
    if (typeof datosCompra.pago.idTarjeta !== 'string') throw new TypeStringError("pago.idTarjeta");
    if (typeof datosCompra.pago.mail !== 'string') throw new TypeStringError("pago.mail");
    if (typeof datosCompra.pago.titular !== 'string') throw new TypeStringError("pago.titular");
    if (typeof datosCompra.pago.vencimiento !== 'string') throw new TypeStringError("pago.vencimiento");



    if (typeof datosCompra.cantidad !== 'number') throw new TypeNumberError("cantidad");
    if (!Number.isInteger(datosCompra.cantidad)) throw new TypeIntegerError("cantidad");

    if (typeof datosCompra.descuento != 'number') throw new TypeNumberError("descuento");
    
    if (typeof datosCompra.idProducto !== 'string') throw new TypeStringError("idProducto");

}