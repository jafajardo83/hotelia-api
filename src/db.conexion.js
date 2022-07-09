const mongoose = require('mongoose');
const conexionBD=async()=>{
    
    try{
        const DB=await mongoose.connect('mongodb+srv://jfajardo:mW6Cfsgzv701w4EI@cluster0.cqgos.mongodb.net/hoteliadb?retryWrites=true&w=majority');
        console.log("Conexión satisfactoria",DB.connection.name);
    }
    catch(  error){
        console.log(error);
    }
}

module.exports=conexionBD;
