import styles from "./TarjetaDemo.module.css"

const tarjetaPrueba = {     
    cardNumber: "5031 7557 3453 0604", // test Visa
    cardholderName: "APRO",
    expiration: "11/30",
    securityCode: "123"
}

export default function TarjetaDemo(){

    return (
        <section className={styles.container}>

            <h1>Datos de tarjeta de prueba:</h1>

            <div className={`${styles.row} ${styles.rowProducto}`}>
                <div>Número de tarjeta:</div>
                <div>{tarjetaPrueba.cardNumber}</div>
            </div>

            <div className={`${styles.row} ${styles.rowProducto}`}>
                <div>Vencimiento:</div>
                <div>{tarjetaPrueba.expiration}</div>
            </div>

            <div className={`${styles.row} ${styles.rowProducto}`}>
                <div>Código de seguridad:</div>
                <div>{tarjetaPrueba.securityCode}</div>
            </div>
            
            <div className={`${styles.row} ${styles.rowProducto}`}>
                <div>Nombre del titular como aparece en la tarjeta:</div>
                <div>{tarjetaPrueba.cardholderName}</div>
            </div>
            
        </section>
    )
}