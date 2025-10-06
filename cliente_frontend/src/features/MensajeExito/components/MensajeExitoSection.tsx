import styles from "./MensajeExitoSection.module.css"
import successIcon from "../../../assets/icons/success.png"
import type { JSX } from "react"

type Props = {
    msjExito: string,
    handler: Function,
    children: JSX.Element
}

export default function MensajeExitoSection({msjExito, handler, children}: Props){


    return (
        <section className={styles.container}>
            
            <div className={styles.card_container}>
                
                <div>
                    {children}
                </div>


                <div className={styles.card_info_container}>
                    <img src={successIcon} alt="Operación exitosa"/>
                    
                    <p>{msjExito}</p>
                </div>

                <button onClick={()=>{handler()}}>
                    Aceptar
                </button>
            </div>

        </section>
    )
}