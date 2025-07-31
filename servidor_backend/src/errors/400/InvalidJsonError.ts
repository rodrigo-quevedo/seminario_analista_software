import CustomError from "../CustomError";

export default class InvalidJsonError extends CustomError {

    constructor(){ 
        super(`No hay un JSON valido en la HTTP request Body.`);
        
        this.name = "InvalidJsonError";
        
        this.statusCode = 400;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidJsonError);
        }
    }

}