import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

const propertySchema = mongoose.Schema(
   {
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true,
    },
    
    location : {
        type:String,
        required: true,
    },
    name : {
        type : String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    image : {
        type : String,
        required : true,
       
    },
    dimension : {
        type :  Number,
        required: true,
        default : 0,
    },
    price : {
        type :  Number,
        required: true,
        default : 0,
        
    },
    description : {
        type : String,
        required : true,
    }, 
    gates : {
        type: Number,
        required : true,
        default: 0,        
    }, 
    boundryWall : {
        type: String,
        required: true,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
      },  
    reviews: [reviewSchema],
   },
   {timestamps: true}
);

const Property = mongoose.model('Property', propertySchema)

export default Property;