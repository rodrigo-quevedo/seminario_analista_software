import { Request, Response} from "express";
import validarGetProducto from "@validations/productos/get/getProducto";
import getProductoService from "@services/productos/getProductoService";
import ProductoDTO from "../../../DTOs/productos/ProductoDTO";
import filtrarInfoProductoService from "@services/productos/filtrarInfoProductoService";


export async function getProductoController(req: Request, res: Response) {
    
    const idProducto = validarGetProducto(req.params.idProducto);
    
    const producto = await getProductoService(idProducto);
    const productoInfo = filtrarInfoProductoService(producto);

    const response = new ProductoDTO(productoInfo);

    res.json(response);
};