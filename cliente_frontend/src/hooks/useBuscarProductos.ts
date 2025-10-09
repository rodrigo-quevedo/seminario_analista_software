import { useEffect, useState } from "react";
import getProductos from "../api/productos/getProductos";
import type { Producto } from "../types/producto";





export default function useBuscarProductos(){

    const [productos, setProductos] = useState<Producto[]>([]);
    const [reloadKey, setReloadKey] = useState(0); //para volver a cargar los producos, simplemente hay que incrementar este state;
    const [carga, setCarga] = useState(true);
    const [error, setError] = useState<string | null>(null);

    function reloadProductos() {
        setReloadKey(prev=>prev++);
    }

    useEffect(()=>{
        getProductos()
            .then((res)=>{setProductos(res.productos)})
        
            .catch((err: Error)=>{setError(err.name +" : "+err.message)})
            
            .finally(()=>{setCarga(false)})
    }, [reloadKey]);

    return {productos, carga, error, reloadProductos}
}