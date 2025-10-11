import type { Pago } from "../../../types/pago";
import type { Producto } from "../../../types/producto";
import type { Usuario } from "../../../types/usuario";
import CompraProducto from "../components/CompraProducto/CompraProducto";

type Props = {
    prodCompra: Producto,

    setProdCompra: React.Dispatch<React.SetStateAction<Producto | null>>,

    setPago: React.Dispatch<React.SetStateAction<Pago | null>>,

    usuario: Usuario,

    setErrMsj: React.Dispatch<React.SetStateAction<string | null>>
}

export default function CompraPage({prodCompra, setProdCompra, setPago, usuario, setErrMsj}: Props){
    
    return(
    <>
        {/* En una page real, se agregarian otras <section>*/}
        <CompraProducto prodCompra={prodCompra} setProdCompra={setProdCompra} setPago={setPago} usuario={usuario} setErrMsj={setErrMsj}/>
    </>
    )
}