import { useEffect, useState } from "react";
import getProductos from "../api/productos/getProductos";
import type { Producto } from "../types/producto";





export default function useBuscarProductos(){

    const [productos, setProductos] = useState<Producto[]>([]);
    const [carga, setCarga] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(()=>{
        getProductos()
            .then((res)=>{setProductos(res.productos)})
        
            .catch((err)=>{setError(err)})
            
            .finally(()=>{setCarga(false)})
    }, [])

    return {productos, carga, error }
}