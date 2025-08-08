import { DatosCompra } from "@customTypes/pagos";
import EmptyStringError from "@errors/400/EmptyStringError";

//Requisitos de esta validacion: 
    //se verificó el type string de todos los atributos verificados aqui
    //se uso trim() en los mismos

export default function validarEmptyStrings(datosCompra: DatosCompra){
    
    if (datosCompra.token === '') throw new EmptyStringError("token");
    if (datosCompra.payment_method_id === '') throw new EmptyStringError("payment_method_id");
    if (datosCompra.issuer_id === '') throw new EmptyStringError("issuer_id");

    if (datosCompra.payer.email === '') throw new EmptyStringError("payer.email");
    if (datosCompra.payer.identification.type === '') throw new EmptyStringError("payer.identification.type");
    if (datosCompra.payer.identification.number === '') throw new EmptyStringError("payer.identification.number");

    if (datosCompra.idProducto === '') throw new EmptyStringError("idProducto");
}