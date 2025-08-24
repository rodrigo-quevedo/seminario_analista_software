import type { Producto } from "../../../types/producto";
import Catalogo from "../components/Catalogo/Catalogo";

type Props = {
    productos: Producto[],
    carga: boolean,
    error: string | null,

    setProdDetalle: React.Dispatch<React.SetStateAction<Producto | null>>
}

export default function CatalogoPage({productos, carga, error, setProdDetalle}: Props){
    
    return(
    <>
        {/* En una page real, se agregarian otras <section>, por ejemplo el componente para realizar el filtro de productos del catalogo */}
        <Catalogo productos={productos} carga={carga} error={error} setProdDetalle={setProdDetalle}/>
    </>
    )
}