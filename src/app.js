const express = require('express');
const morgan = require('morgan');
const conexionBD = require('./db.conexion');
const rutasHabitacion = require('./routes/habitaciones.routes');
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
app.use(express.static("public"));
app.use("/api/habitaciones",rutasHabitacion);


app.get('/usuarios', (req, res) => {
  res.send('Aquí los usuarios')
})

app.post('/usuarios', (req, res) => {
  res.send('huesped registrado')
})

app.get('/reservas', (req, res) => {
  res.send('Aquí las reservas')
})

app.post('/reservas', (req, res) => {
  res.send('Reserva realizada')
})


module.exports=app;