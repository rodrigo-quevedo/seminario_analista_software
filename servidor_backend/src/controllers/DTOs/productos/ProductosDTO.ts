import Producto from "@customTypes/entities/Producto";


// {productos{[{//producto1}, {producto2}//etc]}}
export default class ProductosDTO {
    
    productos: Producto[];

    constructor(productosArg: Producto[]){
        this.productos = productosArg;
    }
}