import CustomError from "../CustomError";

export default class NotFoundInDatabaseError extends CustomError {

    constructor(objNoEncontrado: string){ 
        const msjError = `'${objNoEncontrado}' no se encontró en la Base de Datos.`;
        super(msjError);

        this.name = "NotFoundInDatabaseError";

        this.statusCode = 404;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotFoundInDatabaseError);
        }
    }

}