import express from 'express';
import {
    getPropertyById,
    getProperties,
    deleteProperty,
    createProperty,
    updateProperty,
} from '../controllers/propertyController.js';

import {protect, admin, anyUser} from '../middlewares/authMiddleware.js'
import { authUser } from '../controllers/userController.js';


const router = express.Router();

router.route('/').get(getProperties).post(protect,anyUser, createProperty);
router
.route('/:id')
.get(getPropertyById)
.delete(protect, admin, deleteProperty)
.put(protect,admin,updateProperty);

export default router;