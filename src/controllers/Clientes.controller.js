const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        try {
            const Clientes = await connection('Clientes').select('*');
            return response.json(Clientes)
        } catch (error) {
            response.json({
                error: true,
                message: error.message
            });
        }
    },

    async create(request, response) {
        const { nome, email, cpf } = request.body;
        const id = crypto.randomBytes(5).toString('HEX');
        await connection('Clientes').insert({
            id,
            nome,
            email,
            cpf
        })
        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('Clientes').where('id', id).del();

        return response.json({ id });
    },  

    async update(request, response) {
        const { id, nome, email, cpf } = request.body;
        await connection('Clientes').where('id', id).update({
            nome: nome,
            email: email,
            cpf: cpf         
        })
        return response.json({ id });
    },
}