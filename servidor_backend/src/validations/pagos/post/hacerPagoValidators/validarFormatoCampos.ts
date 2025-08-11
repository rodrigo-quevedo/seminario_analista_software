import { DatosCompra } from "@customTypes/pagos";
import InvalidStringFormatError from "@errors/400/InvalidFormatErrors/InvalidStringFormatError";
import InvalidRangeError from "@errors/400/ValueRangeErrors/InvalidRangeError";
import mongoose from "mongoose";
import MayorCeroError from "@errors/400/ValueRangeErrors/MayorCeroError";
import MayorIgualCeroError from "@errors/400/ValueRangeErrors/MayorIgualCeroError";


export default function validarFormatoCampos(datosCompra: DatosCompra){

    //Datos pago
    if (datosCompra.installments < 1 || datosCompra.installments > 24) throw new InvalidRangeError("installments", "1 a 24 inclusives");
    
    if (! /^\d{7,9}$/.test(datosCompra.payer.identification.number)) throw new InvalidStringFormatError("documento", "de 7 a 9 digitos con valores del 0 al 9");
    

    //ACLARACIÓN: Las siguientes Regexp solo validan lowercase porque las variables ya están en lowercase.

    datosCompra.payer.email = datosCompra.payer.email.toLowerCase();//el mail es case insensitive. no acepta 'ñ' ni 'tildes'. casi todos (99%) los proveedores de mail siguen ese formato, y NO permiten otros caracteres especiales
    if (! /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(datosCompra.payer.email)) throw new InvalidStringFormatError("payer.email", "solo letras (sin acentos o tildes) y numeros. Caracteres especiales: . (punto), - (guion medio). No se aceptan otros caracteres");


    //Datos compra
    if (! mongoose.Types.ObjectId.isValid(datosCompra.idProducto) ) throw new InvalidStringFormatError("idProducto", "string con 24 caracteres hexadecimales");
        
    if (datosCompra.cantidad <= 0) throw new MayorCeroError("cantidad");
    
    if (datosCompra.descuento < 0) throw new MayorIgualCeroError("descuento");


}
