const User = require("../models/User");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
  try {
    const users = await User.find().populate({
      path: "reservas",
      select:{user:0}, // populate reservas
      populate: {
         path: "habitaciones",
         select:{
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
        "estado": 1,
       
         } // in reservas, populate habitaciones
      }
    }     
    );
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error)
  }
}
exports.obtenerid = async (req, res) => {
    try {
      const id = req.params.id;
      const users = await User.findById(id).populate({
        path: "reservas",
        select:{user:0}, // populate reservas
        populate: {
           path: "habitaciones",
           select:{
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
           } // in reservas, populate habitaciones
        }
      }     
      );
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error)
    }
  }
  exports.add = async (req, res) => {
    try {
      //const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
      const newUser = new User(req.body)
      console.log(req.file);
      if(req.file){
        const { filename }=req.file;
        User.setImg(filename);
        console.log("si hay imagen")
      }else{
        console.log("No hay imagen")
      }
      await newUser.save();
      console.log(newUser);
      res.json({ msj: "Usuario registrado exitosamente", newUser })
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

  exports.login=async(req,res)=>{
    try {
        const {email, password}=req.body;
        if(email && password){
           
            const user=await User.findOne({email});
            if(!user){
                res.json({token:null,msj:"usuario o contraseña incorrectos"});
                console.log("usuario o contraseña incorrectos");
            }
            else{
                
                if(user.password==password){
                    
                    const {_id,email}=user;
                    
                    const opt={
                        expiresIn:'1h'
                    }
                    const token=jwt.sign({_id,email},process.env.TOKEN_SECRET,opt);
                    console.log(token);
                    res.json({token});
                    
                }else{
                    res.json({token:null,msj:"usuario o contraseña incorrectos"});
                }
            }
        }else{
            res.json({error:"Faltan datos por diligenciar"});
        }
    } catch (error) {
        res.status(500).json({error:"Faltan datos por diligenciar"+error});
    }
  }