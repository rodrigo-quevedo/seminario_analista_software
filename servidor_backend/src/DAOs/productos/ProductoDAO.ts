import Producto from "@customTypes/entities/Producto";
import IProductoDAO from "./IProductoDAO";

import ProductoModel from "@models/producto";
import DatabaseAccessError from "@errors/500/DatabaseAccessError";
import mongoose from "mongoose";



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

    async descontarStock(idProducto: string, cantidad: number, session?: mongoose.ClientSession): Promise<mongoose.UpdateWriteOpResult> {
        try{
            return await ProductoModel.updateOne(
                {_id: idProducto, stock: {$gte: cantidad}},
                {$inc: {stock: -cantidad}},
                {session}
            ).exec();

        }
        catch(e){
            throw new DatabaseAccessError(e);
        }  
    },

    //A partir de aqui no se devuelven errores, porque los Errores son sobre todo para contestar de manera personalizada a las requests.
    //Las siguientes funciones solo se usan al iniciar el servidor para verificar los datos de prueba.
    async crearProductos(arrProductos: Producto[]): Promise<Producto[]> {
        let result = await ProductoModel.insertMany(arrProductos) as Producto[];

        return result;
    }

    
}

export default ProductoDAO;