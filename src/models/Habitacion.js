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
    img: String,
    estado: String
  });

  habitacionSchema.methods.setImg=function setImg(filename){
    this.img=`http://localhost:3500/public/upload/${filename}`;
    console.log("entró al método"+this.img);
  }
  module.exports=model("Habitacion",habitacionSchema);
