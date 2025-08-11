import CustomError from "../CustomError";

export default class DatabaseInsertError extends CustomError {

     constructor(){

        super("Hubo un error al intentar registrar los datos en la Base de Datos.");
        
        this.name = "DatabaseInsertError";
        
        this.statusCode = 500;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DatabaseInsertError);
        }
    }
}