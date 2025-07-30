import { DatosCompra } from "@customTypes/compra";
import { getMsjTipoInteger, getMsjTipoNumber } from "@utils/mensajesError/mensajesError";

export default function validarTypes(datosCompra: DatosCompra){
    
    if (typeof datosCompra.cantidad !== 'number') throw new Error (getMsjTipoNumber("cantidad"));
    if (typeof datosCompra.descuento !== 'number') throw new Error (getMsjTipoNumber("descuento"));

    if (!Number.isInteger(datosCompra.cantidad)) throw new Error(getMsjTipoInteger("cantidad"));

}