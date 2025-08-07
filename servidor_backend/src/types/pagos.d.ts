// export interface Pago {
//     // idTarjeta: string, 
//     // vencimiento: string, 
//     // codigoSeguridad: string, 
//     titular: string, 
//     documento: string, 
//     cantidadCuotas: number, 
//     mail: string
// }

export interface DatosCompra {
    token: string,
    payment_method_id: string,
    issuer_id: string,

    transaction_amount: number,
    installments: number,

    description: string,
    
    payer : {
        email: string,
        identification: {
            type: string,
            number: string
        }
    }

}

    // * transaction_amount /   transaction_amount: 10000,   
    // * token /   token: '912cf77d94ea614ccd8981e5e4db46e7',  
    // * payment_method_id /   payment_method_id: 'master',   
    // * issuer_id /   issuer_id: '3',
    // * installments /   installments: 3,    
    // * description / la tengo que sacar del producto.description => me llega la idProducto del front, busco la descripcion
    // * payer.email / payer { email: 'ej@ej.com',
    // * identification.type / type: 'DNI'
    // * identification.number / number: '12345678'