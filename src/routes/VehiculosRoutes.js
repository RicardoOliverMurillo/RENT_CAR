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
module.exports = router;