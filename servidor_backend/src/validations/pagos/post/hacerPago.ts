import { DatosPago } from "@customTypes/pagos";
import validarCamposRequeridos from "./hacerPagoValidators/validarCamposRequeridos";
import validarReqBodyJson from "@validations/general/validarReqBodyJson";
import validarTypes from "./hacerPagoValidators/validarTypes";
import validarFormatoCampos from "./hacerPagoValidators/validarFormatoCampos";
import trimStrings from "./hacerPagoValidators/trimStrings";

export default function validarHacerPago(datosPago: DatosPago) : DatosPago{
    
    datosPago = trimStrings(datosPago);//primero elimino el whitespace que pueda haber
    
    validarReqBodyJson(datosPago);

    validarCamposRequeridos(datosPago);
        
    validarTypes(datosPago);

    validarFormatoCampos(datosPago);

    return datosPago;
};