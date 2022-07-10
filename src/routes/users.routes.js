
const {Router}=require("express");
const rutasUser=Router();
const ctrUser=require("../controllers/user.controller")
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



rutasUser.get('/', ctrUser.obtener);

rutasUser.get('/:id', ctrUser.obtenerid);

rutasUser.post('/', ctrUser.add);

rutasUser.post('/login', ctrUser.login);
  
rutasUser.put('/:id',ctrUser.edit);


module.exports=rutasUser;