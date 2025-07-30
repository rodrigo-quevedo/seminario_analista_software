import { DatosCompra } from "@customTypes/compra";
import { getMsjMayorCero, getMsjMayorIgualCero } from "@utils/mensajesError/mensajesError";

export default function validarRangosDeValor(datosCompra: DatosCompra){
    
    if (datosCompra.cantidad <= 0) throw new Error(getMsjMayorCero("cantidad"));
    
    if (datosCompra.descuento < 0) throw new Error(getMsjMayorIgualCero("cantidad"));

}