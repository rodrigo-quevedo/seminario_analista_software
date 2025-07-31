import CustomError from "../../CustomError";

export default class MayorCeroError extends CustomError {

    constructor(campo: string){ 
        const msjError = `Campo '${campo}' debe ser mayor a 0.`;
        super(msjError);

        this.name = "MayorCeroError";

        this.statusCode = 400;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, MayorCeroError);
        }
    }

}