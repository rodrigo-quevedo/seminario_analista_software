import ProductoDAO from "@daos/productos/ProductoDAO";
import productosData from "./productos.json"


export default async function productosDemo(){
    ProductoDAO.crearProductos(productosData.productos);
}