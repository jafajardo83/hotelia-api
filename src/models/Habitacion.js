const {Schema,model}=require("mongoose");

const habitacionSchema = new Schema({
    
    _id: Number,
    nombrehab: String,
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
    estado: String,
    
    reservas:[{
        type:Schema.Types.ObjectId,
        ref:'Reserva'
      }]
  });

  habitacionSchema.methods.setImg=function setImg(filename) {
    this.img=`/public/${filename}`;
    console.log("entró al método "+this.img);
  }

 
  
  module.exports=model("Habitacion",habitacionSchema);
