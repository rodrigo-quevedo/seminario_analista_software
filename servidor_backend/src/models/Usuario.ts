import mongoose from "mongoose";

//se va a usar el ObjectId() de cada usuario (creado automaticamente por MongoDB) en vez de un campo ID.
const Usuario = mongoose.model("Usuario", new mongoose.Schema({
    nombreCompleto: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

    puntos: {
        type: Number, //el tipo Number es el type number de JavaScript, y permite floats y enteros.
        required: true,
        validate: {
            validator: (v: number) => /^\d+(\.\d{1,2})?$/.test(v.toString()), //esta regex permite el numero con o sin centavos cuando se usa el type number de JavaScript. Ejemplo: si tengo 10 puntos, en JavaScript es 10 pero no 10.00, por eso la regex debe permitir los enteros. Si tengo 49,84 o 309849.2 la regex tambien los permite.
            message: () => `La cantidad de puntos del usuario debe tener a lo sumo 2 decimales`,
        }
    }
}))


export default Usuario;