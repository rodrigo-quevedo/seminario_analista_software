import { DatosPago } from "@customTypes/pagos";
import validarCamposRequeridos from "./hacerPagoValidators/validarCamposRequeridos";
import validarReqBodyJson from "@validations/general/validarReqBodyJson";

export default function validarHacerPago(datosPago: DatosPago) : DatosPago{

    validarReqBodyJson(datosPago);

    validarCamposRequeridos(datosPago);
        


    return datosPago;
};