import Usuario from "@customTypes/entities/Usuario";
import mongoose from "mongoose";

export default interface IUsuarioDAO {

    getUsuario(id: string): Promise<Usuario>;

    descontarPuntos(idUsuario: string, descuentoAplicado: number, session?: mongoose.ClientSession): Promise<mongoose.UpdateWriteOpResult> 
    
    //Estos metodos se usarán para insertar los productos de prueba:
    getUsuarios(): Promise<Usuario[]>;
    
    crearUsuarios(arrUsuarios: Usuario[]): Promise<Usuario[]>;

}