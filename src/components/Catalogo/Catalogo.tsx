import useBuscarProductos from "../../hooks/useBuscarProductos"
import ProductoCard from "./ProductoCard/ProductoCard";

import styles from "./Catalogo.module.css"



export default function Catalogo(){

    const { productos, carga, error } = useBuscarProductos();

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
            />
        })}
    </section>
    )
}