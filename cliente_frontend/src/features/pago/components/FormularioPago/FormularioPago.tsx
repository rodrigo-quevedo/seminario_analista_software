import { Payment } from "@mercadopago/sdk-react";
import styles from "./FormularioPago.module.css"
import { customization, initialization, onError, onReady } from "../../utils/MercadoPagoConfig";
import { postPago } from "../../api/postPago";


type Props = {
    total: number,
    idUsuario: string
}


export default function FormularioPago({total, idUsuario}: Props){
    
    return (
        <section className={styles.container} >

            <Payment
                initialization={initialization(total)}
                customization={customization}
                onSubmit={postPago}
                onReady={onReady}
                onError={onError}
            />
            
        </section>
    )
}