const mongoose = require("mongoose");

let VehiculoSchema = new mongoose.Schema({
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
        type : String,
        required : true
    },
    estado :{
        type : String,
        required : true,
        default : "Disponible"
    }
});

let Vehiculo = mongoose.model("Client", VehiculoSchema);

module.exports.getVehiculos = function(callback, limit){
    Vehiculo.find(callback).limit(limit);
}

module.exports.getVehiculoByName = function(vehiculo, callback){
    Vehiculo.find(vehiculo, callback);
}

module.exports.insertVehiculo = function(data, callback){
    Vehiculo.create(data, callback);
}

module.exports.updateVehiculo = function(vehiculo, data, callback){
    Vehiculo.update(vehiculo, data, callback);
}

module.exports.deleteVehiculo = function (id, callback){
    Vehiculo.findByIdAndRemove(id,callback);
}