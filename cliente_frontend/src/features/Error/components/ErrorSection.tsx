import styles from "./ErrorSection.module.css"

import errorIcon from "../../../assets/icons/error.png"

type Props = {
    errMsj: string,

    setErrMsj: React.Dispatch<React.SetStateAction<string | null>>
}




export default function ErrorSection({errMsj, setErrMsj}: Props){

    return (
        <section className={styles.container}>
            
            <div className={styles.card_container}>
                
                <div className={styles.card_info_container}>
                    <img src={errorIcon} alt="Error"/>
                    
                    <p>{errMsj}</p>
                </div>

                <button onClick={()=>{setErrMsj(null)}}>
                    Aceptar
                </button>
            </div>

        </section>
    )
}