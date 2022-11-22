const service = require('../persistences/cart');
const Model = require('../models/cart')
const fs = require('fs')

module.exports = {

    create: (req, res) => {
        const newCart = new Model()
        service
            .create(newCart)
            .then(newCart => res.status(200).json({'Cart created': newCart}))
            .catch(err => res.status(500).json({
                error: err.message
            }))
    },

    addProduct: (req, res) => {
        let idProductToAdd = req.params.id_producto
        let idCarrito = req.params.id_carrito

        service
            .addProductCart(idCarrito, idProductToAdd)
            .then(product=> res.status(200).json({'producto agregado correctamente ': product}))
            .catch(err => res.status(500).json({
                error: err.message
            }))
    },

    getProducts: (req, res) => {
        let idCart = req.params.id_carrito

        service
            .getProductsCart(idCart)
            .then(product=> res.status(200).json({'Productos en el carrito': product}))
            .catch(err => res.status(500).json({
                error: err.message
            }))
    },

    deleteCart: (req, res) => {
        let idCart = req.params.id_cart

        service
            .cartToDelete(idCart)
            .then(cartToDelete=> res.status(200).json({'Carrito eliminado correctamente': cartToDelete}))
            .catch(err => res.status(500).json({
                error: err.message
            }))
    },


    deleteProduct: (req, res) => {
        let idProductToDelete = req.params.id_producto
        let idCarrito = req.params.id_carrito

        service
            .deleteProductCart(idCarrito, idProductToDelete)
            .then(product=> res.status(200).json({'Prodcuto eliminado correctamente': product}))
            .catch(err => res.status(500).json({
                error: err.message
            }))
    }

}