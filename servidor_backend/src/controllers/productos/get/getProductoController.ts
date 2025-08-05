import { Request, Response} from "express";
import validarGetProducto from "@validations/productos/get/getProducto";
import getProductoService from "@services/productos/getProductoService";
import ProductoDTO from "../../../DTOs/productos/ProductoDTO";


export async function getProductoController(req: Request, res: Response) {
    
    const idProducto = validarGetProducto(req.params.idProducto);
    
    const producto = await getProductoService(idProducto);

    let response = new ProductoDTO(producto);

    res.json(response);
};