import { DatosCompra } from "@customTypes/compra";
import InvalidStringFormatError from "@errors/400/InvalidFormatErrors/InvalidStringFormatError";
import MayorCeroError from "@errors/400/ValueRangeErrors/MayorCeroError";
import MayorIgualCeroError from "@errors/400/ValueRangeErrors/MayorIgualCeroError";
import mongoose from "mongoose";

export default function validarRangosDeValor(datosCompra: DatosCompra){
    
    if (! mongoose.Types.ObjectId.isValid(datosCompra.idProducto) ) throw new InvalidStringFormatError("idProducto", "string con 24 caracteres hexadecimales")
        
    if (datosCompra.cantidad <= 0) throw new MayorCeroError("cantidad");
    
    if (datosCompra.descuento < 0) throw new MayorIgualCeroError("descuento");

}