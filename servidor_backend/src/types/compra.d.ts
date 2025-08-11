import Producto from "./entities/Producto"
import Usuario from "./entities/Usuario"
import { DatosCompra, DatosCreatePaymentMercadoPago } from "./pagos"

export interface DatosVerificarCompra {
    idProducto: string,
    cantidad: number,
    descuento: number
}

export interface CalculoTotalCompra {
    totalCalculado: number,
    descuentoAplicado: number
}

export interface DatosRegistroCompra {
    idProducto: string,
    idUsuario: string,
    idPago: number | null,

    cantidad: number,
    precioUnitario: number,
    descuentoAplicado: number
}

export interface GestionarCompraOrchertratorArgs {
    totalCalculado: number,
    descuentoAplicado: number,

    producto: Producto, 
    usuario: Usuario, 
    datosCompra : DatosCompra 
}