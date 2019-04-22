const express = require("express");
const router = express.Router();

const Client = require('../Models/clientes')

router.get('/', async (req,res)=>{
    const clients = await Client.find();
    res.render('clientInfo',{
        clients
    })
})
router.post('/addClient', async (req, res) => {
    const client = new Client(req.body);
    await client.save();
    res.redirect('/client');
})

router.get('/delete/:id', async (req,res)=>{
    const { id } = req.params;
    await Client.remove({_id : id});
    res.redirect('/client')
})

router.get('/edit/:id', async (req,res)=>{
    const { id } = req.params;
    const client = await Client.findById(id);
    res.render('editClient',{
        client
    })
})

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Client.update({_id : id}, req.body);
    res.redirect('/client'); 
})
module.exports = router;