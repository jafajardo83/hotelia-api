const {Router}=require("express");
const rutasHabitacion=Router();

rutasHabitacion.get('/', (req, res) => {
    res.send('Aquí las habitaciones')
  })

rutasHabitacion.post('/', (req, res) => {
    console.log(req.body);
    const {nombrehab,capacidad,camas,descripcion,wifi,tv,banio,cajafuerte,nevera,valornoche,img}=req.body;
    res.send('Habitación registrada')
  })
  
rutasHabitacion.put('/:id', (req, res) => {
    const id=req.params.id;
    console.log(id);
    const {nombrehab,capacidad,camas,descripcion,wifi,tv,banio,cajafuerte,nevera,valornoche,img}=req.body;
    res.send('Habitación actualizada')
  })

  module.exports=rutasHabitacion;