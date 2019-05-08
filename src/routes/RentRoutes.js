const express = require("express");
const router = express.Router();

const Rent = require('../Models/Rent_info')
const Vehicle = require('../Models/Vehiculos')
const Client = require('../Models/clientes')

router.get('/', async (req,res)=>{
    const rents = await Rent.find();
    res.render('rentInfo',{
        rents
    })
})
router.post('/addRent', async (req, res) => {
    const vehicle = await Vehicle.findOne({placa : req.body.placa})
    const rent = new Rent();
    rent.cedula = req.body.cedula;
    rent.placa = req.body.placa;
    rent.cant_dias = req.body.cant_dias;
    rent.precio = parseInt(req.body.cant_dias) * vehicle.precioRenta;
    await Vehicle.update({placa : req.body.placa}, {estado : "No Disponible"});
    await rent.save();
    res.redirect('/rent');
})

router.get('/delete/:id', async (req,res)=>{
    const { id } = req.params;
    await Rent.remove({_id : id});
    res.redirect('/rent')
})

router.get('/edit/:id', async (req,res)=>{
    const { id } = req.params;
    const rent = await Rent.findById(id);
    res.render('editRent',{
        rent
    })
})

router.post('/edit/:id', async (req, res) => {
    const vehicle = await Vehicle.findOne({placa : req.body.placa})
    const { id } = req.params;
    const newPrice = parseInt(req.body.cant_dias) * vehicle.precioRenta;
    await Rent.update({_id : id}, req.body);
    await Rent.updateOne({_id : id}, {precio : newPrice})
    res.redirect('/rent'); 
})
module.exports = router;