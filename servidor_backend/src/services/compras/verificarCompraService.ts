import DatosCompraError from "@errors/400/DatosCompraError";


export default function verificarCompraService(stock:number, cantidad:number, puntos:number, descuento:number) {

    //verificar stock >= cantidad
    if (stock < cantidad) throw new DatosCompraError("cantidad", `La cantidad ingresada [${cantidad}] es mayor al stock disponible [${stock}].`);

    //verificar puntos >= descuento
    if (puntos < descuento) throw new DatosCompraError("descuento", `El descuento ingresado [${descuento}] es menor a los puntos actuales del usuario [${puntos}]`);

}