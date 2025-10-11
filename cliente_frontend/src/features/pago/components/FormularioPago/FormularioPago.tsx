import { Payment } from "@mercadopago/sdk-react";
import styles from "./FormularioPago.module.css"
import { customization, initialization, onError } from "../../utils/mercadoPagoConfig";
import { postPago } from "../../../../api/pagos/postPago";
import type { DatosCompra, Pago } from "../../../../types/pago";
import type CompraExitosa from "../../../../types/compra";
import type { ErrorResponse } from "../../../../types/ErrorResponse";


type Props = {
    pago: Pago,
    idUsuario: string,
    setBrickLoading: React.Dispatch<React.SetStateAction<boolean>>,
    
    setCompraExitosa: React.Dispatch<React.SetStateAction<CompraExitosa | null>>,
    setErrMsj: React.Dispatch<React.SetStateAction<string | null>>
}

export default function FormularioPago({pago, idUsuario, setBrickLoading, setCompraExitosa, setErrMsj}: Props){

    const total = pago.cantidad * pago.producto.precioUnitario - pago.descuento;

    return (
        <section className={styles.container} >

            <Payment
                initialization={initialization(total)}
                customization={customization}
                onSubmit={async ({formData})=>{
                    let result = await postPago({formData, idUsuario, pago})

                    let error = result as ErrorResponse;
                    if (error.name && error.descripcion){
                        setErrMsj(`${error.name}: ${error.descripcion}`);
                        return;
                    }

                    setCompraExitosa(result as CompraExitosa);
                }}
                onReady={()=>setBrickLoading(false)}
                onError={onError}
            />
            
        </section>
    )
}