import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import userRoutes from './routes/UserGit.routes';
const app = express()

app.set('port',config.PORT_SERVER);
app.use(morgan('dev')); // información de peticiones rutas
app.use(cors()); // conectarme a los servidores o peticiones
app.use(express.json());// objetos JSON...peticiones POST 
app.use(express.urlencoded({ extended:false}));
app.use(userRoutes); //usando routes

export default app;