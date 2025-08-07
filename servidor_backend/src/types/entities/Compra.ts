type EstadoPago = 'approved' | 'in_process' | 'rejected';

export default interface Compra {
    id: string,

    idPago: number,
    estadoPago: EstadoPago,

    idProducto: string,
    idCliente: string,

    cantidad: number,//int
    precioUnitario: number,//float, 2 decimales
    descuento: number//float, 2 decimales
    
    fechaHora: string// ISO date string
}