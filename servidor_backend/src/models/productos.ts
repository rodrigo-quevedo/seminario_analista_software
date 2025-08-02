import mongoose from "mongoose";

//se va a usar el ObjectId() de cada producto (creado automaticamente por MongoDB) en vez de un campo ID.
const productosModel = mongoose.model("productos", new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    urlFoto: {type: String, required: true},
    
    stock: {type: mongoose.SchemaTypes.Int32, required: true},

    precioUnitario: {
        type: Number, //el tipo Number es el type number de JavaScript, y permite floats y enteros.
        required: true,
        validate: {
            validator: (v: number) => /^\d+(\.\d{1,2})?$/.test(v.toString()), //esta regex permite el numero con o sin centavos cuando se usa el type number de JavaScript. Ejemplo: si tengo $10, en JavaScript es 10 pero no 10.00, por eso la regex debe permitir los enteros. Si tengo $49,84 o $309849.2 la regex tambien los permite.
            message: () => `El precio unitario debe tener a lo sumo 2 decimales`,
        }
    },
    
}))


export default productosModel;