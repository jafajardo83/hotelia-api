
const {Router}=require("express");
const rutasHabitacion=Router();
const ctrHab=require("../controllers/habitaciones.controller")

rutasHabitacion.get('/', ctrHab.obtener);

rutasHabitacion.get('/:id', ctrHab.obtenerid);

rutasHabitacion.post('/', ctrHab.add);
  
rutasHabitacion.put('/:id',ctrHab.edit);


module.exports=rutasHabitacion;