import CustomError from "../../CustomError";

export default class InvalidRangeError extends CustomError {

    constructor(campo: string, rango: string){ 
        const msjError = `Campo '${campo}' es invalido. Debe tener valores entre ${rango}.`;
        super(msjError);

        this.name = "InvalidRangeError";

        this.statusCode = 400;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidRangeError);
        }
    }

}