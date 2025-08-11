import CustomError from "../CustomError";

export default class MercadoPagoAPIError extends CustomError {

     constructor(){

        super("Hubo un error al intentar obtener una respuesta de la API de MercadoPago.");
        
        this.name = "MercadoPagoAPIError";
        
        this.statusCode = 500;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, MercadoPagoAPIError);
        }
    }
}