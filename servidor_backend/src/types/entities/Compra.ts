

export default interface Compra {
    id: string,

    idPago: number | null,

    idProducto: string,
    idUsuario: string,

    cantidad: number,//int
    precioUnitario: number,//float, 2 decimales
    descuento: number//float, 2 decimales
    
    fechaHora: Date
}