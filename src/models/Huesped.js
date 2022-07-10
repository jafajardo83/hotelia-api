const {Schema,model}=require("mongoose");

const huespedSchema = new Schema({
    tipodoc: String,
    numdoc: String,
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
    tipouser:String
  });

  module.exports=model("Huesped",huespedSchema);
