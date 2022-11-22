const service = require('../persistences/product');
const Model = require('../models/product')
const fs = require('fs')

module.exports = {

    create: (req, res) => {
        const data = req.body
        const product = new Model(data.id, data.name, data.description, data.code, data.url, data.price, data.stock)

        service
            .save(product)
            .then(newProduct => res.status(200).json({'Product created': newProduct}))
            .catch(err => res.status(500).json({
                error: err.message
            }))
    },

    getAll: (req, res) => {
        service 
            .getAll()
            .then(allProducts => res.status(200).json({'All prodcuts' : allProducts}))
            .catch(err => res.status(500).json({
                error: err.message
            }))
    },

    getById: (req, res) => {
        const id = req.params.id

        service
            .getById(id)
            .then(productToFind => res.status(200).json({'product find' : productToFind}))
            .catch(err => res.status(500).json({
                error: err.message
            }))
    },

    deleteById: (req, res) => {
        const id = req.params.id

        service
            .deleteById(id)
            .then(productDeleted => res.status(200).json({'product deleted ': productDeleted}))
            .catch(err => res.status(500).json({
                error: err.message
            }))
    },

    update: (req, res) => {
        const id = req.params.id
        const data = req.body

        service
            .update(data, id)
            .then(updatedProduct => res.status(200).json({'Product updated ': updatedProduct}))
            .catch(err => res.status(500).json({
                error: err.message
            }))
    }

};