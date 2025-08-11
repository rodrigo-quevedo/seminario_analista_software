import { DatosRegistroCompra } from "@customTypes/compra";
import Compra from "@customTypes/entities/Compra";
import CompraDAO from "@daos/compras/CompraDAO";
import ProductoDAO from "@daos/productos/ProductoDAO";
import UsuarioDAO from "@daos/usuarios/UsuarioDAO";
import DatosCompraError from "@errors/400/DatosCompraError";
import DatabaseInsertError from "@errors/500/DatabaseInsertError";
import mongoose from "mongoose";

//Se va a utilizar una transaction para registrar la compra y modificar los datos correspondientes (reducir stock, reducir puntos) al mismo tiempo, asegurando que todos los cambios se vean reflejados en la DB.
export default async function registrarCompraService(datosRegistroCompra: DatosRegistroCompra): Promise<Compra>{

    //transaction session
    const session = await mongoose.startSession();
    
    try {
        session.startTransaction();


        //1. registrar compra
        let compraRegistrada = await CompraDAO.crearCompra(
            {
                id: "",//lo inicializo vacio, porque despues el virtual.get() siempre lo modificará con el ObjectId.toString()

                idProducto: datosRegistroCompra.idProducto,
                idUsuario: datosRegistroCompra.idUsuario,
                idPago: datosRegistroCompra.idPago,
                
                cantidad: datosRegistroCompra.cantidad,
                precioUnitario: datosRegistroCompra.precioUnitario,
                descuento: datosRegistroCompra.descuentoAplicado,
                
                fechaHora: new Date()
            },
            session
        )

        if (!compraRegistrada) throw new DatabaseInsertError();


        //2. descontar la cantidad comprada del stock de producto
        let productoResult = await ProductoDAO.descontarStock(datosRegistroCompra.idProducto, datosRegistroCompra.cantidad, session)

        if (productoResult.modifiedCount === 0) 
            throw new DatosCompraError("cantidad", `La cantidad ingresada [${datosRegistroCompra.cantidad}] es mayor al stock disponible`);


        //3. descontar los puntos usados (descuento aplicado) de los puntos del usuario
        if (datosRegistroCompra.descuentoAplicado > 0) {

            let usuarioResult = await UsuarioDAO.descontarPuntos(datosRegistroCompra.idUsuario, datosRegistroCompra.descuentoAplicado, session);
            
            if (usuarioResult.modifiedCount === 0)
                throw new DatosCompraError("descuento", `El descuento ingresado [${datosRegistroCompra.descuentoAplicado}] es menor a los puntos actuales del usuario`);

        }


        await session.commitTransaction();
        session.endSession();

        return compraRegistrada;
    }
    catch (error) {
        console.log(error);

        await session.abortTransaction();
        session.endSession();
        throw error;
    }
    
}