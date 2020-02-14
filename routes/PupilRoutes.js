const express = require('express');
const router = express.Router();
const PupilsController = require('../controllers/PupilsController');

router.get('/', PupilsController.index);
router.post('/', PupilsController.store);
router.get('/:id', PupilsController.show); 

/** Delete */
router.post('/delete/:id/', PupilsController.destroy);

/** UPDATE */
router.post('/:id', PupilsController.update);

module.exports = router;
