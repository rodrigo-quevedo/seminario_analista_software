export interface DatosVerificarCompra {
    idProducto: string,
    cantidad: number,
    descuento: number,
    
    idUsuario: string //esto hace falta porque se esta simulando la Auth con un middleware que se fija la idUsuario en la request body
}

export interface VerificarCompraError {
    name: string,
    descripcion: string
}

export default interface Compra {
    id: string,

    idPago: number | null, //null: descuento (puntos) aplicado = total, no se realiza pago, solo se descuentan los puntos

    idProducto: string,
    idUsuario: string,

    cantidad: number,//int
    precioUnitario: number,//float, 2 decimales
    descuento: number//float, 2 decimales
    
    fechaHora: Date,
}

export default interface CompraExitosa {
    compra: Compra,

    urlFotoProducto: string,
    nombreProducto: string,
    total: number
}
