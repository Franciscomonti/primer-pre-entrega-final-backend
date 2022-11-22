const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


module.exports = {

    save: (product) => {
        return new Promise((resolve, reject) => {
            try {
                let elements = fs.readFileSync(`./data/products.json`, 'utf-8')
                elements = JSON.parse(elements)
                product.id = uuidv4()
                fs.writeFileSync(`./data/products.json`, JSON.stringify([...elements, product], null, 2))
                resolve(product)
            } catch (err) {
                reject(err)
            }
        })
    },

    getAll: () =>{
        return new Promise((resolve, reject) => {
            try{
                let allProducts = fs.readFileSync('./data/products.json', 'utf-8')
                allProducts = JSON.parse(allProducts)
                resolve(allProducts)
            }catch (err){
                reject(err)
            }
        })
    },

    getById: (id) =>{
        return new Promise((resolve, reject) => {
            try{
                let allProducts = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))
                let productToFind = allProducts.find(product => product.id === id)
                resolve(productToFind)
            }catch (err) {
                reject(err)
            }
        });
    },

    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            try{
                let allProducts = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))
                productToDelete = allProducts.find(product => product.id === id);
                allProducts= allProducts.filter(product => product.id !== id)
                fs.writeFileSync('./data/products.json', JSON.stringify(allProducts, null, 2))
                resolve(productToDelete)
            }catch (err) {
                reject(err)
            }
        });
    },

    update: (data, id) =>{
        return new Promise((resolve, reject) => {
            try{
                let allProducts = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))
                let productToUpdate = allProducts.find(product => product.id === id)
                const indexObj = allProducts.findIndex(product => product.id === productToUpdate.id)
                allProducts[indexObj] = {...allProducts[indexObj], ...data}
                fs.promises.writeFile('./data/products.json', JSON.stringify(allProducts, null, 2));
                resolve(allProducts.find(prduct => prduct.id === productToUpdate.id))
            }catch (err) {
                reject(err)
            }
        });
    }
}

