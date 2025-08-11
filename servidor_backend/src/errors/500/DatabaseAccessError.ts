import mongoose from "mongoose";
import CustomError from "../CustomError";

export default class DatabaseAccessError extends CustomError {

     constructor(e: any){
        if (e instanceof mongoose.Error){
            super(e.message);

            this.name = e.name;
        } 
        else {//if (e instanceof Error)
            super("Hubo un error accediendo a los datos de la Base de Datos.");
            
            this.name = "DatabaseAccessError";
        }
        
        this.statusCode = 500;

        // Maintains proper stack trace for where error was thrown (only for V8 engines)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DatabaseAccessError);
        }
    }
}