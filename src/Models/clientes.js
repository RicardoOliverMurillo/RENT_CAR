const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ClienteSchema = new Schema({
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

module.exports = mongoose.model("Clientes", ClienteSchema);
