import ProductoDAO from "@daos/productos/ProductoDAO";
import productosData from "./productos.json"


export default async function productosDemo(){

    let productos = await ProductoDAO.getProductos();
    
    if (productos != null && productos?.length === 0){
        let productosCreados = await ProductoDAO.crearProductos(productosData.productos);
        console.log("Se crearon los productos: ", JSON.stringify(productosCreados));
    }
    else {
        console.log("Productos existentes:", JSON.stringify( productos?.map((prod)=>`${prod.id} - ${prod.nombre}`) ))
    }
}