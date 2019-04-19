const mongoose = require("mongoose");

let ClienteSchema = new mongoose.Schema({
    cedula   :{
        type : String,
        required : true,
        unique : true
    },
    nombre   :{
        type : String,
        required : true
    },
    correo :{
        type : String,
        unique : true
    },
    telefono :{
        type : String,
        required : true,
        unique : true
    }
})

let Cliente = mongoose.model("Cliente", ClienteSchema);

module.exports.getClientes = function(callback, limit){
    Cliente.find(callback).limit(limit);
}

module.exports.getClienteByCedula = function(cliente, callback){
    Cliente.find(cliente, callback);
}

module.exports.insertCliente = function(data, callback){
    Cliente.create(data, callback);
}

module.exports.updateCliente = function(cliente, data, callback){
    Cliente.update(cliente, data, callback);
}

module.exports.deleteCliente = function (id, callback){
    Cliente.findOneAndRemove(id,callback);
}