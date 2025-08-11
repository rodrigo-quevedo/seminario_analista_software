import mongoose from "mongoose";
import Compra from "@customTypes/entities/Compra";

const CompraSchema =  new mongoose.Schema<Compra>(
    {
        idProducto: {type: String, required: true},
        idUsuario: {type: String, required: true},
        idPago: {type: Number, required: false, default: null},
        
        cantidad: {type: Number, required: true},
        precioUnitario: {
            type: Number, 
            required: true,
            validate: {
                validator: (v: number) => /^\d+(\.\d{1,2})?$/.test(v.toString()),
                message: () => `El precio unitario debe tener a lo sumo 2 decimales`,
            }
        },
        descuento: {
            type: Number, 
            required: true,
            validate: {
                validator: (v: number) => /^\d+(\.\d{1,2})?$/.test(v.toString()),
                message: () => `El precio unitario debe tener a lo sumo 2 decimales`,
            }
        },

        fechaHora: {type: Date, required: true}//podria ser unique, pero podria haber problemas de concurrencia
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

//Mapear ObjectId que viene por defecto (_id) con el ID de la entidad:
CompraSchema.virtual('id').get(function () {
  return this._id.toString();
});


const CompraModel = mongoose.model<Compra>("Compra", CompraSchema);
export default CompraModel;