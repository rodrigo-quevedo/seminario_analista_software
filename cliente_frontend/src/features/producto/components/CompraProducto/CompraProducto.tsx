import AceptarButton from "../../../../components/buttons/AceptarButton/AceptarButton";
import VolverButton from "../../../../components/buttons/VolverButton/VolverButton";
import RoundImg from "../../../../components/RoundImg/RoundImg";
import type { Pago } from "../../../../types/pago";
import type { Producto } from "../../../../types/producto";
import type { Usuario } from "../../../../types/usuario";
import styles from "./CompraProducto.module.css"

type Props = {
    prodCompra: Producto,

    setProdCompra: React.Dispatch<React.SetStateAction<Producto | null>>,

    setPago: React.Dispatch<React.SetStateAction<Pago | null>>,

    usuario: Usuario
}

export default function CompraProducto({prodCompra, setProdCompra, setPago, usuario}: Props){


    return (
        <section className={styles.container}>
            
            <VolverButton onClickHandler={(e)=>{setProdCompra(null)}}/>

            <h1>{prodCompra.nombre}</h1>

            <div className={styles.compraContainer}>
                <RoundImg 
                    urlFoto={prodCompra.urlFoto}
                    nombre={prodCompra.nombre}
                />

                <div>

                    <div className={styles.detalleContainer}>
                        <div >
                            <p>Unidades disponibles:</p>
                            <p>{prodCompra.stock}</p>
                        </div>

                        <div>
                            <p>Precio unitario:</p>
                            <p>$ {prodCompra.precioUnitario}</p>
                        </div>

                        <div>
                            <p>Puntos disponibles:</p>
                            <p>$ {usuario.puntos}</p>
                        </div>
                    </div>
                    
                    <form className={styles.formContainer}>

                    </form>
                    
                    <AceptarButton
                        texto="Comprar"
                        onClickHandler={()=>{
                            // setPago({})
                        }}
                    />


                </div>

            </div>


        </section>
    )
}