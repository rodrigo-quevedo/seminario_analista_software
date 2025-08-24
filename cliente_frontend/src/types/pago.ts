import type { Producto } from "./producto";


export interface Pago {
    producto: Producto,

    cantidad: number,
    descuento: number
}