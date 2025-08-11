// Según el Diagrama de Clases de Diseño de la 1ra iteración, los métodos de la clase control GestionCompras son:
// buscarDatosProductos()
// buscarDetalleProducto(id: int)
// verificarDatosCompra(cantidad: int, descuento: float)
// procesarPago(idTarjeta: int, vencimiento: string, codigoSeguridad: int, titular: string, documento: int, cantidadCuotas: int, mail: string)

// De esos métodos de clase se puden sacar los siguientes endpoints:
// GET /productos -----> buscarDatosProductos()
// GET /productos/:id ----> buscarDetalleProducto(id: int)
// POST /compras/verificar {cantidad, descuento} ----> verificarDatosCompra(cantidad: int, descuento: float)
// POST /pagos {idTarjeta, vencimiento, codigoSeguridad, titular, documento, cantidadCuotas, mail} ----> procesarPago(idTarjeta: int, vencimiento: string, codigoSeguridad: int, titular: string, documento: int, cantidadCuotas: int, mail: string)

// Nota: el endpoint se nombra por la razón por la que se accede a él, sin importar que ese 
// endpoint acceda a Entidades distintas. Por ejemplo: cuando en POST /compras/verificar el 
// servidor accede a las Entidades "Compra" y "Usuario" (para realizar la verificación 
// de descuento disponible para un usuario) el endpoint sigue siendo "compras".
// Por más que el servidor accede a "Usuario", la RAZÓN por la que la API es llamada 
// en el endpoint POST /compras/verificar es para verificar los datos de una COMPRA.
// Es decir, dentro de la lógica de un endpoint (en este caso la lógica está en los 
// servicios de los controladores del endpoint) se puede trabajar con distintas Entidades 
// y esto no afecta al nombre del endpoint.



import { Router } from "express";
import productosRouter from './productos'
import comprasRouter from './compras'
import pagosRouter from './pagos'


const router = Router()

router.use('/productos', productosRouter)
router.use('/compras', comprasRouter)
router.use('/pagos', pagosRouter)


export default router;