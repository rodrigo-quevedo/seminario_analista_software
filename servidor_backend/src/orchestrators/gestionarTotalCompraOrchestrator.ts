import { DatosRegistroCompra, GestionarCompraOrchertratorArgs } from "@customTypes/compra";
import Compra from "@customTypes/entities/Compra";
import { DatosCreatePaymentMercadoPago, PaymentResponse_Status } from "@customTypes/pagos";
import GestionarCompraError from "@errors/500/GestionarCompraError";
import registrarCompraService from "@services/compras/registrarCompraService";
import ejecutarPagoService from "@services/pagos/ejecutarPagoService";


export default async function gestionarTotalCompraOrchestrator({totalCalculado, descuentoAplicado, producto, usuario, datosCompra}: GestionarCompraOrchertratorArgs): Promise<Compra>{

     //preparar datos para registrar la compra
    const datosRegistroCompra: DatosRegistroCompra = {
        idProducto: producto.id,
        idUsuario: usuario.id,
        idPago: null, //lo inicializo en null, y lo modifico si hace falta realizar pago
        
        cantidad: datosCompra.cantidad,
        precioUnitario: producto.precioUnitario,
        descuentoAplicado
    }
    //preparar datos para pago
    const datosPago: DatosCreatePaymentMercadoPago = {
        transaction_amount: totalCalculado,

        token: datosCompra.token,
        issuer_id: Number(datosCompra.issuer_id),
        payment_method_id: datosCompra.payment_method_id,

        installments: datosCompra.installments,
        
        description: producto.descripcion,
        
        payer: {
            email: usuario.email,
            identification: datosCompra.payer.identification
        }
    }

    //logica segun total de compra calculado
    if (totalCalculado === 0) {
        return await registrarCompraService(datosRegistroCompra);
    }

    let paymentRespose = await ejecutarPagoService(datosPago);
    
    if (paymentRespose.status as PaymentResponse_Status === "approved" && paymentRespose.id){
        datosRegistroCompra.idPago = paymentRespose.id;

        return await registrarCompraService(datosRegistroCompra);
    }

    throw new GestionarCompraError();//en esta primera iteracion del proyecto solo se trabaja con tajetas de prueba, y el unico estado permitido sera el aprobado/approved. El estado "pendiente" y su manejo con webhooks queda para otras iteraciones.

}


