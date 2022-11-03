import mongoose from 'mongoose';

const propertySchema = mongoose.Schema(
   {
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    name : {
        type:String,
        required: true,
    },
    image : {
        type : String,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    dimension : {
        type : Number,
        required : true,
        default : true,
    },
    price : {
        type :  Number,
        required: true,
        default : 0,
    },
    location : {
        type : String,
        required :true,
        
    },
    gates : {
        type: Number,
        required : true,
        default: 0,
    },
    boundry_wall : {
        type : String,
        required : true,
    }
   },
   {timestamps: true}
);

const Property = mongoose.model('Property', propertySchema)

export default Property;