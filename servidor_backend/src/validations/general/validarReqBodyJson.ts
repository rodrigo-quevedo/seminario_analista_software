export default function validarReqBodyJson(reqBody: any){
    if (reqBody === undefined ||reqBody === null) throw new Error("No hay un JSON valido en la HTTP request Body.");
}