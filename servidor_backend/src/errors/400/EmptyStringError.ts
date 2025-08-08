import CustomError from "../CustomError";

export default class EmptyStringError extends CustomError {

    constructor(campoRequerido: string){ 
        const msjError = `Campo '${campoRequerido}' no puede ser un string vacio ("").`;
        super(msjError);

        this.name = "EmptyStringError";

        this.statusCode = 400;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, EmptyStringError);
        }
    }

}