import { NextFunction, Request, Response } from "express";
import ProductoDAO from "@daos/productos/ProductoDAO";

export async function getProductos(req: Request, res: Response){

    let arrProductos = await ProductoDAO.getProductos();

    res.json({productos: arrProductos });// {productos{[{//producto1}, {producto2}//etc]}}

};