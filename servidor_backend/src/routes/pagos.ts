import { Router } from "express";
import { hacerPago } from "@controllers/pagos";

const router = Router();

router.post('/', hacerPago)



export default router;