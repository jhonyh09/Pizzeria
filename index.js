import app from './app.js';
import { connectDb } from './db.js';

// Inicializacion de la conection a la DB
connectDb('127.0.0.1', 'donremolodb');

// Method para iniciar la escucha de express RUN
let PORT = 4000;
app.listen(PORT);
console.log('Server is Runing in Port: '+ PORT);
