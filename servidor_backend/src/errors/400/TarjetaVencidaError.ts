import CustomError from "../CustomError";

export default class TarjetaVencidaError extends CustomError {

    constructor(campoRequerido: string){ 
        const msjError = `Campo '${campoRequerido}' indica que la tarjeta ya venció.`;
        super(msjError);

        this.name = "TarjetaVencidaError";

        this.statusCode = 400;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TarjetaVencidaError);
        }
    }

}