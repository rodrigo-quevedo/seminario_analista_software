import { DatosCompra } from "@customTypes/pagos";

export default function trimStrings(datosCompra: DatosCompra): DatosCompra{

    datosCompra.pago.codigoSeguridad = datosCompra.pago.codigoSeguridad.trim();
    datosCompra.pago.documento = datosCompra.pago.documento.trim();
    datosCompra.pago.idTarjeta = datosCompra.pago.idTarjeta.trim();
    datosCompra.pago.mail = datosCompra.pago.mail.trim();
    datosCompra.pago.titular = datosCompra.pago.titular.trim();
    datosCompra.pago.vencimiento = datosCompra.pago.vencimiento.trim();

    datosCompra.idProducto = datosCompra.idProducto.trim();


    return datosCompra;
}