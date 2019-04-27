const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RentSchema = new Schema({
    cedula   :{
        type : String,
        required : true
    },
    placa   :{
        type : String,
        required : true
    },
    cant_dias :{
        type : String,
        required : true
    },
    precio :{
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("Rent_info", RentSchema);
