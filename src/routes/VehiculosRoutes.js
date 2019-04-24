const express = require("express");
const router = express.Router();

const Vehicle = require('../Models/Vehiculos')

router.get('/', async (req,res)=>{
    const vehicles = await Vehicle.find();
    res.render('index', {
        vehicles
    });
})

router.post('/addVehicle', async (req, res) => {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.redirect('/');
})

router.get('/delete/:id', async (req,res)=>{
    const { id } = req.params;
    await Vehicle.remove({_id : id});
    res.redirect('/')
})

router.get('/rentar/:id', async (req,res)=>{
    const { id } = req.params;
    const vehicle = await Vehicle.findById(id);
    vehicle.estado = "Rentado";
    await vehicle.save();
    res.redirect('/')
})

router.get('/edit/:id', async (req,res)=>{
    const { id } = req.params;
    const vehicle = await Vehicle.findById(id);
    res.render('edit',{
        vehicle
    })
})

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Vehicle.update({_id : id}, req.body);
    res.redirect('/'); 
})

router.get('/consultas', async (req,res)=>{
    const vehicles = await Vehicle.find();
    res.render('consultasInfo', {
        vehicles
    });
})

router.get('/consultasInfo', async (req,res)=>{
    const info = req.query.busqueda;
    const vehicles = await Vehicle.find({$or : [{placa : info}, {marca : info}, {modelo : info}]});
    res.render('consultasInfo', {
        vehicles
    });
    console.log(vehicles);
})

module.exports = router;