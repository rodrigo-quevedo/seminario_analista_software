import { DatosCompra } from "@customTypes/compra";
import { getMsjRequerido } from "@utils/mensajesError/mensajesError";

export default function validarCamposRequeridos(datosCompra: DatosCompra){
    
    if (datosCompra.cantidad == null) throw new Error(getMsjRequerido("cantidad"));
    
    if (datosCompra.descuento == null) throw new Error(getMsjRequerido("descuento")); //si el actor Cliente no ingresa descuento, el front debe enviar 0.

}