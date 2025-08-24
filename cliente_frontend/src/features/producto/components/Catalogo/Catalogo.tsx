import styles from "./Catalogo.module.css"

import ProductoCard from "../ProductoCard/ProductoCard";
import type { Producto } from "../../../../types/producto";

type Props = {
    productos: Producto[],
    carga: boolean,
    error: string | null,

    setProdDetalle: React.Dispatch<React.SetStateAction<Producto | null>>
}

export default function Catalogo({productos, carga, error, setProdDetalle}: Props){

    if (carga) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section className={styles.container}>
            {productos.map((prod)=>{
                return <ProductoCard
                    key={prod.id}
                    urlFoto={prod.urlFoto}
                    nombre={prod.nombre}
                    precioUnitario={prod.precioUnitario}
                    setProdDetalle={setProdDetalle}
                />
            })}
        </section>
    )
}