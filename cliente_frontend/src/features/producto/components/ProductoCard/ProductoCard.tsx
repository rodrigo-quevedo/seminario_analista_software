import type { Producto } from "../../../../types/producto"
import styles from "./ProductoCard.module.css"


type Params = {
    producto: Producto,

    setProdDetalle: React.Dispatch<React.SetStateAction<Producto | null>>
}



export default function ProductoCard({producto, setProdDetalle}: Params) {

    return(
        <div className={styles.container} onClick={()=>{setProdDetalle(producto)}}>
            <div className={styles.imgContainer}>
                {/* <img loading="lazy" src={producto.urlFoto} alt={producto.nombre} /> */}
                <img loading="lazy" src="salkdfj" alt={producto.nombre} />
            </div>

            <div className={styles.infoProducto}>
                <p>{producto.nombre}</p>
                <p className={styles.precio}>${producto.precioUnitario}</p>
            </div>
        </div>
    )
}

