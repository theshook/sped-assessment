const express = require('express');
const router = express.Router();
const ProvincesController = require('../controllers/ProvincesController');

router.get('/', ProvincesController.index);
router.post('/', ProvincesController.store);
router.get('/:id', ProvincesController.show);
router.get('/:id/edit', ProvincesController.show);

/** Delete */
router.post('/:id/delete', ProvincesController.destroy);

/** UPDATE */
router.post('/:id', ProvincesController.update);

module.exports = router;
