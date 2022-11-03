import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import properties from './data/properties.js'
import mongoose from 'mongoose';
import colors from 'colors'

dotenv.config();

connectDB()


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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold)
})

