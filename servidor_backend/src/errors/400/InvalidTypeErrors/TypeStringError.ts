import InvalidTypeError from "./InvalidTypeError";

export default class TypeStringError extends InvalidTypeError {

    constructor(campo: string){ 
        const msjError = `Campo '${campo}' debe ser string.`;
        super(msjError);

        this.name = "TypeStringError";

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TypeStringError);
        }
    }

}