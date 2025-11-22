const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  correo: { type: String, required: true, unique: true, lowercase: true, trim: true },
  contraseña: { type: String, required: true, minlength: 8 }
},{timestamps:true});

userSchema.methods.toJSON=function(){
  const obj=this.toObject();
  delete obj.contraseña;
  return obj;
};

module.exports=mongoose.model('User', userSchema);
