const express = require("express");
const mongoose = require("mongoose");

const Vehiculo = require("./Models/Vehiculos");
const Cliente = require("./Models/clientes");

mongoose.connect("mongodb://localhost/RENT_CAR");

const app = express();

app.listen(3000);

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post('/api/vehiculo', function(req, res){
    let data = req.body
    Vehiculo.insertVehiculo(data, function(err, data){
        if (err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.get('/api/vehiculos', function(req, res){
    Vehiculo.getVehiculos(function(err, data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.get('/api/vehiculo/:placa', function(req, res){
    Vehiculo.getVehiculoByName(req.params, function(err, data){
        if (err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.put('/api/vehiculo/:placa', function(req, res){
    Vehiculo.updateVehiculo(req.params, req.body, function(err, data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.delete('/api/deleteVehiculo/:placa', function(req, res){
    Vehiculo.deleteVehiculo(req.params, function(err, data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.post('/api/cliente', function(req, res){
    let data = req.body
    Cliente.insertCliente(data, function(err, data){
        if (err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.get('/api/clientes', function(req, res){
    Cliente.getClienteByCedula(function(err, data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.get('/api/cliente/:cedula', function(req, res){
    Cliente.getClienteByCedula(req.params, function(err, data){
        if (err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.put('/api/cliente/:cedula', function(req, res){
    Cliente.updateCliente(req.params, req.body, function(err, data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})

app.delete('/api/deletecliente/:cedula', function(req, res){
    Cliente.deleteCliente(req.params, function(err, data){
        if(err){
            res.status(500).send(err);
        }else{
            res.send(data);
        }
    })
})