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

   // delete property
   //delete /api/properties/:id
  // private/admin
const deleteProperty = asyncHandler(async (req,res)=>{
    const property = await Property.findById(req.params.id);
  
    if (property) {
      await property.remove();
      res.json({ message: 'Property Removed'});
    } else {
        res.status(404);
        throw new Error('Property Not Found');
    }
  })

// Create Product 
// POST /api/properties
// Public/Users

const createProperty = asyncHandler(async(req,res)=>{
    const  property = new Property({
        location:'Sample location',
        name: 'sample name',
        user:req.user._id,
        type: 'Any',
        image:'/image/sample.jpg',
        dimesnion:0,
        price:0,
        description:'Sample Description',
        gates:0,
        boundryWall:'Any',
        numReviews:0,
    });

    const createdProperty = await property.save();
    res.status(201).json(createdProperty)
})

//@desc Update a Property
//@route PUT/api/products
//@access private/admin

const updateProperty = asyncHandler(async(req,res) =>{
    const {name, price, description, image, dimension, boundryWall,type, gates, location} = req.body;

    const property = await Property.findById(req.params.id);

    if(property) {
        property.name = name;
        property.location= location;
        property.price= price;
        property.image= image;
        property.type =type;
        property.description= description;
        property.dimension= dimension;
        property.gates= gates;
        property.boundryWall= boundryWall;

        const updatedProperty = await property.save();
        res.json(updatedProperty);
    } else {
        res.status(404);
        throw new Error('property Not Found');

    }
})

export { getPropertyById , getProperties, deleteProperty, createProperty , updateProperty}