import CustomError from "../CustomError";

export default class FieldRequiredError extends CustomError {

    constructor(campoRequerido: string){ 
        const msjError = `Campo '${campoRequerido}' es necesario para realizar la operación.`;
        super(msjError);

        this.name = "FieldRequiredError";

        this.statusCode = 400;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, FieldRequiredError);
        }
    }

}