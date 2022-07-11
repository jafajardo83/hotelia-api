const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const conexionBD = require('./db.conexion');
const rutasHabitacion = require('./routes/habitaciones.routes');
const rutasUser=require('./routes/users.routes');
const app = express()

//Conexión a la BD
conexionBD();

//Configuraciones
app.set("name","api-hotelia");
app.set("port",process.env.port || 3500);

//Midlewares
app.use(express.json());
app.use(morgan("dev"));

//Llamado de rutas
app.use('/public', express.static('public/upload'));
//app.use('/public', express.static(__dirname + '/public'));
app.use("/api/habitaciones",rutasHabitacion);
app.use("/api/users",rutasUser);


module.exports=app;