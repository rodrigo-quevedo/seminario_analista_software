export function getMsjRequerido(propiedad: string){
    return `Campo '${propiedad}' es necesario para realizar la operación.`
};


export function getMsjTipoNumber(propiedad: string){
    return `Campo '${propiedad}' debe ser numerico.`
};


export function getMsjTipoInteger(propiedad: string){
    return `Campo '${propiedad}' debe ser Integer.`
};


export function getMsjMayorCero(propiedad: string){
    return `Campo '${propiedad}' debe ser mayor a 0.`
};

export function getMsjMayorIgualCero(propiedad: string){
    return `Campo '${propiedad}' debe ser mayor o igual a 0.`
};


