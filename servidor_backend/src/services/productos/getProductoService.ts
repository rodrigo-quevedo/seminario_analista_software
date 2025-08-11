import Producto from "@customTypes/entities/Producto";
import ProductoDAO from "@daos/productos/ProductoDAO";
import NotFoundInDatabaseError from "@errors/400/NotFoundInDatabaseError";


export default async function getProductoService(id: string): Promise<Producto>{
    
    let producto = await ProductoDAO.getProducto(id);

    if (producto == null) throw new NotFoundInDatabaseError(`producto id: ${id}`);

    return producto;
}