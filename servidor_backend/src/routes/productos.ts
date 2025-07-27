import { Router } from "express";
import {getProductos, getProducto} from "@controllers/productos"


const router = Router();

router.get('/', getProductos);

router.get('/:idProducto', getProducto);


export default router;