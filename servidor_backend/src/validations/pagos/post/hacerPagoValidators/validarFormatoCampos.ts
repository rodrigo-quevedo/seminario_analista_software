import { DatosCompra } from "@customTypes/pagos";
import InvalidStringFormatError from "@errors/400/InvalidFormatErrors/InvalidStringFormatError";
import InvalidRangeError from "@errors/400/ValueRangeErrors/InvalidRangeError";
import validarVencimiento from "./validarVencimiento";
import TarjetaVencidaError from "@errors/400/TarjetaVencidaError";
import mongoose from "mongoose";
import MayorCeroError from "@errors/400/ValueRangeErrors/MayorCeroError";
import MayorIgualCeroError from "@errors/400/ValueRangeErrors/MayorIgualCeroError";


export default function validarFormatoCampos(datosCompra: DatosCompra){

    //Datos pago

    if (datosCompra.pago.cantidadCuotas < 1 || datosCompra.pago.cantidadCuotas > 24) throw new InvalidRangeError("cantidadCuotas", "1 a 24 inclusives");

    if (! /^\d{3,4}$/.test(datosCompra.pago.codigoSeguridad)) throw new InvalidStringFormatError("codigoSeguridad", "de 3 a 4 digitos con valores del 0 al 9");
        
    if (! /^\d{7,9}$/.test(datosCompra.pago.documento)) throw new InvalidStringFormatError("documento", "de 7 a 9 digitos con valores del 0 al 9");

    if (! /^\d{12,19}$/.test(datosCompra.pago.idTarjeta)) throw new InvalidStringFormatError("idTarjeta", "de 12 a 19 digitos con valores del 0 al 9");
    

    //ACLARACIÓN: Las siguientes Regexp solo validan lowercase porque las variables ya están en lowercase.

    datosCompra.pago.mail = datosCompra.pago.mail.toLowerCase();//el mail es case insensitive. no acepta 'ñ' ni 'tildes'. casi todos (99%) los proveedores de mail siguen ese formato, y NO permiten otros caracteres especiales
    if (! /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(datosCompra.pago.mail)) throw new InvalidStringFormatError("mail", "solo letras (sin acentos o tildes) y numeros. Caracteres especiales: . (punto), - (guion medio). No se aceptan otros caracteres");


    datosCompra.pago.titular = datosCompra.pago.titular.toLowerCase();//titular tambien es case insensitive
    if (! /^[a-záéíóúñü ]{4,50}$/.test(datosCompra.pago.titular)) throw new InvalidStringFormatError("titular", "solo letras, incluyendo la 'Ñ'. Caracteres especiales:  (espacio/spacebar). No se aceptan otros caracteres. Longitud entre 4 y 50 caracteres");


    if (! /^\d{2}\/\d{2}$/.test(datosCompra.pago.vencimiento)) throw new InvalidStringFormatError("vencimiento", "MM/AA, donde M y A representan digitos del 0 al 9");

    if (! validarVencimiento(datosCompra.pago.vencimiento)) throw new TarjetaVencidaError("vencimiento");


    //Datos compra

    if (! mongoose.Types.ObjectId.isValid(datosCompra.idProducto) ) throw new InvalidStringFormatError("idProducto", "string con 24 caracteres hexadecimales");
        
    if (datosCompra.cantidad <= 0) throw new MayorCeroError("cantidad");
    
    if (datosCompra.descuento < 0) throw new MayorIgualCeroError("descuento");


}
