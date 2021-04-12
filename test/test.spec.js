// permite a leitura e escrita de arquivos
const fs = require('fs');
// usado para fazer as asserções nos testes e, para isso, ele nos permite usar o “should”, “expect” e “assert”
const chai = require('chai');
// utilizado para fazer requisições via HTTP ao nosso servidor
const chaiHttp = require('chai-http');
// Extensao da lib chai p/ verificar objetos
const subSet = require('chai-subset');
// importação do arquivo principal do nosso servidor, geralmente nomeado de “index.js” ou “server.js”
//const app = require('../src/controllers/Clientes.controller');
const index = require('../src/controllers/Clientes.controller');

chai.use(chaiHttp);
chai.use(subSet);

// Configure chai
// importado de dentro do Chai o método should, que será utilizado para realizar a asserções no teste
require("chai").should();
// possibilita o uso de requisições via HTTP com o Chai
chai.use(chaiHttp);

// O atributo do objeto será testado para verificar se ele existe
// O atributo recebe uma função, e ela deve retornar true para o teste passar
const clienteSchema = {
    id: id => id,
    nome: nome => nome,
    email: email => email,
    cpf: cpf => cpf
};

describe('Teste das funcoes de Clientes', () => {

    it('addCliente', () => {
        const cliente = index.create('/Clientes', ClientesController.create);

        // Verifica se as caracteristicas do objeto aluno é igual ao alunoSchema
        chai.expect(cliente).to.containSubset(clienteSchema);
    });
});

describe('Testes de integração', () => {

    it('/Cliente - POST', () => {
        chai.request(index.index) // Instância do express
            .post('/Clientes') // Rota
            .send({
                id: '1235',
                nome: 'ivete',
                email: 'ivete@gmail.com',
                cpf: '12345678901'
            })
            .end((err, res) => {
                chai.expect(err).to.be.null; // Sem erros
                res.should.have.status(201);
                res.body.should.be.a('clienteSchema'); // Body == Schema
            });
    });

    it('/Cliente - GET', () => {
        chai.request(index.index)
            .get('/Cliente')
            .end((err, res) => {
                chai.expect(err).to.be.null;
                res.should.have.status(201);
                chai.expect(res.body.length).to.be.equal(4);
                res.body.should.be.a('clienteSchema');
            });
    });
});