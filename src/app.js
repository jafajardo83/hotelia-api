const express = require('express');
const rutasHabitacion = require('./routes/habitaciones.routes');
const app = express()

//Configuraciones
app.set("name","api-hotelia");
app.set("port",process.env.port || 3500);

app.use(express.json());

//Llamado de rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/habitaciones",rutasHabitacion)



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