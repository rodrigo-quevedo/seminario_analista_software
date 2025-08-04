import { Request, Response } from "express";
import getProductosService from "@services/productos/getProductosService";
import ProductosDTO from "@controllers/DTOs/productos/ProductosDTO";


export async function getProductosController(req: Request, res: Response){

    let arrProductos = await getProductosService();

    let response = new ProductosDTO(arrProductos);   

    res.json(response);

};