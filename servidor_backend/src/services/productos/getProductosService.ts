import Producto from "@customTypes/entities/Producto";
import ProductoDAO from "@daos/productos/ProductoDAO";
import DatabaseAccessError from "@errors/500/DatabaseAccessError";


export default async function getProductosService(): Promise<Producto[]>{
    
    let arrProductos = await ProductoDAO.getProductos();

    //validar not null, etc
    if (arrProductos == null) throw new DatabaseAccessError(new Error());

    //limpiar datos a enviar al front (_id, __v)
    arrProductos = arrProductos.map((prod)=>{
            return {
                id: prod.id,
                nombre: prod.nombre,
                descripcion: prod.descripcion,
                urlFoto: prod.urlFoto,
                stock: prod.stock,
                precioUnitario: prod.precioUnitario
            }
        })
    
    return arrProductos;
}