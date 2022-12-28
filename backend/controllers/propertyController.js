import asyncHandler from 'express-async-handler';
import Property from '../models/propertyModel.js';

// @desc    Fetch all properties
// @route   GET /api/properties
// @access  public


const getProperties = asyncHandler(async (req,res)=>{
    const properties = await Property.find({});
    res.json(properties)
});

//@desc    Fetch single property
// @route   GET /api/property/:id
// @access  public


const getPropertyById = asyncHandler(async(req,res)=>{
    try {
        const property = await Property.findById(req.params.id);

        if (property) {
            res.json(property);
        } else {
            res.status(404).json({message: 'Property not found'});
        }
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Something went wrong'})
    }
});

export { getPropertyById , getProperties}