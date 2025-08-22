

export interface Producto {
    id: string, 

    nombre: string,
    descripcion: string,
    urlFoto: string,
    
    stock: number,

    precioUnitario: number
}

export interface GetProductosResponse {
    productos : Producto[]
}