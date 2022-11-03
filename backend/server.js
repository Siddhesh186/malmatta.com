const express = require('express');
const properties= require('./data/properties');

const app = express()

app.get('/',(req, res)=>{
    res.send('API is running');
});

app.get('/api/properties', (req,res) => {
    res.json(properties);
});

app.get('/api/properties/:id', (req, res) =>{
    const property = properties.find((prop)=>prop._id === req.params.id);
    res.json(property);
});

app.listen(5000, () => {
    console.log("Server running on port 5000")
})