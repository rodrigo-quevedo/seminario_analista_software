import InvalidJsonError from "../../errors/400/InvalidJsonError";

export default function validarReqBodyJson(reqBody: any){
    if (reqBody === undefined ||reqBody === null) throw new InvalidJsonError();
}