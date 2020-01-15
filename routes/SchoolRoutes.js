const express = require('express');
const router = express.Router();
const SchoolsController = require('../controllers/SchoolsController');

router.get('/', SchoolsController.index);
router.post('/', SchoolsController.store);
router.get('/:id', SchoolsController.show);
router.delete('/:id', SchoolsController.destroy);
router.put('/:id', SchoolsController.update);

module.exports = router;