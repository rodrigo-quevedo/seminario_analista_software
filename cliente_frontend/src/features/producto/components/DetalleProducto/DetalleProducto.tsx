import type { Producto } from "../../../../types/producto";
import styles from "./DetalleProducto.module.css"

import backIcon from "../../../../assets/icons/back.svg"

type Props = {
    prodDetalle: Producto,

    setProdDetalle: React.Dispatch<React.SetStateAction<Producto | null>>,

    setProdCompra: React.Dispatch<React.SetStateAction<Producto | null>>
}

export default function Catalogo({prodDetalle, setProdDetalle, setProdCompra}: Props){


    return (
        <section className={styles.container}>

            <button 
                className={styles.volverButton} 
                onClick={()=>setProdDetalle(null)}>
            <img src={backIcon} alt="Volver" />
            Volver
            </button>

            <div className={styles.prodImgContainer}>
                <img src={prodDetalle.urlFoto} alt={prodDetalle.nombre} />
            </div>

            <div className={styles.detalleContainer}>
                <h1>{prodDetalle.nombre}</h1>

                {/* <p>{prodDetalle.descripcion}</p> */}
                <div className={styles.descripcion}>
                    {prodDetalle.descripcion
                        .split(". ")
                        .map(oracion => <p className={styles.oracionDescripcion}>{oracion}</p>)
                    }
                </div>

                {/* stock */}
                <div className={styles.stockContainer}>
                    <span className={styles.stockText}>Unidades disponibles: </span>
                    <span className={styles.stockNumber}>{prodDetalle.stock}</span>
                </div>

                {/* precio */}
                <div className={styles.precioContainer}>
                    <span className={styles.precioText}>Precio unitario: </span>
                    <span className={styles.precioNumber}>$ {prodDetalle.precioUnitario}</span>
                </div>


                <button 
                    className={styles.comprarButton}
                    onClick={()=>{setProdCompra(prodDetalle)}}    
                >
                Comprar
                </button>

            </div>


        </section>
    )
}