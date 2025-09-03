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