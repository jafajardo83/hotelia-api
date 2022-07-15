const {Router}=require("express");
const rutasReservas=Router();
const autorizedHuesped=require("../auth/auth.huesped");
const ctrRes=require("../controllers/reservas.controllers");

rutasReservas.get('/', ctrRes.obtener);

rutasReservas.get('/:id', ctrRes.obtenerid);

rutasReservas.post('/', ctrRes.add);
  
rutasReservas.put('/:id', ctrRes.edit);


module.exports=rutasReservas;