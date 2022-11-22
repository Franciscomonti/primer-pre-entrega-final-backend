const express = require('express');
const controller = require('../controllers/products');
const router = express.Router();

router.post('/', controller.create)

router.get('/', controller.getAll)

router.get('/:id', controller.getById)

router.delete('/:id', controller.deleteById)

router.put('/:id', controller.update)

module.exports = router;