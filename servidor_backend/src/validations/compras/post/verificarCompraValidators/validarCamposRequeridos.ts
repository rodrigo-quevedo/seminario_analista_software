import { DatosCompra } from "@customTypes/compra";
import FieldRequiredError from "@errors/400/FieldRequiredError";

export default function validarCamposRequeridos(datosCompra: DatosCompra){
    
    if (datosCompra.idProducto == null) throw new FieldRequiredError("idProducto");

    if (datosCompra.cantidad == null) throw new FieldRequiredError("cantidad");
    
    if (datosCompra.descuento == null) throw new FieldRequiredError("descuento"); //si el actor Cliente no ingresa descuento, el front debe enviar 0.

}