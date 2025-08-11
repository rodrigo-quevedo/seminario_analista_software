import { DatosVerificarCompra } from "@customTypes/compra";
import TypeNumberError from "@errors/400/InvalidTypeErrors/TypeNumberError";
import TypeIntegerError from "@errors/400/InvalidTypeErrors/TypeIntegerError";
import TypeStringError from "@errors/400/InvalidTypeErrors/TypeStringError";

export default function validarTypes(datosCompra: DatosVerificarCompra){
    
    if (typeof datosCompra.idProducto !== 'string') throw new TypeStringError("idProducto");

    if (typeof datosCompra.cantidad !== 'number') throw new TypeNumberError("cantidad");
    if (typeof datosCompra.descuento !== 'number') throw new TypeNumberError("descuento");

    if (!Number.isInteger(datosCompra.cantidad)) throw new TypeIntegerError("cantidad");

}