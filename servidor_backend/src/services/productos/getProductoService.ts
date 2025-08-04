import Producto from "@customTypes/entities/Producto";
import ProductoDAO from "@daos/productos/ProductoDAO";
import NotFoundInDatabaseError from "@errors/400/NotFoundInDatabaseError";


export default async function getProductoService(id: string): Promise<Producto>{
    
    let producto = await ProductoDAO.getProducto(id);

    //validar not null, etc
    if (producto == null) throw new NotFoundInDatabaseError(`producto id: ${id}`);

    //limpiar datos a enviar al front (_id, __v)
    producto = {
        id: producto.id,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        urlFoto: producto.urlFoto,
        stock: producto.stock,
        precioUnitario: producto.precioUnitario
    };
    
    return producto;
}