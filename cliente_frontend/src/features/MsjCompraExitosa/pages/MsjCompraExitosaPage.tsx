import type CompraExitosa from "../../../types/compra";
import MsjCompraExitosaSection from "../components/MsjCompraExitosaSection";

type Props = {
    compraExitosa: CompraExitosa
}


export default function MsjCompraExitosaPage({compraExitosa}: Props){


    return (
        <MsjCompraExitosaSection compraExitosa={compraExitosa}/>
    )
}