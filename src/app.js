const path = require("path");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//connecting to db 
mongoose.connect('mongodb://localhost/RENT_CAR')
.then(db=> console.log("db connected"))
.catch(err=>console.log(err)); 

//import routes
const vehiclesRoutes = require("./routes/VehiculosRoutes");
const clientRoutes = require('./routes/ClientsRoutes');
const rentRoutes = require('./routes/RentRoutes');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//routes
app.use('/', vehiclesRoutes);
app.use('/client', clientRoutes);
app.use('/rent', rentRoutes);
app.use('/consultas', vehiclesRoutes);
app.use('/resumen', vehiclesRoutes);

//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});

