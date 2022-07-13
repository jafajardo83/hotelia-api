const {Schema,model}=require("mongoose");

const huespedSchema = new Schema({
    tipodoc: String,
    _id:Number,
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
    img:String
   
  });

  huespedSchema.methods.setImg=function setImg(filename) {
    this.img=`/public/${filename}`;
    console.log("entró al método "+this.img);
}
  module.exports=model("Huesped",huespedSchema);
