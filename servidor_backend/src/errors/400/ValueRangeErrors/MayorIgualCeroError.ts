import CustomError from "../../CustomError";

export default class MayorIgualCeroError extends CustomError {

    constructor(campo: string){ 
        const msjError = `Campo '${campo}' debe ser mayor o igual a 0.`;
        super(msjError);

        this.name = "MayorIgualCeroError";

        this.statusCode = 400;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, MayorIgualCeroError);
        }
    }

}