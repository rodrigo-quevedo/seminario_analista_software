import Usuario from "@customTypes/entities/Usuario";
import IUsuarioDAO from "./IUsuarioDAO";
import UsuarioModel from "@models/usuario";
import DatabaseAccessError from "@errors/500/DatabaseAccessError";


const UsuarioDAO: IUsuarioDAO = {
    
    getUsuario: async function (id: string): Promise<Usuario> {
        try{
            let usuario = await UsuarioModel.findById(id).exec() as Usuario;
    
            return usuario;
        }
        catch(e){
            throw new DatabaseAccessError(e);
        }
    },

    //A partir de aqui no se devuelven errores, porque los Errores son sobre todo para contestar de manera personalizada a las requests.
    //Las siguientes funciones solo se usan al iniciar el servidor para verificar los datos de prueba.
    getUsuarios: async function(): Promise<Usuario[]>{
        let usuarios = await UsuarioModel.find().exec() as Usuario[];

        return usuarios;
    },

    crearUsuarios: async function (arrUsuarios: Usuario[]): Promise<Usuario[]> {
        let usuariosCreados = await UsuarioModel.insertMany(arrUsuarios) as Usuario[];

        return usuariosCreados;
    }
}

export default UsuarioDAO;