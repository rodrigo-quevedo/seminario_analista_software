import Usuario from "@customTypes/entities/Usuario";

export default interface IUsuarioDAO {

    getUsuario(id: string): Promise<Usuario>;

    //Estos metodos se usarán para insertar los productos de prueba:
    getUsuarios(): Promise<Usuario[]>;
    
    crearUsuarios(arrUsuarios: Usuario[]): Promise<Usuario[]>;

}