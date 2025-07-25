import { Request, Response, Router } from "express";
import { DatosPago } from "../types/pagos";



const router = Router()

router.post('/', (req: Request, res: Response) =>
{
    if (req.body === undefined || req.body === null) throw new Error("No hay un JSON valido en la HTTP request Body.")

    const datos = req.body as DatosPago

    //Comprobar que todos los datos estan llenos
    const propiedadesNoLlenadas: string[] = []
    Object.entries(datos).forEach((propiedadValor)=>{ 
        //[0]-> propiedad, [1]-> valor
        if (propiedadValor[1] === undefined || propiedadValor[1] === null)
            propiedadesNoLlenadas.push(propiedadValor[0])
    })
    if (propiedadesNoLlenadas.length !== 0) throw new Error("No se ingresaron todos los datos de pago.")
        
        



    // const datos = req.body
    console.log("Datos enviados:", datos)
    



    // Sin el express.json() parser, el HTTP request Body se lee asi:
    // let data = '';
    // req.on('data', chunk => { data += chunk; });
    // req.on('end', () => {console.log("Datos enviados: ", data)});

    res.send("ok")
})



export default router;