import DatabaseAccessError from "@errors/500/DatabaseAccessError";
import Compra from "@customTypes/entities/Compra";
import CompraModel from "@models/compra";
import ICompraDAO from "./ICompraDAO";
import mongoose from "mongoose";



const CompraDAO: ICompraDAO = {
    //aca si hace falta manejo de errores de DB, porque el insert ocurre durante una request: 
    async crearCompra(compraObj: Compra, session?: mongoose.ClientSession): Promise<Compra> {
        try {
            let result = await CompraModel.insertOne(compraObj,{session}) as Compra;

            return result;
        }
        catch(e){
            throw new DatabaseAccessError(e);
        }
    }
    // async getCompras(): Promise<Compra[]> {

    //     try{
    //         let compras = await CompraModel.find().exec() as Compra[];
    
    //         return compras;
    //     }
    //     catch(e){
    //         throw new DatabaseAccessError(e);
    //     }
    // },

    // async getCompra(id: string): Promise<Compra> {
    //     try{
    //         let compra = await CompraModel.findById(id).exec() as Compra;
    
    //         return compra;
    //     }
    //     catch(e){
    //         throw new DatabaseAccessError(e);
    //     }
    // },

   

}

export default CompraDAO;