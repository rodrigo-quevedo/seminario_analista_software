import { DatosCompra } from "@customTypes/pagos";
import TypeNumberError from "@errors/400/InvalidTypeErrors/TypeNumberError";
import TypeIntegerError from "@errors/400/InvalidTypeErrors/TypeIntegerError";
import TypeStringError from "@errors/400/InvalidTypeErrors/TypeStringError";

export default function validarTypes(datosCompra: DatosCompra){

    if (datosCompra.token == null) throw new TypeStringError("token");
    if (datosCompra.payment_method_id == null) throw new TypeStringError("payment_method_id");
    if (datosCompra.issuer_id == null) throw new TypeStringError("issuer_id");

    if (typeof datosCompra.installments !== 'number') throw new TypeNumberError("installments");
    if (!Number.isInteger(datosCompra.installments)) throw new TypeIntegerError("installments");

    if (datosCompra.payer.email == null) throw new TypeStringError("payer.email");
    if (datosCompra.payer.identification.type == null) throw new TypeStringError("payer.identification.type");
    if (datosCompra.payer.identification.number == null) throw new TypeStringError("payer.identification.number");

    
    if (typeof datosCompra.idProducto !== 'string') throw new TypeStringError("idProducto");
    
    if (typeof datosCompra.cantidad !== 'number') throw new TypeNumberError("cantidad");
    if (!Number.isInteger(datosCompra.cantidad)) throw new TypeIntegerError("cantidad");

    if (typeof datosCompra.descuento != 'number') throw new TypeNumberError("descuento");

}