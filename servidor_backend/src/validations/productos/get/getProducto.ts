import validarTypes from "./getProductoValidators/validarTypes";

export default function validarGetProducto(idProducto: string) : string{
    
    //No hace falta comprobar que 'req.params.idProducto' != null, 
    //porque si fuera null o undefined, no se activaria el route y tampoco el controller (la request nunca llegaría).
    

    validarTypes(idProducto);


    return idProducto;
};