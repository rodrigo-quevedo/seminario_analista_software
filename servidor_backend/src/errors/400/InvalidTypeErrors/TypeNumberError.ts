import InvalidTypeError from "./InvalidTypeError";

export default class TypeNumberError extends InvalidTypeError {

    constructor(campo: string){ 
        const msjError = `Campo '${campo}' debe ser numerico.`;
        super(msjError);

        this.name = "TypeNumberError";

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TypeNumberError);
        }
    }

}