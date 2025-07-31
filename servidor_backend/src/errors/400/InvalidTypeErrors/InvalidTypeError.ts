import CustomError from "../../CustomError";

export default class InvalidTypeError extends CustomError {

    constructor(msjError: string){ 
        super(msjError);

        this.statusCode = 400;
    }

}