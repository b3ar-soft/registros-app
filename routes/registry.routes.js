const express = require('express');
const router = express.Router();

const registryController = require('../controller/RegistryController');

router.get('/test', registryController.testController);
router.get('/', registryController.getAllRegistry);
router.get('/:id', registryController.getRegistryById);
router.put('/update/:id', registryController.updateRegistryById);
router.delete('/delete/:id', registryController.deleteRegistry);

module.exports = router;