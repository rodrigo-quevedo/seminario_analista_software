import { Router } from "express";
import { hacerPago } from "@controllers/pagos";
import simularAuth from "@middlewares/simularAuth";

const router = Router();

router.post('/', simularAuth, hacerPago)



export default router;