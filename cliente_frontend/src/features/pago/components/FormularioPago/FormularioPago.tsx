import { Payment } from "@mercadopago/sdk-react";
import styles from "./FormularioPago.module.css"
import { customization, initialization, onError } from "../../utils/mercadoPagoConfig";
import { postPago } from "../../api/postPago";


type Props = {
    total: number,
    idUsuario: string,
    setBrickLoading: React.Dispatch<React.SetStateAction<boolean>>
}


export default function FormularioPago({total, idUsuario, setBrickLoading}: Props){
    
    return (
        <section className={styles.container} >

            <Payment
                initialization={initialization(total)}
                customization={customization}
                onSubmit={postPago}
                onReady={()=>setBrickLoading(false)}
                onError={onError}
            />
            
        </section>
    )
}