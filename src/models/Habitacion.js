const {Schema,model}=require("mongoose");

const habitacionSchema = new Schema({
    nombrehab: String,
    numerohab: String,
    capacidad: Number,
    camas: String, 
    descripcion: String,
    wifi: String,
    tv: String,
    banio: String,
    cajafuerte: String,
    nevera: String,
    valornoche: Number,
    img: String
  });

  module.exports=model("Habitacion",habitacionSchema);
