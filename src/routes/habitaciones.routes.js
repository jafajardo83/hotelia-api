
const {Router}=require("express");
const rutasHabitacion=Router();
const autorizedHuesped=require("../auth/auth.huesped");
const ctrHab=require("../controllers/habitaciones.controller")
const multer=require("multer");
const fecha=Date.now();

const rutaStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/upload/');
    },
    filename:function(req,file,callback){
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
});

const carga=multer({storage:rutaStorage});



rutasHabitacion.get('/', ctrHab.obtener);

rutasHabitacion.get('/:id', ctrHab.obtenerid);

rutasHabitacion.post('/', carga.single('img'),ctrHab.add,);
  
rutasHabitacion.put('/:id', carga.single('img'),ctrHab.edit);


module.exports=rutasHabitacion;