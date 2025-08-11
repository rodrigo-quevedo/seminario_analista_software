import { DatosCreatePaymentMercadoPago } from "@customTypes/pagos";
import mercadopagoClient from "@config/mp"; 
import { Payment } from "mercadopago";
// import { PaymentResponse } from "mercadopago/dist/clients/order/commonTypes";
import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";
import MercadoPagoAPIError from "@errors/500/MercadoPagoAPIError";


export default async function ejecutarPagoService(datosPago: DatosCreatePaymentMercadoPago): Promise<PaymentResponse> {

    const payment = new Payment(mercadopagoClient);

    const response = await payment.create({body: datosPago})
    if (!response) throw new MercadoPagoAPIError();

    console.log("mercadopago api response:", response);

    return response;

}