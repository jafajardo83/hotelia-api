const Habitacion = require("../models/Habitacion");

exports.obtener = async (req, res) => {
  try {
    const habitaciones = await Habitacion.find();
    res.status(200).json(habitaciones);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try {

    const { nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado } = req.body;
    const newHabitacion = new Habitacion({ nombrehab, numerohab, capacidad, camas, descripcion, wifi, tv, banio, cajafuerte, nevera, valornoche, img, estado })
    await newHabitacion.save();
    console.log(newHabitacion);
    res.json({ msj: "Habitación registrada exitosamente", id: newHabitacion._id })
  } catch (error) {
    res.status(500).json(error)
  }

}

exports.edit = async(req, res) => {
  try {
    const id = req.params.id;
    const estado = req.body ;
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambioEstado = await Habitacion.findByIdAndUpdate(id, estado);
    res.json({ msj: "Habitación actualizada exitosamente", id: newHabitacion._id })
  } catch(error) {
    res.status(500).json(error);
  }
}

