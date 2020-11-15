const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const Imoveis = await connection('Imoveis').select('*');
        return response.json(Imoveis)
    },

    async create(request, response) {
        const { endereco, idCliente, descricao } = request.body;
        const id = crypto.randomBytes(5).toString('HEX');
        await connection('Imoveis').insert({
            id,
            endereco,
            idCliente,
            descricao
        })
        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('Imoveis').where('id', id).del();

        return response.json({ id });
    },  

    async update(request, response) {
        const { id, endereco, idCliente, descricao } = request.body;
        await connection('Imoveis').where('id', id).update({
            endereco: endereco,
            idCliente: idCliente,
            descricao: descricao         
        })
        return response.json({ id });
    },
}