// Este archivo simplemente inicia el servidor con app.listen()

require('module-alias/register')
import app from './app';
import {conectarBD} from '@config/db';
import productosDemo from './demo/productosDemo';
import usuariosDemo from './demo/usuariosDemo';
import { AddressInfo } from 'net';

conectarBD();
productosDemo();
usuariosDemo();



let server = app.listen(0, () => {
  const address = server.address() as AddressInfo;
  console.log(`Server is running on port ${address.port}`);
  console.log('env variable test: ', process.env.MI_VARIABLE)
});
