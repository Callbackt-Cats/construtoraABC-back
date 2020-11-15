const express = require('express');
const cors = require('cors');

const ClientesController = require('./controllers/Clientes.controller')
const ImoveisController = require('./controllers/Imoveis.controller')

const routes = express.Router();

routes.use(cors());

routes.get('/Clientes', ClientesController.index);
routes.put('/Clientes', ClientesController.create);
routes.post('/Clientes', ClientesController.update);
routes.delete('/Clientes/:id', ClientesController.delete);

routes.get('/Imoveis', ImoveisController.index);
routes.put('/Imoveis', ImoveisController.create);
routes.post('/Imoveis', ImoveisController.update);
routes.delete('/Imoveis/:id', ImoveisController.delete);

module.exports = routes;
