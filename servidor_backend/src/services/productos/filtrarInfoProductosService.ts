import Producto from "@customTypes/entities/Producto";

export default function filtrarInfoProductosService(arrProductos: Producto[]): Producto[] {

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