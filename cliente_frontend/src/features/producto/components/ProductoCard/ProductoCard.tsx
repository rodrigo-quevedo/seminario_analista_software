import styles from "./ProductoCard.module.css"


type Params = {
    urlFoto: string,
    nombre: string,
    precioUnitario: number,

    setProdDetalle: React.Dispatch<React.SetStateAction<Producto | null>>
}

const handleProductOnclick = (e: React.MouseEvent) =>{
    
}


export default function ProductoCard({urlFoto, nombre, precioUnitario}: Params) {

    return(
        <div className={styles.container} onClick={handleProductOnclick}>
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

