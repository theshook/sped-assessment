const express = require('express');
const router = express.Router();
const ProvincesController = require('../controllers/ProvincesController');

router.get('/', ProvincesController.index);
router.post('/', ProvincesController.store);
router.get('/:id', ProvincesController.show);
router.delete('/:id', ProvincesController.destroy);
router.put('/:id', ProvincesController.update);

module.exports = router;