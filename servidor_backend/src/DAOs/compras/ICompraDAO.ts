import Compra from "@customTypes/entities/Compra";

export default interface ICompraDAO {
    
    getCompras(): Promise<Compra[]>;

    getCompra(id: string): Promise<Compra>;
     
    crearCompra(compraObj: Compra): Promise<Compra>;

}