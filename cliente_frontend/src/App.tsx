import { useState } from "react";
import useBuscarProductos from "./hooks/useBuscarProductos";
import MainLayout from "./layouts/MainLayout"
import CatalogoPage from "./features/producto/pages/CatalogoPage"
import type { Producto } from "./types/producto";
import DetallePage from "./features/producto/pages/DetallePage";
import type { Pago } from "./types/pago";
import PagoPage from "./features/pago/pages/PagoPage";
import CompraPage from "./features/producto/pages/CompraPage";
import type { Usuario } from "./types/usuario";
import ErrorPage from "./features/Error/pages/ErrorPage";
import useInitMercadoPago from "./hooks/useInitMercadoPago";
import type CompraExitosa from "./types/compra";
import MsjCompraExitosa from "./features/MsjCompraExitosa/components/MsjCompraExitosaSection";


function App() {
  
    const { productos, carga, error } = useBuscarProductos();

    const [prodDetalle, setProdDetalle] = useState<Producto|null>(null);
    const [prodCompra, setProdCompra] = useState<Producto|null>(null);
    const [pago, setPago] = useState<Pago|null>(null);
    const [compraExitosa, setCompraExitosa] = useState<CompraExitosa|null>(null);

    const [errMsj, setErrMsj] = useState<string|null>(null);

    //auth: usuario hardcodeado
    const usuario: Usuario = {
        id: "68910d946f86ddfab00be367",//es una ID que copiada manualmente de la base de datos
        puntos: 4500
    }

    useInitMercadoPago();

    return (
    <>
        <MainLayout>
            {
                errMsj? <ErrorPage errMsj={errMsj} setErrMsj={setErrMsj} /> :
                // Esta es una solución a la navegación entre paginas sin utilizar react router.
                // Es una solucion mala, altamente mejorable con la libreria react router, y solo sirve para una primera iteracion del prototipo.
                // Aclaracion: Para esta primera iteracion no se usan librerias, salvo las del project setup (types, typescript, eslint, etc.).
                
                compraExitosa? <MsjCompraExitosa compraExitosa={compraExitosa}/> :
                    

                        pago? <PagoPage pago={pago} idUsuario={usuario.id} setPago={setPago} setCompraExitosa={setCompraExitosa} setErrMsj={setErrMsj}/>
                        :
                            prodCompra? <CompraPage prodCompra={prodCompra} setProdCompra={setProdCompra} setPago={setPago} usuario={usuario} setErrMsj={setErrMsj}/>
                            :
                                prodDetalle? <DetallePage prodDetalle={prodDetalle} setProdDetalle={setProdDetalle} setProdCompra={setProdCompra}/>
                                :
                                    <CatalogoPage productos={productos} carga={carga} error={error} setProdDetalle={setProdDetalle} setErrMsj={setErrMsj}/>
            }
        </MainLayout>
    </>
    )
}

export default App
