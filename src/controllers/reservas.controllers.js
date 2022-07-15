const Huesped = require("../models/User");
const Habitacion = require("../models/Habitacion");
const Reserva = require("../models/Reservas");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
  try {
    const reservas = await Reserva.find().populate('user',{
    "tipodoc": 1,
    "_id":1,
    "nombre": 1,
    "apellido": 1,
    "email":1,
    "telefono":1
    }).populate('habitaciones',{
      "_id": 1,
    "nombrehab":1,
    "capacidad": 1,
    "camas": 1, 
    "descripcion": 1,
    "wifi": 1,
    "tv": 1,
    "banio": 1,
    "cajafuerte": 1,
    "nevera": 1,
    "valornoche": 1,
    "img": 1,
    "estado": 1
    });
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json(error)
  }

}

exports.obtenerid = async (req, res) => {
    try {
      const id = req.params.id;
      const reservas = await Reserva.findById(id).populate('user',{
        "tipodoc": 1,
        "_id":1,
        "nombre": 1,
        "apellido": 1,
        "email":1,
        "telefono":1

        }).populate('habitaciones',{
          "_id": 1,
        "nombrehab":1,
        "capacidad": 1,
        "camas": 1, 
        "descripcion": 1,
        "wifi": 1,
        "tv": 1,
        "banio": 1,
        "cajafuerte": 1,
        "nevera": 1,
        "valornoche": 1,
        "img": 1,
        "estado": 1
        });
      res.status(200).json(reservas);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  exports.add = async (req, res) => {  
    
   try {
      const { fentrada,
        fsalida,
        cantidadNoches,
        totalreserva,
        userId,
        habitacionId} = req.body;
      //console.log(req.body);  
      const user=await Huesped.findById(userId);
      console.log(user._id);
      const habitacion=await Habitacion.findById(habitacionId)
      console.log(habitacion._id);
      const newReserva = new Reserva({
        fentrada,
        fsalida,
        cantidadNoches,
        freserva:Date.now(),
        totalreserva,
        user:user._id,
        habitaciones:habitacion._id
      })
      try{
        const saveReserva=await newReserva.save();
        user.reservas=user.reservas.concat(saveReserva._id);
        await user.save();
        habitacion.reservas=habitacion.reservas.concat(saveReserva._id);
        await habitacion.save();
        console.log(saveReserva)
        res.status(200).json(saveReserva);
      }catch (error) {
        res.status(500).json({msj:"Error al registrar"+error})
      }
      
    } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  }

exports.edit = async(req, res) => {
    try {
      const id = req.params.id;
      const newUser = new User(req.body,req.file)
      console.log(req.file);

      if(req.file){
        const { filename }=req.file;
        newUser.setImg(filename);
        console.log("si hay imagen")
      }else{
        console.log("No hay imagen")
      }
      const cambioUsuario = await User.findByIdAndUpdate(id, newUser);
      res.json({ msj: "Huesped actualizado exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }

