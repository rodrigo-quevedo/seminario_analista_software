import Compra from "@customTypes/entities/Compra";
import mongoose from "mongoose";

export default interface ICompraDAO {
    
    crearCompra(compraObj: Compra, session?: mongoose.ClientSession): Promise<Compra>;

    //para testear:
    // getCompras(): Promise<Compra[]>;

    // getCompra(id: string): Promise<Compra>;
     

}