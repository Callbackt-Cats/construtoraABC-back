const express = require('express');
const cors = require('cors');

const ClientesController = require('./controllers/Clientes.controller')
const ImoveisController = require('./controllers/Imoveis.controller')
const MaterialController = require('./controllers/Materiais.controller')
const ColaboradoresController = require('./controllers/Colaboradores.controller')
const ObrasController = require('./controllers/Obras.controller')

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

routes.get('/Colaboradores', ColaboradoresController.index);
routes.put('/Colaboradores', ColaboradoresController.create);
routes.post('/Colaboradores', ColaboradoresController.update);
routes.delete('/Colaboradores/:id', ColaboradoresController.delete);

routes.get('/Obras', ObrasController.index);
routes.put('/Obras', ObrasController.create);
routes.post('/Obras', ObrasController.update);
routes.delete('/Obras/:codigo', ObrasController.delete);

module.exports = routes;
