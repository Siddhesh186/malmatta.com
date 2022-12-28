import express from 'express';
import {
    getPropertyById,
    getProperties,
} from '../controllers/propertyController.js'


const router = express.Router();

router.route('/').get(getProperties);
router.route('/:id').get(getPropertyById)

export default router;