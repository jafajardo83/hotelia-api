const {Router}=require("express");
const rutasHabitacion=Router();
const ctrHab=require("../controllers/habitaciones.controller")

rutasHabitacion.get('/', ctrHab.obtenerHabitacion);

rutasHabitacion.post('/', ctrHab.addHabitacion);
  
rutasHabitacion.put('/:id',ctrHab.editHabitacion);

module.exports=rutasHabitacion;