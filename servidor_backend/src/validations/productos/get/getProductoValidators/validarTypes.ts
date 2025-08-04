import InvalidStringFormatError from "@errors/400/InvalidFormatErrors/InvalidStringFormatError";
import mongoose from "mongoose";



export default function validarTypes(idProductoParam: string){
    
    if (! mongoose.Types.ObjectId.isValid(idProductoParam) ) throw new InvalidStringFormatError("request Param: id producto", "string con 24 caracteres hexadecimales");


}