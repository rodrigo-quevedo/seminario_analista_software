import Usuario from "@customTypes/entities/Usuario";
import UsuarioDAO from "@daos/usuarios/UsuarioDAO";
import NotFoundInDatabaseError from "@errors/400/NotFoundInDatabaseError";


export default async function getUsuarioService(idUsuario: string): Promise<Usuario> {
    let usuario = await UsuarioDAO.getUsuario(idUsuario);
    if (! usuario) throw new NotFoundInDatabaseError(`usuario id: ${idUsuario}`);

    return usuario;
}