import { DatosCompra } from "@customTypes/compra";
import validarReqBodyJson from "@validations/general/validarReqBodyJson";
import validarCamposRequeridos from "./verificarCompraValidators/validarCamposRequeridos";
import validarRangosDeValor from "./verificarCompraValidators/validarRangosDeValor";

export default function validarVerificarCompra(datosCompra: DatosCompra): DatosCompra{

    validarReqBodyJson(datosCompra);

    validarCamposRequeridos(datosCompra);

    // limpio decimales sobrantes (si llegan mas de 2 decimales el error es del usuario, ya que el front se va a programar para enviar 2 decimales)
    datosCompra.descuento = Number(datosCompra.descuento.toFixed(2)); 

    validarRangosDeValor(datosCompra);


    return datosCompra;
}