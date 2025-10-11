import Compra from "@customTypes/entities/Compra";


// {productos{[{//producto1}, {producto2}//etc]}}
export default class CompraRegistradaDTO {
    
    compra: Compra;
    urlFotoProducto: string;
    nombreProducto: string;
    total: number;

    constructor(compra: Compra, urlFotoProducto: string, nombreProducto: string, total: number){
        this.compra = compra;
        this.urlFotoProducto = urlFotoProducto;
        this.nombreProducto = nombreProducto;
        this.total = total;
    }
}