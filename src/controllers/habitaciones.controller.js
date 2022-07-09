
    
exports.obtenerHabitacion=(req, res)=>{
    const habitaciones=[
        {
            "id": 101,
            "nombrehab": "Suite Deluxe",
            "capacidad": 3,
            "camas": 2,
            "descripcion": "2 camas 1 doble 1 sencilla, baño privado",
            "wifi":"si",
            "tv":"si", 
            "banio":"si", 
            "cajafuerte":"no", 
            "nevera":"si",
            "valornoche": 125000,
            "img":"https://definicion.de/wp-content/uploads/2019/12/habitacion.jpg"
          }
    ]
    res.json(habitaciones);
}
exports.addHabitacion=(req, res) => {
    
    const {nombrehab,capacidad,camas,descripcion,wifi,tv,banio,cajafuerte,nevera,valornoche,img}=req.body;
    console.log(req.body);
    res.json('Habitación registrada')
  }

  exports.editHabitacion=(req, res) => {
    const id=req.params.id;
    console.log(id);
    const {nombrehab,capacidad,camas,descripcion,wifi,tv,banio,cajafuerte,nevera,valornoche,img}=req.body;
    res.send('Habitación actualizada')
  }