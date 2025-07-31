import InvalidTypeError from "./InvalidTypeError";

export default class TypeIntegerError extends InvalidTypeError {

    constructor(campo: string){ 
        const msjError = `Campo '${campo}' debe ser Integer.`
        super(msjError);

        this.name = "TypeIntegerError";

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TypeIntegerError);
        }
    }

}