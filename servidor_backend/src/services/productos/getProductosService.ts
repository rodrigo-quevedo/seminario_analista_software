import Producto from "@customTypes/entities/Producto";
import ProductoDAO from "@daos/productos/ProductoDAO";


export default async function getProductosService(): Promise<Producto[]>{
    
    let arrProductos = await ProductoDAO.getProductos();
    
    //si arrProductos = [] (osea que no hay productos), se envia array vacio al frontend, y
    //el frontend decide qué hacer.

    return arrProductos;
}