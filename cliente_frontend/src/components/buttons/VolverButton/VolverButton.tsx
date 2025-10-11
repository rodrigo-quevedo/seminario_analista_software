import type { MouseEventHandler } from "react"
import styles from "./VolverButton.module.css"

import backIcon from "../../../assets/icons/back.svg"

type Props = {
    onClickHandler: MouseEventHandler<HTMLButtonElement>
}


export default function VolverButton({onClickHandler}: Props){

    return (
        <button 
            className={styles.volverButton} 
            onClick={onClickHandler}
        >        
                <img src={backIcon} alt="Volver" />
                
                Volver
        </button>
    )
}