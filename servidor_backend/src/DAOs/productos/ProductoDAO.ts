import Producto from "@customTypes/entities/Producto";
import IProductoDAO from "./IProductoDAO";

import ProductoModel from "@models/producto";
import DatabaseAccessError from "@errors/500/DatabaseAccessError";



const ProductoDAO: IProductoDAO = {
    
    async getProductos(): Promise<Producto[]> {

        try{
            let productos = await ProductoModel.find().exec() as Producto[];
    
            return productos;
        }
        catch(e){
            throw new DatabaseAccessError(e);
        }
    },

    async getProducto(id: string): Promise<Producto> {
        try{
            let producto = await ProductoModel.findById(id).exec() as Producto;
    
            return producto;
        }
        catch(e){
            throw new DatabaseAccessError(e);
        }
    },

    async crearProductos(arrProductos: Producto[]): Promise<Producto[]> {
        let result = await ProductoModel.insertMany(arrProductos) as Producto[];

        return result;
    }

}

export default ProductoDAO;