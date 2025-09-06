import type { IBrickError } from "@mercadopago/sdk-react/esm/bricks/util/types/common";
import type { IPaymentBrickCustomization } from "@mercadopago/sdk-react/esm/bricks/payment/type";

export const initialization = (total: number) =>{
    return {
        amount: total //sirve para mostrar el total en la UI del formulario, pero no se envia al backend
    };
} 


export const customization: IPaymentBrickCustomization = {    
    paymentMethods: {
        creditCard: "all",
        debitCard: "all"
    }
};


export const onError = async (error: IBrickError) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);

};

export const onReady = async () => {
    /*
    Callback llamado cuando el Brick está listo.
    Aquí puede ocultar cargamentos de su sitio, por ejemplo.
    */


};