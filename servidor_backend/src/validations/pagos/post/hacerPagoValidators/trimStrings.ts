import { DatosCompra } from "@customTypes/pagos";

export default function trimStrings(datosCompra: DatosCompra): DatosCompra{

    datosCompra.token = datosCompra.token.trim();
    datosCompra.payment_method_id = datosCompra.payment_method_id.trim();
    datosCompra.issuer_id = datosCompra.issuer_id.trim();

    datosCompra.payer.email = datosCompra.payer.email.trim();
    datosCompra.payer.identification.type = datosCompra.payer.identification.type.trim();
    datosCompra.payer.identification.number = datosCompra.payer.identification.number.trim();

    datosCompra.idProducto = datosCompra.idProducto.trim();


    return datosCompra;
}