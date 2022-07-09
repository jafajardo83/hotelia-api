const Habitacion=require("../models/Habitacion");
    
exports.obtener=async(req, res)=>{
  try{
    const habitaciones= await Habitacion.find();   
    res.json(habitaciones);
  }catch(error){
    res.json(error)
  }
    
}
exports.add=async(req, res) => {
    try{
    
    const {nombrehab,numerohab,capacidad,camas,descripcion,wifi,tv,banio,cajafuerte,nevera,valornoche,img}=req.body;
    const newHabitacion=new Habitacion({nombrehab,numerohab,capacidad,camas,descripcion,wifi,tv,banio,cajafuerte,nevera,valornoche,img})
    await newHabitacion.save();
    console.log(newHabitacion);
    res.json({msj:"Habitación registrada exitosamente",id:newHabitacion._id})
  }catch(error){
    res.json(error)
  }
    
  }

  exports.edit=(req, res) => {
    const id=req.params.id;
    console.log(id);
    const {nombrehab,capacidad,camas,descripcion,wifi,tv,banio,cajafuerte,nevera,valornoche,img}=req.body;
    res.send('Habitación actualizada')
  }