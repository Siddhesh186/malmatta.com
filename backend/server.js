import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import propertyRoutes from './routes/propertyRoutes.js'
import mongoose from 'mongoose';
import colors from 'colors';
import { notFound, errorHandler} from './middlewares/errorMiddlewares.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config();

 connectDB()


const app = express();
app.use(express.json());



app.use('/api/properties',propertyRoutes)
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold)
})

