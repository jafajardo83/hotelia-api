const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const conexionBD = require('./db.conexion');
const rutasHabitacion = require('./routes/habitaciones.routes');
const rutasUser=require('./routes/users.routes');
const app = express()
require('dotenv').config()
//Conexión a la BD
conexionBD();

//Configuraciones
app.set("name","api-hotelia");
app.set("port",process.env.PORT || 3000);
app.set("host",process.env.HOST || 'localhost');


//Midlewares
app.use(express.json());
app.use(morgan("dev"));

//Llamado de rutas

app.use(express.static('public'));

app.use('/public', express.static('public/upload'));
//app.use('/public', express.static(__dirname + '/public'));
//app.use("/")
app.use("/habitaciones",rutasHabitacion);
app.use("/users",rutasUser);


module.exports=app;