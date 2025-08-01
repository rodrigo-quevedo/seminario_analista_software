

export default function validarVencimiento(vencimiento: string): boolean{
    
    //Se asume que ya se valido el formato MM/YY, osea MM/AA
    let [month, year] = vencimiento.split("/");

    year = "20"+year;//la aplicacion se creó en el año 2025, por lo que futuros vencimientos van a ser de años 20xx, se puede hardcodear

    let dateVencimiento = new Date(Date.UTC(Number(year), Number(month), 1   ,0,0,0));
    console.log(dateVencimiento);

    let dateNow = new Date();
    console.log(dateNow);

    //En el 1ro del mes siguiente a las 00 timezone UTC (por norma ISO) la tarjeta ya se considera vencida.
    //Por lo tanto, el momento actual debe ser anterior (menor) a ese momento de vencimiento.
    //Si es igual o mayor, la tarjeta está vencida.
    
    return (dateNow < dateVencimiento);
}