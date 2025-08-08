import { DatosCompra } from "@customTypes/pagos";
import TypeNumberError from "@errors/400/InvalidTypeErrors/TypeNumberError";
import TypeIntegerError from "@errors/400/InvalidTypeErrors/TypeIntegerError";
import TypeStringError from "@errors/400/InvalidTypeErrors/TypeStringError";

export default function validarTypes(datosCompra: DatosCompra){

    if (typeof datosCompra.token !== 'string') throw new TypeStringError("token");
    if (typeof datosCompra.payment_method_id !== 'string') throw new TypeStringError("payment_method_id");
    if (typeof datosCompra.issuer_id !== 'string') throw new TypeStringError("issuer_id");

    if (typeof datosCompra.installments !== 'number') throw new TypeNumberError("installments");
    if (!Number.isInteger(datosCompra.installments)) throw new TypeIntegerError("installments");

    if (typeof datosCompra.payer.email !== 'string') throw new TypeStringError("payer.email");
    if (typeof datosCompra.payer.identification.type !== 'string') throw new TypeStringError("payer.identification.type");
    if (typeof datosCompra.payer.identification.number !== 'string') throw new TypeStringError("payer.identification.number");

    
    if (typeof datosCompra.idProducto !== 'string') throw new TypeStringError("idProducto");
    
    if (typeof datosCompra.cantidad !== 'number') throw new TypeNumberError("cantidad");
    if (!Number.isInteger(datosCompra.cantidad)) throw new TypeIntegerError("cantidad");

    if (typeof datosCompra.descuento != 'number') throw new TypeNumberError("descuento");

}