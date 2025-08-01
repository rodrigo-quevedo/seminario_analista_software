import { DatosPago } from "@customTypes/pagos";
import InvalidStringFormatError from "@errors/400/InvalidFormatErrors/InvalidStringFormatError";
import InvalidRangeError from "@errors/400/ValueRangeErrors/InvalidRangeError";
import validarVencimiento from "./validarVencimiento";
import TarjetaVencidaError from "@errors/400/TarjetaVencidaError";


export default function validarFormatoCampos(datosPago: DatosPago){

    if (datosPago.cantidadCuotas < 1 || datosPago.cantidadCuotas > 24) throw new InvalidRangeError("cantidadCuotas", "1 a 24 inclusives");

    if (! /^\d{3,4}$/.test(datosPago.codigoSeguridad)) throw new InvalidStringFormatError("codigoSeguridad", "de 3 a 4 digitos con valores del 0 al 9");
        
    if (! /^\d{7,9}$/.test(datosPago.documento)) throw new InvalidStringFormatError("documento", "de 7 a 9 digitos con valores del 0 al 9");

    if (! /^\d{12,19}$/.test(datosPago.idTarjeta)) throw new InvalidStringFormatError("idTarjeta", "de 12 a 19 digitos con valores del 0 al 9");
    

    //ACLARACIÓN: Las siguientes Regexp solo validan lowercase porque las variables ya están en lowercase.

    datosPago.mail = datosPago.mail.toLowerCase();//el mail es case insensitive. no acepta 'ñ' ni 'tildes'. casi todos (99%) los proveedores de mail siguen ese formato, y NO permiten otros caracteres especiales
    if (! /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(datosPago.mail)) throw new InvalidStringFormatError("mail", "solo letras (sin acentos o tildes) y numeros. Caracteres especiales: . (punto), - (guion medio). No se aceptan otros caracteres");


    datosPago.titular = datosPago.titular.toLowerCase();//titular tambien es case insensitive
    if (! /^[a-záéíóúñü ]{4,50}$/.test(datosPago.titular)) throw new InvalidStringFormatError("titular", "solo letras, incluyendo la 'Ñ'. Caracteres especiales:  (espacio/spacebar). No se aceptan otros caracteres");


    if (! /^\d{2}\/\d{3}$/.test(datosPago.vencimiento)) throw new InvalidStringFormatError("vencimiento", "MM/AA, donde M y A representan digitos del 0 al 9");

    if (! validarVencimiento(datosPago.vencimiento)) throw new TarjetaVencidaError("vencimiento");

}
