const express = require('express');
const controller = require('../controllers/cart');
const router = express.Router();


router.post('/', controller.create)

router.post('/:id_carrito/products/:id_producto', controller.addProduct)

router.get('/:id_carrito/products' , controller.getProducts)

router.delete('/:id_cart' , controller.deleteCart)

router.delete('/:id_carrito/products/:id_producto', controller.deleteProduct)


module.exports = router