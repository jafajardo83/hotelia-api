const User=require("../models/Huesped");
const jwt=require("jsonwebtoken");

const autorizedHuesped=async(req,res,next)=>{
    const strToken=req.headers.authorization;
    if(!strToken){
        return res.json({msj:"No se encontró el token"});
    }
    const token=strToken.split(" ")[1];
    console.log(token);
    const palabra="hotelia-kuepa";
    const key=jwt.verify(token,palabra);
    const huesped=await User.findById(key._id);
    if(!huesped){
        return res.json({msj:"No se encontró el usuario"});
    }
    console.log(key);
    next();
}

module.exports=autorizedHuesped;