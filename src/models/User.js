const {Schema,model}=require("mongoose");

const userSchema = new Schema({
    _id:Number,  
    tipodoc: String,
    nombre: String,
    apellido: String,
    fnacimiento:Date,
    genero:String,
    email:{
        required:true,
        unique:true,
        type:String
    },
    telefono:String,
    paisorigen:String,
    password: String,
    tipouser:String,
    img:String,
    reservas:[{
      type:Schema.Types.ObjectId,
      ref:'Reserva'
    }]
   
  });

  userSchema.methods.setImg=function setImg(filename) {
    this.img=`/public/${filename}`;
    console.log("entró al método "+this.img);
}
  module.exports=model("User",userSchema);
