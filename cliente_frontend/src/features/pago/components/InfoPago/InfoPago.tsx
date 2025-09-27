import styles from "./InfoPago.module.css"

type Props = {
    imgUrl: string,
    nombreProducto: string,
    total: number,
    cantidad: number
}


export default function InfoPago({imgUrl, nombreProducto, total, cantidad}: Props){

    return (
        <section className={styles.container}>

            <div className={`${styles.row} ${styles.rowProducto}`}>
                <div className={styles.imgContainer}>
                    <img src={imgUrl} alt={nombreProducto} />
                </div>

                <div className={styles.pagoInfo}>
                    <span>{nombreProducto}</span>
                    <span>x{cantidad}</span>
                </div>
            </div>
            
            <div className={`${styles.row} ${styles.rowTotal}`}>
                <span>TOTAL</span>
                <span>$ {total}</span>
            </div>
            
        </section>
    )
}