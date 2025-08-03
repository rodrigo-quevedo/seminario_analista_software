export default interface Usuario {
    //pense que ID era int, pero la ID por defecto de mongodb es un string en hexadecimal 
    // (sistema numerico hexadecimal usa del 0 al 9, pero despues del 9 sigue con la 'a' hasta la 'f', por eso es string)
    id: string, 

    nombreCompleto: string,
    email: string,
    password: string, //es mejor evitar caracteres no-ASCII como la 'ñ', por eso 'password' en vez de 'contraseña'

    puntos: number
}