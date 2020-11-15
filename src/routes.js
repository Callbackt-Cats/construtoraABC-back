const express = require('express');
const cors = require('cors');

const ClientesController = require('./controllers/Clientes.controller')
const ImoveisController = require('./controllers/Imoveis.controller')
const MaterialController = require('./controllers/Materiais.controller')

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

routes.get('/Materiais', MaterialController.index);
routes.put('/Materiais', MaterialController.create);
routes.post('/Materiais', MaterialController.update);
routes.delete('/Materiais/:id', MaterialController.delete);

module.exports = routes;
