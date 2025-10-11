import styles from "./CompraExitosaMsj.module.css"

type Props = {
    urlFotoProducto: string,
    nombreProducto: string,
    total: number,
    cantidad: number
}

const URL_IMG_PRODUCTOS= import.meta.env.VITE_PATH_IMG_PRODUCTOS;

export default function CompraExitosaMsj({urlFotoProducto, nombreProducto, total, cantidad}: Props){


    return (
        <div className={styles.container}>
            <div className={styles.infoTop}>
                <img src={`${URL_IMG_PRODUCTOS}${urlFotoProducto}`} className={styles.fotoProd}/>
                <div className={styles.textoContainer}>
                    <span>{nombreProducto}</span>
                    <span>x{cantidad}</span>
                </div>
            </div>

            <div className={styles.infoBottom}>
                <span>TOTAL</span>
                <span>${total.toLocaleString("de-DE")}</span>
            </div>
            
        </div>
    )
}