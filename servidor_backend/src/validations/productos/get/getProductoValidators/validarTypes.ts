import TypeIntegerError from "@errors/400/InvalidTypeErrors/TypeIntegerError";
import TypeNumberError from "@errors/400/InvalidTypeErrors/TypeNumberError";


export default function validarTypes(idProducto: number){
    
    if (isNaN(idProducto))  throw new TypeNumberError("param /:idProducto");

    if (!Number.isInteger(idProducto)) throw new TypeIntegerError("param /:idProducto")

}