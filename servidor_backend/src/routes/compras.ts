import { Router } from "express";
import { verificarCompra } from "@controllers/compras";


const router = Router();

router.post('/verificar', verificarCompra);



export default router;