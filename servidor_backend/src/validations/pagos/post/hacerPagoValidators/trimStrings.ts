import { DatosPago } from "@customTypes/pagos";

export default function trimStrings(datosPago: DatosPago): DatosPago{

    datosPago.codigoSeguridad = datosPago.codigoSeguridad.trim();
    datosPago.documento = datosPago.documento.trim();
    datosPago.idTarjeta = datosPago.idTarjeta.trim();
    datosPago.mail = datosPago.mail.trim();
    datosPago.titular = datosPago.titular.trim();
    datosPago.vencimiento = datosPago.vencimiento.trim();


    return datosPago;
}