import type { MouseEventHandler } from "react"
import styles from "./AceptarButton.module.css"


type Props = {
    texto: string,

    onClickHandler: MouseEventHandler<HTMLButtonElement>
}


export default function AceptarButton({texto, onClickHandler}: Props){

    return (
        <button 
            className={styles.comprarButton} 
            onClick={onClickHandler}
        >        
            {texto}
        </button>
    )
}