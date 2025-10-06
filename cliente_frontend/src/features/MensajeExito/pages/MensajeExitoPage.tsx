import type { JSX } from "react";
import type CompraExitosa from "../../../types/compra";
import MensajeExitoSection from "../components/MensajeExitoSection";

type Props = {
    msjExito: string,
    handler: Function,
    children: JSX.Element
}


export default function MensajeExitoPage({msjExito, handler, children}: Props){


    return (
        <MensajeExitoSection msjExito={msjExito} handler={handler} children={children}/>
    )
}