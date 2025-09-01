import styles from "./ErrorSection.module.css"

import errorIcon from "../../../assets/icons/error.png"

type Props = {
    errMsj: string
}




export default function ErrorSection({errMsj}: Props){

    return (
        <section className={styles.container}>
            
            <div className={styles.card_container}>
                
                <div className={styles.card_info_container}>
                    <img src={errorIcon} alt="Error"/>
                    
                    <p>{errMsj}</p>
                </div>

                <button >
                    Aceptar
                </button>
            </div>

        </section>
    )
}