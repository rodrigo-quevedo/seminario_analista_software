import type { ICardPaymentBrickPayer, ICardPaymentFormData } from "@mercadopago/sdk-react/esm/bricks/cardPayment/type";
import type { IFormDataAdditionalInfo, ISavedCardPayer, TicketFormData } from "@mercadopago/sdk-react/esm/bricks/payment/type";
import type { Pago } from "../../../types/pago";


type Props = {
    formData: ICardPaymentFormData<ICardPaymentBrickPayer> & ICardPaymentFormData<ISavedCardPayer> & TicketFormData & IFormDataAdditionalInfo,
    idUsuario: string,
    pago: Pago
}

const API_URL = import.meta.env.VITE_URL_API

// callback llamado al hacer clic en el botón enviar datos
export const postPago = async ({formData, idUsuario, pago}: Props) => {
     fetch(API_URL+"/pagos", {
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
    .then((response) => response.json())
    .then((response) => {
        // recibir el resultado del pago
        
    })
    .catch((error) => {
        // manejar la respuesta de error al intentar crear el pago
        
    });

};