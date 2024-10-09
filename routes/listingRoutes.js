const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/listingController');
const { protectAdminActions } = require('../config/checkadmin');

router.get('/', propertyController.getAllProperties); 
router.get('/:id', propertyController.getPropertyById);
router.post('/', protectAdminActions, propertyController.createProperty); 
router.put('/:id', protectAdminActions, propertyController.updateProperty); 
router.delete('/:id', protectAdminActions, propertyController.deleteProperty);

module.exports = router;
