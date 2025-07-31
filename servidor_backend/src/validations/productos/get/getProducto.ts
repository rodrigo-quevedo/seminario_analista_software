import validarTypes from "./getProductoValidators/validarTypes";

export default function validarGetProducto(idProductoParam: string) : number{
    
    //No hace falta comprobar que 'req.params.idProducto' != null, 
    //porque si fuera null o undefined, no se activaria el route y tampoco el controller (la request nunca llegaría).
    
    //Los params siempre llegan como string, asique hay que parsear y verificar
    const idProducto = Number(idProductoParam);
    validarTypes(idProducto);


    return idProducto;
};