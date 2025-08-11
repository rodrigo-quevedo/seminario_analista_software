import { Router } from "express";
import { hacerPagoController } from "@controllers/pagos";
import simularAuth from "@middlewares/simularAuth";

const router = Router();

router.post('/', simularAuth, hacerPagoController)



export default router;