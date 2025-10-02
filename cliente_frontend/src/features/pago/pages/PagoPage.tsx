import { useState } from "react"
import VolverButton from "../../../components/buttons/VolverButton/VolverButton"
import type { Pago } from "../../../types/pago"
import FormularioPago from "../components/FormularioPago/FormularioPago"
import InfoProducto from "../components/InfoPago/InfoPago"

import styles from './PagoPage.module.css'
import LoadingMessage from "../components/LoadingMessage/LoadingMessage"
import TarjetaDemo from "../components/TarjetaDemo/TarjetaDemo"
import type CompraExitosa from "../../../types/compra"

type Props = {
    pago: Pago
    idUsuario: string,

    setPago : React.Dispatch<React.SetStateAction<Pago | null>>,

    setCompraExitosa: React.Dispatch<React.SetStateAction<CompraExitosa | null>>,
    setErrMsj: React.Dispatch<React.SetStateAction<string | null>>
}

export default function PagoPage({pago, idUsuario, setPago, setCompraExitosa, setErrMsj}: Props){
    const [brickLoading, setBrickLoading] = useState<boolean>(true);
    


    return(
    <div className={brickLoading? `${styles.container} ${styles.loading}`:  styles.container }>
        <div className={styles.volverButtonPosition}>
            <VolverButton onClickHandler={(e)=>{setPago(null)}} />
        </div>

        <div className={styles.formulario}>
            
            {/* No se puede hacer un if-else porque el FormularioPago debe existir para iniciar su renderización. */}
            {brickLoading && <LoadingMessage/>}

            <FormularioPago 
                pago={pago}
                idUsuario={idUsuario}
                setBrickLoading={setBrickLoading}

                setCompraExitosa={setCompraExitosa}
                setErrMsj={setErrMsj}
            />
            
        </div>

        <div className={styles.infoProducto}>
            <InfoProducto 
                imgUrl={`./images/productos/${pago.producto.urlFoto}`} 
                nombreProducto={pago.producto.nombre}
                total={pago.cantidad * pago.producto.precioUnitario - pago.descuento}
                cantidad={pago.cantidad}
            />

            <TarjetaDemo/>

        </div>
    </div>
    )
}