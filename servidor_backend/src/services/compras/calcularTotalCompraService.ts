import { CalculoTotalCompra } from "@customTypes/compra";

export default function calcularTotalCompraService(cantidad: number, precioUnitario: number, descuento: number): CalculoTotalCompra {

    let descuentoAplicado = descuento;
    let totalCalculado =  (cantidad * precioUnitario) - descuento;

    //si total negativo, llevarlo a 0 y bajar el descuento aplicado
    if (totalCalculado < 0) {
        descuentoAplicado = (cantidad * precioUnitario);
        totalCalculado = (cantidad * precioUnitario) - descuentoAplicado; //siempre da 0;
    }

    return {
        totalCalculado,
        descuentoAplicado
    }
}