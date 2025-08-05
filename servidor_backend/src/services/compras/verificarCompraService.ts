import { DatosVerificarCompra } from "@customTypes/compra";
import ProductoDAO from "@daos/productos/ProductoDAO";
import UsuarioDAO from "@daos/usuarios/UsuarioDAO";
import DatosCompraError from "@errors/400/DatosCompraError";
import NotFoundInDatabaseError from "@errors/400/NotFoundInDatabaseError";


export default async function verificarCompraService(datosCompra: DatosVerificarCompra, idUsuario: string): Promise<void> {
    
    //verificar que producto y usuario existen
    let producto = await ProductoDAO.getProducto(datosCompra.idProducto);
    if (! producto ) throw new NotFoundInDatabaseError(`producto id: ${datosCompra.idProducto}`);

    let usuario = await UsuarioDAO.getUsuario(idUsuario);
    if (! usuario) throw new NotFoundInDatabaseError(`usuario id: ${idUsuario}`);


    //verificar stock >= cantidad
    if (producto.stock < datosCompra.cantidad) throw new DatosCompraError("cantidad", `La cantidad ingresada [${datosCompra.cantidad}] es mayor al stock disponible [${producto.stock}].`);

    //verificar puntos >= descuento
    if (usuario.puntos < datosCompra.descuento) throw new DatosCompraError("descuento", `El descuento ingresado [${datosCompra.descuento}] es menor a los puntos actuales del usuario [${usuario.puntos}]`);

}