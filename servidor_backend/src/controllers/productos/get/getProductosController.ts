import { Request, Response } from "express";
import getProductosService from "@services/productos/getProductosService";
import ProductosDTO from "../../../DTOs/productos/ProductosDTO";
import filtrarInfoProductosService from "@services/productos/filtrarInfoProductosService";


export async function getProductosController(req: Request, res: Response){

    const arrProductos = await getProductosService();
    const arrProductosInfo = filtrarInfoProductosService(arrProductos);

    const response = new ProductosDTO(arrProductosInfo);   

    res.json(response);

};