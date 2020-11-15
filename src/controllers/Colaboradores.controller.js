const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const Colaboradores = await connection('Colaboradores').select('*');
        return response.json(Colaboradores)
    },

    async create(request, response) {
        const { nome, email, cpf, tipo } = request.body;
        const id = crypto.randomBytes(5).toString('HEX');
        await connection('Colaboradores').insert({
            id,
            nome,
            email,
            cpf,
            tipo
        })
        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('Colaboradores').where('id', id).del();

        return response.json({ id });
    },  

    async update(request, response) {
        const { id, nome, email, cpf, tipo } = request.body;
        await connection('Colaboradores').where('id', id).update({
            nome: nome,
            email: email,
            cpf: cpf,
            tipo: tipo         
        })
        return response.json({ id });
    },
}