import CustomError from "../../CustomError";

export default class InvalidStringFormatError extends CustomError {

    constructor(campo: string, formatoValido: string){ 
        const msjError = `Campo string '${campo}' es invalido. Debe tener el siguiente formato: "${formatoValido}".`;
        super(msjError);

        this.name = "InvalidStringFormatError";

        this.statusCode = 400;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidStringFormatError);
        }
    }

}