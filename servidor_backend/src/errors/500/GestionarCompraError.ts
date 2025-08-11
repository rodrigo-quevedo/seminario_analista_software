import CustomError from "../CustomError";

export default class GestionarCompraError extends CustomError {

     constructor(){

        super("Hubo un error al intentar gestionar la compra.");
        
        this.name = "GestionarCompraError";
        
        this.statusCode = 500;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, GestionarCompraError);
        }
    }
}