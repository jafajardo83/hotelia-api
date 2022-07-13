const mongoose = require('mongoose');

const conexionBD=async()=>{

    const uri=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.cqgos.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
    try{
        const DB=await mongoose.connect(uri);
        console.log("Conexión satisfactoria",DB.connection.name);
    }
    catch(  error){
        console.log(error);
    }
}

module.exports=conexionBD;
