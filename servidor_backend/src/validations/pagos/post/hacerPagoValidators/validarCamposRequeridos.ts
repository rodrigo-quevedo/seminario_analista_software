import { DatosCompra, Pago } from "@customTypes/pagos";
import FieldRequiredError from "@errors/400/FieldRequiredError";

export default function validarCamposRequeridos(datosCompra: DatosCompra){
    
    if (datosCompra.pago == null) throw new FieldRequiredError("pago");
    
    if (datosCompra.pago.cantidadCuotas == null) throw new FieldRequiredError("pago.cantidadCuotas");
    if (datosCompra.pago.codigoSeguridad == null) throw new FieldRequiredError("pago.codigoSeguridad");
    if (datosCompra.pago.documento == null) throw new FieldRequiredError("pago.documento");
    if (datosCompra.pago.idTarjeta == null) throw new FieldRequiredError("pago.idTarjeta");
    if (datosCompra.pago.mail == null) throw new FieldRequiredError("pago.mail");
    if (datosCompra.pago.titular == null) throw new FieldRequiredError("pago.titular");
    if (datosCompra.pago.vencimiento == null) throw new FieldRequiredError("pago.vencimiento");

    if (datosCompra.cantidad == null) throw new FieldRequiredError("cantidad");
    if (datosCompra.descuento == null) throw new FieldRequiredError("descuento");
    if (datosCompra.idProducto == null) throw new FieldRequiredError("idProducto");

};