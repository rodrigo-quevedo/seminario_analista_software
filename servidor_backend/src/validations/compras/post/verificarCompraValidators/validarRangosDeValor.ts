import { DatosCompra } from "@customTypes/compra";
import MayorCeroError from "../../../../errors/400/ValueRangeErrors/MayorCeroError";
import MayorIgualCeroError from "../../../../errors/400/ValueRangeErrors/MayorIgualCeroError";

export default function validarRangosDeValor(datosCompra: DatosCompra){
    
    if (datosCompra.cantidad <= 0) throw new MayorCeroError("cantidad");
    
    if (datosCompra.descuento < 0) throw new MayorIgualCeroError("cantidad");

}