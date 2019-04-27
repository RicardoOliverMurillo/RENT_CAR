const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let VehiculoSchema = new Schema({
    placa   :{
        type : String,
        required : true,
        unique : true
    },
    capacidad   :{
        type : String,
    },
    marca :{
        type : String,
        required : true
    },
    estilo :{
        type : String,
        required : true
    },
    modelo :{
        type : String,
        required : true
    },
    color :{
        type : String,
        required : true
    },
    cilindrada :{
        type : String
    },
    combustible :{
        type : String,
        required : true
    },
    transmision :{
        type : String,
        required : true
    },
    anno :{
        type : String,
        required : true
    },
    extras :{
        type : String,
        required : true
    },
    precioRenta :{
        type : Number,
        required : true
    },
    estado :{
        type : String,
        required : true,
        default : "Disponible"
    }
});

module.exports = mongoose.model("Vehiculos", VehiculoSchema);

