import styles from "./ProductoCard.module.css"


type Params = {
    urlFoto: string,
    nombre: string,
    precioUnitario: number
}


export default function ProductoCard({urlFoto, nombre, precioUnitario}: Params) {

    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={urlFoto} alt={nombre} />
            </div>

            <div className={styles.infoProducto}>
                <p>{nombre}</p>
                <p className={styles.precio}>${precioUnitario}</p>
            </div>
        </div>
    )
}

