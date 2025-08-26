import AceptarButton from "../../../../components/buttons/AceptarButton/AceptarButton";
import VolverButton from "../../../../components/buttons/VolverButton/VolverButton";
import RoundImg from "../../../../components/RoundImg/RoundImg";
import type { Producto } from "../../../../types/producto";
import styles from "./DetalleProducto.module.css"



type Props = {
    prodDetalle: Producto,

    setProdDetalle: React.Dispatch<React.SetStateAction<Producto | null>>,

    setProdCompra: React.Dispatch<React.SetStateAction<Producto | null>>
}

export default function Catalogo({prodDetalle, setProdDetalle, setProdCompra}: Props){


    return (
        <section className={styles.container}>

            <div className={styles.volverButtonPosition}>
                <VolverButton onClickHandler={(e)=>{setProdDetalle(null)}} />
            </div>

            <RoundImg 
                urlFoto={prodDetalle.urlFoto}
                nombre={prodDetalle.nombre}
            />


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


                <AceptarButton 
                    texto="Comprar"
                    onClickHandler={()=>{setProdCompra(prodDetalle)}}    
                />

            </div>


        </section>
    )
}