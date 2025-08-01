import { DatosCompra } from "@customTypes/compra";
import TypeNumberError from "@errors/400/InvalidTypeErrors/TypeNumberError";
import TypeIntegerError from "@errors/400/InvalidTypeErrors/TypeIntegerError";

export default function validarTypes(datosCompra: DatosCompra){
    
    if (typeof datosCompra.cantidad !== 'number') throw new TypeNumberError("cantidad");
    if (typeof datosCompra.descuento !== 'number') throw new TypeNumberError("descuento");

    if (!Number.isInteger(datosCompra.cantidad)) throw new TypeIntegerError("cantidad");

}