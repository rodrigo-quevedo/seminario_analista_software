import Producto from "@customTypes/entities/Producto";

export default interface IProductoDAO {
    
    getProductos(): Promise<Producto[]>;

    getProducto(id: string): Promise<Producto>;
     
    //Este metodo se usará para insertar los productos de prueba:
    crearProductos(arrProductos: Producto[]): Promise<Producto[] | null>;

}