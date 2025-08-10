import { Response } from "express";
import validarVerificarCompra from "@validations/compras/post/verificarCompra";
import RequestAutenticada from "@customTypes/Request/RequestAutenticada";
import verificarCompraService from "@services/compras/verificarCompraService";
import getUsuarioService from "@services/usuarios/getUsuarioService";
import getProductoService from "@services/productos/getProductoService";

export async function verificarCompraController (req: RequestAutenticada, res: Response){
    
    const datosCompra = validarVerificarCompra(req.body);


    // Logica de verificacion de la compra:
    const usuario = await getUsuarioService(req.idUsuario as string);
    const producto = await getProductoService(datosCompra.idProducto);

    verificarCompraService(producto.stock, datosCompra.cantidad, usuario.puntos, datosCompra.descuento);


    res.sendStatus(200);    
}