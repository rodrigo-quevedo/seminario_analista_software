import { Payment } from "@mercadopago/sdk-react";
import styles from "./FormularioPago.module.css"
import { customization, initialization, onError } from "../../utils/mercadoPagoConfig";
import { postPago } from "../../api/postPago";
import type { DatosCompra, Pago } from "../../../../types/pago";


type Props = {
    pago: Pago,
    idUsuario: string,
    setBrickLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type PagoReqBody = DatosCompra & {idUsuario: string};

export default function FormularioPago({pago, idUsuario, setBrickLoading}: Props){
    
    const API_URL = import.meta.env.VITE_URL_API;

    const total = pago.cantidad * pago.producto.precioUnitario - pago.descuento;

    return (
        <section className={styles.container} >

            <Payment
                initialization={initialization(total)}
                customization={customization}
                onSubmit={async ({formData})=>{postPago({formData, idUsuario, pago})}}
                onReady={()=>setBrickLoading(false)}
                onError={onError}
            />
            
        </section>
    )
}