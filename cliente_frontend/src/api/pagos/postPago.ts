import type { ICardPaymentBrickPayer, ICardPaymentFormData } from "@mercadopago/sdk-react/esm/bricks/cardPayment/type";
import type { IFormDataAdditionalInfo, ISavedCardPayer, TicketFormData } from "@mercadopago/sdk-react/esm/bricks/payment/type";
import type { Pago } from "../../types/pago";
import type CompraExitosa from "../../types/compra";
import type { ErrorResponse } from "../../types/ErrorResponse";


type Props = {
    formData: ICardPaymentFormData<ICardPaymentBrickPayer> & ICardPaymentFormData<ISavedCardPayer> & TicketFormData & IFormDataAdditionalInfo,
    idUsuario: string,
    pago: Pago
}


// callback llamado al hacer clic en el botón enviar datos
export const postPago = async ({formData, idUsuario, pago}: Props): Promise<CompraExitosa|ErrorResponse>  => {
    
    const API_URL = import.meta.env.VITE_URL_API;

    const result = await fetch(API_URL+"/pagos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({...formData, 
            idUsuario,

            idProducto: pago.producto.id,
            cantidad: pago.cantidad,
            descuento: pago.descuento
        })
    })

    if (!result.ok) 
        return result.json()
            .then((body: ErrorResponse)=>body)
            .catch((err)=>err);

    return result.json()
        .then((body:Pago)=>body)
        .catch((err)=>err);
};