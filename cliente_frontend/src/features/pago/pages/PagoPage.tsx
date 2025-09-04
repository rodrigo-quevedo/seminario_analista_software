import VolverButton from "../../../components/buttons/VolverButton/VolverButton"
import type { Pago } from "../../../types/pago"
import FormularioPago from "../components/FormularioPago/FormularioPago"
import InfoProducto from "../components/InfoPago/InfoPago"

import styles from './PagoPage.module.css'

type Props = {
    pago: Pago
    idUsuario: string,

    setPago : React.Dispatch<React.SetStateAction<Pago | null>>
}

export default function PagoPage({pago, idUsuario, setPago}: Props){
    
    console.log("urlFoto:", pago.producto.urlFoto)

    return(
    <>
        <div className={styles.volverButtonPosition}>
            <VolverButton onClickHandler={(e)=>{setPago(null)}} />
        </div>

        <FormularioPago 
            total={pago.cantidad * pago.producto.precioUnitario - pago.descuento}
            idUsuario={idUsuario}
        />

        <InfoProducto 
            imgUrl={`./images/productos/${pago.producto.urlFoto}`} 
            nombreProducto={pago.producto.nombre}
            total={pago.cantidad * pago.producto.precioUnitario - pago.descuento}
        />
    </>
    )
}