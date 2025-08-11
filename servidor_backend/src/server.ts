// Este archivo simplemente inicia el servidor con app.listen()

require('module-alias/register')
import app from './app';
import {conectarBD} from '@config/db';
import productosDemo from './demo/productosDemo';
import usuariosDemo from './demo/usuariosDemo';

conectarBD();
productosDemo();
usuariosDemo();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('env variable test: ', process.env.MI_VARIABLE)
});
