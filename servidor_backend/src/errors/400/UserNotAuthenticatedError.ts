import CustomError from "../CustomError";

export default class UserNotAuthenticatedError extends CustomError {

    constructor(){ 
        super(`No hay un idUsuario en el request body, o no es valido (debe ser un string de 24 caracteres hex). Es necesario para acceder a esta ruta.`);

        this.name = "UserNotAuthenticatedError";

        this.statusCode = 403;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, UserNotAuthenticatedError);
        }
    }

}