import { DatosPago } from "@customTypes/pagos";
import { getMsjRequerido } from "@utils/mensajesError/mensajesError";

export default function validarCamposRequeridos(datosPago: DatosPago){
    if (datosPago.cantidadCuotas == null) throw new Error(getMsjRequerido("cantidadCuotas"));
    if (datosPago.codigoSeguridad == null) throw new Error(getMsjRequerido("codigoSeguridad"));
    if (datosPago.documento == null) throw new Error(getMsjRequerido("documento"));
    if (datosPago.idTarjeta == null) throw new Error(getMsjRequerido("idTarjeta"));
    if (datosPago.mail == null) throw new Error(getMsjRequerido("mail"));
    if (datosPago.titular == null) throw new Error(getMsjRequerido("titular"));
    if (datosPago.vencimiento == null) throw new Error(getMsjRequerido("vencimiento"));
};