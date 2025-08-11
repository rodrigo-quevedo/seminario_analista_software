import CustomError from "../CustomError";

export default class DatosCompraError extends CustomError {

    constructor(campoInvalido: string, razon: string){ 
        const msjError = `Campo '${campoInvalido}' es invalido. ${razon}.`;
        super(msjError);

        this.name = "DatosCompraError";

        this.statusCode = 400;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DatosCompraError);
        }
    }

}