import { DatosPago } from "@customTypes/pagos";
import FieldRequiredError from "../../../../errors/400/FieldRequiredError";

export default function validarCamposRequeridos(datosPago: DatosPago){
    
    if (datosPago.cantidadCuotas == null) throw new FieldRequiredError("cantidadCuotas");
    if (datosPago.codigoSeguridad == null) throw new FieldRequiredError("codigoSeguridad");
    if (datosPago.documento == null) throw new FieldRequiredError("documento");
    if (datosPago.idTarjeta == null) throw new FieldRequiredError("idTarjeta");
    if (datosPago.mail == null) throw new FieldRequiredError("mail");
    if (datosPago.titular == null) throw new FieldRequiredError("titular");
    if (datosPago.vencimiento == null) throw new FieldRequiredError("vencimiento");

};