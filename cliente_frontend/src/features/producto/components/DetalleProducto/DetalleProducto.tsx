import type { Producto } from "../../../../types/producto";
import styles from "./DetalleProducto.module.css"

type Props = {
    prodDetalle: Producto,

    setProdDetalle: React.Dispatch<React.SetStateAction<Producto | null>>,

    setProdCompra: React.Dispatch<React.SetStateAction<Producto | null>>
}

export default function Catalogo({prodDetalle, setProdDetalle, setProdCompra}: Props){


    return (
        <section>

        </section>
    )
}