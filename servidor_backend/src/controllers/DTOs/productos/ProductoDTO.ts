import Producto from "@customTypes/entities/Producto";


// {productos{[{//producto1}, {producto2}//etc]}}
export default class ProductoDTO {
    
    producto: Producto;

    constructor(prod: Producto){
        this.producto = prod;
    }
}