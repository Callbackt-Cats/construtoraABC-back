// permite a leitura e escrita de arquivos
const fs = require('fs');
// usado para fazer as asserções nos testes e, para isso, ele nos permite usar o “should”, “expect” e “assert”
const chai = require('chai');
// utilizado para fazer requisições via HTTP ao nosso servidor
const chaiHttp = require('chai-http');
// importação do arquivo principal do nosso servidor, geralmente nomeado de “index.js” ou “server.js”
const app = require('../src/index');

// Configure chai
// importado de dentro do Chai o método should, que será utilizado para realizar a asserções no teste
require("chai").should();
// possibilita o uso de requisições via HTTP com o Chai
chai.use(chaiHttp);

//describe('<Descrição do arquivo a ser testado>', () => {
//    describe('<Descrição do item geral a ser testado>' () => {
//        it('<Descrição específica do teste>', () => {<teste>});
//      });
//});