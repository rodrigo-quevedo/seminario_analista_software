import { DatosCompra } from "@customTypes/pagos";
import validarCamposRequeridos from "./hacerPagoValidators/validarCamposRequeridos";
import validarReqBodyJson from "@validations/general/validarReqBodyJson";
import validarTypes from "./hacerPagoValidators/validarTypes";
import validarFormatoCampos from "./hacerPagoValidators/validarFormatoCampos";
import trimStrings from "./hacerPagoValidators/trimStrings";
import validarEmptyStrings from "./hacerPagoValidators/validarEmptyStrings";

export default function validarHacerPago(datosCompra: DatosCompra) : DatosCompra{
    
    validarReqBodyJson(datosCompra);
    
    validarCamposRequeridos(datosCompra);
    
    validarTypes(datosCompra);
    
    datosCompra = trimStrings(datosCompra);//primero elimino el whitespace que pueda haber

    validarEmptyStrings(datosCompra);

    validarFormatoCampos(datosCompra);

    return datosCompra;
};