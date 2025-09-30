import type { Producto } from "./producto";


export interface Pago {
    producto: Producto,

    cantidad: number,
    descuento: number
}

export interface DatosCompra {
    //Los siguientes campos los genera el Checkout Brick de mercadopago. 
        //(El Checkout Brick es un componente <form> prefabricado por mercadopago, facilita la implementacion y manejo del formulario de pago.)
    token: string,
    payment_method_id: string,
    issuer_id: string,

    installments: number,

    payer : {
        email: string,//viene hardcodeado desde el front, pero de todas maneras se vuelve a buscar el mail del usuario en el controller para evitar que se pueda setear payer.email desde el front.
        identification: {
            type: string,
            number: string
        }
    },

    //Estos otros campos me sirven para la logica de negocio de mi servidor
    //Permiten calcular los campos: transaction_amount (producto.precioUnitario * cantidad), description (producto.descripcion).
    idProducto: string, //siempre buscar el producto.precioUnitario y producto.descripcion en la DB (por medio de su ID)
    cantidad: number,
    descuento: number, //siempre se vuelve a verificar el descuento a aplicar

    // idUsuario: permite buscar usuario.puntos (para verificar descuentos) y usuario.email (verificar email)
        //-> Lo obtengo de la session (en este caso, del middleware 'simularAuth')
}