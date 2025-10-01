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


export default interface CompraExitosa {
    id: string,

    idPago: number | null,

    idProducto: string,
    idUsuario: string,

    cantidad: number,//int
    precioUnitario: number,//float, 2 decimales
    descuento: number//float, 2 decimales
    
    fechaHora: Date,

    nombreProducto: string,
    total: number
}