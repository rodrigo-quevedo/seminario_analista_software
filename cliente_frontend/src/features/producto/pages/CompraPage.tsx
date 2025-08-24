import type { Pago } from "../../../types/pago";
import type { Producto } from "../../../types/producto";
import CompraProducto from "../components/CompraProducto/CompraProducto";

type Props = {
    prodCompra: Producto,

    setProdCompra: React.Dispatch<React.SetStateAction<Producto | null>>,

    setPago: React.Dispatch<React.SetStateAction<Pago | null>>
}

export default function CompraPage({prodCompra, setProdCompra, setPago}: Props){
    
    return(
    <>
        {/* En una page real, se agregarian otras <section>*/}
        <CompraProducto prodCompra={prodCompra} setProdCompra={setProdCompra} setPago={setPago}/>
    </>
    )
}