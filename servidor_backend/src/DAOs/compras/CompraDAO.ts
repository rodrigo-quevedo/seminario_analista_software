import DatabaseAccessError from "@errors/500/DatabaseAccessError";
import Compra from "@customTypes/entities/Compra";
import CompraModel from "@models/compra";
import ICompraDAO from "./ICompraDAO";



const CompraDAO: ICompraDAO = {
    
    async getCompras(): Promise<Compra[]> {

        try{
            let compras = await CompraModel.find().exec() as Compra[];
    
            return compras;
        }
        catch(e){
            throw new DatabaseAccessError(e);
        }
    },

    async getCompra(id: string): Promise<Compra> {
        try{
            let compra = await CompraModel.findById(id).exec() as Compra;
    
            return compra;
        }
        catch(e){
            throw new DatabaseAccessError(e);
        }
    },

    async crearCompra(compraObj: Compra): Promise<Compra> {
        let result = await CompraModel.insertOne(compraObj) as Compra;

        return result;
    }

}

export default CompraDAO;