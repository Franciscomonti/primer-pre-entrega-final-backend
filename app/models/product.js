
class Product {
    constructor(id, name, description, code, url, price, stock) {
        this.id = id 
        this.timestamp = new Date(Date.now()).toLocaleString()
        this.name = name || "not available"
        this.description = description || "not description"
        this.code = code || "not code"
        this.url = url || "not thumbnail url"
        this.price = price || "not price"
        this.stock = stock || 0
    }
}

module.exports = Product