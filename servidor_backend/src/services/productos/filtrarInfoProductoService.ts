import Producto from "@customTypes/entities/Producto";

export default function filtrarInfoProductoService(producto: Producto): Producto {
    
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