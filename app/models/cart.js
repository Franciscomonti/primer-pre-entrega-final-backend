class cart {
    constructor(id, products){
        this.id = id 
        this.timestamp = new Date(Date.now()).toLocaleString()
        this.products = products || []
    }
}

module.exports = cart