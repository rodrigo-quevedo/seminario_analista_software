import Compra from "@customTypes/entities/Compra";


// {productos{[{//producto1}, {producto2}//etc]}}
export default class CompraRegistradaDTO {
    
    compra: Compra;
    nombreProducto: string;
    total: number;

    constructor(compra: Compra, nombreProducto: string, total: number){
        this.compra = compra;
        this.nombreProducto = nombreProducto;
        this.total = total;
    }
}