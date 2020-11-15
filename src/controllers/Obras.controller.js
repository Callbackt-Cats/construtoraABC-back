const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const Obras = await connection('Obras').select('*');
        return response.json(Obras)
    },

    async create(request, response) {
        const { endereco, localizacao, descricao, valor, idImovel, idEngenheiro } = request.body;
        const codigo = crypto.randomBytes(5).toString('HEX');
        await connection('Obras').insert({
            codigo,
            endereco,
            localizacao,
            descricao,
            valor,
            idImovel,
            idEngenheiro
        })
        return response.json({ codigo });
    },

    async delete(request, response) {
        const { codigo } = request.params;

        await connection('Obras').where('codigo', codigo).del();

        return response.json({ codigo });
    },  

    async update(request, response) {
        const  { codigo, endereco, localizacao, descricao, valor, idImovel, idEngenheiro  } = request.body;
        await connection('Obras').where('codigo', codigo).update({
            codigo: codigo,
            endereco: endereco,
            localizacao: localizacao,
            descricao: descricao,
            valor: valor,
            idImovel: idImovel,
            idEngenheiro: idEngenheiro  
        })
        return response.json({ codigo });
    },
}