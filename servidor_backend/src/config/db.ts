import mongoose from "mongoose";


//monitorizar: esto se ejecuta una sola vez al hacer import
mongoose.connection.on('connected', () => console.log(new Date().toISOString(),': ✅ MongoDB connected'));
mongoose.connection.on('disconnected', () => console.warn(new Date().toISOString(),': ⚠️ MongoDB disconnected'));
mongoose.connection.on('reconnected', () => console.log(new Date().toISOString(),'✅ MongoDB reconnected'));
mongoose.connection.on('error', err => console.error(new Date().toISOString(),'❌ MongoDB error:', err));

export async function conectarBD() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);//iniciar conexion DB 
    }
    catch(e: any|Error){
        let error = e as Error;
        console.error('Falló la conexión a MongoDB. ', error.name, error.message);
        process.exit(1);
    }
}

