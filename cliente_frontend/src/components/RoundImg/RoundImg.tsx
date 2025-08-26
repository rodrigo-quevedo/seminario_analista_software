import styles from "./RoundImg.module.css"

type Props = {
    urlFoto: string,
    nombre: string
}


export default function RoundImg({urlFoto,nombre}: Props){

    return (
        <div className={styles.roundImgContainer}>
            <img src={urlFoto} alt={nombre} />
        </div>
    )
}