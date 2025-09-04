import { initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect } from "react";





export default function useInitMercadoPago(){
    useEffect(()=>{
        initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY);
    }, [])
}