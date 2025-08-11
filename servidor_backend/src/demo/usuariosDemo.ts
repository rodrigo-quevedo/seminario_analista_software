
import UsuarioDAO from "@daos/usuarios/UsuarioDAO";
import usuariosData from "./usuarios.json"


export default async function usuariosDemo(){

    let usuarios = await UsuarioDAO.getUsuarios();
    
    if (usuarios != null && usuarios?.length === 0){
        let usuariosCreados = await UsuarioDAO.crearUsuarios(usuariosData.usuarios);
        console.log("Se crearon los usuarios: ", JSON.stringify(usuariosCreados));
    }
    else {
        console.log("Usuarios existentes:", JSON.stringify( usuarios?.map((usr)=>`${usr.id} - ${usr.email}`) ))
    }
}