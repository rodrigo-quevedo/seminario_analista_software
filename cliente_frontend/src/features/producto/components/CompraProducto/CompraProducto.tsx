import { useState } from "react";
import AceptarButton from "../../../../components/buttons/AceptarButton/AceptarButton";
import VolverButton from "../../../../components/buttons/VolverButton/VolverButton";
import RoundImg from "../../../../components/RoundImg/RoundImg";
import type { Pago } from "../../../../types/pago";
import type { Producto } from "../../../../types/producto";
import type { Usuario } from "../../../../types/usuario";
import styles from "./CompraProducto.module.css"
import postVerificar from "../../../../api/compras/postVerificar";
import type { DatosVerificarCompra, VerificarCompraError } from "../../../../types/compra";

type Props = {
    prodCompra: Producto,

    setProdCompra: React.Dispatch<React.SetStateAction<Producto | null>>,

    setPago: React.Dispatch<React.SetStateAction<Pago | null>>,

    usuario: Usuario,

    setErrMsj: React.Dispatch<React.SetStateAction<string | null>>
}

export default function CompraProducto({prodCompra, setProdCompra, setPago, usuario, setErrMsj}: Props){

    const [cantidad, setCantidad] = useState<number>(1);
    const [descuento, setDescuento] = useState<number>(0);

    return (
        <section className={styles.container}>
            
            <VolverButton onClickHandler={(e)=>{setProdCompra(null)}}/>

            <h1>{prodCompra.nombre}</h1>

            <div className={styles.compraContainer}>
                <RoundImg 
                    urlFoto={`/images/productos/${prodCompra.urlFoto}`}
                    nombre={prodCompra.nombre}
                />

                <div className={styles.compraInfoContainer}>

                    <div className={styles.detalleContainer}>

                        <div className={styles.detalleRow}>
                            <p className={styles.detalleRow_texto}>Unidades disponibles:</p>
                            <p className={`${styles.detalleRow_value} ${styles.detalleRow_stock}`}>{prodCompra.stock}</p>
                        </div>

                        <div className={styles.detalleRow}>
                            <p className={styles.detalleRow_texto}>Precio unitario:</p>
                            <p className={`${styles.detalleRow_value} ${styles.detalleRow_precio}`}>$ {prodCompra.precioUnitario}</p>
                        </div>

                        <div className={styles.detalleRow}>
                            <p className={styles.detalleRow_texto}>Puntos disponibles:</p>
                            <p className={`${styles.detalleRow_value} ${styles.detalleRow_puntos}`}>$ {usuario.puntos}</p>
                        </div>

                    </div>
                    
                    <form className={styles.formContainer}>
                        <div className={styles.formRow} >
                            <label htmlFor="cantidad_compra_form_input">Elegir cantidad:</label>
                            <input 
                                type="number" id="cantidad_compra_form_input" 
                                value={cantidad} 
                                step="1" //integers
                                min="1"
                                onChange={(e)=>{
                                    if (Number(e.target.value) <= prodCompra.stock)
                                        setCantidad(Number(e.target.value))
                                }}
                            />
                        </div>

                        <div className={`${styles.formRowPrecio} ${styles.formRow}`} >
                            <label htmlFor="puntos_compra_form_input" className={styles.label_precio}>Gastar puntos:</label>
                            {/* <div className={styles.form_precio_container}> */}
                                {/* <span className={styles.form_precio_sign}>$</span> */}
                            <input 
                                type="number" id="cantidad_compra_form_input" 
                                className={styles.form_precio}
                                // value={(descuento === 0) ? "-" : descuento.toFixed(2)}
                                value={descuento.toFixed(2)}
                                step="0.01" //2 decimales (centavos)
                                min="0.00"
                                onChange={(e)=>{
                                    if (Number(e.target.value) <= usuario.puntos)
                                        setDescuento(Number(e.target.value))
                                }}
                                
                            />
                            {/* </div> */}
                        </div>

                        <div className={styles.totalRow}>
                            <span className={styles.totalRow_title}>TOTAL</span>
                            <span className={styles.totalRow_price}>
                                $ {((Number(cantidad) * prodCompra.precioUnitario) - Number(descuento)).toFixed(2)}
                            </span>
                        </div>

                    </form>
                    
                    <AceptarButton
                        texto="Comprar"
                        onClickHandler={async (e)=>{
                            e.preventDefault();
                            
                            //post /verificar
                            const result = await postVerificar({
                                idProducto: prodCompra.id,
                                cantidad: cantidad,
                                descuento: descuento,
                                idUsuario: usuario.id
                            });

                            let err = result as VerificarCompraError;
                            
                            if (err.name && err.descripcion) {
                                setErrMsj(`${err.name}: ${err.descripcion}`);
                                return;
                            }
                            
                            let datosCompraVerificados = result as Pago;

                            setPago({
                                producto: datosCompraVerificados.producto,
                                cantidad: datosCompraVerificados.cantidad,
                                descuento: datosCompraVerificados.descuento
                            })
                            
                        }}
                    />


                </div>

            </div>


        </section>
    )
}