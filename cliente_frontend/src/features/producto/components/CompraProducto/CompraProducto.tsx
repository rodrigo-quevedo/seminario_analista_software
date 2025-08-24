import type { Pago } from "../../../../types/pago";
import type { Producto } from "../../../../types/producto";
import styles from "./CompraProducto.module.css"

type Props = {
    prodCompra: Producto,

    setProdCompra: React.Dispatch<React.SetStateAction<Producto | null>>,

    setPago: React.Dispatch<React.SetStateAction<Pago | null>>
}

export default function CompraProducto({prodCompra, setProdCompra, setPago}: Props){


    return (
        <section>

        </section>
    )
}