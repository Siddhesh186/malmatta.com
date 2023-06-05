import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import propertyRoutes from './routes/propertyRoutes.js'
import mongoose from 'mongoose';
import colors from 'colors';
import User from './models/userModel.js';
import { notFound, errorHandler} from './middlewares/errorMiddlewares.js'
import userRoutes from './routes/userRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import Nexmo from 'nexmo';
import cors from 'cors';

dotenv.config();

 connectDB()

const app = express();
app.use(express.json());

app.use('/api/properties',propertyRoutes)
app.use('/api/users', userRoutes);
app.use('/api/uploads', uploadRoutes);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname,
    '/uploads')));

app.use(notFound);
app.use(errorHandler);

const nexmo = new Nexmo({
    apiKey: "4b12bd16",
    apiSecret: "XQeMe8bcnWP3gbnI",
});

app.use(cors());
app.use(express.json());

app.post('/send-message', async (req, res) => {
    const { name, phoneNo, text } = req.body;
  
    nexmo.message.sendSms(
      'YOUR_VIRTUAL_NUMBER', // your virtual number
      phoneNo,
      text,
      { type: 'unicode' },
      async (err, responseData) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error sending SMS');
        } else {
          console.log(responseData);
          res.send('SMS sent successfully');
  
          // Save the phone number to the database
          const phoneNumber = new User({
            name: name,
            phoneNo: phoneNo,
          });
  
          await phoneNumber.save();
        }
      }
    );
  });

  
//create a static folder

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold)
})

