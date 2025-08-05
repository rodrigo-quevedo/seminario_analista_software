export interface Pago {
    idTarjeta: string, 
    vencimiento: string, 
    codigoSeguridad: string, 
    titular: string, 
    documento: string, 
    cantidadCuotas: number, 
    mail: string
}

export interface DatosCompra {
    pago: Pago,

    idProducto: string,
    cantidad: number,
    descuento: number
}