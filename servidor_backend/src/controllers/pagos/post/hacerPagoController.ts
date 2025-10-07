import {Response} from "express";
import validarHacerPago from "@validations/pagos/post/hacerPago";
import RequestAutenticada from "@customTypes/Request/RequestAutenticada";
import getUsuarioService from "@services/usuarios/getUsuarioService";
import getProductoService from "@services/productos/getProductoService";
import verificarCompraService from "@services/compras/verificarCompraService";
import calcularTotalCompraService from "@services/compras/calcularTotalCompraService";
import gestionarTotalCompraOrchestrator from "../../../orchestrators/gestionarTotalCompraOrchestrator";
import CompraRegistradaDTO from "../../../DTOs/compra/CompraRegistradaDTO";


export async function hacerPagoController(req: RequestAutenticada, res: Response) {
    
    const datosCompra = validarHacerPago(req.body);    

    //verificacion de datos de compra
    const usuario = await getUsuarioService(req.idUsuario as string);
    const producto = await  getProductoService(datosCompra.idProducto);

    verificarCompraService(producto.stock, datosCompra.cantidad, usuario.puntos, datosCompra.descuento);

    //calcular total
    const {totalCalculado, descuentoAplicado} = calcularTotalCompraService(datosCompra.cantidad, producto.precioUnitario, datosCompra.descuento);


    //dependiendo el total, registrar compra directamente o realizar pago primero
    const compraRegistrada = await gestionarTotalCompraOrchestrator({totalCalculado, descuentoAplicado, producto, usuario, datosCompra});



    res.json(new CompraRegistradaDTO(compraRegistrada, producto.urlFoto, producto.nombre, totalCalculado));

}