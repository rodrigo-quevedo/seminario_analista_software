import styles from "./InfoPago.module.css"

type Props = {
    imgUrl: string,
    nombreProducto: string,
    total: number
}


export default function InfoPago({imgUrl, nombreProducto, total}: Props){

    return (
        <section className={styles.container}>

            <div className={`${styles.row} ${styles.rowProducto}`}>
                <div className={styles.imgContainer}>
                    <img src={imgUrl} alt={nombreProducto} />
                </div>
                <span>{nombreProducto}</span>
            </div>
            
            <div className={`${styles.row} ${styles.rowTotal}`}>
                <span>TOTAL</span>
                <span>$ {total}</span>
            </div>
            
        </section>
    )
}