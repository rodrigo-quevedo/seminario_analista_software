import type { Producto } from "../../../types/producto";
import DetalleProducto from "../components/DetalleProducto/DetalleProducto";

type Props = {
    prodDetalle: Producto,

    setProdDetalle: React.Dispatch<React.SetStateAction<Producto | null>>,

    setProdCompra: React.Dispatch<React.SetStateAction<Producto | null>>
}

export default function DetallePage({prodDetalle, setProdDetalle, setProdCompra}: Props){
    
    return(
    <>
        {/* En una page real, se agregarian otras <section> */}
        <DetalleProducto prodDetalle={prodDetalle} setProdDetalle={setProdDetalle} setProdCompra={setProdCompra}/>
    </>
    )
}