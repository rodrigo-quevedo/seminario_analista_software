import {MercadoPagoConfig} from "mercadopago"


const mercadopagoClient = new MercadoPagoConfig({
        accessToken: process.env.MP_ACCESS_TOKEN || '',
        options: {timeout: 5000}
})

export default mercadopagoClient;