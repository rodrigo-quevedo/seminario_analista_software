import Producto from "@customTypes/entities/Producto";
import mongoose from "mongoose";

export default interface IProductoDAO {
    
    getProductos(): Promise<Producto[]>;

    getProducto(id: string): Promise<Producto>;

    descontarStock(idProducto: string, cantidad: number, session?: mongoose.ClientSession): Promise<mongoose.UpdateWriteOpResult>;
     
    //Este metodo se usará para insertar los productos de prueba:
    crearProductos(arrProductos: Producto[]): Promise<Producto[]>;

}