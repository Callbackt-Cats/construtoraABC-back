const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const Materiais = await connection('Materiais').select('*');
        return response.json(Materiais)
    },

    async create(request, response) {
        const { nome, codigo, idFornecedor, idResponsavel } = request.body;
        const id = crypto.randomBytes(5).toString('HEX');
        await connection('Materiais').insert({
            id,
            nome,
            codigo,
            idFornecedor,
            idResponsavel
        })
        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('Materiais').where('id', id).del();

        return response.json({ id });
    },  

    async update(request, response) {
        const  { id, nome, codigo, idFornecedor, idResponsavel } = request.body;
        await connection('Materiais').where('id', id).update({
            nome: nome,
            codigo: codigo,     
            idFornecedor: idFornecedor,      
            idResponsavel: idResponsavel,      
        })
        return response.json({ id });
    },
}