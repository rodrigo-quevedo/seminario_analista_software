import styles from "./Catalogo.module.css"

import ProductoCard from "../ProductoCard/ProductoCard";
import type { Producto } from "../../../../types/producto";

type Props = {
    productos: Producto[],
    carga: boolean,
    error: string | null,

    setProdDetalle: React.Dispatch<React.SetStateAction<Producto | null>>,
    
    setErrMsj: React.Dispatch<React.SetStateAction<string | null>>
}

export default function Catalogo({productos, carga, error, setProdDetalle, setErrMsj}: Props){

    if (carga) return <p>Cargando...</p>;
    if (error) {
        setErrMsj(error)
        return <p>Error: {error}</p> //fallback
    };

    return (
        <section className={styles.container}>
            {productos.map((prod)=>{
                return <ProductoCard
                    key={prod.id}
                    producto={prod}
                    setProdDetalle={setProdDetalle}
                />
            })}
        </section>
    )
}