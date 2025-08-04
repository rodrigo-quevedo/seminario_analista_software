import { Router } from "express";
import {getProductosController, getProductoController} from "@controllers/productos"


const router = Router();

router.get('/', getProductosController);

router.get('/:idProducto', getProductoController);


export default router;