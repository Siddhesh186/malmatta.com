import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js'
import properties from './data/properties.js';
import Property from './models/propertyModel.js';
import User from './models/userModel.js';
import connectDB from './config/db.js'

dotenv.config();

await connectDB();

const importData = async () =>{
    try {
        await User.deleteMany();
        await Property.deleteMany();
        
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;

        const sampleProperties = properties.map((property)=> {
            return{ ...property, user: adminUser};
        });

        await Property.insertMany(sampleProperties);

        console.log(`Data imported `.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
      await User.deleteMany();
      await Property.deleteMany();
      
  
      console.log('Data destroyed'.red.inverse);
      process.exit();
    } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
    }
  };
  
 
if (process.argv[2] === '-d') {
    destroyData();

} else {
    importData();
}