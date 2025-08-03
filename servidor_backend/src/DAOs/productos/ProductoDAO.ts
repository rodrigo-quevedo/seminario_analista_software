import Producto from "@customTypes/entities/Producto";
import IProductoDAO from "./IProductoDAO";

import ProductoModel from "@models/producto";
import DatabaseAccessError from "@errors/500/DatabaseAccessError";



const ProductoDAO: IProductoDAO = {
    
    async getProductos(): Promise<Producto[] | null> {

        try{
            let productos = await ProductoModel.find().exec() as Producto[];
            console.log("todos los productos:",productos);
            console.log("id del primer producto:", productos[0].id);
    
            return productos;
        }
        catch(e){
            throw new DatabaseAccessError(e);
        }
    },

    async getProducto(id: string): Promise<Producto | null> {
        throw new Error("Method not implemented.");
    },

    async crearProductos(arrProductos: Producto[]): Promise<Producto[] | null> {
        let result = await ProductoModel.insertMany(arrProductos);

        return result;
    }

}

export default ProductoDAO;