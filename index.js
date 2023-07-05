import app from './app.js';
import { connectDb } from './db.js';


//Importación de las variables de entorno
import dotenv from 'dotenv';
dotenv.config();
let PORT = process.env.PORT || 3000;
let url= process.env.Urldb;
let db = process.env.db;



// Inicializacion de la conection a la DB
connectDb(url, db);

// Method para iniciar la escucha de express RUN
app.listen(PORT);
console.log('Server is Runing in Port: '+ PORT);
