import '@babel/polyfill';

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

//inicialización

const app = express();

//settings

app.set('port', process.env.PORT || 4000);

//middlewares server

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales

app.use((req,res,next) => {
    next();
});

//Importar rutas

import actividades from './routes/actividades.routes.js'
import reuniones from './routes/reuniones.routes.js'
import clases from './routes/clases.routes'

//routes

app.use('/actividades', actividades);
app.use('/reuniones', reuniones);
app.use('/clases', clases);

//public

//app.use(express.static('../public'));

export default app;


