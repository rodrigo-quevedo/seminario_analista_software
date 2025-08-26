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


function App() {
  
    const { productos, carga, error } = useBuscarProductos();

    const [prodDetalle, setProdDetalle] = useState<Producto|null>(null);
    const [prodCompra, setProdCompra] = useState<Producto|null>(null);
    const [pago, setPago] = useState<Pago|null>(null);

    //auth: usuario hardcodeado
    const usuario: Usuario = {
        id: "68910d946f86ddfab00be367",//es una ID que copiada manualmente de la base de datos
        puntos: 4500
    }

    return (
    <>
        <MainLayout>
            {
                // Esta es una solución a la navegación entre paginas sin utilizar react router.
                // Es una solucion mala, altamente mejorable con la libreria react router, y solo sirve para una primera iteracion del prototipo.
                // Aclaracion: Para esta primera iteracion no se usan librerias, salvo las del project setup (types, typescript, eslint, etc.).
                
                pago? <PagoPage/>
                :
                    prodCompra? <CompraPage prodCompra={prodCompra} setProdCompra={setProdCompra} setPago={setPago} usuario={usuario}/>
                    :
                        prodDetalle? <DetallePage prodDetalle={prodDetalle} setProdDetalle={setProdDetalle} setProdCompra={setProdCompra}/>
                        :
                            <CatalogoPage productos={productos} carga={carga} error={error} setProdDetalle={setProdDetalle}/>
            }
        </MainLayout>
    </>
    )
}

export default App
