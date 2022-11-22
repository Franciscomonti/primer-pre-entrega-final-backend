const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = {

    create: (cart) => {
        return new Promise((resolve, reject) => {
            try {
                let elements = fs.readFileSync(`./data/cart.json`, 'utf-8')
                elements = JSON.parse(elements)
                cart.id = uuidv4()
                fs.writeFileSync(`./data/cart.json`, JSON.stringify([...elements, cart], null, 2))
                resolve(cart)
            } catch (err) {
                reject(err)
            }
        })
    },

    addProductCart: (idCart, idProductToAdd) => {
        return new Promise((resolve, reject) => {
            try {
                let carts = fs.readFileSync(`./data/cart.json`, 'utf-8')
                carts = JSON.parse(carts)

                let products = fs.readFileSync(`./data/products.json`, 'utf-8')
                products = JSON.parse(products)

                let cartSelected = carts.find(cart => cart.id === idCart)

                let productSelected = products.find(product => product.id === idProductToAdd)
                cartSelected.products.push(productSelected)

                fs.writeFileSync(`./data/cart.json`, JSON.stringify(carts, null, 2))
                
                resolve(productSelected)
            } catch (err) {
                reject(err)
            }
        })
    },

    getProductsCart: (idCart) => {
        return new Promise((resolve, reject) => {
            try {
                let carts = fs.readFileSync(`./data/cart.json`, 'utf-8')
                carts = JSON.parse(carts)

                let cartSelected = carts.find(cart => cart.id === idCart)
                resolve(cartSelected.products)
            } catch (err) {
                reject(err)
            }
        })
    },

    cartToDelete: (idCart) => {
        return new Promise((resolve, reject) => {
            try {
                let carts = fs.readFileSync(`./data/cart.json`, 'utf-8')
                carts = JSON.parse(carts)

                let cartToDelete = carts.find(cart => cart.id === idCart)

                let cartDeleted = carts.filter(cart => cart.id !== idCart)

                fs.writeFileSync(`./data/cart.json`, JSON.stringify(cartDeleted, null, 2))
                resolve(cartToDelete)
            } catch (err) {
                reject(err)
            }
        })
    },

    deleteProductCart: (idCart, idProductTodelete) => {
        return new Promise((resolve, reject) => {
            try {

                let carts = fs.readFileSync(`./data/cart.json`, 'utf-8')
                carts = JSON.parse(carts)

                let cartSelected = carts.find(cart => cart.id === idCart)

                const productToDelete = cartSelected.products.findIndex(product => product.id === idProductTodelete);

                cartSelected.products.splice(productToDelete, 1);

                fs.writeFileSync(`./data/cart.json`, JSON.stringify(carts, null, 2))

                resolve(cartSelected)
            } catch (err) {
                reject(err)
            }
        })
    }

}