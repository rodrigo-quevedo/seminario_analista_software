import { Router } from "express";
import { verificarCompraController } from "@controllers/compras";
import simularAuth from "@middlewares/simularAuth";


const router = Router();

router.post('/verificar', simularAuth, verificarCompraController);



export default router;