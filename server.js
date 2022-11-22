const express = require('express');
const routerProducts = require('./app/routes/product');
const routerCart = require('./app/routes/cart');
const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/products', routerProducts);

app.use('/api/cart', routerCart);

app.use('*', (req, res) => {
	const path = req.params;
	const method = req.method;
	res.send({ error: -2, descripcion: `ruta '${path[0]}' método '${method}' no implementada` });
});


const server =app.listen(PORT, () => {
    console.log(`corriendo en el servidor http://localhost:${PORT}`)
})

server.on('error', ()=> { console.log('error: ' + error)});