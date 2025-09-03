import type { DatosVerificarCompra, VerificarCompraError } from "../../types/compra";
import type { Pago } from "../../types/pago";

const API_URL = import.meta.env.VITE_URL_API;


export default async function postVerificar({idProducto, cantidad, descuento, idUsuario}: DatosVerificarCompra): Promise<Pago|VerificarCompraError>{

    const result = await fetch(API_URL + "/compras/verificar", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ idProducto, cantidad, descuento, idUsuario })
    });

    if (!result.ok) 
        return result.json()
            .then((body: VerificarCompraError)=>body)
            .catch((err)=>err);

    return result.json()
        .then((body:Pago)=>body)
        .catch((err)=>err);
}