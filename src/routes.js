const express = require('express');
const cors = require('cors');

const produtoController = require('./controllers/Clientes.controller')

const routes = express.Router();

routes.use(cors());

routes.get('/Clientes', produtoController.index);
routes.put('/Clientes', produtoController.create);
routes.post('/Clientes', produtoController.update);
routes.delete('/Clientes/:id', produtoController.delete);



module.exports = routes;
