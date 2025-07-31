import { Request, Response} from "express";
import validarGetProducto from "@validations/productos/get/getProducto";


export function getProducto(req: Request, res: Response) {
    
    const idProducto = validarGetProducto(req.params.idProducto);
    
    
    //Supongamos que se hace un GET a /productos/12?precio_unitario=56518.39 
    console.log(req.query)
    console.log("id producto:", req.params.idProducto) //output esperado: 12
    console.log("precio_unitario en numero:", Number(Number(req.query.precio_unitario).toFixed(2)))// output esperado: 56518.39 

    res.send("request OK. id producto: "+idProducto)
};