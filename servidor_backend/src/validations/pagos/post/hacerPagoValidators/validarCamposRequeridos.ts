import { DatosCompra } from "@customTypes/pagos";
import FieldRequiredError from "@errors/400/FieldRequiredError";

export default function validarCamposRequeridos(datosCompra: DatosCompra){
    
    if (datosCompra.token == null) throw new FieldRequiredError("token");
    if (datosCompra.payment_method_id == null) throw new FieldRequiredError("payment_method_id");
    if (datosCompra.issuer_id == null) throw new FieldRequiredError("issuer_id");
    if (datosCompra.installments == null) throw new FieldRequiredError("installments");


    if (datosCompra.payer == null) throw new FieldRequiredError("payer");
    if (datosCompra.payer.email == null) throw new FieldRequiredError("payer.email");
    if (datosCompra.payer.identification == null) throw new FieldRequiredError("payer.identification");
    if (datosCompra.payer.identification.type == null) throw new FieldRequiredError("payer.identification.type");
    if (datosCompra.payer.identification.number == null) throw new FieldRequiredError("payer.identification.number");

    
    if (datosCompra.idProducto == null) throw new FieldRequiredError("idProducto");
    if (datosCompra.cantidad == null) throw new FieldRequiredError("cantidad");
    if (datosCompra.descuento == null) throw new FieldRequiredError("descuento");

};